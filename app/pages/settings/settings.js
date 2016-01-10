import { NavController, Page } from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage {
  settings: Object = {
    server: '',
    notify_on_enter: false,
    send_pic_on_enter: false
  };

  constructor(nav: NavController) {
    this.nav = nav;
  }

  saveSettings(event) {
    // TODO: save settings
    this.nav.pop()
  }
}
