'use strict';

export class PlaylistsCtrl {
  constructor($scope, $ionicHistory, Music) {
    $scope.Music = Music;
    $scope.changePlaylist = function(newid) {
      $scope.Music.playlist = newid;
      $ionicHistory.goBack();
    };
  }
}

PlaylistsCtrl.$inject = ['$scope', '$ionicHistory', 'Music'];
