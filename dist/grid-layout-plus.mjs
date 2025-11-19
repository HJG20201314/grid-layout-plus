(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;top:0;right:3px;bottom:3px;left:0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{top:0;right:0;bottom:3px;left:3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}.vgl-item__edge{position:absolute;pointer-events:auto;background-color:transparent;transition:background-color .12s ease}.vgl-item__edge--top,.vgl-item__edge--bottom{right:0;left:0;height:2px}.vgl-item__edge--left,.vgl-item__edge--right{top:0;bottom:0;width:2px}.vgl-item__edge--top{top:0}.vgl-item__edge--bottom{bottom:0}.vgl-item__edge--left{left:0}.vgl-item__edge--right{right:0}.vgl-item__edge.is-enabled:not(.is-active):hover{background-color:#1d62ec}.vgl-item__edge.is-active{background-color:#1d62ec}.draggable-resizable-wrapper{position:relative}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as Cn, inject as dr, shallowRef as ho, reactive as Yt, ref as Ke, toRef as go, onBeforeMount as Fr, onMounted as An, watchEffect as vo, onBeforeUnmount as Lr, computed as et, watch as ve, createElementBlock as ct, openBlock as it, normalizeStyle as Hr, normalizeClass as _t, renderSlot as un, createCommentVNode as Wt, nextTick as ht, provide as pr, toRefs as hr, withDirectives as mo, Fragment as yo, renderList as bo, createBlock as xo, mergeProps as wo, withCtx as Eo, createVNode as So, vShow as zo, onUnmounted as To, normalizeProps as ko, guardReactiveProps as _o } from "vue";
const Ro = typeof window < "u";
var gr;
Ro && ((gr = window == null ? void 0 : window.navigator) != null && gr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Xe(l) {
  return l == null;
}
function jr() {
}
const Po = Object.freeze({
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
Object.freeze(new Set(Object.keys(Po)));
function Mo() {
  const l = /* @__PURE__ */ new Map();
  return {
    on(d, p) {
      const c = l.get(d);
      c != null && c.add(p) || l.set(d, /* @__PURE__ */ new Set([p]));
    },
    off(d, p) {
      const c = l.get(d);
      c && c.delete(p);
    },
    clear(d) {
      const p = l.get(d);
      p && p.clear();
    },
    clearAll() {
      l.clear();
    },
    emit(d, ...p) {
      const c = l.get(d);
      c && c.forEach((x) => {
        x(...p);
      });
    }
  };
}
function Rn(l, d = 16) {
  if (typeof l != "function")
    return jr;
  const p = (...m) => {
    l(...m);
  };
  if (d <= 0)
    return Wr(p);
  let c = 0, x;
  return function(...m) {
    const R = Date.now(), w = R - c;
    clearTimeout(x), w >= d ? (c = R, p(...m)) : x = setTimeout(
      () => {
        c = Date.now(), p(...m);
      },
      Math.max(0, d - w)
    );
  };
}
function Do(l, d = 100) {
  if (typeof l != "function")
    return jr;
  const p = (...x) => {
    l(...x);
  };
  if (d <= 0)
    return Wr(p);
  let c;
  return function(...x) {
    clearTimeout(c), c = setTimeout(() => {
      p(...x);
    }, d);
  };
}
function Wr(l) {
  if (typeof l != "function")
    return l;
  let d = !1, p, c;
  return function(...x) {
    return p = x, d || (d = !0, c = Promise.resolve().then(() => (d = !1, c = void 0, l(...p)))), c;
  };
}
const qt = /* @__PURE__ */ new Set(), $r = /* @__PURE__ */ new WeakMap();
function Oo() {
  qt.forEach((l) => {
    l(...$r.get(l));
  }), qt.clear();
}
function Le(l, ...d) {
  if (typeof l != "function")
    return l;
  $r.set(l, d), !qt.has(l) && (qt.add(l), qt.size === 1 && Promise.resolve().then(Oo));
}
const qr = Symbol("LAYOUT_KEY"), Nr = Symbol("EMITTER_KEY");
function Co(l) {
  let d = 0, p;
  for (let c = 0, x = l.length; c < x; c++)
    p = l[c].y + l[c].h, p > d && (d = p);
  return d;
}
function Pn(l) {
  const d = Array(l.length);
  for (let p = 0, c = l.length; p < c; p++)
    d[p] = Ao(l[p]);
  return d;
}
function Ao(l) {
  return { ...l };
}
function Xr(l, d) {
  return !(l === d || l.x + l.w <= d.x || l.x >= d.x + d.w || l.y + l.h <= d.y || l.y >= d.y + d.h);
}
function Rt(l, d, p) {
  const c = Vr(l), x = Gr(l), m = Array(l.length);
  for (let R = 0, w = x.length; R < w; R++) {
    let h = x[R];
    h.static || (h = Io(c, h, d, p), c.push(h)), m[l.findIndex((S) => S.i === h.i)] = h, h.moved = !1;
  }
  return m;
}
function Io(l, d, p, c) {
  if (p)
    for (; d.y > 0 && !Nt(l, d); )
      d.y--;
  else if (c) {
    const m = c[d.i].y;
    for (; d.y > m && !Nt(l, d); )
      d.y--;
  }
  let x;
  for (; x = Nt(l, d); )
    d.y = x.y + x.h;
  return d;
}
function Bo(l, d) {
  const p = Vr(l);
  for (let c = 0, x = l.length; c < x; c++) {
    const m = l[c];
    if (m.x + m.w > d.cols && (m.x = d.cols - m.w), m.x < 0 && (m.x = 0, m.w = d.cols), !m.static) p.push(m);
    else
      for (; Nt(p, m); )
        m.y++;
  }
  return l;
}
function vr(l, d) {
  for (let p = 0, c = l.length; p < c; p++)
    if (l[p].i === d) return l[p];
}
function Nt(l, d) {
  for (let p = 0, c = l.length; p < c; p++)
    if (Xr(l[p], d)) return l[p];
}
function Yr(l, d) {
  return l.filter((p) => Xr(p, d));
}
function Vr(l) {
  return l.filter((d) => d.static);
}
function Mn(l, d, p, c, x = !1, m = !1) {
  if (d.static) return l;
  const R = d.x, w = d.y, h = c && d.y > c;
  typeof p == "number" && (d.x = p), typeof c == "number" && (d.y = c), d.moved = !0;
  let S = Gr(l);
  h && (S = S.reverse());
  const ee = Yr(S, d);
  if (m && ee.length)
    return d.x = R, d.y = w, d.moved = !1, l;
  for (let q = 0, ye = ee.length; q < ye; q++) {
    const te = ee[q];
    te.moved || d.y > te.y && d.y - te.y > te.h / 4 || (te.static ? l = mr(l, te, d, x) : l = mr(l, d, te, x));
  }
  return l;
}
function mr(l, d, p, c) {
  if (c) {
    const m = {
      x: p.x,
      y: p.y,
      w: p.w,
      h: p.h
    };
    if (m.y = Math.max(d.y - p.h, 0), !Nt(l, m))
      return Mn(l, p, void 0, m.y, !1);
  }
  return Mn(l, p, void 0, p.y + 1, !1);
}
function Fo(l, d, p, c) {
  const x = "translate3d(" + d + "px," + l + "px, 0)";
  return {
    transform: x,
    WebkitTransform: x,
    MozTransform: x,
    msTransform: x,
    OTransform: x,
    width: p + "px",
    height: c + "px",
    position: "absolute"
  };
}
function Lo(l, d, p, c) {
  const x = "translate3d(" + d * -1 + "px," + l + "px, 0)";
  return {
    transform: x,
    WebkitTransform: x,
    MozTransform: x,
    msTransform: x,
    OTransform: x,
    width: p + "px",
    height: c + "px",
    position: "absolute"
  };
}
function Ho(l, d, p, c) {
  return {
    top: l + "px",
    left: d + "px",
    width: p + "px",
    height: c + "px",
    position: "absolute"
  };
}
function jo(l, d, p, c) {
  return {
    top: l + "px",
    right: d + "px",
    width: p + "px",
    height: c + "px",
    position: "absolute"
  };
}
function Gr(l) {
  return Array.from(l).sort(function(d, p) {
    return d.y === p.y && d.x === p.x ? 0 : d.y > p.y || d.y === p.y && d.x > p.x ? 1 : -1;
  });
}
function Wo(l, d) {
  d = d || "Layout";
  const p = ["x", "y", "w", "h"], c = [];
  if (!Array.isArray(l)) throw new Error(d + " must be an array!");
  for (let x = 0, m = l.length; x < m; x++) {
    const R = l[x];
    for (let w = 0; w < p.length; w++)
      if (typeof R[p[w]] != "number")
        throw new Error(
          "VueGridLayout: " + d + "[" + x + "]." + p[w] + " must be a number!"
        );
    if (R.i === void 0 || R.i === null)
      throw new Error("VueGridLayout: " + d + "[" + x + "].i cannot be null!");
    if (typeof R.i != "number" && typeof R.i != "string")
      throw new Error("VueGridLayout: " + d + "[" + x + "].i must be a string or number!");
    if (c.indexOf(R.i) >= 0)
      throw new Error("VueGridLayout: " + d + "[" + x + "].i must be unique!");
    if (c.push(R.i), R.static !== void 0 && typeof R.static != "boolean")
      throw new Error("VueGridLayout: " + d + "[" + x + "].static must be a boolean!");
  }
}
function $o(l, d = "vgl") {
  const p = () => `${d}-${l}`;
  return {
    b: p,
    be: (R) => `${p()}__${R}`,
    bm: (R) => `${p()}--${R}`,
    bem: (R, w) => `${p()}__${R}--${w}`
  };
}
function yr(l) {
  return qo(l);
}
function qo(l) {
  var m;
  const d = ((m = l.target) == null ? void 0 : m.offsetParent) || document.body, p = l.offsetParent === document.body ? { left: 0, top: 0 } : d.getBoundingClientRect(), c = l.clientX + d.scrollLeft - p.left, x = l.clientY + d.scrollTop - p.top;
  return { x: c, y: x };
}
function br(l, d, p, c) {
  return No(l) ? {
    deltaX: p - l,
    deltaY: c - d,
    lastX: l,
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
function No(l) {
  return typeof l == "number" && !Number.isNaN(l);
}
function Xo(l, d) {
  const p = Kr(l);
  let c = p[0];
  for (let x = 1, m = p.length; x < m; x++) {
    const R = p[x];
    d > l[R] && (c = R);
  }
  return c;
}
function Ur(l, d) {
  if (!d[l])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + l + " is missing!"
    );
  return d[l];
}
function Yo(l, d, p, c, x, m, R) {
  if (d[c]) return Pn(d[c]);
  let w = l;
  const h = Kr(p), S = h.slice(h.indexOf(c));
  for (let ee = 0, q = S.length; ee < q; ee++) {
    const ye = S[ee];
    if (d[ye]) {
      w = d[ye];
      break;
    }
  }
  return w = Pn(w || []), Rt(Bo(w, { cols: m }), R);
}
function Kr(l) {
  return Object.keys(l).sort((p, c) => l[p] - l[c]);
}
let Vo = "auto";
function Go() {
  return typeof document < "u";
}
function xr() {
  return Go() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : Vo;
}
function Uo(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var $t = { exports: {} }, Ko = $t.exports, wr;
function Jo() {
  return wr || (wr = 1, function(l, d) {
    (function(p, c) {
      l.exports = c();
    })(Ko, function() {
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
      function x(t) {
        return x = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, x(t);
      }
      function m(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function R(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Oe(r.key), r);
        }
      }
      function w(t, e, n) {
        return e && R(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
      }
      function h(t, e, n) {
        return (e = Oe(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
      }
      function S(t, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && q(t, e);
      }
      function ee(t) {
        return ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, ee(t);
      }
      function q(t, e) {
        return q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
          return n.__proto__ = r, n;
        }, q(t, e);
      }
      function ye(t) {
        if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function te(t) {
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
          var n, r = ee(t);
          if (e) {
            var i = ee(this).constructor;
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
            for (; !Object.prototype.hasOwnProperty.call(o, a) && (o = ee(o)) !== null; ) ;
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
      var Pe = function(t) {
        return !(!t || !t.Window) && t instanceof t.Window;
      }, we = void 0, he = void 0;
      function Q(t) {
        we = t;
        var e = t.document.createTextNode("");
        e.ownerDocument !== t.document && typeof t.wrap == "function" && t.wrap(e) === e && (t = t.wrap(t)), he = t;
      }
      function oe(t) {
        return Pe(t) ? t : (t.ownerDocument || t).defaultView || he.window;
      }
      typeof window < "u" && window && Q(window);
      var re = function(t) {
        return !!t && x(t) === "object";
      }, pe = function(t) {
        return typeof t == "function";
      }, y = { window: function(t) {
        return t === he || Pe(t);
      }, docFrag: function(t) {
        return re(t) && t.nodeType === 11;
      }, object: re, func: pe, number: function(t) {
        return typeof t == "number";
      }, bool: function(t) {
        return typeof t == "boolean";
      }, string: function(t) {
        return typeof t == "string";
      }, element: function(t) {
        if (!t || x(t) !== "object") return !1;
        var e = oe(t) || he;
        return /object|function/.test(typeof Element > "u" ? "undefined" : x(Element)) ? t instanceof Element || t instanceof e.Element : t.nodeType === 1 && typeof t.nodeName == "string";
      }, plainObject: function(t) {
        return re(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString());
      }, array: function(t) {
        return re(t) && t.length !== void 0 && pe(t.splice);
      } };
      function Ee(t) {
        var e = t.interaction;
        if (e.prepared.name === "drag") {
          var n = e.prepared.axis;
          n === "x" ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : n === "y" && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
        }
      }
      function I(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "drag") {
          var r = n.prepared.axis;
          if (r === "x" || r === "y") {
            var i = r === "x" ? "y" : "x";
            e.page[i] = n.coords.start.page[i], e.client[i] = n.coords.start.client[i], e.delta[i] = 0;
          }
        }
      }
      var L = { id: "actions/drag", install: function(t) {
        var e = t.actions, n = t.Interactable, r = t.defaults;
        n.prototype.draggable = L.draggable, e.map.drag = L, e.methodDict.drag = "draggable", r.actions.drag = L.defaults;
      }, listeners: { "interactions:before-action-move": Ee, "interactions:action-resume": Ee, "interactions:action-move": I, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, r = t.buttons, i = n.options.drag;
        if (i && i.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || (r & n.options.drag.mouseButtons) != 0)) return t.action = { name: "drag", axis: i.lockAxis === "start" ? i.startAxis : i.lockAxis }, !1;
      } }, draggable: function(t) {
        return y.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : y.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
      }, beforeMove: Ee, move: I, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(t) {
        return t.search("drag") === 0;
      } }, k = L, A = { init: function(t) {
        var e = t;
        A.document = e.document, A.DocumentFragment = e.DocumentFragment || H, A.SVGElement = e.SVGElement || H, A.SVGSVGElement = e.SVGSVGElement || H, A.SVGElementInstance = e.SVGElementInstance || H, A.Element = e.Element || H, A.HTMLElement = e.HTMLElement || A.Element, A.Event = e.Event, A.Touch = e.Touch || H, A.PointerEvent = e.PointerEvent || e.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function H() {
      }
      var ie = A, le = { init: function(t) {
        var e = ie.Element, n = t.navigator || {};
        le.supportsTouch = "ontouchstart" in t || y.func(t.DocumentTouch) && ie.document instanceof t.DocumentTouch, le.supportsPointerEvent = n.pointerEnabled !== !1 && !!ie.PointerEvent, le.isIOS = /iP(hone|od|ad)/.test(n.platform), le.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), le.isIe9 = /MSIE 9/.test(n.userAgent), le.isOperaMobile = n.appName === "Opera" && le.supportsTouch && /Presto/.test(n.userAgent), le.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", le.pEventTypes = le.supportsPointerEvent ? ie.PointerEvent === t.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, le.wheelEvent = ie.document && "onmousewheel" in ie.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, ue = le;
      function Y(t, e) {
        if (t.contains) return t.contains(e);
        for (; e; ) {
          if (e === t) return !0;
          e = e.parentNode;
        }
        return !1;
      }
      function ze(t, e) {
        for (; y.element(t); ) {
          if (fe(t, e)) return t;
          t = ge(t);
        }
        return null;
      }
      function ge(t) {
        var e = t.parentNode;
        if (y.docFrag(e)) {
          for (; (e = e.host) && y.docFrag(e); ) ;
          return e;
        }
        return e;
      }
      function fe(t, e) {
        return he !== we && (e = e.replace(/\/deep\//g, " ")), t[ue.prefixedMatchesSelector](e);
      }
      var ce = function(t) {
        return t.parentNode || t.host;
      };
      function tt(t, e) {
        for (var n, r = [], i = t; (n = ce(i)) && i !== e && n !== i.ownerDocument; ) r.unshift(i), i = n;
        return r;
      }
      function O(t, e, n) {
        for (; y.element(t); ) {
          if (fe(t, e)) return !0;
          if ((t = ge(t)) === n) return fe(t, e);
        }
        return !1;
      }
      function N(t) {
        return t.correspondingUseElement || t;
      }
      function ae(t) {
        var e = t instanceof ie.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
        return e && { left: e.left, right: e.right, top: e.top, bottom: e.bottom, width: e.width || e.right - e.left, height: e.height || e.bottom - e.top };
      }
      function de(t) {
        var e, n = ae(t);
        if (!ue.isIOS7 && n) {
          var r = { x: (e = (e = oe(t)) || he).scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };
          n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y;
        }
        return n;
      }
      function X(t) {
        for (var e = []; t; ) e.push(t), t = ge(t);
        return e;
      }
      function V(t) {
        return !!y.string(t) && (ie.document.querySelector(t), !0);
      }
      function P(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function Je(t, e, n) {
        return t === "parent" ? ge(n) : t === "self" ? e.getRect(n) : ze(n, t);
      }
      function je(t, e, n, r) {
        var i = t;
        return y.string(i) ? i = Je(i, e, n) : y.func(i) && (i = i.apply(void 0, r)), y.element(i) && (i = de(i)), i;
      }
      function Ye(t) {
        return t && { x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top };
      }
      function Te(t) {
        return !t || "x" in t && "y" in t || ((t = P({}, t)).x = t.left || 0, t.y = t.top || 0, t.width = t.width || (t.right || 0) - t.x, t.height = t.height || (t.bottom || 0) - t.y), t;
      }
      function M(t, e, n) {
        t.left && (e.left += n.x), t.right && (e.right += n.x), t.top && (e.top += n.y), t.bottom && (e.bottom += n.y), e.width = e.right - e.left, e.height = e.bottom - e.top;
      }
      function ke(t, e, n) {
        var r = n && t.options[n];
        return Ye(je(r && r.origin || t.options.origin, t, e, [t && e])) || { x: 0, y: 0 };
      }
      function xe(t, e) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(u) {
          return !0;
        }, r = arguments.length > 3 ? arguments[3] : void 0;
        if (r = r || {}, y.string(t) && t.search(" ") !== -1 && (t = Ce(t)), y.array(t)) return t.forEach(function(u) {
          return xe(u, e, n, r);
        }), r;
        if (y.object(t) && (e = t, t = ""), y.func(e) && n(t)) r[t] = r[t] || [], r[t].push(e);
        else if (y.array(e)) for (var i = 0, o = e; i < o.length; i++) {
          var a = o[i];
          xe(t, a, n, r);
        }
        else if (y.object(e)) for (var s in e)
          xe(Ce(s).map(function(u) {
            return "".concat(t).concat(u);
          }), e[s], n, r);
        return r;
      }
      function Ce(t) {
        return t.trim().split(/ +/);
      }
      var _e = function(t, e) {
        return Math.sqrt(t * t + e * e);
      }, Ve = ["webkit", "moz"];
      function Me(t, e) {
        t.__set || (t.__set = {});
        var n = function(i) {
          if (Ve.some(function(o) {
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
      function We(t, e) {
        t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp;
      }
      function He(t) {
        t.page.x = 0, t.page.y = 0, t.client.x = 0, t.client.y = 0;
      }
      function nt(t) {
        return t instanceof ie.Event || t instanceof ie.Touch;
      }
      function Ae(t, e, n) {
        return t = t || "page", (n = n || {}).x = e[t + "X"], n.y = e[t + "Y"], n;
      }
      function E(t, e) {
        return e = e || { x: 0, y: 0 }, ue.isOperaMobile && nt(t) ? (Ae("screen", t, e), e.x += window.scrollX, e.y += window.scrollY) : Ae("page", t, e), e;
      }
      function W(t) {
        return y.number(t.pointerId) ? t.pointerId : t.identifier;
      }
      function ne(t, e, n) {
        var r = e.length > 1 ? se(e) : e[0];
        E(r, t.page), function(i, o) {
          o = o || {}, ue.isOperaMobile && nt(i) ? Ae("screen", i, o) : Ae("client", i, o);
        }(r, t.client), t.timeStamp = n;
      }
      function J(t) {
        var e = [];
        return y.array(t) ? (e[0] = t[0], e[1] = t[1]) : t.type === "touchend" ? t.touches.length === 1 ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : t.touches.length === 0 && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e;
      }
      function se(t) {
        for (var e = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n = 0; n < t.length; n++) {
          var r = t[n];
          for (var i in e) e[i] += r[i];
        }
        for (var o in e) e[o] /= t.length;
        return e;
      }
      function K(t) {
        if (!t.length) return null;
        var e = J(t), n = Math.min(e[0].pageX, e[1].pageX), r = Math.min(e[0].pageY, e[1].pageY), i = Math.max(e[0].pageX, e[1].pageX), o = Math.max(e[0].pageY, e[1].pageY);
        return { x: n, y: r, left: n, top: r, right: i, bottom: o, width: i - n, height: o - r };
      }
      function F(t, e) {
        var n = e + "X", r = e + "Y", i = J(t), o = i[0][n] - i[1][n], a = i[0][r] - i[1][r];
        return _e(o, a);
      }
      function Se(t, e) {
        var n = e + "X", r = e + "Y", i = J(t), o = i[1][n] - i[0][n], a = i[1][r] - i[0][r];
        return 180 * Math.atan2(a, o) / Math.PI;
      }
      function De(t) {
        return y.string(t.pointerType) ? t.pointerType : y.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : /touch/.test(t.type || "") || t instanceof ie.Touch ? "touch" : "mouse";
      }
      function Ie(t) {
        var e = y.func(t.composedPath) ? t.composedPath() : t.path;
        return [N(e ? e[0] : t.target), N(t.currentTarget)];
      }
      var $e = function() {
        function t(e) {
          m(this, t), this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = e;
        }
        return w(t, [{ key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), t;
      }();
      Object.defineProperty($e.prototype, "interaction", { get: function() {
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
      }, qe = function(t) {
        S(n, t);
        var e = te(n);
        function n(r, i, o) {
          var a;
          m(this, n), (a = e.call(this, i._interaction)).dropzone = void 0, a.dragEvent = void 0, a.relatedTarget = void 0, a.draggable = void 0, a.propagationStopped = !1, a.immediatePropagationStopped = !1;
          var s = o === "dragleave" ? r.prev : r.cur, u = s.element, g = s.dropzone;
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
            var s = new n(i, this.dragEvent, "dropdeactivate");
            s.dropzone = this.dropzone, s.target = this.target, this.dropzone.fire(s);
          } else this.dropzone.fire(new n(i, this.dragEvent, "dragleave"));
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), n;
      }($e);
      function Mt(t, e) {
        for (var n = 0, r = t.slice(); n < r.length; n++) {
          var i = r[n], o = i.dropzone, a = i.element;
          e.dropzone = o, e.target = a, o.fire(e), e.propagationStopped = e.immediatePropagationStopped = !1;
        }
      }
      function xt(t, e) {
        for (var n = function(o, a) {
          for (var s = [], u = 0, g = o.interactables.list; u < g.length; u++) {
            var f = g[u];
            if (f.options.drop.enabled) {
              var v = f.options.drop.accept;
              if (!(y.element(v) && v !== a || y.string(v) && !fe(a, v) || y.func(v) && !v({ dropzone: f, draggableElement: a }))) for (var b = 0, T = f.getAllElements(); b < T.length; b++) {
                var z = T[b];
                z !== a && s.push({ dropzone: f, element: z, rect: f.getRect(z) });
              }
            }
          }
          return s;
        }(t, e), r = 0; r < n.length; r++) {
          var i = n[r];
          i.rect = i.dropzone.getRect(i.element);
        }
        return n;
      }
      function Dt(t, e, n) {
        for (var r = t.dropState, i = t.interactable, o = t.element, a = [], s = 0, u = r.activeDrops; s < u.length; s++) {
          var g = u[s], f = g.dropzone, v = g.element, b = g.rect, T = f.dropCheck(e, n, i, o, v, b);
          a.push(T ? v : null);
        }
        var z = function(_) {
          for (var C, D, B, G = [], Z = 0; Z < _.length; Z++) {
            var j = _[Z], U = _[C];
            if (j && Z !== C) if (U) {
              var Fe = ce(j), me = ce(U);
              if (Fe !== j.ownerDocument) if (me !== j.ownerDocument) if (Fe !== me) {
                G = G.length ? G : tt(U);
                var Ne = void 0;
                if (U instanceof ie.HTMLElement && j instanceof ie.SVGElement && !(j instanceof ie.SVGSVGElement)) {
                  if (j === me) continue;
                  Ne = j.ownerSVGElement;
                } else Ne = j;
                for (var Qe = tt(Ne, U.ownerDocument), lt = 0; Qe[lt] && Qe[lt] === G[lt]; ) lt++;
                var rn = [Qe[lt - 1], Qe[lt], G[lt]];
                if (rn[0]) for (var jt = rn[0].lastChild; jt; ) {
                  if (jt === rn[1]) {
                    C = Z, G = Qe;
                    break;
                  }
                  if (jt === rn[2]) break;
                  jt = jt.previousSibling;
                }
              } else B = U, (parseInt(oe(D = j).getComputedStyle(D).zIndex, 10) || 0) >= (parseInt(oe(B).getComputedStyle(B).zIndex, 10) || 0) && (C = Z);
              else C = Z;
            } else C = Z;
          }
          return C;
        }(a);
        return r.activeDrops[z] || null;
      }
      function wt(t, e, n) {
        var r = t.dropState, i = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return n.type === "dragstart" && (i.activate = new qe(r, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), n.type === "dragend" && (i.deactivate = new qe(r, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (i.leave = new qe(r, n, "dragleave"), n.dragLeave = i.leave.target = r.prev.element, n.prevDropzone = i.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (i.enter = new qe(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), n.type === "dragend" && r.cur.dropzone && (i.drop = new qe(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), n.type === "dragmove" && r.cur.dropzone && (i.move = new qe(r, n, "dropmove"), n.dropzone = r.cur.dropzone)), i;
      }
      function Et(t, e) {
        var n = t.dropState, r = n.activeDrops, i = n.cur, o = n.prev;
        e.leave && o.dropzone.fire(e.leave), e.enter && i.dropzone.fire(e.enter), e.move && i.dropzone.fire(e.move), e.drop && i.dropzone.fire(e.drop), e.deactivate && Mt(r, e.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
      }
      function Ot(t, e) {
        var n = t.interaction, r = t.iEvent, i = t.event;
        if (r.type === "dragmove" || r.type === "dragend") {
          var o = n.dropState;
          e.dynamicDrop && (o.activeDrops = xt(e, n.element));
          var a = r, s = Dt(n, a, i);
          o.rejected = o.rejected && !!s && s.dropzone === o.cur.dropzone && s.element === o.cur.element, o.cur.dropzone = s && s.dropzone, o.cur.element = s && s.element, o.events = wt(n, 0, a);
        }
      }
      var Ct = { id: "actions/drop", install: function(t) {
        var e = t.actions, n = t.interactStatic, r = t.Interactable, i = t.defaults;
        t.usePlugin(k), r.prototype.dropzone = function(o) {
          return function(a, s) {
            if (y.object(s)) {
              if (a.options.drop.enabled = s.enabled !== !1, s.listeners) {
                var u = xe(s.listeners), g = Object.keys(u).reduce(function(v, b) {
                  return v[/^(enter|leave)/.test(b) ? "drag".concat(b) : /^(activate|deactivate|move)/.test(b) ? "drop".concat(b) : b] = u[b], v;
                }, {}), f = a.options.drop.listeners;
                f && a.off(f), a.on(g), a.options.drop.listeners = g;
              }
              return y.func(s.ondrop) && a.on("drop", s.ondrop), y.func(s.ondropactivate) && a.on("dropactivate", s.ondropactivate), y.func(s.ondropdeactivate) && a.on("dropdeactivate", s.ondropdeactivate), y.func(s.ondragenter) && a.on("dragenter", s.ondragenter), y.func(s.ondragleave) && a.on("dragleave", s.ondragleave), y.func(s.ondropmove) && a.on("dropmove", s.ondropmove), /^(pointer|center)$/.test(s.overlap) ? a.options.drop.overlap = s.overlap : y.number(s.overlap) && (a.options.drop.overlap = Math.max(Math.min(1, s.overlap), 0)), "accept" in s && (a.options.drop.accept = s.accept), "checker" in s && (a.options.drop.checker = s.checker), a;
            }
            return y.bool(s) ? (a.options.drop.enabled = s, a) : a.options.drop;
          }(this, o);
        }, r.prototype.dropCheck = function(o, a, s, u, g, f) {
          return function(v, b, T, z, _, C, D) {
            var B = !1;
            if (!(D = D || v.getRect(C))) return !!v.options.drop.checker && v.options.drop.checker(b, T, B, v, C, z, _);
            var G = v.options.drop.overlap;
            if (G === "pointer") {
              var Z = ke(z, _, "drag"), j = E(b);
              j.x += Z.x, j.y += Z.y;
              var U = j.x > D.left && j.x < D.right, Fe = j.y > D.top && j.y < D.bottom;
              B = U && Fe;
            }
            var me = z.getRect(_);
            if (me && G === "center") {
              var Ne = me.left + me.width / 2, Qe = me.top + me.height / 2;
              B = Ne >= D.left && Ne <= D.right && Qe >= D.top && Qe <= D.bottom;
            }
            return me && y.number(G) && (B = Math.max(0, Math.min(D.right, me.right) - Math.max(D.left, me.left)) * Math.max(0, Math.min(D.bottom, me.bottom) - Math.max(D.top, me.top)) / (me.width * me.height) >= G), v.options.drop.checker && (B = v.options.drop.checker(b, T, B, v, C, z, _)), B;
          }(this, o, a, s, u, g, f);
        }, n.dynamicDrop = function(o) {
          return y.bool(o) ? (t.dynamicDrop = o, n) : t.dynamicDrop;
        }, P(e.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), e.methodDict.drop = "dropzone", t.dynamicDrop = !1, i.actions.drop = Ct.defaults;
      }, listeners: { "interactions:before-action-start": function(t) {
        var e = t.interaction;
        e.prepared.name === "drag" && (e.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(t, e) {
        var n = t.interaction, r = (t.event, t.iEvent);
        if (n.prepared.name === "drag") {
          var i = n.dropState;
          i.activeDrops = [], i.events = {}, i.activeDrops = xt(e, n.element), i.events = wt(n, 0, r), i.events.activate && (Mt(i.activeDrops, i.events.activate), e.fire("actions/drop:start", { interaction: n, dragEvent: r }));
        }
      }, "interactions:action-move": Ot, "interactions:after-action-move": function(t, e) {
        var n = t.interaction, r = t.iEvent;
        if (n.prepared.name === "drag") {
          var i = n.dropState;
          Et(n, i.events), e.fire("actions/drop:move", { interaction: n, dragEvent: r }), i.events = {};
        }
      }, "interactions:action-end": function(t, e) {
        if (t.interaction.prepared.name === "drag") {
          var n = t.interaction, r = t.iEvent;
          Ot(t, e), Et(n, n.dropState.events), e.fire("actions/drop:end", { interaction: n, dragEvent: r });
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction;
        if (e.prepared.name === "drag") {
          var n = e.dropState;
          n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1);
        }
      } }, getActiveDrops: xt, getDrop: Dt, getDropEvents: wt, fireDropEvents: Et, filterEventType: function(t) {
        return t.search("drag") === 0 || t.search("drop") === 0;
      }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, Gt = Ct;
      function St(t) {
        var e = t.interaction, n = t.iEvent, r = t.phase;
        if (e.prepared.name === "gesture") {
          var i = e.pointers.map(function(g) {
            return g.pointer;
          }), o = r === "start", a = r === "end", s = e.interactable.options.deltaSource;
          if (n.touches = [i[0], i[1]], o) n.distance = F(i, s), n.box = K(i), n.scale = 1, n.ds = 0, n.angle = Se(i, s), n.da = 0, e.gesture.startDistance = n.distance, e.gesture.startAngle = n.angle;
          else if (a || e.pointers.length < 2) {
            var u = e.prevEvent;
            n.distance = u.distance, n.box = u.box, n.scale = u.scale, n.ds = 0, n.angle = u.angle, n.da = 0;
          } else n.distance = F(i, s), n.box = K(i), n.scale = n.distance / e.gesture.startDistance, n.angle = Se(i, s), n.ds = n.scale - e.gesture.scale, n.da = n.angle - e.gesture.angle;
          e.gesture.distance = n.distance, e.gesture.angle = n.angle, y.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale);
        }
      }
      var zt = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t) {
        var e = t.actions, n = t.Interactable, r = t.defaults;
        n.prototype.gesturable = function(i) {
          return y.object(i) ? (this.options.gesture.enabled = i.enabled !== !1, this.setPerAction("gesture", i), this.setOnEvents("gesture", i), this) : y.bool(i) ? (this.options.gesture.enabled = i, this) : this.options.gesture;
        }, e.map.gesture = zt, e.methodDict.gesture = "gesturable", r.actions.gesture = zt.defaults;
      }, listeners: { "interactions:action-start": St, "interactions:action-move": St, "interactions:action-end": St, "interactions:new": function(t) {
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
      } }, Re = zt;
      function At(t, e, n, r, i, o, a) {
        if (!e) return !1;
        if (e === !0) {
          var s = y.number(o.width) ? o.width : o.right - o.left, u = y.number(o.height) ? o.height : o.bottom - o.top;
          if (a = Math.min(a, Math.abs((t === "left" || t === "right" ? s : u) / 2)), s < 0 && (t === "left" ? t = "right" : t === "right" && (t = "left")), u < 0 && (t === "top" ? t = "bottom" : t === "bottom" && (t = "top")), t === "left") {
            var g = s >= 0 ? o.left : o.right;
            return n.x < g + a;
          }
          if (t === "top") {
            var f = u >= 0 ? o.top : o.bottom;
            return n.y < f + a;
          }
          if (t === "right") return n.x > (s >= 0 ? o.right : o.left) - a;
          if (t === "bottom") return n.y > (u >= 0 ? o.bottom : o.top) - a;
        }
        return !!y.element(r) && (y.element(e) ? e === r : O(r, e, i));
      }
      function Tt(t) {
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
          return function(a, s, u) {
            return y.object(s) ? (a.options.resize.enabled = s.enabled !== !1, a.setPerAction("resize", s), a.setOnEvents("resize", s), y.string(s.axis) && /^x$|^y$|^xy$/.test(s.axis) ? a.options.resize.axis = s.axis : s.axis === null && (a.options.resize.axis = u.defaults.actions.resize.axis), y.bool(s.preserveAspectRatio) ? a.options.resize.preserveAspectRatio = s.preserveAspectRatio : y.bool(s.square) && (a.options.resize.square = s.square), a) : y.bool(s) ? (a.options.resize.enabled = s, a) : a.options.resize;
          }(this, o, t);
        }, e.map.resize = st, e.methodDict.resize = "resizable", i.actions.resize = st.defaults;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(t) {
        (function(e) {
          var n = e.iEvent, r = e.interaction;
          if (r.prepared.name === "resize" && r.prepared.edges) {
            var i = n, o = r.rect;
            r._rects = { start: P({}, o), corrected: P({}, o), previous: P({}, o), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, i.edges = r.prepared.edges, i.rect = r._rects.corrected, i.deltaRect = r._rects.delta;
          }
        })(t), Tt(t);
      }, "interactions:action-move": function(t) {
        (function(e) {
          var n = e.iEvent, r = e.interaction;
          if (r.prepared.name === "resize" && r.prepared.edges) {
            var i = n, o = r.interactable.options.resize.invert, a = o === "reposition" || o === "negate", s = r.rect, u = r._rects, g = u.start, f = u.corrected, v = u.delta, b = u.previous;
            if (P(b, f), a) {
              if (P(f, s), o === "reposition") {
                if (f.top > f.bottom) {
                  var T = f.top;
                  f.top = f.bottom, f.bottom = T;
                }
                if (f.left > f.right) {
                  var z = f.left;
                  f.left = f.right, f.right = z;
                }
              }
            } else f.top = Math.min(s.top, g.bottom), f.bottom = Math.max(s.bottom, g.top), f.left = Math.min(s.left, g.right), f.right = Math.max(s.right, g.left);
            for (var _ in f.width = f.right - f.left, f.height = f.bottom - f.top, f) v[_] = f[_] - b[_];
            i.edges = r.prepared.edges, i.rect = f, i.deltaRect = v;
          }
        })(t), Tt(t);
      }, "interactions:action-end": function(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "resize" && n.prepared.edges) {
          var r = e;
          r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
        }
      }, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, r = t.element, i = t.rect, o = t.buttons;
        if (i) {
          var a = P({}, e.coords.cur.page), s = n.options.resize;
          if (s && s.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || (o & s.mouseButtons) != 0)) {
            if (y.object(s.edges)) {
              var u = { left: !1, right: !1, top: !1, bottom: !1 };
              for (var g in u) u[g] = At(g, s.edges[g], a, e._latestPointer.eventTarget, r, i, s.margin || st.defaultMargin);
              u.left = u.left && !u.right, u.top = u.top && !u.bottom, (u.left || u.right || u.top || u.bottom) && (t.action = { name: "resize", edges: u });
            } else {
              var f = s.axis !== "y" && a.x > i.right - st.defaultMargin, v = s.axis !== "x" && a.y > i.bottom - st.defaultMargin;
              (f || v) && (t.action = { name: "resize", axes: (f ? "x" : "") + (v ? "y" : "") });
            }
            return !t.action && void 0;
          }
        }
      } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t) {
        var e = t.edges, n = t.axis, r = t.name, i = st.cursors, o = null;
        if (n) o = i[r + n];
        else if (e) {
          for (var a = "", s = 0, u = ["top", "bottom", "left", "right"]; s < u.length; s++) {
            var g = u[s];
            e[g] && (a += g);
          }
          o = i[a];
        }
        return o;
      }, filterEventType: function(t) {
        return t.search("resize") === 0;
      }, defaultMargin: null }, oi = st, ai = { id: "actions", install: function(t) {
        t.usePlugin(Re), t.usePlugin(oi), t.usePlugin(k), t.usePlugin(Gt);
      } }, Bn = 0, ut = { request: function(t) {
        return at(t);
      }, cancel: function(t) {
        return gt(t);
      }, init: function(t) {
        if (at = t.requestAnimationFrame, gt = t.cancelAnimationFrame, !at) for (var e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length; n++) {
          var r = e[n];
          at = t["".concat(r, "RequestAnimationFrame")], gt = t["".concat(r, "CancelAnimationFrame")] || t["".concat(r, "CancelRequestAnimationFrame")];
        }
        at = at && at.bind(t), gt = gt && gt.bind(t), at || (at = function(i) {
          var o = Date.now(), a = Math.max(0, 16 - (o - Bn)), s = t.setTimeout(function() {
            i(o + a);
          }, a);
          return Bn = o + a, s;
        }, gt = function(i) {
          return clearTimeout(i);
        });
      } }, $ = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(t) {
        $.isScrolling = !0, ut.cancel($.i), t.autoScroll = $, $.interaction = t, $.prevTime = $.now(), $.i = ut.request($.scroll);
      }, stop: function() {
        $.isScrolling = !1, $.interaction && ($.interaction.autoScroll = null), ut.cancel($.i);
      }, scroll: function() {
        var t = $.interaction, e = t.interactable, n = t.element, r = t.prepared.name, i = e.options[r].autoScroll, o = Fn(i.container, e, n), a = $.now(), s = (a - $.prevTime) / 1e3, u = i.speed * s;
        if (u >= 1) {
          var g = { x: $.x * u, y: $.y * u };
          if (g.x || g.y) {
            var f = Ln(o);
            y.window(o) ? o.scrollBy(g.x, g.y) : o && (o.scrollLeft += g.x, o.scrollTop += g.y);
            var v = Ln(o), b = { x: v.x - f.x, y: v.y - f.y };
            (b.x || b.y) && e.fire({ type: "autoscroll", target: n, interactable: e, delta: b, interaction: t, container: o });
          }
          $.prevTime = a;
        }
        $.isScrolling && (ut.cancel($.i), $.i = ut.request($.scroll));
      }, check: function(t, e) {
        var n;
        return (n = t.options[e].autoScroll) == null ? void 0 : n.enabled;
      }, onInteractionMove: function(t) {
        var e = t.interaction, n = t.pointer;
        if (e.interacting() && $.check(e.interactable, e.prepared.name)) if (e.simulation) $.x = $.y = 0;
        else {
          var r, i, o, a, s = e.interactable, u = e.element, g = e.prepared.name, f = s.options[g].autoScroll, v = Fn(f.container, s, u);
          if (y.window(v)) a = n.clientX < $.margin, r = n.clientY < $.margin, i = n.clientX > v.innerWidth - $.margin, o = n.clientY > v.innerHeight - $.margin;
          else {
            var b = ae(v);
            a = n.clientX < b.left + $.margin, r = n.clientY < b.top + $.margin, i = n.clientX > b.right - $.margin, o = n.clientY > b.bottom - $.margin;
          }
          $.x = i ? 1 : a ? -1 : 0, $.y = o ? 1 : r ? -1 : 0, $.isScrolling || ($.margin = f.margin, $.speed = f.speed, $.start(e));
        }
      } };
      function Fn(t, e, n) {
        return (y.string(t) ? Je(t, e, n) : t) || oe(n);
      }
      function Ln(t) {
        return y.window(t) && (t = window.document.body), { x: t.scrollLeft, y: t.scrollTop };
      }
      var si = { id: "auto-scroll", install: function(t) {
        var e = t.defaults, n = t.actions;
        t.autoScroll = $, $.now = function() {
          return t.now();
        }, n.phaselessTypes.autoscroll = !0, e.perAction.autoScroll = $.defaults;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.autoScroll = null;
      }, "interactions:destroy": function(t) {
        t.interaction.autoScroll = null, $.stop(), $.interaction && ($.interaction = null);
      }, "interactions:stop": $.stop, "interactions:action-move": function(t) {
        return $.onInteractionMove(t);
      } } }, li = si;
      function It(t, e) {
        var n = !1;
        return function() {
          return n || (he.console.warn(e), n = !0), t.apply(this, arguments);
        };
      }
      function dn(t, e) {
        return t.name = e.name, t.axis = e.axis, t.edges = e.edges, t;
      }
      function ci(t) {
        return y.bool(t) ? (this.options.styleCursor = t, this) : t === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function ui(t) {
        return y.func(t) ? (this.options.actionChecker = t, this) : t === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var fi = { id: "auto-start/interactableMethods", install: function(t) {
        var e = t.Interactable;
        e.prototype.getAction = function(n, r, i, o) {
          var a = function(s, u, g, f, v) {
            var b = s.getRect(f), T = u.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[u.button], z = { action: null, interactable: s, interaction: g, element: f, rect: b, buttons: T };
            return v.fire("auto-start:check", z), z.action;
          }(this, r, i, o, t);
          return this.options.actionChecker ? this.options.actionChecker(n, r, a, this, o, i) : a;
        }, e.prototype.ignoreFrom = It(function(n) {
          return this._backCompatOption("ignoreFrom", n);
        }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = It(function(n) {
          return this._backCompatOption("allowFrom", n);
        }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = ui, e.prototype.styleCursor = ci;
      } };
      function Hn(t, e, n, r, i) {
        return e.testIgnoreAllow(e.options[t.name], n, r) && e.options[t.name].enabled && Ut(e, n, t, i) ? t : null;
      }
      function di(t, e, n, r, i, o, a) {
        for (var s = 0, u = r.length; s < u; s++) {
          var g = r[s], f = i[s], v = g.getAction(e, n, t, f);
          if (v) {
            var b = Hn(v, g, f, o, a);
            if (b) return { action: b, interactable: g, element: f };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function jn(t, e, n, r, i) {
        var o = [], a = [], s = r;
        function u(f) {
          o.push(f), a.push(s);
        }
        for (; y.element(s); ) {
          o = [], a = [], i.interactables.forEachMatch(s, u);
          var g = di(t, e, n, o, a, r, i);
          if (g.action && !g.interactable.options[g.action.name].manualStart) return g;
          s = ge(s);
        }
        return { action: null, interactable: null, element: null };
      }
      function Wn(t, e, n) {
        var r = e.action, i = e.interactable, o = e.element;
        r = r || { name: null }, t.interactable = i, t.element = o, dn(t.prepared, r), t.rect = i && r.name ? i.getRect(o) : null, qn(t, n), n.fire("autoStart:prepared", { interaction: t });
      }
      function Ut(t, e, n, r) {
        var i = t.options, o = i[n.name].max, a = i[n.name].maxPerElement, s = r.autoStart.maxInteractions, u = 0, g = 0, f = 0;
        if (!(o && a && s)) return !1;
        for (var v = 0, b = r.interactions.list; v < b.length; v++) {
          var T = b[v], z = T.prepared.name;
          if (T.interacting() && (++u >= s || T.interactable === t && ((g += z === n.name ? 1 : 0) >= o || T.element === e && (f++, z === n.name && f >= a))))
            return !1;
        }
        return s > 0;
      }
      function $n(t, e) {
        return y.number(t) ? (e.autoStart.maxInteractions = t, this) : e.autoStart.maxInteractions;
      }
      function pn(t, e, n) {
        var r = n.autoStart.cursorElement;
        r && r !== t && (r.style.cursor = ""), t.ownerDocument.documentElement.style.cursor = e, t.style.cursor = e, n.autoStart.cursorElement = e ? t : null;
      }
      function qn(t, e) {
        var n = t.interactable, r = t.element, i = t.prepared;
        if (t.pointerType === "mouse" && n && n.options.styleCursor) {
          var o = "";
          if (i.name) {
            var a = n.options[i.name].cursorChecker;
            o = y.func(a) ? a(i, n, r, t._interacting) : e.actions.map[i.name].getCursor(i);
          }
          pn(t.element, o || "", e);
        } else e.autoStart.cursorElement && pn(e.autoStart.cursorElement, "", e);
      }
      var pi = { id: "auto-start/base", before: ["actions"], install: function(t) {
        var e = t.interactStatic, n = t.defaults;
        t.usePlugin(fi), n.base.actionChecker = null, n.base.styleCursor = !0, P(n.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e.maxInteractions = function(r) {
          return $n(r, t);
        }, t.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Ut, cursorElement: null };
      }, listeners: { "interactions:down": function(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget;
        n.interacting() || Wn(n, jn(n, r, i, o, e), e);
      }, "interactions:move": function(t, e) {
        (function(n, r) {
          var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget;
          i.pointerType !== "mouse" || i.pointerIsDown || i.interacting() || Wn(i, jn(i, o, a, s, r), r);
        })(t, e), function(n, r) {
          var i = n.interaction;
          if (i.pointerIsDown && !i.interacting() && i.pointerWasMoved && i.prepared.name) {
            r.fire("autoStart:before-start", n);
            var o = i.interactable, a = i.prepared.name;
            a && o && (o.options[a].manualStart || !Ut(o, i.element, i.prepared, r) ? i.stop() : (i.start(i.prepared, o, i.element), qn(i, r)));
          }
        }(t, e);
      }, "interactions:stop": function(t, e) {
        var n = t.interaction, r = n.interactable;
        r && r.options.styleCursor && pn(n.element, "", e);
      } }, maxInteractions: $n, withinInteractionLimit: Ut, validateAction: Hn }, hn = pi, hi = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t, e) {
        var n = t.interaction, r = t.eventTarget, i = t.dx, o = t.dy;
        if (n.prepared.name === "drag") {
          var a = Math.abs(i), s = Math.abs(o), u = n.interactable.options.drag, g = u.startAxis, f = a > s ? "x" : a < s ? "y" : "xy";
          if (n.prepared.axis = u.lockAxis === "start" ? f[0] : u.lockAxis, f !== "xy" && g !== "xy" && g !== f) {
            n.prepared.name = null;
            for (var v = r, b = function(z) {
              if (z !== n.interactable) {
                var _ = n.interactable.options.drag;
                if (!_.manualStart && z.testIgnoreAllow(_, v, r)) {
                  var C = z.getAction(n.downPointer, n.downEvent, n, v);
                  if (C && C.name === "drag" && function(D, B) {
                    if (!B) return !1;
                    var G = B.options.drag.startAxis;
                    return D === "xy" || G === "xy" || G === D;
                  }(f, z) && hn.validateAction(C, z, v, r, e)) return z;
                }
              }
            }; y.element(v); ) {
              var T = e.interactables.forEachMatch(v, b);
              if (T) {
                n.prepared.name = "drag", n.interactable = T, n.element = v;
                break;
              }
              v = ge(v);
            }
          }
        }
      } } };
      function gn(t) {
        var e = t.prepared && t.prepared.name;
        if (!e) return null;
        var n = t.interactable.options;
        return n[e].hold || n[e].delay;
      }
      var gi = { id: "auto-start/hold", install: function(t) {
        var e = t.defaults;
        t.usePlugin(hn), e.perAction.hold = 0, e.perAction.delay = 0;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(t) {
        var e = t.interaction, n = gn(e);
        n > 0 && (e.autoStartHoldTimer = setTimeout(function() {
          e.start(e.prepared, e.interactable, e.element);
        }, n));
      }, "interactions:move": function(t) {
        var e = t.interaction, n = t.duplicate;
        e.autoStartHoldTimer && e.pointerWasMoved && !n && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(t) {
        var e = t.interaction;
        gn(e) > 0 && (e.prepared.name = null);
      } }, getHoldDuration: gn }, vi = gi, mi = { id: "auto-start", install: function(t) {
        t.usePlugin(hn), t.usePlugin(vi), t.usePlugin(hi);
      } }, yi = function(t) {
        return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : y.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault;
      };
      function bi(t) {
        var e = t.interaction, n = t.event;
        e.interactable && e.interactable.checkAndPreventDefault(n);
      }
      var Nn = { id: "core/interactablePreventDefault", install: function(t) {
        var e = t.Interactable;
        e.prototype.preventDefault = yi, e.prototype.checkAndPreventDefault = function(n) {
          return function(r, i, o) {
            var a = r.options.preventDefault;
            if (a !== "never") if (a !== "always") {
              if (i.events.supportsPassive && /^touch(start|move)$/.test(o.type)) {
                var s = oe(o.target).document, u = i.getDocOptions(s);
                if (!u || !u.events || u.events.passive !== !1) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(o.type) || y.element(o.target) && fe(o.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || o.preventDefault();
            } else o.preventDefault();
          }(this, t, n);
        }, t.interactions.docEvents.push({ type: "dragstart", listener: function(n) {
          for (var r = 0, i = t.interactions.list; r < i.length; r++) {
            var o = i[r];
            if (o.element && (o.element === n.target || Y(o.element, n.target))) return void o.interactable.checkAndPreventDefault(n);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce(function(t, e) {
        return t["interactions:".concat(e)] = bi, t;
      }, {}) };
      function Kt(t, e) {
        if (e.phaselessTypes[t]) return !0;
        for (var n in e.map) if (t.indexOf(n) === 0 && t.substr(n.length) in e.phases) return !0;
        return !1;
      }
      function kt(t) {
        var e = {};
        for (var n in t) {
          var r = t[n];
          y.plainObject(r) ? e[n] = kt(r) : y.array(r) ? e[n] = ot(r) : e[n] = r;
        }
        return e;
      }
      var vn = function() {
        function t(e) {
          m(this, t), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e, this.result = Jt(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
        }
        return w(t, [{ key: "start", value: function(e, n) {
          var r, i, o = e.phase, a = this.interaction, s = function(g) {
            var f = g.interactable.options[g.prepared.name], v = f.modifiers;
            return v && v.length ? v : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(b) {
              var T = f[b];
              return T && T.enabled && { options: T, methods: T._methods };
            }).filter(function(b) {
              return !!b;
            });
          }(a);
          this.prepareStates(s), this.startEdges = P({}, a.edges), this.edges = P({}, this.startEdges), this.startOffset = (r = a.rect, i = n, r ? { left: i.x - r.left, top: i.y - r.top, right: r.right - i.x, bottom: r.bottom - i.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
          var u = this.fillArg({ phase: o, pageCoords: n, preEnd: !1 });
          return this.result = Jt(), this.startAll(u), this.result = this.setAll(u);
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
          e.coords = P({}, e.pageCoords), e.rect = P({}, o), e.edges = P({}, a);
          for (var s = i ? this.states.slice(i) : this.states, u = Jt(e.coords, e.rect), g = 0; g < s.length; g++) {
            var f, v = s[g], b = v.options, T = P({}, e.coords), z = null;
            (f = v.methods) != null && f.set && this.shouldDo(b, r, n) && (e.state = v, z = v.methods.set(e), M(e.edges, e.rect, { x: e.coords.x - T.x, y: e.coords.y - T.y })), u.eventProps.push(z);
          }
          P(this.edges, e.edges), u.delta.x = e.coords.x - e.pageCoords.x, u.delta.y = e.coords.y - e.pageCoords.y, u.rectDelta.left = e.rect.left - o.left, u.rectDelta.right = e.rect.right - o.right, u.rectDelta.top = e.rect.top - o.top, u.rectDelta.bottom = e.rect.bottom - o.bottom;
          var _ = this.result.coords, C = this.result.rect;
          if (_ && C) {
            var D = u.rect.left !== C.left || u.rect.right !== C.right || u.rect.top !== C.top || u.rect.bottom !== C.bottom;
            u.changed = D || _.x !== u.coords.x || _.y !== u.coords.y;
          }
          return u;
        } }, { key: "applyToInteraction", value: function(e) {
          var n = this.interaction, r = e.phase, i = n.coords.cur, o = n.coords.start, a = this.result, s = this.startDelta, u = a.delta;
          r === "start" && P(this.startDelta, a.delta);
          for (var g = 0, f = [[o, s], [i, u]]; g < f.length; g++) {
            var v = f[g], b = v[0], T = v[1];
            b.page.x += T.x, b.page.y += T.y, b.client.x += T.x, b.client.y += T.y;
          }
          var z = this.result.rectDelta, _ = e.rect || n.rect;
          _.left += z.left, _.right += z.right, _.top += z.top, _.bottom += z.bottom, _.width = _.right - _.left, _.height = _.bottom - _.top;
        } }, { key: "setAndApply", value: function(e) {
          var n = this.interaction, r = e.phase, i = e.preEnd, o = e.skipModifiers, a = this.setAll(this.fillArg({ preEnd: i, phase: r, pageCoords: e.modifiedCoords || n.coords.cur.page }));
          if (this.result = a, !a.changed && (!o || o < this.states.length) && n.interacting()) return !1;
          if (e.modifiedCoords) {
            var s = n.coords.cur.page, u = { x: e.modifiedCoords.x - s.x, y: e.modifiedCoords.y - s.y };
            a.coords.x += u.x, a.coords.y += u.y, a.delta.x += u.x, a.delta.y += u.y;
          }
          this.applyToInteraction(e);
        } }, { key: "beforeEnd", value: function(e) {
          var n = e.interaction, r = e.event, i = this.states;
          if (i && i.length) {
            for (var o = !1, a = 0; a < i.length; a++) {
              var s = i[a];
              e.state = s;
              var u = s.options, g = s.methods, f = g.beforeEnd && g.beforeEnd(e);
              if (f) return this.endResult = f, !1;
              o = o || !o && this.shouldDo(u, !0, e.phase, !0);
            }
            o && n.move({ event: r, preEnd: !0 });
          }
        } }, { key: "stop", value: function(e) {
          var n = e.interaction;
          if (this.states && this.states.length) {
            var r = P({ states: this.states, interactable: n.interactable, element: n.element, rect: null }, e);
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
            for (var a = o.startDelta, s = o.result, u = s.delta, g = s.rectDelta, f = 0, v = [[r.start, a], [r.cur, u]]; f < v.length; f++) {
              var b = v[f], T = b[0], z = b[1];
              T.page.x -= z.x, T.page.y -= z.y, T.client.x -= z.x, T.client.y -= z.y;
            }
            i.left -= g.left, i.right -= g.right, i.top -= g.top, i.bottom -= g.bottom;
          }
        } }, { key: "shouldDo", value: function(e, n, r, i) {
          return !(!e || e.enabled === !1 || i && !e.endOnly || e.endOnly && !n || r === "start" && !e.setStart);
        } }, { key: "copyFrom", value: function(e) {
          this.startOffset = e.startOffset, this.startDelta = e.startDelta, this.startEdges = e.startEdges, this.edges = e.edges, this.states = e.states.map(function(n) {
            return kt(n);
          }), this.result = Jt(P({}, e.result.coords), P({}, e.result.rect));
        } }, { key: "destroy", value: function() {
          for (var e in this) this[e] = null;
        } }]), t;
      }();
      function Jt(t, e) {
        return { rect: e, coords: t, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
      }
      function ft(t, e) {
        var n = t.defaults, r = { start: t.start, set: t.set, beforeEnd: t.beforeEnd, stop: t.stop }, i = function(o) {
          var a = o || {};
          for (var s in a.enabled = a.enabled !== !1, n) s in a || (a[s] = n[s]);
          var u = { options: a, methods: r, name: e, enable: function() {
            return a.enabled = !0, u;
          }, disable: function() {
            return a.enabled = !1, u;
          } };
          return u;
        };
        return e && typeof e == "string" && (i._defaults = n, i._methods = r), i;
      }
      function Bt(t) {
        var e = t.iEvent, n = t.interaction.modification.result;
        n && (e.modifiers = n.eventProps);
      }
      var xi = { id: "modifiers/base", before: ["actions"], install: function(t) {
        t.defaults.perAction.modifiers = [];
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.modification = new vn(e);
      }, "interactions:before-action-start": function(t) {
        var e = t.interaction, n = t.interaction.modification;
        n.start(t, e.coords.start.page), e.edges = n.edges, n.applyToInteraction(t);
      }, "interactions:before-action-move": function(t) {
        var e = t.interaction, n = e.modification, r = n.setAndApply(t);
        return e.edges = n.edges, r;
      }, "interactions:before-action-end": function(t) {
        var e = t.interaction, n = e.modification, r = n.beforeEnd(t);
        return e.edges = n.startEdges, r;
      }, "interactions:action-start": Bt, "interactions:action-move": Bt, "interactions:action-end": Bt, "interactions:after-action-start": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:after-action-move": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:stop": function(t) {
        return t.interaction.modification.stop(t);
      } } }, Xn = xi, Yn = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, mn = function(t) {
        S(n, t);
        var e = te(n);
        function n(r, i, o, a, s, u, g) {
          var f;
          m(this, n), (f = e.call(this, r)).relatedTarget = null, f.screenX = void 0, f.screenY = void 0, f.button = void 0, f.buttons = void 0, f.ctrlKey = void 0, f.shiftKey = void 0, f.altKey = void 0, f.metaKey = void 0, f.page = void 0, f.client = void 0, f.delta = void 0, f.rect = void 0, f.x0 = void 0, f.y0 = void 0, f.t0 = void 0, f.dt = void 0, f.duration = void 0, f.clientX0 = void 0, f.clientY0 = void 0, f.velocity = void 0, f.speed = void 0, f.swipe = void 0, f.axes = void 0, f.preEnd = void 0, s = s || r.element;
          var v = r.interactable, b = (v && v.options || Yn).deltaSource, T = ke(v, s, o), z = a === "start", _ = a === "end", C = z ? ye(f) : r.prevEvent, D = z ? r.coords.start : _ ? { page: C.page, client: C.client, timeStamp: r.coords.cur.timeStamp } : r.coords.cur;
          return f.page = P({}, D.page), f.client = P({}, D.client), f.rect = P({}, r.rect), f.timeStamp = D.timeStamp, _ || (f.page.x -= T.x, f.page.y -= T.y, f.client.x -= T.x, f.client.y -= T.y), f.ctrlKey = i.ctrlKey, f.altKey = i.altKey, f.shiftKey = i.shiftKey, f.metaKey = i.metaKey, f.button = i.button, f.buttons = i.buttons, f.target = s, f.currentTarget = s, f.preEnd = u, f.type = g || o + (a || ""), f.interactable = v, f.t0 = z ? r.pointers[r.pointers.length - 1].downTime : C.t0, f.x0 = r.coords.start.page.x - T.x, f.y0 = r.coords.start.page.y - T.y, f.clientX0 = r.coords.start.client.x - T.x, f.clientY0 = r.coords.start.client.y - T.y, f.delta = z || _ ? { x: 0, y: 0 } : { x: f[b].x - C[b].x, y: f[b].y - C[b].y }, f.dt = r.coords.delta.timeStamp, f.duration = f.timeStamp - f.t0, f.velocity = P({}, r.coords.velocity[b]), f.speed = _e(f.velocity.x, f.velocity.y), f.swipe = _ || a === "inertiastart" ? f.getSwipe() : null, f;
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
      }($e);
      Object.defineProperties(mn.prototype, { pageX: { get: function() {
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
      var wi = w(function t(e, n, r, i, o) {
        m(this, t), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e, this.pointer = n, this.event = r, this.downTime = i, this.downTarget = o;
      }), Ei = function(t) {
        return t.interactable = "", t.element = "", t.prepared = "", t.pointerIsDown = "", t.pointerWasMoved = "", t._proxy = "", t;
      }({}), Vn = function(t) {
        return t.start = "", t.move = "", t.end = "", t.stop = "", t.interacting = "", t;
      }({}), Si = 0, zi = function() {
        function t(e) {
          var n = this, r = e.pointerType, i = e.scopeFire;
          m(this, t), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = It(function(f) {
            this.move(f);
          }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = Si++, this._scopeFire = i, this.pointerType = r;
          var o = this;
          this._proxy = {};
          var a = function(f) {
            Object.defineProperty(n._proxy, f, { get: function() {
              return o[f];
            } });
          };
          for (var s in Ei) a(s);
          var u = function(f) {
            Object.defineProperty(n._proxy, f, { value: function() {
              return o[f].apply(o, arguments);
            } });
          };
          for (var g in Vn) u(g);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return w(t, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(e, n, r) {
          var i = this.updatePointer(e, n, r, !0), o = this.pointers[i];
          this._scopeFire("interactions:down", { pointer: e, event: n, eventTarget: r, pointerIndex: i, pointerInfo: o, type: "down", interaction: this });
        } }, { key: "start", value: function(e, n, r) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (e.name === "gesture" ? 2 : 1) || !n.options[e.name].enabled) && (dn(this.prepared, e), this.interactable = n, this.element = r, this.rect = n.getRect(r), this.edges = this.prepared.edges ? P({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(e, n, r) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(e, n, r, !1);
          var i, o, a = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (i = this.coords.cur.client.x - this.coords.start.client.x, o = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = _e(i, o) > this.pointerMoveTolerance);
          var s, u, g, f = this.getPointerIndex(e), v = { pointer: e, pointerIndex: f, pointerInfo: this.pointers[f], event: n, type: "move", eventTarget: r, dx: i, dy: o, duplicate: a, interaction: this };
          a || (s = this.coords.velocity, u = this.coords.delta, g = Math.max(u.timeStamp / 1e3, 1e-3), s.page.x = u.page.x / g, s.page.y = u.page.y / g, s.client.x = u.client.x / g, s.client.y = u.client.y / g, s.timeStamp = g), this._scopeFire("interactions:move", v), a || this.simulation || (this.interacting() && (v.type = null, this.move(v)), this.pointerWasMoved && We(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(e) {
          e && e.event || He(this.coords.delta), (e = P({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, e || {})).phase = "move", this._doPhase(e);
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
          var o, a, s, u = W(e), g = this.getPointerIndex(e), f = this.pointers[g];
          return i = i !== !1 && (i || /(down|start)$/i.test(n.type)), f ? f.pointer = e : (f = new wi(u, e, n, null, null), g = this.pointers.length, this.pointers.push(f)), ne(this.coords.cur, this.pointers.map(function(v) {
            return v.pointer;
          }), this._now()), o = this.coords.delta, a = this.coords.prev, s = this.coords.cur, o.page.x = s.page.x - a.page.x, o.page.y = s.page.y - a.page.y, o.client.x = s.client.x - a.client.x, o.client.y = s.client.y - a.client.y, o.timeStamp = s.timeStamp - a.timeStamp, i && (this.pointerIsDown = !0, f.downTime = this.coords.cur.timeStamp, f.downTarget = r, Me(this.downPointer, e), this.interacting() || (We(this.coords.start, this.coords.cur), We(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = !1)), this._updateLatestPointer(e, n, r), this._scopeFire("interactions:update-pointer", { pointer: e, event: n, eventTarget: r, down: i, pointerInfo: f, pointerIndex: g, interaction: this }), g;
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
          return new mn(this, e, this.prepared.name, n, this.element, r, i);
        } }, { key: "_fireEvent", value: function(e) {
          var n;
          (n = this.interactable) == null || n.fire(e), (!this.prevEvent || e.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = e);
        } }, { key: "_doPhase", value: function(e) {
          var n = e.event, r = e.phase, i = e.preEnd, o = e.type, a = this.rect;
          if (a && r === "move" && (M(this.edges, a, this.coords.delta[this.interactable.options.deltaSource]), a.width = a.right - a.left, a.height = a.bottom - a.top), this._scopeFire("interactions:before-action-".concat(r), e) === !1) return !1;
          var s = e.iEvent = this._createPreparedEvent(n, r, i, o);
          return this._scopeFire("interactions:action-".concat(r), e), r === "start" && (this.prevEvent = s), this._fireEvent(s), this._scopeFire("interactions:after-action-".concat(r), e), !0;
        } }, { key: "_now", value: function() {
          return Date.now();
        } }]), t;
      }();
      function Gn(t) {
        Un(t.interaction);
      }
      function Un(t) {
        if (!function(n) {
          return !(!n.offset.pending.x && !n.offset.pending.y);
        }(t)) return !1;
        var e = t.offset.pending;
        return yn(t.coords.cur, e), yn(t.coords.delta, e), M(t.edges, t.rect, e), e.x = 0, e.y = 0, !0;
      }
      function Ti(t) {
        var e = t.x, n = t.y;
        this.offset.pending.x += e, this.offset.pending.y += n, this.offset.total.x += e, this.offset.total.y += n;
      }
      function yn(t, e) {
        var n = t.page, r = t.client, i = e.x, o = e.y;
        n.x += i, n.y += o, r.x += i, r.y += o;
      }
      Vn.offsetBy = "";
      var ki = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t) {
        t.Interaction.prototype.offsetBy = Ti;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
      }, "interactions:update-pointer": function(t) {
        return function(e) {
          e.pointerIsDown && (yn(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0);
        }(t.interaction);
      }, "interactions:before-action-start": Gn, "interactions:before-action-move": Gn, "interactions:before-action-end": function(t) {
        var e = t.interaction;
        if (Un(e)) return e.move({ offset: !0 }), e.end(), !1;
      }, "interactions:stop": function(t) {
        var e = t.interaction;
        e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0;
      } } }, Kn = ki, _i = function() {
        function t(e) {
          m(this, t), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e;
        }
        return w(t, [{ key: "start", value: function(e) {
          var n = this.interaction, r = Zt(n);
          if (!r || !r.enabled) return !1;
          var i = n.coords.velocity.client, o = _e(i.x, i.y), a = this.modification || (this.modification = new vn(n));
          if (a.copyFrom(n.modification), this.t0 = n._now(), this.allowResume = r.allowResume, this.v0 = o, this.currentOffset = { x: 0, y: 0 }, this.startCoords = n.coords.cur.page, this.modifierArg = a.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - n.coords.cur.timeStamp < 50 && o > r.minSpeed && o > r.endSpeed) this.startInertia();
          else {
            if (a.result = a.setAll(this.modifierArg), !a.result.changed) return !1;
            this.startSmoothEnd();
          }
          return n.modification.result.rect = null, n.offsetBy(this.targetOffset), n._doPhase({ interaction: n, event: e, phase: "inertiastart" }), n.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), n.modification.result.rect = null, this.active = !0, n.simulation = this, !0;
        } }, { key: "startInertia", value: function() {
          var e = this, n = this.interaction.coords.velocity.client, r = Zt(this.interaction), i = r.resistance, o = -Math.log(r.endSpeed / this.v0) / i;
          this.targetOffset = { x: (n.x - o) / i, y: (n.y - o) / i }, this.te = o, this.lambda_v0 = i / this.v0, this.one_ve_v0 = 1 - r.endSpeed / this.v0;
          var a = this.modification, s = this.modifierArg;
          s.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, a.result = a.setAll(s), a.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + a.result.delta.x, y: this.targetOffset.y + a.result.delta.y }), this.onNextFrame(function() {
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
          var e, n, r, i, o, a, s, u = this, g = this.interaction, f = Zt(g).resistance, v = (g._now() - this.t0) / 1e3;
          if (v < this.te) {
            var b, T = 1 - (Math.exp(-f * v) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (e = 0, n = 0, r = this.targetOffset.x, i = this.targetOffset.y, o = this.modifiedOffset.x, a = this.modifiedOffset.y, b = { x: Jn(s = T, e, r, o), y: Jn(s, n, i, a) }) : b = { x: this.targetOffset.x * T, y: this.targetOffset.y * T };
            var z = { x: b.x - this.currentOffset.x, y: b.y - this.currentOffset.y };
            this.currentOffset.x += z.x, this.currentOffset.y += z.y, g.offsetBy(z), g.move(), this.onNextFrame(function() {
              return u.inertiaTick();
            });
          } else g.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var e = this, n = this.interaction, r = n._now() - this.t0, i = Zt(n).smoothEndDuration;
          if (r < i) {
            var o = { x: Zn(r, 0, this.targetOffset.x, i), y: Zn(r, 0, this.targetOffset.y, i) }, a = { x: o.x - this.currentOffset.x, y: o.y - this.currentOffset.y };
            this.currentOffset.x += a.x, this.currentOffset.y += a.y, n.offsetBy(a), n.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
              return e.smoothEndTick();
            });
          } else n.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(e) {
          var n = e.pointer, r = e.event, i = e.eventTarget, o = this.interaction;
          o.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o.updatePointer(n, r, i, !0), o._doPhase({ interaction: o, event: r, phase: "resume" }), We(o.coords.prev, o.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = !1, this.interaction.simulation = null, ut.cancel(this.timeout);
        } }]), t;
      }();
      function Zt(t) {
        var e = t.interactable, n = t.prepared;
        return e && e.options && n.name && e.options[n.name].inertia;
      }
      var Ri = { id: "inertia", before: ["modifiers", "actions"], install: function(t) {
        var e = t.defaults;
        t.usePlugin(Kn), t.usePlugin(Xn), t.actions.phases.inertiastart = !0, t.actions.phases.resume = !0, e.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.inertia = new _i(e);
      }, "interactions:before-action-end": function(t) {
        var e = t.interaction, n = t.event;
        return (!e._interacting || e.simulation || !e.inertia.start(n)) && null;
      }, "interactions:down": function(t) {
        var e = t.interaction, n = t.eventTarget, r = e.inertia;
        if (r.active) for (var i = n; y.element(i); ) {
          if (i === e.element) {
            r.resume(t);
            break;
          }
          i = ge(i);
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction.inertia;
        e.active && e.stop();
      }, "interactions:before-action-resume": function(t) {
        var e = t.interaction.modification;
        e.stop(t), e.start(t, t.interaction.coords.cur.page), e.applyToInteraction(t);
      }, "interactions:before-action-inertiastart": function(t) {
        return t.interaction.modification.setAndApply(t);
      }, "interactions:action-resume": Bt, "interactions:action-inertiastart": Bt, "interactions:after-action-inertiastart": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:after-action-resume": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      } } };
      function Jn(t, e, n, r) {
        var i = 1 - t;
        return i * i * e + 2 * i * t * n + t * t * r;
      }
      function Zn(t, e, n, r) {
        return -n * (t /= r) * (t - 2) + e;
      }
      var Pi = Ri;
      function Qn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if (t.immediatePropagationStopped) break;
          r(t);
        }
      }
      var er = function() {
        function t(e) {
          m(this, t), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = P({}, e || {});
        }
        return w(t, [{ key: "fire", value: function(e) {
          var n, r = this.global;
          (n = this.types[e.type]) && Qn(e, n), !e.propagationStopped && r && (n = r[e.type]) && Qn(e, n);
        } }, { key: "on", value: function(e, n) {
          var r = xe(e, n);
          for (e in r) this.types[e] = Ze(this.types[e] || [], r[e]);
        } }, { key: "off", value: function(e, n) {
          var r = xe(e, n);
          for (e in r) {
            var i = this.types[e];
            if (i && i.length) for (var o = 0, a = r[e]; o < a.length; o++) {
              var s = a[o], u = i.indexOf(s);
              u !== -1 && i.splice(u, 1);
            }
          }
        } }, { key: "getRect", value: function(e) {
          return null;
        } }]), t;
      }(), Mi = function() {
        function t(e) {
          m(this, t), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e, Me(this, e);
        }
        return w(t, [{ key: "preventOriginalDefault", value: function() {
          this.originalEvent.preventDefault();
        } }, { key: "stopPropagation", value: function() {
          this.originalEvent.stopPropagation();
        } }, { key: "stopImmediatePropagation", value: function() {
          this.originalEvent.stopImmediatePropagation();
        } }]), t;
      }();
      function Ft(t) {
        return y.object(t) ? { capture: !!t.capture, passive: !!t.passive } : { capture: !!t, passive: !1 };
      }
      function Qt(t, e) {
        return t === e || (typeof t == "boolean" ? !!e.capture === t && !e.passive : !!t.capture == !!e.capture && !!t.passive == !!e.passive);
      }
      var Di = { id: "events", install: function(t) {
        var e, n = [], r = {}, i = [], o = { add: a, remove: s, addDelegate: function(f, v, b, T, z) {
          var _ = Ft(z);
          if (!r[b]) {
            r[b] = [];
            for (var C = 0; C < i.length; C++) {
              var D = i[C];
              a(D, b, u), a(D, b, g, !0);
            }
          }
          var B = r[b], G = Ue(B, function(Z) {
            return Z.selector === f && Z.context === v;
          });
          G || (G = { selector: f, context: v, listeners: [] }, B.push(G)), G.listeners.push({ func: T, options: _ });
        }, removeDelegate: function(f, v, b, T, z) {
          var _, C = Ft(z), D = r[b], B = !1;
          if (D)
            for (_ = D.length - 1; _ >= 0; _--) {
              var G = D[_];
              if (G.selector === f && G.context === v) {
                for (var Z = G.listeners, j = Z.length - 1; j >= 0; j--) {
                  var U = Z[j];
                  if (U.func === T && Qt(U.options, C)) {
                    Z.splice(j, 1), Z.length || (D.splice(_, 1), s(v, b, u), s(v, b, g, !0)), B = !0;
                    break;
                  }
                }
                if (B) break;
              }
            }
        }, delegateListener: u, delegateUseCapture: g, delegatedEvents: r, documents: i, targets: n, supportsOptions: !1, supportsPassive: !1 };
        function a(f, v, b, T) {
          if (f.addEventListener) {
            var z = Ft(T), _ = Ue(n, function(C) {
              return C.eventTarget === f;
            });
            _ || (_ = { eventTarget: f, events: {} }, n.push(_)), _.events[v] || (_.events[v] = []), Ue(_.events[v], function(C) {
              return C.func === b && Qt(C.options, z);
            }) || (f.addEventListener(v, b, o.supportsOptions ? z : z.capture), _.events[v].push({ func: b, options: z }));
          }
        }
        function s(f, v, b, T) {
          if (f.addEventListener && f.removeEventListener) {
            var z = Ge(n, function(Fe) {
              return Fe.eventTarget === f;
            }), _ = n[z];
            if (_ && _.events) if (v !== "all") {
              var C = !1, D = _.events[v];
              if (D) {
                if (b === "all") {
                  for (var B = D.length - 1; B >= 0; B--) {
                    var G = D[B];
                    s(f, v, G.func, G.options);
                  }
                  return;
                }
                for (var Z = Ft(T), j = 0; j < D.length; j++) {
                  var U = D[j];
                  if (U.func === b && Qt(U.options, Z)) {
                    f.removeEventListener(v, b, o.supportsOptions ? Z : Z.capture), D.splice(j, 1), D.length === 0 && (delete _.events[v], C = !0);
                    break;
                  }
                }
              }
              C && !Object.keys(_.events).length && n.splice(z, 1);
            } else for (v in _.events) _.events.hasOwnProperty(v) && s(f, v, "all");
          }
        }
        function u(f, v) {
          for (var b = Ft(v), T = new Mi(f), z = r[f.type], _ = Ie(f)[0], C = _; y.element(C); ) {
            for (var D = 0; D < z.length; D++) {
              var B = z[D], G = B.selector, Z = B.context;
              if (fe(C, G) && Y(Z, _) && Y(Z, C)) {
                var j = B.listeners;
                T.currentTarget = C;
                for (var U = 0; U < j.length; U++) {
                  var Fe = j[U];
                  Qt(Fe.options, b) && Fe.func(T);
                }
              }
            }
            C = ge(C);
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
      } }, bn = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t) {
        for (var e = 0, n = bn.methodOrder; e < n.length; e++) {
          var r = n[e], i = bn[r](t);
          if (i) return i;
        }
        return null;
      }, simulationResume: function(t) {
        var e = t.pointerType, n = t.eventType, r = t.eventTarget, i = t.scope;
        if (!/down|start/i.test(n)) return null;
        for (var o = 0, a = i.interactions.list; o < a.length; o++) {
          var s = a[o], u = r;
          if (s.simulation && s.simulation.allowResume && s.pointerType === e) for (; u; ) {
            if (u === s.element) return s;
            u = ge(u);
          }
        }
        return null;
      }, mouseOrPen: function(t) {
        var e, n = t.pointerId, r = t.pointerType, i = t.eventType, o = t.scope;
        if (r !== "mouse" && r !== "pen") return null;
        for (var a = 0, s = o.interactions.list; a < s.length; a++) {
          var u = s[a];
          if (u.pointerType === r) {
            if (u.simulation && !tr(u, n)) continue;
            if (u.interacting()) return u;
            e || (e = u);
          }
        }
        if (e) return e;
        for (var g = 0, f = o.interactions.list; g < f.length; g++) {
          var v = f[g];
          if (!(v.pointerType !== r || /down/i.test(i) && v.simulation)) return v;
        }
        return null;
      }, hasPointer: function(t) {
        for (var e = t.pointerId, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
          var i = r[n];
          if (tr(i, e)) return i;
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
      function tr(t, e) {
        return t.pointers.some(function(n) {
          return n.id === e;
        });
      }
      var Oi = bn, xn = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function nr(t, e) {
        return function(n) {
          var r = e.interactions.list, i = De(n), o = Ie(n), a = o[0], s = o[1], u = [];
          if (/^touch/.test(n.type)) {
            e.prevTouchTime = e.now();
            for (var g = 0, f = n.changedTouches; g < f.length; g++) {
              var v = f[g], b = { pointer: v, pointerId: W(v), pointerType: i, eventType: n.type, eventTarget: a, curEventTarget: s, scope: e }, T = rr(b);
              u.push([b.pointer, b.eventTarget, b.curEventTarget, T]);
            }
          } else {
            var z = !1;
            if (!ue.supportsPointerEvent && /mouse/.test(n.type)) {
              for (var _ = 0; _ < r.length && !z; _++) z = r[_].pointerType !== "mouse" && r[_].pointerIsDown;
              z = z || e.now() - e.prevTouchTime < 500 || n.timeStamp === 0;
            }
            if (!z) {
              var C = { pointer: n, pointerId: W(n), pointerType: i, eventType: n.type, curEventTarget: s, eventTarget: a, scope: e }, D = rr(C);
              u.push([C.pointer, C.eventTarget, C.curEventTarget, D]);
            }
          }
          for (var B = 0; B < u.length; B++) {
            var G = u[B], Z = G[0], j = G[1], U = G[2];
            G[3][t](Z, n, j, U);
          }
        };
      }
      function rr(t) {
        var e = t.pointerType, n = t.scope, r = { interaction: Oi.search(t), searchDetails: t };
        return n.fire("interactions:find", r), r.interaction || n.interactions.new({ pointerType: e });
      }
      function wn(t, e) {
        var n = t.doc, r = t.scope, i = t.options, o = r.interactions.docEvents, a = r.events, s = a[e];
        for (var u in r.browser.isIOS && !i.events && (i.events = { passive: !1 }), a.delegatedEvents) s(n, u, a.delegateListener), s(n, u, a.delegateUseCapture, !0);
        for (var g = i && i.events, f = 0; f < o.length; f++) {
          var v = o[f];
          s(n, v.type, v.listener, g);
        }
      }
      var Ci = { id: "core/interactions", install: function(t) {
        for (var e = {}, n = 0; n < xn.length; n++) {
          var r = xn[n];
          e[r] = nr(r, t);
        }
        var i, o = ue.pEventTypes;
        function a() {
          for (var s = 0, u = t.interactions.list; s < u.length; s++) {
            var g = u[s];
            if (g.pointerIsDown && g.pointerType === "touch" && !g._interacting) for (var f = function() {
              var T = b[v];
              t.documents.some(function(z) {
                return Y(z.doc, T.downTarget);
              }) || g.removePointer(T.pointer, T.event);
            }, v = 0, b = g.pointers; v < b.length; v++) f();
          }
        }
        (i = ie.PointerEvent ? [{ type: o.down, listener: a }, { type: o.down, listener: e.pointerDown }, { type: o.move, listener: e.pointerMove }, { type: o.up, listener: e.pointerUp }, { type: o.cancel, listener: e.pointerUp }] : [{ type: "mousedown", listener: e.pointerDown }, { type: "mousemove", listener: e.pointerMove }, { type: "mouseup", listener: e.pointerUp }, { type: "touchstart", listener: a }, { type: "touchstart", listener: e.pointerDown }, { type: "touchmove", listener: e.pointerMove }, { type: "touchend", listener: e.pointerUp }, { type: "touchcancel", listener: e.pointerUp }]).push({ type: "blur", listener: function(s) {
          for (var u = 0, g = t.interactions.list; u < g.length; u++)
            g[u].documentBlur(s);
        } }), t.prevTouchTime = 0, t.Interaction = function(s) {
          S(g, s);
          var u = te(g);
          function g() {
            return m(this, g), u.apply(this, arguments);
          }
          return w(g, [{ key: "pointerMoveTolerance", get: function() {
            return t.interactions.pointerMoveTolerance;
          }, set: function(f) {
            t.interactions.pointerMoveTolerance = f;
          } }, { key: "_now", value: function() {
            return t.now();
          } }]), g;
        }(zi), t.interactions = { list: [], new: function(s) {
          s.scopeFire = function(g, f) {
            return t.fire(g, f);
          };
          var u = new t.Interaction(s);
          return t.interactions.list.push(u), u;
        }, listeners: e, docEvents: i, pointerMoveTolerance: 1 }, t.usePlugin(Nn);
      }, listeners: { "scope:add-document": function(t) {
        return wn(t, "add");
      }, "scope:remove-document": function(t) {
        return wn(t, "remove");
      }, "interactable:unset": function(t, e) {
        for (var n = t.interactable, r = e.interactions.list.length - 1; r >= 0; r--) {
          var i = e.interactions.list[r];
          i.interactable === n && (i.stop(), e.fire("interactions:destroy", { interaction: i }), i.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(r, 1));
        }
      } }, onDocSignal: wn, doOnInteractions: nr, methodNames: xn }, Ai = Ci, dt = function(t) {
        return t[t.On = 0] = "On", t[t.Off = 1] = "Off", t;
      }(dt || {}), Ii = function() {
        function t(e, n, r, i) {
          m(this, t), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new er(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n.actions, this.target = e, this._context = n.context || r, this._win = oe(V(e) ? this._context : e), this._doc = this._win.document, this._scopeEvents = i, this.set(n);
        }
        return w(t, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(e, n) {
          return y.func(n.onstart) && this.on("".concat(e, "start"), n.onstart), y.func(n.onmove) && this.on("".concat(e, "move"), n.onmove), y.func(n.onend) && this.on("".concat(e, "end"), n.onend), y.func(n.oninertiastart) && this.on("".concat(e, "inertiastart"), n.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(e, n, r) {
          var i, o = this, a = (i = this._actions.map[e]) == null ? void 0 : i.filterEventType, s = function(u) {
            return (a == null || a(u)) && Kt(u, o._actions);
          };
          (y.array(n) || y.object(n)) && this._onOff(dt.Off, e, n, void 0, s), (y.array(r) || y.object(r)) && this._onOff(dt.On, e, r, void 0, s);
        } }, { key: "setPerAction", value: function(e, n) {
          var r = this._defaults;
          for (var i in n) {
            var o = i, a = this.options[e], s = n[o];
            o === "listeners" && this.updatePerActionListeners(e, a.listeners, s), y.array(s) ? a[o] = ot(s) : y.plainObject(s) ? (a[o] = P(a[o] || {}, kt(s)), y.object(r.perAction[o]) && "enabled" in r.perAction[o] && (a[o].enabled = s.enabled !== !1)) : y.bool(s) && y.object(r.perAction[o]) ? a[o].enabled = s : a[o] = s;
          }
        } }, { key: "getRect", value: function(e) {
          return e = e || (y.element(this.target) ? this.target : null), y.string(this.target) && (e = e || this._context.querySelector(this.target)), de(e);
        } }, { key: "rectChecker", value: function(e) {
          var n = this;
          return y.func(e) ? (this.getRect = function(r) {
            var i = P({}, e.apply(n, r));
            return "width" in i || (i.width = i.right - i.left, i.height = i.bottom - i.top), i;
          }, this) : e === null ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(e, n) {
          if (V(n) || y.object(n)) {
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
          return y.string(e) ? Array.from(this._context.querySelectorAll(e)) : y.func(e) && e.getAllElements ? e.getAllElements() : y.element(e) ? [e] : [];
        } }, { key: "context", value: function() {
          return this._context;
        } }, { key: "inContext", value: function(e) {
          return this._context === e.ownerDocument || Y(this._context, e);
        } }, { key: "testIgnoreAllow", value: function(e, n, r) {
          return !this.testIgnore(e.ignoreFrom, n, r) && this.testAllow(e.allowFrom, n, r);
        } }, { key: "testAllow", value: function(e, n, r) {
          return !e || !!y.element(r) && (y.string(e) ? O(r, e, n) : !!y.element(e) && Y(e, r));
        } }, { key: "testIgnore", value: function(e, n, r) {
          return !(!e || !y.element(r)) && (y.string(e) ? O(r, e, n) : !!y.element(e) && Y(e, r));
        } }, { key: "fire", value: function(e) {
          return this.events.fire(e), this;
        } }, { key: "_onOff", value: function(e, n, r, i, o) {
          y.object(n) && !y.array(n) && (i = r, r = null);
          var a = xe(n, r, o);
          for (var s in a) {
            s === "wheel" && (s = ue.wheelEvent);
            for (var u = 0, g = a[s]; u < g.length; u++) {
              var f = g[u];
              Kt(s, this._actions) ? this.events[e === dt.On ? "on" : "off"](s, f) : y.string(this.target) ? this._scopeEvents[e === dt.On ? "addDelegate" : "removeDelegate"](this.target, this._context, s, f, i) : this._scopeEvents[e === dt.On ? "add" : "remove"](this.target, s, f, i);
            }
          }
          return this;
        } }, { key: "on", value: function(e, n, r) {
          return this._onOff(dt.On, e, n, r);
        } }, { key: "off", value: function(e, n, r) {
          return this._onOff(dt.Off, e, n, r);
        } }, { key: "set", value: function(e) {
          var n = this._defaults;
          for (var r in y.object(e) || (e = {}), this.options = kt(n.base), this._actions.methodDict) {
            var i = r, o = this._actions.methodDict[i];
            this.options[i] = {}, this.setPerAction(i, P(P({}, n.perAction), n.actions[i])), this[o](e[i]);
          }
          for (var a in e) a !== "getRect" ? y.func(this[a]) && this[a](e[a]) : this.rectChecker(e.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (y.string(this.target)) for (var e in this._scopeEvents.delegatedEvents) for (var n = this._scopeEvents.delegatedEvents[e], r = n.length - 1; r >= 0; r--) {
            var i = n[r], o = i.selector, a = i.context, s = i.listeners;
            o === this.target && a === this._context && n.splice(r, 1);
            for (var u = s.length - 1; u >= 0; u--) this._scopeEvents.removeDelegate(this.target, this._context, e, s[u][0], s[u][1]);
          }
          else this._scopeEvents.remove(this.target, "all");
        } }]), t;
      }(), Bi = function() {
        function t(e) {
          var n = this;
          m(this, t), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e, e.addListeners({ "interactable:unset": function(r) {
            var i = r.interactable, o = i.target, a = y.string(o) ? n.selectorMap[o] : o[n.scope.id], s = Ge(a, function(u) {
              return u === i;
            });
            a.splice(s, 1);
          } });
        }
        return w(t, [{ key: "new", value: function(e, n) {
          n = P(n || {}, { actions: this.scope.actions });
          var r = new this.scope.Interactable(e, n, this.scope.document, this.scope.events);
          return this.scope.addDocument(r._doc), this.list.push(r), y.string(e) ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(r)) : (r.target[this.scope.id] || Object.defineProperty(e, this.scope.id, { value: [], configurable: !0 }), e[this.scope.id].push(r)), this.scope.fire("interactable:new", { target: e, options: n, interactable: r, win: this.scope._win }), r;
        } }, { key: "getExisting", value: function(e, n) {
          var r = n && n.context || this.scope.document, i = y.string(e), o = i ? this.selectorMap[e] : e[this.scope.id];
          if (o) return Ue(o, function(a) {
            return a._context === r && (i || a.inContext(e));
          });
        } }, { key: "forEachMatch", value: function(e, n) {
          for (var r = 0, i = this.list; r < i.length; r++) {
            var o = i[r], a = void 0;
            if ((y.string(o.target) ? y.element(e) && fe(e, o.target) : e === o.target) && o.inContext(e) && (a = n(o)), a !== void 0) return a;
          }
        } }]), t;
      }(), Fi = function() {
        function t() {
          var e = this;
          m(this, t), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = ue, this.defaults = kt(Yn), this.Eventable = er, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = function(r) {
            var i = function o(a, s) {
              var u = r.interactables.getExisting(a, s);
              return u || ((u = r.interactables.new(a, s)).events.global = o.globalEvents), u;
            };
            return i.getPointerAverage = se, i.getTouchBBox = K, i.getTouchDistance = F, i.getTouchAngle = Se, i.getElementRect = de, i.getElementClientRect = ae, i.matchesSelector = fe, i.closest = ze, i.globalEvents = {}, i.version = "1.10.27", i.scope = r, i.use = function(o, a) {
              return this.scope.usePlugin(o, a), this;
            }, i.isSet = function(o, a) {
              return !!this.scope.interactables.get(o, a && a.context);
            }, i.on = It(function(o, a, s) {
              if (y.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), y.array(o)) {
                for (var u = 0, g = o; u < g.length; u++) {
                  var f = g[u];
                  this.on(f, a, s);
                }
                return this;
              }
              if (y.object(o)) {
                for (var v in o) this.on(v, o[v], a);
                return this;
              }
              return Kt(o, this.scope.actions) ? this.globalEvents[o] ? this.globalEvents[o].push(a) : this.globalEvents[o] = [a] : this.scope.events.add(this.scope.document, o, a, { options: s }), this;
            }, "The interact.on() method is being deprecated"), i.off = It(function(o, a, s) {
              if (y.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), y.array(o)) {
                for (var u = 0, g = o; u < g.length; u++) {
                  var f = g[u];
                  this.off(f, a, s);
                }
                return this;
              }
              if (y.object(o)) {
                for (var v in o) this.off(v, o[v], a);
                return this;
              }
              var b;
              return Kt(o, this.scope.actions) ? o in this.globalEvents && (b = this.globalEvents[o].indexOf(a)) !== -1 && this.globalEvents[o].splice(b, 1) : this.scope.events.remove(this.scope.document, o, a, s), this;
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
              return y.number(o) ? (this.scope.interactions.pointerMoveTolerance = o, this) : this.scope.interactions.pointerMoveTolerance;
            }, i.addDocument = function(o, a) {
              this.scope.addDocument(o, a);
            }, i.removeDocument = function(o) {
              this.scope.removeDocument(o);
            }, i;
          }(this), this.InteractEvent = mn, this.Interactable = void 0, this.interactables = new Bi(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(r) {
            return e.removeDocument(r.target);
          };
          var n = this;
          this.Interactable = function(r) {
            S(o, r);
            var i = te(o);
            function o() {
              return m(this, o), i.apply(this, arguments);
            }
            return w(o, [{ key: "_defaults", get: function() {
              return n.defaults;
            } }, { key: "set", value: function(a) {
              return be(ee(o.prototype), "set", this).call(this, a), n.fire("interactable:set", { options: a, interactable: this }), this;
            } }, { key: "unset", value: function() {
              be(ee(o.prototype), "unset", this).call(this);
              var a = n.interactables.list.indexOf(this);
              a < 0 || (n.interactables.list.splice(a, 1), n.fire("interactable:unset", { interactable: this }));
            } }]), o;
          }(Ii);
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
            return n.isInitialized = !0, y.window(r) && Q(r), ie.init(r), ue.init(r), ut.init(r), n.window = r, n.document = r.document, n.usePlugin(Ai), n.usePlugin(Di), n;
          }(this, e);
        } }, { key: "pluginIsInstalled", value: function(e) {
          var n = e.id;
          return n ? !!this._plugins.map[n] : this._plugins.list.indexOf(e) !== -1;
        } }, { key: "usePlugin", value: function(e, n) {
          if (!this.isInitialized) return this;
          if (this.pluginIsInstalled(e)) return this;
          if (e.id && (this._plugins.map[e.id] = e), this._plugins.list.push(e), e.install && e.install(this, n), e.listeners && e.before) {
            for (var r = 0, i = this.listenerMaps.length, o = e.before.reduce(function(s, u) {
              return s[u] = !0, s[ir(u)] = !0, s;
            }, {}); r < i; r++) {
              var a = this.listenerMaps[r].id;
              if (a && (o[a] || o[ir(a)])) break;
            }
            this.listenerMaps.splice(r, 0, { id: e.id, map: e.listeners });
          } else e.listeners && this.listenerMaps.push({ id: e.id, map: e.listeners });
          return this;
        } }, { key: "addDocument", value: function(e, n) {
          if (this.getDocIndex(e) !== -1) return !1;
          var r = oe(e);
          n = n ? P({}, n) : {}, this.documents.push({ doc: e, options: n }), this.events.documents.push(e), e !== this.document && this.events.add(r, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: e, window: r, scope: this, options: n });
        } }, { key: "removeDocument", value: function(e) {
          var n = this.getDocIndex(e), r = oe(e), i = this.documents[n].options;
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
      function ir(t) {
        return t && t.replace(/\/.*$/, "");
      }
      var or = new Fi(), Be = or.interactStatic, Li = typeof globalThis < "u" ? globalThis : window;
      or.init(Li);
      var Hi = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(t) {
        var e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(r) {
          var i = r[0], o = r[1];
          return i in t || o in t;
        }), n = function(r, i) {
          for (var o = t.range, a = t.limits, s = a === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : a, u = t.offset, g = u === void 0 ? { x: 0, y: 0 } : u, f = { range: o, grid: t, x: null, y: null }, v = 0; v < e.length; v++) {
            var b = e[v], T = b[0], z = b[1], _ = Math.round((r - g.x) / t[T]), C = Math.round((i - g.y) / t[z]);
            f[T] = Math.max(s.left, Math.min(s.right, _ * t[T] + g.x)), f[z] = Math.max(s.top, Math.min(s.bottom, C * t[z] + g.y));
          }
          return f;
        };
        return n.grid = t, n.coordFields = e, n;
      } }), ji = { id: "snappers", install: function(t) {
        var e = t.interactStatic;
        e.snappers = P(e.snappers || {}, Hi), e.createSnapGrid = e.snappers.grid;
      } }, Wi = ji, $i = { start: function(t) {
        var e = t.state, n = t.rect, r = t.edges, i = t.pageCoords, o = e.options, a = o.ratio, s = o.enabled, u = e.options, g = u.equalDelta, f = u.modifiers;
        a === "preserve" && (a = n.width / n.height), e.startCoords = P({}, i), e.startRect = P({}, n), e.ratio = a, e.equalDelta = g;
        var v = e.linkedEdges = { top: r.top || r.left && !r.bottom, left: r.left || r.top && !r.right, bottom: r.bottom || r.right && !r.top, right: r.right || r.bottom && !r.left };
        if (e.xIsPrimaryAxis = !(!r.left && !r.right), e.equalDelta) {
          var b = (v.left ? 1 : -1) * (v.top ? 1 : -1);
          e.edgeSign = { x: b, y: b };
        } else e.edgeSign = { x: v.left ? -1 : 1, y: v.top ? -1 : 1 };
        if (s !== !1 && P(r, v), f != null && f.length) {
          var T = new vn(t.interaction);
          T.copyFrom(t.interaction.modification), T.prepareStates(f), e.subModification = T, T.startAll(c({}, t));
        }
      }, set: function(t) {
        var e = t.state, n = t.rect, r = t.coords, i = e.linkedEdges, o = P({}, r), a = e.equalDelta ? qi : Ni;
        if (P(t.edges, i), a(e, e.xIsPrimaryAxis, r, n), !e.subModification) return null;
        var s = P({}, n);
        M(i, s, { x: r.x - o.x, y: r.y - o.y });
        var u = e.subModification.setAll(c(c({}, t), {}, { rect: s, edges: i, pageCoords: r, prevCoords: r, prevRect: s })), g = u.delta;
        return u.changed && (a(e, Math.abs(g.x) > Math.abs(g.y), u.coords, u.rect), P(r, u.coords)), u.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
      function qi(t, e, n) {
        var r = t.startCoords, i = t.edgeSign;
        e ? n.y = r.y + (n.x - r.x) * i.y : n.x = r.x + (n.y - r.y) * i.x;
      }
      function Ni(t, e, n, r) {
        var i = t.startRect, o = t.startCoords, a = t.ratio, s = t.edgeSign;
        if (e) {
          var u = r.width / a;
          n.y = o.y + (u - i.height) * s.y;
        } else {
          var g = r.height * a;
          n.x = o.x + (g - i.width) * s.x;
        }
      }
      var Xi = ft($i, "aspectRatio"), ar = function() {
      };
      ar._defaults = {};
      var en = ar;
      function vt(t, e, n) {
        return y.func(t) ? je(t, e.interactable, e.element, [n.x, n.y, e]) : je(t, e.interactable, e.element);
      }
      var tn = { start: function(t) {
        var e = t.rect, n = t.startOffset, r = t.state, i = t.interaction, o = t.pageCoords, a = r.options, s = a.elementRect, u = P({ left: 0, top: 0, right: 0, bottom: 0 }, a.offset || {});
        if (e && s) {
          var g = vt(a.restriction, i, o);
          if (g) {
            var f = g.right - g.left - e.width, v = g.bottom - g.top - e.height;
            f < 0 && (u.left += f, u.right += f), v < 0 && (u.top += v, u.bottom += v);
          }
          u.left += n.left - e.width * s.left, u.top += n.top - e.height * s.top, u.right += n.right - e.width * (1 - s.right), u.bottom += n.bottom - e.height * (1 - s.bottom);
        }
        r.offset = u;
      }, set: function(t) {
        var e = t.coords, n = t.interaction, r = t.state, i = r.options, o = r.offset, a = vt(i.restriction, n, e);
        if (a) {
          var s = function(u) {
            return !u || "left" in u && "top" in u || ((u = P({}, u)).left = u.x || 0, u.top = u.y || 0, u.right = u.right || u.left + u.width, u.bottom = u.bottom || u.top + u.height), u;
          }(a);
          e.x = Math.max(Math.min(s.right - o.right, e.x), s.left + o.left), e.y = Math.max(Math.min(s.bottom - o.bottom, e.y), s.top + o.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, Yi = ft(tn, "restrict"), sr = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, lr = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function cr(t, e) {
        for (var n = 0, r = ["top", "left", "bottom", "right"]; n < r.length; n++) {
          var i = r[n];
          i in t || (t[i] = e[i]);
        }
        return t;
      }
      var Lt = { noInner: sr, noOuter: lr, start: function(t) {
        var e, n = t.interaction, r = t.startOffset, i = t.state, o = i.options;
        o && (e = Ye(vt(o.offset, n, n.coords.start.page))), e = e || { x: 0, y: 0 }, i.offset = { top: e.y + r.top, left: e.x + r.left, bottom: e.y - r.bottom, right: e.x - r.right };
      }, set: function(t) {
        var e = t.coords, n = t.edges, r = t.interaction, i = t.state, o = i.offset, a = i.options;
        if (n) {
          var s = P({}, e), u = vt(a.inner, r, s) || {}, g = vt(a.outer, r, s) || {};
          cr(u, sr), cr(g, lr), n.top ? e.y = Math.min(Math.max(g.top + o.top, s.y), u.top + o.top) : n.bottom && (e.y = Math.max(Math.min(g.bottom + o.bottom, s.y), u.bottom + o.bottom)), n.left ? e.x = Math.min(Math.max(g.left + o.left, s.x), u.left + o.left) : n.right && (e.x = Math.max(Math.min(g.right + o.right, s.x), u.right + o.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, Vi = ft(Lt, "restrictEdges"), Gi = P({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(t) {
      } }, tn.defaults), Ui = ft({ start: tn.start, set: tn.set, defaults: Gi }, "restrictRect"), Ki = { width: -1 / 0, height: -1 / 0 }, Ji = { width: 1 / 0, height: 1 / 0 }, Zi = ft({ start: function(t) {
        return Lt.start(t);
      }, set: function(t) {
        var e = t.interaction, n = t.state, r = t.rect, i = t.edges, o = n.options;
        if (i) {
          var a = Te(vt(o.min, e, t.coords)) || Ki, s = Te(vt(o.max, e, t.coords)) || Ji;
          n.options = { endOnly: o.endOnly, inner: P({}, Lt.noInner), outer: P({}, Lt.noOuter) }, i.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - s.height) : i.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + s.height), i.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - s.width) : i.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + s.width), Lt.set(t), n.options = o;
        }
      }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), En = { start: function(t) {
        var e, n = t.interaction, r = t.interactable, i = t.element, o = t.rect, a = t.state, s = t.startOffset, u = a.options, g = u.offsetWithOrigin ? function(b) {
          var T = b.interaction.element, z = Ye(je(b.state.options.origin, null, null, [T])), _ = z || ke(b.interactable, T, b.interaction.prepared.name);
          return _;
        }(t) : { x: 0, y: 0 };
        if (u.offset === "startCoords") e = { x: n.coords.start.page.x, y: n.coords.start.page.y };
        else {
          var f = je(u.offset, r, i, [n]);
          (e = Ye(f) || { x: 0, y: 0 }).x += g.x, e.y += g.y;
        }
        var v = u.relativePoints;
        a.offsets = o && v && v.length ? v.map(function(b, T) {
          return { index: T, relativePoint: b, x: s.left - o.width * b.x + e.x, y: s.top - o.height * b.y + e.y };
        }) : [{ index: 0, relativePoint: null, x: e.x, y: e.y }];
      }, set: function(t) {
        var e = t.interaction, n = t.coords, r = t.state, i = r.options, o = r.offsets, a = ke(e.interactable, e.element, e.prepared.name), s = P({}, n), u = [];
        i.offsetWithOrigin || (s.x -= a.x, s.y -= a.y);
        for (var g = 0, f = o; g < f.length; g++) for (var v = f[g], b = s.x - v.x, T = s.y - v.y, z = 0, _ = i.targets.length; z < _; z++) {
          var C = i.targets[z], D = void 0;
          (D = y.func(C) ? C(b, T, e._proxy, v, z) : C) && u.push({ x: (y.number(D.x) ? D.x : b) + v.x, y: (y.number(D.y) ? D.y : T) + v.y, range: y.number(D.range) ? D.range : i.range, source: C, index: z, offset: v });
        }
        for (var B = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, G = 0; G < u.length; G++) {
          var Z = u[G], j = Z.range, U = Z.x - s.x, Fe = Z.y - s.y, me = _e(U, Fe), Ne = me <= j;
          j === 1 / 0 && B.inRange && B.range !== 1 / 0 && (Ne = !1), B.target && !(Ne ? B.inRange && j !== 1 / 0 ? me / j < B.distance / B.range : j === 1 / 0 && B.range !== 1 / 0 || me < B.distance : !B.inRange && me < B.distance) || (B.target = Z, B.distance = me, B.range = j, B.inRange = Ne, B.delta.x = U, B.delta.y = Fe);
        }
        return B.inRange && (n.x = B.target.x, n.y = B.target.y), r.closest = B, B;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, Qi = ft(En, "snap"), nn = { start: function(t) {
        var e = t.state, n = t.edges, r = e.options;
        if (!n) return null;
        t.state = { options: { targets: null, relativePoints: [{ x: n.left ? 0 : 1, y: n.top ? 0 : 1 }], offset: r.offset || "self", origin: { x: 0, y: 0 }, range: r.range } }, e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]], En.start(t), e.offsets = t.state.offsets, t.state = e;
      }, set: function(t) {
        var e = t.interaction, n = t.state, r = t.coords, i = n.options, o = n.offsets, a = { x: r.x - o[0].x, y: r.y - o[0].y };
        n.options = P({}, i), n.options.targets = [];
        for (var s = 0, u = i.targets || []; s < u.length; s++) {
          var g = u[s], f = void 0;
          if (f = y.func(g) ? g(a.x, a.y, e) : g) {
            for (var v = 0, b = n.targetFields; v < b.length; v++) {
              var T = b[v], z = T[0], _ = T[1];
              if (z in f || _ in f) {
                f.x = f[z], f.y = f[_];
                break;
              }
            }
            n.options.targets.push(f);
          }
        }
        var C = En.set(t);
        return n.options = i, C;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, eo = ft(nn, "snapSize"), Sn = { aspectRatio: Xi, restrictEdges: Vi, restrict: Yi, restrictRect: Ui, restrictSize: Zi, snapEdges: ft({ start: function(t) {
        var e = t.edges;
        return e ? (t.state.targetFields = t.state.targetFields || [[e.left ? "left" : "right", e.top ? "top" : "bottom"]], nn.start(t)) : null;
      }, set: nn.set, defaults: P(kt(nn.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: Qi, snapSize: eo, spring: en, avoid: en, transform: en, rubberband: en }, to = { id: "modifiers", install: function(t) {
        var e = t.interactStatic;
        for (var n in t.usePlugin(Xn), t.usePlugin(Wi), e.modifiers = Sn, Sn) {
          var r = Sn[n], i = r._defaults, o = r._methods;
          i._methods = o, t.defaults.perAction[n] = i;
        }
      } }, no = to, ur = function(t) {
        S(n, t);
        var e = te(n);
        function n(r, i, o, a, s, u) {
          var g;
          if (m(this, n), Me(ye(g = e.call(this, s)), o), o !== i && Me(ye(g), i), g.timeStamp = u, g.originalEvent = o, g.type = r, g.pointerId = W(i), g.pointerType = De(i), g.target = a, g.currentTarget = null, r === "tap") {
            var f = s.getPointerIndex(i);
            g.dt = g.timeStamp - s.pointers[f].downTime;
            var v = g.timeStamp - s.tapTime;
            g.double = !!s.prevTap && s.prevTap.type !== "doubletap" && s.prevTap.target === g.target && v < 500;
          } else r === "doubletap" && (g.dt = i.timeStamp - s.tapTime, g.double = !0);
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
      }($e), Ht = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t) {
        t.pointerEvents = Ht, t.defaults.actions.pointerEvents = Ht.defaults, P(t.actions.phaselessTypes, Ht.types);
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.prevTap = null, e.tapTime = 0;
      }, "interactions:update-pointer": function(t) {
        var e = t.down, n = t.pointerInfo;
        !e && n.hold || (n.hold = { duration: 1 / 0, timeout: null });
      }, "interactions:move": function(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget;
        t.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && zn(t), pt({ interaction: n, pointer: r, event: i, eventTarget: o, type: "move" }, e));
      }, "interactions:down": function(t, e) {
        (function(n, r) {
          for (var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget, u = n.pointerIndex, g = i.pointers[u].hold, f = X(s), v = { interaction: i, pointer: o, event: a, eventTarget: s, type: "hold", targets: [], path: f, node: null }, b = 0; b < f.length; b++) {
            var T = f[b];
            v.node = T, r.fire("pointerEvents:collect-targets", v);
          }
          if (v.targets.length) {
            for (var z = 1 / 0, _ = 0, C = v.targets; _ < C.length; _++) {
              var D = C[_].eventable.options.holdDuration;
              D < z && (z = D);
            }
            g.duration = z, g.timeout = setTimeout(function() {
              pt({ interaction: i, eventTarget: s, pointer: o, event: a, type: "hold" }, r);
            }, z);
          }
        })(t, e), pt(t, e);
      }, "interactions:up": function(t, e) {
        zn(t), pt(t, e), function(n, r) {
          var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget;
          i.pointerWasMoved || pt({ interaction: i, eventTarget: s, pointer: o, event: a, type: "tap" }, r);
        }(t, e);
      }, "interactions:cancel": function(t, e) {
        zn(t), pt(t, e);
      } }, PointerEvent: ur, fire: pt, collectEventTargets: fr, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
      function pt(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, s = t.targets, u = s === void 0 ? fr(t, e) : s, g = new ur(a, r, i, o, n, e.now());
        e.fire("pointerEvents:new", { pointerEvent: g });
        for (var f = { interaction: n, pointer: r, event: i, eventTarget: o, targets: u, type: a, pointerEvent: g }, v = 0; v < u.length; v++) {
          var b = u[v];
          for (var T in b.props || {}) g[T] = b.props[T];
          var z = ke(b.eventable, b.node);
          if (g._subtractOrigin(z), g.eventable = b.eventable, g.currentTarget = b.node, b.eventable.fire(g), g._addOrigin(z), g.immediatePropagationStopped || g.propagationStopped && v + 1 < u.length && u[v + 1].node !== g.currentTarget) break;
        }
        if (e.fire("pointerEvents:fired", f), a === "tap") {
          var _ = g.double ? pt({ interaction: n, pointer: r, event: i, eventTarget: o, type: "doubletap" }, e) : g;
          n.prevTap = _, n.tapTime = _.timeStamp;
        }
        return g;
      }
      function fr(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, s = n.getPointerIndex(r), u = n.pointers[s];
        if (a === "tap" && (n.pointerWasMoved || !u || u.downTarget !== o)) return [];
        for (var g = X(o), f = { interaction: n, pointer: r, event: i, eventTarget: o, type: a, path: g, targets: [], node: null }, v = 0; v < g.length; v++) {
          var b = g[v];
          f.node = b, e.fire("pointerEvents:collect-targets", f);
        }
        return a === "hold" && (f.targets = f.targets.filter(function(T) {
          var z, _;
          return T.eventable.options.holdDuration === ((z = n.pointers[s]) == null || (_ = z.hold) == null ? void 0 : _.duration);
        })), f.targets;
      }
      function zn(t) {
        var e = t.interaction, n = t.pointerIndex, r = e.pointers[n].hold;
        r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
      }
      var ro = Object.freeze({ __proto__: null, default: Ht });
      function io(t) {
        var e = t.interaction;
        e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
      }
      var oo = { id: "pointer-events/holdRepeat", install: function(t) {
        t.usePlugin(Ht);
        var e = t.pointerEvents;
        e.defaults.holdRepeatInterval = 0, e.types.holdrepeat = t.actions.phaselessTypes.holdrepeat = !0;
      }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t, e) {
        return t["pointerEvents:".concat(e)] = io, t;
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
      } }) }, ao = oo, so = { id: "pointer-events/interactableTargets", install: function(t) {
        var e = t.Interactable;
        e.prototype.pointerEvents = function(r) {
          return P(this.events.options, r), this;
        };
        var n = e.prototype._backCompatOption;
        e.prototype._backCompatOption = function(r, i) {
          var o = n.call(this, r, i);
          return o === this && (this.events.options[r] = i), o;
        };
      }, listeners: { "pointerEvents:collect-targets": function(t, e) {
        var n = t.targets, r = t.node, i = t.type, o = t.eventTarget;
        e.interactables.forEachMatch(r, function(a) {
          var s = a.events, u = s.options;
          s.types[i] && s.types[i].length && a.testIgnoreAllow(u, r, o) && n.push({ node: r, eventable: s, props: { interactable: a } });
        });
      }, "interactable:new": function(t) {
        var e = t.interactable;
        e.events.getRect = function(n) {
          return e.getRect(n);
        };
      }, "interactable:set": function(t, e) {
        var n = t.interactable, r = t.options;
        P(n.events.options, e.pointerEvents.defaults), P(n.events.options, r.pointerEvents || {});
      } } }, lo = so, co = { id: "pointer-events", install: function(t) {
        t.usePlugin(ro), t.usePlugin(ao), t.usePlugin(lo);
      } }, uo = co, fo = { id: "reflow", install: function(t) {
        var e = t.Interactable;
        t.actions.phases.reflow = !0, e.prototype.reflow = function(n) {
          return function(r, i, o) {
            for (var a = r.getAllElements(), s = o.window.Promise, u = s ? [] : null, g = function() {
              var v = a[f], b = r.getRect(v);
              if (!b) return 1;
              var T, z = Ue(o.interactions.list, function(D) {
                return D.interacting() && D.interactable === r && D.element === v && D.prepared.name === i.name;
              });
              if (z) z.move(), u && (T = z._reflowPromise || new s(function(D) {
                z._reflowResolve = D;
              }));
              else {
                var _ = Te(b), C = /* @__PURE__ */ function(D) {
                  return { coords: D, get page() {
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
                T = function(D, B, G, Z, j) {
                  var U = D.interactions.new({ pointerType: "reflow" }), Fe = { interaction: U, event: j, pointer: j, eventTarget: G, phase: "reflow" };
                  U.interactable = B, U.element = G, U.prevEvent = j, U.updatePointer(j, j, G, !0), He(U.coords.delta), dn(U.prepared, Z), U._doPhase(Fe);
                  var me = D.window, Ne = me.Promise, Qe = Ne ? new Ne(function(lt) {
                    U._reflowResolve = lt;
                  }) : void 0;
                  return U._reflowPromise = Qe, U.start(Z, B, G), U._interacting ? (U.move(Fe), U.end(j)) : (U.stop(), U._reflowResolve()), U.removePointer(j, j), Qe;
                }(o, r, v, i, C);
              }
              u && u.push(T);
            }, f = 0; f < a.length && !g(); f++) ;
            return u && s.all(u).then(function() {
              return r;
            });
          }(this, n, t);
        };
      }, listeners: { "interactions:stop": function(t, e) {
        var n = t.interaction;
        n.pointerType === "reflow" && (n._reflowResolve && n._reflowResolve(), function(r, i) {
          r.splice(r.indexOf(i), 1);
        }(e.interactions.list, n));
      } } }, po = fo;
      if (Be.use(Nn), Be.use(Kn), Be.use(uo), Be.use(Pi), Be.use(no), Be.use(mi), Be.use(ai), Be.use(li), Be.use(po), Be.default = Be, x(l) === "object" && l) try {
        l.exports = Be;
      } catch {
      }
      return Be.default = Be, Be;
    });
  }($t, $t.exports)), $t.exports;
}
var Zo = /* @__PURE__ */ Jo();
const Dn = /* @__PURE__ */ Uo(Zo), Er = /* @__PURE__ */ Cn({
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
  setup(l, { expose: d, emit: p }) {
    const c = l, x = p, m = dr(qr), R = dr(Nr);
    if (!m)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const w = ho(null), h = Yt({
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
    let S = !1, ee = !1, q = NaN, ye = NaN, te = NaN, be = NaN, Oe = -1, Pe = -1, we = -1, he = -1, Q = c.x, oe = c.y, re = c.w, pe = c.h;
    const y = Ke(), Ee = Yt({
      i: go(c, "i"),
      state: h,
      wrapper: y,
      calcXY: Te
    });
    function I(E) {
      _e(E);
    }
    function L() {
      Ve();
    }
    function k(E) {
      Xe(c.isDraggable) && (h.draggable = E);
    }
    function A(E) {
      Xe(c.isResizable) && (h.resizable = E);
    }
    function H(E) {
      Xe(c.isBounded) && (h.bounded = E);
    }
    function ie(E) {
      h.transformScale = E;
    }
    function le(E) {
      h.rowHeight = E;
    }
    function ue(E) {
      h.maxRows = E;
    }
    function Y() {
      h.rtl = xr() === "rtl", Ve();
    }
    function ze(E) {
      h.cols = Math.floor(E);
    }
    m.increaseItem(Ee), Fr(() => {
      h.rtl = xr() === "rtl";
    }), An(() => {
      m.responsive && m.lastBreakpoint ? h.cols = Ur(m.lastBreakpoint, m.cols) : h.cols = m.colNum, h.rowHeight = m.rowHeight, h.containerWidth = m.width !== null ? m.width : 100, h.margin = m.margin !== void 0 ? m.margin.map(Number) : [10, 10], h.maxRows = m.maxRows, Xe(c.isDraggable) ? h.draggable = m.isDraggable : h.draggable = c.isDraggable, Xe(c.isResizable) ? h.resizable = m.isResizable : h.resizable = c.isResizable, Xe(c.isBounded) ? h.bounded = m.isBounded : h.bounded = c.isBounded, h.transformScale = m.transformScale, h.useCssTransforms = m.useCssTransforms, h.useStyleCursor = m.useStyleCursor, vo(() => {
        Q = c.x, oe = c.y, pe = c.h, re = c.w, Le(V);
      }), R.on("updateWidth", I), R.on("compact", L), R.on("setDraggable", k), R.on("setResizable", A), R.on("setBounded", H), R.on("setTransformScale", ie), R.on("setRowHeight", le), R.on("setMaxRows", ue), R.on("directionchange", Y), R.on("setColNum", ze);
    }), Lr(() => {
      R.off("updateWidth", I), R.off("compact", L), R.off("setDraggable", k), R.off("setResizable", A), R.off("setBounded", H), R.off("setTransformScale", ie), R.off("setRowHeight", le), R.off("setMaxRows", ue), R.off("directionchange", Y), R.off("setColNum", ze), w.value && (w.value.unset(), w.value = null), m.decreaseItem(Ee);
    }), d({ state: h, wrapper: y });
    const ge = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, fe = et(() => h.resizable && !c.static), ce = et(() => m.isMirrored ? !h.rtl : h.rtl), tt = et(() => (h.draggable || h.resizable) && !c.static), O = $o("item"), N = et(() => ({
      [O.b()]: !0,
      [O.bm("resizable")]: fe.value,
      // 可缩放
      [O.bm("static")]: c.static,
      // 静态锁定
      [O.bm("resizing")]: h.isResizing,
      // 缩放中
      [O.bm("dragging")]: h.isDragging,
      // 拖拽中
      [O.bm("transform")]: h.useCssTransforms,
      // 使用 transform 布局模式
      [O.bm("rtl")]: ce.value,
      // RTL 渲染修饰
      [O.bm("no-touch")]: ge && tt.value
      // Android 下禁用触摸样式修饰
    })), ae = et(() => [O.be("resizer"), ce.value && O.bem("resizer", "rtl")].filter(Boolean)), de = et(() => {
      const E = c.resizeOption;
      return !(!E || !E.edges);
    }), X = et(() => fe.value && !de.value);
    ve(
      () => c.isDraggable,
      (E) => {
        h.draggable = E;
      }
    ), ve(
      () => c.static,
      () => {
        Le(He), Le(Ae);
      }
    ), ve(
      () => h.draggable,
      () => {
        Le(He);
      }
    ), ve(
      () => c.isResizable,
      (E) => {
        h.resizable = E;
      }
    ), ve(
      () => c.isBounded,
      (E) => {
        h.bounded = E;
      }
    ), ve(
      () => h.resizable,
      () => {
        Le(Ae);
      }
    ), ve(
      () => h.rowHeight,
      () => {
        Le(V), Le(P);
      }
    ), ve([() => h.cols, () => h.containerWidth], () => {
      Le(Ae), Le(V), Le(P);
    }), ve([() => c.minH, () => c.maxH, () => c.minW, () => c.maxW], () => {
      Le(Ae);
    }), ve(ce, () => {
      Le(Ae), Le(V);
    }), ve([() => m.margin, () => m.margin[0], () => m.margin[1]], () => {
      const E = m.margin;
      !E || E[0] === h.margin[0] && E[1] === h.margin[1] || (h.margin = E.map(Number), Le(V), Le(P));
    });
    function V() {
      c.x + c.w > h.cols ? (Q = 0, re = c.w > h.cols ? h.cols : c.w) : (Q = c.x, re = c.w);
      const E = Ye(Q, oe, re, pe);
      h.isDragging && (E.top = h.dragging.top, ce.value ? E.right = h.dragging.left : E.left = h.dragging.left), h.isResizing && (E.width = h.resizing.width, E.height = h.resizing.height);
      let W;
      h.useCssTransforms ? ce.value ? W = Lo(E.top, E.right, E.width, E.height) : W = Fo(E.top, E.left, E.width, E.height) : ce.value ? W = jo(E.top, E.right, E.width, E.height) : W = Ho(E.top, E.left, E.width, E.height), h.style = W;
    }
    function P() {
      const E = {};
      for (const W of ["width", "height"]) {
        const J = h.style[W].match(/^(\d+)px$/);
        if (!J)
          return;
        E[W] = J[1];
      }
      x("container-resized", c.i, c.h, c.w, E.height, E.width);
    }
    function Je(E) {
      if (c.static) return;
      const W = E.type;
      if (W === "resizestart" && h.isResizing || W !== "resizestart" && !h.isResizing)
        return;
      const ne = yr(E);
      if (Xe(ne)) return;
      const { x: J, y: se } = ne, K = { width: 0, height: 0 };
      let F;
      switch (E.edges && (h.activeResizeEdges.top = !!E.edges.top, h.activeResizeEdges.right = !!E.edges.right, h.activeResizeEdges.bottom = !!E.edges.bottom, h.activeResizeEdges.left = !!E.edges.left), W) {
        case "resizestart": {
          Ae(), Oe = re, Pe = pe, F = Ye(Q, oe, re, pe), K.width = F.width, K.height = F.height, h.resizing = K, h.isResizing = !0;
          break;
        }
        case "resizemove": {
          !E.edges.right && !E.edges.left && (te = J), !E.edges.top && !E.edges.bottom && (be = se);
          const Se = br(te, be, J, se);
          ce.value ? K.width = h.resizing.width - Se.deltaX / h.transformScale : K.width = h.resizing.width + Se.deltaX / h.transformScale, K.height = h.resizing.height + Se.deltaY / h.transformScale, h.resizing = K;
          break;
        }
        case "resizeend": {
          F = Ye(Q, oe, re, pe), K.width = F.width, K.height = F.height, h.resizing = { width: -1, height: -1 }, h.isResizing = !1, h.activeResizeEdges.top = !1, h.activeResizeEdges.right = !1, h.activeResizeEdges.bottom = !1, h.activeResizeEdges.left = !1;
          break;
        }
      }
      F = Ce(K.height, K.width), F.w < c.minW && (F.w = c.minW), F.w > c.maxW && (F.w = c.maxW), F.h < c.minH && (F.h = c.minH), F.h > c.maxH && (F.h = c.maxH), F.h < 1 && (F.h = 1), F.w < 1 && (F.w = 1), te = J, be = se, (re !== F.w || pe !== F.h) && x("resize", c.i, F.h, F.w, K.height, K.width), E.type === "resizeend" && (Oe !== re || Pe !== pe) && x("resized", c.i, F.h, F.w, K.height, K.width), R.emit("resizeEvent", E.type, c.i, Q, oe, F.h, F.w);
    }
    function je(E) {
      if (c.static || h.isResizing) return;
      const W = E.type;
      if (W === "dragstart" && h.isDragging || W !== "dragstart" && !h.isDragging)
        return;
      const ne = yr(E);
      if (Xe(ne)) return;
      const { x: J, y: se } = ne, K = E.target;
      if (!K.offsetParent) return;
      const F = { top: 0, left: 0 };
      switch (W) {
        case "dragstart": {
          we = Q, he = oe;
          const De = K.offsetParent.getBoundingClientRect(), Ie = K.getBoundingClientRect(), $e = Ie.left / h.transformScale, Ze = De.left / h.transformScale, ot = Ie.right / h.transformScale, Ge = De.right / h.transformScale, Ue = Ie.top / h.transformScale, qe = De.top / h.transformScale;
          ce.value ? F.left = (ot - Ge) * -1 : F.left = $e - Ze, F.top = Ue - qe, h.dragging = F, h.isDragging = !0;
          break;
        }
        case "dragmove": {
          const De = br(q, ye, J, se);
          if (ce.value ? F.left = h.dragging.left - De.deltaX / h.transformScale : F.left = h.dragging.left + De.deltaX / h.transformScale, F.top = h.dragging.top + De.deltaY / h.transformScale, h.bounded) {
            const Ie = K.offsetParent.clientHeight - ke(c.h, h.rowHeight, h.margin[1]);
            F.top = xe(F.top, 0, Ie);
            const $e = M(), Ze = h.containerWidth - ke(c.w, $e, h.margin[0]);
            F.left = xe(F.left, 0, Ze);
          }
          h.dragging = F;
          break;
        }
        case "dragend": {
          const De = K.offsetParent.getBoundingClientRect(), Ie = K.getBoundingClientRect(), $e = Ie.left / h.transformScale, Ze = De.left / h.transformScale, ot = Ie.right / h.transformScale, Ge = De.right / h.transformScale, Ue = Ie.top / h.transformScale, qe = De.top / h.transformScale;
          ce.value ? F.left = (ot - Ge) * -1 : F.left = $e - Ze, F.top = Ue - qe, h.dragging = { top: -1, left: -1 }, h.isDragging = !1;
          break;
        }
      }
      let Se;
      ce.value, Se = Te(F.top, F.left), q = J, ye = se, (Q !== Se.x || oe !== Se.y) && x("move", c.i, Se.x, Se.y), E.type === "dragend" && (we !== Q || he !== oe) && x("moved", c.i, Se.x, Se.y), R.emit("dragEvent", E.type, c.i, Se.x, Se.y, pe, re);
    }
    function Ye(E, W, ne, J) {
      const se = M();
      let K;
      return ce.value ? K = {
        right: Math.round(se * E + (E + 1) * h.margin[0]),
        top: Math.round(h.rowHeight * W + (W + 1) * h.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: ne === 1 / 0 ? ne : Math.round(se * ne + Math.max(0, ne - 1) * h.margin[0]),
        height: J === 1 / 0 ? J : Math.round(h.rowHeight * J + Math.max(0, J - 1) * h.margin[1])
      } : K = {
        left: Math.round(se * E + (E + 1) * h.margin[0]),
        top: Math.round(h.rowHeight * W + (W + 1) * h.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: ne === 1 / 0 ? ne : Math.round(se * ne + Math.max(0, ne - 1) * h.margin[0]),
        height: J === 1 / 0 ? J : Math.round(h.rowHeight * J + Math.max(0, J - 1) * h.margin[1])
      }, K;
    }
    function Te(E, W) {
      const ne = M();
      let J = Math.round((W - h.margin[0]) / (ne + h.margin[0])), se = Math.round((E - h.margin[1]) / (h.rowHeight + h.margin[1]));
      return J = Math.max(Math.min(J, h.cols - re), 0), se = Math.max(Math.min(se, h.maxRows - pe), 0), { x: J, y: se };
    }
    function M() {
      return (h.containerWidth - h.margin[0] * (h.cols + 1)) / h.cols;
    }
    function ke(E, W, ne) {
      return Number.isFinite(E) ? Math.round(W * E + Math.max(0, E - 1) * ne) : E;
    }
    function xe(E, W, ne) {
      return Math.max(Math.min(E, ne), W);
    }
    function Ce(E, W, ne = !1) {
      const J = M();
      let se = Math.round((W + h.margin[0]) / (J + h.margin[0])), K = 0;
      return ne ? K = Math.ceil((E + h.margin[1]) / (h.rowHeight + h.margin[1])) : K = Math.round((E + h.margin[1]) / (h.rowHeight + h.margin[1])), se = Math.max(Math.min(se, h.cols - Q), 0), K = Math.max(Math.min(K, h.maxRows - oe), 0), { w: se, h: K };
    }
    function _e(E, W) {
      h.containerWidth = E;
    }
    function Ve() {
      V();
    }
    function Me() {
      !w.value && y.value && (w.value = Dn(y.value), h.useStyleCursor || w.value.styleCursor(!1));
    }
    const We = Rn(je);
    function He() {
      if (Me(), !!w.value)
        if (h.draggable && !c.static) {
          const E = {
            ignoreFrom: c.dragIgnoreFrom,
            allowFrom: c.dragAllowFrom,
            ...c.dragOption
          };
          w.value.draggable(E), S || (S = !0, w.value.on("dragstart dragmove dragend", (W) => {
            W.type === "dragmove" ? We(W) : je(W);
          }));
        } else
          w.value.draggable({ enabled: !1 });
    }
    const nt = Rn(Je);
    function Ae() {
      if (Me(), !!w.value)
        if (h.resizable && !c.static) {
          const E = Ye(0, 0, c.maxW, c.maxH), W = Ye(0, 0, c.minW, c.minH), ne = {
            edges: {
              left: ce.value ? `.${ae.value[0]}` : !1,
              right: ce.value ? !1 : `.${ae.value[0]}`,
              bottom: `.${ae.value[0]}`,
              top: !1
            },
            ignoreFrom: c.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: W.height * h.transformScale,
                width: W.width * h.transformScale
              },
              max: {
                height: E.height * h.transformScale,
                width: E.width * h.transformScale
              }
            },
            ...c.resizeOption
          };
          c.preserveAspectRatio && (ne.modifiers = [Dn.modifiers.aspectRatio({ ratio: "preserve" })]), w.value.resizable(ne);
          const J = ne.edges || {};
          h.enabledResizeEdges.top = !!J.top, h.enabledResizeEdges.right = !!J.right, h.enabledResizeEdges.bottom = !!J.bottom, h.enabledResizeEdges.left = !!J.left, ee || (ee = !0, w.value.on("resizestart resizemove resizeend", (se) => {
            se.type === "resizemove" ? nt(se) : Je(se);
          }));
        } else
          w.value.resizable({ enabled: !1 }), h.enabledResizeEdges.top = !1, h.enabledResizeEdges.right = !1, h.enabledResizeEdges.bottom = !1, h.enabledResizeEdges.left = !1;
    }
    return (E, W) => (it(), ct("section", {
      ref_key: "wrapper",
      ref: y,
      class: _t(N.value),
      style: Hr(h.style)
    }, [
      un(E.$slots, "default"),
      X.value ? (it(), ct("span", {
        key: 0,
        class: _t(ae.value)
      }, null, 2)) : Wt("", !0),
      fe.value ? (it(), ct("div", {
        key: 1,
        class: _t([
          "vgl-item__edge vgl-item__edge--top",
          [{ "is-enabled": h.enabledResizeEdges.top, "is-active": h.activeResizeEdges.top }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Wt("", !0),
      fe.value ? (it(), ct("div", {
        key: 2,
        class: _t([
          "vgl-item__edge vgl-item__edge--right",
          [{ "is-enabled": h.enabledResizeEdges.right, "is-active": h.activeResizeEdges.right }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Wt("", !0),
      fe.value ? (it(), ct("div", {
        key: 3,
        class: _t([
          "vgl-item__edge vgl-item__edge--bottom",
          [{ "is-enabled": h.enabledResizeEdges.bottom, "is-active": h.activeResizeEdges.bottom }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Wt("", !0),
      fe.value ? (it(), ct("div", {
        key: 4,
        class: _t([
          "vgl-item__edge vgl-item__edge--left",
          [{ "is-enabled": h.enabledResizeEdges.left, "is-active": h.activeResizeEdges.left }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : Wt("", !0)
    ], 6));
  }
}), bt = typeof window < "u";
var Sr;
bt && (Sr = window == null ? void 0 : window.navigator) != null && Sr.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function zr(l) {
  return l != null;
}
const Qo = Object.freeze({
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
Object.freeze(new Set(Object.keys(Qo)));
const ea = bt && ("ontouchstart" in window || na() > 0), ta = ea ? "pointerdown" : "click";
function na() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function ra(l, d, p = window.Event) {
  const { type: c, bubbles: x = !1, cancelable: m = !1, ...R } = d;
  if (!zr(c) || c === "") return !1;
  let w;
  return zr(p) ? w = new p(c, { bubbles: x, cancelable: m }) : (w = document.createEvent("HTMLEvents"), w.initEvent(c, x, m)), Object.assign(w, R), l.dispatchEvent(w);
}
const ia = "clickoutside", oa = /* @__PURE__ */ new Set();
bt && document.addEventListener(
  ta,
  (l) => {
    const d = l.target, p = l.composedPath && l.composedPath();
    oa.forEach((c) => {
      c !== d && (p ? !p.includes(c) : !c.contains(d)) && (!c.__transferElement || c.__transferElement !== d && !c.__transferElement.contains(d)) && ra(c, { type: ia });
    });
  },
  !0
);
const aa = [
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
let ln;
if (bt) {
  for (const l of aa)
    if (l[1] in document) {
      ln = l;
      break;
    }
}
et(() => !1);
const sa = /* @__PURE__ */ new Set(), la = /* @__PURE__ */ new WeakMap();
if (bt && ln) {
  const l = ln[2], d = ln[4];
  document.addEventListener(
    d,
    () => {
      if (sa.forEach((p) => {
        p.value = !1;
      }), document[l]) {
        const p = la.get(document[l]);
        p && (p.value = !0);
      }
    },
    !1
  );
}
const Jr = /* @__PURE__ */ new Map();
Jr.set("x", 0);
Jr.set("y", 0);
var mt = [], ca = function() {
  return mt.some(function(l) {
    return l.activeTargets.length > 0;
  });
}, ua = function() {
  return mt.some(function(l) {
    return l.skippedTargets.length > 0;
  });
}, Tr = "ResizeObserver loop completed with undelivered notifications.", fa = function() {
  var l;
  typeof ErrorEvent == "function" ? l = new ErrorEvent("error", {
    message: Tr
  }) : (l = document.createEvent("Event"), l.initEvent("error", !1, !1), l.message = Tr), window.dispatchEvent(l);
}, Vt;
(function(l) {
  l.BORDER_BOX = "border-box", l.CONTENT_BOX = "content-box", l.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Vt || (Vt = {}));
var yt = function(l) {
  return Object.freeze(l);
}, da = /* @__PURE__ */ function() {
  function l(d, p) {
    this.inlineSize = d, this.blockSize = p, yt(this);
  }
  return l;
}(), Zr = function() {
  function l(d, p, c, x) {
    return this.x = d, this.y = p, this.width = c, this.height = x, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, yt(this);
  }
  return l.prototype.toJSON = function() {
    var d = this, p = d.x, c = d.y, x = d.top, m = d.right, R = d.bottom, w = d.left, h = d.width, S = d.height;
    return { x: p, y: c, top: x, right: m, bottom: R, left: w, width: h, height: S };
  }, l.fromRect = function(d) {
    return new l(d.x, d.y, d.width, d.height);
  }, l;
}(), In = function(l) {
  return l instanceof SVGElement && "getBBox" in l;
}, Qr = function(l) {
  if (In(l)) {
    var d = l.getBBox(), p = d.width, c = d.height;
    return !p && !c;
  }
  var x = l, m = x.offsetWidth, R = x.offsetHeight;
  return !(m || R || l.getClientRects().length);
}, kr = function(l) {
  var d;
  if (l instanceof Element)
    return !0;
  var p = (d = l == null ? void 0 : l.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView;
  return !!(p && l instanceof p.Element);
}, pa = function(l) {
  switch (l.tagName) {
    case "INPUT":
      if (l.type !== "image")
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
}, Xt = typeof window < "u" ? window : {}, on = /* @__PURE__ */ new WeakMap(), _r = /auto|scroll/, ha = /^tb|vertical/, ga = /msie|trident/i.test(Xt.navigator && Xt.navigator.userAgent), rt = function(l) {
  return parseFloat(l || "0");
}, Pt = function(l, d, p) {
  return l === void 0 && (l = 0), d === void 0 && (d = 0), p === void 0 && (p = !1), new da((p ? d : l) || 0, (p ? l : d) || 0);
}, Rr = yt({
  devicePixelContentBoxSize: Pt(),
  borderBoxSize: Pt(),
  contentBoxSize: Pt(),
  contentRect: new Zr(0, 0, 0, 0)
}), ei = function(l, d) {
  if (d === void 0 && (d = !1), on.has(l) && !d)
    return on.get(l);
  if (Qr(l))
    return on.set(l, Rr), Rr;
  var p = getComputedStyle(l), c = In(l) && l.ownerSVGElement && l.getBBox(), x = !ga && p.boxSizing === "border-box", m = ha.test(p.writingMode || ""), R = !c && _r.test(p.overflowY || ""), w = !c && _r.test(p.overflowX || ""), h = c ? 0 : rt(p.paddingTop), S = c ? 0 : rt(p.paddingRight), ee = c ? 0 : rt(p.paddingBottom), q = c ? 0 : rt(p.paddingLeft), ye = c ? 0 : rt(p.borderTopWidth), te = c ? 0 : rt(p.borderRightWidth), be = c ? 0 : rt(p.borderBottomWidth), Oe = c ? 0 : rt(p.borderLeftWidth), Pe = q + S, we = h + ee, he = Oe + te, Q = ye + be, oe = w ? l.offsetHeight - Q - l.clientHeight : 0, re = R ? l.offsetWidth - he - l.clientWidth : 0, pe = x ? Pe + he : 0, y = x ? we + Q : 0, Ee = c ? c.width : rt(p.width) - pe - re, I = c ? c.height : rt(p.height) - y - oe, L = Ee + Pe + re + he, k = I + we + oe + Q, A = yt({
    devicePixelContentBoxSize: Pt(Math.round(Ee * devicePixelRatio), Math.round(I * devicePixelRatio), m),
    borderBoxSize: Pt(L, k, m),
    contentBoxSize: Pt(Ee, I, m),
    contentRect: new Zr(q, h, Ee, I)
  });
  return on.set(l, A), A;
}, ti = function(l, d, p) {
  var c = ei(l, p), x = c.borderBoxSize, m = c.contentBoxSize, R = c.devicePixelContentBoxSize;
  switch (d) {
    case Vt.DEVICE_PIXEL_CONTENT_BOX:
      return R;
    case Vt.BORDER_BOX:
      return x;
    default:
      return m;
  }
}, va = /* @__PURE__ */ function() {
  function l(d) {
    var p = ei(d);
    this.target = d, this.contentRect = p.contentRect, this.borderBoxSize = yt([p.borderBoxSize]), this.contentBoxSize = yt([p.contentBoxSize]), this.devicePixelContentBoxSize = yt([p.devicePixelContentBoxSize]);
  }
  return l;
}(), ni = function(l) {
  if (Qr(l))
    return 1 / 0;
  for (var d = 0, p = l.parentNode; p; )
    d += 1, p = p.parentNode;
  return d;
}, ma = function() {
  var l = 1 / 0, d = [];
  mt.forEach(function(m) {
    if (m.activeTargets.length !== 0) {
      var R = [];
      m.activeTargets.forEach(function(w) {
        var h = new va(w.target), S = ni(w.target);
        R.push(h), w.lastReportedSize = ti(w.target, w.observedBox), S < l && (l = S);
      }), d.push(function() {
        m.callback.call(m.observer, R, m.observer);
      }), m.activeTargets.splice(0, m.activeTargets.length);
    }
  });
  for (var p = 0, c = d; p < c.length; p++) {
    var x = c[p];
    x();
  }
  return l;
}, Pr = function(l) {
  mt.forEach(function(d) {
    d.activeTargets.splice(0, d.activeTargets.length), d.skippedTargets.splice(0, d.skippedTargets.length), d.observationTargets.forEach(function(p) {
      p.isActive() && (ni(p.target) > l ? d.activeTargets.push(p) : d.skippedTargets.push(p));
    });
  });
}, ya = function() {
  var l = 0;
  for (Pr(l); ca(); )
    l = ma(), Pr(l);
  return ua() && fa(), l > 0;
}, Tn, ri = [], ba = function() {
  return ri.splice(0).forEach(function(l) {
    return l();
  });
}, xa = function(l) {
  if (!Tn) {
    var d = 0, p = document.createTextNode(""), c = { characterData: !0 };
    new MutationObserver(function() {
      return ba();
    }).observe(p, c), Tn = function() {
      p.textContent = "".concat(d ? d-- : d++);
    };
  }
  ri.push(l), Tn();
}, wa = function(l) {
  xa(function() {
    requestAnimationFrame(l);
  });
}, cn = 0, Ea = function() {
  return !!cn;
}, Sa = 250, za = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Mr = [
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
], Dr = function(l) {
  return l === void 0 && (l = 0), Date.now() + l;
}, kn = !1, Ta = function() {
  function l() {
    var d = this;
    this.stopped = !0, this.listener = function() {
      return d.schedule();
    };
  }
  return l.prototype.run = function(d) {
    var p = this;
    if (d === void 0 && (d = Sa), !kn) {
      kn = !0;
      var c = Dr(d);
      wa(function() {
        var x = !1;
        try {
          x = ya();
        } finally {
          if (kn = !1, d = c - Dr(), !Ea())
            return;
          x ? p.run(1e3) : d > 0 ? p.run(d) : p.start();
        }
      });
    }
  }, l.prototype.schedule = function() {
    this.stop(), this.run();
  }, l.prototype.observe = function() {
    var d = this, p = function() {
      return d.observer && d.observer.observe(document.body, za);
    };
    document.body ? p() : Xt.addEventListener("DOMContentLoaded", p);
  }, l.prototype.start = function() {
    var d = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Mr.forEach(function(p) {
      return Xt.addEventListener(p, d.listener, !0);
    }));
  }, l.prototype.stop = function() {
    var d = this;
    this.stopped || (this.observer && this.observer.disconnect(), Mr.forEach(function(p) {
      return Xt.removeEventListener(p, d.listener, !0);
    }), this.stopped = !0);
  }, l;
}(), On = new Ta(), Or = function(l) {
  !cn && l > 0 && On.start(), cn += l, !cn && On.stop();
}, ka = function(l) {
  return !In(l) && !pa(l) && getComputedStyle(l).display === "inline";
}, _a = function() {
  function l(d, p) {
    this.target = d, this.observedBox = p || Vt.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return l.prototype.isActive = function() {
    var d = ti(this.target, this.observedBox, !0);
    return ka(this.target) && (this.lastReportedSize = d), this.lastReportedSize.inlineSize !== d.inlineSize || this.lastReportedSize.blockSize !== d.blockSize;
  }, l;
}(), Ra = /* @__PURE__ */ function() {
  function l(d, p) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = d, this.callback = p;
  }
  return l;
}(), an = /* @__PURE__ */ new WeakMap(), Cr = function(l, d) {
  for (var p = 0; p < l.length; p += 1)
    if (l[p].target === d)
      return p;
  return -1;
}, sn = function() {
  function l() {
  }
  return l.connect = function(d, p) {
    var c = new Ra(d, p);
    an.set(d, c);
  }, l.observe = function(d, p, c) {
    var x = an.get(d), m = x.observationTargets.length === 0;
    Cr(x.observationTargets, p) < 0 && (m && mt.push(x), x.observationTargets.push(new _a(p, c && c.box)), Or(1), On.schedule());
  }, l.unobserve = function(d, p) {
    var c = an.get(d), x = Cr(c.observationTargets, p), m = c.observationTargets.length === 1;
    x >= 0 && (m && mt.splice(mt.indexOf(c), 1), c.observationTargets.splice(x, 1), Or(-1));
  }, l.disconnect = function(d) {
    var p = this, c = an.get(d);
    c.observationTargets.slice().forEach(function(x) {
      return p.unobserve(d, x.target);
    }), c.activeTargets.splice(0, c.activeTargets.length);
  }, l;
}(), Pa = function() {
  function l(d) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof d != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    sn.connect(this, d);
  }
  return l.prototype.observe = function(d, p) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!kr(d))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    sn.observe(this, d, p);
  }, l.prototype.unobserve = function(d) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!kr(d))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    sn.unobserve(this, d);
  }, l.prototype.disconnect = function() {
    sn.disconnect(this);
  }, l.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, l;
}();
const fn = /* @__PURE__ */ new WeakMap();
function Ma(l) {
  for (let d = 0, p = l.length; d < p; ++d) {
    const c = l[d], x = fn.get(c.target);
    typeof x == "function" && x(c);
  }
}
const ii = new (bt && window.ResizeObserver || Pa)(
  Ma
);
function Da(l, d) {
  fn.set(l, d), ii.observe(l);
}
function Oa(l) {
  fn.has(l) && (ii.unobserve(l), fn.delete(l));
}
function Ca() {
  return {
    observeResize: Da,
    unobserveResize: Oa
  };
}
const Aa = Ke(!1);
et(() => Aa.value);
const Ar = "__theme_style__", _n = "__theme_observer__", Ir = Yt(/* @__PURE__ */ new Map()), Br = /* @__PURE__ */ new Map();
ve(Ir, () => {
  if (!bt) return;
  Br.clear();
  const l = document.head.querySelector(`#${Ar}`);
  l && document.head.removeChild(l);
  const d = document.createElement("style");
  let p = `.${_n} { width: 1px }`, c = 1;
  for (const [x, [m, R]] of Ir.entries())
    p += ` html.${m} .${_n}, .${R} .${_n} { width: ${++c}px }`, Br.set(c, x);
  d.textContent = p, d.id = Ar, document.head.appendChild(d);
});
const La = /* @__PURE__ */ Cn({
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
  setup(l, { expose: d, emit: p }) {
    const c = l, x = p, m = Yt({
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
    }), R = /* @__PURE__ */ new Map(), w = Ke(c.layout), h = Ke(), { observeResize: S, unobserveResize: ee } = Ca(), q = Mo();
    q.on("resizeEvent", ye), q.on("dragEvent", te), Fr(() => {
      x("layout-before-mount", w.value);
    }), An(() => {
      x("layout-mounted", w.value), ht(() => {
        Wo(w.value), m.originalLayout = w.value, ht(() => {
          I(), h.value && S(h.value, Do(Q, 16)), Rt(w.value, c.verticalCompact), x("layout-updated", w.value), he(), Q();
        });
      });
    }), Lr(() => {
      q.clearAll(), h.value && ee(h.value);
    });
    function ye(k, A, H, ie, le, ue) {
      y(k, A, H, ie, le, ue);
    }
    function te(k, A, H, ie, le, ue) {
      pe(k, A, H, ie, le, ue);
    }
    ve(
      () => m.width,
      (k, A) => {
        ht(() => {
          q.emit("updateWidth", k), A === -1 && ht(() => {
            x("layout-ready", w.value);
          }), he();
        });
      }
    ), ve(
      () => [c.layout, c.layout.length],
      () => {
        w.value = c.layout, we();
      }
    ), ve(
      () => c.colNum,
      (k) => {
        q.emit("setColNum", k);
      }
    ), ve(
      () => c.rowHeight,
      (k) => {
        q.emit("setRowHeight", k);
      }
    ), ve(
      () => c.isDraggable,
      (k) => {
        q.emit("setDraggable", k);
      }
    ), ve(
      () => c.isResizable,
      (k) => {
        q.emit("setResizable", k);
      }
    ), ve(
      () => c.isBounded,
      (k) => {
        q.emit("setBounded", k);
      }
    ), ve(
      () => c.transformScale,
      (k) => {
        q.emit("setTransformScale", k);
      }
    ), ve(
      () => c.responsive,
      (k) => {
        k || (x("update:layout", m.originalLayout), q.emit("setColNum", c.colNum)), Q();
      }
    ), ve(
      () => c.maxRows,
      (k) => {
        q.emit("setMaxRows", k);
      }
    ), ve([() => c.margin, () => c.margin[1]], he), pr(
      qr,
      Yt({
        ...hr(c),
        ...hr(m),
        increaseItem: be,
        decreaseItem: Oe
      })
    ), pr(Nr, q), d({ state: m, getItem: Pe, resizeEvent: y, dragEvent: pe, layoutUpdate: we });
    function be(k) {
      R.set(k.i, k);
    }
    function Oe(k) {
      R.delete(k.i);
    }
    function Pe(k) {
      return R.get(k);
    }
    function we() {
      if (!Xe(w.value) && !Xe(m.originalLayout)) {
        if (w.value.length !== m.originalLayout.length) {
          const k = L(w.value, m.originalLayout);
          if (k.length > 0)
            if (w.value.length > m.originalLayout.length)
              m.originalLayout = m.originalLayout.concat(k);
            else {
              const A = new Set(k.map((H) => H.i));
              m.originalLayout = m.originalLayout.filter((H) => !A.has(H.i));
            }
          m.lastLayoutLength = w.value.length, I();
        }
        Rt(w.value, c.verticalCompact), q.emit("updateWidth", m.width), he(), x("layout-updated", w.value);
      }
    }
    function he() {
      m.mergedStyle = {
        height: oe()
      };
    }
    function Q() {
      h.value && (m.width = h.value.offsetWidth), q.emit("resizeEvent");
    }
    function oe() {
      if (!c.autoSize) return;
      const k = parseFloat(c.margin[1]);
      return Co(w.value) * (c.rowHeight + k) + k + "px";
    }
    let re;
    function pe(k, A, H, ie, le, ue) {
      let Y = vr(w.value, A);
      Xe(Y) && (Y = { h: 0, w: 0, x: 0, y: 0, i: "" }), k === "dragstart" && !c.verticalCompact && (re = w.value.reduce(
        (ze, { i: ge, x: fe, y: ce }) => ({
          ...ze,
          [ge]: { x: fe, y: ce }
        }),
        {}
      )), k === "dragmove" || k === "dragstart" ? (m.placeholder.i = A, m.placeholder.x = Y.x, m.placeholder.y = Y.y, m.placeholder.w = ue, m.placeholder.h = le, ht(() => {
        m.isDragging = !0;
      }), q.emit("updateWidth", m.width)) : ht(() => {
        m.isDragging = !1;
      }), w.value = Mn(w.value, Y, H, ie, !0, c.preventCollision), c.restoreOnDrag ? (Y.static = !0, Rt(w.value, c.verticalCompact, re), Y.static = !1) : Rt(w.value, c.verticalCompact), q.emit("compact"), he(), k === "dragend" && (re = void 0, x("layout-updated", w.value));
    }
    function y(k, A, H, ie, le, ue) {
      let Y = vr(w.value, A);
      Xe(Y) && (Y = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let ze;
      if (c.preventCollision) {
        const ge = Yr(w.value, { ...Y, w: ue, h: le }).filter(
          (fe) => fe.i !== Y.i
        );
        if (ze = ge.length > 0, ze) {
          let fe = 1 / 0, ce = 1 / 0;
          ge.forEach((tt) => {
            tt.x > Y.x && (fe = Math.min(fe, tt.x)), tt.y > Y.y && (ce = Math.min(ce, tt.y));
          }), Number.isFinite(fe) && (Y.w = fe - Y.x), Number.isFinite(ce) && (Y.h = ce - Y.y);
        }
      }
      ze || (Y.w = ue, Y.h = le), k === "resizestart" || k === "resizemove" ? (m.placeholder.i = A, m.placeholder.x = H, m.placeholder.y = ie, m.placeholder.w = Y.w, m.placeholder.h = Y.h, ht(() => {
        m.isDragging = !0;
      }), q.emit("updateWidth", m.width)) : k && ht(() => {
        m.isDragging = !1;
      }), c.responsive && Ee(), Rt(w.value, c.verticalCompact), q.emit("compact"), he(), k === "resizeend" && x("layout-updated", w.value);
    }
    function Ee() {
      const k = Xo(c.breakpoints, m.width);
      if (k === m.lastBreakpoint)
        return;
      const A = Ur(k, c.cols);
      !Xe(m.lastBreakpoint) && !m.layouts[m.lastBreakpoint] && (m.layouts[m.lastBreakpoint] = Pn(w.value));
      const H = Yo(
        m.originalLayout,
        m.layouts,
        c.breakpoints,
        k,
        m.lastBreakpoint,
        A,
        c.verticalCompact
      );
      m.layouts[k] = H, m.lastBreakpoint !== k && x("breakpoint-changed", k, H), w.value = H, x("update:layout", H), m.lastBreakpoint = k, q.emit("setColNum", A);
    }
    function I() {
      m.layouts = Object.assign({}, c.responsiveLayouts);
    }
    function L(k, A) {
      const H = new Set(A.map((Y) => Y.i)), ie = new Set(k.map((Y) => Y.i)), le = k.filter((Y) => !H.has(Y.i)), ue = A.filter((Y) => !ie.has(Y.i));
      return le.concat(ue);
    }
    return (k, A) => (it(), ct("div", {
      ref_key: "wrapper",
      ref: h,
      class: "vgl-layout",
      style: Hr(m.mergedStyle)
    }, [
      k.$slots.default ? un(k.$slots, "default", { key: 0 }) : (it(!0), ct(yo, { key: 1 }, bo(w.value, (H) => (it(), xo(Er, wo({
        key: H.i,
        ref_for: !0
      }, H), {
        default: Eo(() => [
          un(k.$slots, "item", { item: H })
        ]),
        _: 2
      }, 1040))), 128)),
      mo(So(Er, {
        class: "vgl-item--placeholder",
        x: m.placeholder.x,
        y: m.placeholder.y,
        w: m.placeholder.w,
        h: m.placeholder.h,
        i: m.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [zo, m.isDragging]
      ])
    ], 4));
  }
}), Ia = 2;
function Ba(l, d = {}, p) {
  const x = { ...{
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
  }, ...d }, { draggable: m, resizable: R, useCssTransforms: w, dragOptions: h, resizeOptions: S } = x, ee = (O, N) => l.getAttribute(`data-${O}`) || N, q = (O, N) => {
    l.setAttribute(`data-${O}`, N.toString());
  }, ye = l.getBoundingClientRect(), te = x.width || ye.width || 0, be = x.height || ye.height || 0;
  q("x", x.x || 0), q("y", x.y || 0), q("width", te.toString()), q("height", be.toString());
  const Oe = ee("x", "0"), Pe = ee("y", "0"), we = ee("width", te.toString()), he = ee("height", be.toString()), Q = /* @__PURE__ */ new Map();
  let oe = !1;
  const re = (O) => {
    if (l instanceof HTMLElement) {
      const N = getComputedStyle(l);
      return (N.position === "absolute" || N.position === "fixed") && N[O] !== "auto" && N[O] !== "";
    }
    return !1;
  }, pe = () => re("right"), y = () => re("left"), Ee = () => re("top"), I = () => re("bottom");
  let L = parseFloat(Oe), k = parseFloat(Pe), A = parseFloat(we), H = parseFloat(he);
  const ie = (O) => {
    ["top", "right", "bottom", "left"].forEach((N) => {
      const ae = Q.get(N);
      ae && (ae.style.backgroundColor = O[N] ? "rgba(29, 98, 236, 1)" : "rgba(29, 98, 236, 0)");
    });
  }, le = () => {
    Q.forEach((O) => {
      O.style.backgroundColor = "rgba(29, 98, 236, 0)";
    });
  }, ue = () => {
    const O = (S == null ? void 0 : S.edges) || {}, N = (S == null ? void 0 : S.margin) ?? 4, ae = {
      position: "absolute",
      backgroundColor: "rgba(29, 98, 236, 0)",
      // 初始透明
      pointerEvents: "auto",
      // 设置为auto以支持hover效果
      transition: "background-color 0.1s ease"
    }, de = (X) => {
      const V = () => {
        X.style.backgroundColor = "rgba(29, 98, 236, 1)";
      }, P = () => {
        oe || (X.style.backgroundColor = "rgba(29, 98, 236, 0)");
      };
      X.addEventListener("mouseenter", V), X.addEventListener("mouseleave", P), X._mouseEnterListener = V, X._mouseLeaveListener = P;
    };
    if (O.top) {
      const X = document.createElement("div");
      Object.assign(X.style, ae, {
        top: `-${N}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), de(X), l.appendChild(X), Q.set("top", X);
    }
    if (O.right) {
      const X = document.createElement("div");
      Object.assign(X.style, ae, {
        top: "0",
        right: `-${N}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), de(X), l.appendChild(X), Q.set("right", X);
    }
    if (O.bottom) {
      const X = document.createElement("div");
      Object.assign(X.style, ae, {
        bottom: `-${N}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), de(X), l.appendChild(X), Q.set("bottom", X);
    }
    if (O.left) {
      const X = document.createElement("div");
      Object.assign(X.style, ae, {
        top: "0",
        left: `-${N}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), de(X), l.appendChild(X), Q.set("left", X);
    }
  }, Y = (O) => {
    Q.forEach((N) => {
      N.style.pointerEvents = "auto", N.style.display = "block";
    });
  }, ze = Dn(l).styleCursor(!1);
  if (m) {
    const O = (V) => {
      var P;
      R && S && ze.resizable(!1), (P = p == null ? void 0 : p.onDrag) == null || P.call(p, {
        type: "dragstart",
        top: k,
        left: L,
        deltaX: 0,
        deltaY: 0
      });
    }, N = (V) => {
      if (L += V.dx, k += V.dy, V.target instanceof HTMLElement) {
        const P = getComputedStyle(V.target), Je = P.position === "absolute" || P.position === "fixed";
        w && !Je ? V.target.style.transform = `translate(${L}px, ${k}px)` : Je ? (pe(), y(), Ee(), I(), y() ? V.target.style.left = `${L}px` : pe() ? pe() && (V.target.style.right = `${-L}px`) : V.target.style.left = `${L}px`, Ee() ? V.target.style.top = `${k}px` : I() ? I() && (V.target.style.bottom = `${-k}px`) : V.target.style.top = `${k}px`) : V.target.style.transform = `translate(${L}px, ${k}px)`;
      }
      V.target._dataUpdateTimer || (V.target._dataUpdateTimer = setTimeout(() => {
        V.target instanceof Element && (V.target.setAttribute("data-x", L.toString()), V.target.setAttribute("data-y", k.toString())), delete V.target._dataUpdateTimer;
      }, 50)), p != null && p.onDrag && requestAnimationFrame(() => {
        var P;
        (P = p.onDrag) == null || P.call(p, {
          type: "dragmove",
          top: k,
          left: L,
          deltaX: V.dx,
          deltaY: V.dy
        });
      });
    }, ae = (V) => {
      var P;
      R && S && ze.resizable(!0), V.target instanceof Element && (V.target.setAttribute("data-x", L.toString()), V.target.setAttribute("data-y", k.toString())), (P = p == null ? void 0 : p.onDrag) == null || P.call(p, {
        type: "dragend",
        top: k,
        left: L,
        deltaX: V.dx,
        deltaY: V.dy
      });
    }, de = Rn(
      N,
      (h == null ? void 0 : h.threshold) ?? Ia
    ), X = {
      enabled: !0,
      allowFrom: h == null ? void 0 : h.allowFrom,
      ignoreFrom: h == null ? void 0 : h.ignoreFrom,
      modifiers: (h == null ? void 0 : h.modifiers) || [],
      listeners: {
        start: O,
        move: de,
        end: ae
      }
    };
    h != null && h.startAxis && (X.startAxis = h.startAxis), h != null && h.lockAxis && (X.lockAxis = h.lockAxis), (h == null ? void 0 : h.max) !== void 0 && (X.max = h.max), (h == null ? void 0 : h.maxPerElement) !== void 0 && (X.maxPerElement = h.maxPerElement), ze.draggable(X);
  }
  const ge = (O, N, ae = "width") => {
    if (typeof O == "number")
      return O;
    if (O.endsWith("px"))
      return parseFloat(O);
    const de = document.createElement("div");
    Object.assign(de.style, {
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
      width: ae === "width" ? O : "auto",
      height: ae === "height" ? O : "auto"
    });
    try {
      const X = N.parentNode;
      (X instanceof Node ? X : document.body).appendChild(de);
      const P = getComputedStyle(de), je = parseFloat(P[ae === "width" ? "width" : "height"]);
      return isNaN(je) || je <= 0 ? 100 : je;
    } catch {
      return 100;
    } finally {
      de.parentNode && de.parentNode.removeChild(de);
    }
  };
  if (R && S) {
    ue();
    let O = 10, N = 10, ae = 1 / 0, de = 1 / 0, X = A / H;
    const V = (M) => {
      var xe, Ce, _e, Ve;
      Y(), oe = !0, m && h && ze.draggable(!1);
      const ke = {
        top: !!((xe = M.edges) != null && xe.top),
        right: !!((Ce = M.edges) != null && Ce.right),
        bottom: !!((_e = M.edges) != null && _e.bottom),
        left: !!((Ve = M.edges) != null && Ve.left)
      };
      ie(ke), O = ge((S == null ? void 0 : S.minWidth) ?? 10, M.target, "width"), N = ge((S == null ? void 0 : S.minHeight) ?? 10, M.target, "height"), ae = ge((S == null ? void 0 : S.maxWidth) ?? 1 / 0, M.target, "width"), de = ge((S == null ? void 0 : S.maxHeight) ?? 1 / 0, M.target, "height"), X = A / H, p != null && p.onResize && requestAnimationFrame(() => {
        var Me;
        (Me = p.onResize) == null || Me.call(p, {
          type: "resizestart",
          width: A,
          height: H,
          top: k,
          left: L,
          deltaWidth: 0,
          deltaHeight: 0,
          edges: ke
        });
      });
    }, P = (M) => {
      var ne, J, se, K, F, Se, De, Ie, $e, Ze, ot, Ge, Ue, qe, Mt, xt, Dt, wt, Et, Ot, Ct, Gt, St, zt;
      const ke = pe(), xe = y(), Ce = Ee(), _e = I(), Ve = M.target instanceof HTMLElement ? getComputedStyle(M.target) : null, Me = ((ne = M.deltaRect) == null ? void 0 : ne.width) || 0, We = ((J = M.deltaRect) == null ? void 0 : J.height) || 0;
      let He = Me, nt = We;
      S != null && S.preserveAspectRatio && !ke && !xe && !Ce && !_e && ((se = M.edges) != null && se.left || (K = M.edges) != null && K.right ? nt = Me / X : ((F = M.edges) != null && F.top || (Se = M.edges) != null && Se.bottom) && (He = We * X));
      let Ae = A + He, E = H + nt;
      if (Ae = Math.max(O, Math.min(ae, Ae)), E = Math.max(N, Math.min(de, E)), He = Ae - A, nt = E - H, He === 0 && nt === 0)
        return;
      if ((ke || xe || Ce || _e) && Ve) {
        const Re = M.target.getBoundingClientRect();
        (Math.abs(Re.width - A) > 1 || Math.abs(Re.height - H) > 1) && (A = Re.width, H = Re.height);
      }
      if (!ke && !xe && !Ce && !_e && ((De = M.edges) != null && De.top && (k -= nt), (Ie = M.edges) != null && Ie.right, ($e = M.edges) != null && $e.bottom, (Ze = M.edges) != null && Ze.left && (L -= He)), A = Ae, H = E, ((ot = M.edges) != null && ot.left || (Ge = M.edges) != null && Ge.right) && (M.target.style.width = `${A}px`), ((Ue = M.edges) != null && Ue.top || (qe = M.edges) != null && qe.bottom) && (M.target.style.height = `${H}px`), (Mt = M.edges) != null && Mt.top && _e) {
        const Re = (xt = M.target.parentElement) == null ? void 0 : xt.getBoundingClientRect();
        if (Re) {
          const At = parseInt(getComputedStyle(M.target).bottom || "0", 10), Tt = Re.height - H - At;
          M.target.style.top = `${Tt}px`;
        }
      }
      if ((Dt = M.edges) != null && Dt.left && ke) {
        const Re = (wt = M.target.parentElement) == null ? void 0 : wt.getBoundingClientRect();
        if (Re) {
          const At = parseInt(getComputedStyle(M.target).right || "0", 10), Tt = Re.width - A - At;
          M.target.style.left = `${Tt}px`;
        }
      }
      if ((Et = M.edges) != null && Et.right && xe) {
        const Re = parseInt(getComputedStyle(M.target).left || "0", 10);
        M.target.style.left = `${Re}px`;
      }
      if ((Ot = M.edges) != null && Ot.bottom && Ce) {
        const Re = parseInt(getComputedStyle(M.target).top || "0", 10);
        M.target.style.top = `${Re}px`;
      }
      !ke && !xe && !Ce && !_e && w && (M.target.style.transform = `translate(${L}px, ${k}px)`);
      const W = {
        top: !!((Ct = M.edges) != null && Ct.top),
        right: !!((Gt = M.edges) != null && Gt.right),
        bottom: !!((St = M.edges) != null && St.bottom),
        left: !!((zt = M.edges) != null && zt.left)
      };
      p != null && p.onResize && requestAnimationFrame(() => {
        var Re;
        (Re = p.onResize) == null || Re.call(p, {
          type: "resizemove",
          width: A,
          height: H,
          top: k,
          left: L,
          deltaWidth: Me,
          deltaHeight: We,
          edges: W
        });
      });
    }, Je = (M) => {
      var xe, Ce, _e, Ve;
      oe = !1, m && h && ze.draggable(!0), le(), M.target instanceof Element && (M.target.setAttribute("data-x", L.toString()), M.target.setAttribute("data-y", k.toString()), M.target.setAttribute("data-width", A.toString()), M.target.setAttribute("data-height", H.toString()));
      const ke = {
        top: !!((xe = M.edges) != null && xe.top),
        right: !!((Ce = M.edges) != null && Ce.right),
        bottom: !!((_e = M.edges) != null && _e.bottom),
        left: !!((Ve = M.edges) != null && Ve.left)
      };
      requestAnimationFrame(() => {
        var Me, We, He;
        (He = p == null ? void 0 : p.onResize) == null || He.call(p, {
          type: "resizeend",
          width: A,
          height: H,
          top: k,
          left: L,
          deltaWidth: ((Me = M.deltaRect) == null ? void 0 : Me.width) || 0,
          deltaHeight: ((We = M.deltaRect) == null ? void 0 : We.height) || 0,
          edges: ke
        });
      });
    }, Ye = P, Te = {
      enabled: !0,
      edges: (S == null ? void 0 : S.edges) || {},
      modifiers: (S == null ? void 0 : S.modifiers) || [],
      listeners: {
        start: V,
        move: Ye,
        end: Je
      }
    };
    (S == null ? void 0 : S.square) !== void 0 && (Te.square = S.square), (S == null ? void 0 : S.preserveAspectRatio) !== void 0 && (Te.preserveAspectRatio = S.preserveAspectRatio), S != null && S.invert && (Te.invert = S.invert), (S == null ? void 0 : S.margin) !== void 0 && (Te.margin = S.margin), (S == null ? void 0 : S.max) !== void 0 && (Te.max = S.max), (S == null ? void 0 : S.maxPerElement) !== void 0 && (Te.maxPerElement = S.maxPerElement), (S == null ? void 0 : S.minWidth) !== void 0 && (Te.minWidth = ge(S.minWidth, l, "width")), (S == null ? void 0 : S.minHeight) !== void 0 && (Te.minHeight = ge(S.minHeight, l, "height")), (S == null ? void 0 : S.maxWidth) !== void 0 && (Te.maxWidth = ge(S.maxWidth, l, "width")), (S == null ? void 0 : S.maxHeight) !== void 0 && (Te.maxHeight = ge(S.maxHeight, l, "height"));
    try {
      ze.resizable(Te);
    } catch (M) {
      console.error("Error setting up resizable:", M);
    }
  }
  if (l instanceof HTMLElement && (l.style.transition = "none", l.style.width = `${A}px`, l.style.height = `${H}px`), l instanceof HTMLElement) {
    const O = getComputedStyle(l), N = O.position === "absolute" || O.position === "fixed";
    w && !N ? l.style.transform = `translate(${L}px, ${k}px)` : N ? (!pe() && !y() && (l.style.left = `${L}px`), !Ee() && !I() && (l.style.top = `${k}px`)) : l.style.transform = `translate(${L}px, ${k}px)`;
  }
  const fe = (O, N) => {
    if (L = O, k = N, l instanceof HTMLElement) {
      const ae = getComputedStyle(l), de = ae.position === "absolute" || ae.position === "fixed";
      w && !de ? l.style.transform = `translate(${O}px, ${N}px)` : de ? (!pe() && !y() && (l.style.left = `${O}px`), !Ee() && !I() && (l.style.top = `${N}px`)) : l.style.transform = `translate(${O}px, ${N}px)`;
    }
    l instanceof Element && (l.setAttribute("data-x", O.toString()), l.setAttribute("data-y", N.toString()));
  }, ce = (O, N) => {
    A = O, H = N, l instanceof HTMLElement && (l.style.width = `${O}px`, l.style.height = `${N}px`), l instanceof Element && (l.setAttribute("data-width", O.toString()), l.setAttribute("data-height", N.toString()));
  };
  return {
    cleanup: () => {
      Q.forEach((O) => {
        O._mouseEnterListener && O.removeEventListener("mouseenter", O._mouseEnterListener), O._mouseLeaveListener && O.removeEventListener("mouseleave", O._mouseLeaveListener), O.remove();
      });
      try {
        ze.unset();
      } catch (O) {
        console.error("Error unsetting interactable:", O);
      }
    },
    updatePositionAndSize: (O, N, ae, de) => {
      fe(O, N), ce(ae, de);
    },
    updatePosition: fe,
    updateSize: ce
  };
}
const Ha = /* @__PURE__ */ Cn({
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
  setup(l, { expose: d, emit: p }) {
    const c = l, x = p, m = Ke(), R = Ke(c.initialX), w = Ke(c.initialY), h = Ke(c.initialWidth), S = Ke(c.initialHeight), ee = Ke(!1), q = Ke(!1), ye = Ke({});
    let te = null, be = null, Oe = null, Pe = null;
    const we = [], he = et(() => ({
      x: R.value,
      y: w.value,
      width: h.value,
      height: S.value,
      isDragging: ee.value,
      isResizing: q.value,
      activeEdges: ye.value
    })), Q = () => ({
      onDrag: (I) => {
        switch (R.value = I.left, w.value = I.top, ee.value = I.type === "dragstart" ? !0 : I.type === "dragend" ? !1 : ee.value, I.type) {
          case "dragstart":
            x("dragStart", I);
            break;
          case "dragmove":
            x("dragMove", I);
            break;
          case "dragend":
            x("dragEnd", I);
            break;
        }
      },
      onResize: (I) => {
        switch (h.value = I.width, S.value = I.height, R.value = I.left, w.value = I.top, q.value = I.type === "resizestart" ? !0 : I.type === "resizeend" ? !1 : q.value, ye.value = I.edges || {}, I.type) {
          case "resizestart":
            x("resizeStart", I);
            break;
          case "resizemove":
            x("resizeMove", I);
            break;
          case "resizeend":
            x("resizeEnd", I);
            break;
        }
      }
    }), oe = et(() => ({
      draggable: c.draggable,
      resizable: c.resizable,
      useCssTransforms: c.useCssTransforms,
      dragOptions: c.dragOptions,
      resizeOptions: c.resizeOptions,
      x: c.initialX,
      y: c.initialY,
      width: c.initialWidth,
      height: c.initialHeight
    })), re = () => {
      if (!m.value) return;
      m.value.setAttribute("data-x", c.initialX.toString()), m.value.setAttribute("data-y", c.initialY.toString()), m.value.setAttribute("data-width", c.initialWidth.toString()), m.value.setAttribute("data-height", c.initialHeight.toString());
      const I = Q(), L = Ba(
        m.value,
        oe.value,
        I
      );
      te = L.cleanup, be = L.updatePositionAndSize, Oe = L.updatePosition, Pe = L.updateSize;
    };
    we.push(
      ve(
        [
          () => c.draggable,
          () => c.resizable,
          () => c.dragOptions,
          () => c.resizeOptions
        ],
        () => {
          te && (te(), te = null), re();
        },
        {
          deep: c.watchDeep,
          immediate: c.watchImmediate
        }
      )
    ), we.push(
      ve(
        [
          () => c.initialX,
          () => c.initialY,
          () => c.initialWidth,
          () => c.initialHeight
        ],
        ([I, L, k, A]) => {
          be && (be(I, L, k, A), R.value = I, w.value = L, h.value = k, S.value = A);
        }
      )
    ), An(() => {
      re();
    });
    const pe = (I, L, k, A) => {
      be && (be(I, L, k, A), R.value = I, w.value = L, h.value = k, S.value = A);
    }, y = (I, L) => {
      Oe && (Oe(I, L), R.value = I, w.value = L);
    }, Ee = (I, L) => {
      Pe && (Pe(I, L), h.value = I, S.value = L);
    };
    return To(() => {
      te && (te(), te = null), we != null && we.length && (we.forEach((I) => I()), we.length = 0), be = null, Oe = null, Pe = null;
    }), d({
      elementRef: m,
      x: R,
      y: w,
      width: h,
      height: S,
      isDragging: ee,
      isResizing: q,
      activeEdges: ye,
      updatePositionAndSize: pe,
      updatePosition: y,
      updateSize: Ee
    }), (I, L) => (it(), ct("div", {
      ref_key: "elementRef",
      ref: m,
      class: "draggable-resizable-wrapper"
    }, [
      un(I.$slots, "default", ko(_o(he.value)))
    ], 512));
  }
});
export {
  Ha as DraggableResizableWrapper,
  Er as GridItem,
  La as GridLayout,
  Ba as makeElementDraggableResizable
};
//# sourceMappingURL=grid-layout-plus.mjs.map
