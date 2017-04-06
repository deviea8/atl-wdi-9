angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

<<<<<<< HEAD
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
=======
function PresidentsController(){
  this.all = [
    {name: 'George Washington', start: 1789, end: 1797 },
    {name: 'John Adams', start: 1797, end: 1801 },
    {name: 'Thomas Jefferson', start: 1801, end: 1809 },
    {name: 'James Madison', start: 1809, end: 1817 },
    {name: 'Joshua Quincy Kushner', start: 2021, end: 2029 },
  ];
  this.addPresident = addPresident;
  this.newPresident = {};
>>>>>>> 15c7fd952a864e696511e210b0b2fbeb10978a19

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


