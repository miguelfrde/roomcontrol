'use strict';

export class MusicCtrl {
  constructor($scope, Music) {
    this.Music = Music;
    $scope.track = this.Music.currentTrack;
  }

  nextTrack() {
    $scope.track = this.Music.nextTrack();
  }

  changePlaylist(newid) {
    this.Music.playlist(newid);
    $scope.track = this.Music.currentTrack;
  }
}

MusicCtrl.$inject = ['$scope', 'Music'];
