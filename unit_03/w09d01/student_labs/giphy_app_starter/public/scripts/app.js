$(function() {

console.log('app.js connected');
$('.get-gif').on('click', testFunction);

var replaceJumbotron = function() {
  console.log('replace jumbotron fired');
  $('.image-jumbotron').attr('src', data.data.image_url);
};

var testFunction = function() {
  console.log('test function fired');
}

var randomImage = function() {
  $.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
    .done(function(data) {
      console.log('random image retrieved')
      replaceJumbotron(data);
    });
};

})
