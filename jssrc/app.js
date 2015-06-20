import {onReady} from 'bootstrap';
import {router} from 'router';
import {Music} from 'music/Music';
import {MusicCtrl} from 'music/MusicCtrl';
import {LightCtrl} from 'light/LightCtrl';
import {AlarmCtrl} from 'alarm/AlarmCtrl';
import {SettingsCtrl} from 'settings/SettingsCtrl'; 

angular.module('roomcontrol', ['ionic', 'roomcontrol.controllers', 'roomcontrol.services'])
  .config(router)
  .run(onReady);

angular.module('roomcontrol.controllers', [])
  .controller('MusicCtrl', MusicCtrl)
  .controller('LightCtrl', LightCtrl)
  .controller('AlarmCtrl', AlarmCtrl)
  .controller('SettingsCtrl', SettingsCtrl);

angular.module('roomcontrol.services', [])
  .service('Music', Music);
