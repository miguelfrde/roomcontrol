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
    .state('music-playlists', {
      url: '/music/playlists',
      templateUrl: 'templates/musicplaylists.html',
      controller: 'PlaylistsCtrl'
    })
    .state('light', {
      url: '/light',
      templateUrl: 'templates/light.html'
    })
    .state('alarm', {
      url: '/alarm',
      templateUrl: 'templates/alarm.html'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html'
    })
  $urlRouterProvider.otherwise('/');
}
