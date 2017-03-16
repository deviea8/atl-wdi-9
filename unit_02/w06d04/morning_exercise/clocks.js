var calculate = function(hourhand, minutehand) {
  var degreesOfMinuteHand = minutehand * 6;
  var degreesOfHourHand = (hourhand * 30) + ((hourhand +1) * (minutehand/60));
  if (hourhand > 12 || hourhand < 0 || minutehand > 59 || minutehand < 0) {
    return "out of range";
  }
  else return [degreesOfHourHand, degreesOfMinuteHand];
}

// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};
