CriminalsNewController.$inject = ['CriminalsService'];

function CriminalsNewController(CriminalsService) {
  const vm = this;
  vm.addCriminal = addCriminal;
  vm.newCriminal = {};

  // HOW IT DOES STUFF
  function addCriminal(newCriminal) {
    console.log(newCriminal);
    CriminalsService
      .addToList(newCriminal)
      .then(function clearFields(){
        vm.newCriminal = {};
      })
  }
}

module.exports = CriminalsNewController;
