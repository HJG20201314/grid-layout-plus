(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;top:0;right:3px;bottom:3px;left:0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{top:0;right:0;bottom:3px;left:3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}.vgl-item__edge{position:absolute;pointer-events:auto;background-color:transparent;transition:background-color .12s ease}.vgl-item__edge--top,.vgl-item__edge--bottom{right:0;left:0;height:2px}.vgl-item__edge--left,.vgl-item__edge--right{top:0;bottom:0;width:2px}.vgl-item__edge--top{top:0}.vgl-item__edge--bottom{bottom:0}.vgl-item__edge--left{left:0}.vgl-item__edge--right{right:0}.vgl-item__edge.is-enabled:not(.is-active):hover{background-color:#1d62ec}.vgl-item__edge.is-active{background-color:#1d62ec}.draggable-resizable-wrapper{position:relative}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { defineComponent as Cn, inject as dr, shallowRef as ho, reactive as Nt, ref as Je, toRef as go, onBeforeMount as Fr, onMounted as An, watchEffect as vo, onBeforeUnmount as Lr, computed as rt, watch as ve, createElementBlock as ct, openBlock as ot, normalizeStyle as jr, normalizeClass as Tt, renderSlot as un, createCommentVNode as jt, nextTick as ht, provide as pr, toRefs as hr, withDirectives as mo, Fragment as yo, renderList as bo, createBlock as xo, mergeProps as wo, withCtx as Eo, createVNode as So, vShow as zo, onUnmounted as To, normalizeProps as ko, guardReactiveProps as _o } from "vue";
const Ro = typeof window < "u";
var gr;
Ro && ((gr = window == null ? void 0 : window.navigator) != null && gr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ye(s) {
  return s == null;
}
function Hr() {
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
      c && c.forEach((x) => {
        x(...p);
      });
    }
  };
}
function Rn(s, d = 16) {
  if (typeof s != "function")
    return Hr;
  const p = (...m) => {
    s(...m);
  };
  if (d <= 0)
    return Wr(p);
  let c = 0, x;
  return function(...m) {
    const R = Date.now(), E = R - c;
    clearTimeout(x), E >= d ? (c = R, p(...m)) : x = setTimeout(
      () => {
        c = Date.now(), p(...m);
      },
      Math.max(0, d - E)
    );
  };
}
function Do(s, d = 100) {
  if (typeof s != "function")
    return Hr;
  const p = (...x) => {
    s(...x);
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
function Wr(s) {
  if (typeof s != "function")
    return s;
  let d = !1, p, c;
  return function(...x) {
    return p = x, d || (d = !0, c = Promise.resolve().then(() => (d = !1, c = void 0, s(...p)))), c;
  };
}
const Wt = /* @__PURE__ */ new Set(), $r = /* @__PURE__ */ new WeakMap();
function Oo() {
  Wt.forEach((s) => {
    s(...$r.get(s));
  }), Wt.clear();
}
function je(s, ...d) {
  if (typeof s != "function")
    return s;
  $r.set(s, d), !Wt.has(s) && (Wt.add(s), Wt.size === 1 && Promise.resolve().then(Oo));
}
const qr = Symbol("LAYOUT_KEY"), Nr = Symbol("EMITTER_KEY");
function Co(s) {
  let d = 0, p;
  for (let c = 0, x = s.length; c < x; c++)
    p = s[c].y + s[c].h, p > d && (d = p);
  return d;
}
function Pn(s) {
  const d = Array(s.length);
  for (let p = 0, c = s.length; p < c; p++)
    d[p] = Ao(s[p]);
  return d;
}
function Ao(s) {
  return { ...s };
}
function Xr(s, d) {
  return !(s === d || s.x + s.w <= d.x || s.x >= d.x + d.w || s.y + s.h <= d.y || s.y >= d.y + d.h);
}
function kt(s, d, p) {
  const c = Vr(s), x = Gr(s), m = Array(s.length);
  for (let R = 0, E = x.length; R < E; R++) {
    let h = x[R];
    h.static || (h = Io(c, h, d, p), c.push(h)), m[s.findIndex((z) => z.i === h.i)] = h, h.moved = !1;
  }
  return m;
}
function Io(s, d, p, c) {
  if (p)
    for (; d.y > 0 && !$t(s, d); )
      d.y--;
  else if (c) {
    const m = c[d.i].y;
    for (; d.y > m && !$t(s, d); )
      d.y--;
  }
  let x;
  for (; x = $t(s, d); )
    d.y = x.y + x.h;
  return d;
}
function Bo(s, d) {
  const p = Vr(s);
  for (let c = 0, x = s.length; c < x; c++) {
    const m = s[c];
    if (m.x + m.w > d.cols && (m.x = d.cols - m.w), m.x < 0 && (m.x = 0, m.w = d.cols), !m.static) p.push(m);
    else
      for (; $t(p, m); )
        m.y++;
  }
  return s;
}
function vr(s, d) {
  for (let p = 0, c = s.length; p < c; p++)
    if (s[p].i === d) return s[p];
}
function $t(s, d) {
  for (let p = 0, c = s.length; p < c; p++)
    if (Xr(s[p], d)) return s[p];
}
function Yr(s, d) {
  return s.filter((p) => Xr(p, d));
}
function Vr(s) {
  return s.filter((d) => d.static);
}
function Mn(s, d, p, c, x = !1, m = !1) {
  if (d.static) return s;
  const R = d.x, E = d.y, h = c && d.y > c;
  typeof p == "number" && (d.x = p), typeof c == "number" && (d.y = c), d.moved = !0;
  let z = Gr(s);
  h && (z = z.reverse());
  const se = Yr(z, d);
  if (m && se.length)
    return d.x = R, d.y = E, d.moved = !1, s;
  for (let q = 0, ye = se.length; q < ye; q++) {
    const le = se[q];
    le.moved || d.y > le.y && d.y - le.y > le.h / 4 || (le.static ? s = mr(s, le, d, x) : s = mr(s, d, le, x));
  }
  return s;
}
function mr(s, d, p, c) {
  if (c) {
    const m = {
      x: p.x,
      y: p.y,
      w: p.w,
      h: p.h
    };
    if (m.y = Math.max(d.y - p.h, 0), !$t(s, m))
      return Mn(s, p, void 0, m.y, !1);
  }
  return Mn(s, p, void 0, p.y + 1, !1);
}
function Fo(s, d, p, c) {
  const x = "translate3d(" + d + "px," + s + "px, 0)";
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
function Lo(s, d, p, c) {
  const x = "translate3d(" + d * -1 + "px," + s + "px, 0)";
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
function jo(s, d, p, c) {
  return {
    top: s + "px",
    left: d + "px",
    width: p + "px",
    height: c + "px",
    position: "absolute"
  };
}
function Ho(s, d, p, c) {
  return {
    top: s + "px",
    right: d + "px",
    width: p + "px",
    height: c + "px",
    position: "absolute"
  };
}
function Gr(s) {
  return Array.from(s).sort(function(d, p) {
    return d.y === p.y && d.x === p.x ? 0 : d.y > p.y || d.y === p.y && d.x > p.x ? 1 : -1;
  });
}
function Wo(s, d) {
  d = d || "Layout";
  const p = ["x", "y", "w", "h"], c = [];
  if (!Array.isArray(s)) throw new Error(d + " must be an array!");
  for (let x = 0, m = s.length; x < m; x++) {
    const R = s[x];
    for (let E = 0; E < p.length; E++)
      if (typeof R[p[E]] != "number")
        throw new Error(
          "VueGridLayout: " + d + "[" + x + "]." + p[E] + " must be a number!"
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
function $o(s, d = "vgl") {
  const p = () => `${d}-${s}`;
  return {
    b: p,
    be: (R) => `${p()}__${R}`,
    bm: (R) => `${p()}--${R}`,
    bem: (R, E) => `${p()}__${R}--${E}`
  };
}
function yr(s) {
  return qo(s);
}
function qo(s) {
  var m;
  const d = ((m = s.target) == null ? void 0 : m.offsetParent) || document.body, p = s.offsetParent === document.body ? { left: 0, top: 0 } : d.getBoundingClientRect(), c = s.clientX + d.scrollLeft - p.left, x = s.clientY + d.scrollTop - p.top;
  return { x: c, y: x };
}
function br(s, d, p, c) {
  return No(s) ? {
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
function No(s) {
  return typeof s == "number" && !Number.isNaN(s);
}
function Xo(s, d) {
  const p = Kr(s);
  let c = p[0];
  for (let x = 1, m = p.length; x < m; x++) {
    const R = p[x];
    d > s[R] && (c = R);
  }
  return c;
}
function Ur(s, d) {
  if (!d[s])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + s + " is missing!"
    );
  return d[s];
}
function Yo(s, d, p, c, x, m, R) {
  if (d[c]) return Pn(d[c]);
  let E = s;
  const h = Kr(p), z = h.slice(h.indexOf(c));
  for (let se = 0, q = z.length; se < q; se++) {
    const ye = z[se];
    if (d[ye]) {
      E = d[ye];
      break;
    }
  }
  return E = Pn(E || []), kt(Bo(E, { cols: m }), R);
}
function Kr(s) {
  return Object.keys(s).sort((p, c) => s[p] - s[c]);
}
let Vo = "auto";
function Go() {
  return typeof document < "u";
}
function xr() {
  return Go() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : Vo;
}
function Uo(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Ht = { exports: {} }, Ko = Ht.exports, wr;
function Jo() {
  return wr || (wr = 1, function(s, d) {
    (function(p, c) {
      s.exports = c();
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
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, De(r.key), r);
        }
      }
      function E(t, e, n) {
        return e && R(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
      }
      function h(t, e, n) {
        return (e = De(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
      }
      function z(t, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && q(t, e);
      }
      function se(t) {
        return se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, se(t);
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
      function le(t) {
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
          var n, r = se(t);
          if (e) {
            var i = se(this).constructor;
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
            for (; !Object.prototype.hasOwnProperty.call(o, a) && (o = se(o)) !== null; ) ;
            return o;
          }(t, e);
          if (r) {
            var i = Object.getOwnPropertyDescriptor(r, e);
            return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
          }
        }, be.apply(this, arguments);
      }
      function De(t) {
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
      var Re = function(t) {
        return !(!t || !t.Window) && t instanceof t.Window;
      }, xe = void 0, ge = void 0;
      function fe(t) {
        xe = t;
        var e = t.document.createTextNode("");
        e.ownerDocument !== t.document && typeof t.wrap == "function" && t.wrap(e) === e && (t = t.wrap(t)), ge = t;
      }
      function ue(t) {
        return Re(t) ? t : (t.ownerDocument || t).defaultView || ge.window;
      }
      typeof window < "u" && window && fe(window);
      var L = function(t) {
        return !!t && x(t) === "object";
      }, N = function(t) {
        return typeof t == "function";
      }, y = { window: function(t) {
        return t === ge || Re(t);
      }, docFrag: function(t) {
        return L(t) && t.nodeType === 11;
      }, object: L, func: N, number: function(t) {
        return typeof t == "number";
      }, bool: function(t) {
        return typeof t == "boolean";
      }, string: function(t) {
        return typeof t == "string";
      }, element: function(t) {
        if (!t || x(t) !== "object") return !1;
        var e = ue(t) || ge;
        return /object|function/.test(typeof Element > "u" ? "undefined" : x(Element)) ? t instanceof Element || t instanceof e.Element : t.nodeType === 1 && typeof t.nodeName == "string";
      }, plainObject: function(t) {
        return L(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString());
      }, array: function(t) {
        return L(t) && t.length !== void 0 && N(t.splice);
      } };
      function oe(t) {
        var e = t.interaction;
        if (e.prepared.name === "drag") {
          var n = e.prepared.axis;
          n === "x" ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : n === "y" && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
        }
      }
      function A(t) {
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
      }, listeners: { "interactions:before-action-move": oe, "interactions:action-resume": oe, "interactions:action-move": A, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, r = t.buttons, i = n.options.drag;
        if (i && i.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || (r & n.options.drag.mouseButtons) != 0)) return t.action = { name: "drag", axis: i.lockAxis === "start" ? i.startAxis : i.lockAxis }, !1;
      } }, draggable: function(t) {
        return y.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : y.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
      }, beforeMove: oe, move: A, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(t) {
        return t.search("drag") === 0;
      } }, P = Z, B = { init: function(t) {
        var e = t;
        B.document = e.document, B.DocumentFragment = e.DocumentFragment || J, B.SVGElement = e.SVGElement || J, B.SVGSVGElement = e.SVGSVGElement || J, B.SVGElementInstance = e.SVGElementInstance || J, B.Element = e.Element || J, B.HTMLElement = e.HTMLElement || B.Element, B.Event = e.Event, B.Touch = e.Touch || J, B.PointerEvent = e.PointerEvent || e.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function J() {
      }
      var ee = B, ae = { init: function(t) {
        var e = ee.Element, n = t.navigator || {};
        ae.supportsTouch = "ontouchstart" in t || y.func(t.DocumentTouch) && ee.document instanceof t.DocumentTouch, ae.supportsPointerEvent = n.pointerEnabled !== !1 && !!ee.PointerEvent, ae.isIOS = /iP(hone|od|ad)/.test(n.platform), ae.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), ae.isIe9 = /MSIE 9/.test(n.userAgent), ae.isOperaMobile = n.appName === "Opera" && ae.supportsTouch && /Presto/.test(n.userAgent), ae.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", ae.pEventTypes = ae.supportsPointerEvent ? ee.PointerEvent === t.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, ae.wheelEvent = ee.document && "onmousewheel" in ee.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, he = ae;
      function X(t, e) {
        if (t.contains) return t.contains(e);
        for (; e; ) {
          if (e === t) return !0;
          e = e.parentNode;
        }
        return !1;
      }
      function We(t, e) {
        for (; y.element(t); ) {
          if (ce(t, e)) return t;
          t = _e(t);
        }
        return null;
      }
      function _e(t) {
        var e = t.parentNode;
        if (y.docFrag(e)) {
          for (; (e = e.host) && y.docFrag(e); ) ;
          return e;
        }
        return e;
      }
      function ce(t, e) {
        return ge !== xe && (e = e.replace(/\/deep\//g, " ")), t[he.prefixedMatchesSelector](e);
      }
      var U = function(t) {
        return t.parentNode || t.host;
      };
      function Ve(t, e) {
        for (var n, r = [], i = t; (n = U(i)) && i !== e && n !== i.ownerDocument; ) r.unshift(i), i = n;
        return r;
      }
      function Pe(t, e, n) {
        for (; y.element(t); ) {
          if (ce(t, e)) return !0;
          if ((t = _e(t)) === n) return ce(t, e);
        }
        return !1;
      }
      function Rt(t) {
        return t.correspondingUseElement || t;
      }
      function M(t) {
        var e = t instanceof ee.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
        return e && { left: e.left, right: e.right, top: e.top, bottom: e.bottom, width: e.width || e.right - e.left, height: e.height || e.bottom - e.top };
      }
      function j(t) {
        var e, n = M(t);
        if (!he.isIOS7 && n) {
          var r = { x: (e = (e = ue(t)) || ge).scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };
          n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y;
        }
        return n;
      }
      function de(t) {
        for (var e = []; t; ) e.push(t), t = _e(t);
        return e;
      }
      function te(t) {
        return !!y.string(t) && (ee.document.querySelector(t), !0);
      }
      function S(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function V(t, e, n) {
        return t === "parent" ? _e(n) : t === "self" ? e.getRect(n) : We(n, t);
      }
      function ne(t, e, n, r) {
        var i = t;
        return y.string(i) ? i = V(i, e, n) : y.func(i) && (i = i.apply(void 0, r)), y.element(i) && (i = j(i)), i;
      }
      function Oe(t) {
        return t && { x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top };
      }
      function Ge(t) {
        return !t || "x" in t && "y" in t || ((t = S({}, t)).x = t.left || 0, t.y = t.top || 0, t.width = t.width || (t.right || 0) - t.x, t.height = t.height || (t.bottom || 0) - t.y), t;
      }
      function Ze(t, e, n) {
        t.left && (e.left += n.x), t.right && (e.right += n.x), t.top && (e.top += n.y), t.bottom && (e.bottom += n.y), e.width = e.right - e.left, e.height = e.bottom - e.top;
      }
      function Ee(t, e, n) {
        var r = n && t.options[n];
        return Oe(ne(r && r.origin || t.options.origin, t, e, [t && e])) || { x: 0, y: 0 };
      }
      function D(t, e) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(u) {
          return !0;
        }, r = arguments.length > 3 ? arguments[3] : void 0;
        if (r = r || {}, y.string(t) && t.search(" ") !== -1 && (t = Ae(t)), y.array(t)) return t.forEach(function(u) {
          return D(u, e, n, r);
        }), r;
        if (y.object(t) && (e = t, t = ""), y.func(e) && n(t)) r[t] = r[t] || [], r[t].push(e);
        else if (y.array(e)) for (var i = 0, o = e; i < o.length; i++) {
          var a = o[i];
          D(t, a, n, r);
        }
        else if (y.object(e)) for (var l in e)
          D(Ae(l).map(function(u) {
            return "".concat(t).concat(u);
          }), e[l], n, r);
        return r;
      }
      function Ae(t) {
        return t.trim().split(/ +/);
      }
      var Te = function(t, e) {
        return Math.sqrt(t * t + e * e);
      }, Ce = ["webkit", "moz"];
      function ke(t, e) {
        t.__set || (t.__set = {});
        var n = function(i) {
          if (Ce.some(function(o) {
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
      function He(t, e) {
        t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp;
      }
      function Ie(t) {
        t.page.x = 0, t.page.y = 0, t.client.x = 0, t.client.y = 0;
      }
      function Qe(t) {
        return t instanceof ee.Event || t instanceof ee.Touch;
      }
      function Se(t, e, n) {
        return t = t || "page", (n = n || {}).x = e[t + "X"], n.y = e[t + "Y"], n;
      }
      function w(t, e) {
        return e = e || { x: 0, y: 0 }, he.isOperaMobile && Qe(t) ? (Se("screen", t, e), e.x += window.scrollX, e.y += window.scrollY) : Se("page", t, e), e;
      }
      function H(t) {
        return y.number(t.pointerId) ? t.pointerId : t.identifier;
      }
      function ie(t, e, n) {
        var r = e.length > 1 ? pe(e) : e[0];
        w(r, t.page), function(i, o) {
          o = o || {}, he.isOperaMobile && Qe(i) ? Se("screen", i, o) : Se("client", i, o);
        }(r, t.client), t.timeStamp = n;
      }
      function re(t) {
        var e = [];
        return y.array(t) ? (e[0] = t[0], e[1] = t[1]) : t.type === "touchend" ? t.touches.length === 1 ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : t.touches.length === 0 && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e;
      }
      function pe(t) {
        for (var e = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n = 0; n < t.length; n++) {
          var r = t[n];
          for (var i in e) e[i] += r[i];
        }
        for (var o in e) e[o] /= t.length;
        return e;
      }
      function K(t) {
        if (!t.length) return null;
        var e = re(t), n = Math.min(e[0].pageX, e[1].pageX), r = Math.min(e[0].pageY, e[1].pageY), i = Math.max(e[0].pageX, e[1].pageX), o = Math.max(e[0].pageY, e[1].pageY);
        return { x: n, y: r, left: n, top: r, right: i, bottom: o, width: i - n, height: o - r };
      }
      function F(t, e) {
        var n = e + "X", r = e + "Y", i = re(t), o = i[0][n] - i[1][n], a = i[0][r] - i[1][r];
        return Te(o, a);
      }
      function we(t, e) {
        var n = e + "X", r = e + "Y", i = re(t), o = i[1][n] - i[0][n], a = i[1][r] - i[0][r];
        return 180 * Math.atan2(a, o) / Math.PI;
      }
      function Me(t) {
        return y.string(t.pointerType) ? t.pointerType : y.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : /touch/.test(t.type || "") || t instanceof ee.Touch ? "touch" : "mouse";
      }
      function Be(t) {
        var e = y.func(t.composedPath) ? t.composedPath() : t.path;
        return [Rt(e ? e[0] : t.target), Rt(t.currentTarget)];
      }
      var $e = function() {
        function t(e) {
          m(this, t), this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = e;
        }
        return E(t, [{ key: "preventDefault", value: function() {
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
      var et = function(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          t.push(r);
        }
        return t;
      }, at = function(t) {
        return et([], t);
      }, Ue = function(t, e) {
        for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return n;
        return -1;
      }, Ke = function(t, e) {
        return t[Ue(t, e)];
      }, qe = function(t) {
        z(n, t);
        var e = le(n);
        function n(r, i, o) {
          var a;
          m(this, n), (a = e.call(this, i._interaction)).dropzone = void 0, a.dragEvent = void 0, a.relatedTarget = void 0, a.draggable = void 0, a.propagationStopped = !1, a.immediatePropagationStopped = !1;
          var l = o === "dragleave" ? r.prev : r.cur, u = l.element, g = l.dropzone;
          return a.type = o, a.target = u, a.currentTarget = u, a.dropzone = g, a.dragEvent = i, a.relatedTarget = i.target, a.draggable = i.interactable, a.timeStamp = i.timeStamp, a;
        }
        return E(n, [{ key: "reject", value: function() {
          var r = this, i = this._interaction.dropState;
          if (this.type === "dropactivate" || this.dropzone && i.cur.dropzone === this.dropzone && i.cur.element === this.target) if (i.prev.dropzone = this.dropzone, i.prev.element = this.target, i.rejected = !0, i.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var o = i.activeDrops, a = Ue(o, function(u) {
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
      }($e);
      function Pt(t, e) {
        for (var n = 0, r = t.slice(); n < r.length; n++) {
          var i = r[n], o = i.dropzone, a = i.element;
          e.dropzone = o, e.target = a, o.fire(e), e.propagationStopped = e.immediatePropagationStopped = !1;
        }
      }
      function bt(t, e) {
        for (var n = function(o, a) {
          for (var l = [], u = 0, g = o.interactables.list; u < g.length; u++) {
            var f = g[u];
            if (f.options.drop.enabled) {
              var v = f.options.drop.accept;
              if (!(y.element(v) && v !== a || y.string(v) && !ce(a, v) || y.func(v) && !v({ dropzone: f, draggableElement: a }))) for (var b = 0, k = f.getAllElements(); b < k.length; b++) {
                var T = k[b];
                T !== a && l.push({ dropzone: f, element: T, rect: f.getRect(T) });
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
      function Mt(t, e, n) {
        for (var r = t.dropState, i = t.interactable, o = t.element, a = [], l = 0, u = r.activeDrops; l < u.length; l++) {
          var g = u[l], f = g.dropzone, v = g.element, b = g.rect, k = f.dropCheck(e, n, i, o, v, b);
          a.push(k ? v : null);
        }
        var T = function(_) {
          for (var C, O, I, Y = [], Q = 0; Q < _.length; Q++) {
            var W = _[Q], G = _[C];
            if (W && Q !== C) if (G) {
              var Le = U(W), me = U(G);
              if (Le !== W.ownerDocument) if (me !== W.ownerDocument) if (Le !== me) {
                Y = Y.length ? Y : Ve(G);
                var Xe = void 0;
                if (G instanceof ee.HTMLElement && W instanceof ee.SVGElement && !(W instanceof ee.SVGSVGElement)) {
                  if (W === me) continue;
                  Xe = W.ownerSVGElement;
                } else Xe = W;
                for (var nt = Ve(Xe, G.ownerDocument), lt = 0; nt[lt] && nt[lt] === Y[lt]; ) lt++;
                var rn = [nt[lt - 1], nt[lt], Y[lt]];
                if (rn[0]) for (var Lt = rn[0].lastChild; Lt; ) {
                  if (Lt === rn[1]) {
                    C = Q, Y = nt;
                    break;
                  }
                  if (Lt === rn[2]) break;
                  Lt = Lt.previousSibling;
                }
              } else I = G, (parseInt(ue(O = W).getComputedStyle(O).zIndex, 10) || 0) >= (parseInt(ue(I).getComputedStyle(I).zIndex, 10) || 0) && (C = Q);
              else C = Q;
            } else C = Q;
          }
          return C;
        }(a);
        return r.activeDrops[T] || null;
      }
      function xt(t, e, n) {
        var r = t.dropState, i = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return n.type === "dragstart" && (i.activate = new qe(r, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), n.type === "dragend" && (i.deactivate = new qe(r, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (i.leave = new qe(r, n, "dragleave"), n.dragLeave = i.leave.target = r.prev.element, n.prevDropzone = i.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (i.enter = new qe(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), n.type === "dragend" && r.cur.dropzone && (i.drop = new qe(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), n.type === "dragmove" && r.cur.dropzone && (i.move = new qe(r, n, "dropmove"), n.dropzone = r.cur.dropzone)), i;
      }
      function wt(t, e) {
        var n = t.dropState, r = n.activeDrops, i = n.cur, o = n.prev;
        e.leave && o.dropzone.fire(e.leave), e.enter && i.dropzone.fire(e.enter), e.move && i.dropzone.fire(e.move), e.drop && i.dropzone.fire(e.drop), e.deactivate && Pt(r, e.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
      }
      function Dt(t, e) {
        var n = t.interaction, r = t.iEvent, i = t.event;
        if (r.type === "dragmove" || r.type === "dragend") {
          var o = n.dropState;
          e.dynamicDrop && (o.activeDrops = bt(e, n.element));
          var a = r, l = Mt(n, a, i);
          o.rejected = o.rejected && !!l && l.dropzone === o.cur.dropzone && l.element === o.cur.element, o.cur.dropzone = l && l.dropzone, o.cur.element = l && l.element, o.events = xt(n, 0, a);
        }
      }
      var Ot = { id: "actions/drop", install: function(t) {
        var e = t.actions, n = t.interactStatic, r = t.Interactable, i = t.defaults;
        t.usePlugin(P), r.prototype.dropzone = function(o) {
          return function(a, l) {
            if (y.object(l)) {
              if (a.options.drop.enabled = l.enabled !== !1, l.listeners) {
                var u = D(l.listeners), g = Object.keys(u).reduce(function(v, b) {
                  return v[/^(enter|leave)/.test(b) ? "drag".concat(b) : /^(activate|deactivate|move)/.test(b) ? "drop".concat(b) : b] = u[b], v;
                }, {}), f = a.options.drop.listeners;
                f && a.off(f), a.on(g), a.options.drop.listeners = g;
              }
              return y.func(l.ondrop) && a.on("drop", l.ondrop), y.func(l.ondropactivate) && a.on("dropactivate", l.ondropactivate), y.func(l.ondropdeactivate) && a.on("dropdeactivate", l.ondropdeactivate), y.func(l.ondragenter) && a.on("dragenter", l.ondragenter), y.func(l.ondragleave) && a.on("dragleave", l.ondragleave), y.func(l.ondropmove) && a.on("dropmove", l.ondropmove), /^(pointer|center)$/.test(l.overlap) ? a.options.drop.overlap = l.overlap : y.number(l.overlap) && (a.options.drop.overlap = Math.max(Math.min(1, l.overlap), 0)), "accept" in l && (a.options.drop.accept = l.accept), "checker" in l && (a.options.drop.checker = l.checker), a;
            }
            return y.bool(l) ? (a.options.drop.enabled = l, a) : a.options.drop;
          }(this, o);
        }, r.prototype.dropCheck = function(o, a, l, u, g, f) {
          return function(v, b, k, T, _, C, O) {
            var I = !1;
            if (!(O = O || v.getRect(C))) return !!v.options.drop.checker && v.options.drop.checker(b, k, I, v, C, T, _);
            var Y = v.options.drop.overlap;
            if (Y === "pointer") {
              var Q = Ee(T, _, "drag"), W = w(b);
              W.x += Q.x, W.y += Q.y;
              var G = W.x > O.left && W.x < O.right, Le = W.y > O.top && W.y < O.bottom;
              I = G && Le;
            }
            var me = T.getRect(_);
            if (me && Y === "center") {
              var Xe = me.left + me.width / 2, nt = me.top + me.height / 2;
              I = Xe >= O.left && Xe <= O.right && nt >= O.top && nt <= O.bottom;
            }
            return me && y.number(Y) && (I = Math.max(0, Math.min(O.right, me.right) - Math.max(O.left, me.left)) * Math.max(0, Math.min(O.bottom, me.bottom) - Math.max(O.top, me.top)) / (me.width * me.height) >= Y), v.options.drop.checker && (I = v.options.drop.checker(b, k, I, v, C, T, _)), I;
          }(this, o, a, l, u, g, f);
        }, n.dynamicDrop = function(o) {
          return y.bool(o) ? (t.dynamicDrop = o, n) : t.dynamicDrop;
        }, S(e.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), e.methodDict.drop = "dropzone", t.dynamicDrop = !1, i.actions.drop = Ot.defaults;
      }, listeners: { "interactions:before-action-start": function(t) {
        var e = t.interaction;
        e.prepared.name === "drag" && (e.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(t, e) {
        var n = t.interaction, r = (t.event, t.iEvent);
        if (n.prepared.name === "drag") {
          var i = n.dropState;
          i.activeDrops = [], i.events = {}, i.activeDrops = bt(e, n.element), i.events = xt(n, 0, r), i.events.activate && (Pt(i.activeDrops, i.events.activate), e.fire("actions/drop:start", { interaction: n, dragEvent: r }));
        }
      }, "interactions:action-move": Dt, "interactions:after-action-move": function(t, e) {
        var n = t.interaction, r = t.iEvent;
        if (n.prepared.name === "drag") {
          var i = n.dropState;
          wt(n, i.events), e.fire("actions/drop:move", { interaction: n, dragEvent: r }), i.events = {};
        }
      }, "interactions:action-end": function(t, e) {
        if (t.interaction.prepared.name === "drag") {
          var n = t.interaction, r = t.iEvent;
          Dt(t, e), wt(n, n.dropState.events), e.fire("actions/drop:end", { interaction: n, dragEvent: r });
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction;
        if (e.prepared.name === "drag") {
          var n = e.dropState;
          n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1);
        }
      } }, getActiveDrops: bt, getDrop: Mt, getDropEvents: xt, fireDropEvents: wt, filterEventType: function(t) {
        return t.search("drag") === 0 || t.search("drop") === 0;
      }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, Yt = Ot;
      function Et(t) {
        var e = t.interaction, n = t.iEvent, r = t.phase;
        if (e.prepared.name === "gesture") {
          var i = e.pointers.map(function(g) {
            return g.pointer;
          }), o = r === "start", a = r === "end", l = e.interactable.options.deltaSource;
          if (n.touches = [i[0], i[1]], o) n.distance = F(i, l), n.box = K(i), n.scale = 1, n.ds = 0, n.angle = we(i, l), n.da = 0, e.gesture.startDistance = n.distance, e.gesture.startAngle = n.angle;
          else if (a || e.pointers.length < 2) {
            var u = e.prevEvent;
            n.distance = u.distance, n.box = u.box, n.scale = u.scale, n.ds = 0, n.angle = u.angle, n.da = 0;
          } else n.distance = F(i, l), n.box = K(i), n.scale = n.distance / e.gesture.startDistance, n.angle = we(i, l), n.ds = n.scale - e.gesture.scale, n.da = n.angle - e.gesture.angle;
          e.gesture.distance = n.distance, e.gesture.angle = n.angle, y.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale);
        }
      }
      var St = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t) {
        var e = t.actions, n = t.Interactable, r = t.defaults;
        n.prototype.gesturable = function(i) {
          return y.object(i) ? (this.options.gesture.enabled = i.enabled !== !1, this.setPerAction("gesture", i), this.setOnEvents("gesture", i), this) : y.bool(i) ? (this.options.gesture.enabled = i, this) : this.options.gesture;
        }, e.map.gesture = St, e.methodDict.gesture = "gesturable", r.actions.gesture = St.defaults;
      }, listeners: { "interactions:action-start": Et, "interactions:action-move": Et, "interactions:action-end": Et, "interactions:new": function(t) {
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
      } }, Vt = St;
      function Gt(t, e, n, r, i, o, a) {
        if (!e) return !1;
        if (e === !0) {
          var l = y.number(o.width) ? o.width : o.right - o.left, u = y.number(o.height) ? o.height : o.bottom - o.top;
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
        return !!y.element(r) && (y.element(e) ? e === r : Pe(r, e, i));
      }
      function ze(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "resize" && n.resizeAxes) {
          var r = e;
          n.interactable.options.resize.square ? (n.resizeAxes === "y" ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, n.resizeAxes === "x" ? r.delta.y = 0 : n.resizeAxes === "y" && (r.delta.x = 0));
        }
      }
      var Ne, tt, st = { id: "actions/resize", before: ["actions/drag"], install: function(t) {
        var e = t.actions, n = t.browser, r = t.Interactable, i = t.defaults;
        st.cursors = function(o) {
          return o.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        }(n), st.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function(o) {
          return function(a, l, u) {
            return y.object(l) ? (a.options.resize.enabled = l.enabled !== !1, a.setPerAction("resize", l), a.setOnEvents("resize", l), y.string(l.axis) && /^x$|^y$|^xy$/.test(l.axis) ? a.options.resize.axis = l.axis : l.axis === null && (a.options.resize.axis = u.defaults.actions.resize.axis), y.bool(l.preserveAspectRatio) ? a.options.resize.preserveAspectRatio = l.preserveAspectRatio : y.bool(l.square) && (a.options.resize.square = l.square), a) : y.bool(l) ? (a.options.resize.enabled = l, a) : a.options.resize;
          }(this, o, t);
        }, e.map.resize = st, e.methodDict.resize = "resizable", i.actions.resize = st.defaults;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(t) {
        (function(e) {
          var n = e.iEvent, r = e.interaction;
          if (r.prepared.name === "resize" && r.prepared.edges) {
            var i = n, o = r.rect;
            r._rects = { start: S({}, o), corrected: S({}, o), previous: S({}, o), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, i.edges = r.prepared.edges, i.rect = r._rects.corrected, i.deltaRect = r._rects.delta;
          }
        })(t), ze(t);
      }, "interactions:action-move": function(t) {
        (function(e) {
          var n = e.iEvent, r = e.interaction;
          if (r.prepared.name === "resize" && r.prepared.edges) {
            var i = n, o = r.interactable.options.resize.invert, a = o === "reposition" || o === "negate", l = r.rect, u = r._rects, g = u.start, f = u.corrected, v = u.delta, b = u.previous;
            if (S(b, f), a) {
              if (S(f, l), o === "reposition") {
                if (f.top > f.bottom) {
                  var k = f.top;
                  f.top = f.bottom, f.bottom = k;
                }
                if (f.left > f.right) {
                  var T = f.left;
                  f.left = f.right, f.right = T;
                }
              }
            } else f.top = Math.min(l.top, g.bottom), f.bottom = Math.max(l.bottom, g.top), f.left = Math.min(l.left, g.right), f.right = Math.max(l.right, g.left);
            for (var _ in f.width = f.right - f.left, f.height = f.bottom - f.top, f) v[_] = f[_] - b[_];
            i.edges = r.prepared.edges, i.rect = f, i.deltaRect = v;
          }
        })(t), ze(t);
      }, "interactions:action-end": function(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "resize" && n.prepared.edges) {
          var r = e;
          r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
        }
      }, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, r = t.element, i = t.rect, o = t.buttons;
        if (i) {
          var a = S({}, e.coords.cur.page), l = n.options.resize;
          if (l && l.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || (o & l.mouseButtons) != 0)) {
            if (y.object(l.edges)) {
              var u = { left: !1, right: !1, top: !1, bottom: !1 };
              for (var g in u) u[g] = Gt(g, l.edges[g], a, e._latestPointer.eventTarget, r, i, l.margin || st.defaultMargin);
              u.left = u.left && !u.right, u.top = u.top && !u.bottom, (u.left || u.right || u.top || u.bottom) && (t.action = { name: "resize", edges: u });
            } else {
              var f = l.axis !== "y" && a.x > i.right - st.defaultMargin, v = l.axis !== "x" && a.y > i.bottom - st.defaultMargin;
              (f || v) && (t.action = { name: "resize", axes: (f ? "x" : "") + (v ? "y" : "") });
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
      }, defaultMargin: null }, oi = st, ai = { id: "actions", install: function(t) {
        t.usePlugin(Vt), t.usePlugin(oi), t.usePlugin(P), t.usePlugin(Yt);
      } }, Bn = 0, ut = { request: function(t) {
        return Ne(t);
      }, cancel: function(t) {
        return tt(t);
      }, init: function(t) {
        if (Ne = t.requestAnimationFrame, tt = t.cancelAnimationFrame, !Ne) for (var e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length; n++) {
          var r = e[n];
          Ne = t["".concat(r, "RequestAnimationFrame")], tt = t["".concat(r, "CancelAnimationFrame")] || t["".concat(r, "CancelRequestAnimationFrame")];
        }
        Ne = Ne && Ne.bind(t), tt = tt && tt.bind(t), Ne || (Ne = function(i) {
          var o = Date.now(), a = Math.max(0, 16 - (o - Bn)), l = t.setTimeout(function() {
            i(o + a);
          }, a);
          return Bn = o + a, l;
        }, tt = function(i) {
          return clearTimeout(i);
        });
      } }, $ = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(t) {
        $.isScrolling = !0, ut.cancel($.i), t.autoScroll = $, $.interaction = t, $.prevTime = $.now(), $.i = ut.request($.scroll);
      }, stop: function() {
        $.isScrolling = !1, $.interaction && ($.interaction.autoScroll = null), ut.cancel($.i);
      }, scroll: function() {
        var t = $.interaction, e = t.interactable, n = t.element, r = t.prepared.name, i = e.options[r].autoScroll, o = Fn(i.container, e, n), a = $.now(), l = (a - $.prevTime) / 1e3, u = i.speed * l;
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
          var r, i, o, a, l = e.interactable, u = e.element, g = e.prepared.name, f = l.options[g].autoScroll, v = Fn(f.container, l, u);
          if (y.window(v)) a = n.clientX < $.margin, r = n.clientY < $.margin, i = n.clientX > v.innerWidth - $.margin, o = n.clientY > v.innerHeight - $.margin;
          else {
            var b = M(v);
            a = n.clientX < b.left + $.margin, r = n.clientY < b.top + $.margin, i = n.clientX > b.right - $.margin, o = n.clientY > b.bottom - $.margin;
          }
          $.x = i ? 1 : a ? -1 : 0, $.y = o ? 1 : r ? -1 : 0, $.isScrolling || ($.margin = f.margin, $.speed = f.speed, $.start(e));
        }
      } };
      function Fn(t, e, n) {
        return (y.string(t) ? V(t, e, n) : t) || ue(n);
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
      function Ct(t, e) {
        var n = !1;
        return function() {
          return n || (ge.console.warn(e), n = !0), t.apply(this, arguments);
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
          var a = function(l, u, g, f, v) {
            var b = l.getRect(f), k = u.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[u.button], T = { action: null, interactable: l, interaction: g, element: f, rect: b, buttons: k };
            return v.fire("auto-start:check", T), T.action;
          }(this, r, i, o, t);
          return this.options.actionChecker ? this.options.actionChecker(n, r, a, this, o, i) : a;
        }, e.prototype.ignoreFrom = Ct(function(n) {
          return this._backCompatOption("ignoreFrom", n);
        }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = Ct(function(n) {
          return this._backCompatOption("allowFrom", n);
        }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = ui, e.prototype.styleCursor = ci;
      } };
      function jn(t, e, n, r, i) {
        return e.testIgnoreAllow(e.options[t.name], n, r) && e.options[t.name].enabled && Ut(e, n, t, i) ? t : null;
      }
      function di(t, e, n, r, i, o, a) {
        for (var l = 0, u = r.length; l < u; l++) {
          var g = r[l], f = i[l], v = g.getAction(e, n, t, f);
          if (v) {
            var b = jn(v, g, f, o, a);
            if (b) return { action: b, interactable: g, element: f };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function Hn(t, e, n, r, i) {
        var o = [], a = [], l = r;
        function u(f) {
          o.push(f), a.push(l);
        }
        for (; y.element(l); ) {
          o = [], a = [], i.interactables.forEachMatch(l, u);
          var g = di(t, e, n, o, a, r, i);
          if (g.action && !g.interactable.options[g.action.name].manualStart) return g;
          l = _e(l);
        }
        return { action: null, interactable: null, element: null };
      }
      function Wn(t, e, n) {
        var r = e.action, i = e.interactable, o = e.element;
        r = r || { name: null }, t.interactable = i, t.element = o, dn(t.prepared, r), t.rect = i && r.name ? i.getRect(o) : null, qn(t, n), n.fire("autoStart:prepared", { interaction: t });
      }
      function Ut(t, e, n, r) {
        var i = t.options, o = i[n.name].max, a = i[n.name].maxPerElement, l = r.autoStart.maxInteractions, u = 0, g = 0, f = 0;
        if (!(o && a && l)) return !1;
        for (var v = 0, b = r.interactions.list; v < b.length; v++) {
          var k = b[v], T = k.prepared.name;
          if (k.interacting() && (++u >= l || k.interactable === t && ((g += T === n.name ? 1 : 0) >= o || k.element === e && (f++, T === n.name && f >= a))))
            return !1;
        }
        return l > 0;
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
        t.usePlugin(fi), n.base.actionChecker = null, n.base.styleCursor = !0, S(n.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e.maxInteractions = function(r) {
          return $n(r, t);
        }, t.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Ut, cursorElement: null };
      }, listeners: { "interactions:down": function(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget;
        n.interacting() || Wn(n, Hn(n, r, i, o, e), e);
      }, "interactions:move": function(t, e) {
        (function(n, r) {
          var i = n.interaction, o = n.pointer, a = n.event, l = n.eventTarget;
          i.pointerType !== "mouse" || i.pointerIsDown || i.interacting() || Wn(i, Hn(i, o, a, l, r), r);
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
      } }, maxInteractions: $n, withinInteractionLimit: Ut, validateAction: jn }, hn = pi, hi = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t, e) {
        var n = t.interaction, r = t.eventTarget, i = t.dx, o = t.dy;
        if (n.prepared.name === "drag") {
          var a = Math.abs(i), l = Math.abs(o), u = n.interactable.options.drag, g = u.startAxis, f = a > l ? "x" : a < l ? "y" : "xy";
          if (n.prepared.axis = u.lockAxis === "start" ? f[0] : u.lockAxis, f !== "xy" && g !== "xy" && g !== f) {
            n.prepared.name = null;
            for (var v = r, b = function(T) {
              if (T !== n.interactable) {
                var _ = n.interactable.options.drag;
                if (!_.manualStart && T.testIgnoreAllow(_, v, r)) {
                  var C = T.getAction(n.downPointer, n.downEvent, n, v);
                  if (C && C.name === "drag" && function(O, I) {
                    if (!I) return !1;
                    var Y = I.options.drag.startAxis;
                    return O === "xy" || Y === "xy" || Y === O;
                  }(f, T) && hn.validateAction(C, T, v, r, e)) return T;
                }
              }
            }; y.element(v); ) {
              var k = e.interactables.forEachMatch(v, b);
              if (k) {
                n.prepared.name = "drag", n.interactable = k, n.element = v;
                break;
              }
              v = _e(v);
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
                var l = ue(o.target).document, u = i.getDocOptions(l);
                if (!u || !u.events || u.events.passive !== !1) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(o.type) || y.element(o.target) && ce(o.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || o.preventDefault();
            } else o.preventDefault();
          }(this, t, n);
        }, t.interactions.docEvents.push({ type: "dragstart", listener: function(n) {
          for (var r = 0, i = t.interactions.list; r < i.length; r++) {
            var o = i[r];
            if (o.element && (o.element === n.target || X(o.element, n.target))) return void o.interactable.checkAndPreventDefault(n);
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
      function zt(t) {
        var e = {};
        for (var n in t) {
          var r = t[n];
          y.plainObject(r) ? e[n] = zt(r) : y.array(r) ? e[n] = at(r) : e[n] = r;
        }
        return e;
      }
      var vn = function() {
        function t(e) {
          m(this, t), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e, this.result = Jt(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
        }
        return E(t, [{ key: "start", value: function(e, n) {
          var r, i, o = e.phase, a = this.interaction, l = function(g) {
            var f = g.interactable.options[g.prepared.name], v = f.modifiers;
            return v && v.length ? v : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(b) {
              var k = f[b];
              return k && k.enabled && { options: k, methods: k._methods };
            }).filter(function(b) {
              return !!b;
            });
          }(a);
          this.prepareStates(l), this.startEdges = S({}, a.edges), this.edges = S({}, this.startEdges), this.startOffset = (r = a.rect, i = n, r ? { left: i.x - r.left, top: i.y - r.top, right: r.right - i.x, bottom: r.bottom - i.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
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
          e.coords = S({}, e.pageCoords), e.rect = S({}, o), e.edges = S({}, a);
          for (var l = i ? this.states.slice(i) : this.states, u = Jt(e.coords, e.rect), g = 0; g < l.length; g++) {
            var f, v = l[g], b = v.options, k = S({}, e.coords), T = null;
            (f = v.methods) != null && f.set && this.shouldDo(b, r, n) && (e.state = v, T = v.methods.set(e), Ze(e.edges, e.rect, { x: e.coords.x - k.x, y: e.coords.y - k.y })), u.eventProps.push(T);
          }
          S(this.edges, e.edges), u.delta.x = e.coords.x - e.pageCoords.x, u.delta.y = e.coords.y - e.pageCoords.y, u.rectDelta.left = e.rect.left - o.left, u.rectDelta.right = e.rect.right - o.right, u.rectDelta.top = e.rect.top - o.top, u.rectDelta.bottom = e.rect.bottom - o.bottom;
          var _ = this.result.coords, C = this.result.rect;
          if (_ && C) {
            var O = u.rect.left !== C.left || u.rect.right !== C.right || u.rect.top !== C.top || u.rect.bottom !== C.bottom;
            u.changed = O || _.x !== u.coords.x || _.y !== u.coords.y;
          }
          return u;
        } }, { key: "applyToInteraction", value: function(e) {
          var n = this.interaction, r = e.phase, i = n.coords.cur, o = n.coords.start, a = this.result, l = this.startDelta, u = a.delta;
          r === "start" && S(this.startDelta, a.delta);
          for (var g = 0, f = [[o, l], [i, u]]; g < f.length; g++) {
            var v = f[g], b = v[0], k = v[1];
            b.page.x += k.x, b.page.y += k.y, b.client.x += k.x, b.client.y += k.y;
          }
          var T = this.result.rectDelta, _ = e.rect || n.rect;
          _.left += T.left, _.right += T.right, _.top += T.top, _.bottom += T.bottom, _.width = _.right - _.left, _.height = _.bottom - _.top;
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
            var r = S({ states: this.states, interactable: n.interactable, element: n.element, rect: null }, e);
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
            for (var a = o.startDelta, l = o.result, u = l.delta, g = l.rectDelta, f = 0, v = [[r.start, a], [r.cur, u]]; f < v.length; f++) {
              var b = v[f], k = b[0], T = b[1];
              k.page.x -= T.x, k.page.y -= T.y, k.client.x -= T.x, k.client.y -= T.y;
            }
            i.left -= g.left, i.right -= g.right, i.top -= g.top, i.bottom -= g.bottom;
          }
        } }, { key: "shouldDo", value: function(e, n, r, i) {
          return !(!e || e.enabled === !1 || i && !e.endOnly || e.endOnly && !n || r === "start" && !e.setStart);
        } }, { key: "copyFrom", value: function(e) {
          this.startOffset = e.startOffset, this.startDelta = e.startDelta, this.startEdges = e.startEdges, this.edges = e.edges, this.states = e.states.map(function(n) {
            return zt(n);
          }), this.result = Jt(S({}, e.result.coords), S({}, e.result.rect));
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
      function At(t) {
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
      }, "interactions:action-start": At, "interactions:action-move": At, "interactions:action-end": At, "interactions:after-action-start": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:after-action-move": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:stop": function(t) {
        return t.interaction.modification.stop(t);
      } } }, Xn = xi, Yn = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, mn = function(t) {
        z(n, t);
        var e = le(n);
        function n(r, i, o, a, l, u, g) {
          var f;
          m(this, n), (f = e.call(this, r)).relatedTarget = null, f.screenX = void 0, f.screenY = void 0, f.button = void 0, f.buttons = void 0, f.ctrlKey = void 0, f.shiftKey = void 0, f.altKey = void 0, f.metaKey = void 0, f.page = void 0, f.client = void 0, f.delta = void 0, f.rect = void 0, f.x0 = void 0, f.y0 = void 0, f.t0 = void 0, f.dt = void 0, f.duration = void 0, f.clientX0 = void 0, f.clientY0 = void 0, f.velocity = void 0, f.speed = void 0, f.swipe = void 0, f.axes = void 0, f.preEnd = void 0, l = l || r.element;
          var v = r.interactable, b = (v && v.options || Yn).deltaSource, k = Ee(v, l, o), T = a === "start", _ = a === "end", C = T ? ye(f) : r.prevEvent, O = T ? r.coords.start : _ ? { page: C.page, client: C.client, timeStamp: r.coords.cur.timeStamp } : r.coords.cur;
          return f.page = S({}, O.page), f.client = S({}, O.client), f.rect = S({}, r.rect), f.timeStamp = O.timeStamp, _ || (f.page.x -= k.x, f.page.y -= k.y, f.client.x -= k.x, f.client.y -= k.y), f.ctrlKey = i.ctrlKey, f.altKey = i.altKey, f.shiftKey = i.shiftKey, f.metaKey = i.metaKey, f.button = i.button, f.buttons = i.buttons, f.target = l, f.currentTarget = l, f.preEnd = u, f.type = g || o + (a || ""), f.interactable = v, f.t0 = T ? r.pointers[r.pointers.length - 1].downTime : C.t0, f.x0 = r.coords.start.page.x - k.x, f.y0 = r.coords.start.page.y - k.y, f.clientX0 = r.coords.start.client.x - k.x, f.clientY0 = r.coords.start.client.y - k.y, f.delta = T || _ ? { x: 0, y: 0 } : { x: f[b].x - C[b].x, y: f[b].y - C[b].y }, f.dt = r.coords.delta.timeStamp, f.duration = f.timeStamp - f.t0, f.velocity = S({}, r.coords.velocity[b]), f.speed = Te(f.velocity.x, f.velocity.y), f.swipe = _ || a === "inertiastart" ? f.getSwipe() : null, f;
        }
        return E(n, [{ key: "getSwipe", value: function() {
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
      var wi = E(function t(e, n, r, i, o) {
        m(this, t), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e, this.pointer = n, this.event = r, this.downTime = i, this.downTarget = o;
      }), Ei = function(t) {
        return t.interactable = "", t.element = "", t.prepared = "", t.pointerIsDown = "", t.pointerWasMoved = "", t._proxy = "", t;
      }({}), Vn = function(t) {
        return t.start = "", t.move = "", t.end = "", t.stop = "", t.interacting = "", t;
      }({}), Si = 0, zi = function() {
        function t(e) {
          var n = this, r = e.pointerType, i = e.scopeFire;
          m(this, t), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = Ct(function(f) {
            this.move(f);
          }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = Si++, this._scopeFire = i, this.pointerType = r;
          var o = this;
          this._proxy = {};
          var a = function(f) {
            Object.defineProperty(n._proxy, f, { get: function() {
              return o[f];
            } });
          };
          for (var l in Ei) a(l);
          var u = function(f) {
            Object.defineProperty(n._proxy, f, { value: function() {
              return o[f].apply(o, arguments);
            } });
          };
          for (var g in Vn) u(g);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return E(t, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(e, n, r) {
          var i = this.updatePointer(e, n, r, !0), o = this.pointers[i];
          this._scopeFire("interactions:down", { pointer: e, event: n, eventTarget: r, pointerIndex: i, pointerInfo: o, type: "down", interaction: this });
        } }, { key: "start", value: function(e, n, r) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (e.name === "gesture" ? 2 : 1) || !n.options[e.name].enabled) && (dn(this.prepared, e), this.interactable = n, this.element = r, this.rect = n.getRect(r), this.edges = this.prepared.edges ? S({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(e, n, r) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(e, n, r, !1);
          var i, o, a = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (i = this.coords.cur.client.x - this.coords.start.client.x, o = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Te(i, o) > this.pointerMoveTolerance);
          var l, u, g, f = this.getPointerIndex(e), v = { pointer: e, pointerIndex: f, pointerInfo: this.pointers[f], event: n, type: "move", eventTarget: r, dx: i, dy: o, duplicate: a, interaction: this };
          a || (l = this.coords.velocity, u = this.coords.delta, g = Math.max(u.timeStamp / 1e3, 1e-3), l.page.x = u.page.x / g, l.page.y = u.page.y / g, l.client.x = u.client.x / g, l.client.y = u.client.y / g, l.timeStamp = g), this._scopeFire("interactions:move", v), a || this.simulation || (this.interacting() && (v.type = null, this.move(v)), this.pointerWasMoved && He(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(e) {
          e && e.event || Ie(this.coords.delta), (e = S({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, e || {})).phase = "move", this._doPhase(e);
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
          var n = H(e);
          return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Ue(this.pointers, function(r) {
            return r.id === n;
          });
        } }, { key: "getPointerInfo", value: function(e) {
          return this.pointers[this.getPointerIndex(e)];
        } }, { key: "updatePointer", value: function(e, n, r, i) {
          var o, a, l, u = H(e), g = this.getPointerIndex(e), f = this.pointers[g];
          return i = i !== !1 && (i || /(down|start)$/i.test(n.type)), f ? f.pointer = e : (f = new wi(u, e, n, null, null), g = this.pointers.length, this.pointers.push(f)), ie(this.coords.cur, this.pointers.map(function(v) {
            return v.pointer;
          }), this._now()), o = this.coords.delta, a = this.coords.prev, l = this.coords.cur, o.page.x = l.page.x - a.page.x, o.page.y = l.page.y - a.page.y, o.client.x = l.client.x - a.client.x, o.client.y = l.client.y - a.client.y, o.timeStamp = l.timeStamp - a.timeStamp, i && (this.pointerIsDown = !0, f.downTime = this.coords.cur.timeStamp, f.downTarget = r, ke(this.downPointer, e), this.interacting() || (He(this.coords.start, this.coords.cur), He(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = !1)), this._updateLatestPointer(e, n, r), this._scopeFire("interactions:update-pointer", { pointer: e, event: n, eventTarget: r, down: i, pointerInfo: f, pointerIndex: g, interaction: this }), g;
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
          if (a && r === "move" && (Ze(this.edges, a, this.coords.delta[this.interactable.options.deltaSource]), a.width = a.right - a.left, a.height = a.bottom - a.top), this._scopeFire("interactions:before-action-".concat(r), e) === !1) return !1;
          var l = e.iEvent = this._createPreparedEvent(n, r, i, o);
          return this._scopeFire("interactions:action-".concat(r), e), r === "start" && (this.prevEvent = l), this._fireEvent(l), this._scopeFire("interactions:after-action-".concat(r), e), !0;
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
        return yn(t.coords.cur, e), yn(t.coords.delta, e), Ze(t.edges, t.rect, e), e.x = 0, e.y = 0, !0;
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
        return E(t, [{ key: "start", value: function(e) {
          var n = this.interaction, r = Zt(n);
          if (!r || !r.enabled) return !1;
          var i = n.coords.velocity.client, o = Te(i.x, i.y), a = this.modification || (this.modification = new vn(n));
          if (a.copyFrom(n.modification), this.t0 = n._now(), this.allowResume = r.allowResume, this.v0 = o, this.currentOffset = { x: 0, y: 0 }, this.startCoords = n.coords.cur.page, this.modifierArg = a.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - n.coords.cur.timeStamp < 50 && o > r.minSpeed && o > r.endSpeed) this.startInertia();
          else {
            if (a.result = a.setAll(this.modifierArg), !a.result.changed) return !1;
            this.startSmoothEnd();
          }
          return n.modification.result.rect = null, n.offsetBy(this.targetOffset), n._doPhase({ interaction: n, event: e, phase: "inertiastart" }), n.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), n.modification.result.rect = null, this.active = !0, n.simulation = this, !0;
        } }, { key: "startInertia", value: function() {
          var e = this, n = this.interaction.coords.velocity.client, r = Zt(this.interaction), i = r.resistance, o = -Math.log(r.endSpeed / this.v0) / i;
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
          var e, n, r, i, o, a, l, u = this, g = this.interaction, f = Zt(g).resistance, v = (g._now() - this.t0) / 1e3;
          if (v < this.te) {
            var b, k = 1 - (Math.exp(-f * v) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (e = 0, n = 0, r = this.targetOffset.x, i = this.targetOffset.y, o = this.modifiedOffset.x, a = this.modifiedOffset.y, b = { x: Jn(l = k, e, r, o), y: Jn(l, n, i, a) }) : b = { x: this.targetOffset.x * k, y: this.targetOffset.y * k };
            var T = { x: b.x - this.currentOffset.x, y: b.y - this.currentOffset.y };
            this.currentOffset.x += T.x, this.currentOffset.y += T.y, g.offsetBy(T), g.move(), this.onNextFrame(function() {
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
          o.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o.updatePointer(n, r, i, !0), o._doPhase({ interaction: o, event: r, phase: "resume" }), He(o.coords.prev, o.coords.cur), this.stop();
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
          i = _e(i);
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction.inertia;
        e.active && e.stop();
      }, "interactions:before-action-resume": function(t) {
        var e = t.interaction.modification;
        e.stop(t), e.start(t, t.interaction.coords.cur.page), e.applyToInteraction(t);
      }, "interactions:before-action-inertiastart": function(t) {
        return t.interaction.modification.setAndApply(t);
      }, "interactions:action-resume": At, "interactions:action-inertiastart": At, "interactions:after-action-inertiastart": function(t) {
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
          m(this, t), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = S({}, e || {});
        }
        return E(t, [{ key: "fire", value: function(e) {
          var n, r = this.global;
          (n = this.types[e.type]) && Qn(e, n), !e.propagationStopped && r && (n = r[e.type]) && Qn(e, n);
        } }, { key: "on", value: function(e, n) {
          var r = D(e, n);
          for (e in r) this.types[e] = et(this.types[e] || [], r[e]);
        } }, { key: "off", value: function(e, n) {
          var r = D(e, n);
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
      }(), Mi = function() {
        function t(e) {
          m(this, t), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e, ke(this, e);
        }
        return E(t, [{ key: "preventOriginalDefault", value: function() {
          this.originalEvent.preventDefault();
        } }, { key: "stopPropagation", value: function() {
          this.originalEvent.stopPropagation();
        } }, { key: "stopImmediatePropagation", value: function() {
          this.originalEvent.stopImmediatePropagation();
        } }]), t;
      }();
      function It(t) {
        return y.object(t) ? { capture: !!t.capture, passive: !!t.passive } : { capture: !!t, passive: !1 };
      }
      function Qt(t, e) {
        return t === e || (typeof t == "boolean" ? !!e.capture === t && !e.passive : !!t.capture == !!e.capture && !!t.passive == !!e.passive);
      }
      var Di = { id: "events", install: function(t) {
        var e, n = [], r = {}, i = [], o = { add: a, remove: l, addDelegate: function(f, v, b, k, T) {
          var _ = It(T);
          if (!r[b]) {
            r[b] = [];
            for (var C = 0; C < i.length; C++) {
              var O = i[C];
              a(O, b, u), a(O, b, g, !0);
            }
          }
          var I = r[b], Y = Ke(I, function(Q) {
            return Q.selector === f && Q.context === v;
          });
          Y || (Y = { selector: f, context: v, listeners: [] }, I.push(Y)), Y.listeners.push({ func: k, options: _ });
        }, removeDelegate: function(f, v, b, k, T) {
          var _, C = It(T), O = r[b], I = !1;
          if (O)
            for (_ = O.length - 1; _ >= 0; _--) {
              var Y = O[_];
              if (Y.selector === f && Y.context === v) {
                for (var Q = Y.listeners, W = Q.length - 1; W >= 0; W--) {
                  var G = Q[W];
                  if (G.func === k && Qt(G.options, C)) {
                    Q.splice(W, 1), Q.length || (O.splice(_, 1), l(v, b, u), l(v, b, g, !0)), I = !0;
                    break;
                  }
                }
                if (I) break;
              }
            }
        }, delegateListener: u, delegateUseCapture: g, delegatedEvents: r, documents: i, targets: n, supportsOptions: !1, supportsPassive: !1 };
        function a(f, v, b, k) {
          if (f.addEventListener) {
            var T = It(k), _ = Ke(n, function(C) {
              return C.eventTarget === f;
            });
            _ || (_ = { eventTarget: f, events: {} }, n.push(_)), _.events[v] || (_.events[v] = []), Ke(_.events[v], function(C) {
              return C.func === b && Qt(C.options, T);
            }) || (f.addEventListener(v, b, o.supportsOptions ? T : T.capture), _.events[v].push({ func: b, options: T }));
          }
        }
        function l(f, v, b, k) {
          if (f.addEventListener && f.removeEventListener) {
            var T = Ue(n, function(Le) {
              return Le.eventTarget === f;
            }), _ = n[T];
            if (_ && _.events) if (v !== "all") {
              var C = !1, O = _.events[v];
              if (O) {
                if (b === "all") {
                  for (var I = O.length - 1; I >= 0; I--) {
                    var Y = O[I];
                    l(f, v, Y.func, Y.options);
                  }
                  return;
                }
                for (var Q = It(k), W = 0; W < O.length; W++) {
                  var G = O[W];
                  if (G.func === b && Qt(G.options, Q)) {
                    f.removeEventListener(v, b, o.supportsOptions ? Q : Q.capture), O.splice(W, 1), O.length === 0 && (delete _.events[v], C = !0);
                    break;
                  }
                }
              }
              C && !Object.keys(_.events).length && n.splice(T, 1);
            } else for (v in _.events) _.events.hasOwnProperty(v) && l(f, v, "all");
          }
        }
        function u(f, v) {
          for (var b = It(v), k = new Mi(f), T = r[f.type], _ = Be(f)[0], C = _; y.element(C); ) {
            for (var O = 0; O < T.length; O++) {
              var I = T[O], Y = I.selector, Q = I.context;
              if (ce(C, Y) && X(Q, _) && X(Q, C)) {
                var W = I.listeners;
                k.currentTarget = C;
                for (var G = 0; G < W.length; G++) {
                  var Le = W[G];
                  Qt(Le.options, b) && Le.func(k);
                }
              }
            }
            C = _e(C);
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
          var l = a[o], u = r;
          if (l.simulation && l.simulation.allowResume && l.pointerType === e) for (; u; ) {
            if (u === l.element) return l;
            u = _e(u);
          }
        }
        return null;
      }, mouseOrPen: function(t) {
        var e, n = t.pointerId, r = t.pointerType, i = t.eventType, o = t.scope;
        if (r !== "mouse" && r !== "pen") return null;
        for (var a = 0, l = o.interactions.list; a < l.length; a++) {
          var u = l[a];
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
          var r = e.interactions.list, i = Me(n), o = Be(n), a = o[0], l = o[1], u = [];
          if (/^touch/.test(n.type)) {
            e.prevTouchTime = e.now();
            for (var g = 0, f = n.changedTouches; g < f.length; g++) {
              var v = f[g], b = { pointer: v, pointerId: H(v), pointerType: i, eventType: n.type, eventTarget: a, curEventTarget: l, scope: e }, k = rr(b);
              u.push([b.pointer, b.eventTarget, b.curEventTarget, k]);
            }
          } else {
            var T = !1;
            if (!he.supportsPointerEvent && /mouse/.test(n.type)) {
              for (var _ = 0; _ < r.length && !T; _++) T = r[_].pointerType !== "mouse" && r[_].pointerIsDown;
              T = T || e.now() - e.prevTouchTime < 500 || n.timeStamp === 0;
            }
            if (!T) {
              var C = { pointer: n, pointerId: H(n), pointerType: i, eventType: n.type, curEventTarget: l, eventTarget: a, scope: e }, O = rr(C);
              u.push([C.pointer, C.eventTarget, C.curEventTarget, O]);
            }
          }
          for (var I = 0; I < u.length; I++) {
            var Y = u[I], Q = Y[0], W = Y[1], G = Y[2];
            Y[3][t](Q, n, W, G);
          }
        };
      }
      function rr(t) {
        var e = t.pointerType, n = t.scope, r = { interaction: Oi.search(t), searchDetails: t };
        return n.fire("interactions:find", r), r.interaction || n.interactions.new({ pointerType: e });
      }
      function wn(t, e) {
        var n = t.doc, r = t.scope, i = t.options, o = r.interactions.docEvents, a = r.events, l = a[e];
        for (var u in r.browser.isIOS && !i.events && (i.events = { passive: !1 }), a.delegatedEvents) l(n, u, a.delegateListener), l(n, u, a.delegateUseCapture, !0);
        for (var g = i && i.events, f = 0; f < o.length; f++) {
          var v = o[f];
          l(n, v.type, v.listener, g);
        }
      }
      var Ci = { id: "core/interactions", install: function(t) {
        for (var e = {}, n = 0; n < xn.length; n++) {
          var r = xn[n];
          e[r] = nr(r, t);
        }
        var i, o = he.pEventTypes;
        function a() {
          for (var l = 0, u = t.interactions.list; l < u.length; l++) {
            var g = u[l];
            if (g.pointerIsDown && g.pointerType === "touch" && !g._interacting) for (var f = function() {
              var k = b[v];
              t.documents.some(function(T) {
                return X(T.doc, k.downTarget);
              }) || g.removePointer(k.pointer, k.event);
            }, v = 0, b = g.pointers; v < b.length; v++) f();
          }
        }
        (i = ee.PointerEvent ? [{ type: o.down, listener: a }, { type: o.down, listener: e.pointerDown }, { type: o.move, listener: e.pointerMove }, { type: o.up, listener: e.pointerUp }, { type: o.cancel, listener: e.pointerUp }] : [{ type: "mousedown", listener: e.pointerDown }, { type: "mousemove", listener: e.pointerMove }, { type: "mouseup", listener: e.pointerUp }, { type: "touchstart", listener: a }, { type: "touchstart", listener: e.pointerDown }, { type: "touchmove", listener: e.pointerMove }, { type: "touchend", listener: e.pointerUp }, { type: "touchcancel", listener: e.pointerUp }]).push({ type: "blur", listener: function(l) {
          for (var u = 0, g = t.interactions.list; u < g.length; u++)
            g[u].documentBlur(l);
        } }), t.prevTouchTime = 0, t.Interaction = function(l) {
          z(g, l);
          var u = le(g);
          function g() {
            return m(this, g), u.apply(this, arguments);
          }
          return E(g, [{ key: "pointerMoveTolerance", get: function() {
            return t.interactions.pointerMoveTolerance;
          }, set: function(f) {
            t.interactions.pointerMoveTolerance = f;
          } }, { key: "_now", value: function() {
            return t.now();
          } }]), g;
        }(zi), t.interactions = { list: [], new: function(l) {
          l.scopeFire = function(g, f) {
            return t.fire(g, f);
          };
          var u = new t.Interaction(l);
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
          m(this, t), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new er(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n.actions, this.target = e, this._context = n.context || r, this._win = ue(te(e) ? this._context : e), this._doc = this._win.document, this._scopeEvents = i, this.set(n);
        }
        return E(t, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(e, n) {
          return y.func(n.onstart) && this.on("".concat(e, "start"), n.onstart), y.func(n.onmove) && this.on("".concat(e, "move"), n.onmove), y.func(n.onend) && this.on("".concat(e, "end"), n.onend), y.func(n.oninertiastart) && this.on("".concat(e, "inertiastart"), n.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(e, n, r) {
          var i, o = this, a = (i = this._actions.map[e]) == null ? void 0 : i.filterEventType, l = function(u) {
            return (a == null || a(u)) && Kt(u, o._actions);
          };
          (y.array(n) || y.object(n)) && this._onOff(dt.Off, e, n, void 0, l), (y.array(r) || y.object(r)) && this._onOff(dt.On, e, r, void 0, l);
        } }, { key: "setPerAction", value: function(e, n) {
          var r = this._defaults;
          for (var i in n) {
            var o = i, a = this.options[e], l = n[o];
            o === "listeners" && this.updatePerActionListeners(e, a.listeners, l), y.array(l) ? a[o] = at(l) : y.plainObject(l) ? (a[o] = S(a[o] || {}, zt(l)), y.object(r.perAction[o]) && "enabled" in r.perAction[o] && (a[o].enabled = l.enabled !== !1)) : y.bool(l) && y.object(r.perAction[o]) ? a[o].enabled = l : a[o] = l;
          }
        } }, { key: "getRect", value: function(e) {
          return e = e || (y.element(this.target) ? this.target : null), y.string(this.target) && (e = e || this._context.querySelector(this.target)), j(e);
        } }, { key: "rectChecker", value: function(e) {
          var n = this;
          return y.func(e) ? (this.getRect = function(r) {
            var i = S({}, e.apply(n, r));
            return "width" in i || (i.width = i.right - i.left, i.height = i.bottom - i.top), i;
          }, this) : e === null ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(e, n) {
          if (te(n) || y.object(n)) {
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
          return this._context === e.ownerDocument || X(this._context, e);
        } }, { key: "testIgnoreAllow", value: function(e, n, r) {
          return !this.testIgnore(e.ignoreFrom, n, r) && this.testAllow(e.allowFrom, n, r);
        } }, { key: "testAllow", value: function(e, n, r) {
          return !e || !!y.element(r) && (y.string(e) ? Pe(r, e, n) : !!y.element(e) && X(e, r));
        } }, { key: "testIgnore", value: function(e, n, r) {
          return !(!e || !y.element(r)) && (y.string(e) ? Pe(r, e, n) : !!y.element(e) && X(e, r));
        } }, { key: "fire", value: function(e) {
          return this.events.fire(e), this;
        } }, { key: "_onOff", value: function(e, n, r, i, o) {
          y.object(n) && !y.array(n) && (i = r, r = null);
          var a = D(n, r, o);
          for (var l in a) {
            l === "wheel" && (l = he.wheelEvent);
            for (var u = 0, g = a[l]; u < g.length; u++) {
              var f = g[u];
              Kt(l, this._actions) ? this.events[e === dt.On ? "on" : "off"](l, f) : y.string(this.target) ? this._scopeEvents[e === dt.On ? "addDelegate" : "removeDelegate"](this.target, this._context, l, f, i) : this._scopeEvents[e === dt.On ? "add" : "remove"](this.target, l, f, i);
            }
          }
          return this;
        } }, { key: "on", value: function(e, n, r) {
          return this._onOff(dt.On, e, n, r);
        } }, { key: "off", value: function(e, n, r) {
          return this._onOff(dt.Off, e, n, r);
        } }, { key: "set", value: function(e) {
          var n = this._defaults;
          for (var r in y.object(e) || (e = {}), this.options = zt(n.base), this._actions.methodDict) {
            var i = r, o = this._actions.methodDict[i];
            this.options[i] = {}, this.setPerAction(i, S(S({}, n.perAction), n.actions[i])), this[o](e[i]);
          }
          for (var a in e) a !== "getRect" ? y.func(this[a]) && this[a](e[a]) : this.rectChecker(e.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (y.string(this.target)) for (var e in this._scopeEvents.delegatedEvents) for (var n = this._scopeEvents.delegatedEvents[e], r = n.length - 1; r >= 0; r--) {
            var i = n[r], o = i.selector, a = i.context, l = i.listeners;
            o === this.target && a === this._context && n.splice(r, 1);
            for (var u = l.length - 1; u >= 0; u--) this._scopeEvents.removeDelegate(this.target, this._context, e, l[u][0], l[u][1]);
          }
          else this._scopeEvents.remove(this.target, "all");
        } }]), t;
      }(), Bi = function() {
        function t(e) {
          var n = this;
          m(this, t), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e, e.addListeners({ "interactable:unset": function(r) {
            var i = r.interactable, o = i.target, a = y.string(o) ? n.selectorMap[o] : o[n.scope.id], l = Ue(a, function(u) {
              return u === i;
            });
            a.splice(l, 1);
          } });
        }
        return E(t, [{ key: "new", value: function(e, n) {
          n = S(n || {}, { actions: this.scope.actions });
          var r = new this.scope.Interactable(e, n, this.scope.document, this.scope.events);
          return this.scope.addDocument(r._doc), this.list.push(r), y.string(e) ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(r)) : (r.target[this.scope.id] || Object.defineProperty(e, this.scope.id, { value: [], configurable: !0 }), e[this.scope.id].push(r)), this.scope.fire("interactable:new", { target: e, options: n, interactable: r, win: this.scope._win }), r;
        } }, { key: "getExisting", value: function(e, n) {
          var r = n && n.context || this.scope.document, i = y.string(e), o = i ? this.selectorMap[e] : e[this.scope.id];
          if (o) return Ke(o, function(a) {
            return a._context === r && (i || a.inContext(e));
          });
        } }, { key: "forEachMatch", value: function(e, n) {
          for (var r = 0, i = this.list; r < i.length; r++) {
            var o = i[r], a = void 0;
            if ((y.string(o.target) ? y.element(e) && ce(e, o.target) : e === o.target) && o.inContext(e) && (a = n(o)), a !== void 0) return a;
          }
        } }]), t;
      }(), Fi = function() {
        function t() {
          var e = this;
          m(this, t), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = he, this.defaults = zt(Yn), this.Eventable = er, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = function(r) {
            var i = function o(a, l) {
              var u = r.interactables.getExisting(a, l);
              return u || ((u = r.interactables.new(a, l)).events.global = o.globalEvents), u;
            };
            return i.getPointerAverage = pe, i.getTouchBBox = K, i.getTouchDistance = F, i.getTouchAngle = we, i.getElementRect = j, i.getElementClientRect = M, i.matchesSelector = ce, i.closest = We, i.globalEvents = {}, i.version = "1.10.27", i.scope = r, i.use = function(o, a) {
              return this.scope.usePlugin(o, a), this;
            }, i.isSet = function(o, a) {
              return !!this.scope.interactables.get(o, a && a.context);
            }, i.on = Ct(function(o, a, l) {
              if (y.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), y.array(o)) {
                for (var u = 0, g = o; u < g.length; u++) {
                  var f = g[u];
                  this.on(f, a, l);
                }
                return this;
              }
              if (y.object(o)) {
                for (var v in o) this.on(v, o[v], a);
                return this;
              }
              return Kt(o, this.scope.actions) ? this.globalEvents[o] ? this.globalEvents[o].push(a) : this.globalEvents[o] = [a] : this.scope.events.add(this.scope.document, o, a, { options: l }), this;
            }, "The interact.on() method is being deprecated"), i.off = Ct(function(o, a, l) {
              if (y.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), y.array(o)) {
                for (var u = 0, g = o; u < g.length; u++) {
                  var f = g[u];
                  this.off(f, a, l);
                }
                return this;
              }
              if (y.object(o)) {
                for (var v in o) this.off(v, o[v], a);
                return this;
              }
              var b;
              return Kt(o, this.scope.actions) ? o in this.globalEvents && (b = this.globalEvents[o].indexOf(a)) !== -1 && this.globalEvents[o].splice(b, 1) : this.scope.events.remove(this.scope.document, o, a, l), this;
            }, "The interact.off() method is being deprecated"), i.debug = function() {
              return this.scope;
            }, i.supportsTouch = function() {
              return he.supportsTouch;
            }, i.supportsPointerEvent = function() {
              return he.supportsPointerEvent;
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
            z(o, r);
            var i = le(o);
            function o() {
              return m(this, o), i.apply(this, arguments);
            }
            return E(o, [{ key: "_defaults", get: function() {
              return n.defaults;
            } }, { key: "set", value: function(a) {
              return be(se(o.prototype), "set", this).call(this, a), n.fire("interactable:set", { options: a, interactable: this }), this;
            } }, { key: "unset", value: function() {
              be(se(o.prototype), "unset", this).call(this);
              var a = n.interactables.list.indexOf(this);
              a < 0 || (n.interactables.list.splice(a, 1), n.fire("interactable:unset", { interactable: this }));
            } }]), o;
          }(Ii);
        }
        return E(t, [{ key: "addListeners", value: function(e, n) {
          this.listenerMaps.push({ id: n, map: e });
        } }, { key: "fire", value: function(e, n) {
          for (var r = 0, i = this.listenerMaps; r < i.length; r++) {
            var o = i[r].map[e];
            if (o && o(n, this, e) === !1) return !1;
          }
        } }, { key: "init", value: function(e) {
          return this.isInitialized ? this : function(n, r) {
            return n.isInitialized = !0, y.window(r) && fe(r), ee.init(r), he.init(r), ut.init(r), n.window = r, n.document = r.document, n.usePlugin(Ai), n.usePlugin(Di), n;
          }(this, e);
        } }, { key: "pluginIsInstalled", value: function(e) {
          var n = e.id;
          return n ? !!this._plugins.map[n] : this._plugins.list.indexOf(e) !== -1;
        } }, { key: "usePlugin", value: function(e, n) {
          if (!this.isInitialized) return this;
          if (this.pluginIsInstalled(e)) return this;
          if (e.id && (this._plugins.map[e.id] = e), this._plugins.list.push(e), e.install && e.install(this, n), e.listeners && e.before) {
            for (var r = 0, i = this.listenerMaps.length, o = e.before.reduce(function(l, u) {
              return l[u] = !0, l[ir(u)] = !0, l;
            }, {}); r < i; r++) {
              var a = this.listenerMaps[r].id;
              if (a && (o[a] || o[ir(a)])) break;
            }
            this.listenerMaps.splice(r, 0, { id: e.id, map: e.listeners });
          } else e.listeners && this.listenerMaps.push({ id: e.id, map: e.listeners });
          return this;
        } }, { key: "addDocument", value: function(e, n) {
          if (this.getDocIndex(e) !== -1) return !1;
          var r = ue(e);
          n = n ? S({}, n) : {}, this.documents.push({ doc: e, options: n }), this.events.documents.push(e), e !== this.document && this.events.add(r, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: e, window: r, scope: this, options: n });
        } }, { key: "removeDocument", value: function(e) {
          var n = this.getDocIndex(e), r = ue(e), i = this.documents[n].options;
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
      var or = new Fi(), Fe = or.interactStatic, Li = typeof globalThis < "u" ? globalThis : window;
      or.init(Li);
      var ji = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(t) {
        var e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(r) {
          var i = r[0], o = r[1];
          return i in t || o in t;
        }), n = function(r, i) {
          for (var o = t.range, a = t.limits, l = a === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : a, u = t.offset, g = u === void 0 ? { x: 0, y: 0 } : u, f = { range: o, grid: t, x: null, y: null }, v = 0; v < e.length; v++) {
            var b = e[v], k = b[0], T = b[1], _ = Math.round((r - g.x) / t[k]), C = Math.round((i - g.y) / t[T]);
            f[k] = Math.max(l.left, Math.min(l.right, _ * t[k] + g.x)), f[T] = Math.max(l.top, Math.min(l.bottom, C * t[T] + g.y));
          }
          return f;
        };
        return n.grid = t, n.coordFields = e, n;
      } }), Hi = { id: "snappers", install: function(t) {
        var e = t.interactStatic;
        e.snappers = S(e.snappers || {}, ji), e.createSnapGrid = e.snappers.grid;
      } }, Wi = Hi, $i = { start: function(t) {
        var e = t.state, n = t.rect, r = t.edges, i = t.pageCoords, o = e.options, a = o.ratio, l = o.enabled, u = e.options, g = u.equalDelta, f = u.modifiers;
        a === "preserve" && (a = n.width / n.height), e.startCoords = S({}, i), e.startRect = S({}, n), e.ratio = a, e.equalDelta = g;
        var v = e.linkedEdges = { top: r.top || r.left && !r.bottom, left: r.left || r.top && !r.right, bottom: r.bottom || r.right && !r.top, right: r.right || r.bottom && !r.left };
        if (e.xIsPrimaryAxis = !(!r.left && !r.right), e.equalDelta) {
          var b = (v.left ? 1 : -1) * (v.top ? 1 : -1);
          e.edgeSign = { x: b, y: b };
        } else e.edgeSign = { x: v.left ? -1 : 1, y: v.top ? -1 : 1 };
        if (l !== !1 && S(r, v), f != null && f.length) {
          var k = new vn(t.interaction);
          k.copyFrom(t.interaction.modification), k.prepareStates(f), e.subModification = k, k.startAll(c({}, t));
        }
      }, set: function(t) {
        var e = t.state, n = t.rect, r = t.coords, i = e.linkedEdges, o = S({}, r), a = e.equalDelta ? qi : Ni;
        if (S(t.edges, i), a(e, e.xIsPrimaryAxis, r, n), !e.subModification) return null;
        var l = S({}, n);
        Ze(i, l, { x: r.x - o.x, y: r.y - o.y });
        var u = e.subModification.setAll(c(c({}, t), {}, { rect: l, edges: i, pageCoords: r, prevCoords: r, prevRect: l })), g = u.delta;
        return u.changed && (a(e, Math.abs(g.x) > Math.abs(g.y), u.coords, u.rect), S(r, u.coords)), u.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
      function qi(t, e, n) {
        var r = t.startCoords, i = t.edgeSign;
        e ? n.y = r.y + (n.x - r.x) * i.y : n.x = r.x + (n.y - r.y) * i.x;
      }
      function Ni(t, e, n, r) {
        var i = t.startRect, o = t.startCoords, a = t.ratio, l = t.edgeSign;
        if (e) {
          var u = r.width / a;
          n.y = o.y + (u - i.height) * l.y;
        } else {
          var g = r.height * a;
          n.x = o.x + (g - i.width) * l.x;
        }
      }
      var Xi = ft($i, "aspectRatio"), ar = function() {
      };
      ar._defaults = {};
      var en = ar;
      function gt(t, e, n) {
        return y.func(t) ? ne(t, e.interactable, e.element, [n.x, n.y, e]) : ne(t, e.interactable, e.element);
      }
      var tn = { start: function(t) {
        var e = t.rect, n = t.startOffset, r = t.state, i = t.interaction, o = t.pageCoords, a = r.options, l = a.elementRect, u = S({ left: 0, top: 0, right: 0, bottom: 0 }, a.offset || {});
        if (e && l) {
          var g = gt(a.restriction, i, o);
          if (g) {
            var f = g.right - g.left - e.width, v = g.bottom - g.top - e.height;
            f < 0 && (u.left += f, u.right += f), v < 0 && (u.top += v, u.bottom += v);
          }
          u.left += n.left - e.width * l.left, u.top += n.top - e.height * l.top, u.right += n.right - e.width * (1 - l.right), u.bottom += n.bottom - e.height * (1 - l.bottom);
        }
        r.offset = u;
      }, set: function(t) {
        var e = t.coords, n = t.interaction, r = t.state, i = r.options, o = r.offset, a = gt(i.restriction, n, e);
        if (a) {
          var l = function(u) {
            return !u || "left" in u && "top" in u || ((u = S({}, u)).left = u.x || 0, u.top = u.y || 0, u.right = u.right || u.left + u.width, u.bottom = u.bottom || u.top + u.height), u;
          }(a);
          e.x = Math.max(Math.min(l.right - o.right, e.x), l.left + o.left), e.y = Math.max(Math.min(l.bottom - o.bottom, e.y), l.top + o.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, Yi = ft(tn, "restrict"), sr = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, lr = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function cr(t, e) {
        for (var n = 0, r = ["top", "left", "bottom", "right"]; n < r.length; n++) {
          var i = r[n];
          i in t || (t[i] = e[i]);
        }
        return t;
      }
      var Bt = { noInner: sr, noOuter: lr, start: function(t) {
        var e, n = t.interaction, r = t.startOffset, i = t.state, o = i.options;
        o && (e = Oe(gt(o.offset, n, n.coords.start.page))), e = e || { x: 0, y: 0 }, i.offset = { top: e.y + r.top, left: e.x + r.left, bottom: e.y - r.bottom, right: e.x - r.right };
      }, set: function(t) {
        var e = t.coords, n = t.edges, r = t.interaction, i = t.state, o = i.offset, a = i.options;
        if (n) {
          var l = S({}, e), u = gt(a.inner, r, l) || {}, g = gt(a.outer, r, l) || {};
          cr(u, sr), cr(g, lr), n.top ? e.y = Math.min(Math.max(g.top + o.top, l.y), u.top + o.top) : n.bottom && (e.y = Math.max(Math.min(g.bottom + o.bottom, l.y), u.bottom + o.bottom)), n.left ? e.x = Math.min(Math.max(g.left + o.left, l.x), u.left + o.left) : n.right && (e.x = Math.max(Math.min(g.right + o.right, l.x), u.right + o.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, Vi = ft(Bt, "restrictEdges"), Gi = S({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(t) {
      } }, tn.defaults), Ui = ft({ start: tn.start, set: tn.set, defaults: Gi }, "restrictRect"), Ki = { width: -1 / 0, height: -1 / 0 }, Ji = { width: 1 / 0, height: 1 / 0 }, Zi = ft({ start: function(t) {
        return Bt.start(t);
      }, set: function(t) {
        var e = t.interaction, n = t.state, r = t.rect, i = t.edges, o = n.options;
        if (i) {
          var a = Ge(gt(o.min, e, t.coords)) || Ki, l = Ge(gt(o.max, e, t.coords)) || Ji;
          n.options = { endOnly: o.endOnly, inner: S({}, Bt.noInner), outer: S({}, Bt.noOuter) }, i.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - l.height) : i.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + l.height), i.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - l.width) : i.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + l.width), Bt.set(t), n.options = o;
        }
      }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), En = { start: function(t) {
        var e, n = t.interaction, r = t.interactable, i = t.element, o = t.rect, a = t.state, l = t.startOffset, u = a.options, g = u.offsetWithOrigin ? function(b) {
          var k = b.interaction.element, T = Oe(ne(b.state.options.origin, null, null, [k])), _ = T || Ee(b.interactable, k, b.interaction.prepared.name);
          return _;
        }(t) : { x: 0, y: 0 };
        if (u.offset === "startCoords") e = { x: n.coords.start.page.x, y: n.coords.start.page.y };
        else {
          var f = ne(u.offset, r, i, [n]);
          (e = Oe(f) || { x: 0, y: 0 }).x += g.x, e.y += g.y;
        }
        var v = u.relativePoints;
        a.offsets = o && v && v.length ? v.map(function(b, k) {
          return { index: k, relativePoint: b, x: l.left - o.width * b.x + e.x, y: l.top - o.height * b.y + e.y };
        }) : [{ index: 0, relativePoint: null, x: e.x, y: e.y }];
      }, set: function(t) {
        var e = t.interaction, n = t.coords, r = t.state, i = r.options, o = r.offsets, a = Ee(e.interactable, e.element, e.prepared.name), l = S({}, n), u = [];
        i.offsetWithOrigin || (l.x -= a.x, l.y -= a.y);
        for (var g = 0, f = o; g < f.length; g++) for (var v = f[g], b = l.x - v.x, k = l.y - v.y, T = 0, _ = i.targets.length; T < _; T++) {
          var C = i.targets[T], O = void 0;
          (O = y.func(C) ? C(b, k, e._proxy, v, T) : C) && u.push({ x: (y.number(O.x) ? O.x : b) + v.x, y: (y.number(O.y) ? O.y : k) + v.y, range: y.number(O.range) ? O.range : i.range, source: C, index: T, offset: v });
        }
        for (var I = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, Y = 0; Y < u.length; Y++) {
          var Q = u[Y], W = Q.range, G = Q.x - l.x, Le = Q.y - l.y, me = Te(G, Le), Xe = me <= W;
          W === 1 / 0 && I.inRange && I.range !== 1 / 0 && (Xe = !1), I.target && !(Xe ? I.inRange && W !== 1 / 0 ? me / W < I.distance / I.range : W === 1 / 0 && I.range !== 1 / 0 || me < I.distance : !I.inRange && me < I.distance) || (I.target = Q, I.distance = me, I.range = W, I.inRange = Xe, I.delta.x = G, I.delta.y = Le);
        }
        return I.inRange && (n.x = I.target.x, n.y = I.target.y), r.closest = I, I;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, Qi = ft(En, "snap"), nn = { start: function(t) {
        var e = t.state, n = t.edges, r = e.options;
        if (!n) return null;
        t.state = { options: { targets: null, relativePoints: [{ x: n.left ? 0 : 1, y: n.top ? 0 : 1 }], offset: r.offset || "self", origin: { x: 0, y: 0 }, range: r.range } }, e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]], En.start(t), e.offsets = t.state.offsets, t.state = e;
      }, set: function(t) {
        var e = t.interaction, n = t.state, r = t.coords, i = n.options, o = n.offsets, a = { x: r.x - o[0].x, y: r.y - o[0].y };
        n.options = S({}, i), n.options.targets = [];
        for (var l = 0, u = i.targets || []; l < u.length; l++) {
          var g = u[l], f = void 0;
          if (f = y.func(g) ? g(a.x, a.y, e) : g) {
            for (var v = 0, b = n.targetFields; v < b.length; v++) {
              var k = b[v], T = k[0], _ = k[1];
              if (T in f || _ in f) {
                f.x = f[T], f.y = f[_];
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
      }, set: nn.set, defaults: S(zt(nn.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: Qi, snapSize: eo, spring: en, avoid: en, transform: en, rubberband: en }, to = { id: "modifiers", install: function(t) {
        var e = t.interactStatic;
        for (var n in t.usePlugin(Xn), t.usePlugin(Wi), e.modifiers = Sn, Sn) {
          var r = Sn[n], i = r._defaults, o = r._methods;
          i._methods = o, t.defaults.perAction[n] = i;
        }
      } }, no = to, ur = function(t) {
        z(n, t);
        var e = le(n);
        function n(r, i, o, a, l, u) {
          var g;
          if (m(this, n), ke(ye(g = e.call(this, l)), o), o !== i && ke(ye(g), i), g.timeStamp = u, g.originalEvent = o, g.type = r, g.pointerId = H(i), g.pointerType = Me(i), g.target = a, g.currentTarget = null, r === "tap") {
            var f = l.getPointerIndex(i);
            g.dt = g.timeStamp - l.pointers[f].downTime;
            var v = g.timeStamp - l.tapTime;
            g.double = !!l.prevTap && l.prevTap.type !== "doubletap" && l.prevTap.target === g.target && v < 500;
          } else r === "doubletap" && (g.dt = i.timeStamp - l.tapTime, g.double = !0);
          return g;
        }
        return E(n, [{ key: "_subtractOrigin", value: function(r) {
          var i = r.x, o = r.y;
          return this.pageX -= i, this.pageY -= o, this.clientX -= i, this.clientY -= o, this;
        } }, { key: "_addOrigin", value: function(r) {
          var i = r.x, o = r.y;
          return this.pageX += i, this.pageY += o, this.clientX += i, this.clientY += o, this;
        } }, { key: "preventDefault", value: function() {
          this.originalEvent.preventDefault();
        } }]), n;
      }($e), Ft = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t) {
        t.pointerEvents = Ft, t.defaults.actions.pointerEvents = Ft.defaults, S(t.actions.phaselessTypes, Ft.types);
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
          for (var i = n.interaction, o = n.pointer, a = n.event, l = n.eventTarget, u = n.pointerIndex, g = i.pointers[u].hold, f = de(l), v = { interaction: i, pointer: o, event: a, eventTarget: l, type: "hold", targets: [], path: f, node: null }, b = 0; b < f.length; b++) {
            var k = f[b];
            v.node = k, r.fire("pointerEvents:collect-targets", v);
          }
          if (v.targets.length) {
            for (var T = 1 / 0, _ = 0, C = v.targets; _ < C.length; _++) {
              var O = C[_].eventable.options.holdDuration;
              O < T && (T = O);
            }
            g.duration = T, g.timeout = setTimeout(function() {
              pt({ interaction: i, eventTarget: l, pointer: o, event: a, type: "hold" }, r);
            }, T);
          }
        })(t, e), pt(t, e);
      }, "interactions:up": function(t, e) {
        zn(t), pt(t, e), function(n, r) {
          var i = n.interaction, o = n.pointer, a = n.event, l = n.eventTarget;
          i.pointerWasMoved || pt({ interaction: i, eventTarget: l, pointer: o, event: a, type: "tap" }, r);
        }(t, e);
      }, "interactions:cancel": function(t, e) {
        zn(t), pt(t, e);
      } }, PointerEvent: ur, fire: pt, collectEventTargets: fr, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
      function pt(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, l = t.targets, u = l === void 0 ? fr(t, e) : l, g = new ur(a, r, i, o, n, e.now());
        e.fire("pointerEvents:new", { pointerEvent: g });
        for (var f = { interaction: n, pointer: r, event: i, eventTarget: o, targets: u, type: a, pointerEvent: g }, v = 0; v < u.length; v++) {
          var b = u[v];
          for (var k in b.props || {}) g[k] = b.props[k];
          var T = Ee(b.eventable, b.node);
          if (g._subtractOrigin(T), g.eventable = b.eventable, g.currentTarget = b.node, b.eventable.fire(g), g._addOrigin(T), g.immediatePropagationStopped || g.propagationStopped && v + 1 < u.length && u[v + 1].node !== g.currentTarget) break;
        }
        if (e.fire("pointerEvents:fired", f), a === "tap") {
          var _ = g.double ? pt({ interaction: n, pointer: r, event: i, eventTarget: o, type: "doubletap" }, e) : g;
          n.prevTap = _, n.tapTime = _.timeStamp;
        }
        return g;
      }
      function fr(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, l = n.getPointerIndex(r), u = n.pointers[l];
        if (a === "tap" && (n.pointerWasMoved || !u || u.downTarget !== o)) return [];
        for (var g = de(o), f = { interaction: n, pointer: r, event: i, eventTarget: o, type: a, path: g, targets: [], node: null }, v = 0; v < g.length; v++) {
          var b = g[v];
          f.node = b, e.fire("pointerEvents:collect-targets", f);
        }
        return a === "hold" && (f.targets = f.targets.filter(function(k) {
          var T, _;
          return k.eventable.options.holdDuration === ((T = n.pointers[l]) == null || (_ = T.hold) == null ? void 0 : _.duration);
        })), f.targets;
      }
      function zn(t) {
        var e = t.interaction, n = t.pointerIndex, r = e.pointers[n].hold;
        r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
      }
      var ro = Object.freeze({ __proto__: null, default: Ft });
      function io(t) {
        var e = t.interaction;
        e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
      }
      var oo = { id: "pointer-events/holdRepeat", install: function(t) {
        t.usePlugin(Ft);
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
          return S(this.events.options, r), this;
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
        S(n.events.options, e.pointerEvents.defaults), S(n.events.options, r.pointerEvents || {});
      } } }, lo = so, co = { id: "pointer-events", install: function(t) {
        t.usePlugin(ro), t.usePlugin(ao), t.usePlugin(lo);
      } }, uo = co, fo = { id: "reflow", install: function(t) {
        var e = t.Interactable;
        t.actions.phases.reflow = !0, e.prototype.reflow = function(n) {
          return function(r, i, o) {
            for (var a = r.getAllElements(), l = o.window.Promise, u = l ? [] : null, g = function() {
              var v = a[f], b = r.getRect(v);
              if (!b) return 1;
              var k, T = Ke(o.interactions.list, function(O) {
                return O.interacting() && O.interactable === r && O.element === v && O.prepared.name === i.name;
              });
              if (T) T.move(), u && (k = T._reflowPromise || new l(function(O) {
                T._reflowResolve = O;
              }));
              else {
                var _ = Ge(b), C = /* @__PURE__ */ function(O) {
                  return { coords: O, get page() {
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
                k = function(O, I, Y, Q, W) {
                  var G = O.interactions.new({ pointerType: "reflow" }), Le = { interaction: G, event: W, pointer: W, eventTarget: Y, phase: "reflow" };
                  G.interactable = I, G.element = Y, G.prevEvent = W, G.updatePointer(W, W, Y, !0), Ie(G.coords.delta), dn(G.prepared, Q), G._doPhase(Le);
                  var me = O.window, Xe = me.Promise, nt = Xe ? new Xe(function(lt) {
                    G._reflowResolve = lt;
                  }) : void 0;
                  return G._reflowPromise = nt, G.start(Q, I, Y), G._interacting ? (G.move(Le), G.end(W)) : (G.stop(), G._reflowResolve()), G.removePointer(W, W), nt;
                }(o, r, v, i, C);
              }
              u && u.push(k);
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
      } } }, po = fo;
      if (Fe.use(Nn), Fe.use(Kn), Fe.use(uo), Fe.use(Pi), Fe.use(no), Fe.use(mi), Fe.use(ai), Fe.use(li), Fe.use(po), Fe.default = Fe, x(s) === "object" && s) try {
        s.exports = Fe;
      } catch {
      }
      return Fe.default = Fe, Fe;
    });
  }(Ht, Ht.exports)), Ht.exports;
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
  setup(s, { expose: d, emit: p }) {
    const c = s, x = p, m = dr(qr), R = dr(Nr);
    if (!m)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const E = ho(null), h = Nt({
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
    let z = !1, se = !1, q = NaN, ye = NaN, le = NaN, be = NaN, De = -1, Re = -1, xe = -1, ge = -1, fe = c.x, ue = c.y, L = c.w, N = c.h;
    const y = Je(), oe = Nt({
      i: go(c, "i"),
      state: h,
      wrapper: y,
      calcXY: Ge
    });
    function A(w) {
      Te(w);
    }
    function Z() {
      Ce();
    }
    function P(w) {
      Ye(c.isDraggable) && (h.draggable = w);
    }
    function B(w) {
      Ye(c.isResizable) && (h.resizable = w);
    }
    function J(w) {
      Ye(c.isBounded) && (h.bounded = w);
    }
    function ee(w) {
      h.transformScale = w;
    }
    function ae(w) {
      h.rowHeight = w;
    }
    function he(w) {
      h.maxRows = w;
    }
    function X() {
      h.rtl = xr() === "rtl", Ce();
    }
    function We(w) {
      h.cols = Math.floor(w);
    }
    m.increaseItem(oe), Fr(() => {
      h.rtl = xr() === "rtl";
    }), An(() => {
      m.responsive && m.lastBreakpoint ? h.cols = Ur(m.lastBreakpoint, m.cols) : h.cols = m.colNum, h.rowHeight = m.rowHeight, h.containerWidth = m.width !== null ? m.width : 100, h.margin = m.margin !== void 0 ? m.margin.map(Number) : [10, 10], h.maxRows = m.maxRows, Ye(c.isDraggable) ? h.draggable = m.isDraggable : h.draggable = c.isDraggable, Ye(c.isResizable) ? h.resizable = m.isResizable : h.resizable = c.isResizable, Ye(c.isBounded) ? h.bounded = m.isBounded : h.bounded = c.isBounded, h.transformScale = m.transformScale, h.useCssTransforms = m.useCssTransforms, h.useStyleCursor = m.useStyleCursor, vo(() => {
        fe = c.x, ue = c.y, N = c.h, L = c.w, je(te);
      }), R.on("updateWidth", A), R.on("compact", Z), R.on("setDraggable", P), R.on("setResizable", B), R.on("setBounded", J), R.on("setTransformScale", ee), R.on("setRowHeight", ae), R.on("setMaxRows", he), R.on("directionchange", X), R.on("setColNum", We);
    }), Lr(() => {
      R.off("updateWidth", A), R.off("compact", Z), R.off("setDraggable", P), R.off("setResizable", B), R.off("setBounded", J), R.off("setTransformScale", ee), R.off("setRowHeight", ae), R.off("setMaxRows", he), R.off("directionchange", X), R.off("setColNum", We), E.value && (E.value.unset(), E.value = null), m.decreaseItem(oe);
    }), d({ state: h, wrapper: y });
    const _e = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, ce = rt(() => h.resizable && !c.static), U = rt(() => m.isMirrored ? !h.rtl : h.rtl), Ve = rt(() => (h.draggable || h.resizable) && !c.static), Pe = $o("item"), Rt = rt(() => ({
      [Pe.b()]: !0,
      [Pe.bm("resizable")]: ce.value,
      // 可缩放
      [Pe.bm("static")]: c.static,
      // 静态锁定
      [Pe.bm("resizing")]: h.isResizing,
      // 缩放中
      [Pe.bm("dragging")]: h.isDragging,
      // 拖拽中
      [Pe.bm("transform")]: h.useCssTransforms,
      // 使用 transform 布局模式
      [Pe.bm("rtl")]: U.value,
      // RTL 渲染修饰
      [Pe.bm("no-touch")]: _e && Ve.value
      // Android 下禁用触摸样式修饰
    })), M = rt(() => [Pe.be("resizer"), U.value && Pe.bem("resizer", "rtl")].filter(Boolean)), j = rt(() => {
      const w = c.resizeOption;
      return !(!w || !w.edges);
    }), de = rt(() => ce.value && !j.value);
    ve(
      () => c.isDraggable,
      (w) => {
        h.draggable = w;
      }
    ), ve(
      () => c.static,
      () => {
        je(Ie), je(Se);
      }
    ), ve(
      () => h.draggable,
      () => {
        je(Ie);
      }
    ), ve(
      () => c.isResizable,
      (w) => {
        h.resizable = w;
      }
    ), ve(
      () => c.isBounded,
      (w) => {
        h.bounded = w;
      }
    ), ve(
      () => h.resizable,
      () => {
        je(Se);
      }
    ), ve(
      () => h.rowHeight,
      () => {
        je(te), je(S);
      }
    ), ve([() => h.cols, () => h.containerWidth], () => {
      je(Se), je(te), je(S);
    }), ve([() => c.minH, () => c.maxH, () => c.minW, () => c.maxW], () => {
      je(Se);
    }), ve(U, () => {
      je(Se), je(te);
    }), ve([() => m.margin, () => m.margin[0], () => m.margin[1]], () => {
      const w = m.margin;
      !w || w[0] === h.margin[0] && w[1] === h.margin[1] || (h.margin = w.map(Number), je(te), je(S));
    });
    function te() {
      c.x + c.w > h.cols ? (fe = 0, L = c.w > h.cols ? h.cols : c.w) : (fe = c.x, L = c.w);
      const w = Oe(fe, ue, L, N);
      h.isDragging && (w.top = h.dragging.top, U.value ? w.right = h.dragging.left : w.left = h.dragging.left), h.isResizing && (w.width = h.resizing.width, w.height = h.resizing.height);
      let H;
      h.useCssTransforms ? U.value ? H = Lo(w.top, w.right, w.width, w.height) : H = Fo(w.top, w.left, w.width, w.height) : U.value ? H = Ho(w.top, w.right, w.width, w.height) : H = jo(w.top, w.left, w.width, w.height), h.style = H;
    }
    function S() {
      const w = {};
      for (const H of ["width", "height"]) {
        const re = h.style[H].match(/^(\d+)px$/);
        if (!re)
          return;
        w[H] = re[1];
      }
      x("container-resized", c.i, c.h, c.w, w.height, w.width);
    }
    function V(w) {
      if (c.static) return;
      const H = w.type;
      if (H === "resizestart" && h.isResizing || H !== "resizestart" && !h.isResizing)
        return;
      const ie = yr(w);
      if (Ye(ie)) return;
      const { x: re, y: pe } = ie, K = { width: 0, height: 0 };
      let F;
      switch (w.edges && (h.activeResizeEdges.top = !!w.edges.top, h.activeResizeEdges.right = !!w.edges.right, h.activeResizeEdges.bottom = !!w.edges.bottom, h.activeResizeEdges.left = !!w.edges.left), H) {
        case "resizestart": {
          Se(), De = L, Re = N, F = Oe(fe, ue, L, N), K.width = F.width, K.height = F.height, h.resizing = K, h.isResizing = !0;
          break;
        }
        case "resizemove": {
          !w.edges.right && !w.edges.left && (le = re), !w.edges.top && !w.edges.bottom && (be = pe);
          const we = br(le, be, re, pe);
          U.value ? K.width = h.resizing.width - we.deltaX / h.transformScale : K.width = h.resizing.width + we.deltaX / h.transformScale, K.height = h.resizing.height + we.deltaY / h.transformScale, h.resizing = K;
          break;
        }
        case "resizeend": {
          F = Oe(fe, ue, L, N), K.width = F.width, K.height = F.height, h.resizing = { width: -1, height: -1 }, h.isResizing = !1, h.activeResizeEdges.top = !1, h.activeResizeEdges.right = !1, h.activeResizeEdges.bottom = !1, h.activeResizeEdges.left = !1;
          break;
        }
      }
      F = Ae(K.height, K.width), F.w < c.minW && (F.w = c.minW), F.w > c.maxW && (F.w = c.maxW), F.h < c.minH && (F.h = c.minH), F.h > c.maxH && (F.h = c.maxH), F.h < 1 && (F.h = 1), F.w < 1 && (F.w = 1), le = re, be = pe, (L !== F.w || N !== F.h) && x("resize", c.i, F.h, F.w, K.height, K.width), w.type === "resizeend" && (De !== L || Re !== N) && x("resized", c.i, F.h, F.w, K.height, K.width), R.emit("resizeEvent", w.type, c.i, fe, ue, F.h, F.w);
    }
    function ne(w) {
      if (c.static || h.isResizing) return;
      const H = w.type;
      if (H === "dragstart" && h.isDragging || H !== "dragstart" && !h.isDragging)
        return;
      const ie = yr(w);
      if (Ye(ie)) return;
      const { x: re, y: pe } = ie, K = w.target;
      if (!K.offsetParent) return;
      const F = { top: 0, left: 0 };
      switch (H) {
        case "dragstart": {
          xe = fe, ge = ue;
          const Me = K.offsetParent.getBoundingClientRect(), Be = K.getBoundingClientRect(), $e = Be.left / h.transformScale, et = Me.left / h.transformScale, at = Be.right / h.transformScale, Ue = Me.right / h.transformScale, Ke = Be.top / h.transformScale, qe = Me.top / h.transformScale;
          U.value ? F.left = (at - Ue) * -1 : F.left = $e - et, F.top = Ke - qe, h.dragging = F, h.isDragging = !0;
          break;
        }
        case "dragmove": {
          const Me = br(q, ye, re, pe);
          if (U.value ? F.left = h.dragging.left - Me.deltaX / h.transformScale : F.left = h.dragging.left + Me.deltaX / h.transformScale, F.top = h.dragging.top + Me.deltaY / h.transformScale, h.bounded) {
            const Be = K.offsetParent.clientHeight - Ee(c.h, h.rowHeight, h.margin[1]);
            F.top = D(F.top, 0, Be);
            const $e = Ze(), et = h.containerWidth - Ee(c.w, $e, h.margin[0]);
            F.left = D(F.left, 0, et);
          }
          h.dragging = F;
          break;
        }
        case "dragend": {
          const Me = K.offsetParent.getBoundingClientRect(), Be = K.getBoundingClientRect(), $e = Be.left / h.transformScale, et = Me.left / h.transformScale, at = Be.right / h.transformScale, Ue = Me.right / h.transformScale, Ke = Be.top / h.transformScale, qe = Me.top / h.transformScale;
          U.value ? F.left = (at - Ue) * -1 : F.left = $e - et, F.top = Ke - qe, h.dragging = { top: -1, left: -1 }, h.isDragging = !1;
          break;
        }
      }
      let we;
      U.value, we = Ge(F.top, F.left), q = re, ye = pe, (fe !== we.x || ue !== we.y) && x("move", c.i, we.x, we.y), w.type === "dragend" && (xe !== fe || ge !== ue) && x("moved", c.i, we.x, we.y), R.emit("dragEvent", w.type, c.i, we.x, we.y, N, L);
    }
    function Oe(w, H, ie, re) {
      const pe = Ze();
      let K;
      return U.value ? K = {
        right: Math.round(pe * w + (w + 1) * h.margin[0]),
        top: Math.round(h.rowHeight * H + (H + 1) * h.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: ie === 1 / 0 ? ie : Math.round(pe * ie + Math.max(0, ie - 1) * h.margin[0]),
        height: re === 1 / 0 ? re : Math.round(h.rowHeight * re + Math.max(0, re - 1) * h.margin[1])
      } : K = {
        left: Math.round(pe * w + (w + 1) * h.margin[0]),
        top: Math.round(h.rowHeight * H + (H + 1) * h.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: ie === 1 / 0 ? ie : Math.round(pe * ie + Math.max(0, ie - 1) * h.margin[0]),
        height: re === 1 / 0 ? re : Math.round(h.rowHeight * re + Math.max(0, re - 1) * h.margin[1])
      }, K;
    }
    function Ge(w, H) {
      const ie = Ze();
      let re = Math.round((H - h.margin[0]) / (ie + h.margin[0])), pe = Math.round((w - h.margin[1]) / (h.rowHeight + h.margin[1]));
      return re = Math.max(Math.min(re, h.cols - L), 0), pe = Math.max(Math.min(pe, h.maxRows - N), 0), { x: re, y: pe };
    }
    function Ze() {
      return (h.containerWidth - h.margin[0] * (h.cols + 1)) / h.cols;
    }
    function Ee(w, H, ie) {
      return Number.isFinite(w) ? Math.round(H * w + Math.max(0, w - 1) * ie) : w;
    }
    function D(w, H, ie) {
      return Math.max(Math.min(w, ie), H);
    }
    function Ae(w, H, ie = !1) {
      const re = Ze();
      let pe = Math.round((H + h.margin[0]) / (re + h.margin[0])), K = 0;
      return ie ? K = Math.ceil((w + h.margin[1]) / (h.rowHeight + h.margin[1])) : K = Math.round((w + h.margin[1]) / (h.rowHeight + h.margin[1])), pe = Math.max(Math.min(pe, h.cols - fe), 0), K = Math.max(Math.min(K, h.maxRows - ue), 0), { w: pe, h: K };
    }
    function Te(w, H) {
      h.containerWidth = w;
    }
    function Ce() {
      te();
    }
    function ke() {
      !E.value && y.value && (E.value = Dn(y.value), h.useStyleCursor || E.value.styleCursor(!1));
    }
    const He = Rn(ne);
    function Ie() {
      if (ke(), !!E.value)
        if (h.draggable && !c.static) {
          const w = {
            ignoreFrom: c.dragIgnoreFrom,
            allowFrom: c.dragAllowFrom,
            ...c.dragOption
          };
          E.value.draggable(w), z || (z = !0, E.value.on("dragstart dragmove dragend", (H) => {
            H.type === "dragmove" ? He(H) : ne(H);
          }));
        } else
          E.value.draggable({ enabled: !1 });
    }
    const Qe = Rn(V);
    function Se() {
      if (ke(), !!E.value)
        if (h.resizable && !c.static) {
          const w = Oe(0, 0, c.maxW, c.maxH), H = Oe(0, 0, c.minW, c.minH), ie = {
            edges: {
              left: U.value ? `.${M.value[0]}` : !1,
              right: U.value ? !1 : `.${M.value[0]}`,
              bottom: `.${M.value[0]}`,
              top: !1
            },
            ignoreFrom: c.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: H.height * h.transformScale,
                width: H.width * h.transformScale
              },
              max: {
                height: w.height * h.transformScale,
                width: w.width * h.transformScale
              }
            },
            ...c.resizeOption
          };
          c.preserveAspectRatio && (ie.modifiers = [Dn.modifiers.aspectRatio({ ratio: "preserve" })]), E.value.resizable(ie);
          const re = ie.edges || {};
          h.enabledResizeEdges.top = !!re.top, h.enabledResizeEdges.right = !!re.right, h.enabledResizeEdges.bottom = !!re.bottom, h.enabledResizeEdges.left = !!re.left, se || (se = !0, E.value.on("resizestart resizemove resizeend", (pe) => {
            pe.type === "resizemove" ? Qe(pe) : V(pe);
          }));
        } else
          E.value.resizable({ enabled: !1 }), h.enabledResizeEdges.top = !1, h.enabledResizeEdges.right = !1, h.enabledResizeEdges.bottom = !1, h.enabledResizeEdges.left = !1;
    }
    return (w, H) => (ot(), ct("section", {
      ref_key: "wrapper",
      ref: y,
      class: Tt(Rt.value),
      style: jr(h.style)
    }, [
      un(w.$slots, "default"),
      de.value ? (ot(), ct("span", {
        key: 0,
        class: Tt(M.value)
      }, null, 2)) : jt("", !0),
      ce.value ? (ot(), ct("div", {
        key: 1,
        class: Tt([
          "vgl-item__edge vgl-item__edge--top",
          [{ "is-enabled": h.enabledResizeEdges.top, "is-active": h.activeResizeEdges.top }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : jt("", !0),
      ce.value ? (ot(), ct("div", {
        key: 2,
        class: Tt([
          "vgl-item__edge vgl-item__edge--right",
          [{ "is-enabled": h.enabledResizeEdges.right, "is-active": h.activeResizeEdges.right }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : jt("", !0),
      ce.value ? (ot(), ct("div", {
        key: 3,
        class: Tt([
          "vgl-item__edge vgl-item__edge--bottom",
          [{ "is-enabled": h.enabledResizeEdges.bottom, "is-active": h.activeResizeEdges.bottom }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : jt("", !0),
      ce.value ? (ot(), ct("div", {
        key: 4,
        class: Tt([
          "vgl-item__edge vgl-item__edge--left",
          [{ "is-enabled": h.enabledResizeEdges.left, "is-active": h.activeResizeEdges.left }]
        ]),
        "aria-hidden": "true"
      }, null, 2)) : jt("", !0)
    ], 6));
  }
}), yt = typeof window < "u";
var Sr;
yt && (Sr = window == null ? void 0 : window.navigator) != null && Sr.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function zr(s) {
  return s != null;
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
const ea = yt && ("ontouchstart" in window || na() > 0), ta = ea ? "pointerdown" : "click";
function na() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function ra(s, d, p = window.Event) {
  const { type: c, bubbles: x = !1, cancelable: m = !1, ...R } = d;
  if (!zr(c) || c === "") return !1;
  let E;
  return zr(p) ? E = new p(c, { bubbles: x, cancelable: m }) : (E = document.createEvent("HTMLEvents"), E.initEvent(c, x, m)), Object.assign(E, R), s.dispatchEvent(E);
}
const ia = "clickoutside", oa = /* @__PURE__ */ new Set();
yt && document.addEventListener(
  ta,
  (s) => {
    const d = s.target, p = s.composedPath && s.composedPath();
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
if (yt) {
  for (const s of aa)
    if (s[1] in document) {
      ln = s;
      break;
    }
}
rt(() => !1);
const sa = /* @__PURE__ */ new Set(), la = /* @__PURE__ */ new WeakMap();
if (yt && ln) {
  const s = ln[2], d = ln[4];
  document.addEventListener(
    d,
    () => {
      if (sa.forEach((p) => {
        p.value = !1;
      }), document[s]) {
        const p = la.get(document[s]);
        p && (p.value = !0);
      }
    },
    !1
  );
}
const Jr = /* @__PURE__ */ new Map();
Jr.set("x", 0);
Jr.set("y", 0);
var vt = [], ca = function() {
  return vt.some(function(s) {
    return s.activeTargets.length > 0;
  });
}, ua = function() {
  return vt.some(function(s) {
    return s.skippedTargets.length > 0;
  });
}, Tr = "ResizeObserver loop completed with undelivered notifications.", fa = function() {
  var s;
  typeof ErrorEvent == "function" ? s = new ErrorEvent("error", {
    message: Tr
  }) : (s = document.createEvent("Event"), s.initEvent("error", !1, !1), s.message = Tr), window.dispatchEvent(s);
}, Xt;
(function(s) {
  s.BORDER_BOX = "border-box", s.CONTENT_BOX = "content-box", s.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Xt || (Xt = {}));
var mt = function(s) {
  return Object.freeze(s);
}, da = /* @__PURE__ */ function() {
  function s(d, p) {
    this.inlineSize = d, this.blockSize = p, mt(this);
  }
  return s;
}(), Zr = function() {
  function s(d, p, c, x) {
    return this.x = d, this.y = p, this.width = c, this.height = x, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, mt(this);
  }
  return s.prototype.toJSON = function() {
    var d = this, p = d.x, c = d.y, x = d.top, m = d.right, R = d.bottom, E = d.left, h = d.width, z = d.height;
    return { x: p, y: c, top: x, right: m, bottom: R, left: E, width: h, height: z };
  }, s.fromRect = function(d) {
    return new s(d.x, d.y, d.width, d.height);
  }, s;
}(), In = function(s) {
  return s instanceof SVGElement && "getBBox" in s;
}, Qr = function(s) {
  if (In(s)) {
    var d = s.getBBox(), p = d.width, c = d.height;
    return !p && !c;
  }
  var x = s, m = x.offsetWidth, R = x.offsetHeight;
  return !(m || R || s.getClientRects().length);
}, kr = function(s) {
  var d;
  if (s instanceof Element)
    return !0;
  var p = (d = s == null ? void 0 : s.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView;
  return !!(p && s instanceof p.Element);
}, pa = function(s) {
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
}, qt = typeof window < "u" ? window : {}, on = /* @__PURE__ */ new WeakMap(), _r = /auto|scroll/, ha = /^tb|vertical/, ga = /msie|trident/i.test(qt.navigator && qt.navigator.userAgent), it = function(s) {
  return parseFloat(s || "0");
}, _t = function(s, d, p) {
  return s === void 0 && (s = 0), d === void 0 && (d = 0), p === void 0 && (p = !1), new da((p ? d : s) || 0, (p ? s : d) || 0);
}, Rr = mt({
  devicePixelContentBoxSize: _t(),
  borderBoxSize: _t(),
  contentBoxSize: _t(),
  contentRect: new Zr(0, 0, 0, 0)
}), ei = function(s, d) {
  if (d === void 0 && (d = !1), on.has(s) && !d)
    return on.get(s);
  if (Qr(s))
    return on.set(s, Rr), Rr;
  var p = getComputedStyle(s), c = In(s) && s.ownerSVGElement && s.getBBox(), x = !ga && p.boxSizing === "border-box", m = ha.test(p.writingMode || ""), R = !c && _r.test(p.overflowY || ""), E = !c && _r.test(p.overflowX || ""), h = c ? 0 : it(p.paddingTop), z = c ? 0 : it(p.paddingRight), se = c ? 0 : it(p.paddingBottom), q = c ? 0 : it(p.paddingLeft), ye = c ? 0 : it(p.borderTopWidth), le = c ? 0 : it(p.borderRightWidth), be = c ? 0 : it(p.borderBottomWidth), De = c ? 0 : it(p.borderLeftWidth), Re = q + z, xe = h + se, ge = De + le, fe = ye + be, ue = E ? s.offsetHeight - fe - s.clientHeight : 0, L = R ? s.offsetWidth - ge - s.clientWidth : 0, N = x ? Re + ge : 0, y = x ? xe + fe : 0, oe = c ? c.width : it(p.width) - N - L, A = c ? c.height : it(p.height) - y - ue, Z = oe + Re + L + ge, P = A + xe + ue + fe, B = mt({
    devicePixelContentBoxSize: _t(Math.round(oe * devicePixelRatio), Math.round(A * devicePixelRatio), m),
    borderBoxSize: _t(Z, P, m),
    contentBoxSize: _t(oe, A, m),
    contentRect: new Zr(q, h, oe, A)
  });
  return on.set(s, B), B;
}, ti = function(s, d, p) {
  var c = ei(s, p), x = c.borderBoxSize, m = c.contentBoxSize, R = c.devicePixelContentBoxSize;
  switch (d) {
    case Xt.DEVICE_PIXEL_CONTENT_BOX:
      return R;
    case Xt.BORDER_BOX:
      return x;
    default:
      return m;
  }
}, va = /* @__PURE__ */ function() {
  function s(d) {
    var p = ei(d);
    this.target = d, this.contentRect = p.contentRect, this.borderBoxSize = mt([p.borderBoxSize]), this.contentBoxSize = mt([p.contentBoxSize]), this.devicePixelContentBoxSize = mt([p.devicePixelContentBoxSize]);
  }
  return s;
}(), ni = function(s) {
  if (Qr(s))
    return 1 / 0;
  for (var d = 0, p = s.parentNode; p; )
    d += 1, p = p.parentNode;
  return d;
}, ma = function() {
  var s = 1 / 0, d = [];
  vt.forEach(function(m) {
    if (m.activeTargets.length !== 0) {
      var R = [];
      m.activeTargets.forEach(function(E) {
        var h = new va(E.target), z = ni(E.target);
        R.push(h), E.lastReportedSize = ti(E.target, E.observedBox), z < s && (s = z);
      }), d.push(function() {
        m.callback.call(m.observer, R, m.observer);
      }), m.activeTargets.splice(0, m.activeTargets.length);
    }
  });
  for (var p = 0, c = d; p < c.length; p++) {
    var x = c[p];
    x();
  }
  return s;
}, Pr = function(s) {
  vt.forEach(function(d) {
    d.activeTargets.splice(0, d.activeTargets.length), d.skippedTargets.splice(0, d.skippedTargets.length), d.observationTargets.forEach(function(p) {
      p.isActive() && (ni(p.target) > s ? d.activeTargets.push(p) : d.skippedTargets.push(p));
    });
  });
}, ya = function() {
  var s = 0;
  for (Pr(s); ca(); )
    s = ma(), Pr(s);
  return ua() && fa(), s > 0;
}, Tn, ri = [], ba = function() {
  return ri.splice(0).forEach(function(s) {
    return s();
  });
}, xa = function(s) {
  if (!Tn) {
    var d = 0, p = document.createTextNode(""), c = { characterData: !0 };
    new MutationObserver(function() {
      return ba();
    }).observe(p, c), Tn = function() {
      p.textContent = "".concat(d ? d-- : d++);
    };
  }
  ri.push(s), Tn();
}, wa = function(s) {
  xa(function() {
    requestAnimationFrame(s);
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
], Dr = function(s) {
  return s === void 0 && (s = 0), Date.now() + s;
}, kn = !1, Ta = function() {
  function s() {
    var d = this;
    this.stopped = !0, this.listener = function() {
      return d.schedule();
    };
  }
  return s.prototype.run = function(d) {
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
  }, s.prototype.schedule = function() {
    this.stop(), this.run();
  }, s.prototype.observe = function() {
    var d = this, p = function() {
      return d.observer && d.observer.observe(document.body, za);
    };
    document.body ? p() : qt.addEventListener("DOMContentLoaded", p);
  }, s.prototype.start = function() {
    var d = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Mr.forEach(function(p) {
      return qt.addEventListener(p, d.listener, !0);
    }));
  }, s.prototype.stop = function() {
    var d = this;
    this.stopped || (this.observer && this.observer.disconnect(), Mr.forEach(function(p) {
      return qt.removeEventListener(p, d.listener, !0);
    }), this.stopped = !0);
  }, s;
}(), On = new Ta(), Or = function(s) {
  !cn && s > 0 && On.start(), cn += s, !cn && On.stop();
}, ka = function(s) {
  return !In(s) && !pa(s) && getComputedStyle(s).display === "inline";
}, _a = function() {
  function s(d, p) {
    this.target = d, this.observedBox = p || Xt.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return s.prototype.isActive = function() {
    var d = ti(this.target, this.observedBox, !0);
    return ka(this.target) && (this.lastReportedSize = d), this.lastReportedSize.inlineSize !== d.inlineSize || this.lastReportedSize.blockSize !== d.blockSize;
  }, s;
}(), Ra = /* @__PURE__ */ function() {
  function s(d, p) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = d, this.callback = p;
  }
  return s;
}(), an = /* @__PURE__ */ new WeakMap(), Cr = function(s, d) {
  for (var p = 0; p < s.length; p += 1)
    if (s[p].target === d)
      return p;
  return -1;
}, sn = function() {
  function s() {
  }
  return s.connect = function(d, p) {
    var c = new Ra(d, p);
    an.set(d, c);
  }, s.observe = function(d, p, c) {
    var x = an.get(d), m = x.observationTargets.length === 0;
    Cr(x.observationTargets, p) < 0 && (m && vt.push(x), x.observationTargets.push(new _a(p, c && c.box)), Or(1), On.schedule());
  }, s.unobserve = function(d, p) {
    var c = an.get(d), x = Cr(c.observationTargets, p), m = c.observationTargets.length === 1;
    x >= 0 && (m && vt.splice(vt.indexOf(c), 1), c.observationTargets.splice(x, 1), Or(-1));
  }, s.disconnect = function(d) {
    var p = this, c = an.get(d);
    c.observationTargets.slice().forEach(function(x) {
      return p.unobserve(d, x.target);
    }), c.activeTargets.splice(0, c.activeTargets.length);
  }, s;
}(), Pa = function() {
  function s(d) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof d != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    sn.connect(this, d);
  }
  return s.prototype.observe = function(d, p) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!kr(d))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    sn.observe(this, d, p);
  }, s.prototype.unobserve = function(d) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!kr(d))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    sn.unobserve(this, d);
  }, s.prototype.disconnect = function() {
    sn.disconnect(this);
  }, s.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, s;
}();
const fn = /* @__PURE__ */ new WeakMap();
function Ma(s) {
  for (let d = 0, p = s.length; d < p; ++d) {
    const c = s[d], x = fn.get(c.target);
    typeof x == "function" && x(c);
  }
}
const ii = new (yt && window.ResizeObserver || Pa)(
  Ma
);
function Da(s, d) {
  fn.set(s, d), ii.observe(s);
}
function Oa(s) {
  fn.has(s) && (ii.unobserve(s), fn.delete(s));
}
function Ca() {
  return {
    observeResize: Da,
    unobserveResize: Oa
  };
}
const Aa = Je(!1);
rt(() => Aa.value);
const Ar = "__theme_style__", _n = "__theme_observer__", Ir = Nt(/* @__PURE__ */ new Map()), Br = /* @__PURE__ */ new Map();
ve(Ir, () => {
  if (!yt) return;
  Br.clear();
  const s = document.head.querySelector(`#${Ar}`);
  s && document.head.removeChild(s);
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
  setup(s, { expose: d, emit: p }) {
    const c = s, x = p, m = Nt({
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
    }), R = /* @__PURE__ */ new Map(), E = Je(c.layout), h = Je(), { observeResize: z, unobserveResize: se } = Ca(), q = Mo();
    q.on("resizeEvent", ye), q.on("dragEvent", le), Fr(() => {
      x("layout-before-mount", E.value);
    }), An(() => {
      x("layout-mounted", E.value), ht(() => {
        Wo(E.value), m.originalLayout = E.value, ht(() => {
          A(), h.value && z(h.value, Do(fe, 16)), kt(E.value, c.verticalCompact), x("layout-updated", E.value), ge(), fe();
        });
      });
    }), Lr(() => {
      q.clearAll(), h.value && se(h.value);
    });
    function ye(P, B, J, ee, ae, he) {
      y(P, B, J, ee, ae, he);
    }
    function le(P, B, J, ee, ae, he) {
      N(P, B, J, ee, ae, he);
    }
    ve(
      () => m.width,
      (P, B) => {
        ht(() => {
          q.emit("updateWidth", P), B === -1 && ht(() => {
            x("layout-ready", E.value);
          }), ge();
        });
      }
    ), ve(
      () => [c.layout, c.layout.length],
      () => {
        E.value = c.layout, xe();
      }
    ), ve(
      () => c.colNum,
      (P) => {
        q.emit("setColNum", P);
      }
    ), ve(
      () => c.rowHeight,
      (P) => {
        q.emit("setRowHeight", P);
      }
    ), ve(
      () => c.isDraggable,
      (P) => {
        q.emit("setDraggable", P);
      }
    ), ve(
      () => c.isResizable,
      (P) => {
        q.emit("setResizable", P);
      }
    ), ve(
      () => c.isBounded,
      (P) => {
        q.emit("setBounded", P);
      }
    ), ve(
      () => c.transformScale,
      (P) => {
        q.emit("setTransformScale", P);
      }
    ), ve(
      () => c.responsive,
      (P) => {
        P || (x("update:layout", m.originalLayout), q.emit("setColNum", c.colNum)), fe();
      }
    ), ve(
      () => c.maxRows,
      (P) => {
        q.emit("setMaxRows", P);
      }
    ), ve([() => c.margin, () => c.margin[1]], ge), pr(
      qr,
      Nt({
        ...hr(c),
        ...hr(m),
        increaseItem: be,
        decreaseItem: De
      })
    ), pr(Nr, q), d({ state: m, getItem: Re, resizeEvent: y, dragEvent: N, layoutUpdate: xe });
    function be(P) {
      R.set(P.i, P);
    }
    function De(P) {
      R.delete(P.i);
    }
    function Re(P) {
      return R.get(P);
    }
    function xe() {
      if (!Ye(E.value) && !Ye(m.originalLayout)) {
        if (E.value.length !== m.originalLayout.length) {
          const P = Z(E.value, m.originalLayout);
          if (P.length > 0)
            if (E.value.length > m.originalLayout.length)
              m.originalLayout = m.originalLayout.concat(P);
            else {
              const B = new Set(P.map((J) => J.i));
              m.originalLayout = m.originalLayout.filter((J) => !B.has(J.i));
            }
          m.lastLayoutLength = E.value.length, A();
        }
        kt(E.value, c.verticalCompact), q.emit("updateWidth", m.width), ge(), x("layout-updated", E.value);
      }
    }
    function ge() {
      m.mergedStyle = {
        height: ue()
      };
    }
    function fe() {
      h.value && (m.width = h.value.offsetWidth), q.emit("resizeEvent");
    }
    function ue() {
      if (!c.autoSize) return;
      const P = parseFloat(c.margin[1]);
      return Co(E.value) * (c.rowHeight + P) + P + "px";
    }
    let L;
    function N(P, B, J, ee, ae, he) {
      let X = vr(E.value, B);
      Ye(X) && (X = { h: 0, w: 0, x: 0, y: 0, i: "" }), P === "dragstart" && !c.verticalCompact && (L = E.value.reduce(
        (We, { i: _e, x: ce, y: U }) => ({
          ...We,
          [_e]: { x: ce, y: U }
        }),
        {}
      )), P === "dragmove" || P === "dragstart" ? (m.placeholder.i = B, m.placeholder.x = X.x, m.placeholder.y = X.y, m.placeholder.w = he, m.placeholder.h = ae, ht(() => {
        m.isDragging = !0;
      }), q.emit("updateWidth", m.width)) : ht(() => {
        m.isDragging = !1;
      }), E.value = Mn(E.value, X, J, ee, !0, c.preventCollision), c.restoreOnDrag ? (X.static = !0, kt(E.value, c.verticalCompact, L), X.static = !1) : kt(E.value, c.verticalCompact), q.emit("compact"), ge(), P === "dragend" && (L = void 0, x("layout-updated", E.value));
    }
    function y(P, B, J, ee, ae, he) {
      let X = vr(E.value, B);
      Ye(X) && (X = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let We;
      if (c.preventCollision) {
        const _e = Yr(E.value, { ...X, w: he, h: ae }).filter(
          (ce) => ce.i !== X.i
        );
        if (We = _e.length > 0, We) {
          let ce = 1 / 0, U = 1 / 0;
          _e.forEach((Ve) => {
            Ve.x > X.x && (ce = Math.min(ce, Ve.x)), Ve.y > X.y && (U = Math.min(U, Ve.y));
          }), Number.isFinite(ce) && (X.w = ce - X.x), Number.isFinite(U) && (X.h = U - X.y);
        }
      }
      We || (X.w = he, X.h = ae), P === "resizestart" || P === "resizemove" ? (m.placeholder.i = B, m.placeholder.x = J, m.placeholder.y = ee, m.placeholder.w = X.w, m.placeholder.h = X.h, ht(() => {
        m.isDragging = !0;
      }), q.emit("updateWidth", m.width)) : P && ht(() => {
        m.isDragging = !1;
      }), c.responsive && oe(), kt(E.value, c.verticalCompact), q.emit("compact"), ge(), P === "resizeend" && x("layout-updated", E.value);
    }
    function oe() {
      const P = Xo(c.breakpoints, m.width);
      if (P === m.lastBreakpoint)
        return;
      const B = Ur(P, c.cols);
      !Ye(m.lastBreakpoint) && !m.layouts[m.lastBreakpoint] && (m.layouts[m.lastBreakpoint] = Pn(E.value));
      const J = Yo(
        m.originalLayout,
        m.layouts,
        c.breakpoints,
        P,
        m.lastBreakpoint,
        B,
        c.verticalCompact
      );
      m.layouts[P] = J, m.lastBreakpoint !== P && x("breakpoint-changed", P, J), E.value = J, x("update:layout", J), m.lastBreakpoint = P, q.emit("setColNum", B);
    }
    function A() {
      m.layouts = Object.assign({}, c.responsiveLayouts);
    }
    function Z(P, B) {
      const J = new Set(B.map((X) => X.i)), ee = new Set(P.map((X) => X.i)), ae = P.filter((X) => !J.has(X.i)), he = B.filter((X) => !ee.has(X.i));
      return ae.concat(he);
    }
    return (P, B) => (ot(), ct("div", {
      ref_key: "wrapper",
      ref: h,
      class: "vgl-layout",
      style: jr(m.mergedStyle)
    }, [
      P.$slots.default ? un(P.$slots, "default", { key: 0 }) : (ot(!0), ct(yo, { key: 1 }, bo(E.value, (J) => (ot(), xo(Er, wo({
        key: J.i,
        ref_for: !0
      }, J), {
        default: Eo(() => [
          un(P.$slots, "item", { item: J })
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
function Ba(s, d = {}, p) {
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
  }, ...d }, { draggable: m, resizable: R, useCssTransforms: E, dragOptions: h, resizeOptions: z } = x, se = (M, j) => s.getAttribute(`data-${M}`) || j, q = (M, j) => {
    s.setAttribute(`data-${M}`, j.toString());
  }, ye = s.getBoundingClientRect(), le = x.width || ye.width || 0, be = x.height || ye.height || 0;
  q("x", x.x || 0), q("y", x.y || 0), q("width", le.toString()), q("height", be.toString());
  const De = se("x", "0"), Re = se("y", "0"), xe = se("width", le.toString()), ge = se("height", be.toString()), fe = (M) => typeof M == "string" && /(px|%|vw|vh|rem|em|calc\()/i.test(M), ue = (M, j, de) => typeof M == "number" ? M : fe(M) ? U(M, j, de === "x" ? "width" : "height") : parseFloat(M) || 0;
  let L = ue(De, s, "x"), N = ue(Re, s, "y"), y = U(xe, s, "width"), oe = U(ge, s, "height");
  const A = /* @__PURE__ */ new Map();
  let Z = !1;
  const P = (M) => {
    if (s instanceof HTMLElement) {
      const j = getComputedStyle(s);
      return (j.position === "absolute" || j.position === "fixed") && j[M] !== "auto" && j[M] !== "";
    }
    return !1;
  }, B = () => P("right"), J = () => P("left"), ee = () => P("top"), ae = () => P("bottom"), he = (M) => {
    ["top", "right", "bottom", "left"].forEach((j) => {
      const de = A.get(j);
      de && (de.style.backgroundColor = M[j] ? "rgba(29, 98, 236, 1)" : "rgba(29, 98, 236, 0)");
    });
  }, X = () => {
    A.forEach((M) => {
      M.style.backgroundColor = "rgba(29, 98, 236, 0)";
    });
  }, We = () => {
    const M = (z == null ? void 0 : z.edges) || {}, j = (z == null ? void 0 : z.margin) ?? 4, de = {
      position: "absolute",
      backgroundColor: "rgba(29, 98, 236, 0)",
      // 初始透明
      pointerEvents: "auto",
      // 设置为auto以支持hover效果
      transition: "background-color 0.1s ease"
    }, te = (S) => {
      const V = () => {
        S.style.backgroundColor = "rgba(29, 98, 236, 1)";
      }, ne = () => {
        Z || (S.style.backgroundColor = "rgba(29, 98, 236, 0)");
      };
      S.addEventListener("mouseenter", V), S.addEventListener("mouseleave", ne), S._mouseEnterListener = V, S._mouseLeaveListener = ne;
    };
    if (M.top) {
      const S = document.createElement("div");
      Object.assign(S.style, de, {
        top: `-${j}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), te(S), s.appendChild(S), A.set("top", S);
    }
    if (M.right) {
      const S = document.createElement("div");
      Object.assign(S.style, de, {
        top: "0",
        right: `-${j}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), te(S), s.appendChild(S), A.set("right", S);
    }
    if (M.bottom) {
      const S = document.createElement("div");
      Object.assign(S.style, de, {
        bottom: `-${j}px`,
        left: "0",
        width: "100%",
        height: "2px",
        cursor: "row-resize",
        zIndex: "10"
      }), te(S), s.appendChild(S), A.set("bottom", S);
    }
    if (M.left) {
      const S = document.createElement("div");
      Object.assign(S.style, de, {
        top: "0",
        left: `-${j}px`,
        width: "2px",
        height: "100%",
        cursor: "col-resize",
        zIndex: "10"
      }), te(S), s.appendChild(S), A.set("left", S);
    }
  }, _e = (M) => {
    A.forEach((j) => {
      j.style.pointerEvents = "auto", j.style.display = "block";
    });
  }, ce = Dn(s).styleCursor(!1);
  if (m) {
    const M = (V) => {
      var ne;
      R && z && ce.resizable(!1), (ne = p == null ? void 0 : p.onDrag) == null || ne.call(p, {
        type: "dragstart",
        top: N,
        left: L,
        deltaX: 0,
        deltaY: 0
      });
    }, j = (V) => {
      if (L += V.dx, N += V.dy, V.target instanceof HTMLElement) {
        const ne = getComputedStyle(V.target), Oe = ne.position === "absolute" || ne.position === "fixed";
        E && !Oe ? V.target.style.transform = `translate(${L}px, ${N}px)` : Oe ? (B(), J(), ee(), ae(), J() ? V.target.style.left = `${L}px` : B() ? B() && (V.target.style.right = `${-L}px`) : V.target.style.left = `${L}px`, ee() ? V.target.style.top = `${N}px` : ae() ? ae() && (V.target.style.bottom = `${-N}px`) : V.target.style.top = `${N}px`) : V.target.style.transform = `translate(${L}px, ${N}px)`;
      }
      V.target._dataUpdateTimer || (V.target._dataUpdateTimer = setTimeout(() => {
        V.target instanceof Element && (V.target.setAttribute("data-x", L.toString()), V.target.setAttribute("data-y", N.toString())), delete V.target._dataUpdateTimer;
      }, 50)), p != null && p.onDrag && requestAnimationFrame(() => {
        var ne;
        (ne = p.onDrag) == null || ne.call(p, {
          type: "dragmove",
          top: N,
          left: L,
          deltaX: V.dx,
          deltaY: V.dy
        });
      });
    }, de = (V) => {
      var ne;
      R && z && ce.resizable(!0), V.target instanceof Element && (V.target.setAttribute("data-x", L.toString()), V.target.setAttribute("data-y", N.toString())), (ne = p == null ? void 0 : p.onDrag) == null || ne.call(p, {
        type: "dragend",
        top: N,
        left: L,
        deltaX: V.dx,
        deltaY: V.dy
      });
    }, te = Rn(
      j,
      (h == null ? void 0 : h.threshold) ?? Ia
    ), S = {
      enabled: !0,
      allowFrom: h == null ? void 0 : h.allowFrom,
      ignoreFrom: h == null ? void 0 : h.ignoreFrom,
      modifiers: (h == null ? void 0 : h.modifiers) || [],
      listeners: {
        start: M,
        move: te,
        end: de
      }
    };
    h != null && h.startAxis && (S.startAxis = h.startAxis), h != null && h.lockAxis && (S.lockAxis = h.lockAxis), (h == null ? void 0 : h.max) !== void 0 && (S.max = h.max), (h == null ? void 0 : h.maxPerElement) !== void 0 && (S.maxPerElement = h.maxPerElement), ce.draggable(S);
  }
  function U(M, j, de = "width") {
    if (typeof M == "number")
      return M;
    if (typeof M == "string" && M.endsWith("px"))
      return parseFloat(M);
    const te = document.createElement("div");
    Object.assign(te.style, {
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
      width: de === "width" ? typeof M == "string" ? M : `${M}px` : "auto",
      height: de === "height" ? typeof M == "string" ? M : `${M}px` : "auto"
    });
    try {
      const S = j.parentNode;
      (S instanceof Node ? S : document.body).appendChild(te);
      const ne = getComputedStyle(te), Ge = parseFloat(ne[de === "width" ? "width" : "height"]);
      return isNaN(Ge) || Ge <= 0 ? 100 : Ge;
    } catch {
      return 100;
    } finally {
      te.parentNode && te.parentNode.removeChild(te);
    }
  }
  if (R && z) {
    We();
    let M = 10, j = 10, de = 1 / 0, te = 1 / 0, S = y / oe;
    const V = (D) => {
      var Te, Ce, ke, He;
      _e(), Z = !0, m && h && ce.draggable(!1);
      const Ae = {
        top: !!((Te = D.edges) != null && Te.top),
        right: !!((Ce = D.edges) != null && Ce.right),
        bottom: !!((ke = D.edges) != null && ke.bottom),
        left: !!((He = D.edges) != null && He.left)
      };
      he(Ae), M = U((z == null ? void 0 : z.minWidth) ?? 10, D.target, "width"), j = U((z == null ? void 0 : z.minHeight) ?? 10, D.target, "height"), de = U((z == null ? void 0 : z.maxWidth) ?? 1 / 0, D.target, "width"), te = U((z == null ? void 0 : z.maxHeight) ?? 1 / 0, D.target, "height"), S = y / oe, p != null && p.onResize && requestAnimationFrame(() => {
        var Ie;
        (Ie = p.onResize) == null || Ie.call(p, {
          type: "resizestart",
          width: y,
          height: oe,
          top: N,
          left: L,
          deltaWidth: 0,
          deltaHeight: 0,
          edges: Ae
        });
      });
    }, ne = (D) => {
      var pe, K, F, we, Me, Be, $e, et, at, Ue, Ke, qe, Pt, bt, Mt, xt, wt, Dt, Ot, Yt, Et, St, Vt, Gt;
      const Ae = B(), Te = J(), Ce = ee(), ke = ae(), He = D.target instanceof HTMLElement ? getComputedStyle(D.target) : null, Ie = ((pe = D.deltaRect) == null ? void 0 : pe.width) || 0, Qe = ((K = D.deltaRect) == null ? void 0 : K.height) || 0;
      let Se = Ie, w = Qe;
      z != null && z.preserveAspectRatio && !Ae && !Te && !Ce && !ke && ((F = D.edges) != null && F.left || (we = D.edges) != null && we.right ? w = Ie / S : ((Me = D.edges) != null && Me.top || (Be = D.edges) != null && Be.bottom) && (Se = Qe * S));
      let H = y + Se, ie = oe + w;
      if (H = Math.max(M, Math.min(de, H)), ie = Math.max(j, Math.min(te, ie)), Se = H - y, w = ie - oe, Se === 0 && w === 0)
        return;
      if ((Ae || Te || Ce || ke) && He) {
        const ze = D.target.getBoundingClientRect();
        (Math.abs(ze.width - y) > 1 || Math.abs(ze.height - oe) > 1) && (y = ze.width, oe = ze.height);
      }
      if (!Ae && !Te && !Ce && !ke && (($e = D.edges) != null && $e.top && (N -= w), (et = D.edges) != null && et.right, (at = D.edges) != null && at.bottom, (Ue = D.edges) != null && Ue.left && (L -= Se)), y = H, oe = ie, ((Ke = D.edges) != null && Ke.left || (qe = D.edges) != null && qe.right) && (D.target.style.width = `${y}px`), ((Pt = D.edges) != null && Pt.top || (bt = D.edges) != null && bt.bottom) && (D.target.style.height = `${oe}px`), (Mt = D.edges) != null && Mt.top && ke) {
        const ze = (xt = D.target.parentElement) == null ? void 0 : xt.getBoundingClientRect();
        if (ze) {
          const Ne = parseInt(getComputedStyle(D.target).bottom || "0", 10), tt = ze.height - oe - Ne;
          D.target.style.top = `${tt}px`;
        }
      }
      if ((wt = D.edges) != null && wt.left && Ae) {
        const ze = (Dt = D.target.parentElement) == null ? void 0 : Dt.getBoundingClientRect();
        if (ze) {
          const Ne = parseInt(getComputedStyle(D.target).right || "0", 10), tt = ze.width - y - Ne;
          D.target.style.left = `${tt}px`;
        }
      }
      if ((Ot = D.edges) != null && Ot.right && Te) {
        const ze = parseInt(getComputedStyle(D.target).left || "0", 10);
        D.target.style.left = `${ze}px`;
      }
      if ((Yt = D.edges) != null && Yt.bottom && Ce) {
        const ze = parseInt(getComputedStyle(D.target).top || "0", 10);
        D.target.style.top = `${ze}px`;
      }
      !Ae && !Te && !Ce && !ke && E && (D.target.style.transform = `translate(${L}px, ${N}px)`);
      const re = {
        top: !!((Et = D.edges) != null && Et.top),
        right: !!((St = D.edges) != null && St.right),
        bottom: !!((Vt = D.edges) != null && Vt.bottom),
        left: !!((Gt = D.edges) != null && Gt.left)
      };
      p != null && p.onResize && requestAnimationFrame(() => {
        var ze;
        (ze = p.onResize) == null || ze.call(p, {
          type: "resizemove",
          width: y,
          height: oe,
          top: N,
          left: L,
          deltaWidth: Ie,
          deltaHeight: Qe,
          edges: re
        });
      });
    }, Oe = (D) => {
      var Te, Ce, ke, He;
      Z = !1, m && h && ce.draggable(!0), X(), D.target instanceof Element && (D.target.setAttribute("data-x", L.toString()), D.target.setAttribute("data-y", N.toString()), D.target.setAttribute("data-width", y.toString()), D.target.setAttribute("data-height", oe.toString()));
      const Ae = {
        top: !!((Te = D.edges) != null && Te.top),
        right: !!((Ce = D.edges) != null && Ce.right),
        bottom: !!((ke = D.edges) != null && ke.bottom),
        left: !!((He = D.edges) != null && He.left)
      };
      requestAnimationFrame(() => {
        var Ie, Qe, Se;
        (Se = p == null ? void 0 : p.onResize) == null || Se.call(p, {
          type: "resizeend",
          width: y,
          height: oe,
          top: N,
          left: L,
          deltaWidth: ((Ie = D.deltaRect) == null ? void 0 : Ie.width) || 0,
          deltaHeight: ((Qe = D.deltaRect) == null ? void 0 : Qe.height) || 0,
          edges: Ae
        });
      });
    }, Ze = ne, Ee = {
      enabled: !0,
      edges: (z == null ? void 0 : z.edges) || {},
      modifiers: (z == null ? void 0 : z.modifiers) || [],
      listeners: {
        start: V,
        move: Ze,
        end: Oe
      }
    };
    (z == null ? void 0 : z.square) !== void 0 && (Ee.square = z.square), (z == null ? void 0 : z.preserveAspectRatio) !== void 0 && (Ee.preserveAspectRatio = z.preserveAspectRatio), z != null && z.invert && (Ee.invert = z.invert), (z == null ? void 0 : z.margin) !== void 0 && (Ee.margin = z.margin), (z == null ? void 0 : z.max) !== void 0 && (Ee.max = z.max), (z == null ? void 0 : z.maxPerElement) !== void 0 && (Ee.maxPerElement = z.maxPerElement), (z == null ? void 0 : z.minWidth) !== void 0 && (Ee.minWidth = U(z.minWidth, s, "width")), (z == null ? void 0 : z.minHeight) !== void 0 && (Ee.minHeight = U(z.minHeight, s, "height")), (z == null ? void 0 : z.maxWidth) !== void 0 && (Ee.maxWidth = U(z.maxWidth, s, "width")), (z == null ? void 0 : z.maxHeight) !== void 0 && (Ee.maxHeight = U(z.maxHeight, s, "height"));
    try {
      ce.resizable(Ee);
    } catch (D) {
      console.error("Error setting up resizable:", D);
    }
  }
  if (s instanceof HTMLElement && (s.style.transition = "none", s.style.width = `${y}px`, s.style.height = `${oe}px`), s instanceof HTMLElement) {
    const M = getComputedStyle(s), j = M.position === "absolute" || M.position === "fixed";
    E && !j ? s.style.transform = `translate(${L}px, ${N}px)` : j ? (!B() && !J() && (s.style.left = `${L}px`), !ee() && !ae() && (s.style.top = `${N}px`)) : s.style.transform = `translate(${L}px, ${N}px)`;
  }
  const Ve = (M, j) => {
    if (L = ue(M, s, "x"), N = ue(j, s, "y"), s instanceof HTMLElement) {
      const de = getComputedStyle(s), te = de.position === "absolute" || de.position === "fixed", S = (ne) => {
        typeof ne == "string" && fe(ne) && te ? s.style.left = ne : s.style.left = `${L}px`;
      }, V = (ne) => {
        typeof ne == "string" && fe(ne) && te ? s.style.top = ne : s.style.top = `${N}px`;
      };
      E && !te ? s.style.transform = `translate(${L}px, ${N}px)` : te ? (!B() && !J() && S(M), !ee() && !ae() && V(j)) : s.style.transform = `translate(${L}px, ${N}px)`;
    }
    s instanceof Element && (s.setAttribute("data-x", typeof M == "string" ? M : L.toString()), s.setAttribute("data-y", typeof j == "string" ? j : N.toString()));
  }, Pe = (M, j) => {
    if (y = typeof M == "number" ? M : U(M, s, "width"), oe = typeof j == "number" ? j : U(j, s, "height"), s instanceof HTMLElement) {
      const de = (S) => {
        typeof S == "string" && fe(S) ? s.style.width = S : s.style.width = `${y}px`;
      }, te = (S) => {
        typeof S == "string" && fe(S) ? s.style.height = S : s.style.height = `${oe}px`;
      };
      de(M), te(j);
    }
    s instanceof Element && (s.setAttribute("data-width", typeof M == "string" ? M : y.toString()), s.setAttribute("data-height", typeof j == "string" ? j : oe.toString()));
  };
  return {
    cleanup: () => {
      A.forEach((M) => {
        M._mouseEnterListener && M.removeEventListener("mouseenter", M._mouseEnterListener), M._mouseLeaveListener && M.removeEventListener("mouseleave", M._mouseLeaveListener), M.remove();
      });
      try {
        ce.unset();
      } catch (M) {
        console.error("Error unsetting interactable:", M);
      }
    },
    updatePositionAndSize: (M, j, de, te) => {
      Ve(M, j), Pe(de, te);
    },
    updatePosition: Ve,
    updateSize: Pe
  };
}
const ja = /* @__PURE__ */ Cn({
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
    const c = s, x = p, m = Je(), R = Je(typeof c.initialX == "number" ? c.initialX : 0), E = Je(typeof c.initialY == "number" ? c.initialY : 0), h = Je(typeof c.initialWidth == "number" ? c.initialWidth : 200), z = Je(typeof c.initialHeight == "number" ? c.initialHeight : 150), se = Je(!1), q = Je(!1), ye = Je({});
    let le = null, be = null, De = null, Re = null;
    const xe = [], ge = rt(() => ({
      x: R.value,
      y: E.value,
      width: h.value,
      height: z.value,
      isDragging: se.value,
      isResizing: q.value,
      activeEdges: ye.value
    })), fe = () => ({
      onDrag: (A) => {
        switch (R.value = A.left, E.value = A.top, se.value = A.type === "dragstart" ? !0 : A.type === "dragend" ? !1 : se.value, A.type) {
          case "dragstart":
            x("dragStart", A);
            break;
          case "dragmove":
            x("dragMove", A);
            break;
          case "dragend":
            x("dragEnd", A);
            break;
        }
      },
      onResize: (A) => {
        switch (h.value = A.width, z.value = A.height, R.value = A.left, E.value = A.top, q.value = A.type === "resizestart" ? !0 : A.type === "resizeend" ? !1 : q.value, ye.value = A.edges || {}, A.type) {
          case "resizestart":
            x("resizeStart", A);
            break;
          case "resizemove":
            x("resizeMove", A);
            break;
          case "resizeend":
            x("resizeEnd", A);
            break;
        }
      }
    }), ue = rt(() => ({
      draggable: c.draggable,
      resizable: c.resizable,
      useCssTransforms: c.useCssTransforms,
      dragOptions: c.dragOptions,
      resizeOptions: c.resizeOptions,
      x: c.initialX,
      y: c.initialY,
      width: c.initialWidth,
      height: c.initialHeight
    })), L = () => {
      if (!m.value) return;
      m.value.setAttribute("data-x", c.initialX.toString()), m.value.setAttribute("data-y", c.initialY.toString()), m.value.setAttribute("data-width", c.initialWidth.toString()), m.value.setAttribute("data-height", c.initialHeight.toString());
      const A = fe(), Z = Ba(
        m.value,
        ue.value,
        A
      );
      le = Z.cleanup, be = Z.updatePositionAndSize, De = Z.updatePosition, Re = Z.updateSize;
    };
    xe.push(
      ve(
        [
          () => c.draggable,
          () => c.resizable,
          () => c.dragOptions,
          () => c.resizeOptions
        ],
        () => {
          le && (le(), le = null), L();
        },
        {
          deep: c.watchDeep,
          immediate: c.watchImmediate
        }
      )
    ), xe.push(
      ve(
        [
          () => c.initialX,
          () => c.initialY,
          () => c.initialWidth,
          () => c.initialHeight
        ],
        ([A, Z, P, B]) => {
          be && (be(A, Z, P, B), typeof A == "number" && (R.value = A), typeof Z == "number" && (E.value = Z), typeof P == "number" && (h.value = P), typeof B == "number" && (z.value = B));
        }
      )
    ), An(() => {
      L();
    });
    const N = (A, Z, P, B) => {
      be && (be(A, Z, P, B), typeof A == "number" && (R.value = A), typeof Z == "number" && (E.value = Z), typeof P == "number" && (h.value = P), typeof B == "number" && (z.value = B));
    }, y = (A, Z) => {
      De && (De(A, Z), typeof A == "number" && (R.value = A), typeof Z == "number" && (E.value = Z));
    }, oe = (A, Z) => {
      Re && (Re(A, Z), typeof A == "number" && (h.value = A), typeof Z == "number" && (z.value = Z));
    };
    return To(() => {
      le && (le(), le = null), xe != null && xe.length && (xe.forEach((A) => A()), xe.length = 0), be = null, De = null, Re = null;
    }), d({
      elementRef: m,
      x: R,
      y: E,
      width: h,
      height: z,
      isDragging: se,
      isResizing: q,
      activeEdges: ye,
      updatePositionAndSize: N,
      updatePosition: y,
      updateSize: oe
    }), (A, Z) => (ot(), ct("div", {
      ref_key: "elementRef",
      ref: m,
      class: "draggable-resizable-wrapper"
    }, [
      un(A.$slots, "default", ko(_o(ge.value)))
    ], 512));
  }
});
export {
  ja as DraggableResizableWrapper,
  Er as GridItem,
  La as GridLayout,
  Ba as makeElementDraggableResizable
};
//# sourceMappingURL=grid-layout-plus.mjs.map
