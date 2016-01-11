import {Injectable} from 'angular2/core';

@Injectable()
export class Settings {
  settings: Object = {
    server: '',
    notify: false,
    sendpic: false
  }

  get() {
    return Promise.resolve(this.settings);
  }

  save(settings: Object) {
    // TODO: Save to server
    this.settings = settings;
  }
}
