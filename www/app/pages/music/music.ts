import { NavController, Page } from 'ionic/ionic';


@Page({
  templateUrl: 'app/pages/music/music.html'
})
export class MusicPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
