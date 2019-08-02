import Event from "./event.js"

export default class ListModel {
  constructor(items) {
    this._items = items || [];
    this._selected = -1;

    this.itemAdded = new Event();
    this.itemRemoved = new Event();
    this.selectAnother = new Event();
  }

  addItem(item) {
    this._items.push(item);

    this.itemAdded.fire({item: item});
  }

  getItems() {
    return this._items;
  }

  removeItem(index) {
    let item = this._items[index];
    this._items.splice(index, 1);
    this.itemRemoved.fire({item: item});

    if (index === this._selected) {
      this.setSelected(-1);
    }
  }

  getSelected() {
    return this._selected;
  }

  setSelected(index) {
    let prevSelected = this._selected;
    this._selected = index;
    this.selectAnother.fire({previous: prevSelected});
  }
}