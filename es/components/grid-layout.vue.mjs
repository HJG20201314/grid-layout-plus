import { defineComponent as Q, reactive as H, ref as _, onBeforeMount as Z, onMounted as ee, nextTick as m, onBeforeUnmount as te, watch as s, provide as M, toRefs as F, createElementBlock as I, openBlock as z, normalizeStyle as ae, renderSlot as T, withDirectives as oe, Fragment as ie, renderList as le, createBlock as ne, mergeProps as re, withCtx as se, createVNode as ue, vShow as de } from "vue";
import W from "./grid-item.vue.mjs";
import { useResize as ce } from "@vexip-ui/hooks";
import { createEventEmitter as fe, debounce as pe, isNull as w } from "@vexip-ui/utils";
import { validateLayout as me, compact as B, LAYOUT_KEY as ge, EMITTER_KEY as ye, bottom as he, getLayoutItem as O, moveElement as ve, getAllCollisions as we, cloneLayout as Be } from "../helpers/common.mjs";
import { getBreakpointFromWidth as xe, getColsFromBreakpoint as Le, findOrGenerateResponsiveLayout as ke } from "../helpers/responsive.mjs";
const De = /* @__PURE__ */ Q({
  __name: "grid-layout",
  props: {
    autoSize: { type: Boolean, default: !0 },
    colNum: { default: 12 },
    rowHeight: { default: 150 },
    maxRows: { default: 1 / 0 },
    margin: { default: () => [10, 10] },
    isDraggable: { type: Boolean, default: !0 },
    isResizable: { type: Boolean, default: !0 },
    isMirrored: { type: Boolean, default: !1 },
    isBounded: { type: Boolean, default: !1 },
    useCssTransforms: { type: Boolean, default: !0 },
    verticalCompact: { type: Boolean, default: !0 },
    restoreOnDrag: { type: Boolean, default: !1 },
    layout: {},
    responsive: { type: Boolean, default: !1 },
    responsiveLayouts: { default: () => ({}) },
    transformScale: { default: 1 },
    breakpoints: { default: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }) },
    cols: { default: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }) },
    preventCollision: { type: Boolean, default: !1 },
    useStyleCursor: { type: Boolean, default: !0 }
  },
  emits: [
    "layout-before-mount",
    "layout-mounted",
    "layout-updated",
    "breakpoint-changed",
    "update:layout",
    "layout-ready"
  ],
  setup(Y, { expose: N, emit: $ }) {
    const a = Y, u = $, t = H({
      /**
       * state：运行时状态记录，包含尺寸、占位、断点缓存与原始布局备份
       * width: 容器当前宽度（用于断点判断）
       * mergedStyle: 传递到根节点的样式对象（主要包含动态高度）
       * lastLayoutLength: 上次布局项数量用于监测增删
       * isDragging: 是否当前存在拖拽或缩放占位显示
       * placeholder: 拖拽/缩放过程中的可视占位项（不参与布局压缩）
       * layouts: 响应式断点对应的布局缓存集合
       * lastBreakpoint: 上一次生效的断点名称（用于比较是否切换）
       * originalLayout: 初始布局副本（响应式回退时需要）
       */
      width: -1,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: !1,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: ""
      },
      layouts: {},
      // array to store all layouts from different breakpoints
      lastBreakpoint: null,
      // store last active breakpoint
      originalLayout: null
      // store original Layout
    }), k = /* @__PURE__ */ new Map(), o = _(a.layout), g = _(), { observeResize: A, unobserveResize: U } = ce(), r = fe();
    r.on("resizeEvent", q), r.on("dragEvent", G), Z(() => {
      u("layout-before-mount", o.value);
    }), ee(() => {
      u("layout-mounted", o.value), m(() => {
        me(o.value), t.originalLayout = o.value, m(() => {
          D(), g.value && A(g.value, pe(C, 16)), B(o.value, a.verticalCompact), u("layout-updated", o.value), y(), C();
        });
      });
    }), te(() => {
      r.clearAll(), g.value && U(g.value);
    });
    function q(e, n, l, f, d, c) {
      S(e, n, l, f, d, c);
    }
    function G(e, n, l, f, d, c) {
      E(e, n, l, f, d, c);
    }
    s(
      () => t.width,
      (e, n) => {
        m(() => {
          r.emit("updateWidth", e), n === -1 && m(() => {
            u("layout-ready", o.value);
          }), y();
        });
      }
    ), s(
      () => [a.layout, a.layout.length],
      () => {
        o.value = a.layout, R();
      }
    ), s(
      () => a.colNum,
      (e) => {
        r.emit("setColNum", e);
      }
    ), s(
      () => a.rowHeight,
      (e) => {
        r.emit("setRowHeight", e);
      }
    ), s(
      () => a.isDraggable,
      (e) => {
        r.emit("setDraggable", e);
      }
    ), s(
      () => a.isResizable,
      (e) => {
        r.emit("setResizable", e);
      }
    ), s(
      () => a.isBounded,
      (e) => {
        r.emit("setBounded", e);
      }
    ), s(
      () => a.transformScale,
      (e) => {
        r.emit("setTransformScale", e);
      }
    ), s(
      () => a.responsive,
      (e) => {
        e || (u("update:layout", t.originalLayout), r.emit("setColNum", a.colNum)), C();
      }
    ), s(
      () => a.maxRows,
      (e) => {
        r.emit("setMaxRows", e);
      }
    ), s([() => a.margin, () => a.margin[1]], y), M(
      ge,
      H({
        ...F(a),
        ...F(t),
        increaseItem: K,
        decreaseItem: j
      })
    ), M(ye, r), N({ state: t, getItem: P, resizeEvent: S, dragEvent: E, layoutUpdate: R });
    function K(e) {
      k.set(e.i, e);
    }
    function j(e) {
      k.delete(e.i);
    }
    function P(e) {
      return k.get(e);
    }
    function R() {
      if (!w(o.value) && !w(t.originalLayout)) {
        if (o.value.length !== t.originalLayout.length) {
          const e = J(o.value, t.originalLayout);
          if (e.length > 0)
            if (o.value.length > t.originalLayout.length)
              t.originalLayout = t.originalLayout.concat(e);
            else {
              const n = new Set(e.map((l) => l.i));
              t.originalLayout = t.originalLayout.filter((l) => !n.has(l.i));
            }
          t.lastLayoutLength = o.value.length, D();
        }
        B(o.value, a.verticalCompact), r.emit("updateWidth", t.width), y(), u("layout-updated", o.value);
      }
    }
    function y() {
      t.mergedStyle = {
        height: V()
      };
    }
    function C() {
      g.value && (t.width = g.value.offsetWidth), r.emit("resizeEvent");
    }
    function V() {
      if (!a.autoSize) return;
      const e = parseFloat(a.margin[1]);
      return he(o.value) * (a.rowHeight + e) + e + "px";
    }
    let b;
    function E(e, n, l, f, d, c) {
      let i = O(o.value, n);
      w(i) && (i = { h: 0, w: 0, x: 0, y: 0, i: "" }), e === "dragstart" && !a.verticalCompact && (b = o.value.reduce(
        (v, { i: x, x: p, y: h }) => ({
          ...v,
          [x]: { x: p, y: h }
        }),
        {}
      )), e === "dragmove" || e === "dragstart" ? (t.placeholder.i = n, t.placeholder.x = i.x, t.placeholder.y = i.y, t.placeholder.w = c, t.placeholder.h = d, m(() => {
        t.isDragging = !0;
      }), r.emit("updateWidth", t.width)) : m(() => {
        t.isDragging = !1;
      }), o.value = ve(o.value, i, l, f, !0, a.preventCollision), a.restoreOnDrag ? (i.static = !0, B(o.value, a.verticalCompact, b), i.static = !1) : B(o.value, a.verticalCompact), r.emit("compact"), y(), e === "dragend" && (b = void 0, u("layout-updated", o.value));
    }
    function S(e, n, l, f, d, c) {
      let i = O(o.value, n);
      w(i) && (i = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let v;
      if (a.preventCollision) {
        const x = we(o.value, { ...i, w: c, h: d }).filter(
          (p) => p.i !== i.i
        );
        if (v = x.length > 0, v) {
          let p = 1 / 0, h = 1 / 0;
          x.forEach((L) => {
            L.x > i.x && (p = Math.min(p, L.x)), L.y > i.y && (h = Math.min(h, L.y));
          }), Number.isFinite(p) && (i.w = p - i.x), Number.isFinite(h) && (i.h = h - i.y);
        }
      }
      v || (i.w = c, i.h = d), e === "resizestart" || e === "resizemove" ? (t.placeholder.i = n, t.placeholder.x = l, t.placeholder.y = f, t.placeholder.w = i.w, t.placeholder.h = i.h, m(() => {
        t.isDragging = !0;
      }), r.emit("updateWidth", t.width)) : e && m(() => {
        t.isDragging = !1;
      }), a.responsive && X(), B(o.value, a.verticalCompact), r.emit("compact"), y(), e === "resizeend" && u("layout-updated", o.value);
    }
    function X() {
      const e = xe(a.breakpoints, t.width);
      if (e === t.lastBreakpoint)
        return;
      const n = Le(e, a.cols);
      !w(t.lastBreakpoint) && !t.layouts[t.lastBreakpoint] && (t.layouts[t.lastBreakpoint] = Be(o.value));
      const l = ke(
        t.originalLayout,
        t.layouts,
        a.breakpoints,
        e,
        t.lastBreakpoint,
        n,
        a.verticalCompact
      );
      t.layouts[e] = l, t.lastBreakpoint !== e && u("breakpoint-changed", e, l), o.value = l, u("update:layout", l), t.lastBreakpoint = e, r.emit("setColNum", n);
    }
    function D() {
      t.layouts = Object.assign({}, a.responsiveLayouts);
    }
    function J(e, n) {
      const l = new Set(n.map((i) => i.i)), f = new Set(e.map((i) => i.i)), d = e.filter((i) => !l.has(i.i)), c = n.filter((i) => !f.has(i.i));
      return d.concat(c);
    }
    return (e, n) => (z(), I("div", {
      ref_key: "wrapper",
      ref: g,
      class: "vgl-layout",
      style: ae(t.mergedStyle)
    }, [
      e.$slots.default ? T(e.$slots, "default", { key: 0 }) : (z(!0), I(ie, { key: 1 }, le(o.value, (l) => (z(), ne(W, re({
        key: l.i,
        ref_for: !0
      }, l), {
        default: se(() => [
          T(e.$slots, "item", {
            item: l
          })
        ]),
        _: 2
      }, 1040))), 128)),
      oe(ue(W, {
        class: "vgl-item--placeholder",
        x: t.placeholder.x,
        y: t.placeholder.y,
        w: t.placeholder.w,
        h: t.placeholder.h,
        i: t.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [de, t.isDragging]
      ])
    ], 4));
  }
});
export {
  De as default
};
//# sourceMappingURL=grid-layout.vue.mjs.map
