'use strict';

export class LoginCtrl {
  constructor($scope, $state, $ionicHistory, LocalStorage) {
    $scope.spotify = {
      user: '',
      password: ''
    };
    $scope.settings = LocalStorage.getObject('settings');
    $scope.login = function() {
      // TODO: Spotify login and if login was right do the following
      LocalStorage.setObject('settings', $scope.settings);
      $ionicHistory.nextViewOptions({
        historyRoot: true
      });
      $state.go('roomcontrol.home');
    }
  }
}

LoginCtrl.$inject = ['$scope', '$state', '$ionicHistory', 'LocalStorage'];
