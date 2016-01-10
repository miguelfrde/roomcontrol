import { NavController, Page } from 'ionic/ionic';
import { LightPage } from '../light/light';
import { MusicPage } from '../music/music';
import { AlarmPage } from '../alarm/alarm';
import { SettingsPage } from '../settings/settings';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(nav: NavController) {
    this.nav = nav;
    this.pages = [
      {name: 'Light', component: LightPage},
      {name: 'Music', component: MusicPage},
      {name: 'Alarm', component: AlarmPage},
      {name: 'Settings', component: SettingsPage}
    ];
  }

  pageSelected(event, page) {
    this.nav.push(page.component);
  }
}
