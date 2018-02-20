function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

var emptyObject_1 = emptyObject;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

var q = "function" === typeof Symbol && Symbol["for"],
    r = q ? Symbol["for"]("react.element") : 60103,
    t = q ? Symbol["for"]("react.call") : 60104,
    u = q ? Symbol["for"]("react.return") : 60105,
    v = q ? Symbol["for"]("react.portal") : 60106,
    w = q ? Symbol["for"]("react.fragment") : 60107,
    x = "function" === typeof Symbol && Symbol.iterator;
function y(a) {
  for (var b = arguments.length - 1, e = "Minified React error #" + a + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d" + a, c = 0; c < b; c++) e += "\x26args[]\x3d" + encodeURIComponent(arguments[c + 1]);b = Error(e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name = "Invariant Violation";b.framesToPop = 1;throw b;
}
var z = { isMounted: function () {
    return !1;
  }, enqueueForceUpdate: function () {}, enqueueReplaceState: function () {}, enqueueSetState: function () {} };function A(a, b, e) {
  this.props = a;this.context = b;this.refs = emptyObject_1;this.updater = e || z;
}A.prototype.isReactComponent = {};A.prototype.setState = function (a, b) {
  "object" !== typeof a && "function" !== typeof a && null != a ? y("85") : void 0;this.updater.enqueueSetState(this, a, b, "setState");
};A.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function B(a, b, e) {
  this.props = a;this.context = b;this.refs = emptyObject_1;this.updater = e || z;
}function C() {}C.prototype = A.prototype;var D = B.prototype = new C();D.constructor = B;objectAssign(D, A.prototype);D.isPureReactComponent = !0;function E(a, b, e) {
  this.props = a;this.context = b;this.refs = emptyObject_1;this.updater = e || z;
}var F = E.prototype = new C();F.constructor = E;objectAssign(F, A.prototype);F.unstable_isAsyncReactComponent = !0;F.render = function () {
  return this.props.children;
};var G = { current: null },
    H = Object.prototype.hasOwnProperty,
    I = { key: !0, ref: !0, __self: !0, __source: !0 };
function J(a, b, e) {
  var c,
      d = {},
      g = null,
      k = null;if (null != b) for (c in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) H.call(b, c) && !I.hasOwnProperty(c) && (d[c] = b[c]);var f = arguments.length - 2;if (1 === f) d.children = e;else if (1 < f) {
    for (var h = Array(f), l = 0; l < f; l++) h[l] = arguments[l + 2];d.children = h;
  }if (a && a.defaultProps) for (c in f = a.defaultProps, f) void 0 === d[c] && (d[c] = f[c]);return { $$typeof: r, type: a, key: g, ref: k, props: d, _owner: G.current };
}function K(a) {
  return "object" === typeof a && null !== a && a.$$typeof === r;
}
function escape(a) {
  var b = { "\x3d": "\x3d0", ":": "\x3d2" };return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}var L = /\/+/g,
    M = [];function N(a, b, e, c) {
  if (M.length) {
    var d = M.pop();d.result = a;d.keyPrefix = b;d.func = e;d.context = c;d.count = 0;return d;
  }return { result: a, keyPrefix: b, func: e, context: c, count: 0 };
}function O(a) {
  a.result = null;a.keyPrefix = null;a.func = null;a.context = null;a.count = 0;10 > M.length && M.push(a);
}
function P(a, b, e, c) {
  var d = typeof a;if ("undefined" === d || "boolean" === d) a = null;var g = !1;if (null === a) g = !0;else switch (d) {case "string":case "number":
      g = !0;break;case "object":
      switch (a.$$typeof) {case r:case t:case u:case v:
          g = !0;}}if (g) return e(c, a, "" === b ? "." + Q(a, 0) : b), 1;g = 0;b = "" === b ? "." : b + ":";if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];var f = b + Q(d, k);g += P(d, f, e, c);
  } else if (null === a || "undefined" === typeof a ? f = null : (f = x && a[x] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) d = d.value, f = b + Q(d, k++), g += P(d, f, e, c);else "object" === d && (e = "" + a, y("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));return g;
}function Q(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}function R(a, b) {
  a.func.call(a.context, b, a.count++);
}
function S(a, b, e) {
  var c = a.result,
      d = a.keyPrefix;a = a.func.call(a.context, b, a.count++);Array.isArray(a) ? T(a, c, e, emptyFunction_1.thatReturnsArgument) : null != a && (K(a) && (b = d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(L, "$\x26/") + "/") + e, a = { $$typeof: r, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner }), c.push(a));
}function T(a, b, e, c, d) {
  var g = "";null != e && (g = ("" + e).replace(L, "$\x26/") + "/");b = N(b, g, c, d);null == a || P(a, "", S, b);O(b);
}
var U = { Children: { map: function (a, b, e) {
      if (null == a) return a;var c = [];T(a, c, null, b, e);return c;
    }, forEach: function (a, b, e) {
      if (null == a) return a;b = N(null, null, b, e);null == a || P(a, "", R, b);O(b);
    }, count: function (a) {
      return null == a ? 0 : P(a, "", emptyFunction_1.thatReturnsNull, null);
    }, toArray: function (a) {
      var b = [];T(a, b, null, emptyFunction_1.thatReturnsArgument);return b;
    }, only: function (a) {
      K(a) ? void 0 : y("143");return a;
    } }, Component: A, PureComponent: B, unstable_AsyncComponent: E, Fragment: w, createElement: J, cloneElement: function (a, b, e) {
    var c = objectAssign({}, a.props),
        d = a.key,
        g = a.ref,
        k = a._owner;if (null != b) {
      void 0 !== b.ref && (g = b.ref, k = G.current);void 0 !== b.key && (d = "" + b.key);if (a.type && a.type.defaultProps) var f = a.type.defaultProps;for (h in b) H.call(b, h) && !I.hasOwnProperty(h) && (c[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
    }var h = arguments.length - 2;if (1 === h) c.children = e;else if (1 < h) {
      f = Array(h);for (var l = 0; l < h; l++) f[l] = arguments[l + 2];c.children = f;
    }return { $$typeof: r, type: a.type, key: d, ref: g, props: c, _owner: k };
  }, createFactory: function (a) {
    var b = J.bind(null, a);b.type = a;return b;
  },
  isValidElement: K, version: "16.2.0", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: G, assign: objectAssign } },
    V = Object.freeze({ default: U }),
    W = V && U || V;var react_production_min = W["default"] ? W["default"] : W;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

if (process.env.NODE_ENV !== 'production') {
  var invariant$1 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var react_development = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV !== "production") {
    (function () {

      var _assign = objectAssign;
      var emptyObject = emptyObject_1;
      var invariant = invariant_1;
      var warning = warning_1;
      var emptyFunction = emptyFunction_1;
      var checkPropTypes = checkPropTypes_1;

      // TODO: this is special because it gets imported during build.

      var ReactVersion = '16.2.0';

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
      var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
      var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';

      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable === 'undefined') {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }
        return null;
      }

      /**
       * WARNING: DO NOT manually require this module.
       * This is a replacement for `invariant(...)` used by the error code system
       * and will _only_ be required by the corresponding babel pass.
       * It always throws.
       */

      /**
       * Forked from fbjs/warning:
       * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
       *
       * Only change is we use console.warn instead of console.error,
       * and do nothing when 'console' is not supported.
       * This really simplifies the code.
       * ---
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */

      var lowPriorityWarning = function () {};

      {
        var printWarning = function (format) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          if (typeof console !== 'undefined') {
            console.warn(message);
          }
          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        lowPriorityWarning = function (condition, format) {
          if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
          }
          if (!condition) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(undefined, [format].concat(args));
          }
        };
      }

      var lowPriorityWarning$1 = lowPriorityWarning;

      var didWarnStateUpdateForUnmountedComponent = {};

      function warnNoop(publicInstance, callerName) {
        {
          var constructor = publicInstance.constructor;
          var componentName = constructor && (constructor.displayName || constructor.name) || 'ReactClass';
          var warningKey = componentName + '.' + callerName;
          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return;
          }
          warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
          didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
      }

      /**
       * This is the abstract API for an update queue.
       */
      var ReactNoopUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function (publicInstance) {
          return false;
        },

        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function (publicInstance, callback, callerName) {
          warnNoop(publicInstance, 'forceUpdate');
        },

        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, 'replaceState');
        },

        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function (publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, 'setState');
        }
      };

      /**
       * Base class helpers for the updating state of a component.
       */
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
      }

      Component.prototype.isReactComponent = {};

      /**
       * Sets a subset of the state. Always use this to mutate
       * state. You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * There is no guarantee that calls to `setState` will run synchronously,
       * as they may eventually be batched together.  You can provide an optional
       * callback that will be executed when the call to setState is actually
       * completed.
       *
       * When a function is provided to setState, it will be called at some point in
       * the future (not synchronously). It will be called with the up to date
       * component arguments (state, props, context). These values can be different
       * from this.* because your function may be called after receiveProps but before
       * shouldComponentUpdate, and this new state, props, and context will not yet be
       * assigned to this.
       *
       * @param {object|function} partialState Next partial state or function to
       *        produce next partial state to be merged with current state.
       * @param {?function} callback Called after state is updated.
       * @final
       * @protected
       */
      Component.prototype.setState = function (partialState, callback) {
        !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
        this.updater.enqueueSetState(this, partialState, callback, 'setState');
      };

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {?function} callback Called after update is complete.
       * @final
       * @protected
       */
      Component.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
      };

      /**
       * Deprecated APIs. These APIs used to exist on classic React classes but since
       * we would like to deprecate them, we're not going to move them over to this
       * modern base class. Instead, we define a getter that warns if it's accessed.
       */
      {
        var deprecatedAPIs = {
          isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
          replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
        };
        var defineDeprecationWarning = function (methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function () {
              lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
              return undefined;
            }
          });
        };
        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }

      /**
       * Base class helpers for the updating state of a component.
       */
      function PureComponent(props, context, updater) {
        // Duplicated from Component.
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
      }

      function ComponentDummy() {}
      ComponentDummy.prototype = Component.prototype;
      var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
      pureComponentPrototype.constructor = PureComponent;
      // Avoid an extra prototype jump for these methods.
      _assign(pureComponentPrototype, Component.prototype);
      pureComponentPrototype.isPureReactComponent = true;

      function AsyncComponent(props, context, updater) {
        // Duplicated from Component.
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
      }

      var asyncComponentPrototype = AsyncComponent.prototype = new ComponentDummy();
      asyncComponentPrototype.constructor = AsyncComponent;
      // Avoid an extra prototype jump for these methods.
      _assign(asyncComponentPrototype, Component.prototype);
      asyncComponentPrototype.unstable_isAsyncReactComponent = true;
      asyncComponentPrototype.render = function () {
        return this.props.children;
      };

      /**
       * Keeps track of the current owner.
       *
       * The current owner is the component who should own any components that are
       * currently being constructed.
       */
      var ReactCurrentOwner = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      };

      var hasOwnProperty = Object.prototype.hasOwnProperty;

      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };

      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;

      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== undefined;
      }

      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== undefined;
      }

      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function () {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
          }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }

      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function () {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
          }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }

      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, no instanceof check
       * will work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} key
       * @param {string|object} ref
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @param {*} owner
       * @param {*} props
       * @internal
       */
      var ReactElement = function (type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allow us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,

          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,

          // Record the component responsible for creating this element.
          _owner: owner
        };

        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {};

          // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.
          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          // self and source are DEV only properties.
          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.
          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }

        return element;
      };

      /**
       * Create and return a new ReactElement of the given type.
       * See https://reactjs.org/docs/react-api.html#createelement
       */
      function createElement(type, config, children) {
        var propName;

        // Reserved names are extracted
        var props = {};

        var key = null;
        var ref = null;
        var self = null;
        var source = null;

        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;
          }
          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          self = config.__self === undefined ? null : config.__self;
          source = config.__source === undefined ? null : config.__source;
          // Remaining properties are added to a new props object
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        }

        // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }
          props.children = childArray;
        }

        // Resolve default props
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }
        {
          if (key || ref) {
            if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
              var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }

      /**
       * Return a function that produces ReactElements of a given type.
       * See https://reactjs.org/docs/react-api.html#createfactory
       */

      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

        return newElement;
      }

      /**
       * Clone and return a new ReactElement using element as the starting point.
       * See https://reactjs.org/docs/react-api.html#cloneelement
       */
      function cloneElement(element, config, children) {
        var propName;

        // Original props are copied
        var props = _assign({}, element.props);

        // Reserved names are extracted
        var key = element.key;
        var ref = element.ref;
        // Self is preserved since the owner is preserved.
        var self = element._self;
        // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source;

        // Owner will be preserved, unless ref is overridden
        var owner = element._owner;

        if (config != null) {
          if (hasValidRef(config)) {
            // Silently steal the ref from the parent.
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }
          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          // Remaining properties override existing props
          var defaultProps;
          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              if (config[propName] === undefined && defaultProps !== undefined) {
                // Resolve default props
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        }

        // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          props.children = childArray;
        }

        return ReactElement(element.type, key, ref, self, source, owner, props);
      }

      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a valid component.
       * @final
       */
      function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      var ReactDebugCurrentFrame = {};

      {
        // Component that is being worked on
        ReactDebugCurrentFrame.getCurrentStack = null;

        ReactDebugCurrentFrame.getStackAddendum = function () {
          var impl = ReactDebugCurrentFrame.getCurrentStack;
          if (impl) {
            return impl();
          }
          return null;
        };
      }

      var SEPARATOR = '.';
      var SUBSEPARATOR = ':';

      /**
       * Escape and wrap key so it is safe to use as a reactid
       *
       * @param {string} key to be escaped.
       * @return {string} the escaped key.
       */
      function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          '=': '=0',
          ':': '=2'
        };
        var escapedString = ('' + key).replace(escapeRegex, function (match) {
          return escaperLookup[match];
        });

        return '$' + escapedString;
      }

      /**
       * TODO: Test that a single child and an array with one item have the same key
       * pattern.
       */

      var didWarnAboutMaps = false;

      var userProvidedKeyEscapeRegex = /\/+/g;
      function escapeUserProvidedKey(text) {
        return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
      }

      var POOL_SIZE = 10;
      var traverseContextPool = [];
      function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
        if (traverseContextPool.length) {
          var traverseContext = traverseContextPool.pop();
          traverseContext.result = mapResult;
          traverseContext.keyPrefix = keyPrefix;
          traverseContext.func = mapFunction;
          traverseContext.context = mapContext;
          traverseContext.count = 0;
          return traverseContext;
        } else {
          return {
            result: mapResult,
            keyPrefix: keyPrefix,
            func: mapFunction,
            context: mapContext,
            count: 0
          };
        }
      }

      function releaseTraverseContext(traverseContext) {
        traverseContext.result = null;
        traverseContext.keyPrefix = null;
        traverseContext.func = null;
        traverseContext.context = null;
        traverseContext.count = 0;
        if (traverseContextPool.length < POOL_SIZE) {
          traverseContextPool.push(traverseContext);
        }
      }

      /**
       * @param {?*} children Children tree container.
       * @param {!string} nameSoFar Name of the key path so far.
       * @param {!function} callback Callback to invoke with each child found.
       * @param {?*} traverseContext Used to pass information throughout the traversal
       * process.
       * @return {!number} The number of children in this subtree.
       */
      function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
        var type = typeof children;

        if (type === 'undefined' || type === 'boolean') {
          // All of the above are perceived as null.
          children = null;
        }

        var invokeCallback = false;

        if (children === null) {
          invokeCallback = true;
        } else {
          switch (type) {
            case 'string':
            case 'number':
              invokeCallback = true;
              break;
            case 'object':
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_CALL_TYPE:
                case REACT_RETURN_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
              }
          }
        }

        if (invokeCallback) {
          callback(traverseContext, children,
          // If it's the only child, treat the name as if it was wrapped in an array
          // so that it's consistent if the number of children grows.
          nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
          return 1;
        }

        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getComponentKey(child, i);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          var iteratorFn = getIteratorFn(children);
          if (typeof iteratorFn === 'function') {
            {
              // Warn about using Maps as children
              if (iteratorFn === children.entries) {
                warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum());
                didWarnAboutMaps = true;
              }
            }

            var iterator = iteratorFn.call(children);
            var step;
            var ii = 0;
            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getComponentKey(child, ii++);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else if (type === 'object') {
            var addendum = '';
            {
              addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
            }
            var childrenString = '' + children;
            invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
          }
        }

        return subtreeCount;
      }

      /**
       * Traverses children that are typically specified as `props.children`, but
       * might also be specified through attributes:
       *
       * - `traverseAllChildren(this.props.children, ...)`
       * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
       *
       * The `traverseContext` is an optional argument that is passed through the
       * entire traversal. It can be used to store accumulations or anything else that
       * the callback might find relevant.
       *
       * @param {?*} children Children tree object.
       * @param {!function} callback To invoke upon traversing each child.
       * @param {?*} traverseContext Context for traversal.
       * @return {!number} The number of children in this subtree.
       */
      function traverseAllChildren(children, callback, traverseContext) {
        if (children == null) {
          return 0;
        }

        return traverseAllChildrenImpl(children, '', callback, traverseContext);
      }

      /**
       * Generate a key string that identifies a component within a set.
       *
       * @param {*} component A component that could contain a manual key.
       * @param {number} index Index that is used if a manual key is not provided.
       * @return {string}
       */
      function getComponentKey(component, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof component === 'object' && component !== null && component.key != null) {
          // Explicit key
          return escape(component.key);
        }
        // Implicit key determined by the index in the set
        return index.toString(36);
      }

      function forEachSingleChild(bookKeeping, child, name) {
        var func = bookKeeping.func,
            context = bookKeeping.context;

        func.call(context, child, bookKeeping.count++);
      }

      /**
       * Iterates through children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.foreach
       *
       * The provided forEachFunc(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} forEachFunc
       * @param {*} forEachContext Context for forEachContext.
       */
      function forEachChildren(children, forEachFunc, forEachContext) {
        if (children == null) {
          return children;
        }
        var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
        traverseAllChildren(children, forEachSingleChild, traverseContext);
        releaseTraverseContext(traverseContext);
      }

      function mapSingleChildIntoContext(bookKeeping, child, childKey) {
        var result = bookKeeping.result,
            keyPrefix = bookKeeping.keyPrefix,
            func = bookKeeping.func,
            context = bookKeeping.context;

        var mappedChild = func.call(context, child, bookKeeping.count++);
        if (Array.isArray(mappedChild)) {
          mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(mappedChild,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
          }
          result.push(mappedChild);
        }
      }

      function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
        var escapedPrefix = '';
        if (prefix != null) {
          escapedPrefix = escapeUserProvidedKey(prefix) + '/';
        }
        var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
        traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
        releaseTraverseContext(traverseContext);
      }

      /**
       * Maps children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.map
       *
       * The provided mapFunction(child, key, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} func The map function.
       * @param {*} context Context for mapFunction.
       * @return {object} Object containing the ordered map of results.
       */
      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, func, context);
        return result;
      }

      /**
       * Count the number of children that are typically specified as
       * `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.count
       *
       * @param {?*} children Children tree container.
       * @return {number} The number of children.
       */
      function countChildren(children, context) {
        return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
      }

      /**
       * Flatten a children object (typically specified as `props.children`) and
       * return an array with appropriately re-keyed children.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.toarray
       */
      function toArray(children) {
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
        return result;
      }

      /**
       * Returns the first child in a collection of children and verifies that there
       * is only one child in the collection.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.only
       *
       * The current implementation of this function assumes that a single child gets
       * passed without a wrapper, but the purpose of this helper function is to
       * abstract away the particular structure of children.
       *
       * @param {?object} children Child collection structure.
       * @return {ReactElement} The first and only `ReactElement` contained in the
       * structure.
       */
      function onlyChild(children) {
        !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
        return children;
      }

      var describeComponentFrame = function (name, source, ownerName) {
        return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
      };

      function getComponentName(fiber) {
        var type = fiber.type;

        if (typeof type === 'string') {
          return type;
        }
        if (typeof type === 'function') {
          return type.displayName || type.name;
        }
        return null;
      }

      /**
       * ReactElementValidator provides a wrapper around a element factory
       * which validates the props passed to the element. This is intended to be
       * used only in DEV and could be replaced by a static type checker for languages
       * that support it.
       */

      {
        var currentlyValidatingElement = null;

        var propTypesMisspellWarningShown = false;

        var getDisplayName = function (element) {
          if (element == null) {
            return '#empty';
          } else if (typeof element === 'string' || typeof element === 'number') {
            return '#text';
          } else if (typeof element.type === 'string') {
            return element.type;
          } else if (element.type === REACT_FRAGMENT_TYPE) {
            return 'React.Fragment';
          } else {
            return element.type.displayName || element.type.name || 'Unknown';
          }
        };

        var getStackAddendum = function () {
          var stack = '';
          if (currentlyValidatingElement) {
            var name = getDisplayName(currentlyValidatingElement);
            var owner = currentlyValidatingElement._owner;
            stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
          }
          stack += ReactDebugCurrentFrame.getStackAddendum() || '';
          return stack;
        };

        var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
      }

      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentName(ReactCurrentOwner.current);
          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }
        return '';
      }

      function getSourceInfoErrorAddendum(elementProps) {
        if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
          var source = elementProps.__source;
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
      }

      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */
      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
          if (parentName) {
            info = '\n\nCheck the top-level render call using <' + parentName + '>.';
          }
        }
        return info;
      }

      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */
      function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }
        element._store.validated = true;

        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

        // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          // Give the component that originally created this child.
          childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
        }

        currentlyValidatingElement = element;
        {
          warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
        }
        currentlyValidatingElement = null;
      }

      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */
      function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') {
          return;
        }
        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);
          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;
              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }

      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */
      function validatePropTypes(element) {
        var componentClass = element.type;
        if (typeof componentClass !== 'function') {
          return;
        }
        var name = componentClass.displayName || componentClass.name;
        var propTypes = componentClass.propTypes;
        if (propTypes) {
          currentlyValidatingElement = element;
          checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
          currentlyValidatingElement = null;
        } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true;
          warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
        }
        if (typeof componentClass.getDefaultProps === 'function') {
          warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }

      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */
      function validateFragmentProps(fragment) {
        currentlyValidatingElement = fragment;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.keys(fragment.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (!VALID_FRAGMENT_PROPS.has(key)) {
              warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (fragment.ref !== null) {
          warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
        }

        currentlyValidatingElement = null;
      }

      function createElementWithValidation(type, props, children) {
        var validType = typeof type === 'string' || typeof type === 'function' || typeof type === 'symbol' || typeof type === 'number';
        // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
          var info = '';
          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }

          var sourceInfo = getSourceInfoErrorAddendum(props);
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          info += getStackAddendum() || '';

          warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
        }

        var element = createElement.apply(this, arguments);

        // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) {
          return element;
        }

        // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }

        if (typeof type === 'symbol' && type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }

        return element;
      }

      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        // Legacy hook TODO: Warn if this is accessed
        validatedFactory.type = type;

        {
          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function () {
              lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
              Object.defineProperty(this, 'type', {
                value: type
              });
              return type;
            }
          });
        }

        return validatedFactory;
      }

      function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }

      var React = {
        Children: {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray: toArray,
          only: onlyChild
        },

        Component: Component,
        PureComponent: PureComponent,
        unstable_AsyncComponent: AsyncComponent,

        Fragment: REACT_FRAGMENT_TYPE,

        createElement: createElementWithValidation,
        cloneElement: cloneElementWithValidation,
        createFactory: createFactoryWithValidation,
        isValidElement: isValidElement,

        version: ReactVersion,

        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: ReactCurrentOwner,
          // Used by renderers to avoid bundling object-assign twice in UMD bundles:
          assign: _assign
        }
      };

      {
        _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
          // These should not be included in production.
          ReactDebugCurrentFrame: ReactDebugCurrentFrame,
          // Shim for React DOM 16.0.0 which still destructured (but not used) this.
          // TODO: remove in React 17.0.
          ReactComponentTreeHook: {}
        });
      }

      var React$2 = Object.freeze({
        default: React
      });

      var React$3 = React$2 && React || React$2;

      // TODO: decide on the top-level export form.
      // This is hacky but makes it work with both Rollup and Jest.
      var react = React$3['default'] ? React$3['default'] : React$3;

      module.exports = react;
    })();
  }
});

var react = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV === 'production') {
    module.exports = react_production_min;
  } else {
    module.exports = react_development;
  }
});

function mapToObject(map) {
  const object = {};

  for (const [key, value] of map.entries()) {
    if (value instanceof Map) {
      object[key] = mapToObject(value);
    } else {
      object[key] = value;
    }
  }

  return object;
}

function createElement(tag, attributes, elements) {
  const props = mapToObject(attributes);
  return react.createElement(tag, props, ...elements);
}

var react_index = {
  createElement
};

export default react_index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5T2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi93YXJuaW5nLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwiLi4vLi4vc3JjL3JlYWN0LmluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eU9iamVjdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjIuMFxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7dmFyIG09cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksbj1yZXF1aXJlKFwiZmJqcy9saWIvZW1wdHlPYmplY3RcIikscD1yZXF1aXJlKFwiZmJqcy9saWIvZW1wdHlGdW5jdGlvblwiKSxxPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbFtcImZvclwiXSxyPXE/U3ltYm9sW1wiZm9yXCJdKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyx0PXE/U3ltYm9sW1wiZm9yXCJdKFwicmVhY3QuY2FsbFwiKTo2MDEwNCx1PXE/U3ltYm9sW1wiZm9yXCJdKFwicmVhY3QucmV0dXJuXCIpOjYwMTA1LHY9cT9TeW1ib2xbXCJmb3JcIl0oXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsdz1xP1N5bWJvbFtcImZvclwiXShcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LHg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO1xuZnVuY3Rpb24geShhKXtmb3IodmFyIGI9YXJndW1lbnRzLmxlbmd0aC0xLGU9XCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgaHR0cDovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnRcXHgzZFwiK2EsYz0wO2M8YjtjKyspZSs9XCJcXHgyNmFyZ3NbXVxceDNkXCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjKzFdKTtiPUVycm9yKGUrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwiKTtiLm5hbWU9XCJJbnZhcmlhbnQgVmlvbGF0aW9uXCI7Yi5mcmFtZXNUb1BvcD0xO3Rocm93IGI7fVxudmFyIHo9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319O2Z1bmN0aW9uIEEoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9bjt0aGlzLnVwZGF0ZXI9ZXx8en1BLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0EucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YT95KFwiODVcIik6dm9pZCAwO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07QS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07XG5mdW5jdGlvbiBCKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPW47dGhpcy51cGRhdGVyPWV8fHp9ZnVuY3Rpb24gQygpe31DLnByb3RvdHlwZT1BLnByb3RvdHlwZTt2YXIgRD1CLnByb3RvdHlwZT1uZXcgQztELmNvbnN0cnVjdG9yPUI7bShELEEucHJvdG90eXBlKTtELmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO2Z1bmN0aW9uIEUoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9bjt0aGlzLnVwZGF0ZXI9ZXx8en12YXIgRj1FLnByb3RvdHlwZT1uZXcgQztGLmNvbnN0cnVjdG9yPUU7bShGLEEucHJvdG90eXBlKTtGLnVuc3RhYmxlX2lzQXN5bmNSZWFjdENvbXBvbmVudD0hMDtGLnJlbmRlcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLnByb3BzLmNoaWxkcmVufTt2YXIgRz17Y3VycmVudDpudWxsfSxIPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksST17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gSihhLGIsZSl7dmFyIGMsZD17fSxnPW51bGwsaz1udWxsO2lmKG51bGwhPWIpZm9yKGMgaW4gdm9pZCAwIT09Yi5yZWYmJihrPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGc9XCJcIitiLmtleSksYilILmNhbGwoYixjKSYmIUkuaGFzT3duUHJvcGVydHkoYykmJihkW2NdPWJbY10pO3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZilkLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGYpe2Zvcih2YXIgaD1BcnJheShmKSxsPTA7bDxmO2wrKyloW2xdPWFyZ3VtZW50c1tsKzJdO2QuY2hpbGRyZW49aH1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoYyBpbiBmPWEuZGVmYXVsdFByb3BzLGYpdm9pZCAwPT09ZFtjXSYmKGRbY109ZltjXSk7cmV0dXJueyQkdHlwZW9mOnIsdHlwZTphLGtleTpnLHJlZjprLHByb3BzOmQsX293bmVyOkcuY3VycmVudH19ZnVuY3Rpb24gSyhhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09cn1cbmZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCJcXHgzZFwiOlwiXFx4M2QwXCIsXCI6XCI6XCJcXHgzZDJcIn07cmV0dXJuXCIkXCIrKFwiXCIrYSkucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIEw9L1xcLysvZyxNPVtdO2Z1bmN0aW9uIE4oYSxiLGUsYyl7aWYoTS5sZW5ndGgpe3ZhciBkPU0ucG9wKCk7ZC5yZXN1bHQ9YTtkLmtleVByZWZpeD1iO2QuZnVuYz1lO2QuY29udGV4dD1jO2QuY291bnQ9MDtyZXR1cm4gZH1yZXR1cm57cmVzdWx0OmEsa2V5UHJlZml4OmIsZnVuYzplLGNvbnRleHQ6Yyxjb3VudDowfX1mdW5jdGlvbiBPKGEpe2EucmVzdWx0PW51bGw7YS5rZXlQcmVmaXg9bnVsbDthLmZ1bmM9bnVsbDthLmNvbnRleHQ9bnVsbDthLmNvdW50PTA7MTA+TS5sZW5ndGgmJk0ucHVzaChhKX1cbmZ1bmN0aW9uIFAoYSxiLGUsYyl7dmFyIGQ9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWR8fFwiYm9vbGVhblwiPT09ZClhPW51bGw7dmFyIGc9ITE7aWYobnVsbD09PWEpZz0hMDtlbHNlIHN3aXRjaChkKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmc9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHI6Y2FzZSB0OmNhc2UgdTpjYXNlIHY6Zz0hMH19aWYoZylyZXR1cm4gZShjLGEsXCJcIj09PWI/XCIuXCIrUShhLDApOmIpLDE7Zz0wO2I9XCJcIj09PWI/XCIuXCI6YitcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgaz0wO2s8YS5sZW5ndGg7aysrKXtkPWFba107dmFyIGY9YitRKGQsayk7Zys9UChkLGYsZSxjKX1lbHNlIGlmKG51bGw9PT1hfHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIGE/Zj1udWxsOihmPXgmJmFbeF18fGFbXCJAQGl0ZXJhdG9yXCJdLGY9XCJmdW5jdGlvblwiPT09dHlwZW9mIGY/ZjpudWxsKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1cbmYuY2FsbChhKSxrPTA7IShkPWEubmV4dCgpKS5kb25lOylkPWQudmFsdWUsZj1iK1EoZCxrKyspLGcrPVAoZCxmLGUsYyk7ZWxzZVwib2JqZWN0XCI9PT1kJiYoZT1cIlwiK2EseShcIjMxXCIsXCJbb2JqZWN0IE9iamVjdF1cIj09PWU/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6ZSxcIlwiKSk7cmV0dXJuIGd9ZnVuY3Rpb24gUShhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShhLmtleSk6Yi50b1N0cmluZygzNil9ZnVuY3Rpb24gUihhLGIpe2EuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyl9XG5mdW5jdGlvbiBTKGEsYixlKXt2YXIgYz1hLnJlc3VsdCxkPWEua2V5UHJlZml4O2E9YS5mdW5jLmNhbGwoYS5jb250ZXh0LGIsYS5jb3VudCsrKTtBcnJheS5pc0FycmF5KGEpP1QoYSxjLGUscC50aGF0UmV0dXJuc0FyZ3VtZW50KTpudWxsIT1hJiYoSyhhKSYmKGI9ZCsoIWEua2V5fHxiJiZiLmtleT09PWEua2V5P1wiXCI6KFwiXCIrYS5rZXkpLnJlcGxhY2UoTCxcIiRcXHgyNi9cIikrXCIvXCIpK2UsYT17JCR0eXBlb2Y6cix0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9KSxjLnB1c2goYSkpfWZ1bmN0aW9uIFQoYSxiLGUsYyxkKXt2YXIgZz1cIlwiO251bGwhPWUmJihnPShcIlwiK2UpLnJlcGxhY2UoTCxcIiRcXHgyNi9cIikrXCIvXCIpO2I9TihiLGcsYyxkKTtudWxsPT1hfHxQKGEsXCJcIixTLGIpO08oYil9XG52YXIgVT17Q2hpbGRyZW46e21hcDpmdW5jdGlvbihhLGIsZSl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgYz1bXTtUKGEsYyxudWxsLGIsZSk7cmV0dXJuIGN9LGZvckVhY2g6ZnVuY3Rpb24oYSxiLGUpe2lmKG51bGw9PWEpcmV0dXJuIGE7Yj1OKG51bGwsbnVsbCxiLGUpO251bGw9PWF8fFAoYSxcIlwiLFIsYik7TyhiKX0sY291bnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/MDpQKGEsXCJcIixwLnRoYXRSZXR1cm5zTnVsbCxudWxsKX0sdG9BcnJheTpmdW5jdGlvbihhKXt2YXIgYj1bXTtUKGEsYixudWxsLHAudGhhdFJldHVybnNBcmd1bWVudCk7cmV0dXJuIGJ9LG9ubHk6ZnVuY3Rpb24oYSl7SyhhKT92b2lkIDA6eShcIjE0M1wiKTtyZXR1cm4gYX19LENvbXBvbmVudDpBLFB1cmVDb21wb25lbnQ6Qix1bnN0YWJsZV9Bc3luY0NvbXBvbmVudDpFLEZyYWdtZW50OncsY3JlYXRlRWxlbWVudDpKLGNsb25lRWxlbWVudDpmdW5jdGlvbihhLGIsZSl7dmFyIGM9bSh7fSxhLnByb3BzKSxcbmQ9YS5rZXksZz1hLnJlZixrPWEuX293bmVyO2lmKG51bGwhPWIpe3ZvaWQgMCE9PWIucmVmJiYoZz1iLnJlZixrPUcuY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihkPVwiXCIrYi5rZXkpO2lmKGEudHlwZSYmYS50eXBlLmRlZmF1bHRQcm9wcyl2YXIgZj1hLnR5cGUuZGVmYXVsdFByb3BzO2ZvcihoIGluIGIpSC5jYWxsKGIsaCkmJiFJLmhhc093blByb3BlcnR5KGgpJiYoY1toXT12b2lkIDA9PT1iW2hdJiZ2b2lkIDAhPT1mP2ZbaF06YltoXSl9dmFyIGg9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1oKWMuY2hpbGRyZW49ZTtlbHNlIGlmKDE8aCl7Zj1BcnJheShoKTtmb3IodmFyIGw9MDtsPGg7bCsrKWZbbF09YXJndW1lbnRzW2wrMl07Yy5jaGlsZHJlbj1mfXJldHVybnskJHR5cGVvZjpyLHR5cGU6YS50eXBlLGtleTpkLHJlZjpnLHByb3BzOmMsX293bmVyOmt9fSxjcmVhdGVGYWN0b3J5OmZ1bmN0aW9uKGEpe3ZhciBiPUouYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifSxcbmlzVmFsaWRFbGVtZW50OkssdmVyc2lvbjpcIjE2LjIuMFwiLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOntSZWFjdEN1cnJlbnRPd25lcjpHLGFzc2lnbjptfX0sVj1PYmplY3QuZnJlZXplKHtkZWZhdWx0OlV9KSxXPVYmJlV8fFY7bW9kdWxlLmV4cG9ydHM9V1tcImRlZmF1bHRcIl0/V1tcImRlZmF1bHRcIl06VztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaW52YXJpYW50KHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSA9PT0gJ2Z1bmN0aW9uJywgJyVzOiAlcyB0eXBlIGAlc2AgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gJyArICd0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJXNgLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKTtcbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgd2FybmluZyghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciwgJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMi4wXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBlbXB0eU9iamVjdCA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5T2JqZWN0Jyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi4yLjAnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sWydmb3InXTtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9DQUxMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5jYWxsJykgOiAweGVhYzg7XG52YXIgUkVBQ1RfUkVUVVJOX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5yZXR1cm4nKSA6IDB4ZWFjOTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbFsnZm9yJ10oJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFdBUk5JTkc6IERPIE5PVCBtYW51YWxseSByZXF1aXJlIHRoaXMgbW9kdWxlLlxuICogVGhpcyBpcyBhIHJlcGxhY2VtZW50IGZvciBgaW52YXJpYW50KC4uLilgIHVzZWQgYnkgdGhlIGVycm9yIGNvZGUgc3lzdGVtXG4gKiBhbmQgd2lsbCBfb25seV8gYmUgcmVxdWlyZWQgYnkgdGhlIGNvcnJlc3BvbmRpbmcgYmFiZWwgcGFzcy5cbiAqIEl0IGFsd2F5cyB0aHJvd3MuXG4gKi9cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb25zdHJ1Y3RvciAmJiAoY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIGNhbGxlck5hbWU7XG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3YXJuaW5nKGZhbHNlLCAnJXMoLi4uKTogQ2FuIG9ubHkgdXBkYXRlIGEgbW91bnRlZCBvciBtb3VudGluZyBjb21wb25lbnQuICcgKyAnVGhpcyB1c3VhbGx5IG1lYW5zIHlvdSBjYWxsZWQgJXMoKSBvbiBhbiB1bm1vdW50ZWQgY29tcG9uZW50LiAnICsgJ1RoaXMgaXMgYSBuby1vcC5cXG5cXG5QbGVhc2UgY2hlY2sgdGhlIGNvZGUgZm9yIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICAhKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpID8gaW52YXJpYW50KGZhbHNlLCAnc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJykgOiB2b2lkIDA7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuXG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG5cbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAvLyBEdXBsaWNhdGVkIGZyb20gQ29tcG9uZW50LlxuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50O1xuLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbmZ1bmN0aW9uIEFzeW5jQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIC8vIER1cGxpY2F0ZWQgZnJvbSBDb21wb25lbnQuXG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgYXN5bmNDb21wb25lbnRQcm90b3R5cGUgPSBBc3luY0NvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbmFzeW5jQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQXN5bmNDb21wb25lbnQ7XG4vLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cbl9hc3NpZ24oYXN5bmNDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuYXN5bmNDb21wb25lbnRQcm90b3R5cGUudW5zdGFibGVfaXNBc3luY1JlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcbmFzeW5jQ29tcG9uZW50UHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG5cbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmcoZmFsc2UsICclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vZmIubWUvcmVhY3Qtc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgfVxuICB9O1xuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG4gICAgICB3YXJuaW5nKGZhbHNlLCAnJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgIH1cbiAgfTtcbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIG5vIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3cgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9O1xuXG4gICAgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7XG4gICAgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pO1xuICAgIC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7XG5cbiAgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuICB2YXIgcHJvcHMgPSB7fTtcblxuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgfVxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTtcbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHMuJCR0eXBlb2YgPT09ICd1bmRlZmluZWQnIHx8IHByb3BzLiQkdHlwZW9mICE9PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVmYWN0b3J5XG4gKi9cblxuXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7XG5cbiAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmO1xuICAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7XG4gIC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG5cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgdmFsaWQgY29tcG9uZW50LlxuICogQGZpbmFsXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xuXG57XG4gIC8vIENvbXBvbmVudCB0aGF0IGlzIGJlaW5nIHdvcmtlZCBvblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHJldHVybiBpbXBsKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG52YXIgUE9PTF9TSVpFID0gMTA7XG52YXIgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gdHJhdmVyc2VDb250ZXh0UG9vbC5wb3AoKTtcbiAgICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgICByZXR1cm4gdHJhdmVyc2VDb250ZXh0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hcFJlc3VsdCxcbiAgICAgIGtleVByZWZpeDoga2V5UHJlZml4LFxuICAgICAgZnVuYzogbWFwRnVuY3Rpb24sXG4gICAgICBjb250ZXh0OiBtYXBDb250ZXh0LFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KSB7XG4gIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gKiBwcm9jZXNzLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ0FMTF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUkVUVVJOX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRyYXZlcnNlQ29udGV4dCwgY2hpbGRyZW4sXG4gICAgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgd2FybmluZyhkaWRXYXJuQWJvdXRNYXBzLCAnVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyB1bnN1cHBvcnRlZCBhbmQgd2lsbCBsaWtlbHkgeWllbGQgJyArICd1bmV4cGVjdGVkIHJlc3VsdHMuIENvbnZlcnQgaXQgdG8gYSBzZXF1ZW5jZS9pdGVyYWJsZSBvZiBrZXllZCAnICsgJ1JlYWN0RWxlbWVudHMgaW5zdGVhZC4lcycsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgYWRkZW5kdW0gPSAnJztcbiAgICAgIHtcbiAgICAgICAgYWRkZW5kdW0gPSAnIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicgKyBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsICdPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6ICVzKS4lcycsIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZywgYWRkZW5kdW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfVxuICAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCxcbiAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGtleSwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuYywgY29udGV4dCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4uY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbiwgY29udGV4dCkge1xuICByZXR1cm4gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwsIG51bGwpO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3QuY2hpbGRyZW4udG9hcnJheVxuICovXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICAhaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJykgOiB2b2lkIDA7XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxudmFyIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUgPSBmdW5jdGlvbiAobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyAoc291cmNlID8gJyAoYXQgJyArIHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJykgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJyA6IG93bmVyTmFtZSA/ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJyA6ICcnKTtcbn07XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUoZmliZXIpIHtcbiAgdmFyIHR5cGUgPSBmaWJlci50eXBlO1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWU7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVhY3RFbGVtZW50VmFsaWRhdG9yIHByb3ZpZGVzIGEgd3JhcHBlciBhcm91bmQgYSBlbGVtZW50IGZhY3RvcnlcbiAqIHdoaWNoIHZhbGlkYXRlcyB0aGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBlbGVtZW50LiBUaGlzIGlzIGludGVuZGVkIHRvIGJlXG4gKiB1c2VkIG9ubHkgaW4gREVWIGFuZCBjb3VsZCBiZSByZXBsYWNlZCBieSBhIHN0YXRpYyB0eXBlIGNoZWNrZXIgZm9yIGxhbmd1YWdlc1xuICogdGhhdCBzdXBwb3J0IGl0LlxuICovXG5cbntcbiAgdmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICB2YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcblxuICB2YXIgZ2V0RGlzcGxheU5hbWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnI2VtcHR5JztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiAnI3RleHQnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnR5cGU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHJldHVybiAnUmVhY3QuRnJhZ21lbnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudC50eXBlLmRpc3BsYXlOYW1lIHx8IGVsZW1lbnQudHlwZS5uYW1lIHx8ICdVbmtub3duJztcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7XG4gICAgaWYgKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldERpc3BsYXlOYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KTtcbiAgICAgIHZhciBvd25lciA9IGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9vd25lcjtcbiAgICAgIHN0YWNrICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgZ2V0Q29tcG9uZW50TmFtZShvd25lcikpO1xuICAgIH1cbiAgICBzdGFjayArPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKSB8fCAnJztcbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG5cbiAgdmFyIFZBTElEX0ZSQUdNRU5UX1BST1BTID0gbmV3IE1hcChbWydjaGlsZHJlbicsIHRydWVdLCBbJ2tleScsIHRydWVdXSk7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCAmJiBlbGVtZW50UHJvcHMuX19zb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBzb3VyY2UgPSBlbGVtZW50UHJvcHMuX19zb3VyY2U7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9ICdcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDwnICsgcGFyZW50TmFtZSArICc+Lic7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmZvO1xufVxuXG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuXG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlO1xuXG4gIC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSAnIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tICcgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyKSArICcuJztcbiAgfVxuXG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAge1xuICAgIHdhcm5pbmcoZmFsc2UsICdFYWNoIGNoaWxkIGluIGFuIGFycmF5IG9yIGl0ZXJhdG9yIHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLiVzJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lciwgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgfVxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIGNvbXBvbmVudENsYXNzID0gZWxlbWVudC50eXBlO1xuICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuYW1lID0gY29tcG9uZW50Q2xhc3MuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Q2xhc3MubmFtZTtcbiAgdmFyIHByb3BUeXBlcyA9IGNvbXBvbmVudENsYXNzLnByb3BUeXBlcztcbiAgaWYgKHByb3BUeXBlcykge1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuICB9IGVsc2UgaWYgKGNvbXBvbmVudENsYXNzLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICB3YXJuaW5nKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgd2FybmluZyhjb21wb25lbnRDbGFzcy5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBmcmFnbWVudDtcblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIga2V5ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIGlmICghVkFMSURfRlJBR01FTlRfUFJPUFMuaGFzKGtleSkpIHtcbiAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4lcycsIGtleSwgZ2V0U3RhY2tBZGRlbmR1bSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3JbJ3JldHVybiddKSB7XG4gICAgICAgIF9pdGVyYXRvclsncmV0dXJuJ10oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4lcycsIGdldFN0YWNrQWRkZW5kdW0oKSk7XG4gIH1cblxuICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N5bWJvbCcgfHwgdHlwZW9mIHR5cGUgPT09ICdudW1iZXInO1xuICAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShwcm9wcyk7XG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICBpbmZvICs9IGdldFN0YWNrQWRkZW5kdW0oKSB8fCAnJztcblxuICAgIHdhcm5pbmcoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGUgPT0gbnVsbCA/IHR5cGUgOiB0eXBlb2YgdHlwZSwgaW5mbyk7XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzeW1ib2wnICYmIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgLy8gTGVnYWN5IGhvb2sgVE9ETzogV2FybiBpZiB0aGlzIGlzIGFjY2Vzc2VkXG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbnZhciBSZWFjdCA9IHtcbiAgQ2hpbGRyZW46IHtcbiAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIG9ubHk6IG9ubHlDaGlsZFxuICB9LFxuXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuICB1bnN0YWJsZV9Bc3luY0NvbXBvbmVudDogQXN5bmNDb21wb25lbnQsXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG5cbiAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjbG9uZUVsZW1lbnQ6IGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uLFxuICBjcmVhdGVGYWN0b3J5OiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24sXG4gIGlzVmFsaWRFbGVtZW50OiBpc1ZhbGlkRWxlbWVudCxcblxuICB2ZXJzaW9uOiBSZWFjdFZlcnNpb24sXG5cbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IHtcbiAgICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gICAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgICBhc3NpZ246IF9hc3NpZ25cbiAgfVxufTtcblxue1xuICBfYXNzaWduKFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELCB7XG4gICAgLy8gVGhlc2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWU6IFJlYWN0RGVidWdDdXJyZW50RnJhbWUsXG4gICAgLy8gU2hpbSBmb3IgUmVhY3QgRE9NIDE2LjAuMCB3aGljaCBzdGlsbCBkZXN0cnVjdHVyZWQgKGJ1dCBub3QgdXNlZCkgdGhpcy5cbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gUmVhY3QgMTcuMC5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiB7fVxuICB9KTtcbn1cblxuXG5cbnZhciBSZWFjdCQyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmF1bHQ6IFJlYWN0XG59KTtcblxudmFyIFJlYWN0JDMgPSAoIFJlYWN0JDIgJiYgUmVhY3QgKSB8fCBSZWFjdCQyO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdC5cbnZhciByZWFjdCA9IFJlYWN0JDNbJ2RlZmF1bHQnXSA/IFJlYWN0JDNbJ2RlZmF1bHQnXSA6IFJlYWN0JDM7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhY3Q7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIG1hcFRvT2JqZWN0KG1hcCkge1xuICBjb25zdCBvYmplY3QgPSB7fTtcblxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBtYXAuZW50cmllcygpKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBvYmplY3Rba2V5XSA9IG1hcFRvT2JqZWN0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgYXR0cmlidXRlcywgZWxlbWVudHMpIHtcbiAgY29uc3QgcHJvcHMgPSBtYXBUb09iamVjdChhdHRyaWJ1dGVzKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnLCBwcm9wcywgLi4uZWxlbWVudHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG4iXSwibmFtZXMiOlsiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsImFzc2lnbiIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiaSIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsIm1hcCIsIm4iLCJqb2luIiwidGVzdDMiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJrZXlzIiwiZXJyIiwidGFyZ2V0Iiwic291cmNlIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJrZXkiLCJjYWxsIiwiZW1wdHlPYmplY3QiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJmcmVlemUiLCJtYWtlRW1wdHlGdW5jdGlvbiIsImFyZyIsImVtcHR5RnVuY3Rpb24iLCJ0aGF0UmV0dXJucyIsInRoYXRSZXR1cm5zRmFsc2UiLCJ0aGF0UmV0dXJuc1RydWUiLCJ0aGF0UmV0dXJuc051bGwiLCJ0aGF0UmV0dXJuc1RoaXMiLCJ0aGF0UmV0dXJuc0FyZ3VtZW50IiwicSIsIlN5bWJvbCIsInIiLCJ0IiwidSIsInYiLCJ3IiwieCIsIml0ZXJhdG9yIiwieSIsImEiLCJiIiwiZSIsImMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJFcnJvciIsIm5hbWUiLCJmcmFtZXNUb1BvcCIsInoiLCJpc01vdW50ZWQiLCJlbnF1ZXVlRm9yY2VVcGRhdGUiLCJlbnF1ZXVlUmVwbGFjZVN0YXRlIiwiZW5xdWV1ZVNldFN0YXRlIiwiQSIsInByb3BzIiwiY29udGV4dCIsInJlZnMiLCJ1cGRhdGVyIiwiaXNSZWFjdENvbXBvbmVudCIsInNldFN0YXRlIiwiZm9yY2VVcGRhdGUiLCJCIiwiQyIsIkQiLCJjb25zdHJ1Y3RvciIsIm0iLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsIkUiLCJGIiwidW5zdGFibGVfaXNBc3luY1JlYWN0Q29tcG9uZW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJHIiwiY3VycmVudCIsIkgiLCJJIiwicmVmIiwiX19zZWxmIiwiX19zb3VyY2UiLCJKIiwiZCIsImciLCJrIiwiZiIsImgiLCJBcnJheSIsImwiLCJkZWZhdWx0UHJvcHMiLCIkJHR5cGVvZiIsInR5cGUiLCJfb3duZXIiLCJLIiwiZXNjYXBlIiwicmVwbGFjZSIsIkwiLCJNIiwiTiIsInBvcCIsInJlc3VsdCIsImtleVByZWZpeCIsImZ1bmMiLCJjb3VudCIsIk8iLCJwdXNoIiwiUCIsIlEiLCJpc0FycmF5IiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiUiIsIlMiLCJUIiwicCIsIlUiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJvbmx5IiwiQ29tcG9uZW50IiwiUHVyZUNvbXBvbmVudCIsInVuc3RhYmxlX0FzeW5jQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlRmFjdG9yeSIsImJpbmQiLCJ2ZXJzaW9uIiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJSZWFjdEN1cnJlbnRPd25lciIsIlYiLCJkZWZhdWx0IiwiVyIsInZhbGlkYXRlRm9ybWF0IiwiZm9ybWF0IiwiaW52YXJpYW50IiwiY29uZGl0aW9uIiwiZXJyb3IiLCJhcmdzIiwiYXJnSW5kZXgiLCJ3YXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiX2xlbiIsIl9rZXkiLCJtZXNzYWdlIiwiY29uc29sZSIsImluZGV4T2YiLCJfbGVuMiIsIl9rZXkyIiwiYXBwbHkiLCJjb25jYXQiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsInJlcXVpcmUkJDAiLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJjb21wb25lbnROYW1lIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCIsInN0YWNrIiwiX2Fzc2lnbiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsIlJlYWN0VmVyc2lvbiIsImhhc1N5bWJvbCIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlJFQUNUX0NBTExfVFlQRSIsIlJFQUNUX1JFVFVSTl9UWVBFIiwiUkVBQ1RfUE9SVEFMX1RZUEUiLCJSRUFDVF9GUkFHTUVOVF9UWVBFIiwiTUFZQkVfSVRFUkFUT1JfU1lNQk9MIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIm1heWJlSXRlcmF0b3IiLCJsb3dQcmlvcml0eVdhcm5pbmciLCJ3YXJuIiwibG93UHJpb3JpdHlXYXJuaW5nJDEiLCJkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQiLCJ3YXJuTm9vcCIsInB1YmxpY0luc3RhbmNlIiwiY2FsbGVyTmFtZSIsImRpc3BsYXlOYW1lIiwid2FybmluZ0tleSIsIlJlYWN0Tm9vcFVwZGF0ZVF1ZXVlIiwiY2FsbGJhY2siLCJjb21wbGV0ZVN0YXRlIiwicGFydGlhbFN0YXRlIiwiZGVwcmVjYXRlZEFQSXMiLCJkZWZpbmVEZXByZWNhdGlvbldhcm5pbmciLCJtZXRob2ROYW1lIiwiaW5mbyIsImRlZmluZVByb3BlcnR5IiwiZm5OYW1lIiwiQ29tcG9uZW50RHVtbXkiLCJwdXJlQ29tcG9uZW50UHJvdG90eXBlIiwiQXN5bmNDb21wb25lbnQiLCJhc3luY0NvbXBvbmVudFByb3RvdHlwZSIsIlJFU0VSVkVEX1BST1BTIiwic3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24iLCJzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biIsImhhc1ZhbGlkUmVmIiwiY29uZmlnIiwiZ2V0dGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0IiwiaXNSZWFjdFdhcm5pbmciLCJoYXNWYWxpZEtleSIsImRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nS2V5IiwiZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdSZWYiLCJSZWFjdEVsZW1lbnQiLCJzZWxmIiwib3duZXIiLCJlbGVtZW50IiwiX3N0b3JlIiwicHJvcE5hbWUiLCJjaGlsZHJlbkxlbmd0aCIsImNoaWxkQXJyYXkiLCJjbG9uZUFuZFJlcGxhY2VLZXkiLCJvbGRFbGVtZW50IiwibmV3S2V5IiwibmV3RWxlbWVudCIsIl9zZWxmIiwiX3NvdXJjZSIsImlzVmFsaWRFbGVtZW50Iiwib2JqZWN0IiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsImdldEN1cnJlbnRTdGFjayIsImdldFN0YWNrQWRkZW5kdW0iLCJpbXBsIiwiU0VQQVJBVE9SIiwiU1VCU0VQQVJBVE9SIiwiZXNjYXBlUmVnZXgiLCJlc2NhcGVyTG9va3VwIiwiZXNjYXBlZFN0cmluZyIsIm1hdGNoIiwiZGlkV2FybkFib3V0TWFwcyIsInVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4IiwiZXNjYXBlVXNlclByb3ZpZGVkS2V5IiwidGV4dCIsIlBPT0xfU0laRSIsInRyYXZlcnNlQ29udGV4dFBvb2wiLCJnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQiLCJtYXBSZXN1bHQiLCJtYXBGdW5jdGlvbiIsIm1hcENvbnRleHQiLCJ0cmF2ZXJzZUNvbnRleHQiLCJyZWxlYXNlVHJhdmVyc2VDb250ZXh0IiwidHJhdmVyc2VBbGxDaGlsZHJlbkltcGwiLCJuYW1lU29GYXIiLCJpbnZva2VDYWxsYmFjayIsImdldENvbXBvbmVudEtleSIsImNoaWxkIiwibmV4dE5hbWUiLCJzdWJ0cmVlQ291bnQiLCJuZXh0TmFtZVByZWZpeCIsIml0ZXJhdG9yRm4iLCJlbnRyaWVzIiwic3RlcCIsImlpIiwiYWRkZW5kdW0iLCJjaGlsZHJlblN0cmluZyIsInRyYXZlcnNlQWxsQ2hpbGRyZW4iLCJjb21wb25lbnQiLCJpbmRleCIsImZvckVhY2hTaW5nbGVDaGlsZCIsImJvb2tLZWVwaW5nIiwiZm9yRWFjaENoaWxkcmVuIiwiZm9yRWFjaEZ1bmMiLCJmb3JFYWNoQ29udGV4dCIsIm1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQiLCJjaGlsZEtleSIsIm1hcHBlZENoaWxkIiwibWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbCIsImFycmF5IiwicHJlZml4IiwiZXNjYXBlZFByZWZpeCIsIm1hcENoaWxkcmVuIiwiY291bnRDaGlsZHJlbiIsIm9ubHlDaGlsZCIsImRlc2NyaWJlQ29tcG9uZW50RnJhbWUiLCJvd25lck5hbWUiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJnZXRDb21wb25lbnROYW1lIiwiZmliZXIiLCJjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCIsInByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duIiwiZ2V0RGlzcGxheU5hbWUiLCJWQUxJRF9GUkFHTUVOVF9QUk9QUyIsIk1hcCIsImdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSIsImdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtIiwiZWxlbWVudFByb3BzIiwib3duZXJIYXNLZXlVc2VXYXJuaW5nIiwiZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyIsInBhcmVudFR5cGUiLCJwYXJlbnROYW1lIiwidmFsaWRhdGVFeHBsaWNpdEtleSIsInZhbGlkYXRlZCIsImN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJjaGlsZE93bmVyIiwidmFsaWRhdGVDaGlsZEtleXMiLCJub2RlIiwidmFsaWRhdGVQcm9wVHlwZXMiLCJjb21wb25lbnRDbGFzcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImdldERlZmF1bHRQcm9wcyIsImlzUmVhY3RDbGFzc0FwcHJvdmVkIiwidmFsaWRhdGVGcmFnbWVudFByb3BzIiwiZnJhZ21lbnQiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uIiwiX2RpZEl0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvciIsIl9zdGVwIiwiaGFzIiwiY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIiwidmFsaWRUeXBlIiwic291cmNlSW5mbyIsImNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiIsInZhbGlkYXRlZEZhY3RvcnkiLCJjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiIsIlJlYWN0IiwiUmVhY3QkMiIsIlJlYWN0JDMiLCJyZWFjdCIsIm1hcFRvT2JqZWN0IiwidGFnIiwiYXR0cmlidXRlcyIsImVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7QUFRQSxJQUFJQSx3QkFBd0JDLE9BQU9ELHFCQUFuQztBQUNBLElBQUlFLGlCQUFpQkQsT0FBT0UsU0FBUCxDQUFpQkQsY0FBdEM7QUFDQSxJQUFJRSxtQkFBbUJILE9BQU9FLFNBQVAsQ0FBaUJFLG9CQUF4Qzs7QUFFQSxTQUFTQyxRQUFULENBQWtCQyxHQUFsQixFQUF1QjtLQUNsQkEsUUFBUSxJQUFSLElBQWdCQSxRQUFRQyxTQUE1QixFQUF1QztRQUNoQyxJQUFJQyxTQUFKLENBQWMsdURBQWQsQ0FBTjs7O1FBR01SLE9BQU9NLEdBQVAsQ0FBUDs7O0FBR0QsU0FBU0csZUFBVCxHQUEyQjtLQUN0QjtNQUNDLENBQUNULE9BQU9VLE1BQVosRUFBb0I7VUFDWixLQUFQOzs7Ozs7TUFNR0MsUUFBUSxJQUFJQyxNQUFKLENBQVcsS0FBWCxDQUFaLENBUkc7UUFTRyxDQUFOLElBQVcsSUFBWDtNQUNJWixPQUFPYSxtQkFBUCxDQUEyQkYsS0FBM0IsRUFBa0MsQ0FBbEMsTUFBeUMsR0FBN0MsRUFBa0Q7VUFDMUMsS0FBUDs7OztNQUlHRyxRQUFRLEVBQVo7T0FDSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO1NBQ3RCLE1BQU1ILE9BQU9JLFlBQVAsQ0FBb0JELENBQXBCLENBQVosSUFBc0NBLENBQXRDOztNQUVHRSxTQUFTakIsT0FBT2EsbUJBQVAsQ0FBMkJDLEtBQTNCLEVBQWtDSSxHQUFsQyxDQUFzQyxVQUFV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
