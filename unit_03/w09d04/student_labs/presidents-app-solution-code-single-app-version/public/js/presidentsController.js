angular
  .module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  var vm = this;

  vm.addPresident = addPresident;
  vm.all = [];
  vm.deletePresident = deletePresident;
  vm.newPresident = {};
<<<<<<< HEAD
=======
  vm.updatePresident = updatePresident;
>>>>>>> 15c7fd952a864e696511e210b0b2fbeb10978a19

  activate();

  function activate() {
    getPresidents();
  }

  function addPresident(){
    $http
      .post('/presidents', vm.newPresident)
      .then(function(response){
        vm.all.push(response.data.president);
        vm.newPresident = {};
      });
  }

  function deletePresident(president){
    $http
      .delete('/presidents/' + president._id)
<<<<<<< HEAD
      .then(function(response){
        removePresidentFromList(president);
=======
      .then(function(response){
        removePresidentFromList(president);
      });
  }

  function getPresidents(){
    $http
      .get('/presidents')
      .then(function(response){
        vm.all = response.data.presidents;
      });
  }

  function removePresidentFromList(president) {
    var index = vm.all.indexOf(president);
    vm.all.splice(index, 1);
  }

  function updatePresident(president){
    $http
      .patch('/presidents/' + president._id, president)
      .then(function(response){
        president.isEditing = false
>>>>>>> 15c7fd952a864e696511e210b0b2fbeb10978a19
      });
  }

  function getPresidents(){
    $http
      .get('/presidents')
      .then(function(response){
        vm.all = response.data.presidents;
      });
  }

  function removePresidentFromList(president) {
    var index = vm.all.indexOf(president);
    vm.all.splice(index, 1);
  }
}
