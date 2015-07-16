'use strict';

export class SettingsCtrl {
  constructor($scope, LocalStorage) {
    $scope.deactivateSave = true;

    $scope.settings = LocalStorage.getObject('settings');

    $scope.save = function() { 
      LocalStorage.setObject('settings', $scope.settings);
      // TODO: if there was a change to the server IP, redirect to login
      //       to verify/setup the spotify details
      // TODO: save settings also in the server
    };
  }
}

SettingsCtrl.$inject = ['$scope', 'LocalStorage'];
