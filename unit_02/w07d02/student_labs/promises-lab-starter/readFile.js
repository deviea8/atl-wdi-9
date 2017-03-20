'use strict';

const fs = require('fs');

let inFile = process.argv[2];

var readFile = new Promise(function(resolve, reject) {
  fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
    if(content) {
      resolve(content);
    } else {
    reject(error)
  }});
});

readFile
  .then(function(content) {
    let lines = content.split('\n');
    lines.pop();
    lines.forEach(function(line) {
    console.log('Hello, ' + line + '!');
  })
})
  .catch(function(rejectValue) {
    console.error(rejectValue);
  });
