import { cloneLayout as m, compact as p, correctBounds as h } from "./common.mjs";
function y(t, e) {
  const o = d(t);
  let n = o[0];
  for (let r = 1, c = o.length; r < c; r++) {
    const i = o[r];
    e > t[i] && (n = i);
  }
  return n;
}
function B(t, e) {
  if (!e[t])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + t + " is missing!"
    );
  return e[t];
}
function v(t, e, o, n, r, c, i) {
  if (e[n]) return m(e[n]);
  let s = t;
  const u = d(o), l = u.slice(u.indexOf(n));
  for (let f = 0, g = l.length; f < g; f++) {
    const a = l[f];
    if (e[a]) {
      s = e[a];
      break;
    }
  }
  return s = m(s || []), p(h(s, { cols: c }), i);
}
function d(t) {
  return Object.keys(t).sort((o, n) => t[o] - t[n]);
}
export {
  v as findOrGenerateResponsiveLayout,
  y as getBreakpointFromWidth,
  B as getColsFromBreakpoint,
  d as sortBreakpoints
};
//# sourceMappingURL=responsive.mjs.map
