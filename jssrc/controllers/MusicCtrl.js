'use strict';

export class MusicCtrl {
  constructor($scope, $ionicModal, Music) {
    $ionicModal.fromTemplateUrl('templates/playlists-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
   
    $scope.track = Music.currentTrack;
    $scope.currPlaylist = Music.playlist;
    $scope.playlists = Music.playlists;
    $scope.playStatus = true;

    $scope.playPause = function() {
      $scope.playStatus = !$scope.playStatus;
    };

    // Change playlist modal controller functions

    $scope.openModal = function() {
      $scope.modal.show();
    };
    
    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.changePlaylist = function(newid) {
      Music.playlist = newid;
      $scope.track = Music.currentTrack;
      $scope.currPlaylist = Music.playlist;
      $scope.playlist = Music.playlist;
      $scope.closeModal();
    };
  }
}

MusicCtrl.$inject = ['$scope', '$ionicModal', 'Music'];
