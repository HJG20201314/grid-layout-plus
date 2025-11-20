let t = "auto";
function e() {
  return typeof document < "u";
}
function r() {
  return e() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : t;
}
export {
  r as getDocumentDir
};
//# sourceMappingURL=dom.mjs.map
