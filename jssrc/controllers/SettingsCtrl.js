'use strict';

export class SettingsCtrl {
  constructor($scope, $state, $ionicHistory, LocalStorage) {
    $scope.deactivateSave = true;

    $scope.settings = LocalStorage.getObject('settings');

    $scope.save = function() { 
      const oldServerIp = LocalStorage.getObjectProperty('settings', 'serverip');
      LocalStorage.setObject('settings', $scope.settings);
      // TODO: save settings also in the server
      if (oldServerIp != $scope.settings) {
        LocalStorage.setObjectProperty('device', 'activeSpotify', false); 
        $ionicHistory.nextViewOptions({
          historyRoot: true
        });
        $state.go('login');
      }
    };
  }
}

SettingsCtrl.$inject = ['$scope', '$state', '$ionicHistory', 'LocalStorage'];
