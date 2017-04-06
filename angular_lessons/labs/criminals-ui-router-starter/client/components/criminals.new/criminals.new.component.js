const controller = require('./criminals.new.controller.js');
const template = require('./criminals.new.html');

const CriminalsNewComponent = {
  template: template,
  controller: controller
};

angular
  .module('criminals')
  .component('criminalsNew', CriminalsNewComponent);
