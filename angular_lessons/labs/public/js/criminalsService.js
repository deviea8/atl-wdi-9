angular
  .module("InfamousCriminals")
  .controller("CriminalsController")
  .service("CriminalsService")

CriminalsService.$inject = ['$http'];

function CriminalsService() {
  var self = this;

  function greeting() {
    return "The service is connected"
  }

  function getCriminals(){
      $http
        .get('/criminals')
        .then(function(response){
          self.all = response.data.criminals;
      });
    };

  function addCriminal(){
      $http
        .post('/criminals', self.newCriminal)
        .then(function(response){
          getCriminals();
      });
      self.newCriminal = {};
    };

  function deleteCriminal(criminal){
      $http
        .delete("/criminals/" + criminal._id)
        .then(function(response){
          var index = self.all.indexOf(criminal);
          self.all.splice(index, 1);
        });
    };
};

