import {onReady} from 'bootstrap';
import {router} from 'router';
import {Music} from 'music/Music';
import {MusicCtrl} from 'music/MusicCtrl';
import {LightCtrl} from 'light/LightCtrl';
import {AlarmCtrl} from 'alarm/AlarmCtrl';
import {SettingsCtrl} from 'settings/SettingsCtrl'; 
import {ColorWheel} from 'directives/ColorWheel'; 

angular.module('roomcontrol', [
    'ionic',
    'ionic-timepicker',
    'roomcontrol.controllers',
    'roomcontrol.services',
    'roomcontrol.directives'])
  .config(router)
  .run(onReady);

angular.module('roomcontrol.controllers', [])
  .controller('MusicCtrl', MusicCtrl)
  .controller('LightCtrl', LightCtrl)
  .controller('AlarmCtrl', AlarmCtrl)
  .controller('SettingsCtrl', SettingsCtrl);

angular.module('roomcontrol.services', [])
  .service('Music', Music);

angular.module('roomcontrol.directives', [])
  .directive('colorWheel', () => new ColorWheel());
