(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("hammerjs"));
	else if(typeof define === 'function' && define.amd)
		define(["hammerjs"], factory);
	else if(typeof exports === 'object')
		exports["WS"] = factory(require("hammerjs"));
	else
		root["WS"] = factory(root["Hammer"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_hammerjs__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/waveshaper/dist/waveshaper.js":
/*!****************************************************!*\
  !*** ./node_modules/waveshaper/dist/waveshaper.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/weighted-interval-merge/dist/weighted-interval-merge.js":
/*!******************************************************************************!*\
  !*** ./node_modules/weighted-interval-merge/dist/weighted-interval-merge.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * @typedef {Object} Interval
   * 
   * @property {number} start
   * @property {number} offsetStart
   * @property {number} end
   * @property {number} index
   */

  /**
   * @typedef {{[key: string]: Interval}} IntervalMap
   */

  /**
   * @param {Interval} interval
   */
  var calcStart = function calcStart(interval) {
    return interval.start + interval.offsetStart;
  };

  /**
   * The algorithm first calculates real start and end times of each segment,
   * sorts them by priority, then start time.
   *
   * Finally it merges the segments by index so there are no overlapping
   * segments and those with highest index are on top.
   *
   * @export
   * @param {Interval[]} intervals Segments to flatten
   * @returns {Interval[]} flattened Interval array
   */
  var weightedIntervalMerge = function weightedIntervalMerge(intervals) {
    if (intervals == null || intervals.length === 0) return [];

    var sorted = sort(intervals);
    var normalized = normalizeIndex(sorted);
    var copied = copy(normalized);
    var grouped = groupByIndex(copied);

    return weightedMerge(grouped);
  };

  /**
   * Copies elements so original are unaltered
   * 
   * @param {Interval[]} intervals 
   */
  var copy = function copy(intervals) {
    return intervals.map(function (i) {
      return _extends({}, i, {
        offsetStart: i.offsetStart || 0,
        index: i.index || 1
      });
    });
  };

  /**
   * When an element is altered the index is set very high,
   * this functions normalizes to indexes back to 0
   * 
   * @param {Intervalp[]} intervals 
   */
  var normalizeIndex = function normalizeIndex(intervals) {
    var index = 0;
    var preNormalizeIndex = Number.MIN_SAFE_INTEGER;
    intervals.forEach(function (el) {
      if (el.index > preNormalizeIndex) {
        preNormalizeIndex = el.index;
        el.index = ++index;
      } else {
        el.index = index;
      }
    });
    return intervals;
  };

  /**
   * Sorts the intervals by index, then by start
   * 
   * @param {Interval[]} intervals 
   * @return {Interval[]} Interval array
   */
  var sort = function sort(intervals) {
    return intervals.sort(function (a, b) {
      return cmp(a.index, b.index) || cmp(calcStart(a), calcStart(b));
    });
  };

  /**
   * Returns a map of intervals grouped by the key property
   * 
   * @param {Interval[]} intervals 
   * @returns {IntervalMap} Map of index => interval[]
   */
  var groupByIndex = function groupByIndex(intervals) {
    return intervals.reduce(function (groups, interval) {
      (groups[interval.index] = groups[interval.index] || []).push(interval);
      return groups;
    }, {});
  };

  /**
   * Merges all the groups by index
   * 
   * @param {IntervalMap} grouped 
   * @returns {Interval[]} Interval array
   */
  var weightedMerge = function weightedMerge(grouped) {
    var flattened = null;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.keys(grouped)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var index = _step.value;

        var merged = merge(grouped[index]);
        if (flattened == null) {
          flattened = merged;
        } else {
          flattened = combine(merged, flattened);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return flattened;
  };

  /**
   * Merges a set of intervals with the same index and remove any overlaps, left to right
   * 
   * @param {Interval[]} intervals 
   * @returns {Interval[]} Interval array
   */
  var merge = function merge(intervals) {
    if (intervals.length <= 1) return intervals;

    var result = [];

    var current = intervals[0];
    for (var i = 1; i < intervals.length; i++) {
      var next = intervals[i];

      // If current is completely overlapped by second it is merged into it
      if (current.end >= next.end) {
        continue;
        // Resolves partial overlaps by setting end of current to start of next
      } else if (calcStart(next) < current.end) {
        result.push(_extends({}, current, { end: calcStart(next) }));
        current = next;
      } else {
        // No overlap, push onto results
        result.push(current);
        current = next;
      }
    }

    result.push(current);
    return result;
  };

  /**
   * Given two sets of intervals it merges them so the highIndexes set has priority
   *
   * @param {Interval[]} highIndexes
   * @param {Interval[]} lowIndexes
   * 
   * @returns {Interval[]} Interval array
   */
  var combine = function combine(highIndexes, lowIndexes) {
    var highIndex = 0;
    var lowIndex = 0;

    var merged = [];

    while (highIndex < highIndexes.length || lowIndex < lowIndexes.length) {

      var high = highIndexes[highIndex];
      var low = lowIndexes[lowIndex];

      // Only low priority left so push low onto results
      if (highIndex === highIndexes.length) {
        merged.push(_extends({}, low));
        lowIndex++;
        // Only high priority left so push high onto results
      } else if (lowIndex === lowIndexes.length) {
        merged.push(_extends({}, high));
        highIndex++;
        // High priority start before or at same time as low
      } else if (calcStart(high) <= calcStart(low)) {
        // No overlap between low and high
        // low:                 ----------------------
        // high: ---------------
        if (high.end <= calcStart(low)) ; else if (high.end < low.end) {
          low.offsetStart = high.end - low.start;
          // Low index completely overlapped, dismiss it
          // low:               -----------
          // high: -------------------------------------
        } else {
          lowIndex++;
        }

        merged.push(_extends({}, high));
        highIndex++;
        // Low priority starts before high
      } else {
        // No overlap between low and high intervals
        // low: ---------------
        // high                ----------------------
        if (low.end <= calcStart(high)) {
          merged.push(_extends({}, low));
          lowIndex++;
          // Partial overlap where high ends after low
          // low: ---------------------
          // high                ----------------------
        } else if (high.end > low.end) {
          merged.push(_extends({}, low, { end: calcStart(high) }));
          lowIndex++;
          // Partial overlap where high ends before low
          // low: -------------------------------------
          // high             -----------
        } else {
          merged.push(_extends({}, low, { end: calcStart(high) }));
          low.offsetStart = high.end - low.start;
        }
      }
    }

    return merged;
  };

  /**
   *
   * @param {number} a
   * @param {number} b
   */
  var cmp = function cmp(a, b) {
    if (a > b) return +1;
    if (a < b) return -1;
    return 0;
  };

  exports.weightedIntervalMerge = weightedIntervalMerge;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./src/config/managerconfig.ts":
/*!*************************************!*\
  !*** ./src/config/managerconfig.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var defaultOptions = {
    scrollPosition: 0,
    samplesPerPixel: 1024,
    resolution: 10,
    meterType: 'rms',
    width: 300,
    samplerate: 44100
};
exports.default = defaultOptions;


/***/ }),

/***/ "./src/core/track.ts":
/*!***************************!*\
  !*** ./src/core/track.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var peak_1 = __webpack_require__(/*! ../strategies/peak */ "./src/strategies/peak.ts");
var rms_1 = __webpack_require__(/*! ../strategies/rms */ "./src/strategies/rms.ts");
var weighted_interval_merge_1 = __webpack_require__(/*! weighted-interval-merge */ "./node_modules/weighted-interval-merge/dist/weighted-interval-merge.js");
var Track = /** @class */ (function () {
    function Track(id, intervals, width) {
        this.width = width;
        this._lastValue = new Float32Array(this.width * 4);
        this.id = id;
        this.intervals = intervals || [];
        this._flattened = weighted_interval_merge_1.weightedIntervalMerge(this.intervals);
    }
    Object.defineProperty(Track.prototype, "flattened", {
        get: function () {
            return this._flattened.slice();
        },
        enumerable: true,
        configurable: true
    });
    Track.prototype.flatten = function () {
        this._flattened = weighted_interval_merge_1.weightedIntervalMerge(this.intervals);
    };
    /**
     * Gets the duration of the audio in seconds
     *
     * @returns Decimal value of total duration in seconds
     */
    Track.prototype.getDuration = function () {
        return Math.max.apply(Math, this.intervals.map(function (s) { return s.end; }));
    };
    /**
     * Gets the summerized values for the current settings
     *
     * @param options
     * @param dataMap
     * @returns Two dimensional array, one entry for each pixel, for each pixel a min
     * and a max value.
     */
    Track.prototype.calculate = function (options, dataMap, start, width, shift) {
        switch (options.meterType) {
            case "peak":
                this._lastValue = peak_1.default(options, this.flattened, dataMap, start, width, shift, this._lastValue);
                break;
            default:
                this._lastValue = rms_1.default(options, this.flattened, dataMap, start, width, shift, this._lastValue);
                break;
        }
        return this._lastValue;
    };
    return Track;
}());
exports.default = Track;


/***/ }),

/***/ "./src/core/waveshaper.ts":
/*!********************************!*\
  !*** ./src/core/waveshaper.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var track_1 = __webpack_require__(/*! ./track */ "./src/core/track.ts");
var managerconfig_1 = __webpack_require__(/*! ../config/managerconfig */ "./src/config/managerconfig.ts");
/**
 *
 *
 * @export
 */
var WaveShaper = /** @class */ (function () {
    /**
     * @param [options=defaultOptions] Initial options
     * @throws Throws an error if samplerate is null or NaN
     */
    function WaveShaper(options) {
        if (options === void 0) { options = managerconfig_1.default; }
        /**
         * Map of waveshapers managed by the manager
         *
         * @readonly
         * @memberof WaveShaper
         */
        this.tracks = new Map();
        /**
         * Map of audio data
         *
         * @readonly
         * @memberof WaveShaper
         */
        this.audioData = new Map();
        /**
         * @description Map of callback functions
         *
         * @readonly
         * @memberof WaveShaper
         */
        this.callbackMap = new Map();
        /**
         * @description Segment callback functions
         *
         * @readonly
         * @memberof WaveShaper
         */
        this.segmentCallbackMap = new Array();
        /**
         * @description Options callbacks
         *
         * @readonly
         * @memberof WaveShaper
         */
        this.optionsCallbacks = new Array();
        this._activeWaveShapers = [];
        this.validateOptions(options);
        this._options = __assign({}, managerconfig_1.default, options);
    }
    Object.defineProperty(WaveShaper.prototype, "options", {
        /**
         * @description Currect settings
         *
         * @readonly
         * @memberof WaveShaper
         */
        get: function () {
            return __assign({}, this._options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaveShaper.prototype, "activeWaveShapers", {
        /**
         * @description Active id's, redraws when draw is called without argument
         *
         * @readonly
         * @unused
         * @memberof WaveShaper
         */
        get: function () {
            return this._activeWaveShapers.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaveShaper.prototype, "lastProcessResult", {
        /**
         * @description Last result of calling process, argument given to all callbacks
         *
         * @readonly
         * @memberof WaveShaper
         */
        get: function () {
            return this._lastProcessResult;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WaveShaper.prototype, "duration", {
        /**
         * @description Total duration of all tracks
         *
         * @readonly
         * @memberof WaveShaper
         */
        get: function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gives the position corresponding to a given time
     *
     * @param time
     */
    WaveShaper.prototype.timeToPosition = function (time) {
        return (time * this._options.samplerate) / this._options.samplesPerPixel;
    };
    /**
     * Gives the time corresponding to a given position
     * @param position
     */
    WaveShaper.prototype.positionToTime = function (position) {
        return ((position * this._options.samplesPerPixel) / this._options.samplerate);
    };
    /**
     * @description Flattens the segments of the given waveshaper id
     *
     * @param id
     * @returns WaveShaper instance
     */
    WaveShaper.prototype.flatten = function (ids) {
        var _this = this;
        if (ids === void 0) { ids = []; }
        this.getProcessIds(ids).forEach(function (id) {
            var waveShaper = _this.getTrack(id);
            if (waveShaper != null)
                waveShaper.flatten();
        });
        return this;
    };
    /**
     * Processes all relevant WaveShapers and invokes registered callbacks
     *
     * @param ids Options array of id's to draw
     * @param start Start position
     * @param width Width to process
     * @param shift Units to shift current data
     *
     * @returns WaveShaper instance
     */
    WaveShaper.prototype.process = function (ids, start, width, shift) {
        if (ids === void 0) { ids = []; }
        if (start === void 0) { start = 0; }
        if (width === void 0) { width = this.options.width; }
        if (shift === void 0) { shift = 0; }
        var toProcess = this.getProcessIds(ids);
        var options = __assign({}, this.options);
        var data = [];
        for (var i = 0; i < toProcess.length; i++) {
            var id = toProcess[i];
            var wave = this.getTrack(id);
            if (wave == null)
                continue;
            var peaks = wave.calculate(options, this.audioData, start, width, shift);
            data.push({ id: id, data: peaks });
        }
        // Invoke callbacks after returning value.
        this._lastProcessResult = { options: options, data: data };
        this.invokeCallbacks(this._lastProcessResult, start, width, shift);
        return this;
    };
    /**
     * Registers a callback that fires when the track with given id is processed
     *
     * @param id id of Track to register to
     * @param callBack will be invoked when the given track is processed
     *
     * @returns WaveShaper instance
     */
    WaveShaper.prototype.on = function (id, callBack) {
        var callbackArray = this.callbackMap.get(id);
        if (callbackArray == null) {
            this.callbackMap.set(id, [callBack]);
        }
        else {
            callbackArray.push(callBack);
        }
        return this;
    };
    /**
     * Unregisters a callback from the given track, will no longer be called
     *
     * @param id id of Track to unregister from
     * @param callBack callback to remove
     *
     * @returns WaveShaper instance
     */
    WaveShaper.prototype.off = function (id, callBack) {
        var callbackArray = this.callbackMap.get(id);
        if (callbackArray == null)
            return this;
        var index = callbackArray.indexOf(callBack);
        if (index < 0)
            return this;
        callbackArray = callbackArray.splice(index, 1);
        return this;
    };
    /**
     * Adds a callback that is triggered when an Interval is updated
     *
     * @param cb Callback function
     */
    WaveShaper.prototype.onSegment = function (cb) {
        this.segmentCallbackMap.push(cb);
    };
    /**
     * Removes a previously added callback for the Interval update callback
     *
     * @param cb Callback function
     */
    WaveShaper.prototype.offSegment = function (cb) {
        var index = this.segmentCallbackMap.indexOf(cb);
        if (index !== -1) {
            this.segmentCallbackMap.splice(index, 1);
        }
    };
    /**
     * Emits a segment update
     *
     * @param old Old interval
     * @param changed Updated interval
     */
    WaveShaper.prototype.emitSegment = function (old, changed) {
        this.segmentCallbackMap.forEach(function (cb) { return cb(old, changed); });
    };
    /**
     * Adds a callback that is fired when options are updated
     *
     * @param cb Callback function
     */
    WaveShaper.prototype.onOptions = function (cb) {
        this.optionsCallbacks.push(cb);
    };
    /**
     * Removes a previously added callback
     * @param cb Callback function
     */
    WaveShaper.prototype.offOptions = function (cb) {
        var index = this.optionsCallbacks.indexOf(cb);
        if (index !== -1) {
            this.optionsCallbacks.splice(index, 1);
        }
    };
    /**
     * Emits an options update
     *
     * @param old Old options
     * @param updated New options
     */
    WaveShaper.prototype.emitOptions = function (old, updated) {
        this.optionsCallbacks.forEach(function (cb) { return cb(old, updated); });
    };
    /**
     * @description Merges the given options into the current and returns updated options
     *
     * @param options A (partial) ManagerOptions object
     * @returns WaveShaper instance
     */
    WaveShaper.prototype.setOptions = function (options) {
        this.validateOptions(options);
        var oldOptions = __assign({}, this.options);
        this._options = __assign({}, oldOptions, options);
        this.emitOptions(oldOptions, this.options);
        return this;
    };
    /**
     * @description Adds a waveshaper to the manager
     *
     * @param id id of WaveShaper
     * @param segments Segments in wave
     * @param color Background color of segments
     *
     * @returns WaveShaper instance
     */
    WaveShaper.prototype.setTracks = function () {
        var tracks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tracks[_i] = arguments[_i];
        }
        for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i];
            var foundWave = this.getTrack(track.id);
            if (foundWave == null) {
                var wave = new track_1.default(track.id, track.intervals, this._options.width);
                this.tracks.set(track.id, wave);
            }
            else {
                foundWave.intervals = track.intervals || [];
                foundWave.flatten();
            }
        }
        this._duration = this.getDuration();
        return this;
    };
    /**
     * @description Adds audio data to the waveshaper and redraws waveshapers using it
     *
     * @param id  Data id, refered to by source parameter of segments
     * @param data AudioBuffer with audio data
     *
     * @returns WaveShaper instance
     */
    WaveShaper.prototype.setData = function () {
        var _this = this;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        data.forEach(function (d) {
            _this.audioData.set(d.id, d.data);
        });
        return this;
    };
    /**
     * @description The given id's are set as the active waveshapers, process only processes these when set,
     * call with no values to allways process all values (default)
     *
     * @param ids Waveshaper id's to set as active
     *
     * @returns WaveShaper instance
     */
    WaveShaper.prototype.setActive = function () {
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        this._activeWaveShapers = ids;
        return this;
    };
    /**
     * @description Removes the waves and all callbacks with given id from the manager
     *
     * @param id
     *
     * @returns WaveShaper instance
     */
    WaveShaper.prototype.clearTracks = function () {
        var _this = this;
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        ids.forEach(function (id) {
            _this.removeCallbacksById(id);
            _this.tracks.delete(id);
        });
        return this;
    };
    /**
     * @description Gets Track with given id
     *
     * @param id
     * @returns Track with given ID
     */
    WaveShaper.prototype.getTrack = function (id) {
        return this.tracks.get(id);
    };
    /**
     * Validates given options
     *
     * @param options
     * @returns true if valid, false if not
     */
    WaveShaper.prototype.validateOptions = function (options) {
        var currentOptions = this._options || managerconfig_1.default;
        if (!options.samplesPerPixel || options.samplesPerPixel <= 0) {
            options.samplesPerPixel = currentOptions.samplesPerPixel;
        }
        if (!options.meterType) {
            options.meterType = currentOptions.meterType;
        }
        if (!options.resolution || options.resolution <= 0) {
            options.resolution = currentOptions.resolution;
        }
        if (!options.width || this.options.width <= 0) {
            options.width = currentOptions.width;
        }
        if (!options.scrollPosition || this.options.scrollPosition <= 0) {
            options.scrollPosition = currentOptions.scrollPosition;
        }
        if (!options.samplerate || this.options.samplerate <= 0) {
            options.samplerate = currentOptions.samplerate;
        }
    };
    /**
     * Invokes all registered callbacks registered to a waveshaper id in the data list
     *
     * @param options
     * @param data
     */
    WaveShaper.prototype.invokeCallbacks = function (result, start, width, shift) {
        for (var i = 0; i < result.data.length; i++) {
            var trackResult = result.data[i];
            var callbacks = this.callbackMap.get(trackResult.id);
            if (callbacks == null)
                continue;
            for (var j = 0; j < callbacks.length; j++) {
                var callback = callbacks[j];
                callback(result.options, new Float32Array(trackResult.data), start, width, shift);
            }
        }
    };
    WaveShaper.prototype.getProcessIds = function (ids) {
        if (ids.length > 0)
            return ids;
        if (this._activeWaveShapers.length > 0)
            return this._activeWaveShapers;
        return Array.from(this.tracks.keys());
    };
    WaveShaper.prototype.removeCallbacksById = function (id) {
        var callbackArray = this.callbackMap.get(id);
        if (callbackArray == null)
            return;
        callbackArray.splice(0, callbackArray.length);
        this.callbackMap.delete(id);
    };
    /**
     * @description Returns the maximum duration of all the waveshapers managed by this class
     *
     * @returns Maximum duration in seconds
     * @memberof WaveShaper
     */
    WaveShaper.prototype.getDuration = function () {
        return Array.from(this.tracks.values()).reduce(function (maxDuration, waveShaper) {
            var duration = waveShaper.getDuration();
            return duration > maxDuration ? duration : maxDuration;
        }, 0);
    };
    return WaveShaper;
}());
exports.default = WaveShaper;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var waveshaper_1 = __webpack_require__(/*! ./core/waveshaper */ "./src/core/waveshaper.ts");
exports.WaveShaper = waveshaper_1.default;
var track_1 = __webpack_require__(/*! ./core/track */ "./src/core/track.ts");
exports.Track = track_1.default;
var managerconfig_1 = __webpack_require__(/*! ./config/managerconfig */ "./src/config/managerconfig.ts");
exports.defaultConfig = managerconfig_1.default;
var rms_1 = __webpack_require__(/*! ./strategies/rms */ "./src/strategies/rms.ts");
exports.rms = rms_1.default;
var peak_1 = __webpack_require__(/*! ./strategies/peak */ "./src/strategies/peak.ts");
exports.peak = peak_1.default;


/***/ }),

/***/ "./src/strategies/peak.ts":
/*!********************************!*\
  !*** ./src/strategies/peak.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculates peak values
 *
 * @export
 * @param resolution
 * @param samplesPerPixel
 * @param width
 * @param intervals
 * @param scrollPosition
 * @param sampleRate
 * @param dataMap
 * @returns
 */
exports.default = (function (options, intervals, dataMap, startPosition, width, shift, lastValue) {
    var sampleSize = Math.ceil(options.samplesPerPixel / options.resolution);
    var start = options.scrollPosition * options.samplesPerPixel;
    var startSecond = start / options.samplerate;
    var secondsPerPixel = options.samplesPerPixel / options.samplerate;
    var calcStartSecond = startSecond + startPosition * secondsPerPixel;
    var calcEndSecond = calcStartSecond + width * secondsPerPixel;
    var absShift = Math.abs(shift) * 4;
    var shiftTarget = shift > 0 ? 0 : absShift;
    var shiftStart = shift > 0 ? absShift : 0;
    var peaks = new Float32Array(lastValue.buffer)
        .copyWithin(shiftTarget, shiftStart)
        .fill(0, startPosition * 4, (startPosition + width) * 4);
    var currentIntervalIndex = intervals.findIndex(function (i) { return i.end > calcStartSecond && i.start + i.offsetStart < calcEndSecond; });
    // There are no intervals in this range so return empty array
    if (currentIntervalIndex === -1)
        return peaks;
    var maxIntervalIncrementIndex = intervals.length - 1;
    var currentInterval = intervals[currentIntervalIndex];
    var buffer = dataMap.get(currentInterval.source);
    // For each pixel we display
    for (var i = startPosition; i < startPosition + width; i++) {
        var currentSecond = startSecond + i * secondsPerPixel;
        if (currentSecond >= currentInterval.end) {
            if (currentIntervalIndex === maxIntervalIncrementIndex) {
                return peaks;
            }
            else {
                currentInterval = intervals[++currentIntervalIndex];
                buffer = dataMap.get(currentInterval.source);
            }
        }
        if (currentInterval.start + currentInterval.offsetStart > currentSecond) {
            peaks.set([0, 0, 0, 0], i * 4);
            continue;
        }
        var startBorder = currentSecond - secondsPerPixel <
            currentInterval.start + currentInterval.offsetStart;
        var endBorder = currentSecond + secondsPerPixel > currentInterval.end;
        var intervalBorder = startBorder || endBorder ? 1 : 0;
        if (buffer == null) {
            peaks.set([0, 0, intervalBorder, 1], i * 4);
            continue;
        }
        var secondsIntoInterval = currentSecond - currentInterval.start;
        var startSample = Math.floor(secondsIntoInterval * options.samplerate);
        var endSample = startSample + options.samplesPerPixel;
        var length_1 = buffer.length;
        var loopEnd = length_1 < endSample ? length_1 : endSample;
        // Cycle through the data-points relevant to the pixel
        // Don't cycle through more than sampleSize frames per pixel.
        var min = 0, max = 0;
        for (var j = startSample; j < loopEnd; j += sampleSize) {
            var sample = buffer[j];
            // Keep track of positive and negative values separately
            if (sample > max)
                max = sample;
            else if (sample < min)
                min = sample;
        }
        peaks.set([min, max, intervalBorder, 1], i * 4);
    }
    return peaks;
});


/***/ }),

/***/ "./src/strategies/rms.ts":
/*!*******************************!*\
  !*** ./src/strategies/rms.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculate rms values
 *
 * @export
 * @param resolution
 * @param samplesPerPixel
 * @param width
 * @param intervals
 * @param scrollPosition
 * @param sampleRate
 * @param dataMap
 * @returns
 */
exports.default = (function (options, intervals, dataMap, startPosition, width, shift, lastValue) {
    var sampleSize = Math.ceil(options.samplesPerPixel / options.resolution);
    var start = options.scrollPosition * options.samplesPerPixel;
    var startSecond = start / options.samplerate;
    var secondsPerPixel = options.samplesPerPixel / options.samplerate;
    var calcStartSecond = startSecond + startPosition * secondsPerPixel;
    var calcEndSecond = calcStartSecond + width * secondsPerPixel;
    var absShift = Math.abs(shift) * 4;
    var shiftTarget = shift > 0 ? 0 : absShift;
    var shiftStart = shift > 0 ? absShift : 0;
    var peaks = new Float32Array(lastValue.buffer)
        .copyWithin(shiftTarget, shiftStart)
        .fill(0, startPosition * 4, (startPosition + width) * 4);
    var currentIntervalIndex = intervals.findIndex(function (i) { return i.end > calcStartSecond && i.start + i.offsetStart < calcEndSecond; });
    // There are no intervals in this range so return empty array
    if (currentIntervalIndex === -1) {
        return peaks;
    }
    var maxIntervalIncrementIndex = intervals.length - 1;
    var currentInterval = intervals[currentIntervalIndex];
    var buffer = dataMap.get(currentInterval.source);
    // For each pixel we display
    for (var i = startPosition; i < startPosition + width; i++) {
        var currentSecond = startSecond + i * secondsPerPixel;
        if (currentSecond >= currentInterval.end) {
            if (currentIntervalIndex === maxIntervalIncrementIndex) {
                return peaks;
            }
            else {
                currentInterval = intervals[++currentIntervalIndex];
                buffer = dataMap.get(currentInterval.source);
            }
        }
        if (currentInterval.start + currentInterval.offsetStart > currentSecond) {
            peaks.set([0, 0, 0, 0], i * 4);
            continue;
        }
        var startBorder = currentSecond - secondsPerPixel <
            currentInterval.start + currentInterval.offsetStart;
        var endBorder = currentSecond + secondsPerPixel > currentInterval.end;
        var intervalBorder = startBorder || endBorder ? 1 : 0;
        if (buffer == null) {
            peaks.set([0, 0, intervalBorder, 1], i * 4);
            continue;
        }
        var secondsIntoInterval = currentSecond - currentInterval.start;
        var startSample = Math.floor(secondsIntoInterval * options.samplerate);
        var endSample = startSample + options.samplesPerPixel;
        var length_1 = buffer.length;
        var loopEnd = length_1 < endSample ? length_1 : endSample;
        // Cycle through the data-points relevant to the pixel
        // Don't cycle through more than sampleSize frames per pixel.
        var posSum = 0, negSum = 0, count = 0;
        for (var j = startSample; j < loopEnd; j += sampleSize, count++) {
            var val = buffer[j];
            // Keep track of positive and negative values separately
            if (val > 0) {
                posSum += val * val;
            }
            else {
                negSum += val * val;
            }
        }
        var min = -Math.sqrt(negSum / count);
        var max = Math.sqrt(posSum / count);
        peaks.set([min, max, intervalBorder, 1], i * 4);
    }
    return peaks;
});


/***/ })

/******/ });
});
//# sourceMappingURL=waveshaper.js.map

/***/ }),

/***/ "./src/config/dom-config.ts":
/*!**********************************!*\
  !*** ./src/config/dom-config.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var waveshaper_1 = __webpack_require__(/*! waveshaper */ "./node_modules/waveshaper/dist/waveshaper.js");
var defaultDomOptions = __assign({}, waveshaper_1.defaultConfig, { mode: 'pan', height: 150, getEventTarget: function (ev) { return ev.target; }, generateId: function () { return Math.random().toString(); }, registerSetsActive: true, clampFn: function (n) { return n; } });
exports.default = defaultDomOptions;


/***/ }),

/***/ "./src/config/hammerconfig.ts":
/*!************************************!*\
  !*** ./src/config/hammerconfig.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Hammer = __webpack_require__(/*! hammerjs */ "hammerjs");
var hammerOptions = {
    touchAction: 'pan-y',
    recognizers: [
        [Hammer.Pan, { direction: Hammer.DIRECTION_HORIZONTAL }],
        [Hammer.Pinch, { enable: true }],
        [Hammer.Tap]
    ]
};
exports.default = hammerOptions;


/***/ }),

/***/ "./src/core/domrender-waveshaper.ts":
/*!******************************************!*\
  !*** ./src/core/domrender-waveshaper.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var waveshaper_1 = __webpack_require__(/*! waveshaper */ "./node_modules/waveshaper/dist/waveshaper.js");
var Hammer = __webpack_require__(/*! hammerjs */ "hammerjs");
var hammerconfig_1 = __webpack_require__(/*! ../config/hammerconfig */ "./src/config/hammerconfig.ts");
var cut_1 = __webpack_require__(/*! ../interactions/cut */ "./src/interactions/cut.ts");
var drag_1 = __webpack_require__(/*! ../interactions/drag */ "./src/interactions/drag.ts");
var pan_1 = __webpack_require__(/*! ../interactions/pan */ "./src/interactions/pan.ts");
var zoom_1 = __webpack_require__(/*! ../interactions/zoom */ "./src/interactions/zoom.ts");
var resize_1 = __webpack_require__(/*! ../interactions/resize */ "./src/interactions/resize.ts");
var line_1 = __webpack_require__(/*! ../render/line */ "./src/render/line.ts");
var enter_1 = __webpack_require__(/*! ../interactions/enter */ "./src/interactions/enter.ts");
var dom_config_1 = __webpack_require__(/*! ../config/dom-config */ "./src/config/dom-config.ts");
var dragstate_1 = __webpack_require__(/*! ../models/dragstate */ "./src/models/dragstate.ts");
/**
 * Extends WaveShapeManager to allow for easy canvas rendering registration.
 *
 * @inheritDoc
 */
var DomRenderWaveShaper = /** @class */ (function (_super) {
    __extends(DomRenderWaveShaper, _super);
    function DomRenderWaveShaper(options) {
        if (options === void 0) { options = dom_config_1.default; }
        var _this = _super.call(this, options) || this;
        _this.unregister = function () { };
        _this.unregisterMap = new Map();
        _this.canvasMap = new Map();
        _this.cutCallbacks = [];
        _this._options = __assign({}, dom_config_1.default, _this._options);
        return _this;
    }
    Object.defineProperty(DomRenderWaveShaper.prototype, "scrollWidth", {
        get: function () {
            return ((this._duration * this._options.samplerate) /
                this._options.samplesPerPixel);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomRenderWaveShaper.prototype, "options", {
        get: function () {
            return __assign({}, this._options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomRenderWaveShaper.prototype, "hammer", {
        get: function () {
            return this._hammer;
        },
        enumerable: true,
        configurable: true
    });
    DomRenderWaveShaper.prototype.setOptions = function (input) {
        var oldOptions = __assign({}, this.options);
        this._options = __assign({}, oldOptions, input);
        this.emitOptions(oldOptions, this.options);
        return this;
    };
    /**
     * @description When a canvas is registered through this method each time the
     * waveform is updated the canvas will be rerendered.
     *
     * It returns an unregister method, call to stop receiving callbacks.
     *
     * @param id WaveShaper id to register to.
     * @param canvas Canvas to render to
     * @param color Background color of segments
     */
    DomRenderWaveShaper.prototype.registerCanvas = function (id, canvas, color) {
        var _this = this;
        var ctx = canvas.getContext("2d");
        if (ctx == null)
            throw Error("Cannot get context from canvas.");
        // Add classes and data attributes
        canvas.classList.add("waveshaper");
        canvas.setAttribute("data-wave-id", id);
        canvas.style.width = this.options.width + "px";
        canvas.style.height = this.options.height + "px";
        var scale = (devicePixelRatio || 1) < 1 ? 1 : devicePixelRatio || 1;
        canvas.width = this.options.width * scale;
        canvas.height = this.options.height;
        ctx.scale(scale, 1);
        var callBack = function (options, data) {
            return line_1.default(data, options, ctx, color);
        };
        this.on(id, callBack);
        this.unregisterCanvas(id);
        this.canvasMap.set(id, function () { return _this.off(id, callBack); });
        var unregister = enter_1.default(this, canvas, dragstate_1.dragState);
        this.unregisterMap.set(id, unregister);
        // If registerSetsActive is true
        if (this._options.registerSetsActive) {
            this.setActive.apply(this, this.activeWaveShapers.concat(id));
        }
        return this;
    };
    /**
     * Clears the callbacks associated with this canvas
     *
     * @param id
     * @returns Instance of WaveShaper
     */
    DomRenderWaveShaper.prototype.unregisterCanvas = function (id) {
        var unregister = this.canvasMap.get(id);
        if (unregister != null) {
            unregister();
            this.canvasMap.delete(id);
        }
        var unregisterEvents = this.unregisterMap.get(id);
        if (unregisterEvents != null) {
            unregisterEvents();
            this.unregisterMap.delete(id);
        }
        if (this._options.registerSetsActive) {
            var index = this.activeWaveShapers.indexOf(id);
            if (index != -1) {
                this.setActive.apply(this, this.activeWaveShapers.filter(function (trackId) { return trackId !== id; }));
            }
        }
        return this;
    };
    DomRenderWaveShaper.prototype.emitCut = function (original, left, right) {
        this.cutCallbacks.forEach(function (cb) { return cb(original, left, right); });
    };
    DomRenderWaveShaper.prototype.onCut = function (cb) {
        this.cutCallbacks.push(cb);
    };
    /**
     * Loads and saves a set of url's to audio files.
     *
     * @param ctx
     * @param data
     */
    DomRenderWaveShaper.prototype.loadData = function (ctx) {
        var _this = this;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        data.forEach(function (dat) {
            fetch(dat.url)
                .then(function (res) { return res.arrayBuffer(); })
                .then(function (arrayBuffer) { return ctx.decodeAudioData(arrayBuffer); })
                .then(function (audioBuffer) {
                _this.setData({
                    id: dat.id,
                    data: audioBuffer.getChannelData(0)
                }).process();
            })
                .catch(function (e) { return console.log(e); });
        });
        return this;
    };
    DomRenderWaveShaper.prototype.setInteraction = function (element) {
        if (element == null)
            throw Error("Interaction container element could not be found.");
        this.unregister();
        element.setAttribute("touch-action", "none");
        var hammer = new Hammer(element, hammerconfig_1.default);
        this._hammer = hammer;
        drag_1.default(this, hammer, dragstate_1.dragState);
        cut_1.default(this, hammer);
        pan_1.default(this, hammer);
        zoom_1.default(this, hammer);
        resize_1.default(this, hammer);
        this.unregister = function () {
            hammer.destroy();
        };
        return this;
    };
    DomRenderWaveShaper.prototype.clearInteraction = function () {
        this.unregister();
        this.unregister = function () { };
        this._hammer = null;
    };
    return DomRenderWaveShaper;
}(waveshaper_1.WaveShaper));
exports.default = DomRenderWaveShaper;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var domrender_waveshaper_1 = __webpack_require__(/*! ./core/domrender-waveshaper */ "./src/core/domrender-waveshaper.ts");
exports.DomRenderWaveShaper = domrender_waveshaper_1.default;
exports.default = new domrender_waveshaper_1.default();


/***/ }),

/***/ "./src/interactions/cut.ts":
/*!*********************************!*\
  !*** ./src/interactions/cut.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Adds drag functionality to waveshaper
 *
 * @param manager
 * @param hammer
 */
exports.default = (function (manager, hammer) {
    var shouldHandle = function (target, options) {
        return options.mode === "cut" && target.hasAttribute("data-wave-id");
    };
    hammer.on("tap", function (ev) {
        var options = manager.options;
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (options == null || !shouldHandle(target, options))
            return;
        // Allready checked for null
        var id = target.getAttribute("data-wave-id");
        var wave = manager.getTrack(id);
        if (wave == null)
            return;
        var bb = target.getBoundingClientRect();
        var deltaX = ev.center.x - bb.left;
        var time = (options.scrollPosition + deltaX) *
            (options.samplesPerPixel / options.samplerate);
        time = options.clampFn(time);
        var interval = wave.flattened.find(function (i) { return i.start + i.offsetStart <= time && i.end >= time; });
        if (interval == null)
            return;
        var left = wave.intervals.find(function (s) { return s.id === interval.id; });
        if (left == null)
            return;
        var original = __assign({}, left);
        var right = __assign({}, left, { offsetStart: time - left.start, id: options.generateId() });
        left.end = time;
        wave.intervals.push(right);
        manager.flatten([wave.id]);
        manager.process([wave.id], deltaX, 1);
        manager.emitCut(__assign({}, original), __assign({}, left), __assign({}, right));
    });
});


/***/ }),

/***/ "./src/interactions/drag.ts":
/*!**********************************!*\
  !*** ./src/interactions/drag.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Adds drag functionality to waveshaper
 *
 * @param manager Waveshape Manager
 * @param hammer Hammer instance
 * @param container Container element
 */
exports.default = (function (manager, hammer, dragState) {
    var shouldHandle = function (target, options) { return options.mode === 'drag' && target.hasAttribute('data-wave-id'); };
    /**
     * Sets up the drag by finding the
     */
    hammer.on('panstart', function (ev) {
        var options = manager.options;
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (!shouldHandle(target, options))
            return;
        // Allready checked for existance
        var id = target.getAttribute('data-wave-id');
        var wave = manager.getTrack(id);
        if (wave == null)
            return;
        var bb = target.getBoundingClientRect();
        var time = (options.scrollPosition + (ev.center.x - bb.left)) * (options.samplesPerPixel / options.samplerate);
        var interval = wave.flattened.find(function (i) { return i.start + i.offsetStart <= time && i.end >= time; });
        if (interval == null)
            return;
        var segment = wave.intervals.find(function (s) { return s.id === interval.id; });
        if (segment == null)
            return;
        dragState.startState = __assign({}, segment);
        if (ev.srcEvent instanceof PointerEvent) {
            target.setPointerCapture(ev.srcEvent.pointerId);
        }
        dragState.options = options;
        dragState.activeSegment = segment;
        dragState.activeSegmentStart = dragState.activeSegment.start;
        dragState.duration = segment.end - segment.start;
        dragState.activeSegment.index = 1000;
        dragState.dragWave = wave;
    });
    hammer.on('panmove', function (ev) {
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (dragState.options == null || dragState.activeSegment == null || dragState.dragWave == null
            || dragState.dragging || !shouldHandle(target, dragState.options))
            return;
        dragState.dragging = true;
        /**
         * TODO below implementation stops all updates on touch devices on new track (tested on Samsung Galaxy s8),
         * when dragged back to original keeps working. Works on desktop, it's a small performance improvement as
         * it prevents a single track flatten + process when transferring a segment between tracks.
         */
        //// If the target has moved it is handled by the mouseHover function
        // const id = ev.target.getAttribute('data-wave-id');
        // if(id !== dragState.dragWave.id)
        //     return;
        var change = (ev.deltaX * dragState.options.samplesPerPixel) / dragState.options.samplerate;
        var newTime = dragState.activeSegmentStart + change;
        newTime = manager.options.clampFn(newTime);
        if (newTime + dragState.activeSegment.offsetStart < 0) {
            newTime = -dragState.activeSegment.offsetStart;
        }
        dragState.activeSegment.start = newTime;
        dragState.activeSegment.end = newTime + dragState.duration;
        manager.flatten([dragState.dragWave.id]);
        manager.process([dragState.dragWave.id]);
        dragState.dragging = false;
    });
    hammer.on('panend', function (ev) {
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (dragState.options == null || !shouldHandle(target, dragState.options))
            return;
        if (dragState.startState != null && dragState.activeSegment != null)
            manager.emitSegment(dragState.startState, __assign({}, dragState.activeSegment));
        dragState.activeSegment = null;
        dragState.activeSegmentStart = 0;
        dragState.dragWave = null;
        dragState.options = null;
        dragState.duration = 0;
        dragState.startState = null;
    });
});


/***/ }),

/***/ "./src/interactions/enter.ts":
/*!***********************************!*\
  !*** ./src/interactions/enter.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (manager, canvas, dragState) {
    var enterlistener = function (ev) { return pointerEnter(ev); };
    /**
     * Fires when the mouse moves over the container,
     * If a segment is being dragged and the pointer moves
     * into another canvas the segment is tranfered to the
     * new canvas.
     */
    canvas.addEventListener('pointermove', enterlistener);
    var destroy = function () {
        canvas.removeEventListener('pointermove', enterlistener);
    };
    var pointerEnter = function (ev) {
        if (dragState.options == null || dragState.options.mode !== 'drag')
            return;
        if (dragState.activeSegment == null || dragState.dragWave == null)
            return;
        var canvas = document.elementFromPoint(ev.clientX, ev.clientY);
        if (canvas == null || !(canvas instanceof HTMLCanvasElement))
            return;
        var id = canvas.getAttribute('data-wave-id');
        if (id == null)
            return;
        var wave = manager.getTrack(id);
        if (wave == null)
            return;
        if (dragState.dragWave.id !== id) {
            var index = dragState.dragWave.intervals.indexOf(dragState.activeSegment);
            dragState.dragWave.intervals.splice(index, 1);
            dragState.activeSegment.trackId = wave.id;
            wave.intervals.push(dragState.activeSegment);
            dragState.activeSegment.index = 1000;
            var currentId = dragState.dragWave.id;
            dragState.dragWave = wave;
            manager.flatten([wave.id, currentId]);
            manager.process([wave.id, currentId]);
        }
    };
    return destroy;
});


/***/ }),

/***/ "./src/interactions/pan.ts":
/*!*********************************!*\
  !*** ./src/interactions/pan.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var endMargin = 500;
var panState = {
    panStart: 0,
    panMax: 0,
    options: null
};
/**
 * Adds pan functionality to waveshaper
 *
 * @param manager
 * @param hammer
 */
function default_1(manager, hammer) {
    var shouldHandle = function (target, options) { return options.mode === 'pan' && target.hasAttribute('data-wave-id'); };
    hammer.on('panstart', function (ev) {
        var options = manager.options;
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (!shouldHandle(target, options))
            return;
        if (ev.srcEvent instanceof PointerEvent) {
            target.setPointerCapture(ev.srcEvent.pointerId);
        }
        panState.panMax = manager.scrollWidth + endMargin;
        panState.panStart = options.scrollPosition;
    });
    hammer.on('panmove', function (ev) {
        panState.options = manager.options;
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (!shouldHandle(target, panState.options))
            return;
        var position = panState.panStart - ev.deltaX;
        var newPosition = Math.floor(position > 0 ? position : 0);
        var change = newPosition - panState.options.scrollPosition;
        // If it was and is still 0 no need to update
        if (newPosition === panState.options.scrollPosition)
            return;
        if (newPosition > panState.panMax - panState.options.width)
            return;
        var start = change > 0 ? panState.options.width - change : 0;
        var width = Math.abs(change);
        manager.setOptions({ scrollPosition: newPosition }).process(undefined, start, width, change);
    });
    hammer.on('panend', function (ev) {
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (panState.options == null || !shouldHandle(target, panState.options))
            return;
        panState.options = null;
        panState.panStart = 0;
        panState.panMax = 0;
    });
}
exports.default = default_1;


/***/ }),

/***/ "./src/interactions/resize.ts":
/*!************************************!*\
  !*** ./src/interactions/resize.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var resizeState = {
    activeSegment: null,
    activeSegmentSide: null,
    activeSegmentOffsetStart: 0,
    activeSegmentOffsetEnd: 0,
    dragWave: null,
    options: null,
    startState: null
};
/**
 * Adds drag functionality to waveshaper
 *
 * @param manager
 * @param hammer
 */
function default_1(manager, hammer) {
    var shouldHandle = function (target, options) {
        return options.mode === "resize" &&
            target != null &&
            target.hasAttribute("data-wave-id");
    };
    hammer.on("panstart", function (ev) {
        var options = manager.options;
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (!shouldHandle(target, options))
            return;
        // Already checked that it exists
        var id = target.getAttribute("data-wave-id");
        var wave = manager.getTrack(id);
        if (wave == null)
            return;
        var bb = target.getBoundingClientRect();
        var time = ((options.scrollPosition + (ev.center.x - bb.left)) *
            options.samplesPerPixel) /
            options.samplerate;
        var interval = wave.flattened.find(function (i) { return i.start + i.offsetStart <= time && i.end >= time; });
        if (interval == null)
            return;
        resizeState.activeSegmentSide =
            time <
                interval.start +
                    interval.offsetStart +
                    (interval.end - (interval.start + interval.offsetStart)) / 2
                ? "left"
                : "right";
        var segment = wave.intervals.find(function (s) { return s.id === interval.id; });
        if (segment == null)
            return;
        resizeState.startState = __assign({}, segment);
        if (ev.srcEvent instanceof PointerEvent) {
            target.setPointerCapture(ev.srcEvent.pointerId);
        }
        resizeState.options = options;
        resizeState.activeSegment = segment;
        resizeState.activeSegmentOffsetStart = segment.offsetStart;
        resizeState.activeSegmentOffsetEnd = segment.end;
        segment.index = 1000;
        resizeState.dragWave = wave;
    });
    hammer.on("panmove", function (ev) {
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (resizeState.dragWave == null ||
            resizeState.activeSegment == null ||
            resizeState.options == null ||
            !shouldHandle(target, resizeState.options))
            return;
        var options = manager.options;
        var change = (ev.deltaX * options.samplesPerPixel) / options.samplerate;
        var newTime = resizeState.activeSegmentSide === "left"
            ? resizeState.activeSegmentOffsetStart + change
            : resizeState.activeSegmentOffsetEnd + change;
        newTime = options.clampFn(newTime);
        // Don't allow offset to become less than 0
        if (newTime < 0) {
            newTime = 0;
        }
        var active = resizeState.activeSegment;
        var newDuration = resizeState.activeSegmentSide === "left"
            ? active.end - active.start - newTime
            : newTime - active.start - active.offsetStart;
        // Do not allow resizing
        if (newDuration <= 2) {
            return;
        }
        resizeState.activeSegmentSide === "left"
            ? (active.offsetStart = newTime)
            : (active.end = newTime);
        manager.flatten([resizeState.dragWave.id]);
        manager.process([resizeState.dragWave.id]);
    });
    hammer.on("panend", function (ev) {
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (resizeState.options == null ||
            !shouldHandle(target, resizeState.options))
            return;
        if (resizeState.startState != null && resizeState.activeSegment != null)
            manager.emitSegment(resizeState.startState, __assign({}, resizeState.activeSegment));
        resizeState.activeSegment = null;
        resizeState.activeSegmentOffsetStart = 0;
        resizeState.activeSegmentOffsetEnd = 0;
        resizeState.activeSegmentSide = null;
        resizeState.dragWave = null;
        resizeState.options = null;
        resizeState.startState = null;
    });
}
exports.default = default_1;


/***/ }),

/***/ "./src/interactions/zoom.ts":
/*!**********************************!*\
  !*** ./src/interactions/zoom.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var endMargin = 500;
var zoomState = {
    maxWidth: 0,
    sppStart: 0,
    options: null
};
/**
 * Adds pinch zoom functionality to waveshaper
 *
 * @param manager
 * @param hammer
 */
function default_1(manager, hammer) {
    var shouldHandle = function (target, options) { return options.mode === 'pan' && target.hasAttribute('data-wave-id'); };
    hammer.on('pinchstart', function (ev) {
        var options = manager.options;
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (!shouldHandle(target, options))
            return;
        if (ev.srcEvent instanceof PointerEvent) {
            target.setPointerCapture(ev.srcEvent.pointerId);
        }
        zoomState.sppStart = options.samplesPerPixel;
        zoomState.maxWidth = manager.scrollWidth + endMargin;
    });
    hammer.on('pinchmove', function (ev) {
        zoomState.options = manager.options;
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (zoomState.options == null || !shouldHandle(target, zoomState.options) || ev.scale == null || ev.scale <= 0)
            return;
        var sampleAtLeft = zoomState.options.scrollPosition * zoomState.options.samplesPerPixel;
        var samplesInView = zoomState.options.width * zoomState.options.samplesPerPixel;
        var samplesToCenter = samplesInView / 2;
        var newSpp = zoomState.sppStart * ev.scale;
        if (newSpp == 0)
            return;
        var newSamplesInView = zoomState.options.width * newSpp;
        var newSamplesToCenter = newSamplesInView / 2;
        var maxWidth = manager.scrollWidth + endMargin;
        var maxSamplesInView = maxWidth * zoomState.options.samplerate;
        if (newSamplesInView >= maxSamplesInView)
            return;
        var newScroll = (sampleAtLeft + samplesToCenter - newSamplesToCenter) / newSpp;
        manager.setOptions({
            samplesPerPixel: newSpp,
            scrollPosition: newScroll >= 0 ? newScroll : 0
        }).process();
    });
    hammer.on('pinchend', function (ev) {
        var target = manager.options.getEventTarget(ev.srcEvent);
        if (zoomState.options == null || !shouldHandle(target, zoomState.options))
            return;
        zoomState.sppStart = 0;
        zoomState.maxWidth = 0;
        zoomState.options = null;
    });
}
exports.default = default_1;


/***/ }),

/***/ "./src/models/dragstate.ts":
/*!*********************************!*\
  !*** ./src/models/dragstate.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.dragState = {
    activeSegment: null,
    activeSegmentStart: 0,
    dragWave: null,
    options: null,
    duration: 0,
    dragging: false,
    startState: null
};


/***/ }),

/***/ "./src/render/line.ts":
/*!****************************!*\
  !*** ./src/render/line.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *
 * @export
 * @param waveform Sampled data for each pixel, max at 0, min at 1
 * @param options
 * @param ctx
 * @param color
 */
exports.default = (function (waveform, options, ctx, color) {
    var scale = options.height / 2;
    var width = options.width;
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, width, options.height);
    for (var i = 0, inSegment = false, segmentStart = 0; i < width; i++) {
        var index = i * 4;
        var pointInSegment = waveform[index + 3] === 1;
        if (!inSegment && pointInSegment) {
            inSegment = true;
            segmentStart = i;
        }
        else if (inSegment && (!pointInSegment || i === width - 1)) {
            inSegment = false;
            ctx.fillRect(segmentStart, 0, i - segmentStart, options.height);
        }
    }
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(0, scale);
    for (var i = 0; i < width; i++) {
        var index = i * 4;
        ctx.lineTo(i, Math.round((waveform[index] * scale) + scale));
    }
    ctx.lineTo(width - 1, scale);
    ctx.moveTo(0, scale);
    for (var i = 0; i < width; i++) {
        var index = i * 4;
        ctx.lineTo(i, Math.round((waveform[index + 1] * scale) + scale));
    }
    ctx.lineTo(width - 1, scale);
    ctx.closePath();
    for (var i = 0; i < width; i++) {
        var index = i * 4;
        if (waveform[index - 4 + 2] === 0 && waveform[index + 2] === 1) {
            ctx.rect(i, 0, 1, options.height);
        }
    }
    ctx.fill();
});


/***/ }),

/***/ "hammerjs":
/*!*****************************************************************************************************************!*\
  !*** external {"root":"Hammer","commonjs2":"hammerjs","commonjs":"hammerjs","amd":"hammerjs","umd":"hammerjs"} ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hammerjs__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=waveshaper-dom.js.map