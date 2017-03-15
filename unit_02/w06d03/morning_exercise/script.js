//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  var earthCir = 24901;
  var numGalToTravelAroundEarth = earthCir / milesPerGallon;
  var cost = numGalToTravelAroundEarth * fuelPrice;
  return cost;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  var totalPureFruitJuice = (a * b) + (c * d);
  var totalJuice = a + c;
  return (totalPureFruitJuice / totalJuice)/100;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
