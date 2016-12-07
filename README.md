# avTimer

Multiple timers in single instance to measure repetitive events performance

# usage

Grab it from npm and use with your favorite bundler:

```
npm install avtimer --save
```

Or download from CDN:

```
<script src='https://cdn.rawgit.com/anvaka/avtimer/v1.0.0/dist/avtimer.min.js'></script>
```

If you downloaded from CDN the library will be available under avTimer global name.

``` js
// Give your timer a friendly name:
var stopIteratorTimer = avTimer('Iterate over binary tree');

// do some work here. E.g. iterate over tree. When you are done, stop the timer:
stopIteratorTimer();

// This will print all timers that you've created, along with how many times
// each timer was called, how much time was spent total, and what's the average
// time cost per operation
avTimer.print();

// Prints:
//
// Iterate over binary tree called 1500 times and took 3612.345ms total.
// That is 2.408per call on average

// You can also print individual timers, by passing name:
avTimer.print('Iterate over binary tree');
```

# Motivation

Most of the time using performance profiling tools in your favorite browser should
be better than using this library. However this library can be useful if you want
to track performance of two code branches, that call shared functionality.

In my case I needed to traverse quad tree in multiple code paths, multiple event
loop cycles. I was not sure  which code path was more expensive. Performance
profiler was showing that tree iterator was the slowest, but I couldn't figure
out which code path to keep.

# license

MIT
