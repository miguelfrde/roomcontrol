'use strict';

export class LoginCtrl {
  constructor($scope, $state, $ionicHistory) {
    $scope.spotify = {
      user: '',
      password: ''
    };
    $scope.serverip = '';
    $scope.login = function() {
      // TODO: Spotify login
      $ionicHistory.nextViewOptions({
        historyRoot: true
      });
      $state.go('roomcontrol.home');
    }
  }
}

LoginCtrl.$inject = ['$scope', '$state', '$ionicHistory'];
