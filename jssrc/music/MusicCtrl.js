'use strict';

export class MusicCtrl {
  constructor($scope, Music) {
    this.Music = Music;
    $scope.track = this.Music.currentTrack;
    $scope.playlistName = Music.playlist.name;
  }

  nextTrack() {
    $scope.track = this.Music.nextTrack();
  }

  changePlaylist(newid) {
    this.Music.playlist(newid);
    $scope.playlistName = Music.playlist.name;
    $scope.track = this.Music.currentTrack;
  }
}

MusicCtrl.$inject = ['$scope', 'Music'];
