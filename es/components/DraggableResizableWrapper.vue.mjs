import { defineComponent as I, ref as d, computed as A, watch as O, onMounted as T, onUnmounted as q, createElementBlock as H, openBlock as W, renderSlot as X, normalizeProps as Y, guardReactiveProps as U } from "vue";
import { throttle as z } from "@vexip-ui/utils";
import { makeElementDraggableResizable as V } from "../utils/interact-helper.mjs";
import { parsePositionValue as P, parseCssSize as E } from "../utils/css-units.mjs";
const K = /* @__PURE__ */ I({
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
  setup(x, { expose: B, emit: R }) {
    const i = x, g = R, l = d(), a = d(typeof i.initialX == "number" ? i.initialX : 0), n = d(typeof i.initialY == "number" ? i.initialY : 0), o = d(typeof i.initialWidth == "number" ? i.initialWidth : 200), r = d(typeof i.initialHeight == "number" ? i.initialHeight : 150);
    let v = !1, c = !1, h = {}, u = null, m = null, y = null, b = null;
    const s = [], k = A(() => ({
      x: a.value,
      y: n.value,
      width: o.value,
      height: r.value,
      isDragging: v,
      isResizing: c,
      activeEdges: h
    })), C = () => ({
      onDrag: (e) => {
        e.type === "dragmove" ? requestAnimationFrame(() => {
          a.value = e.left, n.value = e.top, g("dragMove", e);
        }) : (e.type === "dragstart" ? (v = !0, g("dragStart", e)) : e.type === "dragend" && (v = !1, g("dragEnd", e)), a.value = e.left, n.value = e.top);
      },
      onResize: (e) => {
        e.type === "resizemove" ? requestAnimationFrame(() => {
          o.value = e.width, r.value = e.height, a.value = e.left, n.value = e.top, g("resizeMove", e);
        }) : (e.type === "resizestart" ? (c = !0, g("resizeStart", e)) : e.type === "resizeend" && (c = !1, g("resizeEnd", e)), o.value = e.width, r.value = e.height, a.value = e.left, n.value = e.top, h = e.edges || {});
      }
    }), D = A(() => ({
      draggable: i.draggable,
      resizable: i.resizable,
      useCssTransforms: i.useCssTransforms,
      dragOptions: i.dragOptions,
      resizeOptions: i.resizeOptions,
      x: i.initialX,
      y: i.initialY,
      width: i.initialWidth,
      height: i.initialHeight
    })), S = () => {
      if (!l.value) return;
      l.value.setAttribute("data-x", i.initialX.toString()), l.value.setAttribute("data-y", i.initialY.toString()), l.value.setAttribute("data-width", i.initialWidth.toString()), l.value.setAttribute("data-height", i.initialHeight.toString());
      const e = C(), t = V(
        l.value,
        D.value,
        e
      );
      u = t.cleanup, m = t.updatePositionAndSize, y = t.updatePosition, b = t.updateSize;
    };
    s.push(
      O(
        [
          () => i.draggable,
          () => i.resizable,
          () => i.dragOptions,
          () => i.resizeOptions
        ],
        () => {
          u && (u(), u = null), S();
        },
        {
          deep: i.watchDeep,
          immediate: i.watchImmediate
        }
      )
    ), s.push(
      O(
        [
          () => i.initialX,
          () => i.initialY,
          () => i.initialWidth,
          () => i.initialHeight
        ],
        ([e, t, f, p]) => {
          m && (m(e, t, f, p), typeof e == "number" && (a.value = e), typeof t == "number" && (n.value = t), typeof f == "number" && (o.value = f), typeof p == "number" && (r.value = p));
        }
      )
    ), T(() => {
      S(), typeof i.initialX == "string" && (a.value = P(i.initialX, l.value, "x")), typeof i.initialY == "string" && (n.value = P(i.initialY, l.value, "y")), typeof i.initialWidth == "string" && (o.value = E(i.initialWidth, l.value, "width")), typeof i.initialHeight == "string" && (r.value = E(i.initialHeight, l.value, "height"));
    });
    const F = z((e, t, f, p) => {
      m && (m(e, t, f, p), typeof e == "number" && (a.value = e), typeof t == "number" && (n.value = t), typeof f == "number" && (o.value = f), typeof p == "number" && (r.value = p));
    }, 16), _ = z((e, t) => {
      y && (y(e, t), typeof e == "number" && (a.value = e), typeof t == "number" && (n.value = t));
    }, 16), M = z((e, t) => {
      b && (b(e, t), typeof e == "number" && (o.value = e), typeof t == "number" && (r.value = t));
    }, 16);
    return q(() => {
      u && (u(), u = null), s != null && s.length && (s.forEach((e) => e()), s.length = 0), m = null, y = null, b = null;
    }), B({
      elementRef: l,
      x: a,
      y: n,
      width: o,
      height: r,
      isDragging: v,
      isResizing: c,
      activeEdges: h,
      updatePositionAndSize: F,
      updatePosition: _,
      updateSize: M
    }), (e, t) => (W(), H("div", {
      ref_key: "elementRef",
      ref: l,
      class: "draggable-resizable-wrapper"
    }, [
      X(e.$slots, "default", Y(U(k.value)))
    ], 512));
  }
});
export {
  K as default
};
//# sourceMappingURL=DraggableResizableWrapper.vue.mjs.map
