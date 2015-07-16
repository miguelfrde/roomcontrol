'use strict';

// TODO: get sounds and lightprograms available from the RaspberryPi
const sounds = [
  'Extreme wake up',
  'Releaxed wake up',
  'Crazy wake up',
  'Beautiful morning',
  'Cold morning'
];

const lightprograms = [
  'Morning lights',
  'Colorful',
  'Orange morning',
  'Purple morning'
];

export class AlarmCtrl {
  constructor($scope) {
    const self = this;

    $scope.sounds = sounds;
    $scope.lightprograms = lightprograms;
    $scope.lightprogram = $scope.lightprograms[1];
    $scope.sound = $scope.sounds[2];

    $scope.tpslots = {epochTime: 30600, format: 12, step: 5};
    $scope.time = self.epochToTime(30600)

    $scope.timePickerCallback = function(val) {
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
