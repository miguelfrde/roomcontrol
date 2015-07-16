'use strict';

export class LightCtrl {
  constructor($scope, LocalStorage) {
    $scope.light = LocalStorage.getObject('light');
    $scope.light.color = $scope.light.color || 'ffffff'; 
    $scope.light.intensity = $scope.light.intensity || 50; 
    
    $scope.saveSettings = function() {
      LocalStorage.setObject('light', $scope.light);
    };

    $scope.$watch('light.color', function(newValue, oldValue, scope) {
      $scope.saveSettings();
    });
  }
}

LightCtrl.$inject = ['$scope', 'LocalStorage'];
