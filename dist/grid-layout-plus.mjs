(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;top:0;right:3px;bottom:3px;left:0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{top:0;right:0;bottom:3px;left:3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}.vgl-item__edge{position:absolute;pointer-events:auto;background-color:transparent;transition:background-color .12s ease}.vgl-item__edge--top,.vgl-item__edge--bottom{right:0;left:0;height:2px}.vgl-item__edge--left,.vgl-item__edge--right{top:0;bottom:0;width:2px}.vgl-item__edge--top{top:0}.vgl-item__edge--bottom{bottom:0}.vgl-item__edge--left{left:0}.vgl-item__edge--right{right:0}.vgl-item__edge.is-enabled:not(.is-active):hover{background-color:#1d62ec}.vgl-item__edge.is-active{background-color:#1d62ec}.draggable-resizable-wrapper{position:relative}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as In, inject as gr, shallowRef as mo, reactive as Ut, ref as Ke, toRef as yo, onBeforeMount as jr, onMounted as Bn, watchEffect as bo, onBeforeUnmount as $r, computed as et, watch as ge, createElementBlock as ct, openBlock as rt, normalizeStyle as Wr, normalizeClass as kt, renderSlot as pn, createCommentVNode as Nt, nextTick as ht, provide as vr, toRefs as mr, withDirectives as xo, Fragment as wo, renderList as Eo, createBlock as So, mergeProps as zo, withCtx as To, createVNode as ko, vShow as _o, onUnmounted as Ro, normalizeProps as Po, guardReactiveProps as Mo } from "vue";
const Do = typeof window < "u";
var yr;
Do && ((yr = window == null ? void 0 : window.navigator) != null && yr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ve(s) {
  return s == null;
}
function qr() {
}
const Oo = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(Oo)));
function Co() {
  const s = /* @__PURE__ */ new Map();
  return {
    on(d, p) {
      const c = s.get(d);
      c != null && c.add(p) || s.set(d, /* @__PURE__ */ new Set([p]));
    },
    off(d, p) {
      const c = s.get(d);
      c && c.delete(p);
    },
    clear(d) {
      const p = s.get(d);
      p && p.clear();
    },
    clearAll() {
      s.clear();
    },
    emit(d, ...p) {
      const c = s.get(d);
      c && c.forEach((y) => {
        y(...p);
      });
    }
  };
}
function Mt(s, d = 16) {
  if (typeof s != "function")
    return qr;
  const p = (...v) => {
    s(...v);
  };
  if (d <= 0)
    return Nr(p);
  let c = 0, y;
  return function(...v) {
    const k = Date.now(), w = k - c;
    clearTimeout(y), w >= d ? (c = k, p(...v)) : y = setTimeout(
      () => {
        c = Date.now(), p(...v);
      },
      Math.max(0, d - w)
    );
  };
}
function Ao(s, d = 100) {
  if (typeof s != "function")
    return qr;
  const p = (...y) => {
    s(...y);
  };
  if (d <= 0)
    return Nr(p);
  let c;
  return function(...y) {
    clearTimeout(c), c = setTimeout(() => {
      p(...y);
    }, d);
  };
}
function Nr(s) {
  if (typeof s != "function")
    return s;
  let d = !1, p, c;
  return function(...y) {
    return p = y, d || (d = !0, c = Promise.resolve().then(() => (d = !1, c = void 0, s(...p)))), c;
  };
}
const Yt = /* @__PURE__ */ new Set(), Xr = /* @__PURE__ */ new WeakMap();
function Io() {
  Yt.forEach((s) => {
    s(...Xr.get(s));
  }), Yt.clear();
}
function je(s, ...d) {
  if (typeof s != "function")
    return s;
  Xr.set(s, d), !Yt.has(s) && (Yt.add(s), Yt.size === 1 && Promise.resolve().then(Io));
}
const Yr = Symbol("LAYOUT_KEY"), Vr = Symbol("EMITTER_KEY");
function Bo(s) {
  let d = 0, p;
  for (let c = 0, y = s.length; c < y; c++)
    p = s[c].y + s[c].h, p > d && (d = p);
  return d;
}
function Dn(s) {
  const d = Array(s.length);
  for (let p = 0, c = s.length; p < c; p++)
    d[p] = Fo(s[p]);
  return d;
}
function Fo(s) {
  return { ...s };
}
function Gr(s, d) {
  return !(s === d || s.x + s.w <= d.x || s.x >= d.x + d.w || s.y + s.h <= d.y || s.y >= d.y + d.h);
}
function _t(s, d, p) {
  const c = Kr(s), y = Jr(s), v = Array(s.length);
  for (let k = 0, w = y.length; k < w; k++) {
    let h = y[k];
    h.static || (h = Lo(c, h, d, p), c.push(h)), v[s.findIndex((E) => E.i === h.i)] = h, h.moved = !1;
  }
  return v;
}
function Lo(s, d, p, c) {
  if (p)
    for (; d.y > 0 && !Vt(s, d); )
      d.y--;
  else if (c) {
    const v = c[d.i].y;
    for (; d.y > v && !Vt(s, d); )
      d.y--;
  }
  let y;
  for (; y = Vt(s, d); )
    d.y = y.y + y.h;
  return d;
}
function Ho(s, d) {
  const p = Kr(s);
  for (let c = 0, y = s.length; c < y; c++) {
    const v = s[c];
    if (v.x + v.w > d.cols && (v.x = d.cols - v.w), v.x < 0 && (v.x = 0, v.w = d.cols), !v.static) p.push(v);
    else
      for (; Vt(p, v); )
        v.y++;
  }
  return s;
}
function br(s, d) {
  for (let p = 0, c = s.length; p < c; p++)
    if (s[p].i === d) return s[p];
}
function Vt(s, d) {
  for (let p = 0, c = s.length; p < c; p++)
    if (Gr(s[p], d)) return s[p];
}
function Ur(s, d) {
  return s.filter((p) => Gr(p, d));
}
function Kr(s) {
  return s.filter((d) => d.static);
}
function On(s, d, p, c, y = !1, v = !1) {
  if (d.static) return s;
  const k = d.x, w = d.y, h = c && d.y > c;
  typeof p == "number" && (d.x = p), typeof c == "number" && (d.y = c), d.moved = !0;
  let E = Jr(s);
  h && (E = E.reverse());
  const ie = Ur(E, d);
  if (v && ie.length)
    return d.x = k, d.y = w, d.moved = !1, s;
  for (let X = 0, ye = ie.length; X < ye; X++) {
    const oe = ie[X];
    oe.moved || d.y > oe.y && d.y - oe.y > oe.h / 4 || (oe.static ? s = xr(s, oe, d, y) : s = xr(s, d, oe, y));
  }
  return s;
}
function xr(s, d, p, c) {
  if (c) {
    const v = {
      x: p.x,
      y: p.y,
      w: p.w,
      h: p.h
    };
    if (v.y = Math.max(d.y - p.h, 0), !Vt(s, v))
      return On(s, p, void 0, v.y, !1);
  }
  return On(s, p, void 0, p.y + 1, !1);
}
function jo(s, d, p, c) {
  const y = "translate3d(" + d + "px," + s + "px, 0)";
  return {
    transform: y,
    WebkitTransform: y,
    MozTransform: y,
    msTransform: y,
    OTransform: y,
    width: p + "px",
    height: c + "px",
    position: "absolute"
  };
}
function $o(s, d, p, c) {
  const y = "translate3d(" + d * -1 + "px," + s + "px, 0)";
  return {
    transform: y,
    WebkitTransform: y,
    MozTransform: y,
    msTransform: y,
    OTransform: y,
    width: p + "px",
    height: c + "px",
    position: "absolute"
  };
}
function Wo(s, d, p, c) {
  return {
    top: s + "px",
    left: d + "px",
    width: p + "px",
    height: c + "px",
    position: "absolute"
  };
}
function qo(s, d, p, c) {
  return {
    top: s + "px",
    right: d + "px",
    width: p + "px",
    height: c + "px",
    position: "absolute"
  };
}
function Jr(s) {
  return Array.from(s).sort(function(d, p) {
    return d.y === p.y && d.x === p.x ? 0 : d.y > p.y || d.y === p.y && d.x > p.x ? 1 : -1;
  });
}
function No(s, d) {
  d = d || "Layout";
  const p = ["x", "y", "w", "h"], c = [];
  if (!Array.isArray(s)) throw new Error(d + " must be an array!");
  for (let y = 0, v = s.length; y < v; y++) {
    const k = s[y];
    for (let w = 0; w < p.length; w++)
      if (typeof k[p[w]] != "number")
        throw new Error(
          "VueGridLayout: " + d + "[" + y + "]." + p[w] + " must be a number!"
        );
    if (k.i === void 0 || k.i === null)
      throw new Error("VueGridLayout: " + d + "[" + y + "].i cannot be null!");
    if (typeof k.i != "number" && typeof k.i != "string")
      throw new Error("VueGridLayout: " + d + "[" + y + "].i must be a string or number!");
    if (c.indexOf(k.i) >= 0)
      throw new Error("VueGridLayout: " + d + "[" + y + "].i must be unique!");
    if (c.push(k.i), k.static !== void 0 && typeof k.static != "boolean")
      throw new Error("VueGridLayout: " + d + "[" + y + "].static must be a boolean!");
  }
}
function Xo(s, d = "vgl") {
  const p = () => `${d}-${s}`;
  return {
    b: p,
    be: (k) => `${p()}__${k}`,
    bm: (k) => `${p()}--${k}`,
    bem: (k, w) => `${p()}__${k}--${w}`
  };
}
function wr(s) {
  return Yo(s);
}
function Yo(s) {
  var v;
  const d = ((v = s.target) == null ? void 0 : v.offsetParent) || document.body, p = s.offsetParent === document.body ? { left: 0, top: 0 } : d.getBoundingClientRect(), c = s.clientX + d.scrollLeft - p.left, y = s.clientY + d.scrollTop - p.top;
  return { x: c, y };
}
function Er(s, d, p, c) {
  return Vo(s) ? {
    deltaX: p - s,
    deltaY: c - d,
    lastX: s,
    lastY: d,
    x: p,
    y: c
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: p,
    lastY: c,
    x: p,
    y: c
  };
}
function Vo(s) {
  return typeof s == "number" && !Number.isNaN(s);
}
function Go(s, d) {
  const p = Qr(s);
  let c = p[0];
  for (let y = 1, v = p.length; y < v; y++) {
    const k = p[y];
    d > s[k] && (c = k);
  }
  return c;
}
function Zr(s, d) {
  if (!d[s])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + s + " is missing!"
    );
  return d[s];
}
function Uo(s, d, p, c, y, v, k) {
  if (d[c]) return Dn(d[c]);
  let w = s;
  const h = Qr(p), E = h.slice(h.indexOf(c));
  for (let ie = 0, X = E.length; ie < X; ie++) {
    const ye = E[ie];
    if (d[ye]) {
      w = d[ye];
      break;
    }
  }
  return w = Dn(w || []), _t(Ho(w, { cols: v }), k);
}
function Qr(s) {
  return Object.keys(s).sort((p, c) => s[p] - s[c]);
}
let Ko = "auto";
function Jo() {
  return typeof document < "u";
}
function Sr() {
  return Jo() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : Ko;
}
function Zo(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Xt = { exports: {} }, Qo = Xt.exports, zr;
function ea() {
  return zr || (zr = 1, function(s, d) {
    (function(p, c) {
      s.exports = c();
    })(Qo, function() {
      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable;
          })), n.push.apply(n, r);
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e] != null ? arguments[e] : {};
          e % 2 ? p(Object(n), !0).forEach(function(r) {
            h(t, r, n[r]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
        }
        return t;
      }
      function y(t) {
        return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, y(t);
      }
      function v(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function k(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Oe(r.key), r);
        }
      }
      function w(t, e, n) {
        return e && k(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
      }
      function h(t, e, n) {
        return (e = Oe(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
      }
      function E(t, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && X(t, e);
      }
      function ie(t) {
        return ie = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, ie(t);
      }
      function X(t, e) {
        return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
          return n.__proto__ = r, n;
        }, X(t, e);
      }
      function ye(t) {
        if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function oe(t) {
        var e = function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }();
        return function() {
          var n, r = ie(t);
          if (e) {
            var i = ie(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return function(o, a) {
            if (a && (typeof a == "object" || typeof a == "function")) return a;
            if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return ye(o);
          }(this, n);
        };
      }
      function be() {
        return be = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
          var r = function(o, a) {
            for (; !Object.prototype.hasOwnProperty.call(o, a) && (o = ie(o)) !== null; ) ;
            return o;
          }(t, e);
          if (r) {
            var i = Object.getOwnPropertyDescriptor(r, e);
            return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
          }
        }, be.apply(this, arguments);
      }
      function Oe(t) {
        var e = function(n, r) {
          if (typeof n != "object" || n === null) return n;
          var i = n[Symbol.toPrimitive];
          if (i !== void 0) {
            var o = i.call(n, r);
            if (typeof o != "object") return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(n);
        }(t, "string");
        return typeof e == "symbol" ? e : e + "";
      }
      var Me = function(t) {
        return !(!t || !t.Window) && t instanceof t.Window;
      }, Ee = void 0, he = void 0;
      function $(t) {
        Ee = t;
        var e = t.document.createTextNode("");
        e.ownerDocument !== t.document && typeof t.wrap == "function" && t.wrap(e) === e && (t = t.wrap(t)), he = t;
      }
      function L(t) {
        return Me(t) ? t : (t.ownerDocument || t).defaultView || he.window;
      }
      typeof window < "u" && window && $(window);
      var Y = function(t) {
        return !!t && y(t) === "object";
      }, Q = function(t) {
        return typeof t == "function";
      }, b = { window: function(t) {
        return t === he || Me(t);
      }, docFrag: function(t) {
        return Y(t) && t.nodeType === 11;
      }, object: Y, func: Q, number: function(t) {
        return typeof t == "number";
      }, bool: function(t) {
        return typeof t == "boolean";
      }, string: function(t) {
        return typeof t == "string";
      }, element: function(t) {
        if (!t || y(t) !== "object") return !1;
        var e = L(t) || he;
        return /object|function/.test(typeof Element > "u" ? "undefined" : y(Element)) ? t instanceof Element || t instanceof e.Element : t.nodeType === 1 && typeof t.nodeName == "string";
      }, plainObject: function(t) {
        return Y(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString());
      }, array: function(t) {
        return Y(t) && t.length !== void 0 && Q(t.splice);
      } };
      function _e(t) {
        var e = t.interaction;
        if (e.prepared.name === "drag") {
          var n = e.prepared.axis;
          n === "x" ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : n === "y" && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
        }
      }
      function D(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "drag") {
          var r = n.prepared.axis;
          if (r === "x" || r === "y") {
            var i = r === "x" ? "y" : "x";
            e.page[i] = n.coords.start.page[i], e.client[i] = n.coords.start.client[i], e.delta[i] = 0;
          }
        }
      }
      var Z = { id: "actions/drag", install: function(t) {
        var e = t.actions, n = t.Interactable, r = t.defaults;
        n.prototype.draggable = Z.draggable, e.map.drag = Z, e.methodDict.drag = "draggable", r.actions.drag = Z.defaults;
      }, listeners: { "interactions:before-action-move": _e, "interactions:action-resume": _e, "interactions:action-move": D, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, r = t.buttons, i = n.options.drag;
        if (i && i.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || (r & n.options.drag.mouseButtons) != 0)) return t.action = { name: "drag", axis: i.lockAxis === "start" ? i.startAxis : i.lockAxis }, !1;
      } }, draggable: function(t) {
        return b.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : b.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
      }, beforeMove: _e, move: D, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(t) {
        return t.search("drag") === 0;
      } }, R = Z, H = { init: function(t) {
        var e = t;
        H.document = e.document, H.DocumentFragment = e.DocumentFragment || ee, H.SVGElement = e.SVGElement || ee, H.SVGSVGElement = e.SVGSVGElement || ee, H.SVGElementInstance = e.SVGElementInstance || ee, H.Element = e.Element || ee, H.HTMLElement = e.HTMLElement || H.Element, H.Event = e.Event, H.Touch = e.Touch || ee, H.PointerEvent = e.PointerEvent || e.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function ee() {
      }
      var se = H, ce = { init: function(t) {
        var e = se.Element, n = t.navigator || {};
        ce.supportsTouch = "ontouchstart" in t || b.func(t.DocumentTouch) && se.document instanceof t.DocumentTouch, ce.supportsPointerEvent = n.pointerEnabled !== !1 && !!se.PointerEvent, ce.isIOS = /iP(hone|od|ad)/.test(n.platform), ce.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), ce.isIe9 = /MSIE 9/.test(n.userAgent), ce.isOperaMobile = n.appName === "Opera" && ce.supportsTouch && /Presto/.test(n.userAgent), ce.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", ce.pEventTypes = ce.supportsPointerEvent ? se.PointerEvent === t.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, ce.wheelEvent = se.document && "onmousewheel" in se.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, ue = ce;
      function V(t, e) {
        if (t.contains) return t.contains(e);
        for (; e; ) {
          if (e === t) return !0;
          e = e.parentNode;
        }
        return !1;
      }
      function Re(t, e) {
        for (; b.element(t); ) {
          if (fe(t, e)) return t;
          t = Pe(t);
        }
        return null;
      }
      function Pe(t) {
        var e = t.parentNode;
        if (b.docFrag(e)) {
          for (; (e = e.host) && b.docFrag(e); ) ;
          return e;
        }
        return e;
      }
      function fe(t, e) {
        return he !== Ee && (e = e.replace(/\/deep\//g, " ")), t[ue.prefixedMatchesSelector](e);
      }
      var pe = function(t) {
        return t.parentNode || t.host;
      };
      function A(t, e) {
        for (var n, r = [], i = t; (n = pe(i)) && i !== e && n !== i.ownerDocument; ) r.unshift(i), i = n;
        return r;
      }
      function B(t, e, n) {
        for (; b.element(t); ) {
          if (fe(t, e)) return !0;
          if ((t = Pe(t)) === n) return fe(t, e);
        }
        return !1;
      }
      function ve(t) {
        return t.correspondingUseElement || t;
      }
      function de(t) {
        var e = t instanceof se.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
        return e && { left: e.left, right: e.right, top: e.top, bottom: e.bottom, width: e.width || e.right - e.left, height: e.height || e.bottom - e.top };
      }
      function j(t) {
        var e, n = de(t);
        if (!ue.isIOS7 && n) {
          var r = { x: (e = (e = L(t)) || he).scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };
          n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y;
        }
        return n;
      }
      function K(t) {
        for (var e = []; t; ) e.push(t), t = Pe(t);
        return e;
      }
      function re(t) {
        return !!b.string(t) && (se.document.querySelector(t), !0);
      }
      function C(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function xt(t, e, n) {
        return t === "parent" ? Pe(n) : t === "self" ? e.getRect(n) : Re(n, t);
      }
      function tt(t, e, n, r) {
        var i = t;
        return b.string(i) ? i = xt(i, e, n) : b.func(i) && (i = i.apply(void 0, r)), b.element(i) && (i = j(i)), i;
      }
      function xe(t) {
        return t && { x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top };
      }
      function M(t) {
        return !t || "x" in t && "y" in t || ((t = C({}, t)).x = t.left || 0, t.y = t.top || 0, t.width = t.width || (t.right || 0) - t.x, t.height = t.height || (t.bottom || 0) - t.y), t;
      }
      function Te(t, e, n) {
        t.left && (e.left += n.x), t.right && (e.right += n.x), t.top && (e.top += n.y), t.bottom && (e.bottom += n.y), e.width = e.right - e.left, e.height = e.bottom - e.top;
      }
      function ke(t, e, n) {
        var r = n && t.options[n];
        return xe(tt(r && r.origin || t.options.origin, t, e, [t && e])) || { x: 0, y: 0 };
      }
      function we(t, e) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(u) {
          return !0;
        }, r = arguments.length > 3 ? arguments[3] : void 0;
        if (r = r || {}, b.string(t) && t.search(" ") !== -1 && (t = Ce(t)), b.array(t)) return t.forEach(function(u) {
          return we(u, e, n, r);
        }), r;
        if (b.object(t) && (e = t, t = ""), b.func(e) && n(t)) r[t] = r[t] || [], r[t].push(e);
        else if (b.array(e)) for (var i = 0, o = e; i < o.length; i++) {
          var a = o[i];
          we(t, a, n, r);
        }
        else if (b.object(e)) for (var l in e)
          we(Ce(l).map(function(u) {
            return "".concat(t).concat(u);
          }), e[l], n, r);
        return r;
      }
      function Ce(t) {
        return t.trim().split(/ +/);
      }
      var Ie = function(t, e) {
        return Math.sqrt(t * t + e * e);
      }, We = ["webkit", "moz"];
      function qe(t, e) {
        t.__set || (t.__set = {});
        var n = function(i) {
          if (We.some(function(o) {
            return i.indexOf(o) === 0;
          })) return 1;
          typeof t[i] != "function" && i !== "__set" && Object.defineProperty(t, i, { get: function() {
            return i in t.__set ? t.__set[i] : t.__set[i] = e[i];
          }, set: function(o) {
            t.__set[i] = o;
          }, configurable: !0 });
        };
        for (var r in e) n(r);
        return t;
      }
      function Be(t, e) {
        t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp;
      }
      function Je(t) {
        t.page.x = 0, t.page.y = 0, t.client.x = 0, t.client.y = 0;
      }
      function it(t) {
        return t instanceof se.Event || t instanceof se.Touch;
      }
      function Ae(t, e, n) {
        return t = t || "page", (n = n || {}).x = e[t + "X"], n.y = e[t + "Y"], n;
      }
      function S(t, e) {
        return e = e || { x: 0, y: 0 }, ue.isOperaMobile && it(t) ? (Ae("screen", t, e), e.x += window.scrollX, e.y += window.scrollY) : Ae("page", t, e), e;
      }
      function W(t) {
        return b.number(t.pointerId) ? t.pointerId : t.identifier;
      }
      function ae(t, e, n) {
        var r = e.length > 1 ? le(e) : e[0];
        S(r, t.page), function(i, o) {
          o = o || {}, ue.isOperaMobile && it(i) ? Ae("screen", i, o) : Ae("client", i, o);
        }(r, t.client), t.timeStamp = n;
      }
      function te(t) {
        var e = [];
        return b.array(t) ? (e[0] = t[0], e[1] = t[1]) : t.type === "touchend" ? t.touches.length === 1 ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : t.touches.length === 0 && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e;
      }
      function le(t) {
        for (var e = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n = 0; n < t.length; n++) {
          var r = t[n];
          for (var i in e) e[i] += r[i];
        }
        for (var o in e) e[o] /= t.length;
        return e;
      }
      function J(t) {
        if (!t.length) return null;
        var e = te(t), n = Math.min(e[0].pageX, e[1].pageX), r = Math.min(e[0].pageY, e[1].pageY), i = Math.max(e[0].pageX, e[1].pageX), o = Math.max(e[0].pageY, e[1].pageY);
        return { x: n, y: r, left: n, top: r, right: i, bottom: o, width: i - n, height: o - r };
      }
      function F(t, e) {
        var n = e + "X", r = e + "Y", i = te(t), o = i[0][n] - i[1][n], a = i[0][r] - i[1][r];
        return Ie(o, a);
      }
      function Se(t, e) {
        var n = e + "X", r = e + "Y", i = te(t), o = i[1][n] - i[0][n], a = i[1][r] - i[0][r];
        return 180 * Math.atan2(a, o) / Math.PI;
      }
      function De(t) {
        return b.string(t.pointerType) ? t.pointerType : b.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : /touch/.test(t.type || "") || t instanceof se.Touch ? "touch" : "mouse";
      }
      function Fe(t) {
        var e = b.func(t.composedPath) ? t.composedPath() : t.path;
        return [ve(e ? e[0] : t.target), ve(t.currentTarget)];
      }
      var Ne = function() {
        function t(e) {
          v(this, t), this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = e;
        }
        return w(t, [{ key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), t;
      }();
      Object.defineProperty(Ne.prototype, "interaction", { get: function() {
        return this._interaction._proxy;
      }, set: function() {
      } });
      var Ze = function(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          t.push(r);
        }
        return t;
      }, ot = function(t) {
        return Ze([], t);
      }, Ge = function(t, e) {
        for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return n;
        return -1;
      }, Ue = function(t, e) {
        return t[Ge(t, e)];
      }, Xe = function(t) {
        E(n, t);
        var e = oe(n);
        function n(r, i, o) {
          var a;
          v(this, n), (a = e.call(this, i._interaction)).dropzone = void 0, a.dragEvent = void 0, a.relatedTarget = void 0, a.draggable = void 0, a.propagationStopped = !1, a.immediatePropagationStopped = !1;
          var l = o === "dragleave" ? r.prev : r.cur, u = l.element, g = l.dropzone;
          return a.type = o, a.target = u, a.currentTarget = u, a.dropzone = g, a.dragEvent = i, a.relatedTarget = i.target, a.draggable = i.interactable, a.timeStamp = i.timeStamp, a;
        }
        return w(n, [{ key: "reject", value: function() {
          var r = this, i = this._interaction.dropState;
          if (this.type === "dropactivate" || this.dropzone && i.cur.dropzone === this.dropzone && i.cur.element === this.target) if (i.prev.dropzone = this.dropzone, i.prev.element = this.target, i.rejected = !0, i.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var o = i.activeDrops, a = Ge(o, function(u) {
              var g = u.dropzone, f = u.element;
              return g === r.dropzone && f === r.target;
            });
            i.activeDrops.splice(a, 1);
            var l = new n(i, this.dragEvent, "dropdeactivate");
            l.dropzone = this.dropzone, l.target = this.target, this.dropzone.fire(l);
          } else this.dropzone.fire(new n(i, this.dragEvent, "dragleave"));
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), n;
      }(Ne);
      function Ot(t, e) {
        for (var n = 0, r = t.slice(); n < r.length; n++) {
          var i = r[n], o = i.dropzone, a = i.element;
          e.dropzone = o, e.target = a, o.fire(e), e.propagationStopped = e.immediatePropagationStopped = !1;
        }
      }
      function wt(t, e) {
        for (var n = function(o, a) {
          for (var l = [], u = 0, g = o.interactables.list; u < g.length; u++) {
            var f = g[u];
            if (f.options.drop.enabled) {
              var m = f.options.drop.accept;
              if (!(b.element(m) && m !== a || b.string(m) && !fe(a, m) || b.func(m) && !m({ dropzone: f, draggableElement: a }))) for (var x = 0, T = f.getAllElements(); x < T.length; x++) {
                var z = T[x];
                z !== a && l.push({ dropzone: f, element: z, rect: f.getRect(z) });
              }
            }
          }
          return l;
        }(t, e), r = 0; r < n.length; r++) {
          var i = n[r];
          i.rect = i.dropzone.getRect(i.element);
        }
        return n;
      }
      function Ct(t, e, n) {
        for (var r = t.dropState, i = t.interactable, o = t.element, a = [], l = 0, u = r.activeDrops; l < u.length; l++) {
          var g = u[l], f = g.dropzone, m = g.element, x = g.rect, T = f.dropCheck(e, n, i, o, m, x);
          a.push(T ? m : null);
        }
        var z = function(_) {
          for (var O, P, I, G = [], ne = 0; ne < _.length; ne++) {
            var q = _[ne], U = _[O];
            if (q && ne !== O) if (U) {
              var He = pe(q), me = pe(U);
              if (He !== q.ownerDocument) if (me !== q.ownerDocument) if (He !== me) {
                G = G.length ? G : A(U);
                var Ye = void 0;
                if (U instanceof se.HTMLElement && q instanceof se.SVGElement && !(q instanceof se.SVGSVGElement)) {
                  if (q === me) continue;
                  Ye = q.ownerSVGElement;
                } else Ye = q;
                for (var Qe = A(Ye, U.ownerDocument), lt = 0; Qe[lt] && Qe[lt] === G[lt]; ) lt++;
                var sn = [Qe[lt - 1], Qe[lt], G[lt]];
                if (sn[0]) for (var qt = sn[0].lastChild; qt; ) {
                  if (qt === sn[1]) {
                    O = ne, G = Qe;
                    break;
                  }
                  if (qt === sn[2]) break;
                  qt = qt.previousSibling;
                }
              } else I = U, (parseInt(L(P = q).getComputedStyle(P).zIndex, 10) || 0) >= (parseInt(L(I).getComputedStyle(I).zIndex, 10) || 0) && (O = ne);
              else O = ne;
            } else O = ne;
          }
          return O;
        }(a);
        return r.activeDrops[z] || null;
      }
      function Et(t, e, n) {
        var r = t.dropState, i = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return n.type === "dragstart" && (i.activate = new Xe(r, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), n.type === "dragend" && (i.deactivate = new Xe(r, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (i.leave = new Xe(r, n, "dragleave"), n.dragLeave = i.leave.target = r.prev.element, n.prevDropzone = i.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (i.enter = new Xe(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), n.type === "dragend" && r.cur.dropzone && (i.drop = new Xe(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), n.type === "dragmove" && r.cur.dropzone && (i.move = new Xe(r, n, "dropmove"), n.dropzone = r.cur.dropzone)), i;
      }
      function St(t, e) {
        var n = t.dropState, r = n.activeDrops, i = n.cur, o = n.prev;
        e.leave && o.dropzone.fire(e.leave), e.enter && i.dropzone.fire(e.enter), e.move && i.dropzone.fire(e.move), e.drop && i.dropzone.fire(e.drop), e.deactivate && Ot(r, e.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
      }
      function At(t, e) {
        var n = t.interaction, r = t.iEvent, i = t.event;
        if (r.type === "dragmove" || r.type === "dragend") {
          var o = n.dropState;
          e.dynamicDrop && (o.activeDrops = wt(e, n.element));
          var a = r, l = Ct(n, a, i);
          o.rejected = o.rejected && !!l && l.dropzone === o.cur.dropzone && l.element === o.cur.element, o.cur.dropzone = l && l.dropzone, o.cur.element = l && l.element, o.events = Et(n, 0, a);
        }
      }
      var It = { id: "actions/drop", install: function(t) {
        var e = t.actions, n = t.interactStatic, r = t.Interactable, i = t.defaults;
        t.usePlugin(R), r.prototype.dropzone = function(o) {
          return function(a, l) {
            if (b.object(l)) {
              if (a.options.drop.enabled = l.enabled !== !1, l.listeners) {
                var u = we(l.listeners), g = Object.keys(u).reduce(function(m, x) {
                  return m[/^(enter|leave)/.test(x) ? "drag".concat(x) : /^(activate|deactivate|move)/.test(x) ? "drop".concat(x) : x] = u[x], m;
                }, {}), f = a.options.drop.listeners;
                f && a.off(f), a.on(g), a.options.drop.listeners = g;
              }
              return b.func(l.ondrop) && a.on("drop", l.ondrop), b.func(l.ondropactivate) && a.on("dropactivate", l.ondropactivate), b.func(l.ondropdeactivate) && a.on("dropdeactivate", l.ondropdeactivate), b.func(l.ondragenter) && a.on("dragenter", l.ondragenter), b.func(l.ondragleave) && a.on("dragleave", l.ondragleave), b.func(l.ondropmove) && a.on("dropmove", l.ondropmove), /^(pointer|center)$/.test(l.overlap) ? a.options.drop.overlap = l.overlap : b.number(l.overlap) && (a.options.drop.overlap = Math.max(Math.min(1, l.overlap), 0)), "accept" in l && (a.options.drop.accept = l.accept), "checker" in l && (a.options.drop.checker = l.checker), a;
            }
            return b.bool(l) ? (a.options.drop.enabled = l, a) : a.options.drop;
          }(this, o);
        }, r.prototype.dropCheck = function(o, a, l, u, g, f) {
          return function(m, x, T, z, _, O, P) {
            var I = !1;
            if (!(P = P || m.getRect(O))) return !!m.options.drop.checker && m.options.drop.checker(x, T, I, m, O, z, _);
            var G = m.options.drop.overlap;
            if (G === "pointer") {
              var ne = ke(z, _, "drag"), q = S(x);
              q.x += ne.x, q.y += ne.y;
              var U = q.x > P.left && q.x < P.right, He = q.y > P.top && q.y < P.bottom;
              I = U && He;
            }
            var me = z.getRect(_);
            if (me && G === "center") {
              var Ye = me.left + me.width / 2, Qe = me.top + me.height / 2;
              I = Ye >= P.left && Ye <= P.right && Qe >= P.top && Qe <= P.bottom;
            }
            return me && b.number(G) && (I = Math.max(0, Math.min(P.right, me.right) - Math.max(P.left, me.left)) * Math.max(0, Math.min(P.bottom, me.bottom) - Math.max(P.top, me.top)) / (me.width * me.height) >= G), m.options.drop.checker && (I = m.options.drop.checker(x, T, I, m, O, z, _)), I;
          }(this, o, a, l, u, g, f);
        }, n.dynamicDrop = function(o) {
          return b.bool(o) ? (t.dynamicDrop = o, n) : t.dynamicDrop;
        }, C(e.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), e.methodDict.drop = "dropzone", t.dynamicDrop = !1, i.actions.drop = It.defaults;
      }, listeners: { "interactions:before-action-start": function(t) {
        var e = t.interaction;
        e.prepared.name === "drag" && (e.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(t, e) {
        var n = t.interaction, r = (t.event, t.iEvent);
        if (n.prepared.name === "drag") {
          var i = n.dropState;
          i.activeDrops = [], i.events = {}, i.activeDrops = wt(e, n.element), i.events = Et(n, 0, r), i.events.activate && (Ot(i.activeDrops, i.events.activate), e.fire("actions/drop:start", { interaction: n, dragEvent: r }));
        }
      }, "interactions:action-move": At, "interactions:after-action-move": function(t, e) {
        var n = t.interaction, r = t.iEvent;
        if (n.prepared.name === "drag") {
          var i = n.dropState;
          St(n, i.events), e.fire("actions/drop:move", { interaction: n, dragEvent: r }), i.events = {};
        }
      }, "interactions:action-end": function(t, e) {
        if (t.interaction.prepared.name === "drag") {
          var n = t.interaction, r = t.iEvent;
          At(t, e), St(n, n.dropState.events), e.fire("actions/drop:end", { interaction: n, dragEvent: r });
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction;
        if (e.prepared.name === "drag") {
          var n = e.dropState;
          n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1);
        }
      } }, getActiveDrops: wt, getDrop: Ct, getDropEvents: Et, fireDropEvents: St, filterEventType: function(t) {
        return t.search("drag") === 0 || t.search("drop") === 0;
      }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, Jt = It;
      function zt(t) {
        var e = t.interaction, n = t.iEvent, r = t.phase;
        if (e.prepared.name === "gesture") {
          var i = e.pointers.map(function(g) {
            return g.pointer;
          }), o = r === "start", a = r === "end", l = e.interactable.options.deltaSource;
          if (n.touches = [i[0], i[1]], o) n.distance = F(i, l), n.box = J(i), n.scale = 1, n.ds = 0, n.angle = Se(i, l), n.da = 0, e.gesture.startDistance = n.distance, e.gesture.startAngle = n.angle;
          else if (a || e.pointers.length < 2) {
            var u = e.prevEvent;
            n.distance = u.distance, n.box = u.box, n.scale = u.scale, n.ds = 0, n.angle = u.angle, n.da = 0;
          } else n.distance = F(i, l), n.box = J(i), n.scale = n.distance / e.gesture.startDistance, n.angle = Se(i, l), n.ds = n.scale - e.gesture.scale, n.da = n.angle - e.gesture.angle;
          e.gesture.distance = n.distance, e.gesture.angle = n.angle, b.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale);
        }
      }
      var ze = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t) {
        var e = t.actions, n = t.Interactable, r = t.defaults;
        n.prototype.gesturable = function(i) {
          return b.object(i) ? (this.options.gesture.enabled = i.enabled !== !1, this.setPerAction("gesture", i), this.setOnEvents("gesture", i), this) : b.bool(i) ? (this.options.gesture.enabled = i, this) : this.options.gesture;
        }, e.map.gesture = ze, e.methodDict.gesture = "gesturable", r.actions.gesture = ze.defaults;
      }, listeners: { "interactions:action-start": zt, "interactions:action-move": zt, "interactions:action-end": zt, "interactions:new": function(t) {
        t.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
      }, "auto-start:check": function(t) {
        if (!(t.interaction.pointers.length < 2)) {
          var e = t.interactable.options.gesture;
          if (e && e.enabled) return t.action = { name: "gesture" }, !1;
        }
      } }, defaults: {}, getCursor: function() {
        return "";
      }, filterEventType: function(t) {
        return t.search("gesture") === 0;
      } }, Bt = ze;
      function Ft(t, e, n, r, i, o, a) {
        if (!e) return !1;
        if (e === !0) {
          var l = b.number(o.width) ? o.width : o.right - o.left, u = b.number(o.height) ? o.height : o.bottom - o.top;
          if (a = Math.min(a, Math.abs((t === "left" || t === "right" ? l : u) / 2)), l < 0 && (t === "left" ? t = "right" : t === "right" && (t = "left")), u < 0 && (t === "top" ? t = "bottom" : t === "bottom" && (t = "top")), t === "left") {
            var g = l >= 0 ? o.left : o.right;
            return n.x < g + a;
          }
          if (t === "top") {
            var f = u >= 0 ? o.top : o.bottom;
            return n.y < f + a;
          }
          if (t === "right") return n.x > (l >= 0 ? o.right : o.left) - a;
          if (t === "bottom") return n.y > (u >= 0 ? o.bottom : o.top) - a;
        }
        return !!b.element(r) && (b.element(e) ? e === r : B(r, e, i));
      }
      function Ln(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "resize" && n.resizeAxes) {
          var r = e;
          n.interactable.options.resize.square ? (n.resizeAxes === "y" ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, n.resizeAxes === "x" ? r.delta.y = 0 : n.resizeAxes === "y" && (r.delta.x = 0));
        }
      }
      var at, gt, st = { id: "actions/resize", before: ["actions/drag"], install: function(t) {
        var e = t.actions, n = t.browser, r = t.Interactable, i = t.defaults;
        st.cursors = function(o) {
          return o.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        }(n), st.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function(o) {
          return function(a, l, u) {
            return b.object(l) ? (a.options.resize.enabled = l.enabled !== !1, a.setPerAction("resize", l), a.setOnEvents("resize", l), b.string(l.axis) && /^x$|^y$|^xy$/.test(l.axis) ? a.options.resize.axis = l.axis : l.axis === null && (a.options.resize.axis = u.defaults.actions.resize.axis), b.bool(l.preserveAspectRatio) ? a.options.resize.preserveAspectRatio = l.preserveAspectRatio : b.bool(l.square) && (a.options.resize.square = l.square), a) : b.bool(l) ? (a.options.resize.enabled = l, a) : a.options.resize;
          }(this, o, t);
        }, e.map.resize = st, e.methodDict.resize = "resizable", i.actions.resize = st.defaults;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(t) {
        (function(e) {
          var n = e.iEvent, r = e.interaction;
          if (r.prepared.name === "resize" && r.prepared.edges) {
            var i = n, o = r.rect;
            r._rects = { start: C({}, o), corrected: C({}, o), previous: C({}, o), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, i.edges = r.prepared.edges, i.rect = r._rects.corrected, i.deltaRect = r._rects.delta;
          }
        })(t), Ln(t);
      }, "interactions:action-move": function(t) {
        (function(e) {
          var n = e.iEvent, r = e.interaction;
          if (r.prepared.name === "resize" && r.prepared.edges) {
            var i = n, o = r.interactable.options.resize.invert, a = o === "reposition" || o === "negate", l = r.rect, u = r._rects, g = u.start, f = u.corrected, m = u.delta, x = u.previous;
            if (C(x, f), a) {
              if (C(f, l), o === "reposition") {
                if (f.top > f.bottom) {
                  var T = f.top;
                  f.top = f.bottom, f.bottom = T;
                }
                if (f.left > f.right) {
                  var z = f.left;
                  f.left = f.right, f.right = z;
                }
              }
            } else f.top = Math.min(l.top, g.bottom), f.bottom = Math.max(l.bottom, g.top), f.left = Math.min(l.left, g.right), f.right = Math.max(l.right, g.left);
            for (var _ in f.width = f.right - f.left, f.height = f.bottom - f.top, f) m[_] = f[_] - x[_];
            i.edges = r.prepared.edges, i.rect = f, i.deltaRect = m;
          }
        })(t), Ln(t);
      }, "interactions:action-end": function(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "resize" && n.prepared.edges) {
          var r = e;
          r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
        }
      }, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, r = t.element, i = t.rect, o = t.buttons;
        if (i) {
          var a = C({}, e.coords.cur.page), l = n.options.resize;
          if (l && l.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || (o & l.mouseButtons) != 0)) {
            if (b.object(l.edges)) {
              var u = { left: !1, right: !1, top: !1, bottom: !1 };
              for (var g in u) u[g] = Ft(g, l.edges[g], a, e._latestPointer.eventTarget, r, i, l.margin || st.defaultMargin);
              u.left = u.left && !u.right, u.top = u.top && !u.bottom, (u.left || u.right || u.top || u.bottom) && (t.action = { name: "resize", edges: u });
            } else {
              var f = l.axis !== "y" && a.x > i.right - st.defaultMargin, m = l.axis !== "x" && a.y > i.bottom - st.defaultMargin;
              (f || m) && (t.action = { name: "resize", axes: (f ? "x" : "") + (m ? "y" : "") });
            }
            return !t.action && void 0;
          }
        }
      } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t) {
        var e = t.edges, n = t.axis, r = t.name, i = st.cursors, o = null;
        if (n) o = i[r + n];
        else if (e) {
          for (var a = "", l = 0, u = ["top", "bottom", "left", "right"]; l < u.length; l++) {
            var g = u[l];
            e[g] && (a += g);
          }
          o = i[a];
        }
        return o;
      }, filterEventType: function(t) {
        return t.search("resize") === 0;
      }, defaultMargin: null }, li = st, ci = { id: "actions", install: function(t) {
        t.usePlugin(Bt), t.usePlugin(li), t.usePlugin(R), t.usePlugin(Jt);
      } }, Hn = 0, ut = { request: function(t) {
        return at(t);
      }, cancel: function(t) {
        return gt(t);
      }, init: function(t) {
        if (at = t.requestAnimationFrame, gt = t.cancelAnimationFrame, !at) for (var e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length; n++) {
          var r = e[n];
          at = t["".concat(r, "RequestAnimationFrame")], gt = t["".concat(r, "CancelAnimationFrame")] || t["".concat(r, "CancelRequestAnimationFrame")];
        }
        at = at && at.bind(t), gt = gt && gt.bind(t), at || (at = function(i) {
          var o = Date.now(), a = Math.max(0, 16 - (o - Hn)), l = t.setTimeout(function() {
            i(o + a);
          }, a);
          return Hn = o + a, l;
        }, gt = function(i) {
          return clearTimeout(i);
        });
      } }, N = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(t) {
        N.isScrolling = !0, ut.cancel(N.i), t.autoScroll = N, N.interaction = t, N.prevTime = N.now(), N.i = ut.request(N.scroll);
      }, stop: function() {
        N.isScrolling = !1, N.interaction && (N.interaction.autoScroll = null), ut.cancel(N.i);
      }, scroll: function() {
        var t = N.interaction, e = t.interactable, n = t.element, r = t.prepared.name, i = e.options[r].autoScroll, o = jn(i.container, e, n), a = N.now(), l = (a - N.prevTime) / 1e3, u = i.speed * l;
        if (u >= 1) {
          var g = { x: N.x * u, y: N.y * u };
          if (g.x || g.y) {
            var f = $n(o);
            b.window(o) ? o.scrollBy(g.x, g.y) : o && (o.scrollLeft += g.x, o.scrollTop += g.y);
            var m = $n(o), x = { x: m.x - f.x, y: m.y - f.y };
            (x.x || x.y) && e.fire({ type: "autoscroll", target: n, interactable: e, delta: x, interaction: t, container: o });
          }
          N.prevTime = a;
        }
        N.isScrolling && (ut.cancel(N.i), N.i = ut.request(N.scroll));
      }, check: function(t, e) {
        var n;
        return (n = t.options[e].autoScroll) == null ? void 0 : n.enabled;
      }, onInteractionMove: function(t) {
        var e = t.interaction, n = t.pointer;
        if (e.interacting() && N.check(e.interactable, e.prepared.name)) if (e.simulation) N.x = N.y = 0;
        else {
          var r, i, o, a, l = e.interactable, u = e.element, g = e.prepared.name, f = l.options[g].autoScroll, m = jn(f.container, l, u);
          if (b.window(m)) a = n.clientX < N.margin, r = n.clientY < N.margin, i = n.clientX > m.innerWidth - N.margin, o = n.clientY > m.innerHeight - N.margin;
          else {
            var x = de(m);
            a = n.clientX < x.left + N.margin, r = n.clientY < x.top + N.margin, i = n.clientX > x.right - N.margin, o = n.clientY > x.bottom - N.margin;
          }
          N.x = i ? 1 : a ? -1 : 0, N.y = o ? 1 : r ? -1 : 0, N.isScrolling || (N.margin = f.margin, N.speed = f.speed, N.start(e));
        }
      } };
      function jn(t, e, n) {
        return (b.string(t) ? xt(t, e, n) : t) || L(n);
      }
      function $n(t) {
        return b.window(t) && (t = window.document.body), { x: t.scrollLeft, y: t.scrollTop };
      }
      var ui = { id: "auto-scroll", install: function(t) {
        var e = t.defaults, n = t.actions;
        t.autoScroll = N, N.now = function() {
          return t.now();
        }, n.phaselessTypes.autoscroll = !0, e.perAction.autoScroll = N.defaults;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.autoScroll = null;
      }, "interactions:destroy": function(t) {
        t.interaction.autoScroll = null, N.stop(), N.interaction && (N.interaction = null);
      }, "interactions:stop": N.stop, "interactions:action-move": function(t) {
        return N.onInteractionMove(t);
      } } }, fi = ui;
      function Lt(t, e) {
        var n = !1;
        return function() {
          return n || (he.console.warn(e), n = !0), t.apply(this, arguments);
        };
      }
      function gn(t, e) {
        return t.name = e.name, t.axis = e.axis, t.edges = e.edges, t;
      }
      function di(t) {
        return b.bool(t) ? (this.options.styleCursor = t, this) : t === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function pi(t) {
        return b.func(t) ? (this.options.actionChecker = t, this) : t === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var hi = { id: "auto-start/interactableMethods", install: function(t) {
        var e = t.Interactable;
        e.prototype.getAction = function(n, r, i, o) {
          var a = function(l, u, g, f, m) {
            var x = l.getRect(f), T = u.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[u.button], z = { action: null, interactable: l, interaction: g, element: f, rect: x, buttons: T };
            return m.fire("auto-start:check", z), z.action;
          }(this, r, i, o, t);
          return this.options.actionChecker ? this.options.actionChecker(n, r, a, this, o, i) : a;
        }, e.prototype.ignoreFrom = Lt(function(n) {
          return this._backCompatOption("ignoreFrom", n);
        }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = Lt(function(n) {
          return this._backCompatOption("allowFrom", n);
        }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = pi, e.prototype.styleCursor = di;
      } };
      function Wn(t, e, n, r, i) {
        return e.testIgnoreAllow(e.options[t.name], n, r) && e.options[t.name].enabled && Zt(e, n, t, i) ? t : null;
      }
      function gi(t, e, n, r, i, o, a) {
        for (var l = 0, u = r.length; l < u; l++) {
          var g = r[l], f = i[l], m = g.getAction(e, n, t, f);
          if (m) {
            var x = Wn(m, g, f, o, a);
            if (x) return { action: x, interactable: g, element: f };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function qn(t, e, n, r, i) {
        var o = [], a = [], l = r;
        function u(f) {
          o.push(f), a.push(l);
        }
        for (; b.element(l); ) {
          o = [], a = [], i.interactables.forEachMatch(l, u);
          var g = gi(t, e, n, o, a, r, i);
          if (g.action && !g.interactable.options[g.action.name].manualStart) return g;
          l = Pe(l);
        }
        return { action: null, interactable: null, element: null };
      }
      function Nn(t, e, n) {
        var r = e.action, i = e.interactable, o = e.element;
        r = r || { name: null }, t.interactable = i, t.element = o, gn(t.prepared, r), t.rect = i && r.name ? i.getRect(o) : null, Yn(t, n), n.fire("autoStart:prepared", { interaction: t });
      }
      function Zt(t, e, n, r) {
        var i = t.options, o = i[n.name].max, a = i[n.name].maxPerElement, l = r.autoStart.maxInteractions, u = 0, g = 0, f = 0;
        if (!(o && a && l)) return !1;
        for (var m = 0, x = r.interactions.list; m < x.length; m++) {
          var T = x[m], z = T.prepared.name;
          if (T.interacting() && (++u >= l || T.interactable === t && ((g += z === n.name ? 1 : 0) >= o || T.element === e && (f++, z === n.name && f >= a))))
            return !1;
        }
        return l > 0;
      }
      function Xn(t, e) {
        return b.number(t) ? (e.autoStart.maxInteractions = t, this) : e.autoStart.maxInteractions;
      }
      function vn(t, e, n) {
        var r = n.autoStart.cursorElement;
        r && r !== t && (r.style.cursor = ""), t.ownerDocument.documentElement.style.cursor = e, t.style.cursor = e, n.autoStart.cursorElement = e ? t : null;
      }
      function Yn(t, e) {
        var n = t.interactable, r = t.element, i = t.prepared;
        if (t.pointerType === "mouse" && n && n.options.styleCursor) {
          var o = "";
          if (i.name) {
            var a = n.options[i.name].cursorChecker;
            o = b.func(a) ? a(i, n, r, t._interacting) : e.actions.map[i.name].getCursor(i);
          }
          vn(t.element, o || "", e);
        } else e.autoStart.cursorElement && vn(e.autoStart.cursorElement, "", e);
      }
      var vi = { id: "auto-start/base", before: ["actions"], install: function(t) {
        var e = t.interactStatic, n = t.defaults;
        t.usePlugin(hi), n.base.actionChecker = null, n.base.styleCursor = !0, C(n.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e.maxInteractions = function(r) {
          return Xn(r, t);
        }, t.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Zt, cursorElement: null };
      }, listeners: { "interactions:down": function(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget;
        n.interacting() || Nn(n, qn(n, r, i, o, e), e);
      }, "interactions:move": function(t, e) {
        (function(n, r) {
          var i = n.interaction, o = n.pointer, a = n.event, l = n.eventTarget;
          i.pointerType !== "mouse" || i.pointerIsDown || i.interacting() || Nn(i, qn(i, o, a, l, r), r);
        })(t, e), function(n, r) {
          var i = n.interaction;
          if (i.pointerIsDown && !i.interacting() && i.pointerWasMoved && i.prepared.name) {
            r.fire("autoStart:before-start", n);
            var o = i.interactable, a = i.prepared.name;
            a && o && (o.options[a].manualStart || !Zt(o, i.element, i.prepared, r) ? i.stop() : (i.start(i.prepared, o, i.element), Yn(i, r)));
          }
        }(t, e);
      }, "interactions:stop": function(t, e) {
        var n = t.interaction, r = n.interactable;
        r && r.options.styleCursor && vn(n.element, "", e);
      } }, maxInteractions: Xn, withinInteractionLimit: Zt, validateAction: Wn }, mn = vi, mi = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t, e) {
        var n = t.interaction, r = t.eventTarget, i = t.dx, o = t.dy;
        if (n.prepared.name === "drag") {
          var a = Math.abs(i), l = Math.abs(o), u = n.interactable.options.drag, g = u.startAxis, f = a > l ? "x" : a < l ? "y" : "xy";
          if (n.prepared.axis = u.lockAxis === "start" ? f[0] : u.lockAxis, f !== "xy" && g !== "xy" && g !== f) {
            n.prepared.name = null;
            for (var m = r, x = function(z) {
              if (z !== n.interactable) {
                var _ = n.interactable.options.drag;
                if (!_.manualStart && z.testIgnoreAllow(_, m, r)) {
                  var O = z.getAction(n.downPointer, n.downEvent, n, m);
                  if (O && O.name === "drag" && function(P, I) {
                    if (!I) return !1;
                    var G = I.options.drag.startAxis;
                    return P === "xy" || G === "xy" || G === P;
                  }(f, z) && mn.validateAction(O, z, m, r, e)) return z;
                }
              }
            }; b.element(m); ) {
              var T = e.interactables.forEachMatch(m, x);
              if (T) {
                n.prepared.name = "drag", n.interactable = T, n.element = m;
                break;
              }
              m = Pe(m);
            }
          }
        }
      } } };
      function yn(t) {
        var e = t.prepared && t.prepared.name;
        if (!e) return null;
        var n = t.interactable.options;
        return n[e].hold || n[e].delay;
      }
      var yi = { id: "auto-start/hold", install: function(t) {
        var e = t.defaults;
        t.usePlugin(mn), e.perAction.hold = 0, e.perAction.delay = 0;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(t) {
        var e = t.interaction, n = yn(e);
        n > 0 && (e.autoStartHoldTimer = setTimeout(function() {
          e.start(e.prepared, e.interactable, e.element);
        }, n));
      }, "interactions:move": function(t) {
        var e = t.interaction, n = t.duplicate;
        e.autoStartHoldTimer && e.pointerWasMoved && !n && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(t) {
        var e = t.interaction;
        yn(e) > 0 && (e.prepared.name = null);
      } }, getHoldDuration: yn }, bi = yi, xi = { id: "auto-start", install: function(t) {
        t.usePlugin(mn), t.usePlugin(bi), t.usePlugin(mi);
      } }, wi = function(t) {
        return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : b.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault;
      };
      function Ei(t) {
        var e = t.interaction, n = t.event;
        e.interactable && e.interactable.checkAndPreventDefault(n);
      }
      var Vn = { id: "core/interactablePreventDefault", install: function(t) {
        var e = t.Interactable;
        e.prototype.preventDefault = wi, e.prototype.checkAndPreventDefault = function(n) {
          return function(r, i, o) {
            var a = r.options.preventDefault;
            if (a !== "never") if (a !== "always") {
              if (i.events.supportsPassive && /^touch(start|move)$/.test(o.type)) {
                var l = L(o.target).document, u = i.getDocOptions(l);
                if (!u || !u.events || u.events.passive !== !1) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(o.type) || b.element(o.target) && fe(o.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || o.preventDefault();
            } else o.preventDefault();
          }(this, t, n);
        }, t.interactions.docEvents.push({ type: "dragstart", listener: function(n) {
          for (var r = 0, i = t.interactions.list; r < i.length; r++) {
            var o = i[r];
            if (o.element && (o.element === n.target || V(o.element, n.target))) return void o.interactable.checkAndPreventDefault(n);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce(function(t, e) {
        return t["interactions:".concat(e)] = Ei, t;
      }, {}) };
      function Qt(t, e) {
        if (e.phaselessTypes[t]) return !0;
        for (var n in e.map) if (t.indexOf(n) === 0 && t.substr(n.length) in e.phases) return !0;
        return !1;
      }
      function Tt(t) {
        var e = {};
        for (var n in t) {
          var r = t[n];
          b.plainObject(r) ? e[n] = Tt(r) : b.array(r) ? e[n] = ot(r) : e[n] = r;
        }
        return e;
      }
      var bn = function() {
        function t(e) {
          v(this, t), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e, this.result = en(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
        }
        return w(t, [{ key: "start", value: function(e, n) {
          var r, i, o = e.phase, a = this.interaction, l = function(g) {
            var f = g.interactable.options[g.prepared.name], m = f.modifiers;
            return m && m.length ? m : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(x) {
              var T = f[x];
              return T && T.enabled && { options: T, methods: T._methods };
            }).filter(function(x) {
              return !!x;
            });
          }(a);
          this.prepareStates(l), this.startEdges = C({}, a.edges), this.edges = C({}, this.startEdges), this.startOffset = (r = a.rect, i = n, r ? { left: i.x - r.left, top: i.y - r.top, right: r.right - i.x, bottom: r.bottom - i.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
          var u = this.fillArg({ phase: o, pageCoords: n, preEnd: !1 });
          return this.result = en(), this.startAll(u), this.result = this.setAll(u);
        } }, { key: "fillArg", value: function(e) {
          var n = this.interaction;
          return e.interaction = n, e.interactable = n.interactable, e.element = n.element, e.rect || (e.rect = n.rect), e.edges || (e.edges = this.startEdges), e.startOffset = this.startOffset, e;
        } }, { key: "startAll", value: function(e) {
          for (var n = 0, r = this.states; n < r.length; n++) {
            var i = r[n];
            i.methods.start && (e.state = i, i.methods.start(e));
          }
        } }, { key: "setAll", value: function(e) {
          var n = e.phase, r = e.preEnd, i = e.skipModifiers, o = e.rect, a = e.edges;
          e.coords = C({}, e.pageCoords), e.rect = C({}, o), e.edges = C({}, a);
          for (var l = i ? this.states.slice(i) : this.states, u = en(e.coords, e.rect), g = 0; g < l.length; g++) {
            var f, m = l[g], x = m.options, T = C({}, e.coords), z = null;
            (f = m.methods) != null && f.set && this.shouldDo(x, r, n) && (e.state = m, z = m.methods.set(e), Te(e.edges, e.rect, { x: e.coords.x - T.x, y: e.coords.y - T.y })), u.eventProps.push(z);
          }
          C(this.edges, e.edges), u.delta.x = e.coords.x - e.pageCoords.x, u.delta.y = e.coords.y - e.pageCoords.y, u.rectDelta.left = e.rect.left - o.left, u.rectDelta.right = e.rect.right - o.right, u.rectDelta.top = e.rect.top - o.top, u.rectDelta.bottom = e.rect.bottom - o.bottom;
          var _ = this.result.coords, O = this.result.rect;
          if (_ && O) {
            var P = u.rect.left !== O.left || u.rect.right !== O.right || u.rect.top !== O.top || u.rect.bottom !== O.bottom;
            u.changed = P || _.x !== u.coords.x || _.y !== u.coords.y;
          }
          return u;
        } }, { key: "applyToInteraction", value: function(e) {
          var n = this.interaction, r = e.phase, i = n.coords.cur, o = n.coords.start, a = this.result, l = this.startDelta, u = a.delta;
          r === "start" && C(this.startDelta, a.delta);
          for (var g = 0, f = [[o, l], [i, u]]; g < f.length; g++) {
            var m = f[g], x = m[0], T = m[1];
            x.page.x += T.x, x.page.y += T.y, x.client.x += T.x, x.client.y += T.y;
          }
          var z = this.result.rectDelta, _ = e.rect || n.rect;
          _.left += z.left, _.right += z.right, _.top += z.top, _.bottom += z.bottom, _.width = _.right - _.left, _.height = _.bottom - _.top;
        } }, { key: "setAndApply", value: function(e) {
          var n = this.interaction, r = e.phase, i = e.preEnd, o = e.skipModifiers, a = this.setAll(this.fillArg({ preEnd: i, phase: r, pageCoords: e.modifiedCoords || n.coords.cur.page }));
          if (this.result = a, !a.changed && (!o || o < this.states.length) && n.interacting()) return !1;
          if (e.modifiedCoords) {
            var l = n.coords.cur.page, u = { x: e.modifiedCoords.x - l.x, y: e.modifiedCoords.y - l.y };
            a.coords.x += u.x, a.coords.y += u.y, a.delta.x += u.x, a.delta.y += u.y;
          }
          this.applyToInteraction(e);
        } }, { key: "beforeEnd", value: function(e) {
          var n = e.interaction, r = e.event, i = this.states;
          if (i && i.length) {
            for (var o = !1, a = 0; a < i.length; a++) {
              var l = i[a];
              e.state = l;
              var u = l.options, g = l.methods, f = g.beforeEnd && g.beforeEnd(e);
              if (f) return this.endResult = f, !1;
              o = o || !o && this.shouldDo(u, !0, e.phase, !0);
            }
            o && n.move({ event: r, preEnd: !0 });
          }
        } }, { key: "stop", value: function(e) {
          var n = e.interaction;
          if (this.states && this.states.length) {
            var r = C({ states: this.states, interactable: n.interactable, element: n.element, rect: null }, e);
            this.fillArg(r);
            for (var i = 0, o = this.states; i < o.length; i++) {
              var a = o[i];
              r.state = a, a.methods.stop && a.methods.stop(r);
            }
            this.states = null, this.endResult = null;
          }
        } }, { key: "prepareStates", value: function(e) {
          this.states = [];
          for (var n = 0; n < e.length; n++) {
            var r = e[n], i = r.options, o = r.methods, a = r.name;
            this.states.push({ options: i, methods: o, index: n, name: a });
          }
          return this.states;
        } }, { key: "restoreInteractionCoords", value: function(e) {
          var n = e.interaction, r = n.coords, i = n.rect, o = n.modification;
          if (o.result) {
            for (var a = o.startDelta, l = o.result, u = l.delta, g = l.rectDelta, f = 0, m = [[r.start, a], [r.cur, u]]; f < m.length; f++) {
              var x = m[f], T = x[0], z = x[1];
              T.page.x -= z.x, T.page.y -= z.y, T.client.x -= z.x, T.client.y -= z.y;
            }
            i.left -= g.left, i.right -= g.right, i.top -= g.top, i.bottom -= g.bottom;
          }
        } }, { key: "shouldDo", value: function(e, n, r, i) {
          return !(!e || e.enabled === !1 || i && !e.endOnly || e.endOnly && !n || r === "start" && !e.setStart);
        } }, { key: "copyFrom", value: function(e) {
          this.startOffset = e.startOffset, this.startDelta = e.startDelta, this.startEdges = e.startEdges, this.edges = e.edges, this.states = e.states.map(function(n) {
            return Tt(n);
          }), this.result = en(C({}, e.result.coords), C({}, e.result.rect));
        } }, { key: "destroy", value: function() {
          for (var e in this) this[e] = null;
        } }]), t;
      }();
      function en(t, e) {
        return { rect: e, coords: t, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
      }
      function ft(t, e) {
        var n = t.defaults, r = { start: t.start, set: t.set, beforeEnd: t.beforeEnd, stop: t.stop }, i = function(o) {
          var a = o || {};
          for (var l in a.enabled = a.enabled !== !1, n) l in a || (a[l] = n[l]);
          var u = { options: a, methods: r, name: e, enable: function() {
            return a.enabled = !0, u;
          }, disable: function() {
            return a.enabled = !1, u;
          } };
          return u;
        };
        return e && typeof e == "string" && (i._defaults = n, i._methods = r), i;
      }
      function Ht(t) {
        var e = t.iEvent, n = t.interaction.modification.result;
        n && (e.modifiers = n.eventProps);
      }
      var Si = { id: "modifiers/base", before: ["actions"], install: function(t) {
        t.defaults.perAction.modifiers = [];
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.modification = new bn(e);
      }, "interactions:before-action-start": function(t) {
        var e = t.interaction, n = t.interaction.modification;
        n.start(t, e.coords.start.page), e.edges = n.edges, n.applyToInteraction(t);
      }, "interactions:before-action-move": function(t) {
        var e = t.interaction, n = e.modification, r = n.setAndApply(t);
        return e.edges = n.edges, r;
      }, "interactions:before-action-end": function(t) {
        var e = t.interaction, n = e.modification, r = n.beforeEnd(t);
        return e.edges = n.startEdges, r;
      }, "interactions:action-start": Ht, "interactions:action-move": Ht, "interactions:action-end": Ht, "interactions:after-action-start": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:after-action-move": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:stop": function(t) {
        return t.interaction.modification.stop(t);
      } } }, Gn = Si, Un = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, xn = function(t) {
        E(n, t);
        var e = oe(n);
        function n(r, i, o, a, l, u, g) {
          var f;
          v(this, n), (f = e.call(this, r)).relatedTarget = null, f.screenX = void 0, f.screenY = void 0, f.button = void 0, f.buttons = void 0, f.ctrlKey = void 0, f.shiftKey = void 0, f.altKey = void 0, f.metaKey = void 0, f.page = void 0, f.client = void 0, f.delta = void 0, f.rect = void 0, f.x0 = void 0, f.y0 = void 0, f.t0 = void 0, f.dt = void 0, f.duration = void 0, f.clientX0 = void 0, f.clientY0 = void 0, f.velocity = void 0, f.speed = void 0, f.swipe = void 0, f.axes = void 0, f.preEnd = void 0, l = l || r.element;
          var m = r.interactable, x = (m && m.options || Un).deltaSource, T = ke(m, l, o), z = a === "start", _ = a === "end", O = z ? ye(f) : r.prevEvent, P = z ? r.coords.start : _ ? { page: O.page, client: O.client, timeStamp: r.coords.cur.timeStamp } : r.coords.cur;
          return f.page = C({}, P.page), f.client = C({}, P.client), f.rect = C({}, r.rect), f.timeStamp = P.timeStamp, _ || (f.page.x -= T.x, f.page.y -= T.y, f.client.x -= T.x, f.client.y -= T.y), f.ctrlKey = i.ctrlKey, f.altKey = i.altKey, f.shiftKey = i.shiftKey, f.metaKey = i.metaKey, f.button = i.button, f.buttons = i.buttons, f.target = l, f.currentTarget = l, f.preEnd = u, f.type = g || o + (a || ""), f.interactable = m, f.t0 = z ? r.pointers[r.pointers.length - 1].downTime : O.t0, f.x0 = r.coords.start.page.x - T.x, f.y0 = r.coords.start.page.y - T.y, f.clientX0 = r.coords.start.client.x - T.x, f.clientY0 = r.coords.start.client.y - T.y, f.delta = z || _ ? { x: 0, y: 0 } : { x: f[x].x - O[x].x, y: f[x].y - O[x].y }, f.dt = r.coords.delta.timeStamp, f.duration = f.timeStamp - f.t0, f.velocity = C({}, r.coords.velocity[x]), f.speed = Ie(f.velocity.x, f.velocity.y), f.swipe = _ || a === "inertiastart" ? f.getSwipe() : null, f;
        }
        return w(n, [{ key: "getSwipe", value: function() {
          var r = this._interaction;
          if (r.prevEvent.speed < 600 || this.timeStamp - r.prevEvent.timeStamp > 150) return null;
          var i = 180 * Math.atan2(r.prevEvent.velocityY, r.prevEvent.velocityX) / Math.PI;
          i < 0 && (i += 360);
          var o = 112.5 <= i && i < 247.5, a = 202.5 <= i && i < 337.5;
          return { up: a, down: !a && 22.5 <= i && i < 157.5, left: o, right: !o && (292.5 <= i || i < 67.5), angle: i, speed: r.prevEvent.speed, velocity: { x: r.prevEvent.velocityX, y: r.prevEvent.velocityY } };
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }]), n;
      }(Ne);
      Object.defineProperties(xn.prototype, { pageX: { get: function() {
        return this.page.x;
      }, set: function(t) {
        this.page.x = t;
      } }, pageY: { get: function() {
        return this.page.y;
      }, set: function(t) {
        this.page.y = t;
      } }, clientX: { get: function() {
        return this.client.x;
      }, set: function(t) {
        this.client.x = t;
      } }, clientY: { get: function() {
        return this.client.y;
      }, set: function(t) {
        this.client.y = t;
      } }, dx: { get: function() {
        return this.delta.x;
      }, set: function(t) {
        this.delta.x = t;
      } }, dy: { get: function() {
        return this.delta.y;
      }, set: function(t) {
        this.delta.y = t;
      } }, velocityX: { get: function() {
        return this.velocity.x;
      }, set: function(t) {
        this.velocity.x = t;
      } }, velocityY: { get: function() {
        return this.velocity.y;
      }, set: function(t) {
        this.velocity.y = t;
      } } });
      var zi = w(function t(e, n, r, i, o) {
        v(this, t), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e, this.pointer = n, this.event = r, this.downTime = i, this.downTarget = o;
      }), Ti = function(t) {
        return t.interactable = "", t.element = "", t.prepared = "", t.pointerIsDown = "", t.pointerWasMoved = "", t._proxy = "", t;
      }({}), Kn = function(t) {
        return t.start = "", t.move = "", t.end = "", t.stop = "", t.interacting = "", t;
      }({}), ki = 0, _i = function() {
        function t(e) {
          var n = this, r = e.pointerType, i = e.scopeFire;
          v(this, t), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = Lt(function(f) {
            this.move(f);
          }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = ki++, this._scopeFire = i, this.pointerType = r;
          var o = this;
          this._proxy = {};
          var a = function(f) {
            Object.defineProperty(n._proxy, f, { get: function() {
              return o[f];
            } });
          };
          for (var l in Ti) a(l);
          var u = function(f) {
            Object.defineProperty(n._proxy, f, { value: function() {
              return o[f].apply(o, arguments);
            } });
          };
          for (var g in Kn) u(g);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return w(t, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(e, n, r) {
          var i = this.updatePointer(e, n, r, !0), o = this.pointers[i];
          this._scopeFire("interactions:down", { pointer: e, event: n, eventTarget: r, pointerIndex: i, pointerInfo: o, type: "down", interaction: this });
        } }, { key: "start", value: function(e, n, r) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (e.name === "gesture" ? 2 : 1) || !n.options[e.name].enabled) && (gn(this.prepared, e), this.interactable = n, this.element = r, this.rect = n.getRect(r), this.edges = this.prepared.edges ? C({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(e, n, r) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(e, n, r, !1);
          var i, o, a = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (i = this.coords.cur.client.x - this.coords.start.client.x, o = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Ie(i, o) > this.pointerMoveTolerance);
          var l, u, g, f = this.getPointerIndex(e), m = { pointer: e, pointerIndex: f, pointerInfo: this.pointers[f], event: n, type: "move", eventTarget: r, dx: i, dy: o, duplicate: a, interaction: this };
          a || (l = this.coords.velocity, u = this.coords.delta, g = Math.max(u.timeStamp / 1e3, 1e-3), l.page.x = u.page.x / g, l.page.y = u.page.y / g, l.client.x = u.client.x / g, l.client.y = u.client.y / g, l.timeStamp = g), this._scopeFire("interactions:move", m), a || this.simulation || (this.interacting() && (m.type = null, this.move(m)), this.pointerWasMoved && Be(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(e) {
          e && e.event || Je(this.coords.delta), (e = C({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, e || {})).phase = "move", this._doPhase(e);
        } }, { key: "pointerUp", value: function(e, n, r, i) {
          var o = this.getPointerIndex(e);
          o === -1 && (o = this.updatePointer(e, n, r, !1));
          var a = /cancel$/i.test(n.type) ? "cancel" : "up";
          this._scopeFire("interactions:".concat(a), { pointer: e, pointerIndex: o, pointerInfo: this.pointers[o], event: n, eventTarget: r, type: a, curEventTarget: i, interaction: this }), this.simulation || this.end(n), this.removePointer(e, n);
        } }, { key: "documentBlur", value: function(e) {
          this.end(e), this._scopeFire("interactions:blur", { event: e, type: "blur", interaction: this });
        } }, { key: "end", value: function(e) {
          var n;
          this._ending = !0, e = e || this._latestPointer.event, this.interacting() && (n = this._doPhase({ event: e, interaction: this, phase: "end" })), this._ending = !1, n === !0 && this.stop();
        } }, { key: "currentAction", value: function() {
          return this._interacting ? this.prepared.name : null;
        } }, { key: "interacting", value: function() {
          return this._interacting;
        } }, { key: "stop", value: function() {
          this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
        } }, { key: "getPointerIndex", value: function(e) {
          var n = W(e);
          return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Ge(this.pointers, function(r) {
            return r.id === n;
          });
        } }, { key: "getPointerInfo", value: function(e) {
          return this.pointers[this.getPointerIndex(e)];
        } }, { key: "updatePointer", value: function(e, n, r, i) {
          var o, a, l, u = W(e), g = this.getPointerIndex(e), f = this.pointers[g];
          return i = i !== !1 && (i || /(down|start)$/i.test(n.type)), f ? f.pointer = e : (f = new zi(u, e, n, null, null), g = this.pointers.length, this.pointers.push(f)), ae(this.coords.cur, this.pointers.map(function(m) {
            return m.pointer;
          }), this._now()), o = this.coords.delta, a = this.coords.prev, l = this.coords.cur, o.page.x = l.page.x - a.page.x, o.page.y = l.page.y - a.page.y, o.client.x = l.client.x - a.client.x, o.client.y = l.client.y - a.client.y, o.timeStamp = l.timeStamp - a.timeStamp, i && (this.pointerIsDown = !0, f.downTime = this.coords.cur.timeStamp, f.downTarget = r, qe(this.downPointer, e), this.interacting() || (Be(this.coords.start, this.coords.cur), Be(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = !1)), this._updateLatestPointer(e, n, r), this._scopeFire("interactions:update-pointer", { pointer: e, event: n, eventTarget: r, down: i, pointerInfo: f, pointerIndex: g, interaction: this }), g;
        } }, { key: "removePointer", value: function(e, n) {
          var r = this.getPointerIndex(e);
          if (r !== -1) {
            var i = this.pointers[r];
            this._scopeFire("interactions:remove-pointer", { pointer: e, event: n, eventTarget: null, pointerIndex: r, pointerInfo: i, interaction: this }), this.pointers.splice(r, 1), this.pointerIsDown = !1;
          }
        } }, { key: "_updateLatestPointer", value: function(e, n, r) {
          this._latestPointer.pointer = e, this._latestPointer.event = n, this._latestPointer.eventTarget = r;
        } }, { key: "destroy", value: function() {
          this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
        } }, { key: "_createPreparedEvent", value: function(e, n, r, i) {
          return new xn(this, e, this.prepared.name, n, this.element, r, i);
        } }, { key: "_fireEvent", value: function(e) {
          var n;
          (n = this.interactable) == null || n.fire(e), (!this.prevEvent || e.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = e);
        } }, { key: "_doPhase", value: function(e) {
          var n = e.event, r = e.phase, i = e.preEnd, o = e.type, a = this.rect;
          if (a && r === "move" && (Te(this.edges, a, this.coords.delta[this.interactable.options.deltaSource]), a.width = a.right - a.left, a.height = a.bottom - a.top), this._scopeFire("interactions:before-action-".concat(r), e) === !1) return !1;
          var l = e.iEvent = this._createPreparedEvent(n, r, i, o);
          return this._scopeFire("interactions:action-".concat(r), e), r === "start" && (this.prevEvent = l), this._fireEvent(l), this._scopeFire("interactions:after-action-".concat(r), e), !0;
        } }, { key: "_now", value: function() {
          return Date.now();
        } }]), t;
      }();
      function Jn(t) {
        Zn(t.interaction);
      }
      function Zn(t) {
        if (!function(n) {
          return !(!n.offset.pending.x && !n.offset.pending.y);
        }(t)) return !1;
        var e = t.offset.pending;
        return wn(t.coords.cur, e), wn(t.coords.delta, e), Te(t.edges, t.rect, e), e.x = 0, e.y = 0, !0;
      }
      function Ri(t) {
        var e = t.x, n = t.y;
        this.offset.pending.x += e, this.offset.pending.y += n, this.offset.total.x += e, this.offset.total.y += n;
      }
      function wn(t, e) {
        var n = t.page, r = t.client, i = e.x, o = e.y;
        n.x += i, n.y += o, r.x += i, r.y += o;
      }
      Kn.offsetBy = "";
      var Pi = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t) {
        t.Interaction.prototype.offsetBy = Ri;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
      }, "interactions:update-pointer": function(t) {
        return function(e) {
          e.pointerIsDown && (wn(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0);
        }(t.interaction);
      }, "interactions:before-action-start": Jn, "interactions:before-action-move": Jn, "interactions:before-action-end": function(t) {
        var e = t.interaction;
        if (Zn(e)) return e.move({ offset: !0 }), e.end(), !1;
      }, "interactions:stop": function(t) {
        var e = t.interaction;
        e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0;
      } } }, Qn = Pi, Mi = function() {
        function t(e) {
          v(this, t), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e;
        }
        return w(t, [{ key: "start", value: function(e) {
          var n = this.interaction, r = tn(n);
          if (!r || !r.enabled) return !1;
          var i = n.coords.velocity.client, o = Ie(i.x, i.y), a = this.modification || (this.modification = new bn(n));
          if (a.copyFrom(n.modification), this.t0 = n._now(), this.allowResume = r.allowResume, this.v0 = o, this.currentOffset = { x: 0, y: 0 }, this.startCoords = n.coords.cur.page, this.modifierArg = a.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - n.coords.cur.timeStamp < 50 && o > r.minSpeed && o > r.endSpeed) this.startInertia();
          else {
            if (a.result = a.setAll(this.modifierArg), !a.result.changed) return !1;
            this.startSmoothEnd();
          }
          return n.modification.result.rect = null, n.offsetBy(this.targetOffset), n._doPhase({ interaction: n, event: e, phase: "inertiastart" }), n.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), n.modification.result.rect = null, this.active = !0, n.simulation = this, !0;
        } }, { key: "startInertia", value: function() {
          var e = this, n = this.interaction.coords.velocity.client, r = tn(this.interaction), i = r.resistance, o = -Math.log(r.endSpeed / this.v0) / i;
          this.targetOffset = { x: (n.x - o) / i, y: (n.y - o) / i }, this.te = o, this.lambda_v0 = i / this.v0, this.one_ve_v0 = 1 - r.endSpeed / this.v0;
          var a = this.modification, l = this.modifierArg;
          l.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, a.result = a.setAll(l), a.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + a.result.delta.x, y: this.targetOffset.y + a.result.delta.y }), this.onNextFrame(function() {
            return e.inertiaTick();
          });
        } }, { key: "startSmoothEnd", value: function() {
          var e = this;
          this.smoothEnd = !0, this.isModified = !0, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
            return e.smoothEndTick();
          });
        } }, { key: "onNextFrame", value: function(e) {
          var n = this;
          this.timeout = ut.request(function() {
            n.active && e();
          });
        } }, { key: "inertiaTick", value: function() {
          var e, n, r, i, o, a, l, u = this, g = this.interaction, f = tn(g).resistance, m = (g._now() - this.t0) / 1e3;
          if (m < this.te) {
            var x, T = 1 - (Math.exp(-f * m) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (e = 0, n = 0, r = this.targetOffset.x, i = this.targetOffset.y, o = this.modifiedOffset.x, a = this.modifiedOffset.y, x = { x: er(l = T, e, r, o), y: er(l, n, i, a) }) : x = { x: this.targetOffset.x * T, y: this.targetOffset.y * T };
            var z = { x: x.x - this.currentOffset.x, y: x.y - this.currentOffset.y };
            this.currentOffset.x += z.x, this.currentOffset.y += z.y, g.offsetBy(z), g.move(), this.onNextFrame(function() {
              return u.inertiaTick();
            });
          } else g.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var e = this, n = this.interaction, r = n._now() - this.t0, i = tn(n).smoothEndDuration;
          if (r < i) {
            var o = { x: tr(r, 0, this.targetOffset.x, i), y: tr(r, 0, this.targetOffset.y, i) }, a = { x: o.x - this.currentOffset.x, y: o.y - this.currentOffset.y };
            this.currentOffset.x += a.x, this.currentOffset.y += a.y, n.offsetBy(a), n.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
              return e.smoothEndTick();
            });
          } else n.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(e) {
          var n = e.pointer, r = e.event, i = e.eventTarget, o = this.interaction;
          o.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o.updatePointer(n, r, i, !0), o._doPhase({ interaction: o, event: r, phase: "resume" }), Be(o.coords.prev, o.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = !1, this.interaction.simulation = null, ut.cancel(this.timeout);
        } }]), t;
      }();
      function tn(t) {
        var e = t.interactable, n = t.prepared;
        return e && e.options && n.name && e.options[n.name].inertia;
      }
      var Di = { id: "inertia", before: ["modifiers", "actions"], install: function(t) {
        var e = t.defaults;
        t.usePlugin(Qn), t.usePlugin(Gn), t.actions.phases.inertiastart = !0, t.actions.phases.resume = !0, e.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.inertia = new Mi(e);
      }, "interactions:before-action-end": function(t) {
        var e = t.interaction, n = t.event;
        return (!e._interacting || e.simulation || !e.inertia.start(n)) && null;
      }, "interactions:down": function(t) {
        var e = t.interaction, n = t.eventTarget, r = e.inertia;
        if (r.active) for (var i = n; b.element(i); ) {
          if (i === e.element) {
            r.resume(t);
            break;
          }
          i = Pe(i);
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction.inertia;
        e.active && e.stop();
      }, "interactions:before-action-resume": function(t) {
        var e = t.interaction.modification;
        e.stop(t), e.start(t, t.interaction.coords.cur.page), e.applyToInteraction(t);
      }, "interactions:before-action-inertiastart": function(t) {
        return t.interaction.modification.setAndApply(t);
      }, "interactions:action-resume": Ht, "interactions:action-inertiastart": Ht, "interactions:after-action-inertiastart": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:after-action-resume": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      } } };
      function er(t, e, n, r) {
        var i = 1 - t;
        return i * i * e + 2 * i * t * n + t * t * r;
      }
      function tr(t, e, n, r) {
        return -n * (t /= r) * (t - 2) + e;
      }
      var Oi = Di;
      function nr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if (t.immediatePropagationStopped) break;
          r(t);
        }
      }
      var rr = function() {
        function t(e) {
          v(this, t), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = C({}, e || {});
        }
        return w(t, [{ key: "fire", value: function(e) {
          var n, r = this.global;
          (n = this.types[e.type]) && nr(e, n), !e.propagationStopped && r && (n = r[e.type]) && nr(e, n);
        } }, { key: "on", value: function(e, n) {
          var r = we(e, n);
          for (e in r) this.types[e] = Ze(this.types[e] || [], r[e]);
        } }, { key: "off", value: function(e, n) {
          var r = we(e, n);
          for (e in r) {
            var i = this.types[e];
            if (i && i.length) for (var o = 0, a = r[e]; o < a.length; o++) {
              var l = a[o], u = i.indexOf(l);
              u !== -1 && i.splice(u, 1);
            }
          }
        } }, { key: "getRect", value: function(e) {
          return null;
        } }]), t;
      }(), Ci = function() {
        function t(e) {
          v(this, t), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e, qe(this, e);
        }
        return w(t, [{ key: "preventOriginalDefault", value: function() {
          this.originalEvent.preventDefault();
        } }, { key: "stopPropagation", value: function() {
          this.originalEvent.stopPropagation();
        } }, { key: "stopImmediatePropagation", value: function() {
          this.originalEvent.stopImmediatePropagation();
        } }]), t;
      }();
      function jt(t) {
        return b.object(t) ? { capture: !!t.capture, passive: !!t.passive } : { capture: !!t, passive: !1 };
      }
      function nn(t, e) {
        return t === e || (typeof t == "boolean" ? !!e.capture === t && !e.passive : !!t.capture == !!e.capture && !!t.passive == !!e.passive);
      }
      var Ai = { id: "events", install: function(t) {
        var e, n = [], r = {}, i = [], o = { add: a, remove: l, addDelegate: function(f, m, x, T, z) {
          var _ = jt(z);
          if (!r[x]) {
            r[x] = [];
            for (var O = 0; O < i.length; O++) {
              var P = i[O];
              a(P, x, u), a(P, x, g, !0);
            }
          }
          var I = r[x], G = Ue(I, function(ne) {
            return ne.selector === f && ne.context === m;
          });
          G || (G = { selector: f, context: m, listeners: [] }, I.push(G)), G.listeners.push({ func: T, options: _ });
        }, removeDelegate: function(f, m, x, T, z) {
          var _, O = jt(z), P = r[x], I = !1;
          if (P)
            for (_ = P.length - 1; _ >= 0; _--) {
              var G = P[_];
              if (G.selector === f && G.context === m) {
                for (var ne = G.listeners, q = ne.length - 1; q >= 0; q--) {
                  var U = ne[q];
                  if (U.func === T && nn(U.options, O)) {
                    ne.splice(q, 1), ne.length || (P.splice(_, 1), l(m, x, u), l(m, x, g, !0)), I = !0;
                    break;
                  }
                }
                if (I) break;
              }
            }
        }, delegateListener: u, delegateUseCapture: g, delegatedEvents: r, documents: i, targets: n, supportsOptions: !1, supportsPassive: !1 };
        function a(f, m, x, T) {
          if (f.addEventListener) {
            var z = jt(T), _ = Ue(n, function(O) {
              return O.eventTarget === f;
            });
            _ || (_ = { eventTarget: f, events: {} }, n.push(_)), _.events[m] || (_.events[m] = []), Ue(_.events[m], function(O) {
              return O.func === x && nn(O.options, z);
            }) || (f.addEventListener(m, x, o.supportsOptions ? z : z.capture), _.events[m].push({ func: x, options: z }));
          }
        }
        function l(f, m, x, T) {
          if (f.addEventListener && f.removeEventListener) {
            var z = Ge(n, function(He) {
              return He.eventTarget === f;
            }), _ = n[z];
            if (_ && _.events) if (m !== "all") {
              var O = !1, P = _.events[m];
              if (P) {
                if (x === "all") {
                  for (var I = P.length - 1; I >= 0; I--) {
                    var G = P[I];
                    l(f, m, G.func, G.options);
                  }
                  return;
                }
                for (var ne = jt(T), q = 0; q < P.length; q++) {
                  var U = P[q];
                  if (U.func === x && nn(U.options, ne)) {
                    f.removeEventListener(m, x, o.supportsOptions ? ne : ne.capture), P.splice(q, 1), P.length === 0 && (delete _.events[m], O = !0);
                    break;
                  }
                }
              }
              O && !Object.keys(_.events).length && n.splice(z, 1);
            } else for (m in _.events) _.events.hasOwnProperty(m) && l(f, m, "all");
          }
        }
        function u(f, m) {
          for (var x = jt(m), T = new Ci(f), z = r[f.type], _ = Fe(f)[0], O = _; b.element(O); ) {
            for (var P = 0; P < z.length; P++) {
              var I = z[P], G = I.selector, ne = I.context;
              if (fe(O, G) && V(ne, _) && V(ne, O)) {
                var q = I.listeners;
                T.currentTarget = O;
                for (var U = 0; U < q.length; U++) {
                  var He = q[U];
                  nn(He.options, x) && He.func(T);
                }
              }
            }
            O = Pe(O);
          }
        }
        function g(f) {
          return u(f, !0);
        }
        return (e = t.document) == null || e.createElement("div").addEventListener("test", null, { get capture() {
          return o.supportsOptions = !0;
        }, get passive() {
          return o.supportsPassive = !0;
        } }), t.events = o, o;
      } }, En = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t) {
        for (var e = 0, n = En.methodOrder; e < n.length; e++) {
          var r = n[e], i = En[r](t);
          if (i) return i;
        }
        return null;
      }, simulationResume: function(t) {
        var e = t.pointerType, n = t.eventType, r = t.eventTarget, i = t.scope;
        if (!/down|start/i.test(n)) return null;
        for (var o = 0, a = i.interactions.list; o < a.length; o++) {
          var l = a[o], u = r;
          if (l.simulation && l.simulation.allowResume && l.pointerType === e) for (; u; ) {
            if (u === l.element) return l;
            u = Pe(u);
          }
        }
        return null;
      }, mouseOrPen: function(t) {
        var e, n = t.pointerId, r = t.pointerType, i = t.eventType, o = t.scope;
        if (r !== "mouse" && r !== "pen") return null;
        for (var a = 0, l = o.interactions.list; a < l.length; a++) {
          var u = l[a];
          if (u.pointerType === r) {
            if (u.simulation && !ir(u, n)) continue;
            if (u.interacting()) return u;
            e || (e = u);
          }
        }
        if (e) return e;
        for (var g = 0, f = o.interactions.list; g < f.length; g++) {
          var m = f[g];
          if (!(m.pointerType !== r || /down/i.test(i) && m.simulation)) return m;
        }
        return null;
      }, hasPointer: function(t) {
        for (var e = t.pointerId, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
          var i = r[n];
          if (ir(i, e)) return i;
        }
        return null;
      }, idle: function(t) {
        for (var e = t.pointerType, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
          var i = r[n];
          if (i.pointers.length === 1) {
            var o = i.interactable;
            if (o && (!o.options.gesture || !o.options.gesture.enabled)) continue;
          } else if (i.pointers.length >= 2) continue;
          if (!i.interacting() && e === i.pointerType) return i;
        }
        return null;
      } };
      function ir(t, e) {
        return t.pointers.some(function(n) {
          return n.id === e;
        });
      }
      var Ii = En, Sn = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function or(t, e) {
        return function(n) {
          var r = e.interactions.list, i = De(n), o = Fe(n), a = o[0], l = o[1], u = [];
          if (/^touch/.test(n.type)) {
            e.prevTouchTime = e.now();
            for (var g = 0, f = n.changedTouches; g < f.length; g++) {
              var m = f[g], x = { pointer: m, pointerId: W(m), pointerType: i, eventType: n.type, eventTarget: a, curEventTarget: l, scope: e }, T = ar(x);
              u.push([x.pointer, x.eventTarget, x.curEventTarget, T]);
            }
          } else {
            var z = !1;
            if (!ue.supportsPointerEvent && /mouse/.test(n.type)) {
              for (var _ = 0; _ < r.length && !z; _++) z = r[_].pointerType !== "mouse" && r[_].pointerIsDown;
              z = z || e.now() - e.prevTouchTime < 500 || n.timeStamp === 0;
            }
            if (!z) {
              var O = { pointer: n, pointerId: W(n), pointerType: i, eventType: n.type, curEventTarget: l, eventTarget: a, scope: e }, P = ar(O);
              u.push([O.pointer, O.eventTarget, O.curEventTarget, P]);
            }
          }
          for (var I = 0; I < u.length; I++) {
            var G = u[I], ne = G[0], q = G[1], U = G[2];
            G[3][t](ne, n, q, U);
          }
        };
      }
      function ar(t) {
        var e = t.pointerType, n = t.scope, r = { interaction: Ii.search(t), searchDetails: t };
        return n.fire("interactions:find", r), r.interaction || n.interactions.new({ pointerType: e });
      }
      function zn(t, e) {
        var n = t.doc, r = t.scope, i = t.options, o = r.interactions.docEvents, a = r.events, l = a[e];
        for (var u in r.browser.isIOS && !i.events && (i.events = { passive: !1 }), a.delegatedEvents) l(n, u, a.delegateListener), l(n, u, a.delegateUseCapture, !0);
        for (var g = i && i.events, f = 0; f < o.length; f++) {
          var m = o[f];
          l(n, m.type, m.listener, g);
        }
      }
      var Bi = { id: "core/interactions", install: function(t) {
        for (var e = {}, n = 0; n < Sn.length; n++) {
          var r = Sn[n];
          e[r] = or(r, t);
        }
        var i, o = ue.pEventTypes;
        function a() {
          for (var l = 0, u = t.interactions.list; l < u.length; l++) {
            var g = u[l];
            if (g.pointerIsDown && g.pointerType === "touch" && !g._interacting) for (var f = function() {
              var T = x[m];
              t.documents.some(function(z) {
                return V(z.doc, T.downTarget);
              }) || g.removePointer(T.pointer, T.event);
            }, m = 0, x = g.pointers; m < x.length; m++) f();
          }
        }
        (i = se.PointerEvent ? [{ type: o.down, listener: a }, { type: o.down, listener: e.pointerDown }, { type: o.move, listener: e.pointerMove }, { type: o.up, listener: e.pointerUp }, { type: o.cancel, listener: e.pointerUp }] : [{ type: "mousedown", listener: e.pointerDown }, { type: "mousemove", listener: e.pointerMove }, { type: "mouseup", listener: e.pointerUp }, { type: "touchstart", listener: a }, { type: "touchstart", listener: e.pointerDown }, { type: "touchmove", listener: e.pointerMove }, { type: "touchend", listener: e.pointerUp }, { type: "touchcancel", listener: e.pointerUp }]).push({ type: "blur", listener: function(l) {
          for (var u = 0, g = t.interactions.list; u < g.length; u++)
            g[u].documentBlur(l);
        } }), t.prevTouchTime = 0, t.Interaction = function(l) {
          E(g, l);
          var u = oe(g);
          function g() {
            return v(this, g), u.apply(this, arguments);
          }
          return w(g, [{ key: "pointerMoveTolerance", get: function() {
            return t.interactions.pointerMoveTolerance;
          }, set: function(f) {
            t.interactions.pointerMoveTolerance = f;
          } }, { key: "_now", value: function() {
            return t.now();
          } }]), g;
        }(_i), t.interactions = { list: [], new: function(l) {
          l.scopeFire = function(g, f) {
            return t.fire(g, f);
          };
          var u = new t.Interaction(l);
          return t.interactions.list.push(u), u;
        }, listeners: e, docEvents: i, pointerMoveTolerance: 1 }, t.usePlugin(Vn);
      }, listeners: { "scope:add-document": function(t) {
        return zn(t, "add");
      }, "scope:remove-document": function(t) {
        return zn(t, "remove");
      }, "interactable:unset": function(t, e) {
        for (var n = t.interactable, r = e.interactions.list.length - 1; r >= 0; r--) {
          var i = e.interactions.list[r];
          i.interactable === n && (i.stop(), e.fire("interactions:destroy", { interaction: i }), i.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(r, 1));
        }
      } }, onDocSignal: zn, doOnInteractions: or, methodNames: Sn }, Fi = Bi, dt = function(t) {
        return t[t.On = 0] = "On", t[t.Off = 1] = "Off", t;
      }(dt || {}), Li = function() {
        function t(e, n, r, i) {
          v(this, t), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new rr(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n.actions, this.target = e, this._context = n.context || r, this._win = L(re(e) ? this._context : e), this._doc = this._win.document, this._scopeEvents = i, this.set(n);
        }
        return w(t, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(e, n) {
          return b.func(n.onstart) && this.on("".concat(e, "start"), n.onstart), b.func(n.onmove) && this.on("".concat(e, "move"), n.onmove), b.func(n.onend) && this.on("".concat(e, "end"), n.onend), b.func(n.oninertiastart) && this.on("".concat(e, "inertiastart"), n.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(e, n, r) {
          var i, o = this, a = (i = this._actions.map[e]) == null ? void 0 : i.filterEventType, l = function(u) {
            return (a == null || a(u)) && Qt(u, o._actions);
          };
          (b.array(n) || b.object(n)) && this._onOff(dt.Off, e, n, void 0, l), (b.array(r) || b.object(r)) && this._onOff(dt.On, e, r, void 0, l);
        } }, { key: "setPerAction", value: function(e, n) {
          var r = this._defaults;
          for (var i in n) {
            var o = i, a = this.options[e], l = n[o];
            o === "listeners" && this.updatePerActionListeners(e, a.listeners, l), b.array(l) ? a[o] = ot(l) : b.plainObject(l) ? (a[o] = C(a[o] || {}, Tt(l)), b.object(r.perAction[o]) && "enabled" in r.perAction[o] && (a[o].enabled = l.enabled !== !1)) : b.bool(l) && b.object(r.perAction[o]) ? a[o].enabled = l : a[o] = l;
          }
        } }, { key: "getRect", value: function(e) {
          return e = e || (b.element(this.target) ? this.target : null), b.string(this.target) && (e = e || this._context.querySelector(this.target)), j(e);
        } }, { key: "rectChecker", value: function(e) {
          var n = this;
          return b.func(e) ? (this.getRect = function(r) {
            var i = C({}, e.apply(n, r));
            return "width" in i || (i.width = i.right - i.left, i.height = i.bottom - i.top), i;
          }, this) : e === null ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(e, n) {
          if (re(n) || b.object(n)) {
            for (var r in this.options[e] = n, this._actions.map) this.options[r][e] = n;
            return this;
          }
          return this.options[e];
        } }, { key: "origin", value: function(e) {
          return this._backCompatOption("origin", e);
        } }, { key: "deltaSource", value: function(e) {
          return e === "page" || e === "client" ? (this.options.deltaSource = e, this) : this.options.deltaSource;
        } }, { key: "getAllElements", value: function() {
          var e = this.target;
          return b.string(e) ? Array.from(this._context.querySelectorAll(e)) : b.func(e) && e.getAllElements ? e.getAllElements() : b.element(e) ? [e] : [];
        } }, { key: "context", value: function() {
          return this._context;
        } }, { key: "inContext", value: function(e) {
          return this._context === e.ownerDocument || V(this._context, e);
        } }, { key: "testIgnoreAllow", value: function(e, n, r) {
          return !this.testIgnore(e.ignoreFrom, n, r) && this.testAllow(e.allowFrom, n, r);
        } }, { key: "testAllow", value: function(e, n, r) {
          return !e || !!b.element(r) && (b.string(e) ? B(r, e, n) : !!b.element(e) && V(e, r));
        } }, { key: "testIgnore", value: function(e, n, r) {
          return !(!e || !b.element(r)) && (b.string(e) ? B(r, e, n) : !!b.element(e) && V(e, r));
        } }, { key: "fire", value: function(e) {
          return this.events.fire(e), this;
        } }, { key: "_onOff", value: function(e, n, r, i, o) {
          b.object(n) && !b.array(n) && (i = r, r = null);
          var a = we(n, r, o);
          for (var l in a) {
            l === "wheel" && (l = ue.wheelEvent);
            for (var u = 0, g = a[l]; u < g.length; u++) {
              var f = g[u];
              Qt(l, this._actions) ? this.events[e === dt.On ? "on" : "off"](l, f) : b.string(this.target) ? this._scopeEvents[e === dt.On ? "addDelegate" : "removeDelegate"](this.target, this._context, l, f, i) : this._scopeEvents[e === dt.On ? "add" : "remove"](this.target, l, f, i);
            }
          }
          return this;
        } }, { key: "on", value: function(e, n, r) {
          return this._onOff(dt.On, e, n, r);
        } }, { key: "off", value: function(e, n, r) {
          return this._onOff(dt.Off, e, n, r);
        } }, { key: "set", value: function(e) {
          var n = this._defaults;
          for (var r in b.object(e) || (e = {}), this.options = Tt(n.base), this._actions.methodDict) {
            var i = r, o = this._actions.methodDict[i];
            this.options[i] = {}, this.setPerAction(i, C(C({}, n.perAction), n.actions[i])), this[o](e[i]);
          }
          for (var a in e) a !== "getRect" ? b.func(this[a]) && this[a](e[a]) : this.rectChecker(e.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (b.string(this.target)) for (var e in this._scopeEvents.delegatedEvents) for (var n = this._scopeEvents.delegatedEvents[e], r = n.length - 1; r >= 0; r--) {
            var i = n[r], o = i.selector, a = i.context, l = i.listeners;
            o === this.target && a === this._context && n.splice(r, 1);
            for (var u = l.length - 1; u >= 0; u--) this._scopeEvents.removeDelegate(this.target, this._context, e, l[u][0], l[u][1]);
          }
          else this._scopeEvents.remove(this.target, "all");
        } }]), t;
      }(), Hi = function() {
        function t(e) {
          var n = this;
          v(this, t), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e, e.addListeners({ "interactable:unset": function(r) {
            var i = r.interactable, o = i.target, a = b.string(o) ? n.selectorMap[o] : o[n.scope.id], l = Ge(a, function(u) {
              return u === i;
            });
            a.splice(l, 1);
          } });
        }
        return w(t, [{ key: "new", value: function(e, n) {
          n = C(n || {}, { actions: this.scope.actions });
          var r = new this.scope.Interactable(e, n, this.scope.document, this.scope.events);
          return this.scope.addDocument(r._doc), this.list.push(r), b.string(e) ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(r)) : (r.target[this.scope.id] || Object.defineProperty(e, this.scope.id, { value: [], configurable: !0 }), e[this.scope.id].push(r)), this.scope.fire("interactable:new", { target: e, options: n, interactable: r, win: this.scope._win }), r;
        } }, { key: "getExisting", value: function(e, n) {
          var r = n && n.context || this.scope.document, i = b.string(e), o = i ? this.selectorMap[e] : e[this.scope.id];
          if (o) return Ue(o, function(a) {
            return a._context === r && (i || a.inContext(e));
          });
        } }, { key: "forEachMatch", value: function(e, n) {
          for (var r = 0, i = this.list; r < i.length; r++) {
            var o = i[r], a = void 0;
            if ((b.string(o.target) ? b.element(e) && fe(e, o.target) : e === o.target) && o.inContext(e) && (a = n(o)), a !== void 0) return a;
          }
        } }]), t;
      }(), ji = function() {
        function t() {
          var e = this;
          v(this, t), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = ue, this.defaults = Tt(Un), this.Eventable = rr, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = function(r) {
            var i = function o(a, l) {
              var u = r.interactables.getExisting(a, l);
              return u || ((u = r.interactables.new(a, l)).events.global = o.globalEvents), u;
            };
            return i.getPointerAverage = le, i.getTouchBBox = J, i.getTouchDistance = F, i.getTouchAngle = Se, i.getElementRect = j, i.getElementClientRect = de, i.matchesSelector = fe, i.closest = Re, i.globalEvents = {}, i.version = "1.10.27", i.scope = r, i.use = function(o, a) {
              return this.scope.usePlugin(o, a), this;
            }, i.isSet = function(o, a) {
              return !!this.scope.interactables.get(o, a && a.context);
            }, i.on = Lt(function(o, a, l) {
              if (b.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), b.array(o)) {
                for (var u = 0, g = o; u < g.length; u++) {
                  var f = g[u];
                  this.on(f, a, l);
                }
                return this;
              }
              if (b.object(o)) {
                for (var m in o) this.on(m, o[m], a);
                return this;
              }
              return Qt(o, this.scope.actions) ? this.globalEvents[o] ? this.globalEvents[o].push(a) : this.globalEvents[o] = [a] : this.scope.events.add(this.scope.document, o, a, { options: l }), this;
            }, "The interact.on() method is being deprecated"), i.off = Lt(function(o, a, l) {
              if (b.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), b.array(o)) {
                for (var u = 0, g = o; u < g.length; u++) {
                  var f = g[u];
                  this.off(f, a, l);
                }
                return this;
              }
              if (b.object(o)) {
                for (var m in o) this.off(m, o[m], a);
                return this;
              }
              var x;
              return Qt(o, this.scope.actions) ? o in this.globalEvents && (x = this.globalEvents[o].indexOf(a)) !== -1 && this.globalEvents[o].splice(x, 1) : this.scope.events.remove(this.scope.document, o, a, l), this;
            }, "The interact.off() method is being deprecated"), i.debug = function() {
              return this.scope;
            }, i.supportsTouch = function() {
              return ue.supportsTouch;
            }, i.supportsPointerEvent = function() {
              return ue.supportsPointerEvent;
            }, i.stop = function() {
              for (var o = 0, a = this.scope.interactions.list; o < a.length; o++) a[o].stop();
              return this;
            }, i.pointerMoveTolerance = function(o) {
              return b.number(o) ? (this.scope.interactions.pointerMoveTolerance = o, this) : this.scope.interactions.pointerMoveTolerance;
            }, i.addDocument = function(o, a) {
              this.scope.addDocument(o, a);
            }, i.removeDocument = function(o) {
              this.scope.removeDocument(o);
            }, i;
          }(this), this.InteractEvent = xn, this.Interactable = void 0, this.interactables = new Hi(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(r) {
            return e.removeDocument(r.target);
          };
          var n = this;
          this.Interactable = function(r) {
            E(o, r);
            var i = oe(o);
            function o() {
              return v(this, o), i.apply(this, arguments);
            }
            return w(o, [{ key: "_defaults", get: function() {
              return n.defaults;
            } }, { key: "set", value: function(a) {
              return be(ie(o.prototype), "set", this).call(this, a), n.fire("interactable:set", { options: a, interactable: this }), this;
            } }, { key: "unset", value: function() {
              be(ie(o.prototype), "unset", this).call(this);
              var a = n.interactables.list.indexOf(this);
              a < 0 || (n.interactables.list.splice(a, 1), n.fire("interactable:unset", { interactable: this }));
            } }]), o;
          }(Li);
        }
        return w(t, [{ key: "addListeners", value: function(e, n) {
          this.listenerMaps.push({ id: n, map: e });
        } }, { key: "fire", value: function(e, n) {
          for (var r = 0, i = this.listenerMaps; r < i.length; r++) {
            var o = i[r].map[e];
            if (o && o(n, this, e) === !1) return !1;
          }
        } }, { key: "init", value: function(e) {
          return this.isInitialized ? this : function(n, r) {
            return n.isInitialized = !0, b.window(r) && $(r), se.init(r), ue.init(r), ut.init(r), n.window = r, n.document = r.document, n.usePlugin(Fi), n.usePlugin(Ai), n;
          }(this, e);
        } }, { key: "pluginIsInstalled", value: function(e) {
          var n = e.id;
          return n ? !!this._plugins.map[n] : this._plugins.list.indexOf(e) !== -1;
        } }, { key: "usePlugin", value: function(e, n) {
          if (!this.isInitialized) return this;
          if (this.pluginIsInstalled(e)) return this;
          if (e.id && (this._plugins.map[e.id] = e), this._plugins.list.push(e), e.install && e.install(this, n), e.listeners && e.before) {
            for (var r = 0, i = this.listenerMaps.length, o = e.before.reduce(function(l, u) {
              return l[u] = !0, l[sr(u)] = !0, l;
            }, {}); r < i; r++) {
              var a = this.listenerMaps[r].id;
              if (a && (o[a] || o[sr(a)])) break;
            }
            this.listenerMaps.splice(r, 0, { id: e.id, map: e.listeners });
          } else e.listeners && this.listenerMaps.push({ id: e.id, map: e.listeners });
          return this;
        } }, { key: "addDocument", value: function(e, n) {
          if (this.getDocIndex(e) !== -1) return !1;
          var r = L(e);
          n = n ? C({}, n) : {}, this.documents.push({ doc: e, options: n }), this.events.documents.push(e), e !== this.document && this.events.add(r, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: e, window: r, scope: this, options: n });
        } }, { key: "removeDocument", value: function(e) {
          var n = this.getDocIndex(e), r = L(e), i = this.documents[n].options;
          this.events.remove(r, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", { doc: e, window: r, scope: this, options: i });
        } }, { key: "getDocIndex", value: function(e) {
          for (var n = 0; n < this.documents.length; n++) if (this.documents[n].doc === e) return n;
          return -1;
        } }, { key: "getDocOptions", value: function(e) {
          var n = this.getDocIndex(e);
          return n === -1 ? null : this.documents[n].options;
        } }, { key: "now", value: function() {
          return (this.window.Date || Date).now();
        } }]), t;
      }();
      function sr(t) {
        return t && t.replace(/\/.*$/, "");
      }
      var lr = new ji(), Le = lr.interactStatic, $i = typeof globalThis < "u" ? globalThis : window;
      lr.init($i);
      var Wi = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(t) {
        var e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(r) {
          var i = r[0], o = r[1];
          return i in t || o in t;
        }), n = function(r, i) {
          for (var o = t.range, a = t.limits, l = a === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : a, u = t.offset, g = u === void 0 ? { x: 0, y: 0 } : u, f = { range: o, grid: t, x: null, y: null }, m = 0; m < e.length; m++) {
            var x = e[m], T = x[0], z = x[1], _ = Math.round((r - g.x) / t[T]), O = Math.round((i - g.y) / t[z]);
            f[T] = Math.max(l.left, Math.min(l.right, _ * t[T] + g.x)), f[z] = Math.max(l.top, Math.min(l.bottom, O * t[z] + g.y));
          }
          return f;
        };
        return n.grid = t, n.coordFields = e, n;
      } }), qi = { id: "snappers", install: function(t) {
        var e = t.interactStatic;
        e.snappers = C(e.snappers || {}, Wi), e.createSnapGrid = e.snappers.grid;
      } }, Ni = qi, Xi = { start: function(t) {
        var e = t.state, n = t.rect, r = t.edges, i = t.pageCoords, o = e.options, a = o.ratio, l = o.enabled, u = e.options, g = u.equalDelta, f = u.modifiers;
        a === "preserve" && (a = n.width / n.height), e.startCoords = C({}, i), e.startRect = C({}, n), e.ratio = a, e.equalDelta = g;
        var m = e.linkedEdges = { top: r.top || r.left && !r.bottom, left: r.left || r.top && !r.right, bottom: r.bottom || r.right && !r.top, right: r.right || r.bottom && !r.left };
        if (e.xIsPrimaryAxis = !(!r.left && !r.right), e.equalDelta) {
          var x = (m.left ? 1 : -1) * (m.top ? 1 : -1);
          e.edgeSign = { x, y: x };
        } else e.edgeSign = { x: m.left ? -1 : 1, y: m.top ? -1 : 1 };
        if (l !== !1 && C(r, m), f != null && f.length) {
          var T = new bn(t.interaction);
          T.copyFrom(t.interaction.modification), T.prepareStates(f), e.subModification = T, T.startAll(c({}, t));
        }
      }, set: function(t) {
        var e = t.state, n = t.rect, r = t.coords, i = e.linkedEdges, o = C({}, r), a = e.equalDelta ? Yi : Vi;
        if (C(t.edges, i), a(e, e.xIsPrimaryAxis, r, n), !e.subModification) return null;
        var l = C({}, n);
        Te(i, l, { x: r.x - o.x, y: r.y - o.y });
        var u = e.subModification.setAll(c(c({}, t), {}, { rect: l, edges: i, pageCoords: r, prevCoords: r, prevRect: l })), g = u.delta;
        return u.changed && (a(e, Math.abs(g.x) > Math.abs(g.y), u.coords, u.rect), C(r, u.coords)), u.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
      function Yi(t, e, n) {
        var r = t.startCoords, i = t.edgeSign;
        e ? n.y = r.y + (n.x - r.x) * i.y : n.x = r.x + (n.y - r.y) * i.x;
      }
      function Vi(t, e, n, r) {
        var i = t.startRect, o = t.startCoords, a = t.ratio, l = t.edgeSign;
        if (e) {
          var u = r.width / a;
          n.y = o.y + (u - i.height) * l.y;
        } else {
          var g = r.height * a;
          n.x = o.x + (g - i.width) * l.x;
        }
      }
      var Gi = ft(Xi, "aspectRatio"), cr = function() {
      };
      cr._defaults = {};
      var rn = cr;
      function vt(t, e, n) {
        return b.func(t) ? tt(t, e.interactable, e.element, [n.x, n.y, e]) : tt(t, e.interactable, e.element);
      }
      var on = { start: function(t) {
        var e = t.rect, n = t.startOffset, r = t.state, i = t.interaction, o = t.pageCoords, a = r.options, l = a.elementRect, u = C({ left: 0, top: 0, right: 0, bottom: 0 }, a.offset || {});
        if (e && l) {
          var g = vt(a.restriction, i, o);
          if (g) {
            var f = g.right - g.left - e.width, m = g.bottom - g.top - e.height;
            f < 0 && (u.left += f, u.right += f), m < 0 && (u.top += m, u.bottom += m);
          }
          u.left += n.left - e.width * l.left, u.top += n.top - e.height * l.top, u.right += n.right - e.width * (1 - l.right), u.bottom += n.bottom - e.height * (1 - l.bottom);
        }
        r.offset = u;
      }, set: function(t) {
        var e = t.coords, n = t.interaction, r = t.state, i = r.options, o = r.offset, a = vt(i.restriction, n, e);
        if (a) {
          var l = function(u) {
            return !u || "left" in u && "top" in u || ((u = C({}, u)).left = u.x || 0, u.top = u.y || 0, u.right = u.right || u.left + u.width, u.bottom = u.bottom || u.top + u.height), u;
          }(a);
          e.x = Math.max(Math.min(l.right - o.right, e.x), l.left + o.left), e.y = Math.max(Math.min(l.bottom - o.bottom, e.y), l.top + o.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, Ui = ft(on, "restrict"), ur = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, fr = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function dr(t, e) {
        for (var n = 0, r = ["top", "left", "bottom", "right"]; n < r.length; n++) {
          var i = r[n];
          i in t || (t[i] = e[i]);
        }
        return t;
      }
      var $t = { noInner: ur, noOuter: fr, start: function(t) {
        var e, n = t.interaction, r = t.startOffset, i = t.state, o = i.options;
        o && (e = xe(vt(o.offset, n, n.coords.start.page))), e = e || { x: 0, y: 0 }, i.offset = { top: e.y + r.top, left: e.x + r.left, bottom: e.y - r.bottom, right: e.x - r.right };
      }, set: function(t) {
        var e = t.coords, n = t.edges, r = t.interaction, i = t.state, o = i.offset, a = i.options;
        if (n) {
          var l = C({}, e), u = vt(a.inner, r, l) || {}, g = vt(a.outer, r, l) || {};
          dr(u, ur), dr(g, fr), n.top ? e.y = Math.min(Math.max(g.top + o.top, l.y), u.top + o.top) : n.bottom && (e.y = Math.max(Math.min(g.bottom + o.bottom, l.y), u.bottom + o.bottom)), n.left ? e.x = Math.min(Math.max(g.left + o.left, l.x), u.left + o.left) : n.right && (e.x = Math.max(Math.min(g.right + o.right, l.x), u.right + o.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, Ki = ft($t, "restrictEdges"), Ji = C({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(t) {
      } }, on.defaults), Zi = ft({ start: on.start, set: on.set, defaults: Ji }, "restrictRect"), Qi = { width: -1 / 0, height: -1 / 0 }, eo = { width: 1 / 0, height: 1 / 0 }, to = ft({ start: function(t) {
        return $t.start(t);
      }, set: function(t) {
        var e = t.interaction, n = t.state, r = t.rect, i = t.edges, o = n.options;
        if (i) {
          var a = M(vt(o.min, e, t.coords)) || Qi, l = M(vt(o.max, e, t.coords)) || eo;
          n.options = { endOnly: o.endOnly, inner: C({}, $t.noInner), outer: C({}, $t.noOuter) }, i.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - l.height) : i.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + l.height), i.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - l.width) : i.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + l.width), $t.set(t), n.options = o;
        }
      }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), Tn = { start: function(t) {
        var e, n = t.interaction, r = t.interactable, i = t.element, o = t.rect, a = t.state, l = t.startOffset, u = a.options, g = u.offsetWithOrigin ? function(x) {
          var T = x.interaction.element, z = xe(tt(x.state.options.origin, null, null, [T])), _ = z || ke(x.interactable, T, x.interaction.prepared.name);
          return _;
        }(t) : { x: 0, y: 0 };
        if (u.offset === "startCoords") e = { x: n.coords.start.page.x, y: n.coords.start.page.y };
        else {
          var f = tt(u.offset, r, i, [n]);
          (e = xe(f) || { x: 0, y: 0 }).x += g.x, e.y += g.y;
        }
        var m = u.relativePoints;
        a.offsets = o && m && m.length ? m.map(function(x, T) {
          return { index: T, relativePoint: x, x: l.left - o.width * x.x + e.x, y: l.top - o.height * x.y + e.y };
        }) : [{ index: 0, relativePoint: null, x: e.x, y: e.y }];
      }, set: function(t) {
        var e = t.interaction, n = t.coords, r = t.state, i = r.options, o = r.offsets, a = ke(e.interactable, e.element, e.prepared.name), l = C({}, n), u = [];
        i.offsetWithOrigin || (l.x -= a.x, l.y -= a.y);
        for (var g = 0, f = o; g < f.length; g++) for (var m = f[g], x = l.x - m.x, T = l.y - m.y, z = 0, _ = i.targets.length; z < _; z++) {
          var O = i.targets[z], P = void 0;
          (P = b.func(O) ? O(x, T, e._proxy, m, z) : O) && u.push({ x: (b.number(P.x) ? P.x : x) + m.x, y: (b.number(P.y) ? P.y : T) + m.y, range: b.number(P.range) ? P.range : i.range, source: O, index: z, offset: m });
        }
        for (var I = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, G = 0; G < u.length; G++) {
          var ne = u[G], q = ne.range, U = ne.x - l.x, He = ne.y - l.y, me = Ie(U, He), Ye = me <= q;
          q === 1 / 0 && I.inRange && I.range !== 1 / 0 && (Ye = !1), I.target && !(Ye ? I.inRange && q !== 1 / 0 ? me / q < I.distance / I.range : q === 1 / 0 && I.range !== 1 / 0 || me < I.distance : !I.inRange && me < I.distance) || (I.target = ne, I.distance = me, I.range = q, I.inRange = Ye, I.delta.x = U, I.delta.y = He);
        }
        return I.inRange && (n.x = I.target.x, n.y = I.target.y), r.closest = I, I;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, no = ft(Tn, "snap"), an = { start: function(t) {
        var e = t.state, n = t.edges, r = e.options;
        if (!n) return null;
        t.state = { options: { targets: null, relativePoints: [{ x: n.left ? 0 : 1, y: n.top ? 0 : 1 }], offset: r.offset || "self", origin: { x: 0, y: 0 }, range: r.range } }, e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]], Tn.start(t), e.offsets = t.state.offsets, t.state = e;
      }, set: function(t) {
        var e = t.interaction, n = t.state, r = t.coords, i = n.options, o = n.offsets, a = { x: r.x - o[0].x, y: r.y - o[0].y };
        n.options = C({}, i), n.options.targets = [];
        for (var l = 0, u = i.targets || []; l < u.length; l++) {
          var g = u[l], f = void 0;
          if (f = b.func(g) ? g(a.x, a.y, e) : g) {
            for (var m = 0, x = n.targetFields; m < x.length; m++) {
              var T = x[m], z = T[0], _ = T[1];
              if (z in f || _ in f) {
                f.x = f[z], f.y = f[_];
                break;
              }
            }
            n.options.targets.push(f);
          }
        }
        var O = Tn.set(t);
        return n.options = i, O;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, ro = ft(an, "snapSize"), kn = { aspectRatio: Gi, restrictEdges: Ki, restrict: Ui, restrictRect: Zi, restrictSize: to, snapEdges: ft({ start: function(t) {
        var e = t.edges;
        return e ? (t.state.targetFields = t.state.targetFields || [[e.left ? "left" : "right", e.top ? "top" : "bottom"]], an.start(t)) : null;
      }, set: an.set, defaults: C(Tt(an.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: no, snapSize: ro, spring: rn, avoid: rn, transform: rn, rubberband: rn }, io = { id: "modifiers", install: function(t) {
        var e = t.interactStatic;
        for (var n in t.usePlugin(Gn), t.usePlugin(Ni), e.modifiers = kn, kn) {
          var r = kn[n], i = r._defaults, o = r._methods;
          i._methods = o, t.defaults.perAction[n] = i;
        }
      } }, oo = io, pr = function(t) {
        E(n, t);
        var e = oe(n);
        function n(r, i, o, a, l, u) {
          var g;
          if (v(this, n), qe(ye(g = e.call(this, l)), o), o !== i && qe(ye(g), i), g.timeStamp = u, g.originalEvent = o, g.type = r, g.pointerId = W(i), g.pointerType = De(i), g.target = a, g.currentTarget = null, r === "tap") {
            var f = l.getPointerIndex(i);
            g.dt = g.timeStamp - l.pointers[f].downTime;
            var m = g.timeStamp - l.tapTime;
            g.double = !!l.prevTap && l.prevTap.type !== "doubletap" && l.prevTap.target === g.target && m < 500;
          } else r === "doubletap" && (g.dt = i.timeStamp - l.tapTime, g.double = !0);
          return g;
        }
        return w(n, [{ key: "_subtractOrigin", value: function(r) {
          var i = r.x, o = r.y;
          return this.pageX -= i, this.pageY -= o, this.clientX -= i, this.clientY -= o, this;
        } }, { key: "_addOrigin", value: function(r) {
          var i = r.x, o = r.y;
          return this.pageX += i, this.pageY += o, this.clientX += i, this.clientY += o, this;
        } }, { key: "preventDefault", value: function() {
          this.originalEvent.preventDefault();
        } }]), n;
      }(Ne), Wt = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t) {
        t.pointerEvents = Wt, t.defaults.actions.pointerEvents = Wt.defaults, C(t.actions.phaselessTypes, Wt.types);
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.prevTap = null, e.tapTime = 0;
      }, "interactions:update-pointer": function(t) {
        var e = t.down, n = t.pointerInfo;
        !e && n.hold || (n.hold = { duration: 1 / 0, timeout: null });
      }, "interactions:move": function(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget;
        t.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && _n(t), pt({ interaction: n, pointer: r, event: i, eventTarget: o, type: "move" }, e));
      }, "interactions:down": function(t, e) {
        (function(n, r) {
          for (var i = n.interaction, o = n.pointer, a = n.event, l = n.eventTarget, u = n.pointerIndex, g = i.pointers[u].hold, f = K(l), m = { interaction: i, pointer: o, event: a, eventTarget: l, type: "hold", targets: [], path: f, node: null }, x = 0; x < f.length; x++) {
            var T = f[x];
            m.node = T, r.fire("pointerEvents:collect-targets", m);
          }
          if (m.targets.length) {
            for (var z = 1 / 0, _ = 0, O = m.targets; _ < O.length; _++) {
              var P = O[_].eventable.options.holdDuration;
              P < z && (z = P);
            }
            g.duration = z, g.timeout = setTimeout(function() {
              pt({ interaction: i, eventTarget: l, pointer: o, event: a, type: "hold" }, r);
            }, z);
          }
        })(t, e), pt(t, e);
      }, "interactions:up": function(t, e) {
        _n(t), pt(t, e), function(n, r) {
          var i = n.interaction, o = n.pointer, a = n.event, l = n.eventTarget;
          i.pointerWasMoved || pt({ interaction: i, eventTarget: l, pointer: o, event: a, type: "tap" }, r);
        }(t, e);
      }, "interactions:cancel": function(t, e) {
        _n(t), pt(t, e);
      } }, PointerEvent: pr, fire: pt, collectEventTargets: hr, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
      function pt(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, l = t.targets, u = l === void 0 ? hr(t, e) : l, g = new pr(a, r, i, o, n, e.now());
        e.fire("pointerEvents:new", { pointerEvent: g });
        for (var f = { interaction: n, pointer: r, event: i, eventTarget: o, targets: u, type: a, pointerEvent: g }, m = 0; m < u.length; m++) {
          var x = u[m];
          for (var T in x.props || {}) g[T] = x.props[T];
          var z = ke(x.eventable, x.node);
          if (g._subtractOrigin(z), g.eventable = x.eventable, g.currentTarget = x.node, x.eventable.fire(g), g._addOrigin(z), g.immediatePropagationStopped || g.propagationStopped && m + 1 < u.length && u[m + 1].node !== g.currentTarget) break;
        }
        if (e.fire("pointerEvents:fired", f), a === "tap") {
          var _ = g.double ? pt({ interaction: n, pointer: r, event: i, eventTarget: o, type: "doubletap" }, e) : g;
          n.prevTap = _, n.tapTime = _.timeStamp;
        }
        return g;
      }
      function hr(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, l = n.getPointerIndex(r), u = n.pointers[l];
        if (a === "tap" && (n.pointerWasMoved || !u || u.downTarget !== o)) return [];
        for (var g = K(o), f = { interaction: n, pointer: r, event: i, eventTarget: o, type: a, path: g, targets: [], node: null }, m = 0; m < g.length; m++) {
          var x = g[m];
          f.node = x, e.fire("pointerEvents:collect-targets", f);
        }
        return a === "hold" && (f.targets = f.targets.filter(function(T) {
          var z, _;
          return T.eventable.options.holdDuration === ((z = n.pointers[l]) == null || (_ = z.hold) == null ? void 0 : _.duration);
        })), f.targets;
      }
      function _n(t) {
        var e = t.interaction, n = t.pointerIndex, r = e.pointers[n].hold;
        r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
      }
      var ao = Object.freeze({ __proto__: null, default: Wt });
      function so(t) {
        var e = t.interaction;
        e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
      }
      var lo = { id: "pointer-events/holdRepeat", install: function(t) {
        t.usePlugin(Wt);
        var e = t.pointerEvents;
        e.defaults.holdRepeatInterval = 0, e.types.holdrepeat = t.actions.phaselessTypes.holdrepeat = !0;
      }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t, e) {
        return t["pointerEvents:".concat(e)] = so, t;
      }, { "pointerEvents:new": function(t) {
        var e = t.pointerEvent;
        e.type === "hold" && (e.count = (e.count || 0) + 1);
      }, "pointerEvents:fired": function(t, e) {
        var n = t.interaction, r = t.pointerEvent, i = t.eventTarget, o = t.targets;
        if (r.type === "hold" && o.length) {
          var a = o[0].eventable.options.holdRepeatInterval;
          a <= 0 || (n.holdIntervalHandle = setTimeout(function() {
            e.pointerEvents.fire({ interaction: n, eventTarget: i, type: "hold", pointer: r, event: r }, e);
          }, a));
        }
      } }) }, co = lo, uo = { id: "pointer-events/interactableTargets", install: function(t) {
        var e = t.Interactable;
        e.prototype.pointerEvents = function(r) {
          return C(this.events.options, r), this;
        };
        var n = e.prototype._backCompatOption;
        e.prototype._backCompatOption = function(r, i) {
          var o = n.call(this, r, i);
          return o === this && (this.events.options[r] = i), o;
        };
      }, listeners: { "pointerEvents:collect-targets": function(t, e) {
        var n = t.targets, r = t.node, i = t.type, o = t.eventTarget;
        e.interactables.forEachMatch(r, function(a) {
          var l = a.events, u = l.options;
          l.types[i] && l.types[i].length && a.testIgnoreAllow(u, r, o) && n.push({ node: r, eventable: l, props: { interactable: a } });
        });
      }, "interactable:new": function(t) {
        var e = t.interactable;
        e.events.getRect = function(n) {
          return e.getRect(n);
        };
      }, "interactable:set": function(t, e) {
        var n = t.interactable, r = t.options;
        C(n.events.options, e.pointerEvents.defaults), C(n.events.options, r.pointerEvents || {});
      } } }, fo = uo, po = { id: "pointer-events", install: function(t) {
        t.usePlugin(ao), t.usePlugin(co), t.usePlugin(fo);
      } }, ho = po, go = { id: "reflow", install: function(t) {
        var e = t.Interactable;
        t.actions.phases.reflow = !0, e.prototype.reflow = function(n) {
          return function(r, i, o) {
            for (var a = r.getAllElements(), l = o.window.Promise, u = l ? [] : null, g = function() {
              var m = a[f], x = r.getRect(m);
              if (!x) return 1;
              var T, z = Ue(o.interactions.list, function(P) {
                return P.interacting() && P.interactable === r && P.element === m && P.prepared.name === i.name;
              });
              if (z) z.move(), u && (T = z._reflowPromise || new l(function(P) {
                z._reflowResolve = P;
              }));
              else {
                var _ = M(x), O = /* @__PURE__ */ function(P) {
                  return { coords: P, get page() {
                    return this.coords.page;
                  }, get client() {
                    return this.coords.client;
                  }, get timeStamp() {
                    return this.coords.timeStamp;
                  }, get pageX() {
                    return this.coords.page.x;
                  }, get pageY() {
                    return this.coords.page.y;
                  }, get clientX() {
                    return this.coords.client.x;
                  }, get clientY() {
                    return this.coords.client.y;
                  }, get pointerId() {
                    return this.coords.pointerId;
                  }, get target() {
                    return this.coords.target;
                  }, get type() {
                    return this.coords.type;
                  }, get pointerType() {
                    return this.coords.pointerType;
                  }, get buttons() {
                    return this.coords.buttons;
                  }, preventDefault: function() {
                  } };
                }({ page: { x: _.x, y: _.y }, client: { x: _.x, y: _.y }, timeStamp: o.now() });
                T = function(P, I, G, ne, q) {
                  var U = P.interactions.new({ pointerType: "reflow" }), He = { interaction: U, event: q, pointer: q, eventTarget: G, phase: "reflow" };
                  U.interactable = I, U.element = G, U.prevEvent = q, U.updatePointer(q, q, G, !0), Je(U.coords.delta), gn(U.prepared, ne), U._doPhase(He);
                  var me = P.window, Ye = me.Promise, Qe = Ye ? new Ye(function(lt) {
                    U._reflowResolve = lt;
                  }) : void 0;
                  return U._reflowPromise = Qe, U.start(ne, I, G), U._interacting ? (U.move(He), U.end(q)) : (U.stop(), U._reflowResolve()), U.removePointer(q, q), Qe;
                }(o, r, m, i, O);
              }
              u && u.push(T);
            }, f = 0; f < a.length && !g(); f++) ;
            return u && l.all(u).then(function() {
              return r;
            });
          }(this, n, t);
        };
      }, listeners: { "interactions:stop": function(t, e) {
        var n = t.interaction;
        n.pointerType === "reflow" && (n._reflowResolve && n._reflowResolve(), function(r, i) {
          r.splice(r.indexOf(i), 1);
        }(e.interactions.list, n));
      } } }, vo = go;
      if (Le.use(Vn), Le.use(Qn), Le.use(ho), Le.use(Oi), Le.use(oo), Le.use(xi), Le.use(ci), Le.use(fi), Le.use(vo), Le.default = Le, y(s) === "object" && s) try {
        s.exports = Le;
      } catch {
      }
      return Le.default = Le, Le;
    });
  }(Xt, Xt.exports)), Xt.exports;
}
var ta = /* @__PURE__ */ ea();
const Cn = /* @__PURE__ */ Zo(ta), Tr = /* @__PURE__ */ In({
  __name: "grid-item",
  props: {
    isDraggable: { type: Boolean, default: void 0 },
    isResizable: { type: Boolean, default: void 0 },
    isBounded: { type: Boolean, default: void 0 },
    static: { type: Boolean, default: !1 },
    minH: { default: 1 },
    minW: { default: 1 },
    maxH: { default: 1 / 0 },
    maxW: { default: 1 / 0 },
    x: {},
    y: {},
    w: {},
    h: {},
    i: {},
    dragIgnoreFrom: { default: "a, button" },
    dragAllowFrom: { default: void 0 },
    resizeIgnoreFrom: { default: "a, button" },
    preserveAspectRatio: { type: Boolean, default: !1 },
    dragOption: { default: () => ({}) },
    resizeOption: { default: () => ({}) }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved"],
  setup(s, { expose: d, emit: p }) {
    const c = s, y = p, v = gr(Yr), k = gr(Vr);
    if (!v)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const w = mo(null), h = Ut({
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: void 0,
      resizable: void 0,
      bounded: void 0,
      transformScale: 1,
      useCssTransforms: !0,
      useStyleCursor: !0,
      isDragging: !1,
      dragging: {
        top: -1,
        left: -1
      },
      isResizing: !1,
      resizing: {
        width: -1,
        height: -1
      },
      style: {},
      rtl: !1,
      // 新增：当前正在被缩放的边，用于视觉高亮
      activeResizeEdges: {
        top: !1,
        right: !1,
        bottom: !1,
        left: !1
      },
      // 新增：有效的可缩放边（根据最终 resize 配置计算）
      enabledResizeEdges: {
        top: !1,
        right: !1,
        bottom: !1,
        left: !1
      }
    });
    let E = !1, ie = !1, X = NaN, ye = NaN, oe = NaN, be = NaN, Oe = -1, Me = -1, Ee = -1, he = -1, $ = c.x, L = c.y, Y = c.w, Q = c.h;
    const b = Ke(), _e = Ut({
      i: yo(c, "i"),
      state: h,
      wrapper: b,
      calcXY: M
    });
    function D(S) {
      Ie(S);
    }
    function Z() {
      We();
    }
    function R(S) {
      Ve(c.isDraggable) && (h.draggable = S);
    }
    function H(S) {
      Ve(c.isResizable) && (h.resizable = S);
    }
    function ee(S) {
      Ve(c.isBounded) && (h.bounded = S);
    }
    function se(S) {
      h.transformScale = S;
    }
    function ce(S) {
      h.rowHeight = S;
    }
    function ue(S) {
      h.maxRows = S;
    }
    function V() {
      h.rtl = Sr() === "rtl", We();
    }
    function Re(S) {
      h.cols = Math.floor(S);
    }
    v.increaseItem(_e), jr(() => {
      h.rtl = Sr() === "rtl";
    }), Bn(() => {
      v.responsive && v.lastBreakpoint ? h.cols = Zr(v.lastBreakpoint, v.cols) : h.cols = v.colNum, h.rowHeight = v.rowHeight, h.containerWidth = v.width !== null ? v.width : 100, h.margin = v.margin !== void 0 ? v.margin.map(Number) : [10, 10], h.maxRows = v.maxRows, Ve(c.isDraggable) ? h.draggable = v.isDraggable : h.draggable = c.isDraggable, Ve(c.isResizable) ? h.resizable = v.isResizable : h.resizable = c.isResizable, Ve(c.isBounded) ? h.bounded = v.isBounded : h.bounded = c.isBounded, h.transformScale = v.transformScale, h.useCssTransforms = v.useCssTransforms, h.useStyleCursor = v.useStyleCursor, bo(() => {
        $ = c.x, L = c.y, Q = c.h, Y = c.w, je(re);
      }), k.on("updateWidth", D), k.on("compact", Z), k.on("setDraggable", R), k.on("setResizable", H), k.on("setBounded", ee), k.on("setTransformScale", se), k.on("setRowHeight", ce), k.on("setMaxRows", ue), k.on("directionchange", V), k.on("setColNum", Re);
    }), $r(() => {
      k.off("updateWidth", D), k.off("compact", Z), k.off("setDraggable", R), k.off("setResizable", H), k.off("setBounded", ee), k.off("setTransformScale", se), k.off("setRowHeight", ce), k.off("setMaxRows", ue), k.off("directionchange", V), k.off("setColNum", Re), w.value && (w.value.unset(), w.value = null), v.decreaseItem(_e);
    }), d({ state: h, wrapper: b });
    const Pe = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, fe = et(() => h.resizable && !c.static), pe = et(() => v.isMirrored ? !h.rtl : h.rtl), A = et(() => (h.draggable || h.resizable) && !c.static), B = Xo("item"), ve = et(() => ({
      [B.b()]: !0,
      [B.bm("resizable")]: fe.value,
      // 可缩放
      [B.bm("static")]: c.static,
      // 静态锁定
      [B.bm("resizing")]: h.isResizing,
      // 缩放中
      [B.bm("dragging")]: h.isDragging,
      // 拖拽中
      [B.bm("transform")]: h.useCssTransforms,
      // 使用 transform 布局模式
      [B.bm("rtl")]: pe.value,
      // RTL 渲染修饰
      [B.bm("no-touch")]: Pe && A.value
      // Android 下禁用触摸样式修饰
    })), de = et(() => [B.be("resizer"), pe.value && B.bem("resizer", "rtl")].filter(Boolean)), j = et(() => {
      const S = c.resizeOption;
      return !(!S || !S.edges);
    }), K = et(() => fe.value && !j.value);
    ge(
      () => c.isDraggable,
      (S) => {
        h.draggable = S;
      }
    ), ge(
      () => c.static,
      () => {
        je(Je), je(Ae);
      }
    ), ge(
      () => h.draggable,
      () => {
        je(Je);
      }
    ), ge(
      () => c.isResizable,
      (S) => {
        h.resizable = S;
      }
    ), ge(
      () => c.isBounded,
      (S) => {
        h.bounded = S;
      }
    ), ge(
      () => h.resizable,
      () => {
        je(Ae);
      }
    ), ge(
      () => h.rowHeight,
      () => {
        je(re), je(C);
      }
    ), ge([() => h.cols, () => h.containerWidth], () => {
      je(Ae), je(re), je(C);
    }), ge([() => c.minH, () => c.maxH, () => c.minW, () => c.maxW], () => {
      je(Ae);
    }), ge(pe, () => {
      je(Ae), je(re);
    }), ge([() => v.margin, () => v.margin[0], () => v.margin[1]], () => {
      const S = v.margin;
      !S || S[0] === h.margin[0] && S[1] === h.margin[1] || (h.margin = S.map(Number), je(re), je(C));
    });
    function re() {
      c.x + c.w > h.cols ? ($ = 0, Y = c.w > h.cols ? h.cols : c.w) : ($ = c.x, Y = c.w);
      const S = xe($, L, Y, Q);
      h.isDragging && (S.top = h.dragging.top, pe.value ? S.right = h.dragging.left : S.left = h.dragging.left), h.isResizing && (S.width = h.resizing.width, S.height = h.resizing.height);
      let W;
      h.useCssTransforms ? pe.value ? W = $o(S.top, S.right, S.width, S.height) : W = jo(S.top, S.left, S.width, S.height) : pe.value ? W = qo(S.top, S.right, S.width, S.height) : W = Wo(S.top, S.left, S.width, S.height), h.style = W;
    }
    function C() {
      const S = {};
      for (const W of ["width", "height"]) {
        const te = h.style[W].match(/^(\d+)px$/);
        if (!te)
          return;
        S[W] = te[1];
      }
      y("container-resized", c.i, c.h, c.w, S.height, S.width);
    }
    function xt(S) {
      if (c.static) return;
      const W = S.type;
      if (W === "resizestart" && h.isResizing || W !== "resizestart" && !h.isResizing)
        return;
      const ae = wr(S);
      if (Ve(ae)) return;
      const { x: te, y: le } = ae, J = { width: 0, height: 0 };
      let F;
      switch (S.edges && (h.activeResizeEdges.top = !!S.edges.top, h.activeResizeEdges.right = !!S.edges.right, h.activeResizeEdges.bottom = !!S.edges.bottom, h.activeResizeEdges.left = !!S.edges.left), W) {
        case "resizestart": {
          Ae(), Oe = Y, Me = Q, F = xe($, L, Y, Q), J.width = F.width, J.height = F.height, h.resizing = J, h.isResizing = !0;
          break;
        }
        case "resizemove": {
          !S.edges.right && !S.edges.left && (oe = te), !S.edges.top && !S.edges.bottom && (be = le);
          const Se = Er(oe, be, te, le);
          pe.value ? J.width = h.resizing.width - Se.deltaX / h.transformScale : J.width = h.resizing.width + Se.deltaX / h.transformScale, J.height = h.resizing.height + Se.deltaY / h.transformScale, h.resizing = J;
          break;
        }
        case "resizeend": {
          F = xe($, L, Y, Q), J.width = F.width, J.height = F.height, h.resizing = { width: -1, height: -1 }, h.isResizing = !1, h.activeResizeEdges.top = !1, h.activeResizeEdges.right = !1, h.activeResizeEdges.bottom = !1, h.activeResizeEdges.left = !1;
          break;
        }
      }
      F = Ce(J.height, J.width), F.w < c.minW && (F.w = c.minW), F.w > c.maxW && (F.w = c.maxW), F.h < c.minH && (F.h = c.minH), F.h > c.maxH && (F.h = c.maxH), F.h < 1 && (F.h = 1), F.w < 1 && (F.w = 1), oe = te, be = le, (Y !== F.w || Q !== F.h) && y("resize", c.i, F.h, F.w, J.height, J.width), S.type === "resizeend" && (Oe !== Y || Me !== Q) && y("resized", c.i, F.h, F.w, J.height, J.width), k.emit("resizeEvent", S.type, c.i, $, L, F.h, F.w);
    }
    function tt(S) {
      if (c.static || h.isResizing) return;
      const W = S.type;
      if (W === "dragstart" && h.isDragging || W !== "dragstart" && !h.isDragging)
        return;
      const ae = wr(S);
      if (Ve(ae)) return;
      const { x: te, y: le } = ae, J = S.target;
      if (!J.offsetParent) return;
      const F = { top: 0, left: 0 };
      switch (W) {
        case "dragstart": {
          Ee = $, he = L;
          const De = J.offsetParent.getBoundingClientRect(), Fe = J.getBoundingClientRect(), Ne = Fe.left / h.transformScale, Ze = De.left / h.transformScale, ot = Fe.right / h.transformScale, Ge = De.right / h.transformScale, Ue = Fe.top / h.transformScale, Xe = De.top / h.transformScale;
          pe.value ? F.left = (ot - Ge) * -1 : F.left = Ne - Ze, F.top = Ue - Xe, h.dragging = F, h.isDragging = !0;
          break;
        }
        case "dragmove": {
          const De = Er(X, ye, te, le);
          if (pe.value ? F.left = h.dragging.left - De.deltaX / h.transformScale : F.left = h.dragging.left + De.deltaX / h.transformScale, F.top = h.dragging.top + De.deltaY / h.transformScale, h.bounded) {
            const Fe = J.offsetParent.clientHeight - ke(c.h, h.rowHeight, h.margin[1]);
            F.top = we(F.top, 0, Fe);
            const Ne = Te(), Ze = h.containerWidth - ke(c.w, Ne, h.margin[0]);
            F.left = we(F.left, 0, Ze);
          }
          h.dragging = F;
          break;
        }
        case "dragend": {
          const De = J.offsetParent.getBoundingClientRect(), Fe = J.getBoundingClientRect(), Ne = Fe.left / h.transformScale, Ze = De.left / h.transformScale, ot = Fe.right / h.transformScale, Ge = De.right / h.transformScale, Ue = Fe.top / h.transformScale, Xe = De.top / h.transformScale;
          pe.value ? F.left = (ot - Ge) * -1 : F.left = Ne - Ze, F.top = Ue - Xe, h.dragging = { top: -1, left: -1 }, h.isDragging = !1;
          break;
        }
      }
      let Se;
      pe.value, Se = M(F.top, F.left), X = te, ye = le, ($ !== Se.x || L !== Se.y) && y("move", c.i, Se.x, Se.y), S.type === "dragend" && (Ee !== $ || he !== L) && y("moved", c.i, Se.x, Se.y), k.emit("dragEvent", S.type, c.i, Se.x, Se.y, Q, Y);
    }
    function xe(S, W, ae, te) {
      const le = Te();
      let J;
      return pe.value ? J = {
        right: Math.round(le * S + (S + 1) * h.margin[0]),
        top: Math.round(h.rowHeight * W + (W + 1) * h.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: ae === 1 / 0 ? ae : Math.round(le * ae + Math.max(0, ae - 1) * h.margin[0]),
        height: te === 1 / 0 ? te : Math.round(h.rowHeight * te + Math.max(0, te - 1) * h.margin[1])
      } : J = {
        left: Math.round(le * S + (S + 1) * h.margin[0]),
        top: Math.round(h.rowHeight * W + (W + 1) * h.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: ae === 1 / 0 ? ae : Math.round(le * ae + Math.max(0, ae - 1) * h.margin[0]),
        height: te === 1 / 0 ? te : Math.round(h.rowHeight * te + Math.max(0, te - 1) * h.margin[1])
      }, J;
    }
    function M(S, W) {
      const ae = Te();
      let te = Math.round((W - h.margin[0]) / (ae + h.margin[0])), le = Math.round((S - h.margin[1]) / (h.rowHeight + h.margin[1]));
      return te = Math.max(Math.min(te, h.cols - Y), 0), le = Math.max(Math.min(le, h.maxRows - Q), 0), { x: te, y: le };
    }
    function Te() {
      return (h.containerWidth - h.margin[0] * (h.cols + 1)) / h.cols;
    }
    function ke(S, W, ae) {
      return Number.isFinite(S) ? Math.round(W * S + Math.max(0, S - 1) * ae) : S;
    }
    function we(S, W, ae) {
      return Math.max(Math.min(S, ae), W);
    }
    function Ce(S, W, ae = !1) {
      const te = Te();
      let le = Math.round((W + h.margin[0]) / (te + h.margin[0])), J = 0;
      return ae ? J = Math.ceil((S + h.margin[1]) / (h.rowHeight + h.margin[1])) : J = Math.round((S + h.margin[1]) / (h.rowHeight + h.margin[1])), le = Math.max(Math.min(le, h.cols - $), 0), J = Math.max(Math.min(J, h.maxRows - L), 0), { w: le, h: J };
    }
    function Ie(S, W) {
      h.containerWidth = S;
    }
    function We() {
      re();
    }
    function qe() {
      !w.value && b.value && (w.value = Cn(b.value), h.useStyleCursor || w.value.styleCursor(!1));
    }
    const Be = Mt(tt);
    function Je() {
      if (qe(), !!w.value)
        if (h.draggable && !c.static) {
          const S = {
            ignoreFrom: c.dragIgnoreFrom,
            allowFrom: c.dragAllowFrom,
            ...c.dragOption
          };
          w.value.draggable(S), E || (E = !0, w.value.on("dragstart dragmove dragend", (W) => {
            W.type === "dragmove" ? Be(W) : tt(W);
          }));
        } else
          w.value.draggable({ enabled: !1 });
    }
    const it = Mt(xt);
    function Ae() {
      if (qe(), !!w.value)
        if (h.resizable && !c.static) {
          const S = xe(0, 0, c.maxW, c.maxH), W = xe(0, 0, c.minW, c.minH), ae = {
            edges: {
              left: pe.value ? `.${de.value[0]}` : !1,
              right: pe.value ? !1 : `.${de.value[0]}`,
              bottom: `.${de.value[0]}`,
              top: !1
            },
            ignoreFrom: c.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: W.height * h.transformScale,
                width: W.width * h.transformScale
              },
              max: {
                height: S.height * h.transformScale,
                width: S.width * h.transformScale
              }
            },
            ...c.resizeOption
          };
          c.preserveAspectRatio && (ae.modifiers = [Cn.modifiers.aspectRatio({ ratio: "preserve" })]), w.value.resizable(ae);
          const te = ae.edges || {};
          h.enabledResizeEdges.top = !!te.top, h.enabledResizeEdges.right = !!te.right, h.enabledResizeEdges.bottom = !!te.bottom, h.enabledResizeEdges.left = !!te.left, ie || (ie = !0, w.value.on("resizestart resizemove resizeend", (le) => {
            le.type === "resizemove" ? it(le) : xt(le);
          }));
        } else
          w.value.resizable({ enabled: !1 }), h.enabledResizeEdges.top = !1, h.enabledResizeEdges.right = !1, h.enabledResizeEdges.bottom = !1, h.enabledResizeEdges.left = !1;
    }
    return (S, W) => (rt(), ct("section", {
      ref_key: "wrapper",
      ref: b,
      class: kt(ve.value),
      style: Wr(h.style)
    }, [
      pn(S.$slots, "default"),
      K.value ? (rt(), ct("span", {
        key: 0,
        class: kt(de.value)
      }, null, 2)) : Nt("", !0),
      fe.value ? (rt(), ct("div", {
        key: 1,
        class: kt([
          "vgl-item__edge vgl-item__edge--top",
          [{ "is-enabled": h.enabledResizeEdges.top, "is-active": h.activeResizeEdges.top }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Nt("", !0),
      fe.value ? (rt(), ct("div", {
        key: 2,
        class: kt([
          "vgl-item__edge vgl-item__edge--right",
          [{ "is-enabled": h.enabledResizeEdges.right, "is-active": h.activeResizeEdges.right }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Nt("", !0),
      fe.value ? (rt(), ct("div", {
        key: 3,
        class: kt([
          "vgl-item__edge vgl-item__edge--bottom",
          [{ "is-enabled": h.enabledResizeEdges.bottom, "is-active": h.activeResizeEdges.bottom }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Nt("", !0),
      fe.value ? (rt(), ct("div", {
        key: 4,
        class: kt([
          "vgl-item__edge vgl-item__edge--left",
          [{ "is-enabled": h.enabledResizeEdges.left, "is-active": h.activeResizeEdges.left }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Nt("", !0)
    ], 6));
  }
}), bt = typeof window < "u";
var kr;
bt && (kr = window == null ? void 0 : window.navigator) != null && kr.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function _r(s) {
  return s != null;
}
const na = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(na)));
const ra = bt && ("ontouchstart" in window || oa() > 0), ia = ra ? "pointerdown" : "click";
function oa() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function aa(s, d, p = window.Event) {
  const { type: c, bubbles: y = !1, cancelable: v = !1, ...k } = d;
  if (!_r(c) || c === "") return !1;
  let w;
  return _r(p) ? w = new p(c, { bubbles: y, cancelable: v }) : (w = document.createEvent("HTMLEvents"), w.initEvent(c, y, v)), Object.assign(w, k), s.dispatchEvent(w);
}
const sa = "clickoutside", la = /* @__PURE__ */ new Set();
bt && document.addEventListener(
  ia,
  (s) => {
    const d = s.target, p = s.composedPath && s.composedPath();
    la.forEach((c) => {
      c !== d && (p ? !p.includes(c) : !c.contains(d)) && (!c.__transferElement || c.__transferElement !== d && !c.__transferElement.contains(d)) && aa(c, { type: sa });
    });
  },
  !0
);
const ca = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  // New WebKit
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  // Old WebKit
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
let fn;
if (bt) {
  for (const s of ca)
    if (s[1] in document) {
      fn = s;
      break;
    }
}
et(() => !1);
const ua = /* @__PURE__ */ new Set(), fa = /* @__PURE__ */ new WeakMap();
if (bt && fn) {
  const s = fn[2], d = fn[4];
  document.addEventListener(
    d,
    () => {
      if (ua.forEach((p) => {
        p.value = !1;
      }), document[s]) {
        const p = fa.get(document[s]);
        p && (p.value = !0);
      }
    },
    !1
  );
}
const ei = /* @__PURE__ */ new Map();
ei.set("x", 0);
ei.set("y", 0);
var mt = [], da = function() {
  return mt.some(function(s) {
    return s.activeTargets.length > 0;
  });
}, pa = function() {
  return mt.some(function(s) {
    return s.skippedTargets.length > 0;
  });
}, Rr = "ResizeObserver loop completed with undelivered notifications.", ha = function() {
  var s;
  typeof ErrorEvent == "function" ? s = new ErrorEvent("error", {
    message: Rr
  }) : (s = document.createEvent("Event"), s.initEvent("error", !1, !1), s.message = Rr), window.dispatchEvent(s);
}, Kt;
(function(s) {
  s.BORDER_BOX = "border-box", s.CONTENT_BOX = "content-box", s.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Kt || (Kt = {}));
var yt = function(s) {
  return Object.freeze(s);
}, ga = /* @__PURE__ */ function() {
  function s(d, p) {
    this.inlineSize = d, this.blockSize = p, yt(this);
  }
  return s;
}(), ti = function() {
  function s(d, p, c, y) {
    return this.x = d, this.y = p, this.width = c, this.height = y, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, yt(this);
  }
  return s.prototype.toJSON = function() {
    var d = this, p = d.x, c = d.y, y = d.top, v = d.right, k = d.bottom, w = d.left, h = d.width, E = d.height;
    return { x: p, y: c, top: y, right: v, bottom: k, left: w, width: h, height: E };
  }, s.fromRect = function(d) {
    return new s(d.x, d.y, d.width, d.height);
  }, s;
}(), Fn = function(s) {
  return s instanceof SVGElement && "getBBox" in s;
}, ni = function(s) {
  if (Fn(s)) {
    var d = s.getBBox(), p = d.width, c = d.height;
    return !p && !c;
  }
  var y = s, v = y.offsetWidth, k = y.offsetHeight;
  return !(v || k || s.getClientRects().length);
}, Pr = function(s) {
  var d;
  if (s instanceof Element)
    return !0;
  var p = (d = s == null ? void 0 : s.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView;
  return !!(p && s instanceof p.Element);
}, va = function(s) {
  switch (s.tagName) {
    case "INPUT":
      if (s.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, Gt = typeof window < "u" ? window : {}, ln = /* @__PURE__ */ new WeakMap(), Mr = /auto|scroll/, ma = /^tb|vertical/, ya = /msie|trident/i.test(Gt.navigator && Gt.navigator.userAgent), nt = function(s) {
  return parseFloat(s || "0");
}, Dt = function(s, d, p) {
  return s === void 0 && (s = 0), d === void 0 && (d = 0), p === void 0 && (p = !1), new ga((p ? d : s) || 0, (p ? s : d) || 0);
}, Dr = yt({
  devicePixelContentBoxSize: Dt(),
  borderBoxSize: Dt(),
  contentBoxSize: Dt(),
  contentRect: new ti(0, 0, 0, 0)
}), ri = function(s, d) {
  if (d === void 0 && (d = !1), ln.has(s) && !d)
    return ln.get(s);
  if (ni(s))
    return ln.set(s, Dr), Dr;
  var p = getComputedStyle(s), c = Fn(s) && s.ownerSVGElement && s.getBBox(), y = !ya && p.boxSizing === "border-box", v = ma.test(p.writingMode || ""), k = !c && Mr.test(p.overflowY || ""), w = !c && Mr.test(p.overflowX || ""), h = c ? 0 : nt(p.paddingTop), E = c ? 0 : nt(p.paddingRight), ie = c ? 0 : nt(p.paddingBottom), X = c ? 0 : nt(p.paddingLeft), ye = c ? 0 : nt(p.borderTopWidth), oe = c ? 0 : nt(p.borderRightWidth), be = c ? 0 : nt(p.borderBottomWidth), Oe = c ? 0 : nt(p.borderLeftWidth), Me = X + E, Ee = h + ie, he = Oe + oe, $ = ye + be, L = w ? s.offsetHeight - $ - s.clientHeight : 0, Y = k ? s.offsetWidth - he - s.clientWidth : 0, Q = y ? Me + he : 0, b = y ? Ee + $ : 0, _e = c ? c.width : nt(p.width) - Q - Y, D = c ? c.height : nt(p.height) - b - L, Z = _e + Me + Y + he, R = D + Ee + L + $, H = yt({
    devicePixelContentBoxSize: Dt(Math.round(_e * devicePixelRatio), Math.round(D * devicePixelRatio), v),
    borderBoxSize: Dt(Z, R, v),
    contentBoxSize: Dt(_e, D, v),
    contentRect: new ti(X, h, _e, D)
  });
  return ln.set(s, H), H;
}, ii = function(s, d, p) {
  var c = ri(s, p), y = c.borderBoxSize, v = c.contentBoxSize, k = c.devicePixelContentBoxSize;
  switch (d) {
    case Kt.DEVICE_PIXEL_CONTENT_BOX:
      return k;
    case Kt.BORDER_BOX:
      return y;
    default:
      return v;
  }
}, ba = /* @__PURE__ */ function() {
  function s(d) {
    var p = ri(d);
    this.target = d, this.contentRect = p.contentRect, this.borderBoxSize = yt([p.borderBoxSize]), this.contentBoxSize = yt([p.contentBoxSize]), this.devicePixelContentBoxSize = yt([p.devicePixelContentBoxSize]);
  }
  return s;
}(), oi = function(s) {
  if (ni(s))
    return 1 / 0;
  for (var d = 0, p = s.parentNode; p; )
    d += 1, p = p.parentNode;
  return d;
}, xa = function() {
  var s = 1 / 0, d = [];
  mt.forEach(function(v) {
    if (v.activeTargets.length !== 0) {
      var k = [];
      v.activeTargets.forEach(function(w) {
        var h = new ba(w.target), E = oi(w.target);
        k.push(h), w.lastReportedSize = ii(w.target, w.observedBox), E < s && (s = E);
      }), d.push(function() {
        v.callback.call(v.observer, k, v.observer);
      }), v.activeTargets.splice(0, v.activeTargets.length);
    }
  });
  for (var p = 0, c = d; p < c.length; p++) {
    var y = c[p];
    y();
  }
  return s;
}, Or = function(s) {
  mt.forEach(function(d) {
    d.activeTargets.splice(0, d.activeTargets.length), d.skippedTargets.splice(0, d.skippedTargets.length), d.observationTargets.forEach(function(p) {
      p.isActive() && (oi(p.target) > s ? d.activeTargets.push(p) : d.skippedTargets.push(p));
    });
  });
}, wa = function() {
  var s = 0;
  for (Or(s); da(); )
    s = xa(), Or(s);
  return pa() && ha(), s > 0;
}, Rn, ai = [], Ea = function() {
  return ai.splice(0).forEach(function(s) {
    return s();
  });
}, Sa = function(s) {
  if (!Rn) {
    var d = 0, p = document.createTextNode(""), c = { characterData: !0 };
    new MutationObserver(function() {
      return Ea();
    }).observe(p, c), Rn = function() {
      p.textContent = "".concat(d ? d-- : d++);
    };
  }
  ai.push(s), Rn();
}, za = function(s) {
  Sa(function() {
    requestAnimationFrame(s);
  });
}, dn = 0, Ta = function() {
  return !!dn;
}, ka = 250, _a = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Cr = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Ar = function(s) {
  return s === void 0 && (s = 0), Date.now() + s;
}, Pn = !1, Ra = function() {
  function s() {
    var d = this;
    this.stopped = !0, this.listener = function() {
      return d.schedule();
    };
  }
  return s.prototype.run = function(d) {
    var p = this;
    if (d === void 0 && (d = ka), !Pn) {
      Pn = !0;
      var c = Ar(d);
      za(function() {
        var y = !1;
        try {
          y = wa();
        } finally {
          if (Pn = !1, d = c - Ar(), !Ta())
            return;
          y ? p.run(1e3) : d > 0 ? p.run(d) : p.start();
        }
      });
    }
  }, s.prototype.schedule = function() {
    this.stop(), this.run();
  }, s.prototype.observe = function() {
    var d = this, p = function() {
      return d.observer && d.observer.observe(document.body, _a);
    };
    document.body ? p() : Gt.addEventListener("DOMContentLoaded", p);
  }, s.prototype.start = function() {
    var d = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Cr.forEach(function(p) {
      return Gt.addEventListener(p, d.listener, !0);
    }));
  }, s.prototype.stop = function() {
    var d = this;
    this.stopped || (this.observer && this.observer.disconnect(), Cr.forEach(function(p) {
      return Gt.removeEventListener(p, d.listener, !0);
    }), this.stopped = !0);
  }, s;
}(), An = new Ra(), Ir = function(s) {
  !dn && s > 0 && An.start(), dn += s, !dn && An.stop();
}, Pa = function(s) {
  return !Fn(s) && !va(s) && getComputedStyle(s).display === "inline";
}, Ma = function() {
  function s(d, p) {
    this.target = d, this.observedBox = p || Kt.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return s.prototype.isActive = function() {
    var d = ii(this.target, this.observedBox, !0);
    return Pa(this.target) && (this.lastReportedSize = d), this.lastReportedSize.inlineSize !== d.inlineSize || this.lastReportedSize.blockSize !== d.blockSize;
  }, s;
}(), Da = /* @__PURE__ */ function() {
  function s(d, p) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = d, this.callback = p;
  }
  return s;
}(), cn = /* @__PURE__ */ new WeakMap(), Br = function(s, d) {
  for (var p = 0; p < s.length; p += 1)
    if (s[p].target === d)
      return p;
  return -1;
}, un = function() {
  function s() {
  }
  return s.connect = function(d, p) {
    var c = new Da(d, p);
    cn.set(d, c);
  }, s.observe = function(d, p, c) {
    var y = cn.get(d), v = y.observationTargets.length === 0;
    Br(y.observationTargets, p) < 0 && (v && mt.push(y), y.observationTargets.push(new Ma(p, c && c.box)), Ir(1), An.schedule());
  }, s.unobserve = function(d, p) {
    var c = cn.get(d), y = Br(c.observationTargets, p), v = c.observationTargets.length === 1;
    y >= 0 && (v && mt.splice(mt.indexOf(c), 1), c.observationTargets.splice(y, 1), Ir(-1));
  }, s.disconnect = function(d) {
    var p = this, c = cn.get(d);
    c.observationTargets.slice().forEach(function(y) {
      return p.unobserve(d, y.target);
    }), c.activeTargets.splice(0, c.activeTargets.length);
  }, s;
}(), Oa = function() {
  function s(d) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof d != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    un.connect(this, d);
  }
  return s.prototype.observe = function(d, p) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Pr(d))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    un.observe(this, d, p);
  }, s.prototype.unobserve = function(d) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Pr(d))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    un.unobserve(this, d);
  }, s.prototype.disconnect = function() {
    un.disconnect(this);
  }, s.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, s;
}();
const hn = /* @__PURE__ */ new WeakMap();
function Ca(s) {
  for (let d = 0, p = s.length; d < p; ++d) {
    const c = s[d], y = hn.get(c.target);
    typeof y == "function" && y(c);
  }
}
const si = new (bt && window.ResizeObserver || Oa)(
  Ca
);
function Aa(s, d) {
  hn.set(s, d), si.observe(s);
}
function Ia(s) {
  hn.has(s) && (si.unobserve(s), hn.delete(s));
}
function Ba() {
  return {
    observeResize: Aa,
    unobserveResize: Ia
  };
}
const Fa = Ke(!1);
et(() => Fa.value);
const Fr = "__theme_style__", Mn = "__theme_observer__", Lr = Ut(/* @__PURE__ */ new Map()), Hr = /* @__PURE__ */ new Map();
ge(Lr, () => {
  if (!bt) return;
  Hr.clear();
  const s = document.head.querySelector(`#${Fr}`);
  s && document.head.removeChild(s);
  const d = document.createElement("style");
  let p = `.${Mn} { width: 1px }`, c = 1;
  for (const [y, [v, k]] of Lr.entries())
    p += ` html.${v} .${Mn}, .${k} .${Mn} { width: ${++c}px }`, Hr.set(c, y);
  d.textContent = p, d.id = Fr, document.head.appendChild(d);
});
const Wa = /* @__PURE__ */ In({
  __name: "grid-layout",
  props: {
    autoSize: { type: Boolean, default: !0 },
    colNum: { default: 12 },
    rowHeight: { default: 150 },
    maxRows: { default: 1 / 0 },
    margin: { default: () => [10, 10] },
    isDraggable: { type: Boolean, default: !0 },
    isResizable: { type: Boolean, default: !0 },
    isMirrored: { type: Boolean, default: !1 },
    isBounded: { type: Boolean, default: !1 },
    useCssTransforms: { type: Boolean, default: !0 },
    verticalCompact: { type: Boolean, default: !0 },
    restoreOnDrag: { type: Boolean, default: !1 },
    layout: {},
    responsive: { type: Boolean, default: !1 },
    responsiveLayouts: { default: () => ({}) },
    transformScale: { default: 1 },
    breakpoints: { default: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }) },
    cols: { default: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }) },
    preventCollision: { type: Boolean, default: !1 },
    useStyleCursor: { type: Boolean, default: !0 }
  },
  emits: [
    "layout-before-mount",
    "layout-mounted",
    "layout-updated",
    "breakpoint-changed",
    "update:layout",
    "layout-ready"
  ],
  setup(s, { expose: d, emit: p }) {
    const c = s, y = p, v = Ut({
      /**
       * state：运行时状态记录，包含尺寸、占位、断点缓存与原始布局备份
       * width: 容器当前宽度（用于断点判断）
       * mergedStyle: 传递到根节点的样式对象（主要包含动态高度）
       * lastLayoutLength: 上次布局项数量用于监测增删
       * isDragging: 是否当前存在拖拽或缩放占位显示
       * placeholder: 拖拽/缩放过程中的可视占位项（不参与布局压缩）
       * layouts: 响应式断点对应的布局缓存集合
       * lastBreakpoint: 上一次生效的断点名称（用于比较是否切换）
       * originalLayout: 初始布局副本（响应式回退时需要）
       */
      width: -1,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: !1,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: ""
      },
      layouts: {},
      // array to store all layouts from different breakpoints
      lastBreakpoint: null,
      // store last active breakpoint
      originalLayout: null
      // store original Layout
    }), k = /* @__PURE__ */ new Map(), w = Ke(c.layout), h = Ke(), { observeResize: E, unobserveResize: ie } = Ba(), X = Co();
    X.on("resizeEvent", ye), X.on("dragEvent", oe), jr(() => {
      y("layout-before-mount", w.value);
    }), Bn(() => {
      y("layout-mounted", w.value), ht(() => {
        No(w.value), v.originalLayout = w.value, ht(() => {
          D(), h.value && E(h.value, Ao($, 16)), _t(w.value, c.verticalCompact), y("layout-updated", w.value), he(), $();
        });
      });
    }), $r(() => {
      X.clearAll(), h.value && ie(h.value);
    });
    function ye(R, H, ee, se, ce, ue) {
      b(R, H, ee, se, ce, ue);
    }
    function oe(R, H, ee, se, ce, ue) {
      Q(R, H, ee, se, ce, ue);
    }
    ge(
      () => v.width,
      (R, H) => {
        ht(() => {
          X.emit("updateWidth", R), H === -1 && ht(() => {
            y("layout-ready", w.value);
          }), he();
        });
      }
    ), ge(
      () => [c.layout, c.layout.length],
      () => {
        w.value = c.layout, Ee();
      }
    ), ge(
      () => c.colNum,
      (R) => {
        X.emit("setColNum", R);
      }
    ), ge(
      () => c.rowHeight,
      (R) => {
        X.emit("setRowHeight", R);
      }
    ), ge(
      () => c.isDraggable,
      (R) => {
        X.emit("setDraggable", R);
      }
    ), ge(
      () => c.isResizable,
      (R) => {
        X.emit("setResizable", R);
      }
    ), ge(
      () => c.isBounded,
      (R) => {
        X.emit("setBounded", R);
      }
    ), ge(
      () => c.transformScale,
      (R) => {
        X.emit("setTransformScale", R);
      }
    ), ge(
      () => c.responsive,
      (R) => {
        R || (y("update:layout", v.originalLayout), X.emit("setColNum", c.colNum)), $();
      }
    ), ge(
      () => c.maxRows,
      (R) => {
        X.emit("setMaxRows", R);
      }
    ), ge([() => c.margin, () => c.margin[1]], he), vr(
      Yr,
      Ut({
        ...mr(c),
        ...mr(v),
        increaseItem: be,
        decreaseItem: Oe
      })
    ), vr(Vr, X), d({ state: v, getItem: Me, resizeEvent: b, dragEvent: Q, layoutUpdate: Ee });
    function be(R) {
      k.set(R.i, R);
    }
    function Oe(R) {
      k.delete(R.i);
    }
    function Me(R) {
      return k.get(R);
    }
    function Ee() {
      if (!Ve(w.value) && !Ve(v.originalLayout)) {
        if (w.value.length !== v.originalLayout.length) {
          const R = Z(w.value, v.originalLayout);
          if (R.length > 0)
            if (w.value.length > v.originalLayout.length)
              v.originalLayout = v.originalLayout.concat(R);
            else {
              const H = new Set(R.map((ee) => ee.i));
              v.originalLayout = v.originalLayout.filter((ee) => !H.has(ee.i));
            }
          v.lastLayoutLength = w.value.length, D();
        }
        _t(w.value, c.verticalCompact), X.emit("updateWidth", v.width), he(), y("layout-updated", w.value);
      }
    }
    function he() {
      v.mergedStyle = {
        height: L()
      };
    }
    function $() {
      h.value && (v.width = h.value.offsetWidth), X.emit("resizeEvent");
    }
    function L() {
      if (!c.autoSize) return;
      const R = parseFloat(c.margin[1]);
      return Bo(w.value) * (c.rowHeight + R) + R + "px";
    }
    let Y;
    function Q(R, H, ee, se, ce, ue) {
      let V = br(w.value, H);
      Ve(V) && (V = { h: 0, w: 0, x: 0, y: 0, i: "" }), R === "dragstart" && !c.verticalCompact && (Y = w.value.reduce(
        (Re, { i: Pe, x: fe, y: pe }) => ({
          ...Re,
          [Pe]: { x: fe, y: pe }
        }),
        {}
      )), R === "dragmove" || R === "dragstart" ? (v.placeholder.i = H, v.placeholder.x = V.x, v.placeholder.y = V.y, v.placeholder.w = ue, v.placeholder.h = ce, ht(() => {
        v.isDragging = !0;
      }), X.emit("updateWidth", v.width)) : ht(() => {
        v.isDragging = !1;
      }), w.value = On(w.value, V, ee, se, !0, c.preventCollision), c.restoreOnDrag ? (V.static = !0, _t(w.value, c.verticalCompact, Y), V.static = !1) : _t(w.value, c.verticalCompact), X.emit("compact"), he(), R === "dragend" && (Y = void 0, y("layout-updated", w.value));
    }
    function b(R, H, ee, se, ce, ue) {
      let V = br(w.value, H);
      Ve(V) && (V = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let Re;
      if (c.preventCollision) {
        const Pe = Ur(w.value, { ...V, w: ue, h: ce }).filter(
          (fe) => fe.i !== V.i
        );
        if (Re = Pe.length > 0, Re) {
          let fe = 1 / 0, pe = 1 / 0;
          Pe.forEach((A) => {
            A.x > V.x && (fe = Math.min(fe, A.x)), A.y > V.y && (pe = Math.min(pe, A.y));
          }), Number.isFinite(fe) && (V.w = fe - V.x), Number.isFinite(pe) && (V.h = pe - V.y);
        }
      }
      Re || (V.w = ue, V.h = ce), R === "resizestart" || R === "resizemove" ? (v.placeholder.i = H, v.placeholder.x = ee, v.placeholder.y = se, v.placeholder.w = V.w, v.placeholder.h = V.h, ht(() => {
        v.isDragging = !0;
      }), X.emit("updateWidth", v.width)) : R && ht(() => {
        v.isDragging = !1;
      }), c.responsive && _e(), _t(w.value, c.verticalCompact), X.emit("compact"), he(), R === "resizeend" && y("layout-updated", w.value);
    }
    function _e() {
      const R = Go(c.breakpoints, v.width);
      if (R === v.lastBreakpoint)
        return;
      const H = Zr(R, c.cols);
      !Ve(v.lastBreakpoint) && !v.layouts[v.lastBreakpoint] && (v.layouts[v.lastBreakpoint] = Dn(w.value));
      const ee = Uo(
        v.originalLayout,
        v.layouts,
        c.breakpoints,
        R,
        v.lastBreakpoint,
        H,
        c.verticalCompact
      );
      v.layouts[R] = ee, v.lastBreakpoint !== R && y("breakpoint-changed", R, ee), w.value = ee, y("update:layout", ee), v.lastBreakpoint = R, X.emit("setColNum", H);
    }
    function D() {
      v.layouts = Object.assign({}, c.responsiveLayouts);
    }
    function Z(R, H) {
      const ee = new Set(H.map((V) => V.i)), se = new Set(R.map((V) => V.i)), ce = R.filter((V) => !ee.has(V.i)), ue = H.filter((V) => !se.has(V.i));
      return ce.concat(ue);
    }
    return (R, H) => (rt(), ct("div", {
      ref_key: "wrapper",
      ref: h,
      class: "vgl-layout",
      style: Wr(v.mergedStyle)
    }, [
      R.$slots.default ? pn(R.$slots, "default", { key: 0 }) : (rt(!0), ct(wo, { key: 1 }, Eo(w.value, (ee) => (rt(), So(Tr, zo({
        key: ee.i,
        ref_for: !0
      }, ee), {
        default: To(() => [
          pn(R.$slots, "item", { item: ee })
        ]),
        _: 2
      }, 1040))), 128)),
      xo(ko(Tr, {
        class: "vgl-item--placeholder",
        x: v.placeholder.x,
        y: v.placeholder.y,
        w: v.placeholder.w,
        h: v.placeholder.h,
        i: v.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [_o, v.isDragging]
      ])
    ], 4));
  }
}), Rt = (s) => typeof s == "string" && /(px|%|vw|vh|rem|em|calc\(|ch|ex)/i.test(s || "");
function $e(s, d, p = "width") {
  if (typeof s == "number") return s;
  if (typeof s != "string" || !s) return 0;
  const c = s.trim();
  if (/^[-+]?[0-9]*\.?[0-9]+$/.test(c) || /px$/i.test(c)) return parseFloat(c);
  if (/vh$/i.test(c)) {
    const y = parseFloat(c);
    return isNaN(y) ? 0 : window.innerHeight * y / 100;
  }
  if (/vw$/i.test(c)) {
    const y = parseFloat(c);
    return isNaN(y) ? 0 : window.innerWidth * y / 100;
  }
  if (/rem$/i.test(c)) {
    const y = parseFloat(c);
    return (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16) * y;
  }
  if (/em$/i.test(c)) {
    const y = parseFloat(c);
    return ((d instanceof HTMLElement ? parseFloat(getComputedStyle(d).fontSize) : parseFloat(getComputedStyle(document.documentElement).fontSize)) || 16) * y;
  }
  if (/%$/i.test(c)) {
    const y = parseFloat(c), v = d instanceof HTMLElement ? d.parentElement : null;
    if (!v || isNaN(y)) return 0;
    const k = v.getBoundingClientRect();
    return (p === "width" ? k.width : k.height) * y / 100;
  }
  return /calc\(/i.test(c) || /(ch|ex)$/i.test(c) || Rt(c) ? La(c, d, p) : 0;
}
function La(s, d, p) {
  const c = document.createElement("div");
  c.style.position = "absolute", c.style.visibility = "hidden", c.style.pointerEvents = "none", c.style.margin = "0", c.style.padding = "0", c.style.border = "0", c.style.boxSizing = "border-box", p === "width" ? c.style.width = s : c.style.height = s, (d instanceof HTMLElement && d.parentElement || document.body).appendChild(c);
  const v = parseFloat(getComputedStyle(c)[p]);
  return c.remove(), isNaN(v) ? 0 : v;
}
function Pt(s, d, p) {
  return typeof s == "number" ? s : Rt(s) ? $e(s, d, p === "x" ? "width" : "height") : parseFloat(s) || 0;
}
const Ha = 2;
function ja(s, d = {}, p) {
  const y = { ...{
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
  }, ...d }, { draggable: v, resizable: k, useCssTransforms: w, dragOptions: h, resizeOptions: E } = y, ie = (A, B) => s.getAttribute(`data-${A}`) || B, X = (A, B) => {
    s.setAttribute(`data-${A}`, B.toString());
  }, ye = s.getBoundingClientRect(), oe = y.width || ye.width || 0, be = y.height || ye.height || 0;
  X("x", y.x || 0), X("y", y.y || 0), X("width", oe.toString()), X("height", be.toString());
  const Oe = ie("x", "0"), Me = ie("y", "0"), Ee = ie("width", oe.toString()), he = ie("height", be.toString());
  let $ = Pt(Oe, s, "x"), L = Pt(Me, s, "y"), Y = $e(Ee, s, "width"), Q = $e(he, s, "height");
  const b = /* @__PURE__ */ new Map();
  let _e = !1;
  const D = (A) => {
    if (s instanceof HTMLElement) {
      const B = getComputedStyle(s);
      return (B.position === "absolute" || B.position === "fixed") && B[A] !== "auto" && B[A] !== "";
    }
    return !1;
  }, Z = () => D("right"), R = () => D("left"), H = () => D("top"), ee = () => D("bottom"), se = (A) => {
    ["top", "right", "bottom", "left"].forEach((B) => {
      const ve = b.get(B);
      ve && (ve.style.backgroundColor = A[B] ? "rgba(29, 98, 236, 1)" : "rgba(29, 98, 236, 0)");
    });
  }, ce = () => {
    b.forEach((A) => {
      A.style.backgroundColor = "rgba(29, 98, 236, 0)";
    });
  }, ue = () => {
    const A = (E == null ? void 0 : E.edges) || {}, B = (E == null ? void 0 : E.margin) ?? 4, ve = {
      position: "absolute",
      backgroundColor: "rgba(29, 98, 236, 0)",
      // 初始透明
      pointerEvents: "auto",
      // 设置为auto以支持hover效果
      transition: "background-color 0.1s ease"
    }, de = (j) => {
      const K = () => {
        j.style.backgroundColor = "rgba(29, 98, 236, 1)";
      }, re = () => {
        _e || (j.style.backgroundColor = "rgba(29, 98, 236, 0)");
      };
      j.addEventListener("mouseenter", K), j.addEventListener("mouseleave", re), j._mouseEnterListener = K, j._mouseLeaveListener = re;
    };
    if (A.top) {
      const j = document.createElement("div");
      Object.assign(j.style, ve, {
        top: `-${B}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), de(j), s.appendChild(j), b.set("top", j);
    }
    if (A.right) {
      const j = document.createElement("div");
      Object.assign(j.style, ve, {
        top: "0",
        right: `-${B}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), de(j), s.appendChild(j), b.set("right", j);
    }
    if (A.bottom) {
      const j = document.createElement("div");
      Object.assign(j.style, ve, {
        bottom: `-${B}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), de(j), s.appendChild(j), b.set("bottom", j);
    }
    if (A.left) {
      const j = document.createElement("div");
      Object.assign(j.style, ve, {
        top: "0",
        left: `-${B}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), de(j), s.appendChild(j), b.set("left", j);
    }
  }, V = (A) => {
    b.forEach((B) => {
      B.style.pointerEvents = "auto", B.style.display = "block";
    });
  }, Re = Cn(s).styleCursor(!1);
  if (v) {
    const A = (K) => {
      var re;
      k && E && Re.resizable(!1), (re = p == null ? void 0 : p.onDrag) == null || re.call(p, {
        type: "dragstart",
        top: L,
        left: $,
        deltaX: 0,
        deltaY: 0
      });
    }, B = (K) => {
      if ($ += K.dx, L += K.dy, K.target instanceof HTMLElement) {
        const re = getComputedStyle(K.target), C = re.position === "absolute" || re.position === "fixed";
        w && !C ? K.target.style.transform = `translate(${$}px, ${L}px)` : C ? (R() ? K.target.style.left = `${$}px` : Z() ? Z() && (K.target.style.right = `${-$}px`) : K.target.style.left = `${$}px`, H() ? K.target.style.top = `${L}px` : ee() ? ee() && (K.target.style.bottom = `${-L}px`) : K.target.style.top = `${L}px`) : K.target.style.transform = `translate(${$}px, ${L}px)`;
      }
      K.target._dataUpdateTimer || (K.target._dataUpdateTimer = setTimeout(() => {
        K.target instanceof Element && (K.target.setAttribute("data-x", $.toString()), K.target.setAttribute("data-y", L.toString())), delete K.target._dataUpdateTimer;
      }, 50)), p != null && p.onDrag && requestAnimationFrame(() => {
        var re;
        (re = p.onDrag) == null || re.call(p, {
          type: "dragmove",
          top: L,
          left: $,
          deltaX: K.dx,
          deltaY: K.dy
        });
      });
    }, ve = (K) => {
      var re;
      k && E && Re.resizable(!0), K.target instanceof Element && (K.target.setAttribute("data-x", $.toString()), K.target.setAttribute("data-y", L.toString())), (re = p == null ? void 0 : p.onDrag) == null || re.call(p, {
        type: "dragend",
        top: L,
        left: $,
        deltaX: K.dx,
        deltaY: K.dy
      });
    }, de = Mt(
      B,
      (h == null ? void 0 : h.threshold) ?? Ha
    ), j = {
      enabled: !0,
      allowFrom: h == null ? void 0 : h.allowFrom,
      ignoreFrom: h == null ? void 0 : h.ignoreFrom,
      modifiers: (h == null ? void 0 : h.modifiers) || [],
      listeners: {
        start: A,
        move: de,
        end: ve
      }
    };
    h != null && h.startAxis && (j.startAxis = h.startAxis), h != null && h.lockAxis && (j.lockAxis = h.lockAxis), (h == null ? void 0 : h.max) !== void 0 && (j.max = h.max), (h == null ? void 0 : h.maxPerElement) !== void 0 && (j.maxPerElement = h.maxPerElement), Re.draggable(j);
  }
  if (k && E) {
    ue();
    let A = 10, B = 10, ve = 1 / 0, de = 1 / 0, j = Y / Q;
    const K = (M) => {
      var ke, we, Ce, Ie;
      V(), _e = !0, v && h && Re.draggable(!1);
      const Te = {
        top: !!((ke = M.edges) != null && ke.top),
        right: !!((we = M.edges) != null && we.right),
        bottom: !!((Ce = M.edges) != null && Ce.bottom),
        left: !!((Ie = M.edges) != null && Ie.left)
      };
      se(Te), A = $e((E == null ? void 0 : E.minWidth) ?? 10, M.target, "width"), B = $e((E == null ? void 0 : E.minHeight) ?? 10, M.target, "height"), ve = $e((E == null ? void 0 : E.maxWidth) ?? 1 / 0, M.target, "width"), de = $e((E == null ? void 0 : E.maxHeight) ?? 1 / 0, M.target, "height"), j = Y / Q, p != null && p.onResize && requestAnimationFrame(() => {
        var We;
        (We = p.onResize) == null || We.call(p, {
          type: "resizestart",
          width: Y,
          height: Q,
          top: L,
          left: $,
          deltaWidth: 0,
          deltaHeight: 0,
          edges: Te
        });
      });
    }, re = (M) => {
      var W, ae, te, le, J, F, Se, De, Fe, Ne, Ze, ot, Ge, Ue, Xe, Ot, wt, Ct, Et, St, At, It, Jt, zt;
      const Te = Z(), ke = R(), we = H(), Ce = ee(), Ie = M.target instanceof HTMLElement ? getComputedStyle(M.target) : null, We = ((W = M.deltaRect) == null ? void 0 : W.width) || 0, qe = ((ae = M.deltaRect) == null ? void 0 : ae.height) || 0;
      let Be = We, Je = qe;
      E != null && E.preserveAspectRatio && !Te && !ke && !we && !Ce && ((te = M.edges) != null && te.left || (le = M.edges) != null && le.right ? Je = We / j : ((J = M.edges) != null && J.top || (F = M.edges) != null && F.bottom) && (Be = qe * j));
      let it = Y + Be, Ae = Q + Je;
      if (it = Math.max(A, Math.min(ve, it)), Ae = Math.max(B, Math.min(de, Ae)), Be = it - Y, Je = Ae - Q, Be === 0 && Je === 0)
        return;
      if ((Te || ke || we || Ce) && Ie) {
        const ze = M.target.getBoundingClientRect();
        (Math.abs(ze.width - Y) > 1 || Math.abs(ze.height - Q) > 1) && (Y = ze.width, Q = ze.height);
      }
      if (!Te && !ke && !we && !Ce && ((Se = M.edges) != null && Se.top && (L -= Je), (De = M.edges) != null && De.right, (Fe = M.edges) != null && Fe.bottom, (Ne = M.edges) != null && Ne.left && ($ -= Be)), Y = it, Q = Ae, ((Ze = M.edges) != null && Ze.left || (ot = M.edges) != null && ot.right) && (M.target.style.width = `${Y}px`), ((Ge = M.edges) != null && Ge.top || (Ue = M.edges) != null && Ue.bottom) && (M.target.style.height = `${Q}px`), (Xe = M.edges) != null && Xe.top && Ce) {
        const ze = (Ot = M.target.parentElement) == null ? void 0 : Ot.getBoundingClientRect();
        if (ze) {
          const Bt = parseInt(getComputedStyle(M.target).bottom || "0", 10), Ft = ze.height - Q - Bt;
          M.target.style.top = `${Ft}px`;
        }
      }
      if ((wt = M.edges) != null && wt.left && Te) {
        const ze = (Ct = M.target.parentElement) == null ? void 0 : Ct.getBoundingClientRect();
        if (ze) {
          const Bt = parseInt(getComputedStyle(M.target).right || "0", 10), Ft = ze.width - Y - Bt;
          M.target.style.left = `${Ft}px`;
        }
      }
      if ((Et = M.edges) != null && Et.right && ke) {
        const ze = parseInt(getComputedStyle(M.target).left || "0", 10);
        M.target.style.left = `${ze}px`;
      }
      if ((St = M.edges) != null && St.bottom && we) {
        const ze = parseInt(getComputedStyle(M.target).top || "0", 10);
        M.target.style.top = `${ze}px`;
      }
      !Te && !ke && !we && !Ce && w && (M.target.style.transform = `translate(${$}px, ${L}px)`);
      const S = {
        top: !!((At = M.edges) != null && At.top),
        right: !!((It = M.edges) != null && It.right),
        bottom: !!((Jt = M.edges) != null && Jt.bottom),
        left: !!((zt = M.edges) != null && zt.left)
      };
      p != null && p.onResize && requestAnimationFrame(() => {
        var ze;
        (ze = p.onResize) == null || ze.call(p, {
          type: "resizemove",
          width: Y,
          height: Q,
          top: L,
          left: $,
          deltaWidth: We,
          deltaHeight: qe,
          edges: S
        });
      });
    }, C = (M) => {
      var ke, we, Ce, Ie;
      _e = !1, v && h && Re.draggable(!0), ce(), M.target instanceof Element && (M.target.setAttribute("data-x", $.toString()), M.target.setAttribute("data-y", L.toString()), M.target.setAttribute("data-width", Y.toString()), M.target.setAttribute("data-height", Q.toString()));
      const Te = {
        top: !!((ke = M.edges) != null && ke.top),
        right: !!((we = M.edges) != null && we.right),
        bottom: !!((Ce = M.edges) != null && Ce.bottom),
        left: !!((Ie = M.edges) != null && Ie.left)
      };
      requestAnimationFrame(() => {
        var We, qe, Be;
        (Be = p == null ? void 0 : p.onResize) == null || Be.call(p, {
          type: "resizeend",
          width: Y,
          height: Q,
          top: L,
          left: $,
          deltaWidth: ((We = M.deltaRect) == null ? void 0 : We.width) || 0,
          deltaHeight: ((qe = M.deltaRect) == null ? void 0 : qe.height) || 0,
          edges: Te
        });
      });
    }, tt = re, xe = {
      enabled: !0,
      edges: (E == null ? void 0 : E.edges) || {},
      modifiers: (E == null ? void 0 : E.modifiers) || [],
      listeners: {
        start: K,
        move: tt,
        end: C
      }
    };
    (E == null ? void 0 : E.square) !== void 0 && (xe.square = E.square), (E == null ? void 0 : E.preserveAspectRatio) !== void 0 && (xe.preserveAspectRatio = E.preserveAspectRatio), E != null && E.invert && (xe.invert = E.invert), (E == null ? void 0 : E.margin) !== void 0 && (xe.margin = E.margin), (E == null ? void 0 : E.max) !== void 0 && (xe.max = E.max), (E == null ? void 0 : E.maxPerElement) !== void 0 && (xe.maxPerElement = E.maxPerElement), (E == null ? void 0 : E.minWidth) !== void 0 && (xe.minWidth = $e(E.minWidth, s, "width")), (E == null ? void 0 : E.minHeight) !== void 0 && (xe.minHeight = $e(E.minHeight, s, "height")), (E == null ? void 0 : E.maxWidth) !== void 0 && (xe.maxWidth = $e(E.maxWidth, s, "width")), (E == null ? void 0 : E.maxHeight) !== void 0 && (xe.maxHeight = $e(E.maxHeight, s, "height"));
    try {
      Re.resizable(xe);
    } catch (M) {
      console.error("Error setting up resizable:", M);
    }
  }
  if (s instanceof HTMLElement && (s.style.transition = "none", s.style.width = `${Y}px`, s.style.height = `${Q}px`), s instanceof HTMLElement) {
    const A = getComputedStyle(s), B = A.position === "absolute" || A.position === "fixed";
    w && !B ? s.style.transform = `translate(${$}px, ${L}px)` : B ? (!Z() && !R() && (s.style.left = `${$}px`), !H() && !ee() && (s.style.top = `${L}px`)) : s.style.transform = `translate(${$}px, ${L}px)`;
  }
  const Pe = (A, B) => {
    if ($ = Pt(A, s, "x"), L = Pt(B, s, "y"), s instanceof HTMLElement) {
      const ve = getComputedStyle(s), de = ve.position === "absolute" || ve.position === "fixed", j = (re) => {
        typeof re == "string" && Rt(re) && de ? s.style.left = re : s.style.left = `${$}px`;
      }, K = (re) => {
        typeof re == "string" && Rt(re) && de ? s.style.top = re : s.style.top = `${L}px`;
      };
      w && !de ? s.style.transform = `translate(${$}px, ${L}px)` : de ? (s.style.right = "", s.style.bottom = "", j(A), K(B)) : s.style.transform = `translate(${$}px, ${L}px)`;
    }
    s instanceof Element && (s.setAttribute("data-x", typeof A == "string" ? A : $.toString()), s.setAttribute("data-y", typeof B == "string" ? B : L.toString()));
  }, fe = (A, B) => {
    if (Y = typeof A == "number" ? A : $e(A, s, "width"), Q = typeof B == "number" ? B : $e(B, s, "height"), s instanceof HTMLElement) {
      const ve = (j) => {
        typeof j == "string" && Rt(j) ? s.style.width = j : s.style.width = `${Y}px`;
      }, de = (j) => {
        typeof j == "string" && Rt(j) ? s.style.height = j : s.style.height = `${Q}px`;
      };
      ve(A), de(B);
    }
    s instanceof Element && (s.setAttribute("data-width", typeof A == "string" ? A : Y.toString()), s.setAttribute("data-height", typeof B == "string" ? B : Q.toString()));
  };
  return {
    cleanup: () => {
      b.forEach((A) => {
        A._mouseEnterListener && A.removeEventListener("mouseenter", A._mouseEnterListener), A._mouseLeaveListener && A.removeEventListener("mouseleave", A._mouseLeaveListener), A.remove();
      });
      try {
        Re.unset();
      } catch (A) {
        console.error("Error unsetting interactable:", A);
      }
    },
    updatePositionAndSize: (A, B, ve, de) => {
      Pe(A, B), fe(ve, de);
    },
    updatePosition: Pe,
    updateSize: fe
  };
}
const qa = /* @__PURE__ */ In({
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
  setup(s, { expose: d, emit: p }) {
    const c = s, y = p, v = Ke(), k = Ke(typeof c.initialX == "number" ? c.initialX : 0), w = Ke(typeof c.initialY == "number" ? c.initialY : 0), h = Ke(typeof c.initialWidth == "number" ? c.initialWidth : 200), E = Ke(typeof c.initialHeight == "number" ? c.initialHeight : 150), ie = Ke(!1), X = Ke(!1), ye = Ke({});
    let oe = null, be = null, Oe = null, Me = null;
    const Ee = [], he = et(() => ({
      x: k.value,
      y: w.value,
      width: h.value,
      height: E.value,
      isDragging: ie.value,
      isResizing: X.value,
      activeEdges: ye.value
    })), $ = () => ({
      onDrag: (D) => {
        D.type === "dragmove" ? requestAnimationFrame(() => {
          k.value = D.left, w.value = D.top, y("dragMove", D);
        }) : (D.type === "dragstart" ? (ie.value = !0, y("dragStart", D)) : D.type === "dragend" && (ie.value = !1, y("dragEnd", D)), k.value = D.left, w.value = D.top);
      },
      onResize: (D) => {
        D.type === "resizemove" ? requestAnimationFrame(() => {
          h.value = D.width, E.value = D.height, k.value = D.left, w.value = D.top, y("resizeMove", D);
        }) : (D.type === "resizestart" ? (X.value = !0, y("resizeStart", D)) : D.type === "resizeend" && (X.value = !1, y("resizeEnd", D)), h.value = D.width, E.value = D.height, k.value = D.left, w.value = D.top, ye.value = D.edges || {});
      }
    }), L = et(() => ({
      draggable: c.draggable,
      resizable: c.resizable,
      useCssTransforms: c.useCssTransforms,
      dragOptions: c.dragOptions,
      resizeOptions: c.resizeOptions,
      x: c.initialX,
      y: c.initialY,
      width: c.initialWidth,
      height: c.initialHeight
    })), Y = () => {
      if (!v.value) return;
      v.value.setAttribute("data-x", c.initialX.toString()), v.value.setAttribute("data-y", c.initialY.toString()), v.value.setAttribute("data-width", c.initialWidth.toString()), v.value.setAttribute("data-height", c.initialHeight.toString());
      const D = $(), Z = ja(
        v.value,
        L.value,
        D
      );
      oe = Z.cleanup, be = Z.updatePositionAndSize, Oe = Z.updatePosition, Me = Z.updateSize;
    };
    Ee.push(
      ge(
        [
          () => c.draggable,
          () => c.resizable,
          () => c.dragOptions,
          () => c.resizeOptions
        ],
        () => {
          oe && (oe(), oe = null), Y();
        },
        {
          deep: c.watchDeep,
          immediate: c.watchImmediate
        }
      )
    ), Ee.push(
      ge(
        [
          () => c.initialX,
          () => c.initialY,
          () => c.initialWidth,
          () => c.initialHeight
        ],
        ([D, Z, R, H]) => {
          be && (be(D, Z, R, H), typeof D == "number" && (k.value = D), typeof Z == "number" && (w.value = Z), typeof R == "number" && (h.value = R), typeof H == "number" && (E.value = H));
        }
      )
    ), Bn(() => {
      Y(), typeof c.initialX == "string" && (k.value = Pt(c.initialX, v.value, "x")), typeof c.initialY == "string" && (w.value = Pt(c.initialY, v.value, "y")), typeof c.initialWidth == "string" && (h.value = $e(c.initialWidth, v.value, "width")), typeof c.initialHeight == "string" && (E.value = $e(c.initialHeight, v.value, "height"));
    });
    const Q = Mt((D, Z, R, H) => {
      be && (be(D, Z, R, H), typeof D == "number" && (k.value = D), typeof Z == "number" && (w.value = Z), typeof R == "number" && (h.value = R), typeof H == "number" && (E.value = H));
    }, 16), b = Mt((D, Z) => {
      Oe && (Oe(D, Z), typeof D == "number" && (k.value = D), typeof Z == "number" && (w.value = Z));
    }, 16), _e = Mt((D, Z) => {
      Me && (Me(D, Z), typeof D == "number" && (h.value = D), typeof Z == "number" && (E.value = Z));
    }, 16);
    return Ro(() => {
      oe && (oe(), oe = null), Ee != null && Ee.length && (Ee.forEach((D) => D()), Ee.length = 0), be = null, Oe = null, Me = null;
    }), d({
      elementRef: v,
      x: k,
      y: w,
      width: h,
      height: E,
      isDragging: ie,
      isResizing: X,
      activeEdges: ye,
      updatePositionAndSize: Q,
      updatePosition: b,
      updateSize: _e
    }), (D, Z) => (rt(), ct("div", {
      ref_key: "elementRef",
      ref: v,
      class: "draggable-resizable-wrapper"
    }, [
      pn(D.$slots, "default", Po(Mo(he.value)))
    ], 512));
  }
});
export {
  qa as DraggableResizableWrapper,
  Tr as GridItem,
  Wa as GridLayout,
  Rt as isCssUnitValue,
  ja as makeElementDraggableResizable,
  $e as parseCssSize,
  Pt as parsePositionValue
};
//# sourceMappingURL=grid-layout-plus.mjs.map
