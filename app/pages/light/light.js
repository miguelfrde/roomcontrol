import { NavController, Page } from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/light/light.html'
})
export class LightPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
