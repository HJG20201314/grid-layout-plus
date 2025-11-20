import { defineComponent as C, ref as l, computed as S, watch as k, onMounted as M, onUnmounted as F, createElementBlock as I, openBlock as T, renderSlot as H, normalizeProps as W, guardReactiveProps as X } from "vue";
import { makeElementDraggableResizable as Y } from "../utils/interact-helper.mjs";
const $ = /* @__PURE__ */ C({
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
    const t = E, u = P, a = l(), s = l(t.initialX), n = l(t.initialY), d = l(t.initialWidth), c = l(t.initialHeight), f = l(!1), z = l(!1), b = l({});
    let r = null, p = null, h = null, m = null;
    const o = [], R = S(() => ({
      x: s.value,
      y: n.value,
      width: d.value,
      height: c.value,
      isDragging: f.value,
      isResizing: z.value,
      activeEdges: b.value
    })), A = () => ({
      onDrag: (e) => {
        switch (s.value = e.left, n.value = e.top, f.value = e.type === "dragstart" ? !0 : e.type === "dragend" ? !1 : f.value, e.type) {
          case "dragstart":
            u("dragStart", e);
            break;
          case "dragmove":
            u("dragMove", e);
            break;
          case "dragend":
            u("dragEnd", e);
            break;
        }
      },
      onResize: (e) => {
        switch (d.value = e.width, c.value = e.height, s.value = e.left, n.value = e.top, z.value = e.type === "resizestart" ? !0 : e.type === "resizeend" ? !1 : z.value, b.value = e.edges || {}, e.type) {
          case "resizestart":
            u("resizeStart", e);
            break;
          case "resizemove":
            u("resizeMove", e);
            break;
          case "resizeend":
            u("resizeEnd", e);
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
    })), y = () => {
      if (!a.value) return;
      a.value.setAttribute("data-x", t.initialX.toString()), a.value.setAttribute("data-y", t.initialY.toString()), a.value.setAttribute("data-width", t.initialWidth.toString()), a.value.setAttribute("data-height", t.initialHeight.toString());
      const e = A(), i = Y(
        a.value,
        B.value,
        e
      );
      r = i.cleanup, p = i.updatePositionAndSize, h = i.updatePosition, m = i.updateSize;
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
          r && (r(), r = null), y();
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
        ([e, i, g, v]) => {
          p && (p(e, i, g, v), s.value = e, n.value = i, d.value = g, c.value = v);
        }
      )
    ), M(() => {
      y();
    });
    const D = (e, i, g, v) => {
      p && (p(e, i, g, v), s.value = e, n.value = i, d.value = g, c.value = v);
    }, x = (e, i) => {
      h && (h(e, i), s.value = e, n.value = i);
    }, _ = (e, i) => {
      m && (m(e, i), d.value = e, c.value = i);
    };
    return F(() => {
      r && (r(), r = null), o != null && o.length && (o.forEach((e) => e()), o.length = 0), p = null, h = null, m = null;
    }), O({
      elementRef: a,
      x: s,
      y: n,
      width: d,
      height: c,
      isDragging: f,
      isResizing: z,
      activeEdges: b,
      updatePositionAndSize: D,
      updatePosition: x,
      updateSize: _
    }), (e, i) => (T(), I("div", {
      ref_key: "elementRef",
      ref: a,
      class: "draggable-resizable-wrapper"
    }, [
      H(e.$slots, "default", W(X(R.value)))
    ], 512));
  }
});
export {
  $ as default
};
//# sourceMappingURL=DraggableResizableWrapper.vue.mjs.map
