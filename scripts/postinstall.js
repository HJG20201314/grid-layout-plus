#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'
import minimist from 'minimist'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 解析命令行参数
const argv = minimist(process.argv.slice(2))
const ignoreScripts = argv['ignore-scripts'] !== false

// 检查是否从GitHub安装（通过检查是否存在.git目录或package.json中的repository字段）
function isInstalledFromGitHub() {
  const packageDir = path.join(__dirname, '..')
  
  // 检查是否存在.git目录（表示是从源码安装）
  const gitDir = path.join(packageDir, '.git')
  if (fs.existsSync(gitDir)) {
    return true
  }
  
  // 检查package.json中是否有repository字段且是GitHub仓库
  try {
    const packageJsonPath = path.join(packageDir, 'package.json')
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
      return packageJson.repository && packageJson.repository.url && packageJson.repository.url.includes('github.com')
    }
  } catch (error) {
    // 如果读取失败，继续其他检查
  }
  
  return false
}

// 检查是否作为依赖包安装
function isInstalledAsDependency() {
  const currentDir = __dirname
  return currentDir.includes('node_modules')
}

// 检查必要的构建产物是否存在（特别是lib和es目录）
function hasBuildArtifacts() {
  const packageDir = path.join(__dirname, '..')
  
  const requiredPaths = [
    'dist/index.d.ts',
    'dist/grid-layout-plus.mjs',
    'dist/grid-layout-plus.cjs',
    'es/index.mjs',
    'es/components/grid-layout.vue.mjs',
    'es/components/grid-item.vue.mjs',
    'es/components/DraggableResizableWrapper.vue.mjs',
    'lib/index.cjs',
    'lib/components/grid-layout.vue.js',
    'lib/components/grid-item.vue.js',
    'lib/components/DraggableResizableWrapper.vue.js',
  ]
  
  return requiredPaths.every(filePath => {
    const fullPath = path.join(packageDir, filePath)
    return fs.existsSync(fullPath)
  })
}

// 执行构建
function runBuild() {
  console.log('🔨 正在构建 grid-layout-plus...')
  
  try {
    const packageDir = path.join(__dirname, '..')
    
    // 首先安装依赖
    console.log('📦 正在安装依赖...')
    const installCmd = ignoreScripts ? 'pnpm install --ignore-scripts=false' : 'pnpm install'
    execSync(installCmd, { stdio: 'inherit', cwd: packageDir })
    
    // 然后执行构建 - 确保构建所有格式
    console.log('🏗️  正在执行完整构建...')
    
    // 构建 ES 模块格式（包含 lib 和 es 目录）
    console.log('🏗️  正在构建 ES 模块和 CommonJS 格式...')
    execSync('pnpm exec vite build --config vite.config.ts', { stdio: 'inherit', cwd: packageDir })
    
    // 构建完整打包格式（包含 dist 目录）
    console.log('🏗️  正在构建完整打包格式...')
    execSync('pnpm exec vite build --config vite.full.config.ts', { stdio: 'inherit', cwd: packageDir })
    
    console.log('✅ 构建完成！')
  } catch (error) {
    console.error('❌ 构建失败:', error.message)
    process.exit(1)
  }
}

// 主函数
function main() {
  // 如果从GitHub安装，总是确保构建产物完整
  if (isInstalledFromGitHub()) {
    if (!hasBuildArtifacts()) {
      console.log('📦 grid-layout-plus 检测到从 GitHub 安装，缺少构建产物，正在准备构建...')
      runBuild()
    } else {
      console.log('✅ grid-layout-plus 从 GitHub 安装，构建产物已完整存在。')
    }
  } else if (isInstalledAsDependency() && !hasBuildArtifacts()) {
    console.log('📦 grid-layout-plus 检测到从 npm 安装但缺少构建产物，正在准备构建...')
    runBuild()
  } else {
    console.log('✅ grid-layout-plus 构建产物已存在，跳过构建。')
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export { main, isInstalledFromGitHub, isInstalledAsDependency, hasBuildArtifacts, runBuild }