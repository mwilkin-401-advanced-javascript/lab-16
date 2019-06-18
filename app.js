'use strict';

const fs = require('fs');
const event = require('./events/event.js');

require('./events/logger.js');
require('./events/error.js');

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

/**
* @function alterFile 
* @param file - file being altered
* @desc calls readFile and writeFile
 */

const alterFile = (file) => {
  readFile(file)
    .then(data => {
      writeFile(file, convertCase(data));
    });
};

/**
* @function convertCase 
* @param data - data being altered
* @desc changes data to uppercase
 */


function convertCase(data){
  return data.toUpperCase();
}

/**
* @function readFile 
* @param file - file being read from
* @param err - file being altered
* @param data - data being altered
* @desc calls readFile and writeFile
 */


function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if(err){
        event.emit('error', 'readFile error', `${err}`);
      }
      event.emit('log', 'readFile', `${file} saved`);
      resolve(data.toString());
    });

  });
  
}

/**
* @function writeFile 
* @param file - file being writen to
* @param text - text being writen after altered
* @desc calls readFile and writeFile
 */

function writeFile(file, text) {
  return new Promise((resolve, reject) => {

    fs.writeFile(file, Buffer.from(text), (err, data) => {
      if(err){
        event.emit('error', 'writeFile error', `${err}`);
      }
      resolve(event.emit('log', 'writeFile', `${file} saved`));
    });
  });
}

let file = process.argv.slice(2).shift();
alterFile(file);
