#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// 检查是否在 node_modules 中被安装（即作为依赖包）
function isInstalledAsDependency() {
  const currentDir = process.cwd()
  return currentDir.includes('node_modules')
}

// 检查必要的构建产物是否存在
function hasBuildArtifacts() {
  const requiredPaths = [
    'dist/index.d.ts',
    'dist/grid-layout-plus.mjs',
    'dist/grid-layout-plus.cjs',
    'es/index.mjs',
    'lib/index.js',
  ]
  
  return requiredPaths.every(filePath => {
    const fullPath = path.join(process.cwd(), filePath)
    return fs.existsSync(fullPath)
  })
}

// 执行构建
function runBuild() {
  console.log('🔨 正在构建 grid-layout-plus...')
  
  try {
    // 首先安装依赖
    console.log('📦 正在安装依赖...')
    execSync('pnpm install', { stdio: 'inherit' })
    
    // 然后执行构建
    console.log('🏗️  正在执行构建...')
    execSync('pnpm run build', { stdio: 'inherit' })
    
    console.log('✅ 构建完成！')
  } catch (error) {
    console.error('❌ 构建失败:', error.message)
    process.exit(1)
  }
}

// 主函数
function main() {
  // 只有在作为依赖包安装且缺少构建产物时才构建
  if (isInstalledAsDependency() && !hasBuildArtifacts()) {
    console.log('📦 grid-layout-plus 检测到从 GitHub 安装，正在准备构建...')
    runBuild()
  } else {
    console.log('✅ grid-layout-plus 构建产物已存在，跳过构建。')
  }
}

if (require.main === module) {
  main()
}

module.exports = { main, isInstalledAsDependency, hasBuildArtifacts, runBuild }