define("bootstrap", ["exports"], function (exports) {
  "use strict";

  exports.onReady = onReady;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function onReady($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }
});
define("router", ["exports"], function (exports) {
  "use strict";

  exports.router = router;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function router($stateProvider, $urlRouterProvider) {
    $stateProvider.state("main", {
      url: "/",
      templateUrl: "templates/main.html"
    });
    $urlRouterProvider.otherwise("/");
  }
});
define("app", ["exports", "bootstrap", "router"], function (exports, _bootstrap, _router) {
  "use strict";

  var onReady = _bootstrap.onReady;
  var router = _router.router;

  angular.module("roomcontrol", ["ionic"]).config(router).run(onReady);
});
//# sourceMappingURL=all.js.map