'use strict';

export class LightCtrl {
  constructor($scope) {
    $scope.intensity = 50;
  }
}

LightCtrl.$inject = ['$scope'];
