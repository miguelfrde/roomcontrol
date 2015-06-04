export function router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "templates/main.html"
    })
  $urlRouterProvider.otherwise('/');
}
