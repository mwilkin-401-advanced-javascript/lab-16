'use strict';

jest.mock('fs');
const event = require('../events/event');

require('../events/logger');
require('../events/error');

const mocks = require('../__mocks__/fs');
let readFile = mocks.readFile;
let writeFile = mocks.writeFile;

describe('error event', () => {
  it('should log an error event when an error has occured', () => {
    let spy = jest.spyOn(console, 'log');
    event.emit('error', 'you ran off the tracks', 'horrible error');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('log event', () => {
  it('should log a message when a save has occured', () => {
    let spy = jest.spyOn(console, 'log');
    event.emit('log', 'saved!', 'save console logged ');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});


describe('readFile method', () => {
  it('should read a file', () => {
    let fileToRead = 'coolFileStuff.txt';
    return readFile(fileToRead, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(fileToRead));
    });
  });
});

describe('writeFile method', () => {
  it('should write a file', () => {

  });
});