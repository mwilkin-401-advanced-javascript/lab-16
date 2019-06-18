'use strict';

/**
 * events export
 * @type {Object}
 */

module.exports = exports = {};

/**
 * read file mock
 * @type {Object}
 * @desc mocking reading a bad file
 */

exports.readFile = (file, cb) => {
  if(file.match(/bad/i)){
    cb('Invalid File');
  }else{
    cb(undefined, Buffer.from('File Contents'));
  }
};

/**
 * write file mock
 * @type {Object}
 * @desc mocking writing a bad file
 */

exports.writeFile = (file, buffer, cb) => {
  if(file.match(/bad/i)){
    cb('Invalid file');
  } else {
    cb(undefined, Buffer.from('File Contents'));  
  }
};