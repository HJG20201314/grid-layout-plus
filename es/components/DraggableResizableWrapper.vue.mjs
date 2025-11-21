import { defineComponent as C, ref as l, computed as S, watch as k, onMounted as M, onUnmounted as F, createElementBlock as I, openBlock as T, renderSlot as U, normalizeProps as $, guardReactiveProps as j } from "vue";
import { makeElementDraggableResizable as q } from "../utils/interact-helper.mjs";
const J = /* @__PURE__ */ C({
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
  setup(E, { expose: O, emit: P }) {
    const t = E, f = P, a = l(), r = l(typeof t.initialX == "number" ? t.initialX : 0), n = l(typeof t.initialY == "number" ? t.initialY : 0), d = l(typeof t.initialWidth == "number" ? t.initialWidth : 200), c = l(typeof t.initialHeight == "number" ? t.initialHeight : 150), v = l(!1), m = l(!1), y = l({});
    let s = null, g = null, b = null, z = null;
    const o = [], R = S(() => ({
      x: r.value,
      y: n.value,
      width: d.value,
      height: c.value,
      isDragging: v.value,
      isResizing: m.value,
      activeEdges: y.value
    })), A = () => ({
      onDrag: (e) => {
        switch (r.value = e.left, n.value = e.top, v.value = e.type === "dragstart" ? !0 : e.type === "dragend" ? !1 : v.value, e.type) {
          case "dragstart":
            f("dragStart", e);
            break;
          case "dragmove":
            f("dragMove", e);
            break;
          case "dragend":
            f("dragEnd", e);
            break;
        }
      },
      onResize: (e) => {
        switch (d.value = e.width, c.value = e.height, r.value = e.left, n.value = e.top, m.value = e.type === "resizestart" ? !0 : e.type === "resizeend" ? !1 : m.value, y.value = e.edges || {}, e.type) {
          case "resizestart":
            f("resizeStart", e);
            break;
          case "resizemove":
            f("resizeMove", e);
            break;
          case "resizeend":
            f("resizeEnd", e);
            break;
        }
      }
    }), B = S(() => ({
      draggable: t.draggable,
      resizable: t.resizable,
      useCssTransforms: t.useCssTransforms,
      dragOptions: t.dragOptions,
      resizeOptions: t.resizeOptions,
      x: t.initialX,
      y: t.initialY,
      width: t.initialWidth,
      height: t.initialHeight
    })), h = () => {
      if (!a.value) return;
      a.value.setAttribute("data-x", t.initialX.toString()), a.value.setAttribute("data-y", t.initialY.toString()), a.value.setAttribute("data-width", t.initialWidth.toString()), a.value.setAttribute("data-height", t.initialHeight.toString());
      const e = A(), i = q(
        a.value,
        B.value,
        e
      );
      s = i.cleanup, g = i.updatePositionAndSize, b = i.updatePosition, z = i.updateSize;
    };
    o.push(
      k(
        [
          () => t.draggable,
          () => t.resizable,
          () => t.dragOptions,
          () => t.resizeOptions
        ],
        () => {
          s && (s(), s = null), h();
        },
        {
          deep: t.watchDeep,
          immediate: t.watchImmediate
        }
      )
    ), o.push(
      k(
        [
          () => t.initialX,
          () => t.initialY,
          () => t.initialWidth,
          () => t.initialHeight
        ],
        ([e, i, u, p]) => {
          g && (g(e, i, u, p), typeof e == "number" && (r.value = e), typeof i == "number" && (n.value = i), typeof u == "number" && (d.value = u), typeof p == "number" && (c.value = p));
        }
      )
    ), M(() => {
      h();
    });
    const D = (e, i, u, p) => {
      g && (g(e, i, u, p), typeof e == "number" && (r.value = e), typeof i == "number" && (n.value = i), typeof u == "number" && (d.value = u), typeof p == "number" && (c.value = p));
    }, x = (e, i) => {
      b && (b(e, i), typeof e == "number" && (r.value = e), typeof i == "number" && (n.value = i));
    }, _ = (e, i) => {
      z && (z(e, i), typeof e == "number" && (d.value = e), typeof i == "number" && (c.value = i));
    };
    return F(() => {
      s && (s(), s = null), o != null && o.length && (o.forEach((e) => e()), o.length = 0), g = null, b = null, z = null;
    }), O({
      elementRef: a,
      x: r,
      y: n,
      width: d,
      height: c,
      isDragging: v,
      isResizing: m,
      activeEdges: y,
      updatePositionAndSize: D,
      updatePosition: x,
      updateSize: _
    }), (e, i) => (T(), I("div", {
      ref_key: "elementRef",
      ref: a,
      class: "draggable-resizable-wrapper"
    }, [
      U(e.$slots, "default", $(j(R.value)))
    ], 512));
  }
});
export {
  J as default
};
//# sourceMappingURL=DraggableResizableWrapper.vue.mjs.map
