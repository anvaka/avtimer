(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.avTimer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var counters = Object.create(null);

/**
 * Starts timer
 * @param {string} name name of the timer
 */
module.exports = start;

/**
 * Prints all timers onto console
 * @param {string} timerName - if present only this timer is printed.
 */
module.exports.print = print;

function start(name) {
  var context = counters[name];
  if (!context) {
    counters[name] = context = {
      calledTimes: 0,
      spent: 0,
      lastStart: 0
    };
  }

  context.calledTimes += 1;
  context.lastStart = window.performance.now();

  return function stop() {
    context.spent += window.performance.now() - context.lastStart;
  }
}

function print(name) {
  if (name === undefined) {
    Object.keys(counters).forEach(printCounter)
  } else {
    printCounter(name);
  }
}

function printCounter(name) {
  var counter = counters[name];
  if (!counter) {
    console.error('Counter with name ' + name + ' does not exist');
  }
  console.log(name + ' called ' + counter.calledTimes + ' times and took ' + counter.spent.toFixed(3) + 'ms total. That is ' + (counter.spent/counter.calledTimes).toFixed(3) + 'ms per call on average');
}

},{}]},{},[1])(1)
});