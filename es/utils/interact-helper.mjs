import _t from "interactjs";
import { throttle as Ft } from "@vexip-ui/utils";
import { parsePositionValue as U, parseCssSize as y, isCssUnitValue as Y } from "./css-units.mjs";
const It = 2;
function Xt(o, Lt = {}, g) {
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
  }, ...Lt }, { draggable: X, resizable: G, useCssTransforms: _, dragOptions: a, resizeOptions: t } = T, F = (i, s) => o.getAttribute(`data-${i}`) || s, I = (i, s) => {
    o.setAttribute(`data-${i}`, s.toString());
  }, Q = o.getBoundingClientRect(), Z = T.width || Q.width || 0, v = T.height || Q.height || 0;
  I("x", T.x || 0), I("y", T.y || 0), I("width", Z.toString()), I("height", v.toString());
  const Ct = F("x", "0"), bt = F("y", "0"), Mt = F("width", Z.toString()), Pt = F("height", v.toString());
  let n = U(Ct, o, "x"), f = U(bt, o, "y"), p = y(Mt, o, "width"), m = y(Pt, o, "height");
  const L = /* @__PURE__ */ new Map();
  let J = !1;
  const q = (i) => {
    if (o instanceof HTMLElement) {
      const s = getComputedStyle(o);
      return (s.position === "absolute" || s.position === "fixed") && s[i] !== "auto" && s[i] !== "";
    }
    return !1;
  }, P = () => q("right"), B = () => q("left"), D = () => q("top"), H = () => q("bottom"), Ht = (i) => {
    ["top", "right", "bottom", "left"].forEach((s) => {
      const u = L.get(s);
      u && (u.style.backgroundColor = i[s] ? "rgba(29, 98, 236, 1)" : "rgba(29, 98, 236, 0)");
    });
  }, wt = () => {
    L.forEach((i) => {
      i.style.backgroundColor = "rgba(29, 98, 236, 0)";
    });
  }, Tt = () => {
    const i = (t == null ? void 0 : t.edges) || {}, s = (t == null ? void 0 : t.margin) ?? 4, u = {
      position: "absolute",
      backgroundColor: "rgba(29, 98, 236, 0)",
      // 初始透明
      pointerEvents: "auto",
      // 设置为auto以支持hover效果
      transition: "background-color 0.1s ease"
    }, l = (r) => {
      const d = () => {
        r.style.backgroundColor = "rgba(29, 98, 236, 1)";
      }, h = () => {
        J || (r.style.backgroundColor = "rgba(29, 98, 236, 0)");
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
      }), l(r), o.appendChild(r), L.set("top", r);
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
      }), l(r), o.appendChild(r), L.set("right", r);
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
      }), l(r), o.appendChild(r), L.set("bottom", r);
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
      }), l(r), o.appendChild(r), L.set("left", r);
    }
  }, Bt = (i) => {
    L.forEach((s) => {
      s.style.pointerEvents = "auto", s.style.display = "block";
    });
  }, b = _t(o).styleCursor(!1);
  if (X) {
    const i = (d) => {
      var h;
      G && t && b.resizable(!1), (h = g == null ? void 0 : g.onDrag) == null || h.call(g, {
        type: "dragstart",
        top: f,
        left: n,
        deltaX: 0,
        deltaY: 0
      });
    }, s = (d) => {
      if (n += d.dx, f += d.dy, d.target instanceof HTMLElement) {
        const h = getComputedStyle(d.target), V = h.position === "absolute" || h.position === "fixed";
        _ && !V ? d.target.style.transform = `translate(${n}px, ${f}px)` : V ? (P(), B(), D(), H(), B() ? d.target.style.left = `${n}px` : P() ? P() && (d.target.style.right = `${-n}px`) : d.target.style.left = `${n}px`, D() ? d.target.style.top = `${f}px` : H() ? H() && (d.target.style.bottom = `${-f}px`) : d.target.style.top = `${f}px`) : d.target.style.transform = `translate(${n}px, ${f}px)`;
      }
      d.target._dataUpdateTimer || (d.target._dataUpdateTimer = setTimeout(() => {
        d.target instanceof Element && (d.target.setAttribute("data-x", n.toString()), d.target.setAttribute("data-y", f.toString())), delete d.target._dataUpdateTimer;
      }, 50)), g != null && g.onDrag && requestAnimationFrame(() => {
        var h;
        (h = g.onDrag) == null || h.call(g, {
          type: "dragmove",
          top: f,
          left: n,
          deltaX: d.dx,
          deltaY: d.dy
        });
      });
    }, u = (d) => {
      var h;
      G && t && b.resizable(!0), d.target instanceof Element && (d.target.setAttribute("data-x", n.toString()), d.target.setAttribute("data-y", f.toString())), (h = g == null ? void 0 : g.onDrag) == null || h.call(g, {
        type: "dragend",
        top: f,
        left: n,
        deltaX: d.dx,
        deltaY: d.dy
      });
    }, l = Ft(
      s,
      (a == null ? void 0 : a.threshold) ?? It
    ), r = {
      enabled: !0,
      allowFrom: a == null ? void 0 : a.allowFrom,
      ignoreFrom: a == null ? void 0 : a.ignoreFrom,
      modifiers: (a == null ? void 0 : a.modifiers) || [],
      listeners: {
        start: i,
        move: l,
        end: u
      }
    };
    a != null && a.startAxis && (r.startAxis = a.startAxis), a != null && a.lockAxis && (r.lockAxis = a.lockAxis), (a == null ? void 0 : a.max) !== void 0 && (r.max = a.max), (a == null ? void 0 : a.maxPerElement) !== void 0 && (r.maxPerElement = a.maxPerElement), b.draggable(r);
  }
  if (G && t) {
    Tt();
    let i = 10, s = 10, u = 1 / 0, l = 1 / 0, r = p / m;
    const d = (e) => {
      var E, $, A, M;
      Bt(), J = !0, X && a && b.draggable(!1);
      const S = {
        top: !!((E = e.edges) != null && E.top),
        right: !!(($ = e.edges) != null && $.right),
        bottom: !!((A = e.edges) != null && A.bottom),
        left: !!((M = e.edges) != null && M.left)
      };
      Ht(S), i = y((t == null ? void 0 : t.minWidth) ?? 10, e.target, "width"), s = y((t == null ? void 0 : t.minHeight) ?? 10, e.target, "height"), u = y((t == null ? void 0 : t.maxWidth) ?? 1 / 0, e.target, "width"), l = y((t == null ? void 0 : t.maxHeight) ?? 1 / 0, e.target, "height"), r = p / m, g != null && g.onResize && requestAnimationFrame(() => {
        var R;
        (R = g.onResize) == null || R.call(g, {
          type: "resizestart",
          width: p,
          height: m,
          top: f,
          left: n,
          deltaWidth: 0,
          deltaHeight: 0,
          edges: S
        });
      });
    }, h = (e) => {
      var tt, et, ot, it, rt, st, dt, gt, at, nt, ft, ht, ut, lt, pt, mt, xt, yt, ct, Et, $t, At, St, Rt;
      const S = P(), E = B(), $ = D(), A = H(), M = e.target instanceof HTMLElement ? getComputedStyle(e.target) : null, R = ((tt = e.deltaRect) == null ? void 0 : tt.width) || 0, w = ((et = e.deltaRect) == null ? void 0 : et.height) || 0;
      let C = R, W = w;
      t != null && t.preserveAspectRatio && !S && !E && !$ && !A && ((ot = e.edges) != null && ot.left || (it = e.edges) != null && it.right ? W = R / r : ((rt = e.edges) != null && rt.top || (st = e.edges) != null && st.bottom) && (C = w * r));
      let j = p + C, z = m + W;
      if (j = Math.max(i, Math.min(u, j)), z = Math.max(s, Math.min(l, z)), C = j - p, W = z - m, C === 0 && W === 0)
        return;
      if ((S || E || $ || A) && M) {
        const x = e.target.getBoundingClientRect();
        (Math.abs(x.width - p) > 1 || Math.abs(x.height - m) > 1) && (p = x.width, m = x.height);
      }
      if (!S && !E && !$ && !A && ((dt = e.edges) != null && dt.top && (f -= W), (gt = e.edges) != null && gt.right, (at = e.edges) != null && at.bottom, (nt = e.edges) != null && nt.left && (n -= C)), p = j, m = z, ((ft = e.edges) != null && ft.left || (ht = e.edges) != null && ht.right) && (e.target.style.width = `${p}px`), ((ut = e.edges) != null && ut.top || (lt = e.edges) != null && lt.bottom) && (e.target.style.height = `${m}px`), (pt = e.edges) != null && pt.top && A) {
        const x = (mt = e.target.parentElement) == null ? void 0 : mt.getBoundingClientRect();
        if (x) {
          const K = parseInt(getComputedStyle(e.target).bottom || "0", 10), N = x.height - m - K;
          e.target.style.top = `${N}px`;
        }
      }
      if ((xt = e.edges) != null && xt.left && S) {
        const x = (yt = e.target.parentElement) == null ? void 0 : yt.getBoundingClientRect();
        if (x) {
          const K = parseInt(getComputedStyle(e.target).right || "0", 10), N = x.width - p - K;
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
      !S && !E && !$ && !A && _ && (e.target.style.transform = `translate(${n}px, ${f}px)`);
      const Wt = {
        top: !!(($t = e.edges) != null && $t.top),
        right: !!((At = e.edges) != null && At.right),
        bottom: !!((St = e.edges) != null && St.bottom),
        left: !!((Rt = e.edges) != null && Rt.left)
      };
      g != null && g.onResize && requestAnimationFrame(() => {
        var x;
        (x = g.onResize) == null || x.call(g, {
          type: "resizemove",
          width: p,
          height: m,
          top: f,
          left: n,
          deltaWidth: R,
          deltaHeight: w,
          edges: Wt
        });
      });
    }, V = (e) => {
      var E, $, A, M;
      J = !1, X && a && b.draggable(!0), wt(), e.target instanceof Element && (e.target.setAttribute("data-x", n.toString()), e.target.setAttribute("data-y", f.toString()), e.target.setAttribute("data-width", p.toString()), e.target.setAttribute("data-height", m.toString()));
      const S = {
        top: !!((E = e.edges) != null && E.top),
        right: !!(($ = e.edges) != null && $.right),
        bottom: !!((A = e.edges) != null && A.bottom),
        left: !!((M = e.edges) != null && M.left)
      };
      requestAnimationFrame(() => {
        var R, w, C;
        (C = g == null ? void 0 : g.onResize) == null || C.call(g, {
          type: "resizeend",
          width: p,
          height: m,
          top: f,
          left: n,
          deltaWidth: ((R = e.deltaRect) == null ? void 0 : R.width) || 0,
          deltaHeight: ((w = e.deltaRect) == null ? void 0 : w.height) || 0,
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
    (t == null ? void 0 : t.square) !== void 0 && (c.square = t.square), (t == null ? void 0 : t.preserveAspectRatio) !== void 0 && (c.preserveAspectRatio = t.preserveAspectRatio), t != null && t.invert && (c.invert = t.invert), (t == null ? void 0 : t.margin) !== void 0 && (c.margin = t.margin), (t == null ? void 0 : t.max) !== void 0 && (c.max = t.max), (t == null ? void 0 : t.maxPerElement) !== void 0 && (c.maxPerElement = t.maxPerElement), (t == null ? void 0 : t.minWidth) !== void 0 && (c.minWidth = y(t.minWidth, o, "width")), (t == null ? void 0 : t.minHeight) !== void 0 && (c.minHeight = y(t.minHeight, o, "height")), (t == null ? void 0 : t.maxWidth) !== void 0 && (c.maxWidth = y(t.maxWidth, o, "width")), (t == null ? void 0 : t.maxHeight) !== void 0 && (c.maxHeight = y(t.maxHeight, o, "height"));
    try {
      b.resizable(c);
    } catch (e) {
      console.error("Error setting up resizable:", e);
    }
  }
  if (o instanceof HTMLElement && (o.style.transition = "none", o.style.width = `${p}px`, o.style.height = `${m}px`), o instanceof HTMLElement) {
    const i = getComputedStyle(o), s = i.position === "absolute" || i.position === "fixed";
    _ && !s ? o.style.transform = `translate(${n}px, ${f}px)` : s ? (!P() && !B() && (o.style.left = `${n}px`), !D() && !H() && (o.style.top = `${f}px`)) : o.style.transform = `translate(${n}px, ${f}px)`;
  }
  const O = (i, s) => {
    if (n = U(i, o, "x"), f = U(s, o, "y"), o instanceof HTMLElement) {
      const u = getComputedStyle(o), l = u.position === "absolute" || u.position === "fixed", r = (h) => {
        typeof h == "string" && Y(h) && l ? o.style.left = h : o.style.left = `${n}px`;
      }, d = (h) => {
        typeof h == "string" && Y(h) && l ? o.style.top = h : o.style.top = `${f}px`;
      };
      _ && !l ? o.style.transform = `translate(${n}px, ${f}px)` : l ? (!P() && !B() && r(i), !D() && !H() && d(s)) : o.style.transform = `translate(${n}px, ${f}px)`;
    }
    o instanceof Element && (o.setAttribute("data-x", typeof i == "string" ? i : n.toString()), o.setAttribute("data-y", typeof s == "string" ? s : f.toString()));
  }, k = (i, s) => {
    if (p = typeof i == "number" ? i : y(i, o, "width"), m = typeof s == "number" ? s : y(s, o, "height"), o instanceof HTMLElement) {
      const u = (r) => {
        typeof r == "string" && Y(r) ? o.style.width = r : o.style.width = `${p}px`;
      }, l = (r) => {
        typeof r == "string" && Y(r) ? o.style.height = r : o.style.height = `${m}px`;
      };
      u(i), l(s);
    }
    o instanceof Element && (o.setAttribute("data-width", typeof i == "string" ? i : p.toString()), o.setAttribute("data-height", typeof s == "string" ? s : m.toString()));
  };
  return {
    cleanup: () => {
      L.forEach((i) => {
        i._mouseEnterListener && i.removeEventListener("mouseenter", i._mouseEnterListener), i._mouseLeaveListener && i.removeEventListener("mouseleave", i._mouseLeaveListener), i.remove();
      });
      try {
        b.unset();
      } catch (i) {
        console.error("Error unsetting interactable:", i);
      }
    },
    updatePositionAndSize: (i, s, u, l) => {
      O(i, s), k(u, l);
    },
    updatePosition: O,
    updateSize: k
  };
}
export {
  Xt as makeElementDraggableResizable
};
//# sourceMappingURL=interact-helper.mjs.map
