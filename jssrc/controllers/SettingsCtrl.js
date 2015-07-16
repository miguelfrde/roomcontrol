'use strict';

export class SettingsCtrl {
  constructor($scope, LocalStorage) {
    $scope.deactivateSave = true;

    $scope.settings = LocalStorage.getObject('settings');

    $scope.save = function() { 
    };
  }
}

SettingsCtrl.$inject = ['$scope', 'LocalStorage'];
