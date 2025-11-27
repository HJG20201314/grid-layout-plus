import Wt from "interactjs";
import { throttle as _t } from "@vexip-ui/utils";
import { parsePositionValue as z, parseCssSize as c, isCssUnitValue as U } from "./css-units.mjs";
const Ft = 2;
function Zt(i, Rt = {}, n) {
  const T = { ...{
    draggable: !0,
    resizable: !0,
    useCssTransforms: !0,
    dragOptions: {},
    resizeOptions: {
      edges: { top: !1, right: !1, bottom: !1, left: !1 },
      margin: 8,
      hotZoneSize: 8
    },
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }, ...Rt }, { draggable: Y, resizable: Z, useCssTransforms: B, dragOptions: a, resizeOptions: t } = T, I = (r, s) => i.getAttribute(`data-${r}`) || s, j = (r, s) => {
    i.setAttribute(`data-${r}`, s.toString());
  }, v = i.getBoundingClientRect(), O = T.width || v.width || 0, k = T.height || v.height || 0;
  j("x", T.x || 0), j("y", T.y || 0), j("width", O.toString()), j("height", k.toString());
  const Mt = I("x", "0"), wt = I("y", "0"), Ht = I("width", O.toString()), Tt = I("height", k.toString());
  let g = z(Mt, i, "x"), f = z(wt, i, "y"), m = c(Ht, i, "width"), y = c(Tt, i, "height");
  const b = /* @__PURE__ */ new Map();
  let X = !1;
  const D = (r) => {
    if (i instanceof HTMLElement) {
      const s = getComputedStyle(i);
      return (s.position === "absolute" || s.position === "fixed") && s[r] !== "auto" && s[r] !== "";
    }
    return !1;
  }, W = () => D("right"), G = () => D("left"), J = () => D("top"), _ = () => D("bottom"), Pt = (r) => {
    ["top", "right", "bottom", "left"].forEach((s) => {
      const l = b.get(s);
      if (l) {
        const p = l.firstElementChild;
        p && (p.style.backgroundColor = r[s] ? "rgba(29, 98, 236, 1)" : "rgba(29, 98, 236, 0)");
      }
    });
  }, Bt = () => {
    b.forEach((r) => {
      const s = r.firstElementChild;
      s && (s.style.backgroundColor = "rgba(29, 98, 236, 0)");
    });
  }, It = () => {
    const r = (t == null ? void 0 : t.edges) || {}, s = (t == null ? void 0 : t.margin) ?? 4, l = (t == null ? void 0 : t.hotZoneSize) ?? 10, p = {
      position: "absolute",
      backgroundColor: "rgba(29, 98, 236, 0)",
      // 始终保持透明
      pointerEvents: "auto",
      // 设置为auto以支持hover效果
      // 移除transition，因为背景色不会变化
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, h = {
      backgroundColor: "rgba(29, 98, 236, 0)",
      // 初始透明
      transition: "background-color 0.1s ease",
      pointerEvents: "auto"
    }, d = (o, u) => {
      const K = () => {
        u.style.backgroundColor = "rgba(29, 98, 236, 1)";
      }, F = () => {
        X || (u.style.backgroundColor = "rgba(29, 98, 236, 0)");
      };
      o.addEventListener("mouseenter", K), o.addEventListener("mouseleave", F), o._mouseEnterListener = K, o._mouseLeaveListener = F;
    };
    if (r.top) {
      const o = document.createElement("div"), u = document.createElement("div");
      Object.assign(o.style, p, {
        top: `-${l / 2 + s}px`,
        left: "0",
        width: "100%",
        height: `${l}px`,
        cursor: "row-resize",
        zIndex: "10",
        alignItems: "center",
        justifyContent: "center"
      }), Object.assign(u.style, h, {
        width: "100%",
        height: "2px"
      }), o.appendChild(u), d(o, u), i.appendChild(o), b.set("top", o);
    }
    if (r.right) {
      const o = document.createElement("div"), u = document.createElement("div");
      Object.assign(o.style, p, {
        top: "0",
        right: `-${l / 2 + s}px`,
        width: `${l}px`,
        height: "100%",
        cursor: "col-resize",
        zIndex: "10",
        alignItems: "center",
        justifyContent: "center"
      }), Object.assign(u.style, h, {
        width: "2px",
        height: "100%"
      }), o.appendChild(u), d(o, u), i.appendChild(o), b.set("right", o);
    }
    if (r.bottom) {
      const o = document.createElement("div"), u = document.createElement("div");
      Object.assign(o.style, p, {
        bottom: `-${l / 2 + s}px`,
        left: "0",
        width: "100%",
        height: `${l}px`,
        cursor: "row-resize",
        zIndex: "10",
        alignItems: "center",
        justifyContent: "center"
      }), Object.assign(u.style, h, {
        width: "100%",
        height: "2px"
      }), o.appendChild(u), d(o, u), i.appendChild(o), b.set("bottom", o);
    }
    if (r.left) {
      const o = document.createElement("div"), u = document.createElement("div");
      Object.assign(o.style, p, {
        top: "0",
        left: `-${l / 2 + s}px`,
        width: `${l}px`,
        height: "100%",
        cursor: "col-resize",
        zIndex: "10",
        alignItems: "center",
        justifyContent: "center"
      }), Object.assign(u.style, h, {
        width: "2px",
        height: "100%"
      }), o.appendChild(u), d(o, u), i.appendChild(o), b.set("left", o);
    }
  }, jt = (r) => {
    b.forEach((s) => {
      s.style.pointerEvents = "auto", s.style.display = "flex";
    });
  }, M = Wt(i).styleCursor(!1);
  if (Y) {
    const r = (d) => {
      var o;
      Z && t && M.resizable(!1), (o = n == null ? void 0 : n.onDrag) == null || o.call(n, {
        type: "dragstart",
        top: f,
        left: g,
        deltaX: 0,
        deltaY: 0
      });
    }, s = (d) => {
      if (g += d.dx, f += d.dy, d.target instanceof HTMLElement) {
        const o = getComputedStyle(d.target), u = o.position === "absolute" || o.position === "fixed";
        B && !u ? d.target.style.transform = `translate(${g}px, ${f}px)` : u ? (G() ? d.target.style.left = `${g}px` : W() ? W() && (d.target.style.right = `${-g}px`) : d.target.style.left = `${g}px`, J() ? d.target.style.top = `${f}px` : _() ? _() && (d.target.style.bottom = `${-f}px`) : d.target.style.top = `${f}px`) : d.target.style.transform = `translate(${g}px, ${f}px)`;
      }
      d.target._dataUpdateTimer || (d.target._dataUpdateTimer = setTimeout(() => {
        d.target instanceof Element && (d.target.setAttribute("data-x", g.toString()), d.target.setAttribute("data-y", f.toString())), delete d.target._dataUpdateTimer;
      }, 50)), n != null && n.onDrag && requestAnimationFrame(() => {
        var o;
        (o = n.onDrag) == null || o.call(n, {
          type: "dragmove",
          top: f,
          left: g,
          deltaX: d.dx,
          deltaY: d.dy
        });
      });
    }, l = (d) => {
      var o;
      Z && t && M.resizable(!0), d.target instanceof Element && (d.target.setAttribute("data-x", g.toString()), d.target.setAttribute("data-y", f.toString())), (o = n == null ? void 0 : n.onDrag) == null || o.call(n, {
        type: "dragend",
        top: f,
        left: g,
        deltaX: d.dx,
        deltaY: d.dy
      });
    }, p = _t(
      s,
      (a == null ? void 0 : a.threshold) ?? Ft
    ), h = {
      enabled: !0,
      allowFrom: a == null ? void 0 : a.allowFrom,
      ignoreFrom: a == null ? void 0 : a.ignoreFrom,
      modifiers: (a == null ? void 0 : a.modifiers) || [],
      listeners: {
        start: r,
        move: p,
        end: l
      }
    };
    a != null && a.startAxis && (h.startAxis = a.startAxis), a != null && a.lockAxis && (h.lockAxis = a.lockAxis), (a == null ? void 0 : a.max) !== void 0 && (h.max = a.max), (a == null ? void 0 : a.maxPerElement) !== void 0 && (h.maxPerElement = a.maxPerElement), M.draggable(h);
  }
  if (Z && t) {
    It();
    let r = 10, s = 10, l = 1 / 0, p = 1 / 0, h = m / y;
    const d = (e) => {
      var $, S, C, w;
      jt(), X = !0, Y && a && M.draggable(!1);
      const A = {
        top: !!(($ = e.edges) != null && $.top),
        right: !!((S = e.edges) != null && S.right),
        bottom: !!((C = e.edges) != null && C.bottom),
        left: !!((w = e.edges) != null && w.left)
      };
      Pt(A), r = c((t == null ? void 0 : t.minWidth) ?? 10, e.target, "width"), s = c((t == null ? void 0 : t.minHeight) ?? 10, e.target, "height"), l = c((t == null ? void 0 : t.maxWidth) ?? 1 / 0, e.target, "width"), p = c((t == null ? void 0 : t.maxHeight) ?? 1 / 0, e.target, "height"), h = m / y, n != null && n.onResize && requestAnimationFrame(() => {
        var L;
        (L = n.onResize) == null || L.call(n, {
          type: "resizestart",
          width: m,
          height: y,
          top: f,
          left: g,
          deltaWidth: 0,
          deltaHeight: 0,
          edges: A
        });
      });
    }, o = (e) => {
      var it, ot, rt, st, dt, nt, at, gt, ft, ht, lt, ut, pt, mt, yt, xt, ct, Et, $t, St, Ct, At, Lt, bt;
      const A = W(), $ = G(), S = J(), C = _(), w = e.target instanceof HTMLElement ? getComputedStyle(e.target) : null, L = ((it = e.deltaRect) == null ? void 0 : it.width) || 0, H = ((ot = e.deltaRect) == null ? void 0 : ot.height) || 0;
      let R = L, P = H;
      t != null && t.preserveAspectRatio && !A && !$ && !S && !C && ((rt = e.edges) != null && rt.left || (st = e.edges) != null && st.right ? P = L / h : ((dt = e.edges) != null && dt.top || (nt = e.edges) != null && nt.bottom) && (R = H * h));
      let q = m + R, V = y + P;
      if (q = Math.max(r, Math.min(l, q)), V = Math.max(s, Math.min(p, V)), R = q - m, P = V - y, R === 0 && P === 0)
        return;
      if ((A || $ || S || C) && w) {
        const x = e.target.getBoundingClientRect();
        (Math.abs(x.width - m) > 1 || Math.abs(x.height - y) > 1) && (m = x.width, y = x.height);
      }
      if (!A && !$ && !S && !C && ((at = e.edges) != null && at.top && (f -= P), (gt = e.edges) != null && gt.right, (ft = e.edges) != null && ft.bottom, (ht = e.edges) != null && ht.left && (g -= R)), m = q, y = V, ((lt = e.edges) != null && lt.left || (ut = e.edges) != null && ut.right) && (e.target.style.width = `${m}px`), ((pt = e.edges) != null && pt.top || (mt = e.edges) != null && mt.bottom) && (e.target.style.height = `${y}px`), (yt = e.edges) != null && yt.top && C) {
        const x = (xt = e.target.parentElement) == null ? void 0 : xt.getBoundingClientRect();
        if (x) {
          const N = parseInt(getComputedStyle(e.target).bottom || "0", 10), Q = x.height - y - N;
          e.target.style.top = `${Q}px`;
        }
      }
      if ((ct = e.edges) != null && ct.left && A) {
        const x = (Et = e.target.parentElement) == null ? void 0 : Et.getBoundingClientRect();
        if (x) {
          const N = parseInt(getComputedStyle(e.target).right || "0", 10), Q = x.width - m - N;
          e.target.style.left = `${Q}px`;
        }
      }
      if (($t = e.edges) != null && $t.right && $) {
        const x = parseInt(getComputedStyle(e.target).left || "0", 10);
        e.target.style.left = `${x}px`;
      }
      if ((St = e.edges) != null && St.bottom && S) {
        const x = parseInt(getComputedStyle(e.target).top || "0", 10);
        e.target.style.top = `${x}px`;
      }
      !A && !$ && !S && !C && B && (e.target.style.transform = `translate(${g}px, ${f}px)`);
      const Dt = {
        top: !!((Ct = e.edges) != null && Ct.top),
        right: !!((At = e.edges) != null && At.right),
        bottom: !!((Lt = e.edges) != null && Lt.bottom),
        left: !!((bt = e.edges) != null && bt.left)
      };
      n != null && n.onResize && requestAnimationFrame(() => {
        var x;
        (x = n.onResize) == null || x.call(n, {
          type: "resizemove",
          width: m,
          height: y,
          top: f,
          left: g,
          deltaWidth: L,
          deltaHeight: H,
          edges: Dt
        });
      });
    }, u = (e) => {
      var $, S, C, w;
      X = !1, Y && a && M.draggable(!0), Bt(), e.target instanceof Element && (e.target.setAttribute("data-x", g.toString()), e.target.setAttribute("data-y", f.toString()), e.target.setAttribute("data-width", m.toString()), e.target.setAttribute("data-height", y.toString()));
      const A = {
        top: !!(($ = e.edges) != null && $.top),
        right: !!((S = e.edges) != null && S.right),
        bottom: !!((C = e.edges) != null && C.bottom),
        left: !!((w = e.edges) != null && w.left)
      };
      requestAnimationFrame(() => {
        var L, H, R;
        (R = n == null ? void 0 : n.onResize) == null || R.call(n, {
          type: "resizeend",
          width: m,
          height: y,
          top: f,
          left: g,
          deltaWidth: ((L = e.deltaRect) == null ? void 0 : L.width) || 0,
          deltaHeight: ((H = e.deltaRect) == null ? void 0 : H.height) || 0,
          edges: A
        });
      });
    }, F = o, E = {
      enabled: !0,
      edges: (t == null ? void 0 : t.edges) || {},
      modifiers: (t == null ? void 0 : t.modifiers) || [],
      listeners: {
        start: d,
        move: F,
        end: u
      }
    };
    (t == null ? void 0 : t.square) !== void 0 && (E.square = t.square), (t == null ? void 0 : t.preserveAspectRatio) !== void 0 && (E.preserveAspectRatio = t.preserveAspectRatio), t != null && t.invert && (E.invert = t.invert), (t == null ? void 0 : t.margin) !== void 0 && (E.margin = t.margin), (t == null ? void 0 : t.max) !== void 0 && (E.max = t.max), (t == null ? void 0 : t.maxPerElement) !== void 0 && (E.maxPerElement = t.maxPerElement), (t == null ? void 0 : t.minWidth) !== void 0 && (E.minWidth = c(t.minWidth, i, "width")), (t == null ? void 0 : t.minHeight) !== void 0 && (E.minHeight = c(t.minHeight, i, "height")), (t == null ? void 0 : t.maxWidth) !== void 0 && (E.maxWidth = c(t.maxWidth, i, "width")), (t == null ? void 0 : t.maxHeight) !== void 0 && (E.maxHeight = c(t.maxHeight, i, "height"));
    try {
      M.resizable(E);
    } catch (e) {
      console.error("Error setting up resizable:", e);
    }
  }
  if (i instanceof HTMLElement && (i.style.transition = "none", i.style.width = `${m}px`, i.style.height = `${y}px`), i instanceof HTMLElement) {
    const r = getComputedStyle(i), s = r.position === "absolute" || r.position === "fixed";
    B && !s ? i.style.transform = `translate(${g}px, ${f}px)` : s ? (!W() && !G() && (i.style.left = `${g}px`), !J() && !_() && (i.style.top = `${f}px`)) : i.style.transform = `translate(${g}px, ${f}px)`;
  }
  const tt = (r, s) => {
    if (g = z(r, i, "x"), f = z(s, i, "y"), i instanceof HTMLElement) {
      const l = getComputedStyle(i), p = l.position === "absolute" || l.position === "fixed", h = (o) => {
        typeof o == "string" && U(o) && p ? i.style.left = o : i.style.left = `${g}px`;
      }, d = (o) => {
        typeof o == "string" && U(o) && p ? i.style.top = o : i.style.top = `${f}px`;
      };
      B && !p ? i.style.transform = `translate(${g}px, ${f}px)` : p ? (i.style.right = "", i.style.bottom = "", h(r), d(s)) : i.style.transform = `translate(${g}px, ${f}px)`;
    }
    i instanceof Element && (i.setAttribute("data-x", typeof r == "string" ? r : g.toString()), i.setAttribute("data-y", typeof s == "string" ? s : f.toString()));
  }, et = (r, s) => {
    if (m = typeof r == "number" ? r : c(r, i, "width"), y = typeof s == "number" ? s : c(s, i, "height"), i instanceof HTMLElement) {
      const l = (h) => {
        typeof h == "string" && U(h) ? i.style.width = h : i.style.width = `${m}px`;
      }, p = (h) => {
        typeof h == "string" && U(h) ? i.style.height = h : i.style.height = `${y}px`;
      };
      l(r), p(s);
    }
    i instanceof Element && (i.setAttribute("data-width", typeof r == "string" ? r : m.toString()), i.setAttribute("data-height", typeof s == "string" ? s : y.toString()));
  };
  return {
    cleanup: () => {
      b.forEach((r) => {
        r._mouseEnterListener && r.removeEventListener("mouseenter", r._mouseEnterListener), r._mouseLeaveListener && r.removeEventListener("mouseleave", r._mouseLeaveListener), r.remove();
      });
      try {
        M.unset();
      } catch (r) {
        console.error("Error unsetting interactable:", r);
      }
    },
    updatePositionAndSize: (r, s, l, p) => {
      tt(r, s), et(l, p);
    },
    updatePosition: tt,
    updateSize: et
  };
}
export {
  Zt as makeElementDraggableResizable
};
//# sourceMappingURL=interact-helper.mjs.map
