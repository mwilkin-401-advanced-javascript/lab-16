'use strict';

/**
* event emmitter
* @file events/event.js
 */

const EventEmitter = require('events');

const events = new EventEmitter();

/**
* events export
* @type {Object}
 */

module.exports = events;