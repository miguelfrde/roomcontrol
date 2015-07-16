'use strict';

// TODO: get sounds and lightprograms available from the RaspberryPi
const sounds = [
  {id: 'extreme', name: 'Extreme wake up'},
  {id: 'relaxed', name: 'Releaxed wake up'},
  {id: 'crazy', name: 'Crazy wake up'},
  {id: 'beautiful', name: 'Beautiful morning'},
  {id: 'cold', name: 'Cold morning'}
];

const lightprograms = [
  {id: 'morning', name: 'Morning lights'},
  {id: 'colorful', name: 'Colorful'},
  {id: 'orange', name: 'Orange morning'},
  {id: 'purple', name: 'Purple morning'}
];

export class AlarmCtrl {
  constructor($scope, LocalStorage) {
    const self = this;

    $scope.sounds = sounds;
    $scope.lightprograms = lightprograms;

    $scope.alarm = LocalStorage.getObject('alarm');
    $scope.alarm.time = $scope.alarm.time || 30600;
    $scope.alarm.light = $scope.alarm.light || lightprograms[0].id;
    $scope.alarm.sound = $scope.alarm.sound || sounds[0].id;

    $scope.tpslots = {epochTime: $scope.alarm.time, format: 12, step: 5};
    $scope.time = self.epochToTime($scope.alarm.time)

    $scope.saveSettings = function() {
      LocalStorage.setObject('alarm', $scope.alarm);
    }

    $scope.timePickerCallback = function(val) {
      if (typeof(val) != 'undefined') {
        $scope.time = self.epochToTime(val);
        $scope.alarm.time = val;
        $scope.saveSettings();
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

AlarmCtrl.$inject = ['$scope', 'LocalStorage'];
