angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);


CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService){
  var self = this;
  self.getCriminals = getCriminals;
  self.all = [];
  self.deleteCriminal = deleteCriminal;
  self.addCriminal = addCriminal;
  self.updateCriminal = updateCriminal;

  getCriminals();
  function getCriminals(){
   CriminalService.getCriminals().then((criminalsData) => {
    self.all = criminalsData;
   });
  }

  function addCriminal() {
    CriminalService.addCriminal(self.newCriminal).then(() => {
      self.getCriminals();
      self.newCriminal = {};
    });
  }


  function deleteCriminal(criminal){
    CriminalService.deleteCriminal(criminal).then((response) => {
      var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
    })
  }

  function updateCriminal(updateCriminal) {
        console.log(updateCriminal);
        CriminalService.updateCriminal(updateCriminal).then((response) => {
          updateCriminal.isEdit = false;
        })
    }



  // SERVICE

angular.module('InfamousCriminals')
    .service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
    var self = this;
    self.getCriminals = getCriminals;
    self.addCriminal = addCriminal;
    self.deleteCriminal = deleteCriminal;
    self.updateCriminal = updateCriminal;

    function getCriminals(){
        return $http
          .get('/criminals')
          .then(function(response){
            return response.data.criminals;
    });
  }

  function addCriminal(newCriminal){
    return $http
      .post('/criminals', newCriminal);
  }

  function deleteCriminal(criminal) {
    return $http
      .delete("/criminals/" + criminal._id);
  }

  function updateCriminal(updateCriminal) {
    return $http
            .patch('/criminals/'+updateCriminal._id,updateCriminal);
  }
  }
