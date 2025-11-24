import _t from "interactjs";
import { throttle as Ft } from "@vexip-ui/utils";
import { parsePositionValue as j, parseCssSize as y, isCssUnitValue as z } from "./css-units.mjs";
const It = 2;
function Xt(o, Lt = {}, a) {
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
  }, ...Lt }, { draggable: U, resizable: Y, useCssTransforms: P, dragOptions: g, resizeOptions: t } = w, B = (i, s) => o.getAttribute(`data-${i}`) || s, D = (i, s) => {
    o.setAttribute(`data-${i}`, s.toString());
  }, Q = o.getBoundingClientRect(), Z = w.width || Q.width || 0, v = w.height || Q.height || 0;
  D("x", w.x || 0), D("y", w.y || 0), D("width", Z.toString()), D("height", v.toString());
  const bt = B("x", "0"), Ct = B("y", "0"), Mt = B("width", Z.toString()), Ht = B("height", v.toString());
  let f = j(bt, o, "x"), n = j(Ct, o, "y"), m = y(Mt, o, "width"), l = y(Ht, o, "height");
  const L = /* @__PURE__ */ new Map();
  let X = !1;
  const W = (i) => {
    if (o instanceof HTMLElement) {
      const s = getComputedStyle(o);
      return (s.position === "absolute" || s.position === "fixed") && s[i] !== "auto" && s[i] !== "";
    }
    return !1;
  }, _ = () => W("right"), G = () => W("left"), J = () => W("top"), F = () => W("bottom"), wt = (i) => {
    ["top", "right", "bottom", "left"].forEach((s) => {
      const u = L.get(s);
      u && (u.style.backgroundColor = i[s] ? "rgba(29, 98, 236, 1)" : "rgba(29, 98, 236, 0)");
    });
  }, Tt = () => {
    L.forEach((i) => {
      i.style.backgroundColor = "rgba(29, 98, 236, 0)";
    });
  }, Pt = () => {
    const i = (t == null ? void 0 : t.edges) || {}, s = (t == null ? void 0 : t.margin) ?? 4, u = {
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
        X || (r.style.backgroundColor = "rgba(29, 98, 236, 0)");
      };
      r.addEventListener("mouseenter", d), r.addEventListener("mouseleave", h), r._mouseEnterListener = d, r._mouseLeaveListener = h;
    };
    if (i.top) {
      const r = document.createElement("div");
      Object.assign(r.style, u, {
        top: `-${s}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), p(r), o.appendChild(r), L.set("top", r);
    }
    if (i.right) {
      const r = document.createElement("div");
      Object.assign(r.style, u, {
        top: "0",
        right: `-${s}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), p(r), o.appendChild(r), L.set("right", r);
    }
    if (i.bottom) {
      const r = document.createElement("div");
      Object.assign(r.style, u, {
        bottom: `-${s}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), p(r), o.appendChild(r), L.set("bottom", r);
    }
    if (i.left) {
      const r = document.createElement("div");
      Object.assign(r.style, u, {
        top: "0",
        left: `-${s}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), p(r), o.appendChild(r), L.set("left", r);
    }
  }, Bt = (i) => {
    L.forEach((s) => {
      s.style.pointerEvents = "auto", s.style.display = "block";
    });
  }, C = _t(o).styleCursor(!1);
  if (U) {
    const i = (d) => {
      var h;
      Y && t && C.resizable(!1), (h = a == null ? void 0 : a.onDrag) == null || h.call(a, {
        type: "dragstart",
        top: n,
        left: f,
        deltaX: 0,
        deltaY: 0
      });
    }, s = (d) => {
      if (f += d.dx, n += d.dy, d.target instanceof HTMLElement) {
        const h = getComputedStyle(d.target), I = h.position === "absolute" || h.position === "fixed";
        P && !I ? d.target.style.transform = `translate(${f}px, ${n}px)` : I ? (G() ? d.target.style.left = `${f}px` : _() ? _() && (d.target.style.right = `${-f}px`) : d.target.style.left = `${f}px`, J() ? d.target.style.top = `${n}px` : F() ? F() && (d.target.style.bottom = `${-n}px`) : d.target.style.top = `${n}px`) : d.target.style.transform = `translate(${f}px, ${n}px)`;
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
      Y && t && C.resizable(!0), d.target instanceof Element && (d.target.setAttribute("data-x", f.toString()), d.target.setAttribute("data-y", n.toString())), (h = a == null ? void 0 : a.onDrag) == null || h.call(a, {
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
        start: i,
        move: p,
        end: u
      }
    };
    g != null && g.startAxis && (r.startAxis = g.startAxis), g != null && g.lockAxis && (r.lockAxis = g.lockAxis), (g == null ? void 0 : g.max) !== void 0 && (r.max = g.max), (g == null ? void 0 : g.maxPerElement) !== void 0 && (r.maxPerElement = g.maxPerElement), C.draggable(r);
  }
  if (Y && t) {
    Pt();
    let i = 10, s = 10, u = 1 / 0, p = 1 / 0, r = m / l;
    const d = (e) => {
      var E, $, A, M;
      Bt(), X = !0, U && g && C.draggable(!1);
      const S = {
        top: !!((E = e.edges) != null && E.top),
        right: !!(($ = e.edges) != null && $.right),
        bottom: !!((A = e.edges) != null && A.bottom),
        left: !!((M = e.edges) != null && M.left)
      };
      wt(S), i = y((t == null ? void 0 : t.minWidth) ?? 10, e.target, "width"), s = y((t == null ? void 0 : t.minHeight) ?? 10, e.target, "height"), u = y((t == null ? void 0 : t.maxWidth) ?? 1 / 0, e.target, "width"), p = y((t == null ? void 0 : t.maxHeight) ?? 1 / 0, e.target, "height"), r = m / l, a != null && a.onResize && requestAnimationFrame(() => {
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
      var tt, et, ot, it, rt, st, dt, at, gt, ft, nt, ht, ut, pt, mt, lt, xt, yt, ct, Et, $t, At, St, Rt;
      const S = _(), E = G(), $ = J(), A = F(), M = e.target instanceof HTMLElement ? getComputedStyle(e.target) : null, R = ((tt = e.deltaRect) == null ? void 0 : tt.width) || 0, H = ((et = e.deltaRect) == null ? void 0 : et.height) || 0;
      let b = R, T = H;
      t != null && t.preserveAspectRatio && !S && !E && !$ && !A && ((ot = e.edges) != null && ot.left || (it = e.edges) != null && it.right ? T = R / r : ((rt = e.edges) != null && rt.top || (st = e.edges) != null && st.bottom) && (b = H * r));
      let q = m + b, V = l + T;
      if (q = Math.max(i, Math.min(u, q)), V = Math.max(s, Math.min(p, V)), b = q - m, T = V - l, b === 0 && T === 0)
        return;
      if ((S || E || $ || A) && M) {
        const x = e.target.getBoundingClientRect();
        (Math.abs(x.width - m) > 1 || Math.abs(x.height - l) > 1) && (m = x.width, l = x.height);
      }
      if (!S && !E && !$ && !A && ((dt = e.edges) != null && dt.top && (n -= T), (at = e.edges) != null && at.right, (gt = e.edges) != null && gt.bottom, (ft = e.edges) != null && ft.left && (f -= b)), m = q, l = V, ((nt = e.edges) != null && nt.left || (ht = e.edges) != null && ht.right) && (e.target.style.width = `${m}px`), ((ut = e.edges) != null && ut.top || (pt = e.edges) != null && pt.bottom) && (e.target.style.height = `${l}px`), (mt = e.edges) != null && mt.top && A) {
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
      !S && !E && !$ && !A && P && (e.target.style.transform = `translate(${f}px, ${n}px)`);
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
    }, I = (e) => {
      var E, $, A, M;
      X = !1, U && g && C.draggable(!0), Tt(), e.target instanceof Element && (e.target.setAttribute("data-x", f.toString()), e.target.setAttribute("data-y", n.toString()), e.target.setAttribute("data-width", m.toString()), e.target.setAttribute("data-height", l.toString()));
      const S = {
        top: !!((E = e.edges) != null && E.top),
        right: !!(($ = e.edges) != null && $.right),
        bottom: !!((A = e.edges) != null && A.bottom),
        left: !!((M = e.edges) != null && M.left)
      };
      requestAnimationFrame(() => {
        var R, H, b;
        (b = a == null ? void 0 : a.onResize) == null || b.call(a, {
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
        end: I
      }
    };
    (t == null ? void 0 : t.square) !== void 0 && (c.square = t.square), (t == null ? void 0 : t.preserveAspectRatio) !== void 0 && (c.preserveAspectRatio = t.preserveAspectRatio), t != null && t.invert && (c.invert = t.invert), (t == null ? void 0 : t.margin) !== void 0 && (c.margin = t.margin), (t == null ? void 0 : t.max) !== void 0 && (c.max = t.max), (t == null ? void 0 : t.maxPerElement) !== void 0 && (c.maxPerElement = t.maxPerElement), (t == null ? void 0 : t.minWidth) !== void 0 && (c.minWidth = y(t.minWidth, o, "width")), (t == null ? void 0 : t.minHeight) !== void 0 && (c.minHeight = y(t.minHeight, o, "height")), (t == null ? void 0 : t.maxWidth) !== void 0 && (c.maxWidth = y(t.maxWidth, o, "width")), (t == null ? void 0 : t.maxHeight) !== void 0 && (c.maxHeight = y(t.maxHeight, o, "height"));
    try {
      C.resizable(c);
    } catch (e) {
      console.error("Error setting up resizable:", e);
    }
  }
  if (o instanceof HTMLElement && (o.style.transition = "none", o.style.width = `${m}px`, o.style.height = `${l}px`), o instanceof HTMLElement) {
    const i = getComputedStyle(o), s = i.position === "absolute" || i.position === "fixed";
    P && !s ? o.style.transform = `translate(${f}px, ${n}px)` : s ? (!_() && !G() && (o.style.left = `${f}px`), !J() && !F() && (o.style.top = `${n}px`)) : o.style.transform = `translate(${f}px, ${n}px)`;
  }
  const O = (i, s) => {
    if (f = j(i, o, "x"), n = j(s, o, "y"), o instanceof HTMLElement) {
      const u = getComputedStyle(o), p = u.position === "absolute" || u.position === "fixed", r = (h) => {
        typeof h == "string" && z(h) && p ? o.style.left = h : o.style.left = `${f}px`;
      }, d = (h) => {
        typeof h == "string" && z(h) && p ? o.style.top = h : o.style.top = `${n}px`;
      };
      P && !p ? o.style.transform = `translate(${f}px, ${n}px)` : p ? (o.style.right = "", o.style.bottom = "", r(i), d(s)) : o.style.transform = `translate(${f}px, ${n}px)`;
    }
    o instanceof Element && (o.setAttribute("data-x", typeof i == "string" ? i : f.toString()), o.setAttribute("data-y", typeof s == "string" ? s : n.toString()));
  }, k = (i, s) => {
    if (m = typeof i == "number" ? i : y(i, o, "width"), l = typeof s == "number" ? s : y(s, o, "height"), o instanceof HTMLElement) {
      const u = (r) => {
        typeof r == "string" && z(r) ? o.style.width = r : o.style.width = `${m}px`;
      }, p = (r) => {
        typeof r == "string" && z(r) ? o.style.height = r : o.style.height = `${l}px`;
      };
      u(i), p(s);
    }
    o instanceof Element && (o.setAttribute("data-width", typeof i == "string" ? i : m.toString()), o.setAttribute("data-height", typeof s == "string" ? s : l.toString()));
  };
  return {
    cleanup: () => {
      L.forEach((i) => {
        i._mouseEnterListener && i.removeEventListener("mouseenter", i._mouseEnterListener), i._mouseLeaveListener && i.removeEventListener("mouseleave", i._mouseLeaveListener), i.remove();
      });
      try {
        C.unset();
      } catch (i) {
        console.error("Error unsetting interactable:", i);
      }
    },
    updatePositionAndSize: (i, s, u, p) => {
      O(i, s), k(u, p);
    },
    updatePosition: O,
    updateSize: k
  };
}
export {
  Xt as makeElementDraggableResizable
};
//# sourceMappingURL=interact-helper.mjs.map
