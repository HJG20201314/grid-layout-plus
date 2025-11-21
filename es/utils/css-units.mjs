const a = (e) => typeof e == "string" && /(px|%|vw|vh|rem|em|calc\(|ch|ex)/i.test(e || "");
function l(e, i, o = "width") {
  if (typeof e == "number") return e;
  if (typeof e != "string" || !e) return 0;
  const t = e.trim();
  if (/^[-+]?[0-9]*\.?[0-9]+$/.test(t) || /px$/i.test(t)) return parseFloat(t);
  if (/vh$/i.test(t)) {
    const n = parseFloat(t);
    return isNaN(n) ? 0 : window.innerHeight * n / 100;
  }
  if (/vw$/i.test(t)) {
    const n = parseFloat(t);
    return isNaN(n) ? 0 : window.innerWidth * n / 100;
  }
  if (/rem$/i.test(t)) {
    const n = parseFloat(t);
    return (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16) * n;
  }
  if (/em$/i.test(t)) {
    const n = parseFloat(t);
    return ((i instanceof HTMLElement ? parseFloat(getComputedStyle(i).fontSize) : parseFloat(getComputedStyle(document.documentElement).fontSize)) || 16) * n;
  }
  if (/%$/i.test(t)) {
    const n = parseFloat(t), r = i instanceof HTMLElement ? i.parentElement : null;
    if (!r || isNaN(n)) return 0;
    const s = r.getBoundingClientRect();
    return (o === "width" ? s.width : s.height) * n / 100;
  }
  return /calc\(/i.test(t) || /(ch|ex)$/i.test(t) || a(t) ? c(t, i, o) : 0;
}
function c(e, i, o) {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.visibility = "hidden", t.style.pointerEvents = "none", t.style.margin = "0", t.style.padding = "0", t.style.border = "0", t.style.boxSizing = "border-box", o === "width" ? t.style.width = e : t.style.height = e, (i instanceof HTMLElement && i.parentElement || document.body).appendChild(t);
  const r = parseFloat(getComputedStyle(t)[o]);
  return t.remove(), isNaN(r) ? 0 : r;
}
function u(e, i, o) {
  return typeof e == "number" ? e : a(e) ? l(e, i, o === "x" ? "width" : "height") : parseFloat(e) || 0;
}
export {
  a as isCssUnitValue,
  l as parseCssSize,
  u as parsePositionValue
};
//# sourceMappingURL=css-units.mjs.map
