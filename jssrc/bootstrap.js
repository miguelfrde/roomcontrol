export function onReady($ionicPlatform, LocalStorage) {
  $ionicPlatform.ready(() => {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    if (LocalStorage.getObjectProperty('device', 'id') == undefined) {
      let randomNum = Math.round(Math.random() * 16777215);
      randomNum = ('000000' + randomNum.toString(16)).slice(-6);
      LocalStorage.setObjectProperty('device', 'id', randomNum);
    }
  });
}
