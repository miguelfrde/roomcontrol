'use strict';

export class LightCtrl {
  constructor($scope) {
    $scope.color = 'ffffff';
    $scope.intensity = 50;
  }
}

LightCtrl.$inject = ['$scope'];
