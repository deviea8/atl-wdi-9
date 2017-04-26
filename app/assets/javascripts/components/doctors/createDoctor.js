angular
  .module('doctorApp')
  .component('createDoctor', {
  templateUrl: 'doctors/createDoctor.template.html',
  controller: CreateDoctorController,
  controllerAs: 'ctrl'
});


CreateDoctorController.$inject = ['$http', '$window']

function CreateDoctorController($http, $window) {
  var vm = this;
  vm.addDoctor = addDoctor;
  vm.newDoctor = {};

  function addDoctor(newDoctor) {
    console.log(newDoctor);
    console.log( { doctor: newDoctor });
    $http.post('/api/doctors', { doctor: newDoctor })
    .then(function(res) {
      $window.location.href = '/'
    })
  };
};
