(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;top:0;right:3px;bottom:3px;left:0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{top:0;right:0;bottom:3px;left:3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}.vgl-item__edge{position:absolute;pointer-events:auto;background-color:transparent;transition:background-color .12s ease}.vgl-item__edge--top,.vgl-item__edge--bottom{right:0;left:0;height:2px}.vgl-item__edge--left,.vgl-item__edge--right{top:0;bottom:0;width:2px}.vgl-item__edge--top{top:0}.vgl-item__edge--bottom{bottom:0}.vgl-item__edge--left{left:0}.vgl-item__edge--right{right:0}.vgl-item__edge.is-enabled:not(.is-active):hover{background-color:#1d62ec}.vgl-item__edge.is-active{background-color:#1d62ec}.draggable-resizable-wrapper{position:relative}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as In, inject as gi, shallowRef as mo, reactive as Ut, ref as Je, toRef as yo, onBeforeMount as Hi, onMounted as Bn, watchEffect as bo, onBeforeUnmount as $i, computed as tt, watch as ve, createElementBlock as ut, openBlock as it, normalizeStyle as Wi, normalizeClass as kt, renderSlot as pn, createCommentVNode as Nt, nextTick as gt, provide as vi, toRefs as mi, withDirectives as xo, Fragment as wo, renderList as Eo, createBlock as So, mergeProps as zo, withCtx as To, createVNode as ko, vShow as _o, onUnmounted as Ro, normalizeProps as Po, guardReactiveProps as Mo } from "vue";
const Do = typeof window < "u";
var yi;
Do && ((yi = window == null ? void 0 : window.navigator) != null && yi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ge(s) {
  return s == null;
}
function qi() {
}
const Co = Object.freeze({
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
Object.freeze(new Set(Object.keys(Co)));
function Oo() {
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
    return qi;
  const p = (...v) => {
    s(...v);
  };
  if (d <= 0)
    return Ni(p);
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
    return qi;
  const p = (...y) => {
    s(...y);
  };
  if (d <= 0)
    return Ni(p);
  let c;
  return function(...y) {
    clearTimeout(c), c = setTimeout(() => {
      p(...y);
    }, d);
  };
}
function Ni(s) {
  if (typeof s != "function")
    return s;
  let d = !1, p, c;
  return function(...y) {
    return p = y, d || (d = !0, c = Promise.resolve().then(() => (d = !1, c = void 0, s(...p)))), c;
  };
}
const Yt = /* @__PURE__ */ new Set(), Xi = /* @__PURE__ */ new WeakMap();
function Io() {
  Yt.forEach((s) => {
    s(...Xi.get(s));
  }), Yt.clear();
}
function He(s, ...d) {
  if (typeof s != "function")
    return s;
  Xi.set(s, d), !Yt.has(s) && (Yt.add(s), Yt.size === 1 && Promise.resolve().then(Io));
}
const Yi = Symbol("LAYOUT_KEY"), Vi = Symbol("EMITTER_KEY");
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
function Gi(s, d) {
  return !(s === d || s.x + s.w <= d.x || s.x >= d.x + d.w || s.y + s.h <= d.y || s.y >= d.y + d.h);
}
function _t(s, d, p) {
  const c = Ki(s), y = Ji(s), v = Array(s.length);
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
function jo(s, d) {
  const p = Ki(s);
  for (let c = 0, y = s.length; c < y; c++) {
    const v = s[c];
    if (v.x + v.w > d.cols && (v.x = d.cols - v.w), v.x < 0 && (v.x = 0, v.w = d.cols), !v.static) p.push(v);
    else
      for (; Vt(p, v); )
        v.y++;
  }
  return s;
}
function bi(s, d) {
  for (let p = 0, c = s.length; p < c; p++)
    if (s[p].i === d) return s[p];
}
function Vt(s, d) {
  for (let p = 0, c = s.length; p < c; p++)
    if (Gi(s[p], d)) return s[p];
}
function Ui(s, d) {
  return s.filter((p) => Gi(p, d));
}
function Ki(s) {
  return s.filter((d) => d.static);
}
function Cn(s, d, p, c, y = !1, v = !1) {
  if (d.static) return s;
  const k = d.x, w = d.y, h = c && d.y > c;
  typeof p == "number" && (d.x = p), typeof c == "number" && (d.y = c), d.moved = !0;
  let E = Ji(s);
  h && (E = E.reverse());
  const ie = Ui(E, d);
  if (v && ie.length)
    return d.x = k, d.y = w, d.moved = !1, s;
  for (let X = 0, ye = ie.length; X < ye; X++) {
    const re = ie[X];
    re.moved || d.y > re.y && d.y - re.y > re.h / 4 || (re.static ? s = xi(s, re, d, y) : s = xi(s, d, re, y));
  }
  return s;
}
function xi(s, d, p, c) {
  if (c) {
    const v = {
      x: p.x,
      y: p.y,
      w: p.w,
      h: p.h
    };
    if (v.y = Math.max(d.y - p.h, 0), !Vt(s, v))
      return Cn(s, p, void 0, v.y, !1);
  }
  return Cn(s, p, void 0, p.y + 1, !1);
}
function Ho(s, d, p, c) {
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
function Ji(s) {
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
function wi(s) {
  return Yo(s);
}
function Yo(s) {
  var v;
  const d = ((v = s.target) == null ? void 0 : v.offsetParent) || document.body, p = s.offsetParent === document.body ? { left: 0, top: 0 } : d.getBoundingClientRect(), c = s.clientX + d.scrollLeft - p.left, y = s.clientY + d.scrollTop - p.top;
  return { x: c, y };
}
function Ei(s, d, p, c) {
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
  const p = Qi(s);
  let c = p[0];
  for (let y = 1, v = p.length; y < v; y++) {
    const k = p[y];
    d > s[k] && (c = k);
  }
  return c;
}
function Zi(s, d) {
  if (!d[s])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + s + " is missing!"
    );
  return d[s];
}
function Uo(s, d, p, c, y, v, k) {
  if (d[c]) return Dn(d[c]);
  let w = s;
  const h = Qi(p), E = h.slice(h.indexOf(c));
  for (let ie = 0, X = E.length; ie < X; ie++) {
    const ye = E[ie];
    if (d[ye]) {
      w = d[ye];
      break;
    }
  }
  return w = Dn(w || []), _t(jo(w, { cols: v }), k);
}
function Qi(s) {
  return Object.keys(s).sort((p, c) => s[p] - s[c]);
}
let Ko = "auto";
function Jo() {
  return typeof document < "u";
}
function Si() {
  return Jo() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : Ko;
}
function Zo(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Xt = { exports: {} }, Qo = Xt.exports, zi;
function ea() {
  return zi || (zi = 1, function(s, d) {
    (function(p, c) {
      s.exports = c();
    })(Qo, function() {
      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e && (i = i.filter(function(r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable;
          })), n.push.apply(n, i);
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e] != null ? arguments[e] : {};
          e % 2 ? p(Object(n), !0).forEach(function(i) {
            h(t, i, n[i]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
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
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, Ce(i.key), i);
        }
      }
      function w(t, e, n) {
        return e && k(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
      }
      function h(t, e, n) {
        return (e = Ce(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
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
        return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
          return n.__proto__ = i, n;
        }, X(t, e);
      }
      function ye(t) {
        if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function re(t) {
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
          var n, i = ie(t);
          if (e) {
            var r = ie(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return function(o, a) {
            if (a && (typeof a == "object" || typeof a == "function")) return a;
            if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return ye(o);
          }(this, n);
        };
      }
      function be() {
        return be = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
          var i = function(o, a) {
            for (; !Object.prototype.hasOwnProperty.call(o, a) && (o = ie(o)) !== null; ) ;
            return o;
          }(t, e);
          if (i) {
            var r = Object.getOwnPropertyDescriptor(i, e);
            return r.get ? r.get.call(arguments.length < 3 ? t : n) : r.value;
          }
        }, be.apply(this, arguments);
      }
      function Ce(t) {
        var e = function(n, i) {
          if (typeof n != "object" || n === null) return n;
          var r = n[Symbol.toPrimitive];
          if (r !== void 0) {
            var o = r.call(n, i);
            if (typeof o != "object") return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(n);
        }(t, "string");
        return typeof e == "symbol" ? e : e + "";
      }
      var Me = function(t) {
        return !(!t || !t.Window) && t instanceof t.Window;
      }, Ee = void 0, ge = void 0;
      function $(t) {
        Ee = t;
        var e = t.document.createTextNode("");
        e.ownerDocument !== t.document && typeof t.wrap == "function" && t.wrap(e) === e && (t = t.wrap(t)), ge = t;
      }
      function j(t) {
        return Me(t) ? t : (t.ownerDocument || t).defaultView || ge.window;
      }
      typeof window < "u" && window && $(window);
      var Y = function(t) {
        return !!t && y(t) === "object";
      }, Q = function(t) {
        return typeof t == "function";
      }, b = { window: function(t) {
        return t === ge || Me(t);
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
        var e = j(t) || ge;
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
      function C(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "drag") {
          var i = n.prepared.axis;
          if (i === "x" || i === "y") {
            var r = i === "x" ? "y" : "x";
            e.page[r] = n.coords.start.page[r], e.client[r] = n.coords.start.client[r], e.delta[r] = 0;
          }
        }
      }
      var Z = { id: "actions/drag", install: function(t) {
        var e = t.actions, n = t.Interactable, i = t.defaults;
        n.prototype.draggable = Z.draggable, e.map.drag = Z, e.methodDict.drag = "draggable", i.actions.drag = Z.defaults;
      }, listeners: { "interactions:before-action-move": _e, "interactions:action-resume": _e, "interactions:action-move": C, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, i = t.buttons, r = n.options.drag;
        if (r && r.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || (i & n.options.drag.mouseButtons) != 0)) return t.action = { name: "drag", axis: r.lockAxis === "start" ? r.startAxis : r.lockAxis }, !1;
      } }, draggable: function(t) {
        return b.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : b.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
      }, beforeMove: _e, move: C, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(t) {
        return t.search("drag") === 0;
      } }, P = Z, H = { init: function(t) {
        var e = t;
        H.document = e.document, H.DocumentFragment = e.DocumentFragment || ee, H.SVGElement = e.SVGElement || ee, H.SVGSVGElement = e.SVGSVGElement || ee, H.SVGElementInstance = e.SVGElementInstance || ee, H.Element = e.Element || ee, H.HTMLElement = e.HTMLElement || H.Element, H.Event = e.Event, H.Touch = e.Touch || ee, H.PointerEvent = e.PointerEvent || e.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function ee() {
      }
      var ae = H, ue = { init: function(t) {
        var e = ae.Element, n = t.navigator || {};
        ue.supportsTouch = "ontouchstart" in t || b.func(t.DocumentTouch) && ae.document instanceof t.DocumentTouch, ue.supportsPointerEvent = n.pointerEnabled !== !1 && !!ae.PointerEvent, ue.isIOS = /iP(hone|od|ad)/.test(n.platform), ue.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), ue.isIe9 = /MSIE 9/.test(n.userAgent), ue.isOperaMobile = n.appName === "Opera" && ue.supportsTouch && /Presto/.test(n.userAgent), ue.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", ue.pEventTypes = ue.supportsPointerEvent ? ae.PointerEvent === t.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, ue.wheelEvent = ae.document && "onmousewheel" in ae.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, de = ue;
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
          if (pe(t, e)) return t;
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
      function pe(t, e) {
        return ge !== Ee && (e = e.replace(/\/deep\//g, " ")), t[de.prefixedMatchesSelector](e);
      }
      var he = function(t) {
        return t.parentNode || t.host;
      };
      function B(t, e) {
        for (var n, i = [], r = t; (n = he(r)) && r !== e && n !== r.ownerDocument; ) i.unshift(r), r = n;
        return i;
      }
      function I(t, e, n) {
        for (; b.element(t); ) {
          if (pe(t, e)) return !0;
          if ((t = Pe(t)) === n) return pe(t, e);
        }
        return !1;
      }
      function fe(t) {
        return t.correspondingUseElement || t;
      }
      function se(t) {
        var e = t instanceof ae.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
        return e && { left: e.left, right: e.right, top: e.top, bottom: e.bottom, width: e.width || e.right - e.left, height: e.height || e.bottom - e.top };
      }
      function le(t) {
        var e, n = se(t);
        if (!de.isIOS7 && n) {
          var i = { x: (e = (e = j(t)) || ge).scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };
          n.left += i.x, n.right += i.x, n.top += i.y, n.bottom += i.y;
        }
        return n;
      }
      function U(t) {
        for (var e = []; t; ) e.push(t), t = Pe(t);
        return e;
      }
      function A(t) {
        return !!b.string(t) && (ae.document.querySelector(t), !0);
      }
      function R(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function rt(t, e, n) {
        return t === "parent" ? Pe(n) : t === "self" ? e.getRect(n) : Re(n, t);
      }
      function Ne(t, e, n, i) {
        var r = t;
        return b.string(r) ? r = rt(r, e, n) : b.func(r) && (r = r.apply(void 0, i)), b.element(r) && (r = le(r)), r;
      }
      function xe(t) {
        return t && { x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top };
      }
      function D(t) {
        return !t || "x" in t && "y" in t || ((t = R({}, t)).x = t.left || 0, t.y = t.top || 0, t.width = t.width || (t.right || 0) - t.x, t.height = t.height || (t.bottom || 0) - t.y), t;
      }
      function Te(t, e, n) {
        t.left && (e.left += n.x), t.right && (e.right += n.x), t.top && (e.top += n.y), t.bottom && (e.bottom += n.y), e.width = e.right - e.left, e.height = e.bottom - e.top;
      }
      function ke(t, e, n) {
        var i = n && t.options[n];
        return xe(Ne(i && i.origin || t.options.origin, t, e, [t && e])) || { x: 0, y: 0 };
      }
      function we(t, e) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(u) {
          return !0;
        }, i = arguments.length > 3 ? arguments[3] : void 0;
        if (i = i || {}, b.string(t) && t.search(" ") !== -1 && (t = Oe(t)), b.array(t)) return t.forEach(function(u) {
          return we(u, e, n, i);
        }), i;
        if (b.object(t) && (e = t, t = ""), b.func(e) && n(t)) i[t] = i[t] || [], i[t].push(e);
        else if (b.array(e)) for (var r = 0, o = e; r < o.length; r++) {
          var a = o[r];
          we(t, a, n, i);
        }
        else if (b.object(e)) for (var l in e)
          we(Oe(l).map(function(u) {
            return "".concat(t).concat(u);
          }), e[l], n, i);
        return i;
      }
      function Oe(t) {
        return t.trim().split(/ +/);
      }
      var Ie = function(t, e) {
        return Math.sqrt(t * t + e * e);
      }, We = ["webkit", "moz"];
      function qe(t, e) {
        t.__set || (t.__set = {});
        var n = function(r) {
          if (We.some(function(o) {
            return r.indexOf(o) === 0;
          })) return 1;
          typeof t[r] != "function" && r !== "__set" && Object.defineProperty(t, r, { get: function() {
            return r in t.__set ? t.__set[r] : t.__set[r] = e[r];
          }, set: function(o) {
            t.__set[r] = o;
          }, configurable: !0 });
        };
        for (var i in e) n(i);
        return t;
      }
      function Be(t, e) {
        t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp;
      }
      function Ze(t) {
        t.page.x = 0, t.page.y = 0, t.client.x = 0, t.client.y = 0;
      }
      function ot(t) {
        return t instanceof ae.Event || t instanceof ae.Touch;
      }
      function Ae(t, e, n) {
        return t = t || "page", (n = n || {}).x = e[t + "X"], n.y = e[t + "Y"], n;
      }
      function S(t, e) {
        return e = e || { x: 0, y: 0 }, de.isOperaMobile && ot(t) ? (Ae("screen", t, e), e.x += window.scrollX, e.y += window.scrollY) : Ae("page", t, e), e;
      }
      function W(t) {
        return b.number(t.pointerId) ? t.pointerId : t.identifier;
      }
      function oe(t, e, n) {
        var i = e.length > 1 ? ce(e) : e[0];
        S(i, t.page), function(r, o) {
          o = o || {}, de.isOperaMobile && ot(r) ? Ae("screen", r, o) : Ae("client", r, o);
        }(i, t.client), t.timeStamp = n;
      }
      function te(t) {
        var e = [];
        return b.array(t) ? (e[0] = t[0], e[1] = t[1]) : t.type === "touchend" ? t.touches.length === 1 ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : t.touches.length === 0 && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e;
      }
      function ce(t) {
        for (var e = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n = 0; n < t.length; n++) {
          var i = t[n];
          for (var r in e) e[r] += i[r];
        }
        for (var o in e) e[o] /= t.length;
        return e;
      }
      function J(t) {
        if (!t.length) return null;
        var e = te(t), n = Math.min(e[0].pageX, e[1].pageX), i = Math.min(e[0].pageY, e[1].pageY), r = Math.max(e[0].pageX, e[1].pageX), o = Math.max(e[0].pageY, e[1].pageY);
        return { x: n, y: i, left: n, top: i, right: r, bottom: o, width: r - n, height: o - i };
      }
      function L(t, e) {
        var n = e + "X", i = e + "Y", r = te(t), o = r[0][n] - r[1][n], a = r[0][i] - r[1][i];
        return Ie(o, a);
      }
      function Se(t, e) {
        var n = e + "X", i = e + "Y", r = te(t), o = r[1][n] - r[0][n], a = r[1][i] - r[0][i];
        return 180 * Math.atan2(a, o) / Math.PI;
      }
      function De(t) {
        return b.string(t.pointerType) ? t.pointerType : b.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : /touch/.test(t.type || "") || t instanceof ae.Touch ? "touch" : "mouse";
      }
      function Fe(t) {
        var e = b.func(t.composedPath) ? t.composedPath() : t.path;
        return [fe(e ? e[0] : t.target), fe(t.currentTarget)];
      }
      var Xe = function() {
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
      Object.defineProperty(Xe.prototype, "interaction", { get: function() {
        return this._interaction._proxy;
      }, set: function() {
      } });
      var Qe = function(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          t.push(i);
        }
        return t;
      }, at = function(t) {
        return Qe([], t);
      }, Ue = function(t, e) {
        for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return n;
        return -1;
      }, Ke = function(t, e) {
        return t[Ue(t, e)];
      }, Ye = function(t) {
        E(n, t);
        var e = re(n);
        function n(i, r, o) {
          var a;
          v(this, n), (a = e.call(this, r._interaction)).dropzone = void 0, a.dragEvent = void 0, a.relatedTarget = void 0, a.draggable = void 0, a.propagationStopped = !1, a.immediatePropagationStopped = !1;
          var l = o === "dragleave" ? i.prev : i.cur, u = l.element, g = l.dropzone;
          return a.type = o, a.target = u, a.currentTarget = u, a.dropzone = g, a.dragEvent = r, a.relatedTarget = r.target, a.draggable = r.interactable, a.timeStamp = r.timeStamp, a;
        }
        return w(n, [{ key: "reject", value: function() {
          var i = this, r = this._interaction.dropState;
          if (this.type === "dropactivate" || this.dropzone && r.cur.dropzone === this.dropzone && r.cur.element === this.target) if (r.prev.dropzone = this.dropzone, r.prev.element = this.target, r.rejected = !0, r.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var o = r.activeDrops, a = Ue(o, function(u) {
              var g = u.dropzone, f = u.element;
              return g === i.dropzone && f === i.target;
            });
            r.activeDrops.splice(a, 1);
            var l = new n(r, this.dragEvent, "dropdeactivate");
            l.dropzone = this.dropzone, l.target = this.target, this.dropzone.fire(l);
          } else this.dropzone.fire(new n(r, this.dragEvent, "dragleave"));
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), n;
      }(Xe);
      function Ct(t, e) {
        for (var n = 0, i = t.slice(); n < i.length; n++) {
          var r = i[n], o = r.dropzone, a = r.element;
          e.dropzone = o, e.target = a, o.fire(e), e.propagationStopped = e.immediatePropagationStopped = !1;
        }
      }
      function wt(t, e) {
        for (var n = function(o, a) {
          for (var l = [], u = 0, g = o.interactables.list; u < g.length; u++) {
            var f = g[u];
            if (f.options.drop.enabled) {
              var m = f.options.drop.accept;
              if (!(b.element(m) && m !== a || b.string(m) && !pe(a, m) || b.func(m) && !m({ dropzone: f, draggableElement: a }))) for (var x = 0, T = f.getAllElements(); x < T.length; x++) {
                var z = T[x];
                z !== a && l.push({ dropzone: f, element: z, rect: f.getRect(z) });
              }
            }
          }
          return l;
        }(t, e), i = 0; i < n.length; i++) {
          var r = n[i];
          r.rect = r.dropzone.getRect(r.element);
        }
        return n;
      }
      function Ot(t, e, n) {
        for (var i = t.dropState, r = t.interactable, o = t.element, a = [], l = 0, u = i.activeDrops; l < u.length; l++) {
          var g = u[l], f = g.dropzone, m = g.element, x = g.rect, T = f.dropCheck(e, n, r, o, m, x);
          a.push(T ? m : null);
        }
        var z = function(_) {
          for (var O, M, F, G = [], ne = 0; ne < _.length; ne++) {
            var q = _[ne], K = _[O];
            if (q && ne !== O) if (K) {
              var je = he(q), me = he(K);
              if (je !== q.ownerDocument) if (me !== q.ownerDocument) if (je !== me) {
                G = G.length ? G : B(K);
                var Ve = void 0;
                if (K instanceof ae.HTMLElement && q instanceof ae.SVGElement && !(q instanceof ae.SVGSVGElement)) {
                  if (q === me) continue;
                  Ve = q.ownerSVGElement;
                } else Ve = q;
                for (var et = B(Ve, K.ownerDocument), ct = 0; et[ct] && et[ct] === G[ct]; ) ct++;
                var sn = [et[ct - 1], et[ct], G[ct]];
                if (sn[0]) for (var qt = sn[0].lastChild; qt; ) {
                  if (qt === sn[1]) {
                    O = ne, G = et;
                    break;
                  }
                  if (qt === sn[2]) break;
                  qt = qt.previousSibling;
                }
              } else F = K, (parseInt(j(M = q).getComputedStyle(M).zIndex, 10) || 0) >= (parseInt(j(F).getComputedStyle(F).zIndex, 10) || 0) && (O = ne);
              else O = ne;
            } else O = ne;
          }
          return O;
        }(a);
        return i.activeDrops[z] || null;
      }
      function Et(t, e, n) {
        var i = t.dropState, r = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return n.type === "dragstart" && (r.activate = new Ye(i, n, "dropactivate"), r.activate.target = null, r.activate.dropzone = null), n.type === "dragend" && (r.deactivate = new Ye(i, n, "dropdeactivate"), r.deactivate.target = null, r.deactivate.dropzone = null), i.rejected || (i.cur.element !== i.prev.element && (i.prev.dropzone && (r.leave = new Ye(i, n, "dragleave"), n.dragLeave = r.leave.target = i.prev.element, n.prevDropzone = r.leave.dropzone = i.prev.dropzone), i.cur.dropzone && (r.enter = new Ye(i, n, "dragenter"), n.dragEnter = i.cur.element, n.dropzone = i.cur.dropzone)), n.type === "dragend" && i.cur.dropzone && (r.drop = new Ye(i, n, "drop"), n.dropzone = i.cur.dropzone, n.relatedTarget = i.cur.element), n.type === "dragmove" && i.cur.dropzone && (r.move = new Ye(i, n, "dropmove"), n.dropzone = i.cur.dropzone)), r;
      }
      function St(t, e) {
        var n = t.dropState, i = n.activeDrops, r = n.cur, o = n.prev;
        e.leave && o.dropzone.fire(e.leave), e.enter && r.dropzone.fire(e.enter), e.move && r.dropzone.fire(e.move), e.drop && r.dropzone.fire(e.drop), e.deactivate && Ct(i, e.deactivate), n.prev.dropzone = r.dropzone, n.prev.element = r.element;
      }
      function At(t, e) {
        var n = t.interaction, i = t.iEvent, r = t.event;
        if (i.type === "dragmove" || i.type === "dragend") {
          var o = n.dropState;
          e.dynamicDrop && (o.activeDrops = wt(e, n.element));
          var a = i, l = Ot(n, a, r);
          o.rejected = o.rejected && !!l && l.dropzone === o.cur.dropzone && l.element === o.cur.element, o.cur.dropzone = l && l.dropzone, o.cur.element = l && l.element, o.events = Et(n, 0, a);
        }
      }
      var It = { id: "actions/drop", install: function(t) {
        var e = t.actions, n = t.interactStatic, i = t.Interactable, r = t.defaults;
        t.usePlugin(P), i.prototype.dropzone = function(o) {
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
        }, i.prototype.dropCheck = function(o, a, l, u, g, f) {
          return function(m, x, T, z, _, O, M) {
            var F = !1;
            if (!(M = M || m.getRect(O))) return !!m.options.drop.checker && m.options.drop.checker(x, T, F, m, O, z, _);
            var G = m.options.drop.overlap;
            if (G === "pointer") {
              var ne = ke(z, _, "drag"), q = S(x);
              q.x += ne.x, q.y += ne.y;
              var K = q.x > M.left && q.x < M.right, je = q.y > M.top && q.y < M.bottom;
              F = K && je;
            }
            var me = z.getRect(_);
            if (me && G === "center") {
              var Ve = me.left + me.width / 2, et = me.top + me.height / 2;
              F = Ve >= M.left && Ve <= M.right && et >= M.top && et <= M.bottom;
            }
            return me && b.number(G) && (F = Math.max(0, Math.min(M.right, me.right) - Math.max(M.left, me.left)) * Math.max(0, Math.min(M.bottom, me.bottom) - Math.max(M.top, me.top)) / (me.width * me.height) >= G), m.options.drop.checker && (F = m.options.drop.checker(x, T, F, m, O, z, _)), F;
          }(this, o, a, l, u, g, f);
        }, n.dynamicDrop = function(o) {
          return b.bool(o) ? (t.dynamicDrop = o, n) : t.dynamicDrop;
        }, R(e.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), e.methodDict.drop = "dropzone", t.dynamicDrop = !1, r.actions.drop = It.defaults;
      }, listeners: { "interactions:before-action-start": function(t) {
        var e = t.interaction;
        e.prepared.name === "drag" && (e.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(t, e) {
        var n = t.interaction, i = (t.event, t.iEvent);
        if (n.prepared.name === "drag") {
          var r = n.dropState;
          r.activeDrops = [], r.events = {}, r.activeDrops = wt(e, n.element), r.events = Et(n, 0, i), r.events.activate && (Ct(r.activeDrops, r.events.activate), e.fire("actions/drop:start", { interaction: n, dragEvent: i }));
        }
      }, "interactions:action-move": At, "interactions:after-action-move": function(t, e) {
        var n = t.interaction, i = t.iEvent;
        if (n.prepared.name === "drag") {
          var r = n.dropState;
          St(n, r.events), e.fire("actions/drop:move", { interaction: n, dragEvent: i }), r.events = {};
        }
      }, "interactions:action-end": function(t, e) {
        if (t.interaction.prepared.name === "drag") {
          var n = t.interaction, i = t.iEvent;
          At(t, e), St(n, n.dropState.events), e.fire("actions/drop:end", { interaction: n, dragEvent: i });
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction;
        if (e.prepared.name === "drag") {
          var n = e.dropState;
          n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1);
        }
      } }, getActiveDrops: wt, getDrop: Ot, getDropEvents: Et, fireDropEvents: St, filterEventType: function(t) {
        return t.search("drag") === 0 || t.search("drop") === 0;
      }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, Jt = It;
      function zt(t) {
        var e = t.interaction, n = t.iEvent, i = t.phase;
        if (e.prepared.name === "gesture") {
          var r = e.pointers.map(function(g) {
            return g.pointer;
          }), o = i === "start", a = i === "end", l = e.interactable.options.deltaSource;
          if (n.touches = [r[0], r[1]], o) n.distance = L(r, l), n.box = J(r), n.scale = 1, n.ds = 0, n.angle = Se(r, l), n.da = 0, e.gesture.startDistance = n.distance, e.gesture.startAngle = n.angle;
          else if (a || e.pointers.length < 2) {
            var u = e.prevEvent;
            n.distance = u.distance, n.box = u.box, n.scale = u.scale, n.ds = 0, n.angle = u.angle, n.da = 0;
          } else n.distance = L(r, l), n.box = J(r), n.scale = n.distance / e.gesture.startDistance, n.angle = Se(r, l), n.ds = n.scale - e.gesture.scale, n.da = n.angle - e.gesture.angle;
          e.gesture.distance = n.distance, e.gesture.angle = n.angle, b.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale);
        }
      }
      var ze = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t) {
        var e = t.actions, n = t.Interactable, i = t.defaults;
        n.prototype.gesturable = function(r) {
          return b.object(r) ? (this.options.gesture.enabled = r.enabled !== !1, this.setPerAction("gesture", r), this.setOnEvents("gesture", r), this) : b.bool(r) ? (this.options.gesture.enabled = r, this) : this.options.gesture;
        }, e.map.gesture = ze, e.methodDict.gesture = "gesturable", i.actions.gesture = ze.defaults;
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
      function Ft(t, e, n, i, r, o, a) {
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
        return !!b.element(i) && (b.element(e) ? e === i : I(i, e, r));
      }
      function Ln(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "resize" && n.resizeAxes) {
          var i = e;
          n.interactable.options.resize.square ? (n.resizeAxes === "y" ? i.delta.x = i.delta.y : i.delta.y = i.delta.x, i.axes = "xy") : (i.axes = n.resizeAxes, n.resizeAxes === "x" ? i.delta.y = 0 : n.resizeAxes === "y" && (i.delta.x = 0));
        }
      }
      var st, vt, lt = { id: "actions/resize", before: ["actions/drag"], install: function(t) {
        var e = t.actions, n = t.browser, i = t.Interactable, r = t.defaults;
        lt.cursors = function(o) {
          return o.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        }(n), lt.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, i.prototype.resizable = function(o) {
          return function(a, l, u) {
            return b.object(l) ? (a.options.resize.enabled = l.enabled !== !1, a.setPerAction("resize", l), a.setOnEvents("resize", l), b.string(l.axis) && /^x$|^y$|^xy$/.test(l.axis) ? a.options.resize.axis = l.axis : l.axis === null && (a.options.resize.axis = u.defaults.actions.resize.axis), b.bool(l.preserveAspectRatio) ? a.options.resize.preserveAspectRatio = l.preserveAspectRatio : b.bool(l.square) && (a.options.resize.square = l.square), a) : b.bool(l) ? (a.options.resize.enabled = l, a) : a.options.resize;
          }(this, o, t);
        }, e.map.resize = lt, e.methodDict.resize = "resizable", r.actions.resize = lt.defaults;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(t) {
        (function(e) {
          var n = e.iEvent, i = e.interaction;
          if (i.prepared.name === "resize" && i.prepared.edges) {
            var r = n, o = i.rect;
            i._rects = { start: R({}, o), corrected: R({}, o), previous: R({}, o), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, r.edges = i.prepared.edges, r.rect = i._rects.corrected, r.deltaRect = i._rects.delta;
          }
        })(t), Ln(t);
      }, "interactions:action-move": function(t) {
        (function(e) {
          var n = e.iEvent, i = e.interaction;
          if (i.prepared.name === "resize" && i.prepared.edges) {
            var r = n, o = i.interactable.options.resize.invert, a = o === "reposition" || o === "negate", l = i.rect, u = i._rects, g = u.start, f = u.corrected, m = u.delta, x = u.previous;
            if (R(x, f), a) {
              if (R(f, l), o === "reposition") {
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
            r.edges = i.prepared.edges, r.rect = f, r.deltaRect = m;
          }
        })(t), Ln(t);
      }, "interactions:action-end": function(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "resize" && n.prepared.edges) {
          var i = e;
          i.edges = n.prepared.edges, i.rect = n._rects.corrected, i.deltaRect = n._rects.delta;
        }
      }, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, i = t.element, r = t.rect, o = t.buttons;
        if (r) {
          var a = R({}, e.coords.cur.page), l = n.options.resize;
          if (l && l.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || (o & l.mouseButtons) != 0)) {
            if (b.object(l.edges)) {
              var u = { left: !1, right: !1, top: !1, bottom: !1 };
              for (var g in u) u[g] = Ft(g, l.edges[g], a, e._latestPointer.eventTarget, i, r, l.margin || lt.defaultMargin);
              u.left = u.left && !u.right, u.top = u.top && !u.bottom, (u.left || u.right || u.top || u.bottom) && (t.action = { name: "resize", edges: u });
            } else {
              var f = l.axis !== "y" && a.x > r.right - lt.defaultMargin, m = l.axis !== "x" && a.y > r.bottom - lt.defaultMargin;
              (f || m) && (t.action = { name: "resize", axes: (f ? "x" : "") + (m ? "y" : "") });
            }
            return !t.action && void 0;
          }
        }
      } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t) {
        var e = t.edges, n = t.axis, i = t.name, r = lt.cursors, o = null;
        if (n) o = r[i + n];
        else if (e) {
          for (var a = "", l = 0, u = ["top", "bottom", "left", "right"]; l < u.length; l++) {
            var g = u[l];
            e[g] && (a += g);
          }
          o = r[a];
        }
        return o;
      }, filterEventType: function(t) {
        return t.search("resize") === 0;
      }, defaultMargin: null }, lr = lt, cr = { id: "actions", install: function(t) {
        t.usePlugin(Bt), t.usePlugin(lr), t.usePlugin(P), t.usePlugin(Jt);
      } }, jn = 0, ft = { request: function(t) {
        return st(t);
      }, cancel: function(t) {
        return vt(t);
      }, init: function(t) {
        if (st = t.requestAnimationFrame, vt = t.cancelAnimationFrame, !st) for (var e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length; n++) {
          var i = e[n];
          st = t["".concat(i, "RequestAnimationFrame")], vt = t["".concat(i, "CancelAnimationFrame")] || t["".concat(i, "CancelRequestAnimationFrame")];
        }
        st = st && st.bind(t), vt = vt && vt.bind(t), st || (st = function(r) {
          var o = Date.now(), a = Math.max(0, 16 - (o - jn)), l = t.setTimeout(function() {
            r(o + a);
          }, a);
          return jn = o + a, l;
        }, vt = function(r) {
          return clearTimeout(r);
        });
      } }, N = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(t) {
        N.isScrolling = !0, ft.cancel(N.i), t.autoScroll = N, N.interaction = t, N.prevTime = N.now(), N.i = ft.request(N.scroll);
      }, stop: function() {
        N.isScrolling = !1, N.interaction && (N.interaction.autoScroll = null), ft.cancel(N.i);
      }, scroll: function() {
        var t = N.interaction, e = t.interactable, n = t.element, i = t.prepared.name, r = e.options[i].autoScroll, o = Hn(r.container, e, n), a = N.now(), l = (a - N.prevTime) / 1e3, u = r.speed * l;
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
        N.isScrolling && (ft.cancel(N.i), N.i = ft.request(N.scroll));
      }, check: function(t, e) {
        var n;
        return (n = t.options[e].autoScroll) == null ? void 0 : n.enabled;
      }, onInteractionMove: function(t) {
        var e = t.interaction, n = t.pointer;
        if (e.interacting() && N.check(e.interactable, e.prepared.name)) if (e.simulation) N.x = N.y = 0;
        else {
          var i, r, o, a, l = e.interactable, u = e.element, g = e.prepared.name, f = l.options[g].autoScroll, m = Hn(f.container, l, u);
          if (b.window(m)) a = n.clientX < N.margin, i = n.clientY < N.margin, r = n.clientX > m.innerWidth - N.margin, o = n.clientY > m.innerHeight - N.margin;
          else {
            var x = se(m);
            a = n.clientX < x.left + N.margin, i = n.clientY < x.top + N.margin, r = n.clientX > x.right - N.margin, o = n.clientY > x.bottom - N.margin;
          }
          N.x = r ? 1 : a ? -1 : 0, N.y = o ? 1 : i ? -1 : 0, N.isScrolling || (N.margin = f.margin, N.speed = f.speed, N.start(e));
        }
      } };
      function Hn(t, e, n) {
        return (b.string(t) ? rt(t, e, n) : t) || j(n);
      }
      function $n(t) {
        return b.window(t) && (t = window.document.body), { x: t.scrollLeft, y: t.scrollTop };
      }
      var ur = { id: "auto-scroll", install: function(t) {
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
      } } }, fr = ur;
      function Lt(t, e) {
        var n = !1;
        return function() {
          return n || (ge.console.warn(e), n = !0), t.apply(this, arguments);
        };
      }
      function gn(t, e) {
        return t.name = e.name, t.axis = e.axis, t.edges = e.edges, t;
      }
      function dr(t) {
        return b.bool(t) ? (this.options.styleCursor = t, this) : t === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function pr(t) {
        return b.func(t) ? (this.options.actionChecker = t, this) : t === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var hr = { id: "auto-start/interactableMethods", install: function(t) {
        var e = t.Interactable;
        e.prototype.getAction = function(n, i, r, o) {
          var a = function(l, u, g, f, m) {
            var x = l.getRect(f), T = u.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[u.button], z = { action: null, interactable: l, interaction: g, element: f, rect: x, buttons: T };
            return m.fire("auto-start:check", z), z.action;
          }(this, i, r, o, t);
          return this.options.actionChecker ? this.options.actionChecker(n, i, a, this, o, r) : a;
        }, e.prototype.ignoreFrom = Lt(function(n) {
          return this._backCompatOption("ignoreFrom", n);
        }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = Lt(function(n) {
          return this._backCompatOption("allowFrom", n);
        }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = pr, e.prototype.styleCursor = dr;
      } };
      function Wn(t, e, n, i, r) {
        return e.testIgnoreAllow(e.options[t.name], n, i) && e.options[t.name].enabled && Zt(e, n, t, r) ? t : null;
      }
      function gr(t, e, n, i, r, o, a) {
        for (var l = 0, u = i.length; l < u; l++) {
          var g = i[l], f = r[l], m = g.getAction(e, n, t, f);
          if (m) {
            var x = Wn(m, g, f, o, a);
            if (x) return { action: x, interactable: g, element: f };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function qn(t, e, n, i, r) {
        var o = [], a = [], l = i;
        function u(f) {
          o.push(f), a.push(l);
        }
        for (; b.element(l); ) {
          o = [], a = [], r.interactables.forEachMatch(l, u);
          var g = gr(t, e, n, o, a, i, r);
          if (g.action && !g.interactable.options[g.action.name].manualStart) return g;
          l = Pe(l);
        }
        return { action: null, interactable: null, element: null };
      }
      function Nn(t, e, n) {
        var i = e.action, r = e.interactable, o = e.element;
        i = i || { name: null }, t.interactable = r, t.element = o, gn(t.prepared, i), t.rect = r && i.name ? r.getRect(o) : null, Yn(t, n), n.fire("autoStart:prepared", { interaction: t });
      }
      function Zt(t, e, n, i) {
        var r = t.options, o = r[n.name].max, a = r[n.name].maxPerElement, l = i.autoStart.maxInteractions, u = 0, g = 0, f = 0;
        if (!(o && a && l)) return !1;
        for (var m = 0, x = i.interactions.list; m < x.length; m++) {
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
        var i = n.autoStart.cursorElement;
        i && i !== t && (i.style.cursor = ""), t.ownerDocument.documentElement.style.cursor = e, t.style.cursor = e, n.autoStart.cursorElement = e ? t : null;
      }
      function Yn(t, e) {
        var n = t.interactable, i = t.element, r = t.prepared;
        if (t.pointerType === "mouse" && n && n.options.styleCursor) {
          var o = "";
          if (r.name) {
            var a = n.options[r.name].cursorChecker;
            o = b.func(a) ? a(r, n, i, t._interacting) : e.actions.map[r.name].getCursor(r);
          }
          vn(t.element, o || "", e);
        } else e.autoStart.cursorElement && vn(e.autoStart.cursorElement, "", e);
      }
      var vr = { id: "auto-start/base", before: ["actions"], install: function(t) {
        var e = t.interactStatic, n = t.defaults;
        t.usePlugin(hr), n.base.actionChecker = null, n.base.styleCursor = !0, R(n.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e.maxInteractions = function(i) {
          return Xn(i, t);
        }, t.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Zt, cursorElement: null };
      }, listeners: { "interactions:down": function(t, e) {
        var n = t.interaction, i = t.pointer, r = t.event, o = t.eventTarget;
        n.interacting() || Nn(n, qn(n, i, r, o, e), e);
      }, "interactions:move": function(t, e) {
        (function(n, i) {
          var r = n.interaction, o = n.pointer, a = n.event, l = n.eventTarget;
          r.pointerType !== "mouse" || r.pointerIsDown || r.interacting() || Nn(r, qn(r, o, a, l, i), i);
        })(t, e), function(n, i) {
          var r = n.interaction;
          if (r.pointerIsDown && !r.interacting() && r.pointerWasMoved && r.prepared.name) {
            i.fire("autoStart:before-start", n);
            var o = r.interactable, a = r.prepared.name;
            a && o && (o.options[a].manualStart || !Zt(o, r.element, r.prepared, i) ? r.stop() : (r.start(r.prepared, o, r.element), Yn(r, i)));
          }
        }(t, e);
      }, "interactions:stop": function(t, e) {
        var n = t.interaction, i = n.interactable;
        i && i.options.styleCursor && vn(n.element, "", e);
      } }, maxInteractions: Xn, withinInteractionLimit: Zt, validateAction: Wn }, mn = vr, mr = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t, e) {
        var n = t.interaction, i = t.eventTarget, r = t.dx, o = t.dy;
        if (n.prepared.name === "drag") {
          var a = Math.abs(r), l = Math.abs(o), u = n.interactable.options.drag, g = u.startAxis, f = a > l ? "x" : a < l ? "y" : "xy";
          if (n.prepared.axis = u.lockAxis === "start" ? f[0] : u.lockAxis, f !== "xy" && g !== "xy" && g !== f) {
            n.prepared.name = null;
            for (var m = i, x = function(z) {
              if (z !== n.interactable) {
                var _ = n.interactable.options.drag;
                if (!_.manualStart && z.testIgnoreAllow(_, m, i)) {
                  var O = z.getAction(n.downPointer, n.downEvent, n, m);
                  if (O && O.name === "drag" && function(M, F) {
                    if (!F) return !1;
                    var G = F.options.drag.startAxis;
                    return M === "xy" || G === "xy" || G === M;
                  }(f, z) && mn.validateAction(O, z, m, i, e)) return z;
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
      var yr = { id: "auto-start/hold", install: function(t) {
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
      } }, getHoldDuration: yn }, br = yr, xr = { id: "auto-start", install: function(t) {
        t.usePlugin(mn), t.usePlugin(br), t.usePlugin(mr);
      } }, wr = function(t) {
        return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : b.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault;
      };
      function Er(t) {
        var e = t.interaction, n = t.event;
        e.interactable && e.interactable.checkAndPreventDefault(n);
      }
      var Vn = { id: "core/interactablePreventDefault", install: function(t) {
        var e = t.Interactable;
        e.prototype.preventDefault = wr, e.prototype.checkAndPreventDefault = function(n) {
          return function(i, r, o) {
            var a = i.options.preventDefault;
            if (a !== "never") if (a !== "always") {
              if (r.events.supportsPassive && /^touch(start|move)$/.test(o.type)) {
                var l = j(o.target).document, u = r.getDocOptions(l);
                if (!u || !u.events || u.events.passive !== !1) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(o.type) || b.element(o.target) && pe(o.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || o.preventDefault();
            } else o.preventDefault();
          }(this, t, n);
        }, t.interactions.docEvents.push({ type: "dragstart", listener: function(n) {
          for (var i = 0, r = t.interactions.list; i < r.length; i++) {
            var o = r[i];
            if (o.element && (o.element === n.target || V(o.element, n.target))) return void o.interactable.checkAndPreventDefault(n);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce(function(t, e) {
        return t["interactions:".concat(e)] = Er, t;
      }, {}) };
      function Qt(t, e) {
        if (e.phaselessTypes[t]) return !0;
        for (var n in e.map) if (t.indexOf(n) === 0 && t.substr(n.length) in e.phases) return !0;
        return !1;
      }
      function Tt(t) {
        var e = {};
        for (var n in t) {
          var i = t[n];
          b.plainObject(i) ? e[n] = Tt(i) : b.array(i) ? e[n] = at(i) : e[n] = i;
        }
        return e;
      }
      var bn = function() {
        function t(e) {
          v(this, t), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e, this.result = en(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
        }
        return w(t, [{ key: "start", value: function(e, n) {
          var i, r, o = e.phase, a = this.interaction, l = function(g) {
            var f = g.interactable.options[g.prepared.name], m = f.modifiers;
            return m && m.length ? m : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(x) {
              var T = f[x];
              return T && T.enabled && { options: T, methods: T._methods };
            }).filter(function(x) {
              return !!x;
            });
          }(a);
          this.prepareStates(l), this.startEdges = R({}, a.edges), this.edges = R({}, this.startEdges), this.startOffset = (i = a.rect, r = n, i ? { left: r.x - i.left, top: r.y - i.top, right: i.right - r.x, bottom: i.bottom - r.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
          var u = this.fillArg({ phase: o, pageCoords: n, preEnd: !1 });
          return this.result = en(), this.startAll(u), this.result = this.setAll(u);
        } }, { key: "fillArg", value: function(e) {
          var n = this.interaction;
          return e.interaction = n, e.interactable = n.interactable, e.element = n.element, e.rect || (e.rect = n.rect), e.edges || (e.edges = this.startEdges), e.startOffset = this.startOffset, e;
        } }, { key: "startAll", value: function(e) {
          for (var n = 0, i = this.states; n < i.length; n++) {
            var r = i[n];
            r.methods.start && (e.state = r, r.methods.start(e));
          }
        } }, { key: "setAll", value: function(e) {
          var n = e.phase, i = e.preEnd, r = e.skipModifiers, o = e.rect, a = e.edges;
          e.coords = R({}, e.pageCoords), e.rect = R({}, o), e.edges = R({}, a);
          for (var l = r ? this.states.slice(r) : this.states, u = en(e.coords, e.rect), g = 0; g < l.length; g++) {
            var f, m = l[g], x = m.options, T = R({}, e.coords), z = null;
            (f = m.methods) != null && f.set && this.shouldDo(x, i, n) && (e.state = m, z = m.methods.set(e), Te(e.edges, e.rect, { x: e.coords.x - T.x, y: e.coords.y - T.y })), u.eventProps.push(z);
          }
          R(this.edges, e.edges), u.delta.x = e.coords.x - e.pageCoords.x, u.delta.y = e.coords.y - e.pageCoords.y, u.rectDelta.left = e.rect.left - o.left, u.rectDelta.right = e.rect.right - o.right, u.rectDelta.top = e.rect.top - o.top, u.rectDelta.bottom = e.rect.bottom - o.bottom;
          var _ = this.result.coords, O = this.result.rect;
          if (_ && O) {
            var M = u.rect.left !== O.left || u.rect.right !== O.right || u.rect.top !== O.top || u.rect.bottom !== O.bottom;
            u.changed = M || _.x !== u.coords.x || _.y !== u.coords.y;
          }
          return u;
        } }, { key: "applyToInteraction", value: function(e) {
          var n = this.interaction, i = e.phase, r = n.coords.cur, o = n.coords.start, a = this.result, l = this.startDelta, u = a.delta;
          i === "start" && R(this.startDelta, a.delta);
          for (var g = 0, f = [[o, l], [r, u]]; g < f.length; g++) {
            var m = f[g], x = m[0], T = m[1];
            x.page.x += T.x, x.page.y += T.y, x.client.x += T.x, x.client.y += T.y;
          }
          var z = this.result.rectDelta, _ = e.rect || n.rect;
          _.left += z.left, _.right += z.right, _.top += z.top, _.bottom += z.bottom, _.width = _.right - _.left, _.height = _.bottom - _.top;
        } }, { key: "setAndApply", value: function(e) {
          var n = this.interaction, i = e.phase, r = e.preEnd, o = e.skipModifiers, a = this.setAll(this.fillArg({ preEnd: r, phase: i, pageCoords: e.modifiedCoords || n.coords.cur.page }));
          if (this.result = a, !a.changed && (!o || o < this.states.length) && n.interacting()) return !1;
          if (e.modifiedCoords) {
            var l = n.coords.cur.page, u = { x: e.modifiedCoords.x - l.x, y: e.modifiedCoords.y - l.y };
            a.coords.x += u.x, a.coords.y += u.y, a.delta.x += u.x, a.delta.y += u.y;
          }
          this.applyToInteraction(e);
        } }, { key: "beforeEnd", value: function(e) {
          var n = e.interaction, i = e.event, r = this.states;
          if (r && r.length) {
            for (var o = !1, a = 0; a < r.length; a++) {
              var l = r[a];
              e.state = l;
              var u = l.options, g = l.methods, f = g.beforeEnd && g.beforeEnd(e);
              if (f) return this.endResult = f, !1;
              o = o || !o && this.shouldDo(u, !0, e.phase, !0);
            }
            o && n.move({ event: i, preEnd: !0 });
          }
        } }, { key: "stop", value: function(e) {
          var n = e.interaction;
          if (this.states && this.states.length) {
            var i = R({ states: this.states, interactable: n.interactable, element: n.element, rect: null }, e);
            this.fillArg(i);
            for (var r = 0, o = this.states; r < o.length; r++) {
              var a = o[r];
              i.state = a, a.methods.stop && a.methods.stop(i);
            }
            this.states = null, this.endResult = null;
          }
        } }, { key: "prepareStates", value: function(e) {
          this.states = [];
          for (var n = 0; n < e.length; n++) {
            var i = e[n], r = i.options, o = i.methods, a = i.name;
            this.states.push({ options: r, methods: o, index: n, name: a });
          }
          return this.states;
        } }, { key: "restoreInteractionCoords", value: function(e) {
          var n = e.interaction, i = n.coords, r = n.rect, o = n.modification;
          if (o.result) {
            for (var a = o.startDelta, l = o.result, u = l.delta, g = l.rectDelta, f = 0, m = [[i.start, a], [i.cur, u]]; f < m.length; f++) {
              var x = m[f], T = x[0], z = x[1];
              T.page.x -= z.x, T.page.y -= z.y, T.client.x -= z.x, T.client.y -= z.y;
            }
            r.left -= g.left, r.right -= g.right, r.top -= g.top, r.bottom -= g.bottom;
          }
        } }, { key: "shouldDo", value: function(e, n, i, r) {
          return !(!e || e.enabled === !1 || r && !e.endOnly || e.endOnly && !n || i === "start" && !e.setStart);
        } }, { key: "copyFrom", value: function(e) {
          this.startOffset = e.startOffset, this.startDelta = e.startDelta, this.startEdges = e.startEdges, this.edges = e.edges, this.states = e.states.map(function(n) {
            return Tt(n);
          }), this.result = en(R({}, e.result.coords), R({}, e.result.rect));
        } }, { key: "destroy", value: function() {
          for (var e in this) this[e] = null;
        } }]), t;
      }();
      function en(t, e) {
        return { rect: e, coords: t, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
      }
      function dt(t, e) {
        var n = t.defaults, i = { start: t.start, set: t.set, beforeEnd: t.beforeEnd, stop: t.stop }, r = function(o) {
          var a = o || {};
          for (var l in a.enabled = a.enabled !== !1, n) l in a || (a[l] = n[l]);
          var u = { options: a, methods: i, name: e, enable: function() {
            return a.enabled = !0, u;
          }, disable: function() {
            return a.enabled = !1, u;
          } };
          return u;
        };
        return e && typeof e == "string" && (r._defaults = n, r._methods = i), r;
      }
      function jt(t) {
        var e = t.iEvent, n = t.interaction.modification.result;
        n && (e.modifiers = n.eventProps);
      }
      var Sr = { id: "modifiers/base", before: ["actions"], install: function(t) {
        t.defaults.perAction.modifiers = [];
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.modification = new bn(e);
      }, "interactions:before-action-start": function(t) {
        var e = t.interaction, n = t.interaction.modification;
        n.start(t, e.coords.start.page), e.edges = n.edges, n.applyToInteraction(t);
      }, "interactions:before-action-move": function(t) {
        var e = t.interaction, n = e.modification, i = n.setAndApply(t);
        return e.edges = n.edges, i;
      }, "interactions:before-action-end": function(t) {
        var e = t.interaction, n = e.modification, i = n.beforeEnd(t);
        return e.edges = n.startEdges, i;
      }, "interactions:action-start": jt, "interactions:action-move": jt, "interactions:action-end": jt, "interactions:after-action-start": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:after-action-move": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:stop": function(t) {
        return t.interaction.modification.stop(t);
      } } }, Gn = Sr, Un = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, xn = function(t) {
        E(n, t);
        var e = re(n);
        function n(i, r, o, a, l, u, g) {
          var f;
          v(this, n), (f = e.call(this, i)).relatedTarget = null, f.screenX = void 0, f.screenY = void 0, f.button = void 0, f.buttons = void 0, f.ctrlKey = void 0, f.shiftKey = void 0, f.altKey = void 0, f.metaKey = void 0, f.page = void 0, f.client = void 0, f.delta = void 0, f.rect = void 0, f.x0 = void 0, f.y0 = void 0, f.t0 = void 0, f.dt = void 0, f.duration = void 0, f.clientX0 = void 0, f.clientY0 = void 0, f.velocity = void 0, f.speed = void 0, f.swipe = void 0, f.axes = void 0, f.preEnd = void 0, l = l || i.element;
          var m = i.interactable, x = (m && m.options || Un).deltaSource, T = ke(m, l, o), z = a === "start", _ = a === "end", O = z ? ye(f) : i.prevEvent, M = z ? i.coords.start : _ ? { page: O.page, client: O.client, timeStamp: i.coords.cur.timeStamp } : i.coords.cur;
          return f.page = R({}, M.page), f.client = R({}, M.client), f.rect = R({}, i.rect), f.timeStamp = M.timeStamp, _ || (f.page.x -= T.x, f.page.y -= T.y, f.client.x -= T.x, f.client.y -= T.y), f.ctrlKey = r.ctrlKey, f.altKey = r.altKey, f.shiftKey = r.shiftKey, f.metaKey = r.metaKey, f.button = r.button, f.buttons = r.buttons, f.target = l, f.currentTarget = l, f.preEnd = u, f.type = g || o + (a || ""), f.interactable = m, f.t0 = z ? i.pointers[i.pointers.length - 1].downTime : O.t0, f.x0 = i.coords.start.page.x - T.x, f.y0 = i.coords.start.page.y - T.y, f.clientX0 = i.coords.start.client.x - T.x, f.clientY0 = i.coords.start.client.y - T.y, f.delta = z || _ ? { x: 0, y: 0 } : { x: f[x].x - O[x].x, y: f[x].y - O[x].y }, f.dt = i.coords.delta.timeStamp, f.duration = f.timeStamp - f.t0, f.velocity = R({}, i.coords.velocity[x]), f.speed = Ie(f.velocity.x, f.velocity.y), f.swipe = _ || a === "inertiastart" ? f.getSwipe() : null, f;
        }
        return w(n, [{ key: "getSwipe", value: function() {
          var i = this._interaction;
          if (i.prevEvent.speed < 600 || this.timeStamp - i.prevEvent.timeStamp > 150) return null;
          var r = 180 * Math.atan2(i.prevEvent.velocityY, i.prevEvent.velocityX) / Math.PI;
          r < 0 && (r += 360);
          var o = 112.5 <= r && r < 247.5, a = 202.5 <= r && r < 337.5;
          return { up: a, down: !a && 22.5 <= r && r < 157.5, left: o, right: !o && (292.5 <= r || r < 67.5), angle: r, speed: i.prevEvent.speed, velocity: { x: i.prevEvent.velocityX, y: i.prevEvent.velocityY } };
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }]), n;
      }(Xe);
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
      var zr = w(function t(e, n, i, r, o) {
        v(this, t), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e, this.pointer = n, this.event = i, this.downTime = r, this.downTarget = o;
      }), Tr = function(t) {
        return t.interactable = "", t.element = "", t.prepared = "", t.pointerIsDown = "", t.pointerWasMoved = "", t._proxy = "", t;
      }({}), Kn = function(t) {
        return t.start = "", t.move = "", t.end = "", t.stop = "", t.interacting = "", t;
      }({}), kr = 0, _r = function() {
        function t(e) {
          var n = this, i = e.pointerType, r = e.scopeFire;
          v(this, t), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = Lt(function(f) {
            this.move(f);
          }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = kr++, this._scopeFire = r, this.pointerType = i;
          var o = this;
          this._proxy = {};
          var a = function(f) {
            Object.defineProperty(n._proxy, f, { get: function() {
              return o[f];
            } });
          };
          for (var l in Tr) a(l);
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
        } }, { key: "pointerDown", value: function(e, n, i) {
          var r = this.updatePointer(e, n, i, !0), o = this.pointers[r];
          this._scopeFire("interactions:down", { pointer: e, event: n, eventTarget: i, pointerIndex: r, pointerInfo: o, type: "down", interaction: this });
        } }, { key: "start", value: function(e, n, i) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (e.name === "gesture" ? 2 : 1) || !n.options[e.name].enabled) && (gn(this.prepared, e), this.interactable = n, this.element = i, this.rect = n.getRect(i), this.edges = this.prepared.edges ? R({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(e, n, i) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(e, n, i, !1);
          var r, o, a = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (r = this.coords.cur.client.x - this.coords.start.client.x, o = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Ie(r, o) > this.pointerMoveTolerance);
          var l, u, g, f = this.getPointerIndex(e), m = { pointer: e, pointerIndex: f, pointerInfo: this.pointers[f], event: n, type: "move", eventTarget: i, dx: r, dy: o, duplicate: a, interaction: this };
          a || (l = this.coords.velocity, u = this.coords.delta, g = Math.max(u.timeStamp / 1e3, 1e-3), l.page.x = u.page.x / g, l.page.y = u.page.y / g, l.client.x = u.client.x / g, l.client.y = u.client.y / g, l.timeStamp = g), this._scopeFire("interactions:move", m), a || this.simulation || (this.interacting() && (m.type = null, this.move(m)), this.pointerWasMoved && Be(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(e) {
          e && e.event || Ze(this.coords.delta), (e = R({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, e || {})).phase = "move", this._doPhase(e);
        } }, { key: "pointerUp", value: function(e, n, i, r) {
          var o = this.getPointerIndex(e);
          o === -1 && (o = this.updatePointer(e, n, i, !1));
          var a = /cancel$/i.test(n.type) ? "cancel" : "up";
          this._scopeFire("interactions:".concat(a), { pointer: e, pointerIndex: o, pointerInfo: this.pointers[o], event: n, eventTarget: i, type: a, curEventTarget: r, interaction: this }), this.simulation || this.end(n), this.removePointer(e, n);
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
          return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Ue(this.pointers, function(i) {
            return i.id === n;
          });
        } }, { key: "getPointerInfo", value: function(e) {
          return this.pointers[this.getPointerIndex(e)];
        } }, { key: "updatePointer", value: function(e, n, i, r) {
          var o, a, l, u = W(e), g = this.getPointerIndex(e), f = this.pointers[g];
          return r = r !== !1 && (r || /(down|start)$/i.test(n.type)), f ? f.pointer = e : (f = new zr(u, e, n, null, null), g = this.pointers.length, this.pointers.push(f)), oe(this.coords.cur, this.pointers.map(function(m) {
            return m.pointer;
          }), this._now()), o = this.coords.delta, a = this.coords.prev, l = this.coords.cur, o.page.x = l.page.x - a.page.x, o.page.y = l.page.y - a.page.y, o.client.x = l.client.x - a.client.x, o.client.y = l.client.y - a.client.y, o.timeStamp = l.timeStamp - a.timeStamp, r && (this.pointerIsDown = !0, f.downTime = this.coords.cur.timeStamp, f.downTarget = i, qe(this.downPointer, e), this.interacting() || (Be(this.coords.start, this.coords.cur), Be(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = !1)), this._updateLatestPointer(e, n, i), this._scopeFire("interactions:update-pointer", { pointer: e, event: n, eventTarget: i, down: r, pointerInfo: f, pointerIndex: g, interaction: this }), g;
        } }, { key: "removePointer", value: function(e, n) {
          var i = this.getPointerIndex(e);
          if (i !== -1) {
            var r = this.pointers[i];
            this._scopeFire("interactions:remove-pointer", { pointer: e, event: n, eventTarget: null, pointerIndex: i, pointerInfo: r, interaction: this }), this.pointers.splice(i, 1), this.pointerIsDown = !1;
          }
        } }, { key: "_updateLatestPointer", value: function(e, n, i) {
          this._latestPointer.pointer = e, this._latestPointer.event = n, this._latestPointer.eventTarget = i;
        } }, { key: "destroy", value: function() {
          this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
        } }, { key: "_createPreparedEvent", value: function(e, n, i, r) {
          return new xn(this, e, this.prepared.name, n, this.element, i, r);
        } }, { key: "_fireEvent", value: function(e) {
          var n;
          (n = this.interactable) == null || n.fire(e), (!this.prevEvent || e.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = e);
        } }, { key: "_doPhase", value: function(e) {
          var n = e.event, i = e.phase, r = e.preEnd, o = e.type, a = this.rect;
          if (a && i === "move" && (Te(this.edges, a, this.coords.delta[this.interactable.options.deltaSource]), a.width = a.right - a.left, a.height = a.bottom - a.top), this._scopeFire("interactions:before-action-".concat(i), e) === !1) return !1;
          var l = e.iEvent = this._createPreparedEvent(n, i, r, o);
          return this._scopeFire("interactions:action-".concat(i), e), i === "start" && (this.prevEvent = l), this._fireEvent(l), this._scopeFire("interactions:after-action-".concat(i), e), !0;
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
      function Rr(t) {
        var e = t.x, n = t.y;
        this.offset.pending.x += e, this.offset.pending.y += n, this.offset.total.x += e, this.offset.total.y += n;
      }
      function wn(t, e) {
        var n = t.page, i = t.client, r = e.x, o = e.y;
        n.x += r, n.y += o, i.x += r, i.y += o;
      }
      Kn.offsetBy = "";
      var Pr = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t) {
        t.Interaction.prototype.offsetBy = Rr;
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
      } } }, Qn = Pr, Mr = function() {
        function t(e) {
          v(this, t), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e;
        }
        return w(t, [{ key: "start", value: function(e) {
          var n = this.interaction, i = tn(n);
          if (!i || !i.enabled) return !1;
          var r = n.coords.velocity.client, o = Ie(r.x, r.y), a = this.modification || (this.modification = new bn(n));
          if (a.copyFrom(n.modification), this.t0 = n._now(), this.allowResume = i.allowResume, this.v0 = o, this.currentOffset = { x: 0, y: 0 }, this.startCoords = n.coords.cur.page, this.modifierArg = a.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - n.coords.cur.timeStamp < 50 && o > i.minSpeed && o > i.endSpeed) this.startInertia();
          else {
            if (a.result = a.setAll(this.modifierArg), !a.result.changed) return !1;
            this.startSmoothEnd();
          }
          return n.modification.result.rect = null, n.offsetBy(this.targetOffset), n._doPhase({ interaction: n, event: e, phase: "inertiastart" }), n.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), n.modification.result.rect = null, this.active = !0, n.simulation = this, !0;
        } }, { key: "startInertia", value: function() {
          var e = this, n = this.interaction.coords.velocity.client, i = tn(this.interaction), r = i.resistance, o = -Math.log(i.endSpeed / this.v0) / r;
          this.targetOffset = { x: (n.x - o) / r, y: (n.y - o) / r }, this.te = o, this.lambda_v0 = r / this.v0, this.one_ve_v0 = 1 - i.endSpeed / this.v0;
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
          this.timeout = ft.request(function() {
            n.active && e();
          });
        } }, { key: "inertiaTick", value: function() {
          var e, n, i, r, o, a, l, u = this, g = this.interaction, f = tn(g).resistance, m = (g._now() - this.t0) / 1e3;
          if (m < this.te) {
            var x, T = 1 - (Math.exp(-f * m) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (e = 0, n = 0, i = this.targetOffset.x, r = this.targetOffset.y, o = this.modifiedOffset.x, a = this.modifiedOffset.y, x = { x: ei(l = T, e, i, o), y: ei(l, n, r, a) }) : x = { x: this.targetOffset.x * T, y: this.targetOffset.y * T };
            var z = { x: x.x - this.currentOffset.x, y: x.y - this.currentOffset.y };
            this.currentOffset.x += z.x, this.currentOffset.y += z.y, g.offsetBy(z), g.move(), this.onNextFrame(function() {
              return u.inertiaTick();
            });
          } else g.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var e = this, n = this.interaction, i = n._now() - this.t0, r = tn(n).smoothEndDuration;
          if (i < r) {
            var o = { x: ti(i, 0, this.targetOffset.x, r), y: ti(i, 0, this.targetOffset.y, r) }, a = { x: o.x - this.currentOffset.x, y: o.y - this.currentOffset.y };
            this.currentOffset.x += a.x, this.currentOffset.y += a.y, n.offsetBy(a), n.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
              return e.smoothEndTick();
            });
          } else n.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(e) {
          var n = e.pointer, i = e.event, r = e.eventTarget, o = this.interaction;
          o.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o.updatePointer(n, i, r, !0), o._doPhase({ interaction: o, event: i, phase: "resume" }), Be(o.coords.prev, o.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = !1, this.interaction.simulation = null, ft.cancel(this.timeout);
        } }]), t;
      }();
      function tn(t) {
        var e = t.interactable, n = t.prepared;
        return e && e.options && n.name && e.options[n.name].inertia;
      }
      var Dr = { id: "inertia", before: ["modifiers", "actions"], install: function(t) {
        var e = t.defaults;
        t.usePlugin(Qn), t.usePlugin(Gn), t.actions.phases.inertiastart = !0, t.actions.phases.resume = !0, e.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.inertia = new Mr(e);
      }, "interactions:before-action-end": function(t) {
        var e = t.interaction, n = t.event;
        return (!e._interacting || e.simulation || !e.inertia.start(n)) && null;
      }, "interactions:down": function(t) {
        var e = t.interaction, n = t.eventTarget, i = e.inertia;
        if (i.active) for (var r = n; b.element(r); ) {
          if (r === e.element) {
            i.resume(t);
            break;
          }
          r = Pe(r);
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction.inertia;
        e.active && e.stop();
      }, "interactions:before-action-resume": function(t) {
        var e = t.interaction.modification;
        e.stop(t), e.start(t, t.interaction.coords.cur.page), e.applyToInteraction(t);
      }, "interactions:before-action-inertiastart": function(t) {
        return t.interaction.modification.setAndApply(t);
      }, "interactions:action-resume": jt, "interactions:action-inertiastart": jt, "interactions:after-action-inertiastart": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:after-action-resume": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      } } };
      function ei(t, e, n, i) {
        var r = 1 - t;
        return r * r * e + 2 * r * t * n + t * t * i;
      }
      function ti(t, e, n, i) {
        return -n * (t /= i) * (t - 2) + e;
      }
      var Cr = Dr;
      function ni(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          if (t.immediatePropagationStopped) break;
          i(t);
        }
      }
      var ii = function() {
        function t(e) {
          v(this, t), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = R({}, e || {});
        }
        return w(t, [{ key: "fire", value: function(e) {
          var n, i = this.global;
          (n = this.types[e.type]) && ni(e, n), !e.propagationStopped && i && (n = i[e.type]) && ni(e, n);
        } }, { key: "on", value: function(e, n) {
          var i = we(e, n);
          for (e in i) this.types[e] = Qe(this.types[e] || [], i[e]);
        } }, { key: "off", value: function(e, n) {
          var i = we(e, n);
          for (e in i) {
            var r = this.types[e];
            if (r && r.length) for (var o = 0, a = i[e]; o < a.length; o++) {
              var l = a[o], u = r.indexOf(l);
              u !== -1 && r.splice(u, 1);
            }
          }
        } }, { key: "getRect", value: function(e) {
          return null;
        } }]), t;
      }(), Or = function() {
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
      function Ht(t) {
        return b.object(t) ? { capture: !!t.capture, passive: !!t.passive } : { capture: !!t, passive: !1 };
      }
      function nn(t, e) {
        return t === e || (typeof t == "boolean" ? !!e.capture === t && !e.passive : !!t.capture == !!e.capture && !!t.passive == !!e.passive);
      }
      var Ar = { id: "events", install: function(t) {
        var e, n = [], i = {}, r = [], o = { add: a, remove: l, addDelegate: function(f, m, x, T, z) {
          var _ = Ht(z);
          if (!i[x]) {
            i[x] = [];
            for (var O = 0; O < r.length; O++) {
              var M = r[O];
              a(M, x, u), a(M, x, g, !0);
            }
          }
          var F = i[x], G = Ke(F, function(ne) {
            return ne.selector === f && ne.context === m;
          });
          G || (G = { selector: f, context: m, listeners: [] }, F.push(G)), G.listeners.push({ func: T, options: _ });
        }, removeDelegate: function(f, m, x, T, z) {
          var _, O = Ht(z), M = i[x], F = !1;
          if (M)
            for (_ = M.length - 1; _ >= 0; _--) {
              var G = M[_];
              if (G.selector === f && G.context === m) {
                for (var ne = G.listeners, q = ne.length - 1; q >= 0; q--) {
                  var K = ne[q];
                  if (K.func === T && nn(K.options, O)) {
                    ne.splice(q, 1), ne.length || (M.splice(_, 1), l(m, x, u), l(m, x, g, !0)), F = !0;
                    break;
                  }
                }
                if (F) break;
              }
            }
        }, delegateListener: u, delegateUseCapture: g, delegatedEvents: i, documents: r, targets: n, supportsOptions: !1, supportsPassive: !1 };
        function a(f, m, x, T) {
          if (f.addEventListener) {
            var z = Ht(T), _ = Ke(n, function(O) {
              return O.eventTarget === f;
            });
            _ || (_ = { eventTarget: f, events: {} }, n.push(_)), _.events[m] || (_.events[m] = []), Ke(_.events[m], function(O) {
              return O.func === x && nn(O.options, z);
            }) || (f.addEventListener(m, x, o.supportsOptions ? z : z.capture), _.events[m].push({ func: x, options: z }));
          }
        }
        function l(f, m, x, T) {
          if (f.addEventListener && f.removeEventListener) {
            var z = Ue(n, function(je) {
              return je.eventTarget === f;
            }), _ = n[z];
            if (_ && _.events) if (m !== "all") {
              var O = !1, M = _.events[m];
              if (M) {
                if (x === "all") {
                  for (var F = M.length - 1; F >= 0; F--) {
                    var G = M[F];
                    l(f, m, G.func, G.options);
                  }
                  return;
                }
                for (var ne = Ht(T), q = 0; q < M.length; q++) {
                  var K = M[q];
                  if (K.func === x && nn(K.options, ne)) {
                    f.removeEventListener(m, x, o.supportsOptions ? ne : ne.capture), M.splice(q, 1), M.length === 0 && (delete _.events[m], O = !0);
                    break;
                  }
                }
              }
              O && !Object.keys(_.events).length && n.splice(z, 1);
            } else for (m in _.events) _.events.hasOwnProperty(m) && l(f, m, "all");
          }
        }
        function u(f, m) {
          for (var x = Ht(m), T = new Or(f), z = i[f.type], _ = Fe(f)[0], O = _; b.element(O); ) {
            for (var M = 0; M < z.length; M++) {
              var F = z[M], G = F.selector, ne = F.context;
              if (pe(O, G) && V(ne, _) && V(ne, O)) {
                var q = F.listeners;
                T.currentTarget = O;
                for (var K = 0; K < q.length; K++) {
                  var je = q[K];
                  nn(je.options, x) && je.func(T);
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
          var i = n[e], r = En[i](t);
          if (r) return r;
        }
        return null;
      }, simulationResume: function(t) {
        var e = t.pointerType, n = t.eventType, i = t.eventTarget, r = t.scope;
        if (!/down|start/i.test(n)) return null;
        for (var o = 0, a = r.interactions.list; o < a.length; o++) {
          var l = a[o], u = i;
          if (l.simulation && l.simulation.allowResume && l.pointerType === e) for (; u; ) {
            if (u === l.element) return l;
            u = Pe(u);
          }
        }
        return null;
      }, mouseOrPen: function(t) {
        var e, n = t.pointerId, i = t.pointerType, r = t.eventType, o = t.scope;
        if (i !== "mouse" && i !== "pen") return null;
        for (var a = 0, l = o.interactions.list; a < l.length; a++) {
          var u = l[a];
          if (u.pointerType === i) {
            if (u.simulation && !ri(u, n)) continue;
            if (u.interacting()) return u;
            e || (e = u);
          }
        }
        if (e) return e;
        for (var g = 0, f = o.interactions.list; g < f.length; g++) {
          var m = f[g];
          if (!(m.pointerType !== i || /down/i.test(r) && m.simulation)) return m;
        }
        return null;
      }, hasPointer: function(t) {
        for (var e = t.pointerId, n = 0, i = t.scope.interactions.list; n < i.length; n++) {
          var r = i[n];
          if (ri(r, e)) return r;
        }
        return null;
      }, idle: function(t) {
        for (var e = t.pointerType, n = 0, i = t.scope.interactions.list; n < i.length; n++) {
          var r = i[n];
          if (r.pointers.length === 1) {
            var o = r.interactable;
            if (o && (!o.options.gesture || !o.options.gesture.enabled)) continue;
          } else if (r.pointers.length >= 2) continue;
          if (!r.interacting() && e === r.pointerType) return r;
        }
        return null;
      } };
      function ri(t, e) {
        return t.pointers.some(function(n) {
          return n.id === e;
        });
      }
      var Ir = En, Sn = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function oi(t, e) {
        return function(n) {
          var i = e.interactions.list, r = De(n), o = Fe(n), a = o[0], l = o[1], u = [];
          if (/^touch/.test(n.type)) {
            e.prevTouchTime = e.now();
            for (var g = 0, f = n.changedTouches; g < f.length; g++) {
              var m = f[g], x = { pointer: m, pointerId: W(m), pointerType: r, eventType: n.type, eventTarget: a, curEventTarget: l, scope: e }, T = ai(x);
              u.push([x.pointer, x.eventTarget, x.curEventTarget, T]);
            }
          } else {
            var z = !1;
            if (!de.supportsPointerEvent && /mouse/.test(n.type)) {
              for (var _ = 0; _ < i.length && !z; _++) z = i[_].pointerType !== "mouse" && i[_].pointerIsDown;
              z = z || e.now() - e.prevTouchTime < 500 || n.timeStamp === 0;
            }
            if (!z) {
              var O = { pointer: n, pointerId: W(n), pointerType: r, eventType: n.type, curEventTarget: l, eventTarget: a, scope: e }, M = ai(O);
              u.push([O.pointer, O.eventTarget, O.curEventTarget, M]);
            }
          }
          for (var F = 0; F < u.length; F++) {
            var G = u[F], ne = G[0], q = G[1], K = G[2];
            G[3][t](ne, n, q, K);
          }
        };
      }
      function ai(t) {
        var e = t.pointerType, n = t.scope, i = { interaction: Ir.search(t), searchDetails: t };
        return n.fire("interactions:find", i), i.interaction || n.interactions.new({ pointerType: e });
      }
      function zn(t, e) {
        var n = t.doc, i = t.scope, r = t.options, o = i.interactions.docEvents, a = i.events, l = a[e];
        for (var u in i.browser.isIOS && !r.events && (r.events = { passive: !1 }), a.delegatedEvents) l(n, u, a.delegateListener), l(n, u, a.delegateUseCapture, !0);
        for (var g = r && r.events, f = 0; f < o.length; f++) {
          var m = o[f];
          l(n, m.type, m.listener, g);
        }
      }
      var Br = { id: "core/interactions", install: function(t) {
        for (var e = {}, n = 0; n < Sn.length; n++) {
          var i = Sn[n];
          e[i] = oi(i, t);
        }
        var r, o = de.pEventTypes;
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
        (r = ae.PointerEvent ? [{ type: o.down, listener: a }, { type: o.down, listener: e.pointerDown }, { type: o.move, listener: e.pointerMove }, { type: o.up, listener: e.pointerUp }, { type: o.cancel, listener: e.pointerUp }] : [{ type: "mousedown", listener: e.pointerDown }, { type: "mousemove", listener: e.pointerMove }, { type: "mouseup", listener: e.pointerUp }, { type: "touchstart", listener: a }, { type: "touchstart", listener: e.pointerDown }, { type: "touchmove", listener: e.pointerMove }, { type: "touchend", listener: e.pointerUp }, { type: "touchcancel", listener: e.pointerUp }]).push({ type: "blur", listener: function(l) {
          for (var u = 0, g = t.interactions.list; u < g.length; u++)
            g[u].documentBlur(l);
        } }), t.prevTouchTime = 0, t.Interaction = function(l) {
          E(g, l);
          var u = re(g);
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
        }(_r), t.interactions = { list: [], new: function(l) {
          l.scopeFire = function(g, f) {
            return t.fire(g, f);
          };
          var u = new t.Interaction(l);
          return t.interactions.list.push(u), u;
        }, listeners: e, docEvents: r, pointerMoveTolerance: 1 }, t.usePlugin(Vn);
      }, listeners: { "scope:add-document": function(t) {
        return zn(t, "add");
      }, "scope:remove-document": function(t) {
        return zn(t, "remove");
      }, "interactable:unset": function(t, e) {
        for (var n = t.interactable, i = e.interactions.list.length - 1; i >= 0; i--) {
          var r = e.interactions.list[i];
          r.interactable === n && (r.stop(), e.fire("interactions:destroy", { interaction: r }), r.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(i, 1));
        }
      } }, onDocSignal: zn, doOnInteractions: oi, methodNames: Sn }, Fr = Br, pt = function(t) {
        return t[t.On = 0] = "On", t[t.Off = 1] = "Off", t;
      }(pt || {}), Lr = function() {
        function t(e, n, i, r) {
          v(this, t), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new ii(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n.actions, this.target = e, this._context = n.context || i, this._win = j(A(e) ? this._context : e), this._doc = this._win.document, this._scopeEvents = r, this.set(n);
        }
        return w(t, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(e, n) {
          return b.func(n.onstart) && this.on("".concat(e, "start"), n.onstart), b.func(n.onmove) && this.on("".concat(e, "move"), n.onmove), b.func(n.onend) && this.on("".concat(e, "end"), n.onend), b.func(n.oninertiastart) && this.on("".concat(e, "inertiastart"), n.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(e, n, i) {
          var r, o = this, a = (r = this._actions.map[e]) == null ? void 0 : r.filterEventType, l = function(u) {
            return (a == null || a(u)) && Qt(u, o._actions);
          };
          (b.array(n) || b.object(n)) && this._onOff(pt.Off, e, n, void 0, l), (b.array(i) || b.object(i)) && this._onOff(pt.On, e, i, void 0, l);
        } }, { key: "setPerAction", value: function(e, n) {
          var i = this._defaults;
          for (var r in n) {
            var o = r, a = this.options[e], l = n[o];
            o === "listeners" && this.updatePerActionListeners(e, a.listeners, l), b.array(l) ? a[o] = at(l) : b.plainObject(l) ? (a[o] = R(a[o] || {}, Tt(l)), b.object(i.perAction[o]) && "enabled" in i.perAction[o] && (a[o].enabled = l.enabled !== !1)) : b.bool(l) && b.object(i.perAction[o]) ? a[o].enabled = l : a[o] = l;
          }
        } }, { key: "getRect", value: function(e) {
          return e = e || (b.element(this.target) ? this.target : null), b.string(this.target) && (e = e || this._context.querySelector(this.target)), le(e);
        } }, { key: "rectChecker", value: function(e) {
          var n = this;
          return b.func(e) ? (this.getRect = function(i) {
            var r = R({}, e.apply(n, i));
            return "width" in r || (r.width = r.right - r.left, r.height = r.bottom - r.top), r;
          }, this) : e === null ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(e, n) {
          if (A(n) || b.object(n)) {
            for (var i in this.options[e] = n, this._actions.map) this.options[i][e] = n;
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
        } }, { key: "testIgnoreAllow", value: function(e, n, i) {
          return !this.testIgnore(e.ignoreFrom, n, i) && this.testAllow(e.allowFrom, n, i);
        } }, { key: "testAllow", value: function(e, n, i) {
          return !e || !!b.element(i) && (b.string(e) ? I(i, e, n) : !!b.element(e) && V(e, i));
        } }, { key: "testIgnore", value: function(e, n, i) {
          return !(!e || !b.element(i)) && (b.string(e) ? I(i, e, n) : !!b.element(e) && V(e, i));
        } }, { key: "fire", value: function(e) {
          return this.events.fire(e), this;
        } }, { key: "_onOff", value: function(e, n, i, r, o) {
          b.object(n) && !b.array(n) && (r = i, i = null);
          var a = we(n, i, o);
          for (var l in a) {
            l === "wheel" && (l = de.wheelEvent);
            for (var u = 0, g = a[l]; u < g.length; u++) {
              var f = g[u];
              Qt(l, this._actions) ? this.events[e === pt.On ? "on" : "off"](l, f) : b.string(this.target) ? this._scopeEvents[e === pt.On ? "addDelegate" : "removeDelegate"](this.target, this._context, l, f, r) : this._scopeEvents[e === pt.On ? "add" : "remove"](this.target, l, f, r);
            }
          }
          return this;
        } }, { key: "on", value: function(e, n, i) {
          return this._onOff(pt.On, e, n, i);
        } }, { key: "off", value: function(e, n, i) {
          return this._onOff(pt.Off, e, n, i);
        } }, { key: "set", value: function(e) {
          var n = this._defaults;
          for (var i in b.object(e) || (e = {}), this.options = Tt(n.base), this._actions.methodDict) {
            var r = i, o = this._actions.methodDict[r];
            this.options[r] = {}, this.setPerAction(r, R(R({}, n.perAction), n.actions[r])), this[o](e[r]);
          }
          for (var a in e) a !== "getRect" ? b.func(this[a]) && this[a](e[a]) : this.rectChecker(e.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (b.string(this.target)) for (var e in this._scopeEvents.delegatedEvents) for (var n = this._scopeEvents.delegatedEvents[e], i = n.length - 1; i >= 0; i--) {
            var r = n[i], o = r.selector, a = r.context, l = r.listeners;
            o === this.target && a === this._context && n.splice(i, 1);
            for (var u = l.length - 1; u >= 0; u--) this._scopeEvents.removeDelegate(this.target, this._context, e, l[u][0], l[u][1]);
          }
          else this._scopeEvents.remove(this.target, "all");
        } }]), t;
      }(), jr = function() {
        function t(e) {
          var n = this;
          v(this, t), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e, e.addListeners({ "interactable:unset": function(i) {
            var r = i.interactable, o = r.target, a = b.string(o) ? n.selectorMap[o] : o[n.scope.id], l = Ue(a, function(u) {
              return u === r;
            });
            a.splice(l, 1);
          } });
        }
        return w(t, [{ key: "new", value: function(e, n) {
          n = R(n || {}, { actions: this.scope.actions });
          var i = new this.scope.Interactable(e, n, this.scope.document, this.scope.events);
          return this.scope.addDocument(i._doc), this.list.push(i), b.string(e) ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(i)) : (i.target[this.scope.id] || Object.defineProperty(e, this.scope.id, { value: [], configurable: !0 }), e[this.scope.id].push(i)), this.scope.fire("interactable:new", { target: e, options: n, interactable: i, win: this.scope._win }), i;
        } }, { key: "getExisting", value: function(e, n) {
          var i = n && n.context || this.scope.document, r = b.string(e), o = r ? this.selectorMap[e] : e[this.scope.id];
          if (o) return Ke(o, function(a) {
            return a._context === i && (r || a.inContext(e));
          });
        } }, { key: "forEachMatch", value: function(e, n) {
          for (var i = 0, r = this.list; i < r.length; i++) {
            var o = r[i], a = void 0;
            if ((b.string(o.target) ? b.element(e) && pe(e, o.target) : e === o.target) && o.inContext(e) && (a = n(o)), a !== void 0) return a;
          }
        } }]), t;
      }(), Hr = function() {
        function t() {
          var e = this;
          v(this, t), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = de, this.defaults = Tt(Un), this.Eventable = ii, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = function(i) {
            var r = function o(a, l) {
              var u = i.interactables.getExisting(a, l);
              return u || ((u = i.interactables.new(a, l)).events.global = o.globalEvents), u;
            };
            return r.getPointerAverage = ce, r.getTouchBBox = J, r.getTouchDistance = L, r.getTouchAngle = Se, r.getElementRect = le, r.getElementClientRect = se, r.matchesSelector = pe, r.closest = Re, r.globalEvents = {}, r.version = "1.10.27", r.scope = i, r.use = function(o, a) {
              return this.scope.usePlugin(o, a), this;
            }, r.isSet = function(o, a) {
              return !!this.scope.interactables.get(o, a && a.context);
            }, r.on = Lt(function(o, a, l) {
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
            }, "The interact.on() method is being deprecated"), r.off = Lt(function(o, a, l) {
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
            }, "The interact.off() method is being deprecated"), r.debug = function() {
              return this.scope;
            }, r.supportsTouch = function() {
              return de.supportsTouch;
            }, r.supportsPointerEvent = function() {
              return de.supportsPointerEvent;
            }, r.stop = function() {
              for (var o = 0, a = this.scope.interactions.list; o < a.length; o++) a[o].stop();
              return this;
            }, r.pointerMoveTolerance = function(o) {
              return b.number(o) ? (this.scope.interactions.pointerMoveTolerance = o, this) : this.scope.interactions.pointerMoveTolerance;
            }, r.addDocument = function(o, a) {
              this.scope.addDocument(o, a);
            }, r.removeDocument = function(o) {
              this.scope.removeDocument(o);
            }, r;
          }(this), this.InteractEvent = xn, this.Interactable = void 0, this.interactables = new jr(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(i) {
            return e.removeDocument(i.target);
          };
          var n = this;
          this.Interactable = function(i) {
            E(o, i);
            var r = re(o);
            function o() {
              return v(this, o), r.apply(this, arguments);
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
          }(Lr);
        }
        return w(t, [{ key: "addListeners", value: function(e, n) {
          this.listenerMaps.push({ id: n, map: e });
        } }, { key: "fire", value: function(e, n) {
          for (var i = 0, r = this.listenerMaps; i < r.length; i++) {
            var o = r[i].map[e];
            if (o && o(n, this, e) === !1) return !1;
          }
        } }, { key: "init", value: function(e) {
          return this.isInitialized ? this : function(n, i) {
            return n.isInitialized = !0, b.window(i) && $(i), ae.init(i), de.init(i), ft.init(i), n.window = i, n.document = i.document, n.usePlugin(Fr), n.usePlugin(Ar), n;
          }(this, e);
        } }, { key: "pluginIsInstalled", value: function(e) {
          var n = e.id;
          return n ? !!this._plugins.map[n] : this._plugins.list.indexOf(e) !== -1;
        } }, { key: "usePlugin", value: function(e, n) {
          if (!this.isInitialized) return this;
          if (this.pluginIsInstalled(e)) return this;
          if (e.id && (this._plugins.map[e.id] = e), this._plugins.list.push(e), e.install && e.install(this, n), e.listeners && e.before) {
            for (var i = 0, r = this.listenerMaps.length, o = e.before.reduce(function(l, u) {
              return l[u] = !0, l[si(u)] = !0, l;
            }, {}); i < r; i++) {
              var a = this.listenerMaps[i].id;
              if (a && (o[a] || o[si(a)])) break;
            }
            this.listenerMaps.splice(i, 0, { id: e.id, map: e.listeners });
          } else e.listeners && this.listenerMaps.push({ id: e.id, map: e.listeners });
          return this;
        } }, { key: "addDocument", value: function(e, n) {
          if (this.getDocIndex(e) !== -1) return !1;
          var i = j(e);
          n = n ? R({}, n) : {}, this.documents.push({ doc: e, options: n }), this.events.documents.push(e), e !== this.document && this.events.add(i, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: e, window: i, scope: this, options: n });
        } }, { key: "removeDocument", value: function(e) {
          var n = this.getDocIndex(e), i = j(e), r = this.documents[n].options;
          this.events.remove(i, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", { doc: e, window: i, scope: this, options: r });
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
      function si(t) {
        return t && t.replace(/\/.*$/, "");
      }
      var li = new Hr(), Le = li.interactStatic, $r = typeof globalThis < "u" ? globalThis : window;
      li.init($r);
      var Wr = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(t) {
        var e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(i) {
          var r = i[0], o = i[1];
          return r in t || o in t;
        }), n = function(i, r) {
          for (var o = t.range, a = t.limits, l = a === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : a, u = t.offset, g = u === void 0 ? { x: 0, y: 0 } : u, f = { range: o, grid: t, x: null, y: null }, m = 0; m < e.length; m++) {
            var x = e[m], T = x[0], z = x[1], _ = Math.round((i - g.x) / t[T]), O = Math.round((r - g.y) / t[z]);
            f[T] = Math.max(l.left, Math.min(l.right, _ * t[T] + g.x)), f[z] = Math.max(l.top, Math.min(l.bottom, O * t[z] + g.y));
          }
          return f;
        };
        return n.grid = t, n.coordFields = e, n;
      } }), qr = { id: "snappers", install: function(t) {
        var e = t.interactStatic;
        e.snappers = R(e.snappers || {}, Wr), e.createSnapGrid = e.snappers.grid;
      } }, Nr = qr, Xr = { start: function(t) {
        var e = t.state, n = t.rect, i = t.edges, r = t.pageCoords, o = e.options, a = o.ratio, l = o.enabled, u = e.options, g = u.equalDelta, f = u.modifiers;
        a === "preserve" && (a = n.width / n.height), e.startCoords = R({}, r), e.startRect = R({}, n), e.ratio = a, e.equalDelta = g;
        var m = e.linkedEdges = { top: i.top || i.left && !i.bottom, left: i.left || i.top && !i.right, bottom: i.bottom || i.right && !i.top, right: i.right || i.bottom && !i.left };
        if (e.xIsPrimaryAxis = !(!i.left && !i.right), e.equalDelta) {
          var x = (m.left ? 1 : -1) * (m.top ? 1 : -1);
          e.edgeSign = { x, y: x };
        } else e.edgeSign = { x: m.left ? -1 : 1, y: m.top ? -1 : 1 };
        if (l !== !1 && R(i, m), f != null && f.length) {
          var T = new bn(t.interaction);
          T.copyFrom(t.interaction.modification), T.prepareStates(f), e.subModification = T, T.startAll(c({}, t));
        }
      }, set: function(t) {
        var e = t.state, n = t.rect, i = t.coords, r = e.linkedEdges, o = R({}, i), a = e.equalDelta ? Yr : Vr;
        if (R(t.edges, r), a(e, e.xIsPrimaryAxis, i, n), !e.subModification) return null;
        var l = R({}, n);
        Te(r, l, { x: i.x - o.x, y: i.y - o.y });
        var u = e.subModification.setAll(c(c({}, t), {}, { rect: l, edges: r, pageCoords: i, prevCoords: i, prevRect: l })), g = u.delta;
        return u.changed && (a(e, Math.abs(g.x) > Math.abs(g.y), u.coords, u.rect), R(i, u.coords)), u.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
      function Yr(t, e, n) {
        var i = t.startCoords, r = t.edgeSign;
        e ? n.y = i.y + (n.x - i.x) * r.y : n.x = i.x + (n.y - i.y) * r.x;
      }
      function Vr(t, e, n, i) {
        var r = t.startRect, o = t.startCoords, a = t.ratio, l = t.edgeSign;
        if (e) {
          var u = i.width / a;
          n.y = o.y + (u - r.height) * l.y;
        } else {
          var g = i.height * a;
          n.x = o.x + (g - r.width) * l.x;
        }
      }
      var Gr = dt(Xr, "aspectRatio"), ci = function() {
      };
      ci._defaults = {};
      var rn = ci;
      function mt(t, e, n) {
        return b.func(t) ? Ne(t, e.interactable, e.element, [n.x, n.y, e]) : Ne(t, e.interactable, e.element);
      }
      var on = { start: function(t) {
        var e = t.rect, n = t.startOffset, i = t.state, r = t.interaction, o = t.pageCoords, a = i.options, l = a.elementRect, u = R({ left: 0, top: 0, right: 0, bottom: 0 }, a.offset || {});
        if (e && l) {
          var g = mt(a.restriction, r, o);
          if (g) {
            var f = g.right - g.left - e.width, m = g.bottom - g.top - e.height;
            f < 0 && (u.left += f, u.right += f), m < 0 && (u.top += m, u.bottom += m);
          }
          u.left += n.left - e.width * l.left, u.top += n.top - e.height * l.top, u.right += n.right - e.width * (1 - l.right), u.bottom += n.bottom - e.height * (1 - l.bottom);
        }
        i.offset = u;
      }, set: function(t) {
        var e = t.coords, n = t.interaction, i = t.state, r = i.options, o = i.offset, a = mt(r.restriction, n, e);
        if (a) {
          var l = function(u) {
            return !u || "left" in u && "top" in u || ((u = R({}, u)).left = u.x || 0, u.top = u.y || 0, u.right = u.right || u.left + u.width, u.bottom = u.bottom || u.top + u.height), u;
          }(a);
          e.x = Math.max(Math.min(l.right - o.right, e.x), l.left + o.left), e.y = Math.max(Math.min(l.bottom - o.bottom, e.y), l.top + o.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, Ur = dt(on, "restrict"), ui = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, fi = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function di(t, e) {
        for (var n = 0, i = ["top", "left", "bottom", "right"]; n < i.length; n++) {
          var r = i[n];
          r in t || (t[r] = e[r]);
        }
        return t;
      }
      var $t = { noInner: ui, noOuter: fi, start: function(t) {
        var e, n = t.interaction, i = t.startOffset, r = t.state, o = r.options;
        o && (e = xe(mt(o.offset, n, n.coords.start.page))), e = e || { x: 0, y: 0 }, r.offset = { top: e.y + i.top, left: e.x + i.left, bottom: e.y - i.bottom, right: e.x - i.right };
      }, set: function(t) {
        var e = t.coords, n = t.edges, i = t.interaction, r = t.state, o = r.offset, a = r.options;
        if (n) {
          var l = R({}, e), u = mt(a.inner, i, l) || {}, g = mt(a.outer, i, l) || {};
          di(u, ui), di(g, fi), n.top ? e.y = Math.min(Math.max(g.top + o.top, l.y), u.top + o.top) : n.bottom && (e.y = Math.max(Math.min(g.bottom + o.bottom, l.y), u.bottom + o.bottom)), n.left ? e.x = Math.min(Math.max(g.left + o.left, l.x), u.left + o.left) : n.right && (e.x = Math.max(Math.min(g.right + o.right, l.x), u.right + o.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, Kr = dt($t, "restrictEdges"), Jr = R({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(t) {
      } }, on.defaults), Zr = dt({ start: on.start, set: on.set, defaults: Jr }, "restrictRect"), Qr = { width: -1 / 0, height: -1 / 0 }, eo = { width: 1 / 0, height: 1 / 0 }, to = dt({ start: function(t) {
        return $t.start(t);
      }, set: function(t) {
        var e = t.interaction, n = t.state, i = t.rect, r = t.edges, o = n.options;
        if (r) {
          var a = D(mt(o.min, e, t.coords)) || Qr, l = D(mt(o.max, e, t.coords)) || eo;
          n.options = { endOnly: o.endOnly, inner: R({}, $t.noInner), outer: R({}, $t.noOuter) }, r.top ? (n.options.inner.top = i.bottom - a.height, n.options.outer.top = i.bottom - l.height) : r.bottom && (n.options.inner.bottom = i.top + a.height, n.options.outer.bottom = i.top + l.height), r.left ? (n.options.inner.left = i.right - a.width, n.options.outer.left = i.right - l.width) : r.right && (n.options.inner.right = i.left + a.width, n.options.outer.right = i.left + l.width), $t.set(t), n.options = o;
        }
      }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), Tn = { start: function(t) {
        var e, n = t.interaction, i = t.interactable, r = t.element, o = t.rect, a = t.state, l = t.startOffset, u = a.options, g = u.offsetWithOrigin ? function(x) {
          var T = x.interaction.element, z = xe(Ne(x.state.options.origin, null, null, [T])), _ = z || ke(x.interactable, T, x.interaction.prepared.name);
          return _;
        }(t) : { x: 0, y: 0 };
        if (u.offset === "startCoords") e = { x: n.coords.start.page.x, y: n.coords.start.page.y };
        else {
          var f = Ne(u.offset, i, r, [n]);
          (e = xe(f) || { x: 0, y: 0 }).x += g.x, e.y += g.y;
        }
        var m = u.relativePoints;
        a.offsets = o && m && m.length ? m.map(function(x, T) {
          return { index: T, relativePoint: x, x: l.left - o.width * x.x + e.x, y: l.top - o.height * x.y + e.y };
        }) : [{ index: 0, relativePoint: null, x: e.x, y: e.y }];
      }, set: function(t) {
        var e = t.interaction, n = t.coords, i = t.state, r = i.options, o = i.offsets, a = ke(e.interactable, e.element, e.prepared.name), l = R({}, n), u = [];
        r.offsetWithOrigin || (l.x -= a.x, l.y -= a.y);
        for (var g = 0, f = o; g < f.length; g++) for (var m = f[g], x = l.x - m.x, T = l.y - m.y, z = 0, _ = r.targets.length; z < _; z++) {
          var O = r.targets[z], M = void 0;
          (M = b.func(O) ? O(x, T, e._proxy, m, z) : O) && u.push({ x: (b.number(M.x) ? M.x : x) + m.x, y: (b.number(M.y) ? M.y : T) + m.y, range: b.number(M.range) ? M.range : r.range, source: O, index: z, offset: m });
        }
        for (var F = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, G = 0; G < u.length; G++) {
          var ne = u[G], q = ne.range, K = ne.x - l.x, je = ne.y - l.y, me = Ie(K, je), Ve = me <= q;
          q === 1 / 0 && F.inRange && F.range !== 1 / 0 && (Ve = !1), F.target && !(Ve ? F.inRange && q !== 1 / 0 ? me / q < F.distance / F.range : q === 1 / 0 && F.range !== 1 / 0 || me < F.distance : !F.inRange && me < F.distance) || (F.target = ne, F.distance = me, F.range = q, F.inRange = Ve, F.delta.x = K, F.delta.y = je);
        }
        return F.inRange && (n.x = F.target.x, n.y = F.target.y), i.closest = F, F;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, no = dt(Tn, "snap"), an = { start: function(t) {
        var e = t.state, n = t.edges, i = e.options;
        if (!n) return null;
        t.state = { options: { targets: null, relativePoints: [{ x: n.left ? 0 : 1, y: n.top ? 0 : 1 }], offset: i.offset || "self", origin: { x: 0, y: 0 }, range: i.range } }, e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]], Tn.start(t), e.offsets = t.state.offsets, t.state = e;
      }, set: function(t) {
        var e = t.interaction, n = t.state, i = t.coords, r = n.options, o = n.offsets, a = { x: i.x - o[0].x, y: i.y - o[0].y };
        n.options = R({}, r), n.options.targets = [];
        for (var l = 0, u = r.targets || []; l < u.length; l++) {
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
        return n.options = r, O;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, io = dt(an, "snapSize"), kn = { aspectRatio: Gr, restrictEdges: Kr, restrict: Ur, restrictRect: Zr, restrictSize: to, snapEdges: dt({ start: function(t) {
        var e = t.edges;
        return e ? (t.state.targetFields = t.state.targetFields || [[e.left ? "left" : "right", e.top ? "top" : "bottom"]], an.start(t)) : null;
      }, set: an.set, defaults: R(Tt(an.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: no, snapSize: io, spring: rn, avoid: rn, transform: rn, rubberband: rn }, ro = { id: "modifiers", install: function(t) {
        var e = t.interactStatic;
        for (var n in t.usePlugin(Gn), t.usePlugin(Nr), e.modifiers = kn, kn) {
          var i = kn[n], r = i._defaults, o = i._methods;
          r._methods = o, t.defaults.perAction[n] = r;
        }
      } }, oo = ro, pi = function(t) {
        E(n, t);
        var e = re(n);
        function n(i, r, o, a, l, u) {
          var g;
          if (v(this, n), qe(ye(g = e.call(this, l)), o), o !== r && qe(ye(g), r), g.timeStamp = u, g.originalEvent = o, g.type = i, g.pointerId = W(r), g.pointerType = De(r), g.target = a, g.currentTarget = null, i === "tap") {
            var f = l.getPointerIndex(r);
            g.dt = g.timeStamp - l.pointers[f].downTime;
            var m = g.timeStamp - l.tapTime;
            g.double = !!l.prevTap && l.prevTap.type !== "doubletap" && l.prevTap.target === g.target && m < 500;
          } else i === "doubletap" && (g.dt = r.timeStamp - l.tapTime, g.double = !0);
          return g;
        }
        return w(n, [{ key: "_subtractOrigin", value: function(i) {
          var r = i.x, o = i.y;
          return this.pageX -= r, this.pageY -= o, this.clientX -= r, this.clientY -= o, this;
        } }, { key: "_addOrigin", value: function(i) {
          var r = i.x, o = i.y;
          return this.pageX += r, this.pageY += o, this.clientX += r, this.clientY += o, this;
        } }, { key: "preventDefault", value: function() {
          this.originalEvent.preventDefault();
        } }]), n;
      }(Xe), Wt = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t) {
        t.pointerEvents = Wt, t.defaults.actions.pointerEvents = Wt.defaults, R(t.actions.phaselessTypes, Wt.types);
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.prevTap = null, e.tapTime = 0;
      }, "interactions:update-pointer": function(t) {
        var e = t.down, n = t.pointerInfo;
        !e && n.hold || (n.hold = { duration: 1 / 0, timeout: null });
      }, "interactions:move": function(t, e) {
        var n = t.interaction, i = t.pointer, r = t.event, o = t.eventTarget;
        t.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && _n(t), ht({ interaction: n, pointer: i, event: r, eventTarget: o, type: "move" }, e));
      }, "interactions:down": function(t, e) {
        (function(n, i) {
          for (var r = n.interaction, o = n.pointer, a = n.event, l = n.eventTarget, u = n.pointerIndex, g = r.pointers[u].hold, f = U(l), m = { interaction: r, pointer: o, event: a, eventTarget: l, type: "hold", targets: [], path: f, node: null }, x = 0; x < f.length; x++) {
            var T = f[x];
            m.node = T, i.fire("pointerEvents:collect-targets", m);
          }
          if (m.targets.length) {
            for (var z = 1 / 0, _ = 0, O = m.targets; _ < O.length; _++) {
              var M = O[_].eventable.options.holdDuration;
              M < z && (z = M);
            }
            g.duration = z, g.timeout = setTimeout(function() {
              ht({ interaction: r, eventTarget: l, pointer: o, event: a, type: "hold" }, i);
            }, z);
          }
        })(t, e), ht(t, e);
      }, "interactions:up": function(t, e) {
        _n(t), ht(t, e), function(n, i) {
          var r = n.interaction, o = n.pointer, a = n.event, l = n.eventTarget;
          r.pointerWasMoved || ht({ interaction: r, eventTarget: l, pointer: o, event: a, type: "tap" }, i);
        }(t, e);
      }, "interactions:cancel": function(t, e) {
        _n(t), ht(t, e);
      } }, PointerEvent: pi, fire: ht, collectEventTargets: hi, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
      function ht(t, e) {
        var n = t.interaction, i = t.pointer, r = t.event, o = t.eventTarget, a = t.type, l = t.targets, u = l === void 0 ? hi(t, e) : l, g = new pi(a, i, r, o, n, e.now());
        e.fire("pointerEvents:new", { pointerEvent: g });
        for (var f = { interaction: n, pointer: i, event: r, eventTarget: o, targets: u, type: a, pointerEvent: g }, m = 0; m < u.length; m++) {
          var x = u[m];
          for (var T in x.props || {}) g[T] = x.props[T];
          var z = ke(x.eventable, x.node);
          if (g._subtractOrigin(z), g.eventable = x.eventable, g.currentTarget = x.node, x.eventable.fire(g), g._addOrigin(z), g.immediatePropagationStopped || g.propagationStopped && m + 1 < u.length && u[m + 1].node !== g.currentTarget) break;
        }
        if (e.fire("pointerEvents:fired", f), a === "tap") {
          var _ = g.double ? ht({ interaction: n, pointer: i, event: r, eventTarget: o, type: "doubletap" }, e) : g;
          n.prevTap = _, n.tapTime = _.timeStamp;
        }
        return g;
      }
      function hi(t, e) {
        var n = t.interaction, i = t.pointer, r = t.event, o = t.eventTarget, a = t.type, l = n.getPointerIndex(i), u = n.pointers[l];
        if (a === "tap" && (n.pointerWasMoved || !u || u.downTarget !== o)) return [];
        for (var g = U(o), f = { interaction: n, pointer: i, event: r, eventTarget: o, type: a, path: g, targets: [], node: null }, m = 0; m < g.length; m++) {
          var x = g[m];
          f.node = x, e.fire("pointerEvents:collect-targets", f);
        }
        return a === "hold" && (f.targets = f.targets.filter(function(T) {
          var z, _;
          return T.eventable.options.holdDuration === ((z = n.pointers[l]) == null || (_ = z.hold) == null ? void 0 : _.duration);
        })), f.targets;
      }
      function _n(t) {
        var e = t.interaction, n = t.pointerIndex, i = e.pointers[n].hold;
        i && i.timeout && (clearTimeout(i.timeout), i.timeout = null);
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
        var n = t.interaction, i = t.pointerEvent, r = t.eventTarget, o = t.targets;
        if (i.type === "hold" && o.length) {
          var a = o[0].eventable.options.holdRepeatInterval;
          a <= 0 || (n.holdIntervalHandle = setTimeout(function() {
            e.pointerEvents.fire({ interaction: n, eventTarget: r, type: "hold", pointer: i, event: i }, e);
          }, a));
        }
      } }) }, co = lo, uo = { id: "pointer-events/interactableTargets", install: function(t) {
        var e = t.Interactable;
        e.prototype.pointerEvents = function(i) {
          return R(this.events.options, i), this;
        };
        var n = e.prototype._backCompatOption;
        e.prototype._backCompatOption = function(i, r) {
          var o = n.call(this, i, r);
          return o === this && (this.events.options[i] = r), o;
        };
      }, listeners: { "pointerEvents:collect-targets": function(t, e) {
        var n = t.targets, i = t.node, r = t.type, o = t.eventTarget;
        e.interactables.forEachMatch(i, function(a) {
          var l = a.events, u = l.options;
          l.types[r] && l.types[r].length && a.testIgnoreAllow(u, i, o) && n.push({ node: i, eventable: l, props: { interactable: a } });
        });
      }, "interactable:new": function(t) {
        var e = t.interactable;
        e.events.getRect = function(n) {
          return e.getRect(n);
        };
      }, "interactable:set": function(t, e) {
        var n = t.interactable, i = t.options;
        R(n.events.options, e.pointerEvents.defaults), R(n.events.options, i.pointerEvents || {});
      } } }, fo = uo, po = { id: "pointer-events", install: function(t) {
        t.usePlugin(ao), t.usePlugin(co), t.usePlugin(fo);
      } }, ho = po, go = { id: "reflow", install: function(t) {
        var e = t.Interactable;
        t.actions.phases.reflow = !0, e.prototype.reflow = function(n) {
          return function(i, r, o) {
            for (var a = i.getAllElements(), l = o.window.Promise, u = l ? [] : null, g = function() {
              var m = a[f], x = i.getRect(m);
              if (!x) return 1;
              var T, z = Ke(o.interactions.list, function(M) {
                return M.interacting() && M.interactable === i && M.element === m && M.prepared.name === r.name;
              });
              if (z) z.move(), u && (T = z._reflowPromise || new l(function(M) {
                z._reflowResolve = M;
              }));
              else {
                var _ = D(x), O = /* @__PURE__ */ function(M) {
                  return { coords: M, get page() {
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
                T = function(M, F, G, ne, q) {
                  var K = M.interactions.new({ pointerType: "reflow" }), je = { interaction: K, event: q, pointer: q, eventTarget: G, phase: "reflow" };
                  K.interactable = F, K.element = G, K.prevEvent = q, K.updatePointer(q, q, G, !0), Ze(K.coords.delta), gn(K.prepared, ne), K._doPhase(je);
                  var me = M.window, Ve = me.Promise, et = Ve ? new Ve(function(ct) {
                    K._reflowResolve = ct;
                  }) : void 0;
                  return K._reflowPromise = et, K.start(ne, F, G), K._interacting ? (K.move(je), K.end(q)) : (K.stop(), K._reflowResolve()), K.removePointer(q, q), et;
                }(o, i, m, r, O);
              }
              u && u.push(T);
            }, f = 0; f < a.length && !g(); f++) ;
            return u && l.all(u).then(function() {
              return i;
            });
          }(this, n, t);
        };
      }, listeners: { "interactions:stop": function(t, e) {
        var n = t.interaction;
        n.pointerType === "reflow" && (n._reflowResolve && n._reflowResolve(), function(i, r) {
          i.splice(i.indexOf(r), 1);
        }(e.interactions.list, n));
      } } }, vo = go;
      if (Le.use(Vn), Le.use(Qn), Le.use(ho), Le.use(Cr), Le.use(oo), Le.use(xr), Le.use(cr), Le.use(fr), Le.use(vo), Le.default = Le, y(s) === "object" && s) try {
        s.exports = Le;
      } catch {
      }
      return Le.default = Le, Le;
    });
  }(Xt, Xt.exports)), Xt.exports;
}
var ta = /* @__PURE__ */ ea();
const On = /* @__PURE__ */ Zo(ta), Ti = /* @__PURE__ */ In({
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
    const c = s, y = p, v = gi(Yi), k = gi(Vi);
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
    let E = !1, ie = !1, X = NaN, ye = NaN, re = NaN, be = NaN, Ce = -1, Me = -1, Ee = -1, ge = -1, $ = c.x, j = c.y, Y = c.w, Q = c.h;
    const b = Je(), _e = Ut({
      i: yo(c, "i"),
      state: h,
      wrapper: b,
      calcXY: D
    });
    function C(S) {
      Ie(S);
    }
    function Z() {
      We();
    }
    function P(S) {
      Ge(c.isDraggable) && (h.draggable = S);
    }
    function H(S) {
      Ge(c.isResizable) && (h.resizable = S);
    }
    function ee(S) {
      Ge(c.isBounded) && (h.bounded = S);
    }
    function ae(S) {
      h.transformScale = S;
    }
    function ue(S) {
      h.rowHeight = S;
    }
    function de(S) {
      h.maxRows = S;
    }
    function V() {
      h.rtl = Si() === "rtl", We();
    }
    function Re(S) {
      h.cols = Math.floor(S);
    }
    v.increaseItem(_e), Hi(() => {
      h.rtl = Si() === "rtl";
    }), Bn(() => {
      v.responsive && v.lastBreakpoint ? h.cols = Zi(v.lastBreakpoint, v.cols) : h.cols = v.colNum, h.rowHeight = v.rowHeight, h.containerWidth = v.width !== null ? v.width : 100, h.margin = v.margin !== void 0 ? v.margin.map(Number) : [10, 10], h.maxRows = v.maxRows, Ge(c.isDraggable) ? h.draggable = v.isDraggable : h.draggable = c.isDraggable, Ge(c.isResizable) ? h.resizable = v.isResizable : h.resizable = c.isResizable, Ge(c.isBounded) ? h.bounded = v.isBounded : h.bounded = c.isBounded, h.transformScale = v.transformScale, h.useCssTransforms = v.useCssTransforms, h.useStyleCursor = v.useStyleCursor, bo(() => {
        $ = c.x, j = c.y, Q = c.h, Y = c.w, He(A);
      }), k.on("updateWidth", C), k.on("compact", Z), k.on("setDraggable", P), k.on("setResizable", H), k.on("setBounded", ee), k.on("setTransformScale", ae), k.on("setRowHeight", ue), k.on("setMaxRows", de), k.on("directionchange", V), k.on("setColNum", Re);
    }), $i(() => {
      k.off("updateWidth", C), k.off("compact", Z), k.off("setDraggable", P), k.off("setResizable", H), k.off("setBounded", ee), k.off("setTransformScale", ae), k.off("setRowHeight", ue), k.off("setMaxRows", de), k.off("directionchange", V), k.off("setColNum", Re), w.value && (w.value.unset(), w.value = null), v.decreaseItem(_e);
    }), d({ state: h, wrapper: b });
    const Pe = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, pe = tt(() => h.resizable && !c.static), he = tt(() => v.isMirrored ? !h.rtl : h.rtl), B = tt(() => (h.draggable || h.resizable) && !c.static), I = Xo("item"), fe = tt(() => ({
      [I.b()]: !0,
      [I.bm("resizable")]: pe.value,
      // 可缩放
      [I.bm("static")]: c.static,
      // 静态锁定
      [I.bm("resizing")]: h.isResizing,
      // 缩放中
      [I.bm("dragging")]: h.isDragging,
      // 拖拽中
      [I.bm("transform")]: h.useCssTransforms,
      // 使用 transform 布局模式
      [I.bm("rtl")]: he.value,
      // RTL 渲染修饰
      [I.bm("no-touch")]: Pe && B.value
      // Android 下禁用触摸样式修饰
    })), se = tt(() => [I.be("resizer"), he.value && I.bem("resizer", "rtl")].filter(Boolean)), le = tt(() => {
      const S = c.resizeOption;
      return !(!S || !S.edges);
    }), U = tt(() => pe.value && !le.value);
    ve(
      () => c.isDraggable,
      (S) => {
        h.draggable = S;
      }
    ), ve(
      () => c.static,
      () => {
        He(Ze), He(Ae);
      }
    ), ve(
      () => h.draggable,
      () => {
        He(Ze);
      }
    ), ve(
      () => c.isResizable,
      (S) => {
        h.resizable = S;
      }
    ), ve(
      () => c.isBounded,
      (S) => {
        h.bounded = S;
      }
    ), ve(
      () => h.resizable,
      () => {
        He(Ae);
      }
    ), ve(
      () => h.rowHeight,
      () => {
        He(A), He(R);
      }
    ), ve([() => h.cols, () => h.containerWidth], () => {
      He(Ae), He(A), He(R);
    }), ve([() => c.minH, () => c.maxH, () => c.minW, () => c.maxW], () => {
      He(Ae);
    }), ve(he, () => {
      He(Ae), He(A);
    }), ve([() => v.margin, () => v.margin[0], () => v.margin[1]], () => {
      const S = v.margin;
      !S || S[0] === h.margin[0] && S[1] === h.margin[1] || (h.margin = S.map(Number), He(A), He(R));
    });
    function A() {
      c.x + c.w > h.cols ? ($ = 0, Y = c.w > h.cols ? h.cols : c.w) : ($ = c.x, Y = c.w);
      const S = xe($, j, Y, Q);
      h.isDragging && (S.top = h.dragging.top, he.value ? S.right = h.dragging.left : S.left = h.dragging.left), h.isResizing && (S.width = h.resizing.width, S.height = h.resizing.height);
      let W;
      h.useCssTransforms ? he.value ? W = $o(S.top, S.right, S.width, S.height) : W = Ho(S.top, S.left, S.width, S.height) : he.value ? W = qo(S.top, S.right, S.width, S.height) : W = Wo(S.top, S.left, S.width, S.height), h.style = W;
    }
    function R() {
      const S = {};
      for (const W of ["width", "height"]) {
        const te = h.style[W].match(/^(\d+)px$/);
        if (!te)
          return;
        S[W] = te[1];
      }
      y("container-resized", c.i, c.h, c.w, S.height, S.width);
    }
    function rt(S) {
      if (c.static) return;
      const W = S.type;
      if (W === "resizestart" && h.isResizing || W !== "resizestart" && !h.isResizing)
        return;
      const oe = wi(S);
      if (Ge(oe)) return;
      const { x: te, y: ce } = oe, J = { width: 0, height: 0 };
      let L;
      switch (S.edges && (h.activeResizeEdges.top = !!S.edges.top, h.activeResizeEdges.right = !!S.edges.right, h.activeResizeEdges.bottom = !!S.edges.bottom, h.activeResizeEdges.left = !!S.edges.left), W) {
        case "resizestart": {
          Ae(), Ce = Y, Me = Q, L = xe($, j, Y, Q), J.width = L.width, J.height = L.height, h.resizing = J, h.isResizing = !0;
          break;
        }
        case "resizemove": {
          !S.edges.right && !S.edges.left && (re = te), !S.edges.top && !S.edges.bottom && (be = ce);
          const Se = Ei(re, be, te, ce);
          he.value ? J.width = h.resizing.width - Se.deltaX / h.transformScale : J.width = h.resizing.width + Se.deltaX / h.transformScale, J.height = h.resizing.height + Se.deltaY / h.transformScale, h.resizing = J;
          break;
        }
        case "resizeend": {
          L = xe($, j, Y, Q), J.width = L.width, J.height = L.height, h.resizing = { width: -1, height: -1 }, h.isResizing = !1, h.activeResizeEdges.top = !1, h.activeResizeEdges.right = !1, h.activeResizeEdges.bottom = !1, h.activeResizeEdges.left = !1;
          break;
        }
      }
      L = Oe(J.height, J.width), L.w < c.minW && (L.w = c.minW), L.w > c.maxW && (L.w = c.maxW), L.h < c.minH && (L.h = c.minH), L.h > c.maxH && (L.h = c.maxH), L.h < 1 && (L.h = 1), L.w < 1 && (L.w = 1), re = te, be = ce, (Y !== L.w || Q !== L.h) && y("resize", c.i, L.h, L.w, J.height, J.width), S.type === "resizeend" && (Ce !== Y || Me !== Q) && y("resized", c.i, L.h, L.w, J.height, J.width), k.emit("resizeEvent", S.type, c.i, $, j, L.h, L.w);
    }
    function Ne(S) {
      if (c.static || h.isResizing) return;
      const W = S.type;
      if (W === "dragstart" && h.isDragging || W !== "dragstart" && !h.isDragging)
        return;
      const oe = wi(S);
      if (Ge(oe)) return;
      const { x: te, y: ce } = oe, J = S.target;
      if (!J.offsetParent) return;
      const L = { top: 0, left: 0 };
      switch (W) {
        case "dragstart": {
          Ee = $, ge = j;
          const De = J.offsetParent.getBoundingClientRect(), Fe = J.getBoundingClientRect(), Xe = Fe.left / h.transformScale, Qe = De.left / h.transformScale, at = Fe.right / h.transformScale, Ue = De.right / h.transformScale, Ke = Fe.top / h.transformScale, Ye = De.top / h.transformScale;
          he.value ? L.left = (at - Ue) * -1 : L.left = Xe - Qe, L.top = Ke - Ye, h.dragging = L, h.isDragging = !0;
          break;
        }
        case "dragmove": {
          const De = Ei(X, ye, te, ce);
          if (he.value ? L.left = h.dragging.left - De.deltaX / h.transformScale : L.left = h.dragging.left + De.deltaX / h.transformScale, L.top = h.dragging.top + De.deltaY / h.transformScale, h.bounded) {
            const Fe = J.offsetParent.clientHeight - ke(c.h, h.rowHeight, h.margin[1]);
            L.top = we(L.top, 0, Fe);
            const Xe = Te(), Qe = h.containerWidth - ke(c.w, Xe, h.margin[0]);
            L.left = we(L.left, 0, Qe);
          }
          h.dragging = L;
          break;
        }
        case "dragend": {
          const De = J.offsetParent.getBoundingClientRect(), Fe = J.getBoundingClientRect(), Xe = Fe.left / h.transformScale, Qe = De.left / h.transformScale, at = Fe.right / h.transformScale, Ue = De.right / h.transformScale, Ke = Fe.top / h.transformScale, Ye = De.top / h.transformScale;
          he.value ? L.left = (at - Ue) * -1 : L.left = Xe - Qe, L.top = Ke - Ye, h.dragging = { top: -1, left: -1 }, h.isDragging = !1;
          break;
        }
      }
      let Se;
      he.value, Se = D(L.top, L.left), X = te, ye = ce, ($ !== Se.x || j !== Se.y) && y("move", c.i, Se.x, Se.y), S.type === "dragend" && (Ee !== $ || ge !== j) && y("moved", c.i, Se.x, Se.y), k.emit("dragEvent", S.type, c.i, Se.x, Se.y, Q, Y);
    }
    function xe(S, W, oe, te) {
      const ce = Te();
      let J;
      return he.value ? J = {
        right: Math.round(ce * S + (S + 1) * h.margin[0]),
        top: Math.round(h.rowHeight * W + (W + 1) * h.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: oe === 1 / 0 ? oe : Math.round(ce * oe + Math.max(0, oe - 1) * h.margin[0]),
        height: te === 1 / 0 ? te : Math.round(h.rowHeight * te + Math.max(0, te - 1) * h.margin[1])
      } : J = {
        left: Math.round(ce * S + (S + 1) * h.margin[0]),
        top: Math.round(h.rowHeight * W + (W + 1) * h.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: oe === 1 / 0 ? oe : Math.round(ce * oe + Math.max(0, oe - 1) * h.margin[0]),
        height: te === 1 / 0 ? te : Math.round(h.rowHeight * te + Math.max(0, te - 1) * h.margin[1])
      }, J;
    }
    function D(S, W) {
      const oe = Te();
      let te = Math.round((W - h.margin[0]) / (oe + h.margin[0])), ce = Math.round((S - h.margin[1]) / (h.rowHeight + h.margin[1]));
      return te = Math.max(Math.min(te, h.cols - Y), 0), ce = Math.max(Math.min(ce, h.maxRows - Q), 0), { x: te, y: ce };
    }
    function Te() {
      return (h.containerWidth - h.margin[0] * (h.cols + 1)) / h.cols;
    }
    function ke(S, W, oe) {
      return Number.isFinite(S) ? Math.round(W * S + Math.max(0, S - 1) * oe) : S;
    }
    function we(S, W, oe) {
      return Math.max(Math.min(S, oe), W);
    }
    function Oe(S, W, oe = !1) {
      const te = Te();
      let ce = Math.round((W + h.margin[0]) / (te + h.margin[0])), J = 0;
      return oe ? J = Math.ceil((S + h.margin[1]) / (h.rowHeight + h.margin[1])) : J = Math.round((S + h.margin[1]) / (h.rowHeight + h.margin[1])), ce = Math.max(Math.min(ce, h.cols - $), 0), J = Math.max(Math.min(J, h.maxRows - j), 0), { w: ce, h: J };
    }
    function Ie(S, W) {
      h.containerWidth = S;
    }
    function We() {
      A();
    }
    function qe() {
      !w.value && b.value && (w.value = On(b.value), h.useStyleCursor || w.value.styleCursor(!1));
    }
    const Be = Mt(Ne);
    function Ze() {
      if (qe(), !!w.value)
        if (h.draggable && !c.static) {
          const S = {
            ignoreFrom: c.dragIgnoreFrom,
            allowFrom: c.dragAllowFrom,
            ...c.dragOption
          };
          w.value.draggable(S), E || (E = !0, w.value.on("dragstart dragmove dragend", (W) => {
            W.type === "dragmove" ? Be(W) : Ne(W);
          }));
        } else
          w.value.draggable({ enabled: !1 });
    }
    const ot = Mt(rt);
    function Ae() {
      if (qe(), !!w.value)
        if (h.resizable && !c.static) {
          const S = xe(0, 0, c.maxW, c.maxH), W = xe(0, 0, c.minW, c.minH), oe = {
            edges: {
              left: he.value ? `.${se.value[0]}` : !1,
              right: he.value ? !1 : `.${se.value[0]}`,
              bottom: `.${se.value[0]}`,
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
          c.preserveAspectRatio && (oe.modifiers = [On.modifiers.aspectRatio({ ratio: "preserve" })]), w.value.resizable(oe);
          const te = oe.edges || {};
          h.enabledResizeEdges.top = !!te.top, h.enabledResizeEdges.right = !!te.right, h.enabledResizeEdges.bottom = !!te.bottom, h.enabledResizeEdges.left = !!te.left, ie || (ie = !0, w.value.on("resizestart resizemove resizeend", (ce) => {
            ce.type === "resizemove" ? ot(ce) : rt(ce);
          }));
        } else
          w.value.resizable({ enabled: !1 }), h.enabledResizeEdges.top = !1, h.enabledResizeEdges.right = !1, h.enabledResizeEdges.bottom = !1, h.enabledResizeEdges.left = !1;
    }
    return (S, W) => (it(), ut("section", {
      ref_key: "wrapper",
      ref: b,
      class: kt(fe.value),
      style: Wi(h.style)
    }, [
      pn(S.$slots, "default"),
      U.value ? (it(), ut("span", {
        key: 0,
        class: kt(se.value)
      }, null, 2)) : Nt("", !0),
      pe.value ? (it(), ut("div", {
        key: 1,
        class: kt([
          "vgl-item__edge vgl-item__edge--top",
          [{ "is-enabled": h.enabledResizeEdges.top, "is-active": h.activeResizeEdges.top }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Nt("", !0),
      pe.value ? (it(), ut("div", {
        key: 2,
        class: kt([
          "vgl-item__edge vgl-item__edge--right",
          [{ "is-enabled": h.enabledResizeEdges.right, "is-active": h.activeResizeEdges.right }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Nt("", !0),
      pe.value ? (it(), ut("div", {
        key: 3,
        class: kt([
          "vgl-item__edge vgl-item__edge--bottom",
          [{ "is-enabled": h.enabledResizeEdges.bottom, "is-active": h.activeResizeEdges.bottom }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Nt("", !0),
      pe.value ? (it(), ut("div", {
        key: 4,
        class: kt([
          "vgl-item__edge vgl-item__edge--left",
          [{ "is-enabled": h.enabledResizeEdges.left, "is-active": h.activeResizeEdges.left }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Nt("", !0)
    ], 6));
  }
}), xt = typeof window < "u";
var ki;
xt && (ki = window == null ? void 0 : window.navigator) != null && ki.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function _i(s) {
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
const ia = xt && ("ontouchstart" in window || oa() > 0), ra = ia ? "pointerdown" : "click";
function oa() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function aa(s, d, p = window.Event) {
  const { type: c, bubbles: y = !1, cancelable: v = !1, ...k } = d;
  if (!_i(c) || c === "") return !1;
  let w;
  return _i(p) ? w = new p(c, { bubbles: y, cancelable: v }) : (w = document.createEvent("HTMLEvents"), w.initEvent(c, y, v)), Object.assign(w, k), s.dispatchEvent(w);
}
const sa = "clickoutside", la = /* @__PURE__ */ new Set();
xt && document.addEventListener(
  ra,
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
if (xt) {
  for (const s of ca)
    if (s[1] in document) {
      fn = s;
      break;
    }
}
tt(() => !1);
const ua = /* @__PURE__ */ new Set(), fa = /* @__PURE__ */ new WeakMap();
if (xt && fn) {
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
const er = /* @__PURE__ */ new Map();
er.set("x", 0);
er.set("y", 0);
var yt = [], da = function() {
  return yt.some(function(s) {
    return s.activeTargets.length > 0;
  });
}, pa = function() {
  return yt.some(function(s) {
    return s.skippedTargets.length > 0;
  });
}, Ri = "ResizeObserver loop completed with undelivered notifications.", ha = function() {
  var s;
  typeof ErrorEvent == "function" ? s = new ErrorEvent("error", {
    message: Ri
  }) : (s = document.createEvent("Event"), s.initEvent("error", !1, !1), s.message = Ri), window.dispatchEvent(s);
}, Kt;
(function(s) {
  s.BORDER_BOX = "border-box", s.CONTENT_BOX = "content-box", s.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Kt || (Kt = {}));
var bt = function(s) {
  return Object.freeze(s);
}, ga = /* @__PURE__ */ function() {
  function s(d, p) {
    this.inlineSize = d, this.blockSize = p, bt(this);
  }
  return s;
}(), tr = function() {
  function s(d, p, c, y) {
    return this.x = d, this.y = p, this.width = c, this.height = y, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, bt(this);
  }
  return s.prototype.toJSON = function() {
    var d = this, p = d.x, c = d.y, y = d.top, v = d.right, k = d.bottom, w = d.left, h = d.width, E = d.height;
    return { x: p, y: c, top: y, right: v, bottom: k, left: w, width: h, height: E };
  }, s.fromRect = function(d) {
    return new s(d.x, d.y, d.width, d.height);
  }, s;
}(), Fn = function(s) {
  return s instanceof SVGElement && "getBBox" in s;
}, nr = function(s) {
  if (Fn(s)) {
    var d = s.getBBox(), p = d.width, c = d.height;
    return !p && !c;
  }
  var y = s, v = y.offsetWidth, k = y.offsetHeight;
  return !(v || k || s.getClientRects().length);
}, Pi = function(s) {
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
}, Gt = typeof window < "u" ? window : {}, ln = /* @__PURE__ */ new WeakMap(), Mi = /auto|scroll/, ma = /^tb|vertical/, ya = /msie|trident/i.test(Gt.navigator && Gt.navigator.userAgent), nt = function(s) {
  return parseFloat(s || "0");
}, Dt = function(s, d, p) {
  return s === void 0 && (s = 0), d === void 0 && (d = 0), p === void 0 && (p = !1), new ga((p ? d : s) || 0, (p ? s : d) || 0);
}, Di = bt({
  devicePixelContentBoxSize: Dt(),
  borderBoxSize: Dt(),
  contentBoxSize: Dt(),
  contentRect: new tr(0, 0, 0, 0)
}), ir = function(s, d) {
  if (d === void 0 && (d = !1), ln.has(s) && !d)
    return ln.get(s);
  if (nr(s))
    return ln.set(s, Di), Di;
  var p = getComputedStyle(s), c = Fn(s) && s.ownerSVGElement && s.getBBox(), y = !ya && p.boxSizing === "border-box", v = ma.test(p.writingMode || ""), k = !c && Mi.test(p.overflowY || ""), w = !c && Mi.test(p.overflowX || ""), h = c ? 0 : nt(p.paddingTop), E = c ? 0 : nt(p.paddingRight), ie = c ? 0 : nt(p.paddingBottom), X = c ? 0 : nt(p.paddingLeft), ye = c ? 0 : nt(p.borderTopWidth), re = c ? 0 : nt(p.borderRightWidth), be = c ? 0 : nt(p.borderBottomWidth), Ce = c ? 0 : nt(p.borderLeftWidth), Me = X + E, Ee = h + ie, ge = Ce + re, $ = ye + be, j = w ? s.offsetHeight - $ - s.clientHeight : 0, Y = k ? s.offsetWidth - ge - s.clientWidth : 0, Q = y ? Me + ge : 0, b = y ? Ee + $ : 0, _e = c ? c.width : nt(p.width) - Q - Y, C = c ? c.height : nt(p.height) - b - j, Z = _e + Me + Y + ge, P = C + Ee + j + $, H = bt({
    devicePixelContentBoxSize: Dt(Math.round(_e * devicePixelRatio), Math.round(C * devicePixelRatio), v),
    borderBoxSize: Dt(Z, P, v),
    contentBoxSize: Dt(_e, C, v),
    contentRect: new tr(X, h, _e, C)
  });
  return ln.set(s, H), H;
}, rr = function(s, d, p) {
  var c = ir(s, p), y = c.borderBoxSize, v = c.contentBoxSize, k = c.devicePixelContentBoxSize;
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
    var p = ir(d);
    this.target = d, this.contentRect = p.contentRect, this.borderBoxSize = bt([p.borderBoxSize]), this.contentBoxSize = bt([p.contentBoxSize]), this.devicePixelContentBoxSize = bt([p.devicePixelContentBoxSize]);
  }
  return s;
}(), or = function(s) {
  if (nr(s))
    return 1 / 0;
  for (var d = 0, p = s.parentNode; p; )
    d += 1, p = p.parentNode;
  return d;
}, xa = function() {
  var s = 1 / 0, d = [];
  yt.forEach(function(v) {
    if (v.activeTargets.length !== 0) {
      var k = [];
      v.activeTargets.forEach(function(w) {
        var h = new ba(w.target), E = or(w.target);
        k.push(h), w.lastReportedSize = rr(w.target, w.observedBox), E < s && (s = E);
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
}, Ci = function(s) {
  yt.forEach(function(d) {
    d.activeTargets.splice(0, d.activeTargets.length), d.skippedTargets.splice(0, d.skippedTargets.length), d.observationTargets.forEach(function(p) {
      p.isActive() && (or(p.target) > s ? d.activeTargets.push(p) : d.skippedTargets.push(p));
    });
  });
}, wa = function() {
  var s = 0;
  for (Ci(s); da(); )
    s = xa(), Ci(s);
  return pa() && ha(), s > 0;
}, Rn, ar = [], Ea = function() {
  return ar.splice(0).forEach(function(s) {
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
  ar.push(s), Rn();
}, za = function(s) {
  Sa(function() {
    requestAnimationFrame(s);
  });
}, dn = 0, Ta = function() {
  return !!dn;
}, ka = 250, _a = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Oi = [
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
], Ai = function(s) {
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
      var c = Ai(d);
      za(function() {
        var y = !1;
        try {
          y = wa();
        } finally {
          if (Pn = !1, d = c - Ai(), !Ta())
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
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Oi.forEach(function(p) {
      return Gt.addEventListener(p, d.listener, !0);
    }));
  }, s.prototype.stop = function() {
    var d = this;
    this.stopped || (this.observer && this.observer.disconnect(), Oi.forEach(function(p) {
      return Gt.removeEventListener(p, d.listener, !0);
    }), this.stopped = !0);
  }, s;
}(), An = new Ra(), Ii = function(s) {
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
    var d = rr(this.target, this.observedBox, !0);
    return Pa(this.target) && (this.lastReportedSize = d), this.lastReportedSize.inlineSize !== d.inlineSize || this.lastReportedSize.blockSize !== d.blockSize;
  }, s;
}(), Da = /* @__PURE__ */ function() {
  function s(d, p) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = d, this.callback = p;
  }
  return s;
}(), cn = /* @__PURE__ */ new WeakMap(), Bi = function(s, d) {
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
    Bi(y.observationTargets, p) < 0 && (v && yt.push(y), y.observationTargets.push(new Ma(p, c && c.box)), Ii(1), An.schedule());
  }, s.unobserve = function(d, p) {
    var c = cn.get(d), y = Bi(c.observationTargets, p), v = c.observationTargets.length === 1;
    y >= 0 && (v && yt.splice(yt.indexOf(c), 1), c.observationTargets.splice(y, 1), Ii(-1));
  }, s.disconnect = function(d) {
    var p = this, c = cn.get(d);
    c.observationTargets.slice().forEach(function(y) {
      return p.unobserve(d, y.target);
    }), c.activeTargets.splice(0, c.activeTargets.length);
  }, s;
}(), Ca = function() {
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
    if (!Pi(d))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    un.observe(this, d, p);
  }, s.prototype.unobserve = function(d) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Pi(d))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    un.unobserve(this, d);
  }, s.prototype.disconnect = function() {
    un.disconnect(this);
  }, s.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, s;
}();
const hn = /* @__PURE__ */ new WeakMap();
function Oa(s) {
  for (let d = 0, p = s.length; d < p; ++d) {
    const c = s[d], y = hn.get(c.target);
    typeof y == "function" && y(c);
  }
}
const sr = new (xt && window.ResizeObserver || Ca)(
  Oa
);
function Aa(s, d) {
  hn.set(s, d), sr.observe(s);
}
function Ia(s) {
  hn.has(s) && (sr.unobserve(s), hn.delete(s));
}
function Ba() {
  return {
    observeResize: Aa,
    unobserveResize: Ia
  };
}
const Fa = Je(!1);
tt(() => Fa.value);
const Fi = "__theme_style__", Mn = "__theme_observer__", Li = Ut(/* @__PURE__ */ new Map()), ji = /* @__PURE__ */ new Map();
ve(Li, () => {
  if (!xt) return;
  ji.clear();
  const s = document.head.querySelector(`#${Fi}`);
  s && document.head.removeChild(s);
  const d = document.createElement("style");
  let p = `.${Mn} { width: 1px }`, c = 1;
  for (const [y, [v, k]] of Li.entries())
    p += ` html.${v} .${Mn}, .${k} .${Mn} { width: ${++c}px }`, ji.set(c, y);
  d.textContent = p, d.id = Fi, document.head.appendChild(d);
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
    }), k = /* @__PURE__ */ new Map(), w = Je(c.layout), h = Je(), { observeResize: E, unobserveResize: ie } = Ba(), X = Oo();
    X.on("resizeEvent", ye), X.on("dragEvent", re), Hi(() => {
      y("layout-before-mount", w.value);
    }), Bn(() => {
      y("layout-mounted", w.value), gt(() => {
        No(w.value), v.originalLayout = w.value, gt(() => {
          C(), h.value && E(h.value, Ao($, 16)), _t(w.value, c.verticalCompact), y("layout-updated", w.value), ge(), $();
        });
      });
    }), $i(() => {
      X.clearAll(), h.value && ie(h.value);
    });
    function ye(P, H, ee, ae, ue, de) {
      b(P, H, ee, ae, ue, de);
    }
    function re(P, H, ee, ae, ue, de) {
      Q(P, H, ee, ae, ue, de);
    }
    ve(
      () => v.width,
      (P, H) => {
        gt(() => {
          X.emit("updateWidth", P), H === -1 && gt(() => {
            y("layout-ready", w.value);
          }), ge();
        });
      }
    ), ve(
      () => [c.layout, c.layout.length],
      () => {
        w.value = c.layout, Ee();
      }
    ), ve(
      () => c.colNum,
      (P) => {
        X.emit("setColNum", P);
      }
    ), ve(
      () => c.rowHeight,
      (P) => {
        X.emit("setRowHeight", P);
      }
    ), ve(
      () => c.isDraggable,
      (P) => {
        X.emit("setDraggable", P);
      }
    ), ve(
      () => c.isResizable,
      (P) => {
        X.emit("setResizable", P);
      }
    ), ve(
      () => c.isBounded,
      (P) => {
        X.emit("setBounded", P);
      }
    ), ve(
      () => c.transformScale,
      (P) => {
        X.emit("setTransformScale", P);
      }
    ), ve(
      () => c.responsive,
      (P) => {
        P || (y("update:layout", v.originalLayout), X.emit("setColNum", c.colNum)), $();
      }
    ), ve(
      () => c.maxRows,
      (P) => {
        X.emit("setMaxRows", P);
      }
    ), ve([() => c.margin, () => c.margin[1]], ge), vi(
      Yi,
      Ut({
        ...mi(c),
        ...mi(v),
        increaseItem: be,
        decreaseItem: Ce
      })
    ), vi(Vi, X), d({ state: v, getItem: Me, resizeEvent: b, dragEvent: Q, layoutUpdate: Ee });
    function be(P) {
      k.set(P.i, P);
    }
    function Ce(P) {
      k.delete(P.i);
    }
    function Me(P) {
      return k.get(P);
    }
    function Ee() {
      if (!Ge(w.value) && !Ge(v.originalLayout)) {
        if (w.value.length !== v.originalLayout.length) {
          const P = Z(w.value, v.originalLayout);
          if (P.length > 0)
            if (w.value.length > v.originalLayout.length)
              v.originalLayout = v.originalLayout.concat(P);
            else {
              const H = new Set(P.map((ee) => ee.i));
              v.originalLayout = v.originalLayout.filter((ee) => !H.has(ee.i));
            }
          v.lastLayoutLength = w.value.length, C();
        }
        _t(w.value, c.verticalCompact), X.emit("updateWidth", v.width), ge(), y("layout-updated", w.value);
      }
    }
    function ge() {
      v.mergedStyle = {
        height: j()
      };
    }
    function $() {
      h.value && (v.width = h.value.offsetWidth), X.emit("resizeEvent");
    }
    function j() {
      if (!c.autoSize) return;
      const P = parseFloat(c.margin[1]);
      return Bo(w.value) * (c.rowHeight + P) + P + "px";
    }
    let Y;
    function Q(P, H, ee, ae, ue, de) {
      let V = bi(w.value, H);
      Ge(V) && (V = { h: 0, w: 0, x: 0, y: 0, i: "" }), P === "dragstart" && !c.verticalCompact && (Y = w.value.reduce(
        (Re, { i: Pe, x: pe, y: he }) => ({
          ...Re,
          [Pe]: { x: pe, y: he }
        }),
        {}
      )), P === "dragmove" || P === "dragstart" ? (v.placeholder.i = H, v.placeholder.x = V.x, v.placeholder.y = V.y, v.placeholder.w = de, v.placeholder.h = ue, gt(() => {
        v.isDragging = !0;
      }), X.emit("updateWidth", v.width)) : gt(() => {
        v.isDragging = !1;
      }), w.value = Cn(w.value, V, ee, ae, !0, c.preventCollision), c.restoreOnDrag ? (V.static = !0, _t(w.value, c.verticalCompact, Y), V.static = !1) : _t(w.value, c.verticalCompact), X.emit("compact"), ge(), P === "dragend" && (Y = void 0, y("layout-updated", w.value));
    }
    function b(P, H, ee, ae, ue, de) {
      let V = bi(w.value, H);
      Ge(V) && (V = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let Re;
      if (c.preventCollision) {
        const Pe = Ui(w.value, { ...V, w: de, h: ue }).filter(
          (pe) => pe.i !== V.i
        );
        if (Re = Pe.length > 0, Re) {
          let pe = 1 / 0, he = 1 / 0;
          Pe.forEach((B) => {
            B.x > V.x && (pe = Math.min(pe, B.x)), B.y > V.y && (he = Math.min(he, B.y));
          }), Number.isFinite(pe) && (V.w = pe - V.x), Number.isFinite(he) && (V.h = he - V.y);
        }
      }
      Re || (V.w = de, V.h = ue), P === "resizestart" || P === "resizemove" ? (v.placeholder.i = H, v.placeholder.x = ee, v.placeholder.y = ae, v.placeholder.w = V.w, v.placeholder.h = V.h, gt(() => {
        v.isDragging = !0;
      }), X.emit("updateWidth", v.width)) : P && gt(() => {
        v.isDragging = !1;
      }), c.responsive && _e(), _t(w.value, c.verticalCompact), X.emit("compact"), ge(), P === "resizeend" && y("layout-updated", w.value);
    }
    function _e() {
      const P = Go(c.breakpoints, v.width);
      if (P === v.lastBreakpoint)
        return;
      const H = Zi(P, c.cols);
      !Ge(v.lastBreakpoint) && !v.layouts[v.lastBreakpoint] && (v.layouts[v.lastBreakpoint] = Dn(w.value));
      const ee = Uo(
        v.originalLayout,
        v.layouts,
        c.breakpoints,
        P,
        v.lastBreakpoint,
        H,
        c.verticalCompact
      );
      v.layouts[P] = ee, v.lastBreakpoint !== P && y("breakpoint-changed", P, ee), w.value = ee, y("update:layout", ee), v.lastBreakpoint = P, X.emit("setColNum", H);
    }
    function C() {
      v.layouts = Object.assign({}, c.responsiveLayouts);
    }
    function Z(P, H) {
      const ee = new Set(H.map((V) => V.i)), ae = new Set(P.map((V) => V.i)), ue = P.filter((V) => !ee.has(V.i)), de = H.filter((V) => !ae.has(V.i));
      return ue.concat(de);
    }
    return (P, H) => (it(), ut("div", {
      ref_key: "wrapper",
      ref: h,
      class: "vgl-layout",
      style: Wi(v.mergedStyle)
    }, [
      P.$slots.default ? pn(P.$slots, "default", { key: 0 }) : (it(!0), ut(wo, { key: 1 }, Eo(w.value, (ee) => (it(), So(Ti, zo({
        key: ee.i,
        ref_for: !0
      }, ee), {
        default: To(() => [
          pn(P.$slots, "item", {
            item: ee
          })
        ]),
        _: 2
      }, 1040))), 128)),
      xo(ko(Ti, {
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
const ja = 2;
function Ha(s, d = {}, p) {
  const y = { ...{
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
  }, ...d }, { draggable: v, resizable: k, useCssTransforms: w, dragOptions: h, resizeOptions: E } = y, ie = (B, I) => s.getAttribute(`data-${B}`) || I, X = (B, I) => {
    s.setAttribute(`data-${B}`, I.toString());
  }, ye = s.getBoundingClientRect(), re = y.width || ye.width || 0, be = y.height || ye.height || 0;
  X("x", y.x || 0), X("y", y.y || 0), X("width", re.toString()), X("height", be.toString());
  const Ce = ie("x", "0"), Me = ie("y", "0"), Ee = ie("width", re.toString()), ge = ie("height", be.toString());
  let $ = Pt(Ce, s, "x"), j = Pt(Me, s, "y"), Y = $e(Ee, s, "width"), Q = $e(ge, s, "height");
  const b = /* @__PURE__ */ new Map();
  let _e = !1;
  const C = (B) => {
    if (s instanceof HTMLElement) {
      const I = getComputedStyle(s);
      return (I.position === "absolute" || I.position === "fixed") && I[B] !== "auto" && I[B] !== "";
    }
    return !1;
  }, Z = () => C("right"), P = () => C("left"), H = () => C("top"), ee = () => C("bottom"), ae = (B) => {
    ["top", "right", "bottom", "left"].forEach((I) => {
      const fe = b.get(I);
      if (fe) {
        const se = fe.firstElementChild;
        se && (se.style.backgroundColor = B[I] ? "rgba(29, 98, 236, 1)" : "rgba(29, 98, 236, 0)");
      }
    });
  }, ue = () => {
    b.forEach((B) => {
      const I = B.firstElementChild;
      I && (I.style.backgroundColor = "rgba(29, 98, 236, 0)");
    });
  }, de = () => {
    const B = (E == null ? void 0 : E.edges) || {}, I = (E == null ? void 0 : E.margin) ?? 4, fe = (E == null ? void 0 : E.hotZoneSize) ?? 10, se = {
      position: "absolute",
      backgroundColor: "rgba(29, 98, 236, 0)",
      // 始终保持透明
      pointerEvents: "auto",
      // 设置为auto以支持hover效果
      // 移除transition，因为背景色不会变化
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, le = {
      backgroundColor: "rgba(29, 98, 236, 0)",
      // 初始透明
      transition: "background-color 0.1s ease",
      pointerEvents: "auto"
    }, U = (A, R) => {
      const rt = () => {
        R.style.backgroundColor = "rgba(29, 98, 236, 1)";
      }, Ne = () => {
        _e || (R.style.backgroundColor = "rgba(29, 98, 236, 0)");
      };
      A.addEventListener("mouseenter", rt), A.addEventListener("mouseleave", Ne), A._mouseEnterListener = rt, A._mouseLeaveListener = Ne;
    };
    if (B.top) {
      const A = document.createElement("div"), R = document.createElement("div");
      Object.assign(A.style, se, {
        top: `-${fe / 2 + I}px`,
        left: "0",
        width: "100%",
        height: `${fe}px`,
        cursor: "row-resize",
        zIndex: "10",
        alignItems: "center",
        justifyContent: "center"
      }), Object.assign(R.style, le, {
        width: "100%",
        height: "2px"
      }), A.appendChild(R), U(A, R), s.appendChild(A), b.set("top", A);
    }
    if (B.right) {
      const A = document.createElement("div"), R = document.createElement("div");
      Object.assign(A.style, se, {
        top: "0",
        right: `-${fe / 2 + I}px`,
        width: `${fe}px`,
        height: "100%",
        cursor: "col-resize",
        zIndex: "10",
        alignItems: "center",
        justifyContent: "center"
      }), Object.assign(R.style, le, {
        width: "2px",
        height: "100%"
      }), A.appendChild(R), U(A, R), s.appendChild(A), b.set("right", A);
    }
    if (B.bottom) {
      const A = document.createElement("div"), R = document.createElement("div");
      Object.assign(A.style, se, {
        bottom: `-${fe / 2 + I}px`,
        left: "0",
        width: "100%",
        height: `${fe}px`,
        cursor: "row-resize",
        zIndex: "10",
        alignItems: "center",
        justifyContent: "center"
      }), Object.assign(R.style, le, {
        width: "100%",
        height: "2px"
      }), A.appendChild(R), U(A, R), s.appendChild(A), b.set("bottom", A);
    }
    if (B.left) {
      const A = document.createElement("div"), R = document.createElement("div");
      Object.assign(A.style, se, {
        top: "0",
        left: `-${fe / 2 + I}px`,
        width: `${fe}px`,
        height: "100%",
        cursor: "col-resize",
        zIndex: "10",
        alignItems: "center",
        justifyContent: "center"
      }), Object.assign(R.style, le, {
        width: "2px",
        height: "100%"
      }), A.appendChild(R), U(A, R), s.appendChild(A), b.set("left", A);
    }
  }, V = (B) => {
    b.forEach((I) => {
      I.style.pointerEvents = "auto", I.style.display = "flex";
    });
  }, Re = On(s).styleCursor(!1);
  if (v) {
    const B = (U) => {
      var A;
      k && E && Re.resizable(!1), (A = p == null ? void 0 : p.onDrag) == null || A.call(p, {
        type: "dragstart",
        top: j,
        left: $,
        deltaX: 0,
        deltaY: 0
      });
    }, I = (U) => {
      if ($ += U.dx, j += U.dy, U.target instanceof HTMLElement) {
        const A = getComputedStyle(U.target), R = A.position === "absolute" || A.position === "fixed";
        w && !R ? U.target.style.transform = `translate(${$}px, ${j}px)` : R ? (P() ? U.target.style.left = `${$}px` : Z() ? Z() && (U.target.style.right = `${-$}px`) : U.target.style.left = `${$}px`, H() ? U.target.style.top = `${j}px` : ee() ? ee() && (U.target.style.bottom = `${-j}px`) : U.target.style.top = `${j}px`) : U.target.style.transform = `translate(${$}px, ${j}px)`;
      }
      U.target._dataUpdateTimer || (U.target._dataUpdateTimer = setTimeout(() => {
        U.target instanceof Element && (U.target.setAttribute("data-x", $.toString()), U.target.setAttribute("data-y", j.toString())), delete U.target._dataUpdateTimer;
      }, 50)), p != null && p.onDrag && requestAnimationFrame(() => {
        var A;
        (A = p.onDrag) == null || A.call(p, {
          type: "dragmove",
          top: j,
          left: $,
          deltaX: U.dx,
          deltaY: U.dy
        });
      });
    }, fe = (U) => {
      var A;
      k && E && Re.resizable(!0), U.target instanceof Element && (U.target.setAttribute("data-x", $.toString()), U.target.setAttribute("data-y", j.toString())), (A = p == null ? void 0 : p.onDrag) == null || A.call(p, {
        type: "dragend",
        top: j,
        left: $,
        deltaX: U.dx,
        deltaY: U.dy
      });
    }, se = Mt(
      I,
      (h == null ? void 0 : h.threshold) ?? ja
    ), le = {
      enabled: !0,
      allowFrom: h == null ? void 0 : h.allowFrom,
      ignoreFrom: h == null ? void 0 : h.ignoreFrom,
      modifiers: (h == null ? void 0 : h.modifiers) || [],
      listeners: {
        start: B,
        move: se,
        end: fe
      }
    };
    h != null && h.startAxis && (le.startAxis = h.startAxis), h != null && h.lockAxis && (le.lockAxis = h.lockAxis), (h == null ? void 0 : h.max) !== void 0 && (le.max = h.max), (h == null ? void 0 : h.maxPerElement) !== void 0 && (le.maxPerElement = h.maxPerElement), Re.draggable(le);
  }
  if (k && E) {
    de();
    let B = 10, I = 10, fe = 1 / 0, se = 1 / 0, le = Y / Q;
    const U = (D) => {
      var ke, we, Oe, Ie;
      V(), _e = !0, v && h && Re.draggable(!1);
      const Te = {
        top: !!((ke = D.edges) != null && ke.top),
        right: !!((we = D.edges) != null && we.right),
        bottom: !!((Oe = D.edges) != null && Oe.bottom),
        left: !!((Ie = D.edges) != null && Ie.left)
      };
      ae(Te), B = $e((E == null ? void 0 : E.minWidth) ?? 10, D.target, "width"), I = $e((E == null ? void 0 : E.minHeight) ?? 10, D.target, "height"), fe = $e((E == null ? void 0 : E.maxWidth) ?? 1 / 0, D.target, "width"), se = $e((E == null ? void 0 : E.maxHeight) ?? 1 / 0, D.target, "height"), le = Y / Q, p != null && p.onResize && requestAnimationFrame(() => {
        var We;
        (We = p.onResize) == null || We.call(p, {
          type: "resizestart",
          width: Y,
          height: Q,
          top: j,
          left: $,
          deltaWidth: 0,
          deltaHeight: 0,
          edges: Te
        });
      });
    }, A = (D) => {
      var W, oe, te, ce, J, L, Se, De, Fe, Xe, Qe, at, Ue, Ke, Ye, Ct, wt, Ot, Et, St, At, It, Jt, zt;
      const Te = Z(), ke = P(), we = H(), Oe = ee(), Ie = D.target instanceof HTMLElement ? getComputedStyle(D.target) : null, We = ((W = D.deltaRect) == null ? void 0 : W.width) || 0, qe = ((oe = D.deltaRect) == null ? void 0 : oe.height) || 0;
      let Be = We, Ze = qe;
      E != null && E.preserveAspectRatio && !Te && !ke && !we && !Oe && ((te = D.edges) != null && te.left || (ce = D.edges) != null && ce.right ? Ze = We / le : ((J = D.edges) != null && J.top || (L = D.edges) != null && L.bottom) && (Be = qe * le));
      let ot = Y + Be, Ae = Q + Ze;
      if (ot = Math.max(B, Math.min(fe, ot)), Ae = Math.max(I, Math.min(se, Ae)), Be = ot - Y, Ze = Ae - Q, Be === 0 && Ze === 0)
        return;
      if ((Te || ke || we || Oe) && Ie) {
        const ze = D.target.getBoundingClientRect();
        (Math.abs(ze.width - Y) > 1 || Math.abs(ze.height - Q) > 1) && (Y = ze.width, Q = ze.height);
      }
      if (!Te && !ke && !we && !Oe && ((Se = D.edges) != null && Se.top && (j -= Ze), (De = D.edges) != null && De.right, (Fe = D.edges) != null && Fe.bottom, (Xe = D.edges) != null && Xe.left && ($ -= Be)), Y = ot, Q = Ae, ((Qe = D.edges) != null && Qe.left || (at = D.edges) != null && at.right) && (D.target.style.width = `${Y}px`), ((Ue = D.edges) != null && Ue.top || (Ke = D.edges) != null && Ke.bottom) && (D.target.style.height = `${Q}px`), (Ye = D.edges) != null && Ye.top && Oe) {
        const ze = (Ct = D.target.parentElement) == null ? void 0 : Ct.getBoundingClientRect();
        if (ze) {
          const Bt = parseInt(getComputedStyle(D.target).bottom || "0", 10), Ft = ze.height - Q - Bt;
          D.target.style.top = `${Ft}px`;
        }
      }
      if ((wt = D.edges) != null && wt.left && Te) {
        const ze = (Ot = D.target.parentElement) == null ? void 0 : Ot.getBoundingClientRect();
        if (ze) {
          const Bt = parseInt(getComputedStyle(D.target).right || "0", 10), Ft = ze.width - Y - Bt;
          D.target.style.left = `${Ft}px`;
        }
      }
      if ((Et = D.edges) != null && Et.right && ke) {
        const ze = parseInt(getComputedStyle(D.target).left || "0", 10);
        D.target.style.left = `${ze}px`;
      }
      if ((St = D.edges) != null && St.bottom && we) {
        const ze = parseInt(getComputedStyle(D.target).top || "0", 10);
        D.target.style.top = `${ze}px`;
      }
      !Te && !ke && !we && !Oe && w && (D.target.style.transform = `translate(${$}px, ${j}px)`);
      const S = {
        top: !!((At = D.edges) != null && At.top),
        right: !!((It = D.edges) != null && It.right),
        bottom: !!((Jt = D.edges) != null && Jt.bottom),
        left: !!((zt = D.edges) != null && zt.left)
      };
      p != null && p.onResize && requestAnimationFrame(() => {
        var ze;
        (ze = p.onResize) == null || ze.call(p, {
          type: "resizemove",
          width: Y,
          height: Q,
          top: j,
          left: $,
          deltaWidth: We,
          deltaHeight: qe,
          edges: S
        });
      });
    }, R = (D) => {
      var ke, we, Oe, Ie;
      _e = !1, v && h && Re.draggable(!0), ue(), D.target instanceof Element && (D.target.setAttribute("data-x", $.toString()), D.target.setAttribute("data-y", j.toString()), D.target.setAttribute("data-width", Y.toString()), D.target.setAttribute("data-height", Q.toString()));
      const Te = {
        top: !!((ke = D.edges) != null && ke.top),
        right: !!((we = D.edges) != null && we.right),
        bottom: !!((Oe = D.edges) != null && Oe.bottom),
        left: !!((Ie = D.edges) != null && Ie.left)
      };
      requestAnimationFrame(() => {
        var We, qe, Be;
        (Be = p == null ? void 0 : p.onResize) == null || Be.call(p, {
          type: "resizeend",
          width: Y,
          height: Q,
          top: j,
          left: $,
          deltaWidth: ((We = D.deltaRect) == null ? void 0 : We.width) || 0,
          deltaHeight: ((qe = D.deltaRect) == null ? void 0 : qe.height) || 0,
          edges: Te
        });
      });
    }, Ne = A, xe = {
      enabled: !0,
      edges: (E == null ? void 0 : E.edges) || {},
      modifiers: (E == null ? void 0 : E.modifiers) || [],
      listeners: {
        start: U,
        move: Ne,
        end: R
      }
    };
    (E == null ? void 0 : E.square) !== void 0 && (xe.square = E.square), (E == null ? void 0 : E.preserveAspectRatio) !== void 0 && (xe.preserveAspectRatio = E.preserveAspectRatio), E != null && E.invert && (xe.invert = E.invert), (E == null ? void 0 : E.margin) !== void 0 && (xe.margin = E.margin), (E == null ? void 0 : E.max) !== void 0 && (xe.max = E.max), (E == null ? void 0 : E.maxPerElement) !== void 0 && (xe.maxPerElement = E.maxPerElement), (E == null ? void 0 : E.minWidth) !== void 0 && (xe.minWidth = $e(E.minWidth, s, "width")), (E == null ? void 0 : E.minHeight) !== void 0 && (xe.minHeight = $e(E.minHeight, s, "height")), (E == null ? void 0 : E.maxWidth) !== void 0 && (xe.maxWidth = $e(E.maxWidth, s, "width")), (E == null ? void 0 : E.maxHeight) !== void 0 && (xe.maxHeight = $e(E.maxHeight, s, "height"));
    try {
      Re.resizable(xe);
    } catch (D) {
      console.error("Error setting up resizable:", D);
    }
  }
  if (s instanceof HTMLElement && (s.style.transition = "none", s.style.width = `${Y}px`, s.style.height = `${Q}px`), s instanceof HTMLElement) {
    const B = getComputedStyle(s), I = B.position === "absolute" || B.position === "fixed";
    w && !I ? s.style.transform = `translate(${$}px, ${j}px)` : I ? (!Z() && !P() && (s.style.left = `${$}px`), !H() && !ee() && (s.style.top = `${j}px`)) : s.style.transform = `translate(${$}px, ${j}px)`;
  }
  const Pe = (B, I) => {
    if ($ = Pt(B, s, "x"), j = Pt(I, s, "y"), s instanceof HTMLElement) {
      const fe = getComputedStyle(s), se = fe.position === "absolute" || fe.position === "fixed", le = (A) => {
        typeof A == "string" && Rt(A) && se ? s.style.left = A : s.style.left = `${$}px`;
      }, U = (A) => {
        typeof A == "string" && Rt(A) && se ? s.style.top = A : s.style.top = `${j}px`;
      };
      w && !se ? s.style.transform = `translate(${$}px, ${j}px)` : se ? (s.style.right = "", s.style.bottom = "", le(B), U(I)) : s.style.transform = `translate(${$}px, ${j}px)`;
    }
    s instanceof Element && (s.setAttribute("data-x", typeof B == "string" ? B : $.toString()), s.setAttribute("data-y", typeof I == "string" ? I : j.toString()));
  }, pe = (B, I) => {
    if (Y = typeof B == "number" ? B : $e(B, s, "width"), Q = typeof I == "number" ? I : $e(I, s, "height"), s instanceof HTMLElement) {
      const fe = (le) => {
        typeof le == "string" && Rt(le) ? s.style.width = le : s.style.width = `${Y}px`;
      }, se = (le) => {
        typeof le == "string" && Rt(le) ? s.style.height = le : s.style.height = `${Q}px`;
      };
      fe(B), se(I);
    }
    s instanceof Element && (s.setAttribute("data-width", typeof B == "string" ? B : Y.toString()), s.setAttribute("data-height", typeof I == "string" ? I : Q.toString()));
  };
  return {
    cleanup: () => {
      b.forEach((B) => {
        B._mouseEnterListener && B.removeEventListener("mouseenter", B._mouseEnterListener), B._mouseLeaveListener && B.removeEventListener("mouseleave", B._mouseLeaveListener), B.remove();
      });
      try {
        Re.unset();
      } catch (B) {
        console.error("Error unsetting interactable:", B);
      }
    },
    updatePositionAndSize: (B, I, fe, se) => {
      Pe(B, I), pe(fe, se);
    },
    updatePosition: Pe,
    updateSize: pe
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
    const c = s, y = p, v = Je(), k = Je(typeof c.initialX == "number" ? c.initialX : 0), w = Je(typeof c.initialY == "number" ? c.initialY : 0), h = Je(typeof c.initialWidth == "number" ? c.initialWidth : 200), E = Je(typeof c.initialHeight == "number" ? c.initialHeight : 150), ie = Je(!1), X = Je(!1), ye = Je({});
    let re = null, be = null, Ce = null, Me = null;
    const Ee = [], ge = tt(() => ({
      x: k.value,
      y: w.value,
      width: h.value,
      height: E.value,
      isDragging: ie.value,
      isResizing: X.value,
      activeEdges: ye.value
    })), $ = () => ({
      onDrag: (C) => {
        C.type === "dragmove" ? requestAnimationFrame(() => {
          k.value = C.left, w.value = C.top, y("dragMove", C);
        }) : (C.type === "dragstart" ? (ie.value = !0, y("dragStart", C)) : C.type === "dragend" && (ie.value = !1, y("dragEnd", C)), k.value = C.left, w.value = C.top);
      },
      onResize: (C) => {
        C.type === "resizemove" ? requestAnimationFrame(() => {
          h.value = C.width, E.value = C.height, k.value = C.left, w.value = C.top, y("resizeMove", C);
        }) : (C.type === "resizestart" ? (X.value = !0, y("resizeStart", C)) : C.type === "resizeend" && (X.value = !1, y("resizeEnd", C)), h.value = C.width, E.value = C.height, k.value = C.left, w.value = C.top, ye.value = C.edges || {});
      }
    }), j = tt(() => ({
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
      const C = $(), Z = Ha(
        v.value,
        j.value,
        C
      );
      re = Z.cleanup, be = Z.updatePositionAndSize, Ce = Z.updatePosition, Me = Z.updateSize;
    };
    Ee.push(
      ve(
        [
          () => c.draggable,
          () => c.resizable,
          () => c.dragOptions,
          () => c.resizeOptions
        ],
        () => {
          re && (re(), re = null), Y();
        },
        {
          deep: c.watchDeep,
          immediate: c.watchImmediate
        }
      )
    ), Ee.push(
      ve(
        [
          () => c.initialX,
          () => c.initialY,
          () => c.initialWidth,
          () => c.initialHeight
        ],
        ([C, Z, P, H]) => {
          be && (be(C, Z, P, H), typeof C == "number" && (k.value = C), typeof Z == "number" && (w.value = Z), typeof P == "number" && (h.value = P), typeof H == "number" && (E.value = H));
        }
      )
    ), Bn(() => {
      Y(), typeof c.initialX == "string" && (k.value = Pt(c.initialX, v.value, "x")), typeof c.initialY == "string" && (w.value = Pt(c.initialY, v.value, "y")), typeof c.initialWidth == "string" && (h.value = $e(c.initialWidth, v.value, "width")), typeof c.initialHeight == "string" && (E.value = $e(c.initialHeight, v.value, "height"));
    });
    const Q = Mt((C, Z, P, H) => {
      be && (be(C, Z, P, H), typeof C == "number" && (k.value = C), typeof Z == "number" && (w.value = Z), typeof P == "number" && (h.value = P), typeof H == "number" && (E.value = H));
    }, 16), b = Mt((C, Z) => {
      Ce && (Ce(C, Z), typeof C == "number" && (k.value = C), typeof Z == "number" && (w.value = Z));
    }, 16), _e = Mt((C, Z) => {
      Me && (Me(C, Z), typeof C == "number" && (h.value = C), typeof Z == "number" && (E.value = Z));
    }, 16);
    return Ro(() => {
      re && (re(), re = null), Ee != null && Ee.length && (Ee.forEach((C) => C()), Ee.length = 0), be = null, Ce = null, Me = null;
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
    }), (C, Z) => (it(), ut("div", {
      ref_key: "elementRef",
      ref: v,
      class: "draggable-resizable-wrapper"
    }, [
      pn(C.$slots, "default", Po(Mo(ge.value)))
    ], 512));
  }
});
export {
  qa as DraggableResizableWrapper,
  Ti as GridItem,
  Wa as GridLayout,
  Rt as isCssUnitValue,
  Ha as makeElementDraggableResizable,
  $e as parseCssSize,
  Pt as parsePositionValue
};
//# sourceMappingURL=grid-layout-plus.mjs.map
