import {App, Platform, Config} from 'ionic/ionic';
import {HomePage} from './pages/home/home';
import {Settings} from './providers/settings';


@App({
  templateUrl: 'build/app.html',
  providers: [Settings],
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
