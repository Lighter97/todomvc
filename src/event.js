export default class Event {
  constructor(sender) {
    this._sender = sender;
    this._listeners = [];
  }

  add(listener) {
    this._listeners.push(listener);
  }

  fire(args) {
    this._listeners.forEach(listener => listener(args));
  }
};
