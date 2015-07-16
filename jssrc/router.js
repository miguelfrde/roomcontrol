export function router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('roomcontrol', {
      url: '/roomcontrol',
      templateUrl: 'templates/base.html',
      abstract: true
    })
    .state('roomcontrol.home', {
      url: '',
      templateUrl: 'templates/home.html'
    })
    .state('roomcontrol.music', {
      url: '/music',
      templateUrl: 'templates/music.html',
      controller: 'MusicCtrl'
    })
    .state('roomcontrol.light', {
      url: '/light',
      templateUrl: 'templates/light.html',
      controller: 'LightCtrl'
    })
    .state('roomcontrol.alarm', {
      url: '/alarm',
      templateUrl: 'templates/alarm.html',
      controller: 'AlarmCtrl'
    })
    .state('roomcontrol.settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html',
      controller: 'SettingsCtrl'
    });
  $urlRouterProvider.otherwise('/login');
}
