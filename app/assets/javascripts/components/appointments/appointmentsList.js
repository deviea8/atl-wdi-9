angular
  .module('doctorApp')
  .component('appointmentsList', {
  templateUrl: 'appointments/appointmentsList.template.html',
  controller: AppointmentsListController,
  controllerAs: 'appointmentsListCtrl'
});


function AppointmentsListController($scope, $http) {

  var vm = this;

  vm.appointments = [];

  $http.get('/api/appointments').then(function(resp) {
    vm.appointments = resp.data;
    console.log(vm.appointments)
  });

}
