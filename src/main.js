import ListModel from "./model.js"
import ListView from "./view.js"
import ListController from "./controller.js"

let initialData = ['Выгулять собаку', 'Покормить кота', 'Сделать уроки'];
let model = new ListModel();

let view = new ListView(model, {
  'list': document.querySelector('#list'),
  'addButton': document.querySelector('#plus'),
  'delButton': document.querySelector('#minus'),
  'input': document.querySelector('#input'),
});

let controller = new ListController(model, view);

controller.show();
