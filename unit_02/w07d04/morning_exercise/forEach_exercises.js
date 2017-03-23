// 1
var words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach(function(n, index, initial_array){
  words[index] = words[index].capitalize().replace(/ -/g, ":");
})
