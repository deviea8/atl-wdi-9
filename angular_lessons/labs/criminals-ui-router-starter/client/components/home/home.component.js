const controller = require('./home.controller.js');
const template = require('./home.html');

const HomeComponent = {
  controller: controller,
  template: template
};

angular
  .module('criminals')
  .component('home', HomeComponent);
