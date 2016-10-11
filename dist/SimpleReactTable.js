(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("material-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "material-ui"], factory);
	else if(typeof exports === 'object')
		exports["SimpleReactTable"] = factory(require("react"), require("material-ui"));
	else
		root["SimpleReactTable"] = factory(root["React"], root["material-ui"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Table = __webpack_require__(1);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  Table: _Table2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _materialUi = __webpack_require__(3);
	
	var _Cell = __webpack_require__(4);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	var _util = __webpack_require__(5);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TableComponent = function (_Component) {
	  _inherits(TableComponent, _Component);
	
	  function TableComponent(props, context) {
	    _classCallCheck(this, TableComponent);
	
	    return _possibleConstructorReturn(this, (TableComponent.__proto__ || Object.getPrototypeOf(TableComponent)).call(this, props, context));
	    //console.log("%c Table Component -> Init ", "background: red; color: white");
	  }
	
	  _createClass(TableComponent, [{
	    key: "getData",
	    value: function getData(obj) {
	      if (typeof obj.headerCellFormater === "function") {
	        return _react2.default.createElement(
	          "span",
	          null,
	          obj.headerCellFormater()
	        );
	      } else {
	        return _react2.default.createElement(
	          "span",
	          null,
	          obj.label
	        );
	      }
	    }
	  }, {
	    key: "getHeader",
	    value: function getHeader() {
	      var _this2 = this;
	
	      var defaultStyles = {
	        wordWrap: "break-word",
	        whiteSpace: "normal",
	        textAlign: "center"
	      };
	      return _react2.default.createElement(
	        _materialUi.TableHeader,
	        { adjustForCheckbox: false, displaySelectAll: false },
	        _react2.default.createElement(
	          _materialUi.TableRow,
	          null,
	          this.props.extraHeaders.map(function (obj, index) {
	            if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
	              return _react2.default.createElement(
	                _materialUi.TableHeaderColumn,
	                { key: index,
	                  adjustForCheckbox: false,
	                  colSpan: obj.colSpan,
	                  rowSpan: obj.rowSpan,
	                  style: Object.assign({}, obj.headerStyles, defaultStyles),
	                  className: obj.headerCellClass
	                },
	                obj.label
	              );
	            } else {
	              return _react2.default.createElement(
	                _materialUi.TableHeaderColumn,
	                { key: index,
	                  adjustForCheckbox: false,
	                  style: defaultStyles
	                },
	                obj
	              );
	            }
	          })
	        ),
	        _react2.default.createElement(
	          _materialUi.TableRow,
	          null,
	          this.props.columns.map(function (obj, index) {
	            if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
	              return _react2.default.createElement(
	                _materialUi.TableHeaderColumn,
	                { key: index,
	                  adjustForCheckbox: false,
	                  colSpan: obj.colSpan,
	                  rowSpan: obj.rowSpan,
	                  style: Object.assign({}, obj.headerStyles, defaultStyles),
	                  className: obj.headerCellClass
	                },
	                _this2.getData(obj)
	              );
	            } else {
	              return _react2.default.createElement(
	                _materialUi.TableHeaderColumn,
	                { key: index,
	                  adjustForCheckbox: false,
	                  style: defaultStyles
	                },
	                obj
	              );
	            }
	          })
	        )
	      );
	    }
	  }, {
	    key: "organiseData",
	    value: function organiseData(data, columns) {
	      var organisedData = _util2.default.clone(data);
	      columns.forEach(function (col) {
	        var runningRowSpanDetails = null;
	        if (col.autoRowSpan === true) {
	          organisedData.forEach(function (row, rowIndex) {
	            row.rowSpanDetails = row.rowSpanDetails || {}; //if not, create
	            row.rowSpanDetails[col.id] = row.rowSpanDetails[col.id] || { rowSpan: 1 }; //if not, create
	
	            if (row[col.id] === (organisedData[rowIndex - 1] && organisedData[rowIndex - 1][col.id])) {
	              runningRowSpanDetails.rowSpan++;
	              row.rowSpanDetails[col.id].rowSpan = 0;
	            } else {
	              runningRowSpanDetails = row.rowSpanDetails[col.id];
	            }
	          });
	        }
	      });
	      return organisedData;
	    }
	  }, {
	    key: "getRowSpan",
	    value: function getRowSpan(rowData, headerKey) {
	      var rowSpan = 1;
	      if (rowData && rowData.rowSpanDetails && rowData.rowSpanDetails[headerKey] && typeof rowData.rowSpanDetails[headerKey].rowSpan === "number") {
	        rowSpan = rowData.rowSpanDetails[headerKey].rowSpan;
	      }
	      return rowSpan;
	    }
	  }, {
	    key: "getBody",
	    value: function getBody() {
	      var _this3 = this;
	
	      var totalColumns = this.props.columnsWithData || this.props.columns;
	      var organisedData = this.organiseData(this.props.data, totalColumns);
	      return _react2.default.createElement(
	        _materialUi.TableBody,
	        { displayRowCheckbox: false },
	        organisedData.map(function (d, i) {
	          return _react2.default.createElement(
	            _materialUi.TableRow,
	            { key: i, striped: _this3.props.striped },
	            totalColumns.map(function (h, j) {
	              if (_this3.getRowSpan(d, h.id) === 0) {
	                return undefined;
	              }
	              return _react2.default.createElement(_Cell2.default, { key: j, data: d[h.id], rowSpan: _this3.getRowSpan(d, h.id), cellClass: h.cellClass,
	                tooltip: h.tooltip, popover: h.popover, cellFormater: h.cellFormater, styler: h.styles, dataRow: d,
	                allData: _this3.props.data, columns: _this3.props.columns, rowIndex: i });
	            })
	          );
	        })
	      );
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      //console.log("%c Table Component -> Render ", "background: black; color: pink");
	      return _react2.default.createElement(
	        "div",
	        { styleName: "container" },
	        _react2.default.createElement(
	          _materialUi.Table,
	          { style: this.props.style, bodyStyle: { overflow: "visible" }, striped: this.props.striped, bordered: this.props.bordered, condensed: this.props.condensed,
	            hover: this.props.hover, responsive: this.props.responsive, styleName: "table-component" },
	          this.getHeader(),
	          this.getBody()
	        )
	      );
	    }
	  }]);
	
	  return TableComponent;
	}(_react.Component);
	
	TableComponent.defaultProps = {
	  extraHeaders: [],
	  data: [],
	  striped: true,
	  bordered: true,
	  condensed: true,
	  hover: true,
	  responsive: true,
	  columns: []
	};
	TableComponent.propTypes = {
	  striped: _react2.default.PropTypes.bool,
	  bordered: _react2.default.PropTypes.bool,
	  condensed: _react2.default.PropTypes.bool,
	  hover: _react2.default.PropTypes.bool,
	  responsive: _react2.default.PropTypes.bool,
	  showHeader: _react2.default.PropTypes.bool,
	  rowNumber: _react2.default.PropTypes.bool,
	  extraHeaders: _react2.default.PropTypes.array,
	  data: _react2.default.PropTypes.array,
	  columns: _react2.default.PropTypes.array,
	  style: _react2.default.PropTypes.object,
	  columnsWithData: _react2.default.PropTypes.array
	};
	exports.default = TableComponent;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _util = __webpack_require__(5);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _materialUi = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellComponent = function (_Component) {
	  _inherits(CellComponent, _Component);
	
	  function CellComponent(props, context) {
	    _classCallCheck(this, CellComponent);
	
	    return _possibleConstructorReturn(this, (CellComponent.__proto__ || Object.getPrototypeOf(CellComponent)).call(this, props, context));
	  }
	
	  _createClass(CellComponent, [{
	    key: "getData",
	    value: function getData() {
	      if (typeof this.props.cellFormater === "function") {
	        return _react2.default.createElement(
	          "span",
	          null,
	          this.props.cellFormater(this.props.data, this.props.dataRow, this.props.allData, this.props.columns, this.props.rowIndex)
	        );
	      } else {
	        return _react2.default.createElement(
	          "span",
	          null,
	          this.props.data
	        );
	      }
	    }
	  }, {
	    key: "getThirdPartyClass",
	    value: function getThirdPartyClass() {
	      if (typeof this.props.cellClass === "string") {
	        return this.props.cellClass;
	      } else {
	        if (typeof this.props.cellClass === "function") {
	          return this.props.cellClass(this.props.data, this.props.dataRow, this.props.allData, this.props.columns, this.props.rowIndex);
	        }
	        return "";
	      }
	    }
	  }, {
	    key: "getStyles",
	    value: function getStyles() {
	      if (this.props.styler !== undefined) {
	        if (typeof this.props.styler === "function") {
	          return this.props.styler(this.props.data, this.props.dataRow, this.props.allData, this.props.columns, this.props.rowIndex);
	        } else {
	          return this.props.styler;
	        }
	      } else {
	        return {};
	      }
	    }
	  }, {
	    key: "getRowSpan",
	    value: function getRowSpan() {
	      if (typeof this.props.rowSpan === "function") {
	        return this.props.rowSpan(this.props.data, this.props.dataRow, this.props.allData, this.props.columns, this.props.rowIndex);
	      } else {
	        return this.props.rowSpan;
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      //console.log(Object.assign({}, this.getStyles(), {textAlign: "center", wordWrap: "break-word"}));
	      return _react2.default.createElement(
	        _materialUi.TableRowColumn,
	        { styleName: "container",
	          className: this.getThirdPartyClass(),
	          style: Object.assign({}, this.getStyles(), { textAlign: "center", wordWrap: "break-word", whiteSpace: "normal" }),
	          rowSpan: this.getRowSpan()
	        },
	        function () {
	          if (_this2.props.tooltip !== null) {
	            return _react2.default.createElement(
	              "div",
	              null,
	              _this2.getData(),
	              _react2.default.createElement(
	                "span",
	                null,
	                _util2.default.iff(typeof _this2.props.tooltip.value === "function", function () {
	                  return _this2.props.tooltip.value(_this2.props.data, _this2.props.dataRow, _this2.props.allData, _this2.props.columns, _this2.props.rowIndex);
	                }, function () {
	                  return _this2.props.tooltip.value;
	                })
	              )
	            );
	          } else if (_this2.props.popover !== null) {
	            return _react2.default.createElement(
	              "div",
	              null,
	              _this2.getData(),
	              _react2.default.createElement(
	                "span",
	                null,
	                _util2.default.iff(typeof _this2.props.popover.value === "function", function () {
	                  return _this2.props.popover.value(_this2.props.data, _this2.props.dataRow, _this2.props.allData, _this2.props.columns, _this2.props.rowIndex);
	                }, function () {
	                  return _this2.props.popover.value;
	                })
	              )
	            );
	          } else {
	            return _this2.getData();
	          }
	        }()
	      );
	    }
	  }]);
	
	  return CellComponent;
	}(_react.Component);
	
	CellComponent.defaultProps = {
	  data: "",
	  dataRow: {},
	  allData: [],
	  columns: [],
	  tooltip: null,
	  popover: null,
	  rowSpan: 1
	};
	CellComponent.propTypes = {
	  data: _react2.default.PropTypes.any,
	  cellClass: _react2.default.PropTypes.any,
	  cellFormater: _react2.default.PropTypes.func,
	  dataRow: _react2.default.PropTypes.object,
	  allData: _react2.default.PropTypes.array,
	  columns: _react2.default.PropTypes.array,
	  tooltip: _react2.default.PropTypes.any,
	  popover: _react2.default.PropTypes.any,
	  styler: _react2.default.PropTypes.any,
	  rowSpan: _react2.default.PropTypes.any,
	  rowIndex: _react2.default.PropTypes.any
	};
	exports.default = CellComponent;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  clone: function clone(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  },
	  iff: function iff(condition, trueRet, falseRet) {
	    if (condition === true) {
	      if (typeof trueRet === "function") {
	        return trueRet();
	      }
	      return trueRet;
	    } else {
	      if (typeof falseRet === "function") {
	        return falseRet();
	      }
	      return falseRet;
	    }
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=SimpleReactTable.js.map