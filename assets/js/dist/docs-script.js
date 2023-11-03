"use strict";
(() => {
  // src/main-export.ts
  var foo = function() {
    console.log("Code goes here");
    return true;
  };

  // docs/assets/js/src/docs-script.ts
  console.log(foo());
})();
