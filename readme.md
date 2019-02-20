##Performance compare

This repo compares performance of javascript on different implementations.

to run it
```
npm ci
node src/arrayAllocatePerf.js
node src/lodashPerf.js
node src/reduceVsLoop.js
node src/concatVsSpread.js**
```

##Key results
* In general, avoid any array allocation within a loop (including reduce, map, filter, etc)
* lodash helper sometimes has overhead comparing to native javascript method
* Spread object is okay, but spread array is slower than concat
