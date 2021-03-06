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
