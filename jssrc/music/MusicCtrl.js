'use strict';

export class MusicCtrl {
  constructor($scope, Music) {
    $scope.Music = Music;
  }
}

MusicCtrl.$inject = ['$scope', 'Music'];
