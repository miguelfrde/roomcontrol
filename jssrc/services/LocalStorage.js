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

  _setObject(key, value) {
    this.$window.localStorage[key] = JSON.stringify(value);
  }

  getObject(key) {
    return JSON.parse(this.$window.localStorage[key] || '{}');
  }

  getObjectProperty(objectKey, propKey) {
    return this.getObject(objectKey)[propKey];
  }

  setObjectProperty(objectKey, propKey, value) {
    const obj = this.getObject(objectKey);
    obj[propKey] = value;
    this._setObject(objectKey, obj);
  }
}

LocalStorage.$inject = ['$window'];
