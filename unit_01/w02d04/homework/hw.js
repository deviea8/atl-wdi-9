// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

var counterDiv = $( "<div class='counter' id='countMe' data-index='2'><h3 id='countNumArea'>Count: <span id='countNum'>0</span></h3><button class='increment btn btn-default'> + 1 </button><button class='deleteMe btn btn-default'> Delete </button></div>" );

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);
    $('#counterArea').append(counterDiv);
  },
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    // Your Code Here
  },
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    // Your Code Here
  }
};

var clickCounter = 0;

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    var newCounter = Presenter.insertCounterComponent;
    $('.component').append(newCounter);
    $('button.increment').click(function() {
      AppController.onClickIncrement();
    })
    $('button.deleteMe').click(function() {
      AppController.onClickDelete();
    })
  },
  onClickIncrement: function(event){
    clickCounter += 1;
    $('#countNum').text(clickCounter);

  },
  onClickDelete: function(event){
    $('#countMe').remove()
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
