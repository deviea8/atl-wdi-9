angular
  .module('doctorApp')
  .component('doctorsList', {
  templateUrl: 'doctors/doctorsList.template.html',
  controller: DoctorsListController,
  controllerAs: 'doctorsListCtrl'
});


function DoctorsListController($scope, $http, $window) {

  var vm = this;
  vm.deleteDoctor = deleteDoctor;
  vm.updateDoctor = updateDoctor;
  vm.doctors = [];
  vm.showForm = showForm;

  $http.get('/api/doctors').then(function(resp) {
    vm.doctors = resp.data;
    console.log(vm.doctors)
  });


  function deleteDoctor(doctor) {
    console.log(doctor.id)
    // var doctor = vm.doctors.indexOf(doctor)
    $http.delete('api/doctors/' + doctor.id)
    .then(function(res) {
      $window.location.href = '/'
    })
  }

  function updateDoctor(doctor) {
    return $http
    .patch('/api/doctors/' + doctor.id, doctor)
    .then(function() {
      doctor.isEditing = false;
    })
  };

  function showForm(doctor){
    doctor.isEditing = true;
    vm.isEditing = true;
    console.log(doctor)
  }
}
