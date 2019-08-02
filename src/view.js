import Event from "./event.js"

export default class ListView {
  constructor(model, elements) {
    this._model = model;
    this._elements = elements;
    this.listModified = new Event(this);
    this.addButtonClicked = new Event(this);
    this.delButtonClicked = new Event(this);

    // Model listeners
    this._model.itemAdded.add(() => this.rebuildList());
    this._model.itemRemoved.add(() => this.rebuildList());

    // Listeners to HTML controls
    this._elements.list.addEventListener('click', ((e) => {
      this.listModified.fire(this._elements.list.selectedIndex);
    }));

    this._elements.addButton.addEventListener('click', (() => {
      this.addButtonClicked.fire();
    }));

    this._elements.delButton.addEventListener('click', (() => {
      this.delButtonClicked.fire();
    }));
  }

  rebuildList() {
    let list, items;

    list = this._elements.list;
    list.innerHTML = '';

    items = this._model.getItems();
    items.forEach(key => {
      let item = document.createElement('option');
      item.appendChild(document.createTextNode(key));
      list.appendChild(item);
    });
    this._model.setSelected(-1);
  }
}
