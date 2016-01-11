import { NavController, Page, Modal, ViewController } from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/music/music.html'
})
export class MusicPage {
  song: Object {
    name: 'Design Music',
    artist: 'Sven Väth',
    albumCoverUrl: 'http://geo.static.traxsource.com/files/images/356840_large.jpg'
  };

  constructor(nav: NavController) {
    this.nav = nav;
  }

  openPlaylistModal() {
    const playlistModal = Modal.create(PlaylistModal)
    this.nav.present(playlistModal)
  }
}


@Page({
  templateUrl: 'build/pages/music/playlistModal.html'
})
class PlaylistModal {
  playlists: Object[] = [
    { name: 'Electroswingin around' },
    { name: 'Techno' },
    { name: 'Crazy' },
    { name: 'Swedish Erasmus Parties' }];

  constructor(viewCtrl: ViewController) {
    this.viewCtrl = viewCtrl;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  choosePlaylist(playlist) {
    console.log('Choose playlist: ', playlist.name);
    this.dismiss();
  }
}
