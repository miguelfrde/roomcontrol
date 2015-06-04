import {onReady} from 'bootstrap';
import {router} from 'router';

angular.module('roomcontrol', ['ionic'])
  .config(router)
  .run(onReady)
