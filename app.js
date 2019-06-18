'use strict';

const fs = require('fs');

require('./events/logger.js');
require('./events/error.js');

const alterFile = (file) => {

};


function convertCase(data){
  return data.toString().toUpperCase();
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

}

function writeFile(file, text) {
  
}

let file = process.argv.slice(2).shift();
alterFile(file);
