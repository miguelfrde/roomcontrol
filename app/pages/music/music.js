import { NavController, Page } from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/music/music.html'
})
export class MusicPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
