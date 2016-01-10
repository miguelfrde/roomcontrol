import {App, Platform, Config} from 'ionic/ionic';
import {HomePage} from './pages/home/home';


@App({
  templateUrl: 'build/app.html',
  config: {
    mode: 'md'
  }
})
export class RoomControl {
  constructor(platform: Platform) {
    this.root = HomePage;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
