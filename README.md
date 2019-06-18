# Lab 16 Event Driven Applicaions

[![Build Status](https://www.travis-ci.com/mwilkin-401-advanced-javascript/lab-16.svg?branch=dev)](https://www.travis-ci.com/mwilkin-401-advanced-javascript/lab-04)

### Author: Matt Wilkin

### Description

Create an event driven “smart app”

### Links and Resources

* [Submission PR](https://github.com/mwilkin-401-advanced-javascript/lab-04/pull/1)

* [Travis](https://www.travis-ci.com/mwilkin-401-advanced-javascript/lab-16)


### Documentation

* [JSDOC](index.html)

* [UML] <img src="./assets/lab_16_flow_diagram.jpg">

#### Dependencies
* jest

* lint

* jsdoc

* Modules


Exported Values and Methods

### Setup

Running the app

`npm start`

### Tests
How do you run tests?

`npm test`

What assertions were made?
What assertions need to be / should be made?

_________________
_________________

Project Guidelines

Requirements

Refactor the provided application using best practices for modularization, asynchronous file access, and test-ability.

The application currently uses a nested callback to accept a file from the user, open it, uppercase its contents, and then save it back. 

It throws errors on failure and logs out success messages.

The task for today is to refactor the application to use events to surface errors and completion status, while also moving away from the big un-testable callback.

Assignment

The application must accept a filename as a command line parameter

Read the file from the file system

Convert it’s contents to upper case

Write it back to the file system

Following the write operation, report back to the user (console.log) the status

Any and all errors must be thrown

Implementation Details

Ensure that every function has JSDoc Notation

Refactor the use of callbacks for fs operations into promises

You can use util.promisify() to do this.

Separate the functionality of that big callback into it’s parts, so that you can run them independently as well as test.

Read in a file

Uppercase it’s contents (stringify the buffer, upper case it, re-buffer-ize it)

Save back to the file.

Rather than throwing errors and console.log() inline, fire events

Implement a separate event listener to “hear” and “deal” with those events

Modularize the system

Create an event module that has a single event emitter instance

Create a logger module that listens for and responds to events by doing a console.log() with something useful about the event.

Testing

Write tests around all of your units

File Read, File Save, Uppercase

Mock the fs module methods so that your tests don’t use actual files

Test event handlers (not events themselves)

Use spies to help testing your logger methods (assert that console.log was called right)