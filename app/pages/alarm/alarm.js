import { NavController, Page } from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/alarm/alarm.html'
})
export class AlarmPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
