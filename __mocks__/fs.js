'use strict';



module.exports = exports = {};

exports.readFile = (file, cb) => {
  if(file.match(/bad/i)){
    cb('Invalid File');
  }else{
    cb(undefined, Buffer.from('File Contents'));
  }
};

exports.writeFile = (file) => {
  if(file.match(/bad/i)){
    return Buffer.from('File Contents');
  }
};