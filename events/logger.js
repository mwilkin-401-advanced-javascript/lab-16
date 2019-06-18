'use strict';

/**
* log function when a something happens
* @event log
 */

const events = require('./event.js');

/**
* @fucntion log
* @param {Object} event - event that occured
* @param {Object} payload - message to be printed 
* @desc log function emitter
*/

function log(event, payload){
  let logTime = new Date();
  console.log({event, logTime , payload});
}


events.on('log', log);