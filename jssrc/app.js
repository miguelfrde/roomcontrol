import {onReady} from 'bootstrap';
import {router} from 'router';
import {Music} from 'services/Music';
import {DeviceData} from 'services/DeviceData';
import {MusicCtrl} from 'controllers/MusicCtrl';
import {LightCtrl} from 'controllers/LightCtrl';
import {AlarmCtrl} from 'controllers/AlarmCtrl';
import {SettingsCtrl} from 'controllers/SettingsCtrl'; 
import {LoginCtrl} from 'controllers/LoginCtrl'; 
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
  .controller('SettingsCtrl', SettingsCtrl)
  .controller('LoginCtrl', LoginCtrl);

angular.module('roomcontrol.services', [])
  .service('Music', Music)
  .service('DeviceData', DeviceData);

angular.module('roomcontrol.directives', [])
  .directive('colorWheel', () => new ColorWheel());
