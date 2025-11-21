import { defineComponent as F, ref as r, computed as S, watch as k, onMounted as I, onUnmounted as T, createElementBlock as H, openBlock as W, renderSlot as X, normalizeProps as Y, guardReactiveProps as U } from "vue";
import { makeElementDraggableResizable as V } from "../utils/interact-helper.mjs";
import { parsePositionValue as E, parseCssSize as O } from "../utils/css-units.mjs";
const G = /* @__PURE__ */ F({
  __name: "DraggableResizableWrapper",
  props: {
    draggable: { type: Boolean, default: !0 },
    resizable: { type: Boolean, default: !0 },
    useCssTransforms: { type: Boolean, default: !0 },
    dragOptions: { default: () => ({}) },
    resizeOptions: { default: () => ({}) },
    initialX: { default: 0 },
    initialY: { default: 0 },
    initialWidth: { default: 200 },
    initialHeight: { default: 150 },
    watchDeep: { type: Boolean, default: !1 },
    watchImmediate: { type: Boolean, default: !1 }
  },
  emits: ["dragStart", "dragMove", "dragEnd", "resizeStart", "resizeMove", "resizeEnd"],
  setup(P, { expose: R, emit: x }) {
    const i = P, g = x, a = r(), l = r(typeof i.initialX == "number" ? i.initialX : 0), n = r(typeof i.initialY == "number" ? i.initialY : 0), s = r(typeof i.initialWidth == "number" ? i.initialWidth : 200), u = r(typeof i.initialHeight == "number" ? i.initialHeight : 150), v = r(!1), m = r(!1), h = r({});
    let o = null, c = null, b = null, y = null;
    const p = [], A = S(() => ({
      x: l.value,
      y: n.value,
      width: s.value,
      height: u.value,
      isDragging: v.value,
      isResizing: m.value,
      activeEdges: h.value
    })), B = () => ({
      onDrag: (e) => {
        switch (l.value = e.left, n.value = e.top, v.value = e.type === "dragstart" ? !0 : e.type === "dragend" ? !1 : v.value, e.type) {
          case "dragstart":
            g("dragStart", e);
            break;
          case "dragmove":
            g("dragMove", e);
            break;
          case "dragend":
            g("dragEnd", e);
            break;
        }
      },
      onResize: (e) => {
        switch (s.value = e.width, u.value = e.height, l.value = e.left, n.value = e.top, m.value = e.type === "resizestart" ? !0 : e.type === "resizeend" ? !1 : m.value, h.value = e.edges || {}, e.type) {
          case "resizestart":
            g("resizeStart", e);
            break;
          case "resizemove":
            g("resizeMove", e);
            break;
          case "resizeend":
            g("resizeEnd", e);
            break;
        }
      }
    }), D = S(() => ({
      draggable: i.draggable,
      resizable: i.resizable,
      useCssTransforms: i.useCssTransforms,
      dragOptions: i.dragOptions,
      resizeOptions: i.resizeOptions,
      x: i.initialX,
      y: i.initialY,
      width: i.initialWidth,
      height: i.initialHeight
    })), z = () => {
      if (!a.value) return;
      a.value.setAttribute("data-x", i.initialX.toString()), a.value.setAttribute("data-y", i.initialY.toString()), a.value.setAttribute("data-width", i.initialWidth.toString()), a.value.setAttribute("data-height", i.initialHeight.toString());
      const e = B(), t = V(
        a.value,
        D.value,
        e
      );
      o = t.cleanup, c = t.updatePositionAndSize, b = t.updatePosition, y = t.updateSize;
    };
    p.push(
      k(
        [
          () => i.draggable,
          () => i.resizable,
          () => i.dragOptions,
          () => i.resizeOptions
        ],
        () => {
          o && (o(), o = null), z();
        },
        {
          deep: i.watchDeep,
          immediate: i.watchImmediate
        }
      )
    ), p.push(
      k(
        [
          () => i.initialX,
          () => i.initialY,
          () => i.initialWidth,
          () => i.initialHeight
        ],
        ([e, t, f, d]) => {
          c && (c(e, t, f, d), typeof e == "number" && (l.value = e), typeof t == "number" && (n.value = t), typeof f == "number" && (s.value = f), typeof d == "number" && (u.value = d));
        }
      )
    ), I(() => {
      z(), typeof i.initialX == "string" && (l.value = E(i.initialX, a.value, "x")), typeof i.initialY == "string" && (n.value = E(i.initialY, a.value, "y")), typeof i.initialWidth == "string" && (s.value = O(i.initialWidth, a.value, "width")), typeof i.initialHeight == "string" && (u.value = O(i.initialHeight, a.value, "height"));
    });
    const C = (e, t, f, d) => {
      c && (c(e, t, f, d), typeof e == "number" && (l.value = e), typeof t == "number" && (n.value = t), typeof f == "number" && (s.value = f), typeof d == "number" && (u.value = d));
    }, _ = (e, t) => {
      b && (b(e, t), typeof e == "number" && (l.value = e), typeof t == "number" && (n.value = t));
    }, M = (e, t) => {
      y && (y(e, t), typeof e == "number" && (s.value = e), typeof t == "number" && (u.value = t));
    };
    return T(() => {
      o && (o(), o = null), p != null && p.length && (p.forEach((e) => e()), p.length = 0), c = null, b = null, y = null;
    }), R({
      elementRef: a,
      x: l,
      y: n,
      width: s,
      height: u,
      isDragging: v,
      isResizing: m,
      activeEdges: h,
      updatePositionAndSize: C,
      updatePosition: _,
      updateSize: M
    }), (e, t) => (W(), H("div", {
      ref_key: "elementRef",
      ref: a,
      class: "draggable-resizable-wrapper"
    }, [
      X(e.$slots, "default", Y(U(A.value)))
    ], 512));
  }
});
export {
  G as default
};
//# sourceMappingURL=DraggableResizableWrapper.vue.mjs.map
