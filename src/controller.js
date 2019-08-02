import Event from "./event.js"

export default class ListController {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    this._view.listModified.add(index => this.updateSelected(index));
    this._view.addButtonClicked.add(() => this.addItem());
    this._view.delButtonClicked.add(() => this.delItem());
  }

  addItem() {
    let input = this._view._elements.input;
    let item = input.value;
    if (item) {
      this._model.addItem(item);
    }
    input.value = '';
  }

  delItem() {
    let index = this._model.getSelected();

    if (index !== -1) {
      this._model.removeItem(this._model.getSelected());
    }
  }

  updateSelected(index) {
    this._model.setSelected(index);
  }

  show() {
    this._view.rebuildList();
  }
}
