import _t from "interactjs";
import { throttle as Ft } from "@vexip-ui/utils";
import { parsePositionValue as U, parseCssSize as y, isCssUnitValue as Y } from "./css-units.mjs";
const It = 2;
function Xt(i, Lt = {}, a) {
  const w = { ...{
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
  }, ...Lt }, { draggable: X, resizable: G, useCssTransforms: D, dragOptions: g, resizeOptions: t } = w, W = (o, s) => i.getAttribute(`data-${o}`) || s, _ = (o, s) => {
    i.setAttribute(`data-${o}`, s.toString());
  }, Q = i.getBoundingClientRect(), Z = w.width || Q.width || 0, v = w.height || Q.height || 0;
  _("x", w.x || 0), _("y", w.y || 0), _("width", Z.toString()), _("height", v.toString());
  const Ct = W("x", "0"), bt = W("y", "0"), Mt = W("width", Z.toString()), Ht = W("height", v.toString());
  let f = U(Ct, i, "x"), n = U(bt, i, "y"), m = y(Mt, i, "width"), l = y(Ht, i, "height");
  const L = /* @__PURE__ */ new Map();
  let J = !1;
  const F = (o) => {
    if (i instanceof HTMLElement) {
      const s = getComputedStyle(i);
      return (s.position === "absolute" || s.position === "fixed") && s[o] !== "auto" && s[o] !== "";
    }
    return !1;
  }, T = () => F("right"), I = () => F("left"), q = () => F("top"), P = () => F("bottom"), wt = (o) => {
    ["top", "right", "bottom", "left"].forEach((s) => {
      const u = L.get(s);
      u && (u.style.backgroundColor = o[s] ? "rgba(29, 98, 236, 1)" : "rgba(29, 98, 236, 0)");
    });
  }, Tt = () => {
    L.forEach((o) => {
      o.style.backgroundColor = "rgba(29, 98, 236, 0)";
    });
  }, Pt = () => {
    const o = (t == null ? void 0 : t.edges) || {}, s = (t == null ? void 0 : t.margin) ?? 4, u = {
      position: "absolute",
      backgroundColor: "rgba(29, 98, 236, 0)",
      // 初始透明
      pointerEvents: "auto",
      // 设置为auto以支持hover效果
      transition: "background-color 0.1s ease"
    }, p = (r) => {
      const d = () => {
        r.style.backgroundColor = "rgba(29, 98, 236, 1)";
      }, h = () => {
        J || (r.style.backgroundColor = "rgba(29, 98, 236, 0)");
      };
      r.addEventListener("mouseenter", d), r.addEventListener("mouseleave", h), r._mouseEnterListener = d, r._mouseLeaveListener = h;
    };
    if (o.top) {
      const r = document.createElement("div");
      Object.assign(r.style, u, {
        top: `-${s}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), p(r), i.appendChild(r), L.set("top", r);
    }
    if (o.right) {
      const r = document.createElement("div");
      Object.assign(r.style, u, {
        top: "0",
        right: `-${s}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), p(r), i.appendChild(r), L.set("right", r);
    }
    if (o.bottom) {
      const r = document.createElement("div");
      Object.assign(r.style, u, {
        bottom: `-${s}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), p(r), i.appendChild(r), L.set("bottom", r);
    }
    if (o.left) {
      const r = document.createElement("div");
      Object.assign(r.style, u, {
        top: "0",
        left: `-${s}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), p(r), i.appendChild(r), L.set("left", r);
    }
  }, Bt = (o) => {
    L.forEach((s) => {
      s.style.pointerEvents = "auto", s.style.display = "block";
    });
  }, b = _t(i).styleCursor(!1);
  if (X) {
    const o = (d) => {
      var h;
      G && t && b.resizable(!1), (h = a == null ? void 0 : a.onDrag) == null || h.call(a, {
        type: "dragstart",
        top: n,
        left: f,
        deltaX: 0,
        deltaY: 0
      });
    }, s = (d) => {
      if (f += d.dx, n += d.dy, d.target instanceof HTMLElement) {
        const h = getComputedStyle(d.target), V = h.position === "absolute" || h.position === "fixed";
        D && !V ? d.target.style.transform = `translate(${f}px, ${n}px)` : V ? (I() ? d.target.style.left = `${f}px` : T() ? T() && (d.target.style.right = `${-f}px`) : d.target.style.left = `${f}px`, q() ? d.target.style.top = `${n}px` : P() ? P() && (d.target.style.bottom = `${-n}px`) : d.target.style.top = `${n}px`) : d.target.style.transform = `translate(${f}px, ${n}px)`;
      }
      d.target._dataUpdateTimer || (d.target._dataUpdateTimer = setTimeout(() => {
        d.target instanceof Element && (d.target.setAttribute("data-x", f.toString()), d.target.setAttribute("data-y", n.toString())), delete d.target._dataUpdateTimer;
      }, 50)), a != null && a.onDrag && requestAnimationFrame(() => {
        var h;
        (h = a.onDrag) == null || h.call(a, {
          type: "dragmove",
          top: n,
          left: f,
          deltaX: d.dx,
          deltaY: d.dy
        });
      });
    }, u = (d) => {
      var h;
      G && t && b.resizable(!0), d.target instanceof Element && (d.target.setAttribute("data-x", f.toString()), d.target.setAttribute("data-y", n.toString())), (h = a == null ? void 0 : a.onDrag) == null || h.call(a, {
        type: "dragend",
        top: n,
        left: f,
        deltaX: d.dx,
        deltaY: d.dy
      });
    }, p = Ft(
      s,
      (g == null ? void 0 : g.threshold) ?? It
    ), r = {
      enabled: !0,
      allowFrom: g == null ? void 0 : g.allowFrom,
      ignoreFrom: g == null ? void 0 : g.ignoreFrom,
      modifiers: (g == null ? void 0 : g.modifiers) || [],
      listeners: {
        start: o,
        move: p,
        end: u
      }
    };
    g != null && g.startAxis && (r.startAxis = g.startAxis), g != null && g.lockAxis && (r.lockAxis = g.lockAxis), (g == null ? void 0 : g.max) !== void 0 && (r.max = g.max), (g == null ? void 0 : g.maxPerElement) !== void 0 && (r.maxPerElement = g.maxPerElement), b.draggable(r);
  }
  if (G && t) {
    Pt();
    let o = 10, s = 10, u = 1 / 0, p = 1 / 0, r = m / l;
    const d = (e) => {
      var E, $, A, M;
      Bt(), J = !0, X && g && b.draggable(!1);
      const S = {
        top: !!((E = e.edges) != null && E.top),
        right: !!(($ = e.edges) != null && $.right),
        bottom: !!((A = e.edges) != null && A.bottom),
        left: !!((M = e.edges) != null && M.left)
      };
      wt(S), o = y((t == null ? void 0 : t.minWidth) ?? 10, e.target, "width"), s = y((t == null ? void 0 : t.minHeight) ?? 10, e.target, "height"), u = y((t == null ? void 0 : t.maxWidth) ?? 1 / 0, e.target, "width"), p = y((t == null ? void 0 : t.maxHeight) ?? 1 / 0, e.target, "height"), r = m / l, a != null && a.onResize && requestAnimationFrame(() => {
        var R;
        (R = a.onResize) == null || R.call(a, {
          type: "resizestart",
          width: m,
          height: l,
          top: n,
          left: f,
          deltaWidth: 0,
          deltaHeight: 0,
          edges: S
        });
      });
    }, h = (e) => {
      var tt, et, it, ot, rt, st, dt, at, gt, ft, nt, ht, ut, pt, mt, lt, xt, yt, ct, Et, $t, At, St, Rt;
      const S = T(), E = I(), $ = q(), A = P(), M = e.target instanceof HTMLElement ? getComputedStyle(e.target) : null, R = ((tt = e.deltaRect) == null ? void 0 : tt.width) || 0, H = ((et = e.deltaRect) == null ? void 0 : et.height) || 0;
      let C = R, B = H;
      t != null && t.preserveAspectRatio && !S && !E && !$ && !A && ((it = e.edges) != null && it.left || (ot = e.edges) != null && ot.right ? B = R / r : ((rt = e.edges) != null && rt.top || (st = e.edges) != null && st.bottom) && (C = H * r));
      let j = m + C, z = l + B;
      if (j = Math.max(o, Math.min(u, j)), z = Math.max(s, Math.min(p, z)), C = j - m, B = z - l, C === 0 && B === 0)
        return;
      if ((S || E || $ || A) && M) {
        const x = e.target.getBoundingClientRect();
        (Math.abs(x.width - m) > 1 || Math.abs(x.height - l) > 1) && (m = x.width, l = x.height);
      }
      if (!S && !E && !$ && !A && ((dt = e.edges) != null && dt.top && (n -= B), (at = e.edges) != null && at.right, (gt = e.edges) != null && gt.bottom, (ft = e.edges) != null && ft.left && (f -= C)), m = j, l = z, ((nt = e.edges) != null && nt.left || (ht = e.edges) != null && ht.right) && (e.target.style.width = `${m}px`), ((ut = e.edges) != null && ut.top || (pt = e.edges) != null && pt.bottom) && (e.target.style.height = `${l}px`), (mt = e.edges) != null && mt.top && A) {
        const x = (lt = e.target.parentElement) == null ? void 0 : lt.getBoundingClientRect();
        if (x) {
          const K = parseInt(getComputedStyle(e.target).bottom || "0", 10), N = x.height - l - K;
          e.target.style.top = `${N}px`;
        }
      }
      if ((xt = e.edges) != null && xt.left && S) {
        const x = (yt = e.target.parentElement) == null ? void 0 : yt.getBoundingClientRect();
        if (x) {
          const K = parseInt(getComputedStyle(e.target).right || "0", 10), N = x.width - m - K;
          e.target.style.left = `${N}px`;
        }
      }
      if ((ct = e.edges) != null && ct.right && E) {
        const x = parseInt(getComputedStyle(e.target).left || "0", 10);
        e.target.style.left = `${x}px`;
      }
      if ((Et = e.edges) != null && Et.bottom && $) {
        const x = parseInt(getComputedStyle(e.target).top || "0", 10);
        e.target.style.top = `${x}px`;
      }
      !S && !E && !$ && !A && D && (e.target.style.transform = `translate(${f}px, ${n}px)`);
      const Wt = {
        top: !!(($t = e.edges) != null && $t.top),
        right: !!((At = e.edges) != null && At.right),
        bottom: !!((St = e.edges) != null && St.bottom),
        left: !!((Rt = e.edges) != null && Rt.left)
      };
      a != null && a.onResize && requestAnimationFrame(() => {
        var x;
        (x = a.onResize) == null || x.call(a, {
          type: "resizemove",
          width: m,
          height: l,
          top: n,
          left: f,
          deltaWidth: R,
          deltaHeight: H,
          edges: Wt
        });
      });
    }, V = (e) => {
      var E, $, A, M;
      J = !1, X && g && b.draggable(!0), Tt(), e.target instanceof Element && (e.target.setAttribute("data-x", f.toString()), e.target.setAttribute("data-y", n.toString()), e.target.setAttribute("data-width", m.toString()), e.target.setAttribute("data-height", l.toString()));
      const S = {
        top: !!((E = e.edges) != null && E.top),
        right: !!(($ = e.edges) != null && $.right),
        bottom: !!((A = e.edges) != null && A.bottom),
        left: !!((M = e.edges) != null && M.left)
      };
      requestAnimationFrame(() => {
        var R, H, C;
        (C = a == null ? void 0 : a.onResize) == null || C.call(a, {
          type: "resizeend",
          width: m,
          height: l,
          top: n,
          left: f,
          deltaWidth: ((R = e.deltaRect) == null ? void 0 : R.width) || 0,
          deltaHeight: ((H = e.deltaRect) == null ? void 0 : H.height) || 0,
          edges: S
        });
      });
    }, Dt = h, c = {
      enabled: !0,
      edges: (t == null ? void 0 : t.edges) || {},
      modifiers: (t == null ? void 0 : t.modifiers) || [],
      listeners: {
        start: d,
        move: Dt,
        end: V
      }
    };
    (t == null ? void 0 : t.square) !== void 0 && (c.square = t.square), (t == null ? void 0 : t.preserveAspectRatio) !== void 0 && (c.preserveAspectRatio = t.preserveAspectRatio), t != null && t.invert && (c.invert = t.invert), (t == null ? void 0 : t.margin) !== void 0 && (c.margin = t.margin), (t == null ? void 0 : t.max) !== void 0 && (c.max = t.max), (t == null ? void 0 : t.maxPerElement) !== void 0 && (c.maxPerElement = t.maxPerElement), (t == null ? void 0 : t.minWidth) !== void 0 && (c.minWidth = y(t.minWidth, i, "width")), (t == null ? void 0 : t.minHeight) !== void 0 && (c.minHeight = y(t.minHeight, i, "height")), (t == null ? void 0 : t.maxWidth) !== void 0 && (c.maxWidth = y(t.maxWidth, i, "width")), (t == null ? void 0 : t.maxHeight) !== void 0 && (c.maxHeight = y(t.maxHeight, i, "height"));
    try {
      b.resizable(c);
    } catch (e) {
      console.error("Error setting up resizable:", e);
    }
  }
  if (i instanceof HTMLElement && (i.style.transition = "none", i.style.width = `${m}px`, i.style.height = `${l}px`), i instanceof HTMLElement) {
    const o = getComputedStyle(i), s = o.position === "absolute" || o.position === "fixed";
    D && !s ? i.style.transform = `translate(${f}px, ${n}px)` : s ? (!T() && !I() && (i.style.left = `${f}px`), !q() && !P() && (i.style.top = `${n}px`)) : i.style.transform = `translate(${f}px, ${n}px)`;
  }
  const O = (o, s) => {
    if (f = U(o, i, "x"), n = U(s, i, "y"), i instanceof HTMLElement) {
      const u = getComputedStyle(i), p = u.position === "absolute" || u.position === "fixed", r = (h) => {
        typeof h == "string" && Y(h) && p ? i.style.left = h : i.style.left = `${f}px`;
      }, d = (h) => {
        typeof h == "string" && Y(h) && p ? i.style.top = h : i.style.top = `${n}px`;
      };
      D && !p ? i.style.transform = `translate(${f}px, ${n}px)` : p ? (!T() && !I() && r(o), !q() && !P() && d(s)) : i.style.transform = `translate(${f}px, ${n}px)`;
    }
    i instanceof Element && (i.setAttribute("data-x", typeof o == "string" ? o : f.toString()), i.setAttribute("data-y", typeof s == "string" ? s : n.toString()));
  }, k = (o, s) => {
    if (m = typeof o == "number" ? o : y(o, i, "width"), l = typeof s == "number" ? s : y(s, i, "height"), i instanceof HTMLElement) {
      const u = (r) => {
        typeof r == "string" && Y(r) ? i.style.width = r : i.style.width = `${m}px`;
      }, p = (r) => {
        typeof r == "string" && Y(r) ? i.style.height = r : i.style.height = `${l}px`;
      };
      u(o), p(s);
    }
    i instanceof Element && (i.setAttribute("data-width", typeof o == "string" ? o : m.toString()), i.setAttribute("data-height", typeof s == "string" ? s : l.toString()));
  };
  return {
    cleanup: () => {
      L.forEach((o) => {
        o._mouseEnterListener && o.removeEventListener("mouseenter", o._mouseEnterListener), o._mouseLeaveListener && o.removeEventListener("mouseleave", o._mouseLeaveListener), o.remove();
      });
      try {
        b.unset();
      } catch (o) {
        console.error("Error unsetting interactable:", o);
      }
    },
    updatePositionAndSize: (o, s, u, p) => {
      O(o, s), k(u, p);
    },
    updatePosition: O,
    updateSize: k
  };
}
export {
  Xt as makeElementDraggableResizable
};
//# sourceMappingURL=interact-helper.mjs.map
