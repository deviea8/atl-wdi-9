const template = require('./about.html');

const AboutComponent = {
  template: template
};

angular
  .module('criminals')
  .component('about', AboutComponent);
