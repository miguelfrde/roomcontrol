'use strict';

export class AlarmCtrl {
  constructor($scope) {
    const self = this;

    $scope.tpslots = {epochTime: 30600, format: 12, step: 5};
    $scope.time = self.epochToTime(30600)

    $scope.timePickerCallback = function (val) {
      if (typeof(val) != 'undefined') {
        $scope.time = self.epochToTime(val);
      }
    };
  }

  epochToTime(epochs) {
    const hours = parseInt(epochs / 3600, 10);
    const minutes = (epochs / 60) % 60;
    return (this.prependZero(hours) + ":" + this.prependZero(minutes));
  }

  prependZero(value) {
    if (String(value).length < 2) {
      return '0' + String(value);
    }
    return String(value);
  }
}

AlarmCtrl.$inject = ['$scope'];
