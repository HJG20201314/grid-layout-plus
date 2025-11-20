function a(t) {
  return c(t);
}
function c(t) {
  var f;
  const n = ((f = t.target) == null ? void 0 : f.offsetParent) || document.body, e = t.offsetParent === document.body ? { left: 0, top: 0 } : n.getBoundingClientRect(), o = t.clientX + n.scrollLeft - e.left, r = t.clientY + n.scrollTop - e.top;
  return { x: o, y: r };
}
function i(t, n, e, o) {
  return s(t) ? {
    deltaX: e - t,
    deltaY: o - n,
    lastX: t,
    lastY: n,
    x: e,
    y: o
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: e,
    lastY: o,
    x: e,
    y: o
  };
}
function s(t) {
  return typeof t == "number" && !Number.isNaN(t);
}
export {
  i as createCoreData,
  a as getControlPosition,
  c as offsetXYFromParentOf
};
//# sourceMappingURL=draggable.mjs.map
