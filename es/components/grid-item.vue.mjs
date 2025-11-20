import { defineComponent as Ae, inject as ve, shallowRef as Oe, reactive as we, ref as Pe, toRef as Ye, onBeforeMount as Le, onMounted as Xe, watchEffect as $e, onBeforeUnmount as Ge, computed as H, watch as z, createElementBlock as W, openBlock as B, normalizeStyle as je, normalizeClass as C, renderSlot as Ke, createCommentVNode as I } from "vue";
import { isNull as x, nextTickOnce as f, throttle as Re } from "@vexip-ui/utils";
import { LAYOUT_KEY as Ve, EMITTER_KEY as qe, useNameHelper as Je, setTransformRtl as Qe, setTransform as Ze, setTopRight as Ue, setTopLeft as et } from "../helpers/common.mjs";
import { getControlPosition as ye, createCoreData as xe } from "../helpers/draggable.mjs";
import { getColsFromBreakpoint as tt } from "../helpers/responsive.mjs";
import { getDocumentDir as He } from "../helpers/dom.mjs";
import Se from "interactjs";
const gt = /* @__PURE__ */ Ae({
  __name: "grid-item",
  props: {
    isDraggable: { type: Boolean, default: void 0 },
    isResizable: { type: Boolean, default: void 0 },
    isBounded: { type: Boolean, default: void 0 },
    static: { type: Boolean, default: !1 },
    minH: { default: 1 },
    minW: { default: 1 },
    maxH: { default: 1 / 0 },
    maxW: { default: 1 / 0 },
    x: {},
    y: {},
    w: {},
    h: {},
    i: {},
    dragIgnoreFrom: { default: "a, button" },
    dragAllowFrom: { default: void 0 },
    resizeIgnoreFrom: { default: "a, button" },
    preserveAspectRatio: { type: Boolean, default: !1 },
    dragOption: { default: () => ({}) },
    resizeOption: { default: () => ({}) }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved"],
  setup(Ee, { expose: Me, emit: We }) {
    const i = Ee, _ = We, l = ve(Ve), d = ve(qe);
    if (!l)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const c = Oe(null), e = we({
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: void 0,
      resizable: void 0,
      bounded: void 0,
      transformScale: 1,
      useCssTransforms: !0,
      useStyleCursor: !0,
      isDragging: !1,
      dragging: {
        top: -1,
        left: -1
      },
      isResizing: !1,
      resizing: {
        width: -1,
        height: -1
      },
      style: {},
      rtl: !1,
      // 新增：当前正在被缩放的边，用于视觉高亮
      activeResizeEdges: {
        top: !1,
        right: !1,
        bottom: !1,
        left: !1
      },
      // 新增：有效的可缩放边（根据最终 resize 配置计算）
      enabledResizeEdges: {
        top: !1,
        right: !1,
        bottom: !1,
        left: !1
      }
    });
    let K = !1, V = !1, q = NaN, J = NaN, O = NaN, P = NaN, Q = -1, Z = -1, U = -1, ee = -1, h = i.x, w = i.y, p = i.w, R = i.h;
    const D = Pe(), te = we({
      i: Ye(i, "i"),
      state: e,
      wrapper: D,
      calcXY: L
    });
    function ie(t) {
      Te(t);
    }
    function ae() {
      pe();
    }
    function se(t) {
      x(i.isDraggable) && (e.draggable = t);
    }
    function re(t) {
      x(i.isResizable) && (e.resizable = t);
    }
    function oe(t) {
      x(i.isBounded) && (e.bounded = t);
    }
    function ne(t) {
      e.transformScale = t;
    }
    function le(t) {
      e.rowHeight = t;
    }
    function ge(t) {
      e.maxRows = t;
    }
    function de() {
      e.rtl = He() === "rtl", pe();
    }
    function fe(t) {
      e.cols = Math.floor(t);
    }
    l.increaseItem(te), Le(() => {
      e.rtl = He() === "rtl";
    }), Xe(() => {
      l.responsive && l.lastBreakpoint ? e.cols = tt(l.lastBreakpoint, l.cols) : e.cols = l.colNum, e.rowHeight = l.rowHeight, e.containerWidth = l.width !== null ? l.width : 100, e.margin = l.margin !== void 0 ? l.margin.map(Number) : [10, 10], e.maxRows = l.maxRows, x(i.isDraggable) ? e.draggable = l.isDraggable : e.draggable = i.isDraggable, x(i.isResizable) ? e.resizable = l.isResizable : e.resizable = i.isResizable, x(i.isBounded) ? e.bounded = l.isBounded : e.bounded = i.isBounded, e.transformScale = l.transformScale, e.useCssTransforms = l.useCssTransforms, e.useStyleCursor = l.useStyleCursor, $e(() => {
        h = i.x, w = i.y, R = i.h, p = i.w, f(E);
      }), d.on("updateWidth", ie), d.on("compact", ae), d.on("setDraggable", se), d.on("setResizable", re), d.on("setBounded", oe), d.on("setTransformScale", ne), d.on("setRowHeight", le), d.on("setMaxRows", ge), d.on("directionchange", de), d.on("setColNum", fe);
    }), Ge(() => {
      d.off("updateWidth", ie), d.off("compact", ae), d.off("setDraggable", se), d.off("setResizable", re), d.off("setBounded", oe), d.off("setTransformScale", ne), d.off("setRowHeight", le), d.off("setMaxRows", ge), d.off("directionchange", de), d.off("setColNum", fe), c.value && (c.value.unset(), c.value = null), l.decreaseItem(te);
    }), Me({ state: e, wrapper: D });
    const Be = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, S = H(() => e.resizable && !i.static), m = H(() => l.isMirrored ? !e.rtl : e.rtl), Ce = H(() => (e.draggable || e.resizable) && !i.static), v = Je("item"), _e = H(() => ({
      [v.b()]: !0,
      [v.bm("resizable")]: S.value,
      // 可缩放
      [v.bm("static")]: i.static,
      // 静态锁定
      [v.bm("resizing")]: e.isResizing,
      // 缩放中
      [v.bm("dragging")]: e.isDragging,
      // 拖拽中
      [v.bm("transform")]: e.useCssTransforms,
      // 使用 transform 布局模式
      [v.bm("rtl")]: m.value,
      // RTL 渲染修饰
      [v.bm("no-touch")]: Be && Ce.value
      // Android 下禁用触摸样式修饰
    })), F = H(() => [v.be("resizer"), m.value && v.bem("resizer", "rtl")].filter(Boolean)), De = H(() => {
      const t = i.resizeOption;
      return !(!t || !t.edges);
    }), Ne = H(() => S.value && !De.value);
    z(
      () => i.isDraggable,
      (t) => {
        e.draggable = t;
      }
    ), z(
      () => i.static,
      () => {
        f(ze), f(M);
      }
    ), z(
      () => e.draggable,
      () => {
        f(ze);
      }
    ), z(
      () => i.isResizable,
      (t) => {
        e.resizable = t;
      }
    ), z(
      () => i.isBounded,
      (t) => {
        e.bounded = t;
      }
    ), z(
      () => e.resizable,
      () => {
        f(M);
      }
    ), z(
      () => e.rowHeight,
      () => {
        f(E), f(Y);
      }
    ), z([() => e.cols, () => e.containerWidth], () => {
      f(M), f(E), f(Y);
    }), z([() => i.minH, () => i.maxH, () => i.minW, () => i.maxW], () => {
      f(M);
    }), z(m, () => {
      f(M), f(E);
    }), z([() => l.margin, () => l.margin[0], () => l.margin[1]], () => {
      const t = l.margin;
      !t || t[0] === e.margin[0] && t[1] === e.margin[1] || (e.margin = t.map(Number), f(E), f(Y));
    });
    function E() {
      i.x + i.w > e.cols ? (h = 0, p = i.w > e.cols ? e.cols : i.w) : (h = i.x, p = i.w);
      const t = N(h, w, p, R);
      e.isDragging && (t.top = e.dragging.top, m.value ? t.right = e.dragging.left : t.left = e.dragging.left), e.isResizing && (t.width = e.resizing.width, t.height = e.resizing.height);
      let s;
      e.useCssTransforms ? m.value ? s = Qe(t.top, t.right, t.width, t.height) : s = Ze(t.top, t.left, t.width, t.height) : m.value ? s = Ue(t.top, t.right, t.width, t.height) : s = et(t.top, t.left, t.width, t.height), e.style = s;
    }
    function Y() {
      const t = {};
      for (const s of ["width", "height"]) {
        const o = e.style[s].match(/^(\d+)px$/);
        if (!o)
          return;
        t[s] = o[1];
      }
      _("container-resized", i.i, i.h, i.w, t.height, t.width);
    }
    function ce(t) {
      if (i.static) return;
      const s = t.type;
      if (s === "resizestart" && e.isResizing || s !== "resizestart" && !e.isResizing)
        return;
      const n = ye(t);
      if (x(n)) return;
      const { x: o, y: g } = n, r = { width: 0, height: 0 };
      let a;
      switch (t.edges && (e.activeResizeEdges.top = !!t.edges.top, e.activeResizeEdges.right = !!t.edges.right, e.activeResizeEdges.bottom = !!t.edges.bottom, e.activeResizeEdges.left = !!t.edges.left), s) {
        case "resizestart": {
          M(), Q = p, Z = R, a = N(h, w, p, R), r.width = a.width, r.height = a.height, e.resizing = r, e.isResizing = !0;
          break;
        }
        case "resizemove": {
          !t.edges.right && !t.edges.left && (O = o), !t.edges.top && !t.edges.bottom && (P = g);
          const u = xe(O, P, o, g);
          m.value ? r.width = e.resizing.width - u.deltaX / e.transformScale : r.width = e.resizing.width + u.deltaX / e.transformScale, r.height = e.resizing.height + u.deltaY / e.transformScale, e.resizing = r;
          break;
        }
        case "resizeend": {
          a = N(h, w, p, R), r.width = a.width, r.height = a.height, e.resizing = { width: -1, height: -1 }, e.isResizing = !1, e.activeResizeEdges.top = !1, e.activeResizeEdges.right = !1, e.activeResizeEdges.bottom = !1, e.activeResizeEdges.left = !1;
          break;
        }
      }
      a = ke(r.height, r.width), a.w < i.minW && (a.w = i.minW), a.w > i.maxW && (a.w = i.maxW), a.h < i.minH && (a.h = i.minH), a.h > i.maxH && (a.h = i.maxH), a.h < 1 && (a.h = 1), a.w < 1 && (a.w = 1), O = o, P = g, (p !== a.w || R !== a.h) && _("resize", i.i, a.h, a.w, r.height, r.width), t.type === "resizeend" && (Q !== p || Z !== R) && _("resized", i.i, a.h, a.w, r.height, r.width), d.emit("resizeEvent", t.type, i.i, h, w, a.h, a.w);
    }
    function me(t) {
      if (i.static || e.isResizing) return;
      const s = t.type;
      if (s === "dragstart" && e.isDragging || s !== "dragstart" && !e.isDragging)
        return;
      const n = ye(t);
      if (x(n)) return;
      const { x: o, y: g } = n, r = t.target;
      if (!r.offsetParent) return;
      const a = { top: 0, left: 0 };
      switch (s) {
        case "dragstart": {
          U = h, ee = w;
          const b = r.offsetParent.getBoundingClientRect(), y = r.getBoundingClientRect(), k = y.left / e.transformScale, T = b.left / e.transformScale, X = y.right / e.transformScale, $ = b.right / e.transformScale, G = y.top / e.transformScale, j = b.top / e.transformScale;
          m.value ? a.left = (X - $) * -1 : a.left = k - T, a.top = G - j, e.dragging = a, e.isDragging = !0;
          break;
        }
        case "dragmove": {
          const b = xe(q, J, o, g);
          if (m.value ? a.left = e.dragging.left - b.deltaX / e.transformScale : a.left = e.dragging.left + b.deltaX / e.transformScale, a.top = e.dragging.top + b.deltaY / e.transformScale, e.bounded) {
            const y = r.offsetParent.clientHeight - ue(i.h, e.rowHeight, e.margin[1]);
            a.top = he(a.top, 0, y);
            const k = A(), T = e.containerWidth - ue(i.w, k, e.margin[0]);
            a.left = he(a.left, 0, T);
          }
          e.dragging = a;
          break;
        }
        case "dragend": {
          const b = r.offsetParent.getBoundingClientRect(), y = r.getBoundingClientRect(), k = y.left / e.transformScale, T = b.left / e.transformScale, X = y.right / e.transformScale, $ = b.right / e.transformScale, G = y.top / e.transformScale, j = b.top / e.transformScale;
          m.value ? a.left = (X - $) * -1 : a.left = k - T, a.top = G - j, e.dragging = { top: -1, left: -1 }, e.isDragging = !1;
          break;
        }
      }
      let u;
      m.value, u = L(a.top, a.left), q = o, J = g, (h !== u.x || w !== u.y) && _("move", i.i, u.x, u.y), t.type === "dragend" && (U !== h || ee !== w) && _("moved", i.i, u.x, u.y), d.emit("dragEvent", t.type, i.i, u.x, u.y, R, p);
    }
    function N(t, s, n, o) {
      const g = A();
      let r;
      return m.value ? r = {
        right: Math.round(g * t + (t + 1) * e.margin[0]),
        top: Math.round(e.rowHeight * s + (s + 1) * e.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: n === 1 / 0 ? n : Math.round(g * n + Math.max(0, n - 1) * e.margin[0]),
        height: o === 1 / 0 ? o : Math.round(e.rowHeight * o + Math.max(0, o - 1) * e.margin[1])
      } : r = {
        left: Math.round(g * t + (t + 1) * e.margin[0]),
        top: Math.round(e.rowHeight * s + (s + 1) * e.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: n === 1 / 0 ? n : Math.round(g * n + Math.max(0, n - 1) * e.margin[0]),
        height: o === 1 / 0 ? o : Math.round(e.rowHeight * o + Math.max(0, o - 1) * e.margin[1])
      }, r;
    }
    function L(t, s) {
      const n = A();
      let o = Math.round((s - e.margin[0]) / (n + e.margin[0])), g = Math.round((t - e.margin[1]) / (e.rowHeight + e.margin[1]));
      return o = Math.max(Math.min(o, e.cols - p), 0), g = Math.max(Math.min(g, e.maxRows - R), 0), { x: o, y: g };
    }
    function A() {
      return (e.containerWidth - e.margin[0] * (e.cols + 1)) / e.cols;
    }
    function ue(t, s, n) {
      return Number.isFinite(t) ? Math.round(s * t + Math.max(0, t - 1) * n) : t;
    }
    function he(t, s, n) {
      return Math.max(Math.min(t, n), s);
    }
    function ke(t, s, n = !1) {
      const o = A();
      let g = Math.round((s + e.margin[0]) / (o + e.margin[0])), r = 0;
      return n ? r = Math.ceil((t + e.margin[1]) / (e.rowHeight + e.margin[1])) : r = Math.round((t + e.margin[1]) / (e.rowHeight + e.margin[1])), g = Math.max(Math.min(g, e.cols - h), 0), r = Math.max(Math.min(r, e.maxRows - w), 0), { w: g, h: r };
    }
    function Te(t, s) {
      e.containerWidth = t;
    }
    function pe() {
      E();
    }
    function be() {
      !c.value && D.value && (c.value = Se(D.value), e.useStyleCursor || c.value.styleCursor(!1));
    }
    const Ie = Re(me);
    function ze() {
      if (be(), !!c.value)
        if (e.draggable && !i.static) {
          const t = {
            ignoreFrom: i.dragIgnoreFrom,
            allowFrom: i.dragAllowFrom,
            ...i.dragOption
          };
          c.value.draggable(t), K || (K = !0, c.value.on("dragstart dragmove dragend", (s) => {
            s.type === "dragmove" ? Ie(s) : me(s);
          }));
        } else
          c.value.draggable({ enabled: !1 });
    }
    const Fe = Re(ce);
    function M() {
      if (be(), !!c.value)
        if (e.resizable && !i.static) {
          const t = N(0, 0, i.maxW, i.maxH), s = N(0, 0, i.minW, i.minH), n = {
            edges: {
              left: m.value ? `.${F.value[0]}` : !1,
              right: m.value ? !1 : `.${F.value[0]}`,
              bottom: `.${F.value[0]}`,
              top: !1
            },
            ignoreFrom: i.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: s.height * e.transformScale,
                width: s.width * e.transformScale
              },
              max: {
                height: t.height * e.transformScale,
                width: t.width * e.transformScale
              }
            },
            ...i.resizeOption
          };
          i.preserveAspectRatio && (n.modifiers = [Se.modifiers.aspectRatio({ ratio: "preserve" })]), c.value.resizable(n);
          const o = n.edges || {};
          e.enabledResizeEdges.top = !!o.top, e.enabledResizeEdges.right = !!o.right, e.enabledResizeEdges.bottom = !!o.bottom, e.enabledResizeEdges.left = !!o.left, V || (V = !0, c.value.on("resizestart resizemove resizeend", (g) => {
            g.type === "resizemove" ? Fe(g) : ce(g);
          }));
        } else
          c.value.resizable({ enabled: !1 }), e.enabledResizeEdges.top = !1, e.enabledResizeEdges.right = !1, e.enabledResizeEdges.bottom = !1, e.enabledResizeEdges.left = !1;
    }
    return (t, s) => (B(), W("section", {
      ref_key: "wrapper",
      ref: D,
      class: C(_e.value),
      style: je(e.style)
    }, [
      Ke(t.$slots, "default"),
      Ne.value ? (B(), W("span", {
        key: 0,
        class: C(F.value)
      }, null, 2)) : I("", !0),
      S.value ? (B(), W("div", {
        key: 1,
        class: C([
          "vgl-item__edge vgl-item__edge--top",
          [{ "is-enabled": e.enabledResizeEdges.top, "is-active": e.activeResizeEdges.top }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : I("", !0),
      S.value ? (B(), W("div", {
        key: 2,
        class: C([
          "vgl-item__edge vgl-item__edge--right",
          [{ "is-enabled": e.enabledResizeEdges.right, "is-active": e.activeResizeEdges.right }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : I("", !0),
      S.value ? (B(), W("div", {
        key: 3,
        class: C([
          "vgl-item__edge vgl-item__edge--bottom",
          [{ "is-enabled": e.enabledResizeEdges.bottom, "is-active": e.activeResizeEdges.bottom }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : I("", !0),
      S.value ? (B(), W("div", {
        key: 4,
        class: C([
          "vgl-item__edge vgl-item__edge--left",
          [{ "is-enabled": e.enabledResizeEdges.left, "is-active": e.activeResizeEdges.left }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : I("", !0)
    ], 6));
  }
});
export {
  gt as default
};
//# sourceMappingURL=grid-item.vue.mjs.map
