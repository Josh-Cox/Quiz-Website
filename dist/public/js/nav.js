"use strict";
fetch('../html/nav.html')
    .then(res => res.text())
    .then(text => {
    var _a;
    const oldelem = document.querySelector("script#replace_with_navbar");
    const newelem = document.createElement("div");
    newelem.innerHTML = text;
    (_a = oldelem === null || oldelem === void 0 ? void 0 : oldelem.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newelem, oldelem);
});
//# sourceMappingURL=nav.js.map