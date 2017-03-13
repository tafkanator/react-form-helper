(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactFormProps"] = factory(require("react"));
	else
		root["ReactFormProps"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = function (_Component) {
	_inherits(Field, _Component);

	function Field() {
		var _temp, _this, _ret;

		_classCallCheck(this, Field);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.shouldComponentUpdate = function () {
			var _this2;

			return (_this2 = _this).__shouldComponentUpdate__REACT_HOT_LOADER__.apply(_this2, arguments);
		}, _this.render = function () {
			var _this3;

			return (_this3 = _this).__render__REACT_HOT_LOADER__.apply(_this3, arguments);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Field.prototype.__shouldComponentUpdate__REACT_HOT_LOADER__ = function __shouldComponentUpdate__REACT_HOT_LOADER__(nextProps) {
		return this.props.input.value !== nextProps.input.value || this.props.isTouched !== nextProps.isTouched || this.props.error !== nextProps.error;
	};

	Field.prototype.__render__REACT_HOT_LOADER__ = function __render__REACT_HOT_LOADER__() {
		var _props = this.props,
		    input = _props.input,
		    component = _props.component,
		    validate = _props.validate,
		    name = _props.name,
		    type = _props.type,
		    defaultValue = _props.defaultValue,
		    rest = _objectWithoutProperties(_props, ['input', 'component', 'validate', 'name', 'type', 'defaultValue']);

		return component(input, rest);
	};

	return Field;
}(_react.Component);

Field.propTypes = {
	component: _react.PropTypes.func,
	isTouched: _react.PropTypes.bool,
	error: _react.PropTypes.string,
	validate: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.func)]),
	name: _react.PropTypes.string.isRequired,
	type: _react.PropTypes.string.isRequired,
	defaultValue: _react.PropTypes.any,
	input: _react.PropTypes.shape({
		onChange: _react.PropTypes.func,
		onBlur: _react.PropTypes.func,
		type: _react.PropTypes.any,
		value: _react.PropTypes.any
	})
};
var _default = Field;
exports.default = _default;
;

var _temp2 = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Field, 'Field', 'C:/wamp/www/react-form-helper/src/Field.js');

	__REACT_HOT_LOADER__.register(_default, 'default', 'C:/wamp/www/react-form-helper/src/Field.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = WithFormProp;

var _react = __webpack_require__(0);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function WithFormProp(_ref) {
	var values = _ref.values,
	    children = _ref.children,
	    component = _ref.component,
	    rest = _objectWithoutProperties(_ref, ['values', 'children', 'component']);

	if (component !== undefined) {
		return component(values);
	}

	var shouldNotRender = Object.entries(rest).some(function (_ref2) {
		var key = _ref2[0],
		    value = _ref2[1];
		return value !== values[key];
	});

	return shouldNotRender ? null : children;
}

WithFormProp.propTypes = {
	isSubmitting: _react.PropTypes.bool,
	hasErrors: _react.PropTypes.bool,
	values: _react.PropTypes.object,
	children: _react.PropTypes.any,
	component: _react.PropTypes.func
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(WithFormProp, 'WithFormProp', 'C:/wamp/www/react-form-helper/src/WithFormProp.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _immutabilityHelper = __webpack_require__(4);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _Field = __webpack_require__(1);

var _Field2 = _interopRequireDefault(_Field);

var _WithFormProp = __webpack_require__(2);

var _WithFormProp2 = _interopRequireDefault(_WithFormProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
	_inherits(Form, _Component);

	function Form() {
		var _temp, _this, _ret;

		_classCallCheck(this, Form);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = Form.getInitialState(), _this.componentDidMount = function () {
			var _this2;

			return (_this2 = _this).__componentDidMount__REACT_HOT_LOADER__.apply(_this2, arguments);
		}, _this.componentWillUnmount = function () {
			var _this3;

			return (_this3 = _this).__componentWillUnmount__REACT_HOT_LOADER__.apply(_this3, arguments);
		}, _this.render = function () {
			var _this4;

			return (_this4 = _this).__render__REACT_HOT_LOADER__.apply(_this4, arguments);
		}, _this.handleChange = function () {
			var _this5;

			return (_this5 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this5, arguments);
		}, _this.handleBlur = function () {
			var _this6;

			return (_this6 = _this).__handleBlur__REACT_HOT_LOADER__.apply(_this6, arguments);
		}, _this.handleSubmit = function () {
			var _this7;

			return (_this7 = _this).__handleSubmit__REACT_HOT_LOADER__.apply(_this7, arguments);
		}, _this.handleSuccess = function () {
			var _this8;

			return (_this8 = _this).__handleSuccess__REACT_HOT_LOADER__.apply(_this8, arguments);
		}, _this.handleFail = function () {
			var _this9;

			return (_this9 = _this).__handleFail__REACT_HOT_LOADER__.apply(_this9, arguments);
		}, _this.isPromise = function () {
			var _this10;

			return (_this10 = _this).__isPromise__REACT_HOT_LOADER__.apply(_this10, arguments);
		}, _this.getInstanceOf = function () {
			var _this11;

			return (_this11 = _this).__getInstanceOf__REACT_HOT_LOADER__.apply(_this11, arguments);
		}, _this.getEnhancedChildren = function () {
			var _this12;

			return (_this12 = _this).__getEnhancedChildren__REACT_HOT_LOADER__.apply(_this12, arguments);
		}, _this.isTouched = function () {
			var _this13;

			return (_this13 = _this).__isTouched__REACT_HOT_LOADER__.apply(_this13, arguments);
		}, _this.getFieldErrors = function () {
			var _this14;

			return (_this14 = _this).__getFieldErrors__REACT_HOT_LOADER__.apply(_this14, arguments);
		}, _this.reset = function () {
			var _this15;

			return (_this15 = _this).__reset__REACT_HOT_LOADER__.apply(_this15, arguments);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Form.prototype.__componentDidMount__REACT_HOT_LOADER__ = function __componentDidMount__REACT_HOT_LOADER__() {
		this.setState({
			isMounted: true
		});
	};

	Form.prototype.__componentWillUnmount__REACT_HOT_LOADER__ = function __componentWillUnmount__REACT_HOT_LOADER__() {
		this.setState({
			isMounted: false
		});
	};

	Form.prototype.__render__REACT_HOT_LOADER__ = function __render__REACT_HOT_LOADER__() {
		var _props = this.props,
		    children = _props.children,
		    onSubmit = _props.onSubmit,
		    onSuccess = _props.onSuccess,
		    onFail = _props.onFail,
		    rest = _objectWithoutProperties(_props, ['children', 'onSubmit', 'onSuccess', 'onFail']);

		return _react2.default.createElement(
			'form',
			_extends({}, rest, { onSubmit: this.handleSubmit }),
			this.getEnhancedChildren(children)
		);
	};

	Form.prototype.__handleChange__REACT_HOT_LOADER__ = function __handleChange__REACT_HOT_LOADER__(validators, e) {
		var _update, _update2;

		var key = e.target.name;
		var value = e.target.value;

		var error = this.isTouched(key) ? this.getFieldErrors(validators, value) : null;

		this.setState({
			fields: (0, _immutabilityHelper2.default)(this.state.fields, (_update = {}, _update[key] = { $set: value }, _update)),
			errors: (0, _immutabilityHelper2.default)(this.state.errors, (_update2 = {}, _update2[key] = { $set: error }, _update2))
		});
	};

	Form.prototype.__handleBlur__REACT_HOT_LOADER__ = function __handleBlur__REACT_HOT_LOADER__(validators, e) {
		var _update3;

		var key = e.target.name;
		var value = e.target.value;

		var newState = {
			errors: (0, _immutabilityHelper2.default)(this.state.errors, (_update3 = {}, _update3[key] = { $set: this.getFieldErrors(validators, value) }, _update3))
		};

		if (this.state.touchedFields.indexOf(key) === -1) {
			newState.touchedFields = (0, _immutabilityHelper2.default)(this.state.touchedFields, { $push: [key] });
		}

		this.setState(newState);
	};

	Form.prototype.__handleSubmit__REACT_HOT_LOADER__ = function __handleSubmit__REACT_HOT_LOADER__(e) {
		var fields = this.state.fields;


		e.preventDefault();

		var response = this.props.onSubmit(fields);

		if (this.isPromise(response)) {
			this.setState({
				isSubmitting: true
			});

			return response.then(this.handleSuccess, this.handleFail);
		}

		return response;
	};

	Form.prototype.__handleSuccess__REACT_HOT_LOADER__ = function __handleSuccess__REACT_HOT_LOADER__() {
		var onSuccess = this.props.onSuccess;


		if (this.state.isMounted && onSuccess !== undefined) {
			this.setState({
				isSubmitting: false
			});

			onSuccess(this.reset);
		}
	};

	Form.prototype.__handleFail__REACT_HOT_LOADER__ = function __handleFail__REACT_HOT_LOADER__(e) {
		var onFail = this.props.onFail;


		if (this.state.isMounted && onFail !== undefined) {
			var newState = {
				isSubmitting: false
			};

			var errors = onFail(e);

			if (errors !== undefined) {
				newState.errors = errors;
				newState.touchedFields = Object.keys(errors);
			}

			this.setState(newState);
		}
	};

	Form.prototype.__isPromise__REACT_HOT_LOADER__ = function __isPromise__REACT_HOT_LOADER__(val) {
		return val && typeof val.then === 'function';
	};

	Form.prototype.__getInstanceOf__REACT_HOT_LOADER__ = function __getInstanceOf__REACT_HOT_LOADER__(child) {
		if (!child || !child.type) {
			return null;
		}

		return child.type.name;
	};

	Form.prototype.__getEnhancedChildren__REACT_HOT_LOADER__ = function __getEnhancedChildren__REACT_HOT_LOADER__(children) {
		var _this16 = this;

		return _react2.default.Children.map(children, function (child) {
			switch (_this16.getInstanceOf(child)) {
				case _Field2.default.name:
					return _react2.default.cloneElement(child, {
						isTouched: _this16.isTouched(child.props.name),
						error: _this16.state.errors[child.props.name] || null,
						input: {
							onChange: _this16.handleChange.bind(null, child.props.validate),
							onBlur: _this16.handleBlur.bind(null, child.props.validate),
							name: child.props.name,
							type: child.props.type,
							value: child.props.name in _this16.state.fields ? _this16.state.fields[child.props.name] : child.props.defaultValue || ''
						}
					});

				case _WithFormProp2.default.name:
					return _react2.default.cloneElement(child, {
						values: {
							hasErrors: Object.values(_this16.state.errors).filter(function (value) {
								return Boolean(value);
							}).length > 0,
							isSubmitting: _this16.state.isSubmitting
						}
					});

				default:
					return child.props && child.props.children ? _this16.getEnhancedChildren(child.props.children) : child;
			}
		});
	};

	Form.prototype.__isTouched__REACT_HOT_LOADER__ = function __isTouched__REACT_HOT_LOADER__(name) {
		return this.state.touchedFields.indexOf(name) !== -1;
	};

	Form.prototype.__getFieldErrors__REACT_HOT_LOADER__ = function __getFieldErrors__REACT_HOT_LOADER__(validators, value) {
		if (typeof validators === 'function') {
			return validators(value) || null;
		} else if (Array.isArray(validators)) {
			return validators.map(function (validator) {
				return validator(value);
			}).filter(function (val) {
				return Boolean(val);
			}).join(', ');
		}

		return null;
	};

	Form.prototype.__reset__REACT_HOT_LOADER__ = function __reset__REACT_HOT_LOADER__() {
		this.setState(Form.getInitialState({
			isMounted: true
		}));
	};

	return Form;
}(_react.Component);

Form.propTypes = {
	children: _react.PropTypes.any.isRequired,
	onSubmit: _react.PropTypes.func.isRequired,
	onSuccess: _react.PropTypes.func,
	onFail: _react.PropTypes.func
};

Form.getInitialState = function () {
	var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	return _extends({
		fields: {},
		errors: {},
		touchedFields: [],
		enhancedChildren: [],
		isMounted: false,
		isSubmitting: false
	}, props);
};

var _default = Form;
exports.default = _default;
;

var _temp2 = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Form, 'Form', 'C:/wamp/www/react-form-helper/src/Form.js');

	__REACT_HOT_LOADER__.register(_default, 'default', 'C:/wamp/www/react-form-helper/src/Form.js');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var invariant = __webpack_require__(5);

var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;

var assign = Object.assign || function assign(target, source) {
  var keys = getAllKeys(source);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  return target;
}

var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
  function(obj) { return Object.keys(obj) }
;

function copy(object) {
  if (object instanceof Array) {
    return object.slice();
  } else if (object && typeof object === 'object') {
    return assign(new object.constructor(), object);
  } else {
    return object;
  }
}


function newContext() {
  var commands = assign({}, defaultCommands);
  update.extend = function(directive, fn) {
    commands[directive] = fn;
  }

  return update;

  function update(object, spec) {
    invariant(
      !Array.isArray(spec),
      'update(): You provided an invalid spec to update(). The spec may ' +
      'not contain an array except as the value of $set, $push, $unshift, ' +
      '$splice or any custom command allowing an array value.'
    );

    invariant(
      typeof spec === 'object' && spec !== null,
      'update(): You provided an invalid spec to update(). The spec and ' +
      'every included key path must be plain objects containing one of the ' +
      'following commands: %s.',
      Object.keys(commands).join(', ')
    );

    var nextObject = object;
    var specKeys = getAllKeys(spec)
    var index, key;
    for (index = 0; index < specKeys.length; index++) {
      var key = specKeys[index];
      if (hasOwnProperty.call(commands, key)) {
        nextObject = commands[key](spec[key], nextObject, spec, object);
      } else {
        var nextValueForKey = update(object[key], spec[key]);
        if (nextValueForKey !== nextObject[key]) {
          if (nextObject === object) {
            nextObject = copy(object);
          }
          nextObject[key] = nextValueForKey;
        }
      }
    }
    return nextObject;
  }

}

var defaultCommands = {
  $push: function(value, original, spec) {
    invariantPushAndUnshift(original, spec, '$push');
    return original.concat(value);
  },
  $unshift: function(value, original, spec) {
    invariantPushAndUnshift(original, spec, '$unshift');
    return value.concat(original);
  },
  $splice: function(value, nextObject, spec, object) {
    var originalValue = nextObject === object ? copy(object) : nextObject;
    invariantSplices(originalValue, spec);
    value.forEach(function(args) {
      invariantSplice(args);
      splice.apply(originalValue, args);
    });
    return originalValue;
  },
  $set: function(value, original, spec) {
    invariantSet(spec);
    return value;
  },
  $merge: function(value, nextObject, spec, object) {
    var originalValue = nextObject === object ? copy(object) : nextObject;
    invariantMerge(originalValue, value);
    getAllKeys(value).forEach(function(key) {
      originalValue[key] = value[key];
    });
    return originalValue;
  },
  $apply: function(value, original) {
    invariantApply(value);
    return value(original);
  }
};



module.exports = newContext();
module.exports.newContext = newContext;


// invariants

function invariantPushAndUnshift(value, spec, command) {
  invariant(
    Array.isArray(value),
    'update(): expected target of %s to be an array; got %s.',
    command,
    value
  );
  var specValue = spec[command];
  invariant(
    Array.isArray(specValue),
    'update(): expected spec of %s to be an array; got %s. ' +
    'Did you forget to wrap your parameter in an array?',
    command,
    specValue
  );
}

function invariantSplices(value, spec) {
  invariant(
    Array.isArray(value),
    'Expected $splice target to be an array; got %s',
    value
  );
  invariantSplice(spec['$splice']);
}

function invariantSplice(value) {
  invariant(
    Array.isArray(value),
    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
    'Did you forget to wrap your parameters in an array?',
    value
  );
}

function invariantApply(fn) {
  invariant(
    typeof fn === 'function',
    'update(): expected spec of $apply to be a function; got %s.',
    fn
  );
}

function invariantSet(spec) {
  invariant(
    Object.keys(spec).length === 1,
    'Cannot have more than one key in an object with $set'
  );
}

function invariantMerge(target, specValue) {
  invariant(
    specValue && typeof specValue === 'object',
    'update(): $merge expects a spec of type \'object\'; got %s',
    specValue
  );
  invariant(
    target && typeof target === 'object',
    'update(): $merge expects a target of type \'object\'; got %s',
    target
  );
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
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

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.WithFormProp = exports.Field = exports.Form = undefined;

var _Form = __webpack_require__(3);

var _Form2 = _interopRequireDefault(_Form);

var _Field = __webpack_require__(1);

var _Field2 = _interopRequireDefault(_Field);

var _WithFormProp = __webpack_require__(2);

var _WithFormProp2 = _interopRequireDefault(_WithFormProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Form = _Form2.default;
exports.Field = _Field2.default;
exports.WithFormProp = _WithFormProp2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map