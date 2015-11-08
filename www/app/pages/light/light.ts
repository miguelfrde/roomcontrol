import { NavController, Page } from 'ionic/ionic';


@Page({
  templateUrl: 'app/pages/light/light.html'
})
export class LightPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
