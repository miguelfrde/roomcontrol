import { NavController, Page } from 'ionic/ionic';


@Page({
  templateUrl: 'app/pages/settings/settings.html'
})
export class SettingsPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
