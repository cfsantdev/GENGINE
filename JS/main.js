import {initializer} from './initializer.js';

class GENGINE {
  constructor(){
    this._initializer = new initializer.Initializer(100, 20, 50);
  }
}

let _APP = null;

window.addEventListener('DOMContentLoaded', () => {
  _APP = new GENGINE();
});
