'use strict';

/**
 * error function
 * @function - log
 * @file events/error
 */

// const events = require('./event.js');
require('./event.js');

/**
* error log
* @function log - log error
* @param {Object} event - event when error occured
* @param {Object} payload - message when error occured
* @desc Log function which is emmitted upon an error occuring
 */

function log(event, payload) {
  let errorTime = new Date();
  // console.log(payload);
  console.log({event, errorTime, payload});
}

event.on('error', log);