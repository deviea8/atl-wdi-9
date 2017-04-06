const controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

const CriminalsShowComponent = {
  controller: controller,
  template: template
};

angular
  .module('criminals')
  .component('criminalsShow', CriminalsShowComponent);
