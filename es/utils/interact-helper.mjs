import Wt from "interactjs";
import { throttle as Dt } from "@vexip-ui/utils";
const It = 2;
function zt(s, bt = {}, d) {
  const T = { ...{
    draggable: !0,
    resizable: !0,
    useCssTransforms: !0,
    dragOptions: {},
    resizeOptions: {
      edges: { top: !1, right: !1, bottom: !1, left: !1 },
      margin: 8
    },
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }, ...bt }, { draggable: U, resizable: Y, useCssTransforms: I, dragOptions: g, resizeOptions: t } = T, _ = (o, i) => s.getAttribute(`data-${o}`) || i, j = (o, i) => {
    s.setAttribute(`data-${o}`, i.toString());
  }, K = s.getBoundingClientRect(), Q = T.width || K.width || 0, Z = T.height || K.height || 0;
  j("x", T.x || 0), j("y", T.y || 0), j("width", Q.toString()), j("height", Z.toString());
  const Rt = _("x", "0"), Ct = _("y", "0"), Lt = _("width", Q.toString()), wt = _("height", Z.toString()), b = /* @__PURE__ */ new Map();
  let X = !1;
  const q = (o) => {
    if (s instanceof HTMLElement) {
      const i = getComputedStyle(s);
      return (i.position === "absolute" || i.position === "fixed") && i[o] !== "auto" && i[o] !== "";
    }
    return !1;
  }, M = () => q("right"), B = () => q("left"), F = () => q("top"), P = () => q("bottom");
  let n = parseFloat(Rt), h = parseFloat(Ct), p = parseFloat(Lt), x = parseFloat(wt);
  const Mt = (o) => {
    ["top", "right", "bottom", "left"].forEach((i) => {
      const f = b.get(i);
      f && (f.style.backgroundColor = o[i] ? "rgba(29, 98, 236, 1)" : "rgba(29, 98, 236, 0)");
    });
  }, Pt = () => {
    b.forEach((o) => {
      o.style.backgroundColor = "rgba(29, 98, 236, 0)";
    });
  }, Ht = () => {
    const o = (t == null ? void 0 : t.edges) || {}, i = (t == null ? void 0 : t.margin) ?? 4, f = {
      position: "absolute",
      backgroundColor: "rgba(29, 98, 236, 0)",
      // 初始透明
      pointerEvents: "auto",
      // 设置为auto以支持hover效果
      transition: "background-color 0.1s ease"
    }, l = (r) => {
      const a = () => {
        r.style.backgroundColor = "rgba(29, 98, 236, 1)";
      }, m = () => {
        X || (r.style.backgroundColor = "rgba(29, 98, 236, 0)");
      };
      r.addEventListener("mouseenter", a), r.addEventListener("mouseleave", m), r._mouseEnterListener = a, r._mouseLeaveListener = m;
    };
    if (o.top) {
      const r = document.createElement("div");
      Object.assign(r.style, f, {
        top: `-${i}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), l(r), s.appendChild(r), b.set("top", r);
    }
    if (o.right) {
      const r = document.createElement("div");
      Object.assign(r.style, f, {
        top: "0",
        right: `-${i}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), l(r), s.appendChild(r), b.set("right", r);
    }
    if (o.bottom) {
      const r = document.createElement("div");
      Object.assign(r.style, f, {
        bottom: `-${i}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), l(r), s.appendChild(r), b.set("bottom", r);
    }
    if (o.left) {
      const r = document.createElement("div");
      Object.assign(r.style, f, {
        top: "0",
        left: `-${i}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), l(r), s.appendChild(r), b.set("left", r);
    }
  }, Tt = (o) => {
    b.forEach((i) => {
      i.style.pointerEvents = "auto", i.style.display = "block";
    });
  }, L = Wt(s).styleCursor(!1);
  if (U) {
    const o = (a) => {
      var m;
      Y && t && L.resizable(!1), (m = d == null ? void 0 : d.onDrag) == null || m.call(d, {
        type: "dragstart",
        top: h,
        left: n,
        deltaX: 0,
        deltaY: 0
      });
    }, i = (a) => {
      if (n += a.dx, h += a.dy, a.target instanceof HTMLElement) {
        const m = getComputedStyle(a.target), W = m.position === "absolute" || m.position === "fixed";
        I && !W ? a.target.style.transform = `translate(${n}px, ${h}px)` : W ? (M(), B(), F(), P(), B() ? a.target.style.left = `${n}px` : M() ? M() && (a.target.style.right = `${-n}px`) : a.target.style.left = `${n}px`, F() ? a.target.style.top = `${h}px` : P() ? P() && (a.target.style.bottom = `${-h}px`) : a.target.style.top = `${h}px`) : a.target.style.transform = `translate(${n}px, ${h}px)`;
      }
      a.target._dataUpdateTimer || (a.target._dataUpdateTimer = setTimeout(() => {
        a.target instanceof Element && (a.target.setAttribute("data-x", n.toString()), a.target.setAttribute("data-y", h.toString())), delete a.target._dataUpdateTimer;
      }, 50)), d != null && d.onDrag && requestAnimationFrame(() => {
        var m;
        (m = d.onDrag) == null || m.call(d, {
          type: "dragmove",
          top: h,
          left: n,
          deltaX: a.dx,
          deltaY: a.dy
        });
      });
    }, f = (a) => {
      var m;
      Y && t && L.resizable(!0), a.target instanceof Element && (a.target.setAttribute("data-x", n.toString()), a.target.setAttribute("data-y", h.toString())), (m = d == null ? void 0 : d.onDrag) == null || m.call(d, {
        type: "dragend",
        top: h,
        left: n,
        deltaX: a.dx,
        deltaY: a.dy
      });
    }, l = Dt(
      i,
      (g == null ? void 0 : g.threshold) ?? It
    ), r = {
      enabled: !0,
      allowFrom: g == null ? void 0 : g.allowFrom,
      ignoreFrom: g == null ? void 0 : g.ignoreFrom,
      modifiers: (g == null ? void 0 : g.modifiers) || [],
      listeners: {
        start: o,
        move: l,
        end: f
      }
    };
    g != null && g.startAxis && (r.startAxis = g.startAxis), g != null && g.lockAxis && (r.lockAxis = g.lockAxis), (g == null ? void 0 : g.max) !== void 0 && (r.max = g.max), (g == null ? void 0 : g.maxPerElement) !== void 0 && (r.maxPerElement = g.maxPerElement), L.draggable(r);
  }
  const R = (o, i, f = "width") => {
    if (typeof o == "number")
      return o;
    if (o.endsWith("px"))
      return parseFloat(o);
    const l = document.createElement("div");
    Object.assign(l.style, {
      position: "absolute",
      visibility: "hidden",
      // 保持尺寸但不可见
      zIndex: "-1000",
      // 确保元素在页面内容的后面
      margin: "0",
      padding: "0",
      border: "none",
      overflow: "hidden",
      boxSizing: "border-box",
      width: f === "width" ? o : "auto",
      height: f === "height" ? o : "auto"
    });
    try {
      const r = i.parentNode;
      (r instanceof Node ? r : document.body).appendChild(l);
      const m = getComputedStyle(l), N = parseFloat(m[f === "width" ? "width" : "height"]);
      return isNaN(N) || N <= 0 ? 100 : N;
    } catch {
      return 100;
    } finally {
      l.parentNode && l.parentNode.removeChild(l);
    }
  };
  if (Y && t) {
    Ht();
    let o = 10, i = 10, f = 1 / 0, l = 1 / 0, r = p / x;
    const a = (e) => {
      var c, E, S, w;
      Tt(), X = !0, U && g && L.draggable(!1);
      const $ = {
        top: !!((c = e.edges) != null && c.top),
        right: !!((E = e.edges) != null && E.right),
        bottom: !!((S = e.edges) != null && S.bottom),
        left: !!((w = e.edges) != null && w.left)
      };
      Mt($), o = R((t == null ? void 0 : t.minWidth) ?? 10, e.target, "width"), i = R((t == null ? void 0 : t.minHeight) ?? 10, e.target, "height"), f = R((t == null ? void 0 : t.maxWidth) ?? 1 / 0, e.target, "width"), l = R((t == null ? void 0 : t.maxHeight) ?? 1 / 0, e.target, "height"), r = p / x, d != null && d.onResize && requestAnimationFrame(() => {
        var A;
        (A = d.onResize) == null || A.call(d, {
          type: "resizestart",
          width: p,
          height: x,
          top: h,
          left: n,
          deltaWidth: 0,
          deltaHeight: 0,
          edges: $
        });
      });
    }, m = (e) => {
      var k, tt, et, ot, it, rt, st, dt, at, gt, nt, ht, ft, lt, mt, ut, pt, xt, yt, ct, Et, St, $t, At;
      const $ = M(), c = B(), E = F(), S = P(), w = e.target instanceof HTMLElement ? getComputedStyle(e.target) : null, A = ((k = e.deltaRect) == null ? void 0 : k.width) || 0, H = ((tt = e.deltaRect) == null ? void 0 : tt.height) || 0;
      let C = A, D = H;
      t != null && t.preserveAspectRatio && !$ && !c && !E && !S && ((et = e.edges) != null && et.left || (ot = e.edges) != null && ot.right ? D = A / r : ((it = e.edges) != null && it.top || (rt = e.edges) != null && rt.bottom) && (C = H * r));
      let z = p + C, V = x + D;
      if (z = Math.max(o, Math.min(f, z)), V = Math.max(i, Math.min(l, V)), C = z - p, D = V - x, C === 0 && D === 0)
        return;
      if (($ || c || E || S) && w) {
        const u = e.target.getBoundingClientRect();
        (Math.abs(u.width - p) > 1 || Math.abs(u.height - x) > 1) && (p = u.width, x = u.height);
      }
      if (!$ && !c && !E && !S && ((st = e.edges) != null && st.top && (h -= D), (dt = e.edges) != null && dt.right, (at = e.edges) != null && at.bottom, (gt = e.edges) != null && gt.left && (n -= C)), p = z, x = V, ((nt = e.edges) != null && nt.left || (ht = e.edges) != null && ht.right) && (e.target.style.width = `${p}px`), ((ft = e.edges) != null && ft.top || (lt = e.edges) != null && lt.bottom) && (e.target.style.height = `${x}px`), (mt = e.edges) != null && mt.top && S) {
        const u = (ut = e.target.parentElement) == null ? void 0 : ut.getBoundingClientRect();
        if (u) {
          const G = parseInt(getComputedStyle(e.target).bottom || "0", 10), J = u.height - x - G;
          e.target.style.top = `${J}px`;
        }
      }
      if ((pt = e.edges) != null && pt.left && $) {
        const u = (xt = e.target.parentElement) == null ? void 0 : xt.getBoundingClientRect();
        if (u) {
          const G = parseInt(getComputedStyle(e.target).right || "0", 10), J = u.width - p - G;
          e.target.style.left = `${J}px`;
        }
      }
      if ((yt = e.edges) != null && yt.right && c) {
        const u = parseInt(getComputedStyle(e.target).left || "0", 10);
        e.target.style.left = `${u}px`;
      }
      if ((ct = e.edges) != null && ct.bottom && E) {
        const u = parseInt(getComputedStyle(e.target).top || "0", 10);
        e.target.style.top = `${u}px`;
      }
      !$ && !c && !E && !S && I && (e.target.style.transform = `translate(${n}px, ${h}px)`);
      const Ft = {
        top: !!((Et = e.edges) != null && Et.top),
        right: !!((St = e.edges) != null && St.right),
        bottom: !!(($t = e.edges) != null && $t.bottom),
        left: !!((At = e.edges) != null && At.left)
      };
      d != null && d.onResize && requestAnimationFrame(() => {
        var u;
        (u = d.onResize) == null || u.call(d, {
          type: "resizemove",
          width: p,
          height: x,
          top: h,
          left: n,
          deltaWidth: A,
          deltaHeight: H,
          edges: Ft
        });
      });
    }, W = (e) => {
      var c, E, S, w;
      X = !1, U && g && L.draggable(!0), Pt(), e.target instanceof Element && (e.target.setAttribute("data-x", n.toString()), e.target.setAttribute("data-y", h.toString()), e.target.setAttribute("data-width", p.toString()), e.target.setAttribute("data-height", x.toString()));
      const $ = {
        top: !!((c = e.edges) != null && c.top),
        right: !!((E = e.edges) != null && E.right),
        bottom: !!((S = e.edges) != null && S.bottom),
        left: !!((w = e.edges) != null && w.left)
      };
      requestAnimationFrame(() => {
        var A, H, C;
        (C = d == null ? void 0 : d.onResize) == null || C.call(d, {
          type: "resizeend",
          width: p,
          height: x,
          top: h,
          left: n,
          deltaWidth: ((A = e.deltaRect) == null ? void 0 : A.width) || 0,
          deltaHeight: ((H = e.deltaRect) == null ? void 0 : H.height) || 0,
          edges: $
        });
      });
    }, Bt = m, y = {
      enabled: !0,
      edges: (t == null ? void 0 : t.edges) || {},
      modifiers: (t == null ? void 0 : t.modifiers) || [],
      listeners: {
        start: a,
        move: Bt,
        end: W
      }
    };
    (t == null ? void 0 : t.square) !== void 0 && (y.square = t.square), (t == null ? void 0 : t.preserveAspectRatio) !== void 0 && (y.preserveAspectRatio = t.preserveAspectRatio), t != null && t.invert && (y.invert = t.invert), (t == null ? void 0 : t.margin) !== void 0 && (y.margin = t.margin), (t == null ? void 0 : t.max) !== void 0 && (y.max = t.max), (t == null ? void 0 : t.maxPerElement) !== void 0 && (y.maxPerElement = t.maxPerElement), (t == null ? void 0 : t.minWidth) !== void 0 && (y.minWidth = R(t.minWidth, s, "width")), (t == null ? void 0 : t.minHeight) !== void 0 && (y.minHeight = R(t.minHeight, s, "height")), (t == null ? void 0 : t.maxWidth) !== void 0 && (y.maxWidth = R(t.maxWidth, s, "width")), (t == null ? void 0 : t.maxHeight) !== void 0 && (y.maxHeight = R(t.maxHeight, s, "height"));
    try {
      L.resizable(y);
    } catch (e) {
      console.error("Error setting up resizable:", e);
    }
  }
  if (s instanceof HTMLElement && (s.style.transition = "none", s.style.width = `${p}px`, s.style.height = `${x}px`), s instanceof HTMLElement) {
    const o = getComputedStyle(s), i = o.position === "absolute" || o.position === "fixed";
    I && !i ? s.style.transform = `translate(${n}px, ${h}px)` : i ? (!M() && !B() && (s.style.left = `${n}px`), !F() && !P() && (s.style.top = `${h}px`)) : s.style.transform = `translate(${n}px, ${h}px)`;
  }
  const v = (o, i) => {
    if (n = o, h = i, s instanceof HTMLElement) {
      const f = getComputedStyle(s), l = f.position === "absolute" || f.position === "fixed";
      I && !l ? s.style.transform = `translate(${o}px, ${i}px)` : l ? (!M() && !B() && (s.style.left = `${o}px`), !F() && !P() && (s.style.top = `${i}px`)) : s.style.transform = `translate(${o}px, ${i}px)`;
    }
    s instanceof Element && (s.setAttribute("data-x", o.toString()), s.setAttribute("data-y", i.toString()));
  }, O = (o, i) => {
    p = o, x = i, s instanceof HTMLElement && (s.style.width = `${o}px`, s.style.height = `${i}px`), s instanceof Element && (s.setAttribute("data-width", o.toString()), s.setAttribute("data-height", i.toString()));
  };
  return {
    cleanup: () => {
      b.forEach((o) => {
        o._mouseEnterListener && o.removeEventListener("mouseenter", o._mouseEnterListener), o._mouseLeaveListener && o.removeEventListener("mouseleave", o._mouseLeaveListener), o.remove();
      });
      try {
        L.unset();
      } catch (o) {
        console.error("Error unsetting interactable:", o);
      }
    },
    updatePositionAndSize: (o, i, f, l) => {
      v(o, i), O(f, l);
    },
    updatePosition: v,
    updateSize: O
  };
}
export {
  zt as makeElementDraggableResizable
};
//# sourceMappingURL=interact-helper.mjs.map
