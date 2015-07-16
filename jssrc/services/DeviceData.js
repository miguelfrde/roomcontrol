'use strict';

export class DeviceData {
  get deviceId() {
    if (!window.localStorage['deviceId']) {
      let randomNum = Math.round(Math.random() * 16777215);
      randomNum = ('000000' + randomNum.toString(16)).slice(-6);
      window.localStorage['deviceId'] = randomNum;
    }
    return window.localStorage['deviceId'];
  }

  spotifyLogin() {
    window.localStorage['spotifyLoggedIn'] = true;
  }

  spotifyLogout() {
    window.localStorage['spotifyLoggedIn'] = false;
  }
}
