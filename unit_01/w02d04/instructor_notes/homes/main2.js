$(function() {
  $("#addHome").removeClass('btn-danger').addClass('btn-success')

  var newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' ).insertAfter($('#header'));

  $('#homes .btn').on('click', removeRow)

var removeRow = function() {
    alert('You are about to delete this home')
    console.log(this);
    $(this).closest('tr').fadeOut(1000, function() {
      $(this).closest('tr').remove();
    })
  }

// Object of other addresses.

var newHomes = [
  {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
  {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
  {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
  {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];


var tableTbody = $('table tbody')
var counter = 0;

// To populate new rows in the table, I created 4 variables to grab key-values in the newHomes object.

var newRow1 = $('<tr><td>' + newHomes[0].address + '</td><td>' + newHomes[0].sf + '</td><td>' + newHomes[0].bedrooms + '</td><td>' + newHomes[0].baths + '</td><td>' + newHomes[0].price + '</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>');
var newRow2 = $('<tr><td>' + newHomes[1].address + '</td><td>' + newHomes[1].sf + '</td><td>' + newHomes[1].bedrooms + '</td><td>' + newHomes[1].baths + '</td><td>' + newHomes[1].price + '</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>');
var newRow3 = $('<tr><td>' + newHomes[2].address + '</td><td>' + newHomes[2].sf + '</td><td>' + newHomes[2].bedrooms + '</td><td>' + newHomes[2].baths + '</td><td>' + newHomes[2].price + '</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>');
var newRow4 = $('<tr><td>' + newHomes[3].address + '</td><td>' + newHomes[3].sf + '</td><td>' + newHomes[3].bedrooms + '</td><td>' + newHomes[3].baths + '</td><td>' + newHomes[3].price + '</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>');


// Created functions to add new rows to table based on counter (number of clicks) value.

var addNewHome = function() {
  if (counter === 0) {
    $(tableTbody).append(newRow1);
    console.log('first one triggered')
    counter += 1;
    console.log(counter);
    $('#homes .btn').on('click', removeRow);
  }
  else if (counter === 1) {
    $(tableTbody).append(newRow2);
    console.log('second one triggered')
    counter += 1;
    console.log(counter);
    $('#homes .btn').on('click', removeRow);
  }
  else if (counter === 2) {
    $(tableTbody).append(newRow3);
    console.log('third one triggered')
    counter += 1;
    console.log(counter);
    $('#homes .btn').on('click', removeRow);
  }
  else if (counter === 3) {
    $(tableTbody).append(newRow4);
    console.log('fourth one triggered')
    counter += 1;
    console.log(counter);
    $('#homes .btn').on('click', removeRow);
  }
}

// Click listener on button.

$('#addHome').on('click', addNewHome)

})
