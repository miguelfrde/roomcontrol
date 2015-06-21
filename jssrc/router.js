export function router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'templates/main.html'
    })
    .state('music', {
      url: '/music',
      templateUrl: 'templates/music.html',
      controller: 'MusicCtrl'
    })
    .state('light', {
      url: '/light',
      templateUrl: 'templates/light.html'
    })
    .state('alarm', {
      url: '/alarm',
      templateUrl: 'templates/alarm.html',
      controller: 'AlarmCtrl'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html'
    })
  $urlRouterProvider.otherwise('/');
}
