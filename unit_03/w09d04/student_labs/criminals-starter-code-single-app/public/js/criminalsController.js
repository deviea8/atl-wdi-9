angular
  .module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http){
  var vm = this;

  vm.addCriminal = addCriminal;
  vm.all = [];
  vm.deleteCriminal = deleteCriminal;
  vm.newCriminal = {};

  activate();

  function activate() {
    getCriminals();
  }

  function addCriminal(){
    $http
      .post('/criminals', vm.newCriminal)
      .then(function(response){
        vm.all.push(response.data.criminal);
        vm.newCriminal = {};
      });
  }

  function deleteCriminal(criminal){
    $http
      .delete('/criminals/' + criminal._id)
      .then(function(response){
        removeCriminalFromList(criminal);
      });
  }

  function getCriminals(){
    $http
      .get('/criminals')
      .then(function(response){
        vm.all = response.data.criminals;
      });
  }

  function removeCriminalFromList(criminal) {
    var index = vm.all.indexOf(criminal);
    vm.all.splice(index, 1);
  }

  function editCriminal(criminal) {
    $http
      .put('/criminals/' + criminal._id)
      .then(function(response) {
        getCriminals()
      })
  }


}
