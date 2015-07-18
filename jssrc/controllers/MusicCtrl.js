'use strict';

export class MusicCtrl {
  constructor($scope, $ionicModal, Music, LocalStorage) {
    $scope.data = {
      track: Music.currentTrack,
      currPlaylist: Music.playlist.name,
      playStatus: true,
      volume: LocalStorage.getObjectProperty('music', 'volume') || 50
    };
    $scope.playlists = Music.playlists;

    $scope.playPause = function() {
      $scope.data.playStatus = !$scope.data.playStatus;
    };

    $scope.previousSong = function() {
      $scope.data.track = Music.previousTrack;
    };
    
    $scope.nextSong = function() {
      $scope.data.track = Music.nextTrack;
    };

    $scope.updateVolume = function() { 
      LocalStorage.setObjectProperty('music', 'volume', $scope.data.volume);
    }

    // Change playlist modal controller functions
    
    $ionicModal.fromTemplateUrl('templates/playlists-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    }); 

    $scope.openModal = function() {
      $scope.modal.show();
    };
    
    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.changePlaylist = function(newid) {
      Music.playlist = newid;
      $scope.data.track = Music.currentTrack;
      $scope.data.currPlaylist = Music.playlist.name;
      $scope.closeModal();
    };
  }
}

MusicCtrl.$inject = ['$scope', '$ionicModal', 'Music', 'LocalStorage'];
