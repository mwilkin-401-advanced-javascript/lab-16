'use strict';

const fs = require('fs');

require('./events/logger.js');
require('./events/error.js');

const alterFile = (file) => {
  readFile(file)
    .then(data => {
      writeFile(file, convertCase(data));
    });
};


function convertCase(data){
  return data.toUpperCase();
}

// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

function readFile(file) {
  fs.readFile(file, (err, data) => {
    if(err){
      event.emit('error', 'readFile error');
    }
    event.emit('log', 'readFile', `${file} saved`);
    data.toString();
  });
}

function writeFile(file, text) {
  fs.writeFile(file, Buffer.from(text), (err, data) => {
    if(err){
      event.emit('error', 'writeFile error');
    }
    event.emit('log', 'writeFile', `${file} saved`);
  });
}

let file = process.argv.slice(2).shift();
alterFile(file);
