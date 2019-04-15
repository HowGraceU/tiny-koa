"use strict";

System.register(["./ESModule.js"], function (_export, _context) {
  "use strict";

  var ESModule, app6;
  return {
    setters: [function (_ESModuleJs) {
      ESModule = _ESModuleJs.default;
    }],
    execute: function () {
      console.log(new ESModule().msg);
      app6 = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!'
        }
      });
    }
  };
});