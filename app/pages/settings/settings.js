import {NavController, Page} from 'ionic/ionic';
import {Settings} from '../../providers/settings'


@Page({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
  constructor(settingsProvider: Settings, nav: NavController) {
    settingsProvider.get().then(data => {
      this.settings = data;
    });
    this.settingsProvider = settingsProvider;
    this.nav = nav;
  }

  constructor(nav: NavController) {
    this.nav = nav;
  }

  saveSettings(event) {
    this.settingsProvider.save(this.settings);
    this.nav.pop()
  }
}
