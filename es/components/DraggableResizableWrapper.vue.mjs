import { defineComponent as I, ref as r, computed as A, watch as E, onMounted as T, onUnmounted as q, createElementBlock as H, openBlock as W, renderSlot as X, normalizeProps as Y, guardReactiveProps as U } from "vue";
import { throttle as z } from "@vexip-ui/utils";
import { makeElementDraggableResizable as V } from "../utils/interact-helper.mjs";
import { parsePositionValue as O, parseCssSize as P } from "../utils/css-units.mjs";
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
  setup(R, { expose: x, emit: B }) {
    const i = R, g = B, l = r(), a = r(typeof i.initialX == "number" ? i.initialX : 0), n = r(typeof i.initialY == "number" ? i.initialY : 0), u = r(typeof i.initialWidth == "number" ? i.initialWidth : 200), o = r(typeof i.initialHeight == "number" ? i.initialHeight : 150), m = r(!1), c = r(!1), h = r({});
    let s = null, d = null, y = null, b = null;
    const f = [], D = A(() => ({
      x: a.value,
      y: n.value,
      width: u.value,
      height: o.value,
      isDragging: m.value,
      isResizing: c.value,
      activeEdges: h.value
    })), k = () => ({
      onDrag: (e) => {
        e.type === "dragmove" ? requestAnimationFrame(() => {
          a.value = e.left, n.value = e.top, g("dragMove", e);
        }) : (e.type === "dragstart" ? (m.value = !0, g("dragStart", e)) : e.type === "dragend" && (m.value = !1, g("dragEnd", e)), a.value = e.left, n.value = e.top);
      },
      onResize: (e) => {
        e.type === "resizemove" ? requestAnimationFrame(() => {
          u.value = e.width, o.value = e.height, a.value = e.left, n.value = e.top, g("resizeMove", e);
        }) : (e.type === "resizestart" ? (c.value = !0, g("resizeStart", e)) : e.type === "resizeend" && (c.value = !1, g("resizeEnd", e)), u.value = e.width, o.value = e.height, a.value = e.left, n.value = e.top, h.value = e.edges || {});
      }
    }), C = A(() => ({
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
      const e = k(), t = V(
        l.value,
        C.value,
        e
      );
      s = t.cleanup, d = t.updatePositionAndSize, y = t.updatePosition, b = t.updateSize;
    };
    f.push(
      E(
        [
          () => i.draggable,
          () => i.resizable,
          () => i.dragOptions,
          () => i.resizeOptions
        ],
        () => {
          s && (s(), s = null), S();
        },
        {
          deep: i.watchDeep,
          immediate: i.watchImmediate
        }
      )
    ), f.push(
      E(
        [
          () => i.initialX,
          () => i.initialY,
          () => i.initialWidth,
          () => i.initialHeight
        ],
        ([e, t, p, v]) => {
          d && (d(e, t, p, v), typeof e == "number" && (a.value = e), typeof t == "number" && (n.value = t), typeof p == "number" && (u.value = p), typeof v == "number" && (o.value = v));
        }
      )
    ), T(() => {
      S(), typeof i.initialX == "string" && (a.value = O(i.initialX, l.value, "x")), typeof i.initialY == "string" && (n.value = O(i.initialY, l.value, "y")), typeof i.initialWidth == "string" && (u.value = P(i.initialWidth, l.value, "width")), typeof i.initialHeight == "string" && (o.value = P(i.initialHeight, l.value, "height"));
    });
    const F = z((e, t, p, v) => {
      d && (d(e, t, p, v), typeof e == "number" && (a.value = e), typeof t == "number" && (n.value = t), typeof p == "number" && (u.value = p), typeof v == "number" && (o.value = v));
    }, 16), _ = z((e, t) => {
      y && (y(e, t), typeof e == "number" && (a.value = e), typeof t == "number" && (n.value = t));
    }, 16), M = z((e, t) => {
      b && (b(e, t), typeof e == "number" && (u.value = e), typeof t == "number" && (o.value = t));
    }, 16);
    return q(() => {
      s && (s(), s = null), f != null && f.length && (f.forEach((e) => e()), f.length = 0), d = null, y = null, b = null;
    }), x({
      elementRef: l,
      x: a,
      y: n,
      width: u,
      height: o,
      isDragging: m,
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
      X(e.$slots, "default", Y(U(D.value)))
    ], 512));
  }
});
export {
  K as default
};
//# sourceMappingURL=DraggableResizableWrapper.vue.mjs.map
