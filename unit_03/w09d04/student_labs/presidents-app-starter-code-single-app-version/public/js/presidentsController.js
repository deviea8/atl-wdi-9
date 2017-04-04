angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var vm = this;

  vm.addPresident = addPresident;
  vm.deletePresident = deletePresident;
  vm.all = [];
  vm.loadingAll = true;
  vm.newPresident = {};

  activate();

  function activate() {
    loadAllPresidents();
  };

  function addPresident(){
    // vm.all.push(vm.newPresident);
    // vm.newPresident = {};
    $http
      .post('/presidents', vm.newPresident)
      .then(function someName(response) {
        vm.all.push(response.data.president);
        vm.newPresident = {};
      });
  }

  function deletePresident(president) {
    var index = vm.all.indexOf(president)
    $http
      .delete('/presidents/' + president._id)
      .then(function deleteThis(response) {
        vm.all.splice(index, 1);
      })
  }

  function loadAllPresidents() {
      $http
      .get('/presidents')
      .then(function setAll(response) {
        vm.all = response.data.presidents;
        vm.loadingAll = false;
      });
    };
}


