'use strict';

export class LocalStorage {
  constructor($window) {
    this.$window = $window;
  }

  get(key) {
    return this.$window.localStorage[key] || undefined;
  }

  set(key, value) {
    this.$window.localStorage[key] = value;
  }

  setObject(key, value) {
    this.$window.localStorage[key] = JSON.stringify(value);
  }

  getObject(key) {
    return JSON.parse(this.$window.localStorage[key] || '{}');
  }
}

LocalStorage.$inject = ['$window'];
