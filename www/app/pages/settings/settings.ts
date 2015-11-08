import { NavController, Page } from 'ionic/ionic';


@Page({
  templateUrl: 'app/pages/settings/settings.html'
})
export class SettingsPage {
  constructor(nav: NavController) {
    this.nav = nav;
    this.settings = {
        server: '',
        notify_on_enter: false,
        send_pic_on_enter: false
    };
  }

  saveSettings(event) {
    // TODO: save settings
    this.nav.pop()
  }
}
