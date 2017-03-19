var data = $.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')

$(document).ready(function() {
  $('.get-gif').on('click', retrieveGif);
})

var retrieveGif = function() {
      document.write(data.responseJSON.data[0].url);
}
