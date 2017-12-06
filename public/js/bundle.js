(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DevicesListActions = function () {
    function DevicesListActions() {
        _classCallCheck(this, DevicesListActions);

        this.generateActions('getDevicesListFail', 'getDevicesListSucess');
    }

    _createClass(DevicesListActions, [{
        key: 'getDefaultMessage',
        value: function getDefaultMessage() {}
    }]);

    return DevicesListActions;
}();

exports.default = _alt2.default.createActions(DevicesListActions);

},{"../alt":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = function () {
  function FooterActions() {
    _classCallCheck(this, FooterActions);

    this.generateActions('getTopCharactersSuccess', 'getTopCharactersFail');
  }

  _createClass(FooterActions, [{
    key: 'getTopCharacters',
    value: function getTopCharacters() {
      var _this = this;

      $.ajax({ url: '/api/characters/top' }).done(function (data) {
        _this.actions.getTopCharactersSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getTopCharactersFail(jqXhr);
      });
    }
  }]);

  return FooterActions;
}();

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":9}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePageActions = function HomePageActions() {
    _classCallCheck(this, HomePageActions);

    this.generateActions('getDefaultMessage');
};

exports.default = _alt2.default.createActions(HomePageActions);

},{"../alt":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function () {
  function NavbarActions() {
    _classCallCheck(this, NavbarActions);

    this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getCharacterCountSuccess', 'getCharacterCountFail', 'findCharacterSuccess', 'findCharacterFail');
  }

  _createClass(NavbarActions, [{
    key: 'findCharacter',
    value: function findCharacter(payload) {
      var _this = this;

      $.ajax({
        url: '/api/characters/search',
        data: {
          name: payload.searchQuery
        }
      }).done(function (data) {
        (0, _underscore.assign)(payload, data);
        _this.actions.findCharacterSuccess(payload);
      }).fail(function () {
        _this.actions.findCharacterFail(payload);
      });
    }
  }, {
    key: 'getCharacterCount',
    value: function getCharacterCount() {
      var _this2 = this;

      $.ajax({
        url: '/api/characters/count'
      }).done(function (data) {
        _this2.actions.getCharacterCountSuccess(data);
      }).fail(function (jqXhr) {
        _this2.actions.getCharacterCountFail(jqXhr);
      });
    }
  }]);

  return NavbarActions;
}();

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":9,"underscore":"underscore"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProjectActions = function ProjectActions() {
    _classCallCheck(this, ProjectActions);

    this.generateActions('getDefaultMessgae');
};

exports.default = _alt2.default.createActions(ProjectActions);

},{"../alt":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceActions = function ResourceActions() {
    _classCallCheck(this, ResourceActions);

    this.generateActions(['getResourcesSuccess', 'getResourcesFail', 'getResource']);
};

exports.default = _alt2.default.createActions(ResourceActions);

},{"../alt":9}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceActions = function () {
	function ServiceActions() {
		_classCallCheck(this, ServiceActions);

		this.generateActions('setMessageSuccess', 'setMessageFail', 'getMessageSuccess', 'getMessageFail');
	}

	_createClass(ServiceActions, [{
		key: 'getDefaultMessage',
		value: function getDefaultMessage() {
			var _this = this;

			$.ajax({
				url: 'api/services',
				data: {}
			}).done(function (data) {
				_this.actions.getMessageSuccess(data);
			}).fail(function () {
				_this.actions.getMessageFail(data);
			});
		}
	}, {
		key: 'setMessage',
		value: function setMessage() {
			var _this2 = this;

			console.log('setMessage');
			$.ajax({
				url: 'api/setService',
				data: {}
			}).done(function (data) {
				console.log('setMessage', data);
				_this2.actions.setMessageSuccess(data);
			}).fail(function (err) {
				console.log('setMessageFail', err);
				_this2.actions.setMessageFail(err);
			});
		}
	}]);

	return ServiceActions;
}();

exports.default = _alt2.default.createActions(ServiceActions);

},{"../alt":9,"underscore":"underscore"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TeamActions = function TeamActions() {
    _classCallCheck(this, TeamActions);

    this.generateActions('getDefaultMessage');
};

exports.default = _alt2.default.createActions(TeamActions);

},{"../alt":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
                this.props.children,
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":14,"./Navbar":18,"react":"react"}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));
    }

    _createClass(Carousel, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "myCarousel", className: "carousel slide" },
                _react2.default.createElement(
                    "ol",
                    { className: "carousel-indicators" },
                    _react2.default.createElement("li", { "data-target": "#myCarousel", "data-slide-to": "0", className: "active" }),
                    _react2.default.createElement("li", { "data-target": "#myCarousel", "data-slide-to": "1" }),
                    _react2.default.createElement("li", { "data-target": "#myCarousel", "data-slide-to": "2" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "carousel-inner" },
                    _react2.default.createElement(
                        "div",
                        { className: "item active" },
                        _react2.default.createElement("img", { src: "/img/1.jpg", alt: "First slide" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "item" },
                        _react2.default.createElement("img", { src: "/img/2.jpg", alt: "Second slide" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "item" },
                        _react2.default.createElement("img", { src: "/img/3.jpg", alt: "Third slide" })
                    )
                ),
                _react2.default.createElement("a", { className: "carousel-control right", href: "#myCarousel",
                    "data-slide": "prev" }),
                _react2.default.createElement("a", { className: "carousel-control left", href: "#myCarousel",
                    "data-slide": "next" })
            );
        }
    }]);

    return Carousel;
}(_react2.default.Component);

exports.default = Carousel;

},{"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HomeModuleTitle = require('./HomeModuleTitle');

var _HomeModuleTitle2 = _interopRequireDefault(_HomeModuleTitle);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Device = function (_React$Component) {
    _inherits(Device, _React$Component);

    function Device(props) {
        _classCallCheck(this, Device);

        return _possibleConstructorReturn(this, (Device.__proto__ || Object.getPrototypeOf(Device)).call(this, props));
    }

    _createClass(Device, [{
        key: 'render',
        value: function render() {
            var contents = [{
                img: '/img/ruijie_sw.jpg',
                subTitle: '锐捷交换机',
                content: '划分vlan，接入局域网主机'

            }, {
                img: '/img/cisco.jpeg',
                subTitle: '思科交换机',
                content: '接入DMZ，提供web等对外服务'

            }, {
                img: '/img/tianrongxin.png',
                subTitle: '天融信防火墙',
                content: '网络入口设备，隔离网络攻击'

            }, {
                img: '/img/tianrongxin_ids.jpg',
                subTitle: '天融信入侵检测系统',
                content: '检测网络攻击，及时预警，做出安全响应'

            }];

            var contentList = contents.map(function (item, index) {
                var device = '/devicesList';
                return _react2.default.createElement(
                    'div',
                    { className: 'col-xs-3', style: { textAlign: 'center' }, key: index },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/devicesList' },
                        _react2.default.createElement('img', { className: 'img-responsive', style: { width: '262px', height: '104px' }, src: item.img, alt: '' }),
                        _react2.default.createElement(
                            'p',
                            { style: { marginTop: '10px' } },
                            item.subTitle
                        )
                    ),
                    _react2.default.createElement('hr', null),
                    _react2.default.createElement(
                        'p',
                        { style: { textAlign: 'center' } },
                        item.content
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'device' },
                _react2.default.createElement(_HomeModuleTitle2.default, { title: { cn: '设备', en: '——  DEVICE  ——' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'device-content container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row clearfix' },
                        contentList
                    )
                )
            );
        }
    }]);

    return Device;
}(_react2.default.Component);

exports.default = Device;

},{"./HomeModuleTitle":15,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DevicesListActions = require('../actions/DevicesListActions');

var _DevicesListActions2 = _interopRequireDefault(_DevicesListActions);

var _DevicesListStores = require('../stores/DevicesListStores');

var _DevicesListStores2 = _interopRequireDefault(_DevicesListStores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DevicesList = function (_React$Component) {
    _inherits(DevicesList, _React$Component);

    function DevicesList(props) {
        _classCallCheck(this, DevicesList);

        var _this = _possibleConstructorReturn(this, (DevicesList.__proto__ || Object.getPrototypeOf(DevicesList)).call(this, props));

        _this.onChange = _this.onChange.bind(_this);
        _this.state = _DevicesListActions2.default.getDefaultMessage();
        return _this;
    }

    _createClass(DevicesList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _DevicesListStores2.default.listen(this.onChange);
            var _top = $('.dev-list').offset().top;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _DevicesListStores2.default.unlisten(this.Onchange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var deviceNames = ['锐捷交换机', '锐捷防火墙', '思科交换机', '天镜漏洞扫描系统', '天融信防火墙', '天融信入侵检测系统', '天融信入侵防御系统', '网闸'].map(function (item, index) {
                var anchor = '#' + index;
                return _react2.default.createElement(
                    'li',
                    { className: 'devices', key: index },
                    _react2.default.createElement(
                        'a',
                        { style: { display: 'block' }, href: anchor },
                        item
                    )
                );
            });

            var devicesList = [{
                name: '锐捷交换机',
                pic: '/img/ruijie_sw_1.png',
                outline: {
                    name: '锐捷交换机',
                    version: 'RG-1600i',
                    date: '2017-3-3',
                    corporation: '锐捷'
                },
                detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
            }, {
                name: '锐捷防火墙',
                pic: '/img/ruijie_sw_1.png',
                outline: {
                    name: '锐捷防火墙',
                    version: 'RG-1600i',
                    date: '2017-3-3',
                    corporation: '锐捷'
                },
                detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
            }, {
                name: '思科交换机',
                pic: '/img/ruijie_sw_1.png',
                outline: {
                    name: '思科交换机',
                    version: 'RG-1600i',
                    date: '2017-3-3',
                    corp: '锐捷'
                },
                detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
            }, {
                name: '天镜漏洞扫描系统',
                pic: '/img/ruijie_sw_1.png',
                outline: {
                    name: '天镜漏洞扫描系统',
                    version: 'RG-1600i',
                    date: '2017-3-3',
                    corporation: '锐捷'
                },
                detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
            }, {
                name: '天融信防火墙',
                pic: '/img/ruijie_sw_1.png',
                outline: {
                    name: '天融信防火墙',
                    version: 'RG-1600i',
                    date: '2017-3-3',
                    corporation: '锐捷'
                },
                detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
            }, {
                name: '天融信入侵检测系统',
                pic: '/img/ruijie_sw_1.png',
                outline: {
                    name: '天融信入侵检测系统',
                    version: 'RG-1600i',
                    date: '2017-3-3',
                    corp: '锐捷'
                },
                detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
            }, {
                name: '天融信入侵防御系统',
                pic: '/img/ruijie_sw_1.png',
                outline: {
                    name: '天融信入侵防御系统',
                    version: 'RG-1600i',
                    date: '2017-3-3',
                    corp: '锐捷'
                },
                detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
            }, {
                name: '网闸',
                pic: '/img/ruijie_sw_1.png',
                outline: {
                    name: '网闸',
                    version: 'RG-1600i',
                    date: '2017-3-3',
                    corp: '锐捷'
                },
                detail: 'asdfasdfasdfasdasdfasdfasdfhasdfasdfasdf'
            }].map(function (item, index) {
                return _react2.default.createElement(
                    'li',
                    { key: index, id: index, className: 'devices clearfix' },
                    _react2.default.createElement(
                        'div',
                        { className: 'title' },
                        _react2.default.createElement(
                            'div',
                            { className: 'dev-name' },
                            '\u8BBE\u5907\u540D\u79F0\uFF1A',
                            item.name
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'detail' },
                            '\u8BBE\u5907\u56FE\u7247\uFF1A'
                        ),
                        _react2.default.createElement('img', { className: 'img-responsive', src: item.pic, alt: '' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'dev-content' },
                        _react2.default.createElement(
                            'div',
                            { className: 'detail' },
                            '\u8BBE\u5907\u603B\u7EB2\uFF1A'
                        ),
                        _react2.default.createElement(
                            'table',
                            { className: 'table table-bordered' },
                            _react2.default.createElement(
                                'tbody',
                                null,
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        '\u8BBE\u5907\u540D\u79F0'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        item.outline.name
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        '\u8BBE\u5907\u578B\u53F7'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        item.outline.version
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        '\u751F\u4EA7\u65E5\u671F'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        item.outline.date
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        '\u751F\u4EA7\u516C\u53F8'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        item.outline.corp
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'detail' },
                            '\u8BE6\u7EC6\u7B80\u4ECB\uFF1A'
                        ),
                        _react2.default.createElement(
                            'p',
                            { style: { padding: '10px' } },
                            item.detail
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'devices-list container', style: { borderTop: '1px solid #eee' } },
                _react2.default.createElement(
                    'div',
                    { style: { textAlign: 'center', fontSize: '32px', color: '#4ab344', fontWeight: 'bold' } },
                    '\u8BBE\u5907\u6E05\u5355'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'main', style: { marginTop: '50px', backgroundColor: '#fff' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'row clearfix' },
                        _react2.default.createElement(
                            'div',
                            { className: 'left col-xs-3' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'dev-list' },
                                deviceNames
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'right col-xs-9', style: { marginLeft: '-15px' } },
                            _react2.default.createElement(
                                'ul',
                                null,
                                devicesList
                            )
                        )
                    )
                )
            );
        }
    }]);

    return DevicesList;
}(_react2.default.Component);

exports.default = DevicesList;

},{"../actions/DevicesListActions":1,"../stores/DevicesListStores":34,"react":"react"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FooterStore = require('../stores/FooterStore');

var _FooterStore2 = _interopRequireDefault(_FooterStore);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.state = _FooterStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _FooterStore2.default.listen(this.onChange);

      //回到顶点功能
      $(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 100) {
            $(".top").fadeIn(800);
          } else {
            $(".top").fadeOut(800);
          }
        });

        $(".top").click(function () {
          $('body,html').animate({
            scrollTop: 0
          }, 400);
          return false;
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _FooterStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row clearfix' },
            _react2.default.createElement(
              'div',
              { className: 'row clearfix' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6', style: { lineHeight: '110px', paddingLeft: '50px' } },
                _react2.default.createElement('img', { src: '/img/footer_logo.png', alt: '' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6' },
                _react2.default.createElement(
                  'h2',
                  { className: 'lead' },
                  _react2.default.createElement(
                    'strong',
                    null,
                    '\u667A\u80FD\u5316\u7F51\u7EDC\u4FE1\u606F\u5B89\u5168\u5B9E\u9A8C\u5E73\u53F0'
                  )
                )
              )
            ),
            _react2.default.createElement('div', { className: 'divider' }),
            _react2.default.createElement(
              'div',
              { className: 'row clearfix' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6', style: { paddingTop: '30px' } },
                _react2.default.createElement(
                  'p',
                  null,
                  '\u8054\u7CFB\u5730\u5740:\xA0\xA0\xA0\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u4E0A\u56ED\u67513\u53F7\u9662\u5317\u4EAC\u4EA4\u901A\u5927\u5B66\xA0\xA0\xA0\u4E5D\u6559\u5317304'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  '\u8054\u7CFB\u7535\u8BDD:\xA0\xA0\xA051684609'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6', style: { paddingTop: '30px', paddingBottom: '30px', textAlign: 'center' } },
                _react2.default.createElement(
                  'p',
                  null,
                  '\xA92017\xA0\xA0\xA0\u5317\u4EAC\u4EA4\u901A\u5927\u5B66\u8F68\u9053\u4EA4\u901A\u9690\u79C1\u4FDD\u62A4\u5317\u4EAC\u5E02\u91CD\u70B9\u5B9E\u9A8C\u5BA4\u7248\u6743\u6240\u6709'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  '\u4EAC\u516C\u7F51\u5B89\u5907\uFF1A\xA0\xA0110402430059 \u4EACICP\u590712010520\u53F7-2'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'top' },
          '\u56DE\u5230\u9876\u90E8'
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"../actions/FooterActions":2,"../stores/FooterStore":35,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeModuleTitle = function (_React$Component) {
    _inherits(HomeModuleTitle, _React$Component);

    function HomeModuleTitle(props) {
        _classCallCheck(this, HomeModuleTitle);

        return _possibleConstructorReturn(this, (HomeModuleTitle.__proto__ || Object.getPrototypeOf(HomeModuleTitle)).call(this, props));
    }

    _createClass(HomeModuleTitle, [{
        key: 'render',
        value: function render() {

            var title = this.props.title;

            return _react2.default.createElement(
                'div',
                { className: 'clearfix', style: { marginBottom: '50px' } },
                _react2.default.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    _react2.default.createElement(
                        'span',
                        { style: { backgroundColor: 'transparent' } },
                        _react2.default.createElement(
                            'span',
                            { style: { fontSize: '24px' } },
                            _react2.default.createElement(
                                'font',
                                { style: { color: 'rgb(76, 76, 76)' }, color: '#4c4c4c' },
                                title.cn
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    _react2.default.createElement(
                        'span',
                        { style: { fontSize: '14px' } },
                        _react2.default.createElement(
                            'font',
                            { style: { color: 'rgb(166, 166, 166)' }, color: '#a6a6a6' },
                            '\u2014\u2014  ',
                            title.en,
                            '  \u2014\u2014'
                        )
                    )
                )
            );
        }
    }]);

    return HomeModuleTitle;
}(_react2.default.Component);

exports.default = HomeModuleTitle;

},{"react":"react"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HomePageStore = require('../stores/HomePageStore');

var _HomePageStore2 = _interopRequireDefault(_HomePageStore);

var _HomePageActions = require('../actions/HomePageActions');

var _HomePageActions2 = _interopRequireDefault(_HomePageActions);

var _Carousel = require('./Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Intention = require('./Intention');

var _Intention2 = _interopRequireDefault(_Intention);

var _Device = require('./Device');

var _Device2 = _interopRequireDefault(_Device);

var _Topology = require('./Topology');

var _Topology2 = _interopRequireDefault(_Topology);

var _News = require('./News');

var _News2 = _interopRequireDefault(_News);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
    _inherits(HomePage, _React$Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

        _this.onChange = _this.onChange.bind(_this);
        _this.state = _HomePageStore2.default.getState();
        return _this;
    }

    _createClass(HomePage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _HomePageStore2.default.listen(this.onChange);
            _HomePageActions2.default.getDefaultMessage();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _HomePageStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'home-page' },
                _react2.default.createElement(
                    'div',
                    { className: 'home-carousel' },
                    _react2.default.createElement(_Carousel2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container before-intention' },
                    _react2.default.createElement(
                        'div',
                        { className: 'be-title' },
                        this.state.title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'be-content' },
                        this.state.content
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'home-intention', style: { padding: '50px 0', backgroundColor: '#e0e0e0' } },
                    _react2.default.createElement(_Intention2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'home-topology', style: { backgroundColor: '#fff', padding: '50px 0' } },
                    _react2.default.createElement(_Topology2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'home-device', style: { backgroundColor: '#f0f3f4', padding: '50px 0' } },
                    _react2.default.createElement(_Device2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'home-news', style: { backgroundColor: '#fff', padding: '50px 0' } },
                    _react2.default.createElement(_News2.default, null)
                )
            );
        }
    }]);

    return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

},{"../actions/HomePageActions":3,"../stores/HomePageStore":36,"./Carousel":11,"./Device":12,"./Intention":17,"./News":20,"./Topology":31,"react":"react"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HomeModuleTitle = require('./HomeModuleTitle');

var _HomeModuleTitle2 = _interopRequireDefault(_HomeModuleTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Intention = function (_React$Component) {
    _inherits(Intention, _React$Component);

    function Intention(props) {
        _classCallCheck(this, Intention);

        return _possibleConstructorReturn(this, (Intention.__proto__ || Object.getPrototypeOf(Intention)).call(this, props));
    }

    _createClass(Intention, [{
        key: 'render',
        value: function render() {
            var contents = [{
                img: '/img/os.png',
                subTitle: '攻防实验平台',
                content: '攻击防御实验，模拟真实网络运行状态，感知网络态势'

            }, {
                img: '/img/bigdata.png',
                subTitle: '大数据分析',
                content: 'hadoop分布式数据存储计算平台，海量数据融合分析处理'

            }, {
                img: '/img/cloud.png',
                subTitle: '数据开放服务',
                content: '论文算法，公开数据集，实验室内部数据集开放下载服务'

            }];

            var contentList = contents.map(function (item, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'col-xs-4', style: { textAlign: 'center' }, key: index },
                    _react2.default.createElement('img', { src: item.img, alt: '' }),
                    _react2.default.createElement(
                        'p',
                        null,
                        item.subTitle
                    ),
                    _react2.default.createElement('img', { src: '/img/line.png', alt: '' }),
                    _react2.default.createElement(
                        'p',
                        { style: { textAlign: 'left' } },
                        item.content
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'intent' },
                _react2.default.createElement(_HomeModuleTitle2.default, { title: { cn: '目标', en: '——  SERVICE  ——' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'intent-content container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row clearfix' },
                        contentList
                    )
                )
            );
        }
    }]);

    return Intention;
}(_react2.default.Component);

exports.default = Intention;

},{"./HomeModuleTitle":15,"react":"react"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);

      var socket = io.connect();

      socket.on('onlineUsers', function (data) {
        _NavbarActions2.default.updateOnlineUsers(data);
      });

      $(document).ajaxStart(function () {
        _NavbarActions2.default.updateAjaxAnimation('fadeIn');
      });

      $(document).ajaxComplete(function () {
        setTimeout(function () {
          _NavbarActions2.default.updateAjaxAnimation('fadeOut');
        }, 750);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var searchQuery = this.state.searchQuery.trim();

      if (searchQuery) {
        _NavbarActions2.default.findCharacter({
          searchQuery: searchQuery,
          searchForm: this.refs.searchForm,
          history: this.props.history
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var form = '\n      <form ref=\'searchForm\' className=\'navbar-form navbar-left animated\' onSubmit={this.handleSubmit.bind(this)}>\n            <div className=\'input-group\'>\n              <input type=\'text\' className=\'form-control\' placeholder={this.state.totalCharacters + \' characters\'} value={this.state.searchQuery} onChange={NavbarActions.updateSearchQuery} />\n              <span className=\'input-group-btn\'>\n                <button className=\'btn btn-default\' onClick={this.handleSubmit.bind(this)}><span className=\'glyphicon glyphicon-search\'></span></button>\n              </span>\n            </div>\n          </form>';

      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2.default.createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'div',
            { className: 'navbar-header' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' })
            ),
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/', className: 'navbar-brand' },
              _react2.default.createElement(
                'span',
                { className: 'triangles animated ' + this.state.ajaxAnimationClass },
                _react2.default.createElement('div', { className: 'tri invert' }),
                _react2.default.createElement('div', { className: 'tri invert' }),
                _react2.default.createElement('div', { className: 'tri' }),
                _react2.default.createElement('div', { className: 'tri invert' }),
                _react2.default.createElement('div', { className: 'tri invert' }),
                _react2.default.createElement('div', { className: 'tri' }),
                _react2.default.createElement('div', { className: 'tri invert' }),
                _react2.default.createElement('div', { className: 'tri' }),
                _react2.default.createElement('div', { className: 'tri invert' })
              ),
              _react2.default.createElement(
                'sapn',
                { className: 'cn-logo' },
                '\u667A\u80FD\u5316\u7F51\u7EDC\u4FE1\u606F\u5B89\u5168\u5B9E\u9A8C\u5E73\u53F0'
              ),
              _react2.default.createElement(
                'span',
                { style: { fontSize: '32px', marginLeft: '70px', marginRight: '5px' } },
                'Information\xA0\xA0',
                _react2.default.createElement(
                  'font',
                  { style: { color: '#788994' } },
                  'Security'
                )
              ),
              _react2.default.createElement(
                'span',
                { className: 'badge badge-up badge-danger' },
                this.state.onlineUsers
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav nav-right' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.IndexLink,
                { to: '/' },
                '\u9996\u9875'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/services' },
                '\u670D\u52A1'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/resources' },
                '\u8D44\u6E90'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/projects' },
                '\u9879\u76EE'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/team' },
                '\u56E2\u961F'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":4,"../stores/NavbarStore":37,"react":"react","react-router":"react-router"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewServiceBlock = function (_React$Component) {
    _inherits(NewServiceBlock, _React$Component);

    function NewServiceBlock(props) {
        _classCallCheck(this, NewServiceBlock);

        return _possibleConstructorReturn(this, (NewServiceBlock.__proto__ || Object.getPrototypeOf(NewServiceBlock)).call(this, props));
    }

    _createClass(NewServiceBlock, [{
        key: 'render',
        value: function render() {
            var service = this.props.service;
            var type = service.type;
            var content = service.content;
            var servicesList = content.map(function (item, index) {
                var blank = item.appendix ? true : false;
                if (!blank) {
                    return _react2.default.createElement(
                        'li',
                        { className: 'services-list', key: index },
                        _react2.default.createElement(
                            'a',
                            { href: item.url, target: '_blank' },
                            item.name
                        )
                    );
                } else {
                    var path = {
                        pathname: item.url,
                        state: item.appendix
                    };
                    return _react2.default.createElement(
                        'li',
                        { className: 'services-list', key: index },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: path },
                            item.name
                        )
                    );
                }
            });

            return _react2.default.createElement(
                'div',
                { className: 'ns-block clearfix' },
                _react2.default.createElement(
                    'div',
                    { className: 'img-wrap col-xs-2' },
                    _react2.default.createElement('img', { src: '', alt: '' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'service-info col-xs-10' },
                    _react2.default.createElement(
                        'div',
                        { className: 'clearfix' },
                        _react2.default.createElement(
                            'div',
                            { className: 'ns-title col-xs-10' },
                            type
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'more col-xs-2' },
                            '\u66F4\u591A'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'ns-content', style: { display: 'none' } },
                        'dsf'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'services' },
                        _react2.default.createElement(
                            'ul',
                            null,
                            servicesList
                        )
                    )
                )
            );
        }
    }]);

    return NewServiceBlock;
}(_react2.default.Component);

exports.default = NewServiceBlock;

},{"react":"react","react-router":"react-router"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HomeModuleTitle = require('./HomeModuleTitle');

var _HomeModuleTitle2 = _interopRequireDefault(_HomeModuleTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var News = function (_React$Component) {
    _inherits(News, _React$Component);

    function News(props) {
        _classCallCheck(this, News);

        return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));
    }

    _createClass(News, [{
        key: 'render',
        value: function render() {

            var dataList = [1, 2, 3, 4].map(function (item, index) {
                if (index % 2) {
                    var classname = 'col-xs-5  news clearfix col-xs-offset-2';
                } else {
                    var classname = 'col-xs-5  news clearfix';
                }
                return _react2.default.createElement(
                    'div',
                    { className: classname, key: index, style: { marginTop: '10px' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'title row clearfix' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-8' },
                            '\u5B9E\u9A8C\u5BA4\u5185\u90E8\u4E3E\u529E\u7B2C\u4E09\u6B21\u5185\u90E8\u8BA8\u8BBA\u4F1A\u8BAE'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-4', style: { textAlign: 'right' } },
                            '2017-11-19'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        '\u5173\u4E8E\u7F51\u7AD9\u5EFA\u8BBE\u65B9\u9762\u7684\u95EE\u9898\u4F5C\u51FA\u4E86\u8BA4\u771F\u800C\u8BE6\u7EC6\u7684\u5206\u6790\uFF0C\u5E76\u4E0E\u5458\u5B66\u751F\u505A\u6DF1\u5165\u7684\u63A2\u8BA8\uFF0C\u5F97\u51FA\u6EE1\u610F\u7684\u7ED3\u679C...'
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'device' },
                _react2.default.createElement(_HomeModuleTitle2.default, { title: { cn: '最新资讯', en: '——  NEWS  ——' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'device-content container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row clearfix' },
                        dataList
                    )
                )
            );
        }
    }]);

    return News;
}(_react2.default.Component);

exports.default = News;

},{"./HomeModuleTitle":15,"react":"react"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProjectActions = require('../actions/ProjectActions');

var _ProjectActions2 = _interopRequireDefault(_ProjectActions);

var _ProjectStore = require('../stores/ProjectStore');

var _ProjectStore2 = _interopRequireDefault(_ProjectStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
    _inherits(Project, _React$Component);

    function Project(props) {
        _classCallCheck(this, Project);

        var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

        _this.state = _ProjectStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Project, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            $(document).ready(function () {
                $("span.div1").hide();
                $(".sis-li li").hover(function () {
                    $("span.div1", this).stop().slideToggle(500);
                });
            });

            _ProjectStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ProjectStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {

            var projects = [{
                title: '完结项目',
                projects: [{
                    img: '/img/1.jpg',
                    info: '资源共享平台',
                    title: '资源共享平台',
                    url: 'http://192.168.10.200'
                }, {
                    img: '/img/2.jpg',
                    info: '众创云平台',
                    title: '众创云平台',
                    url: 'http://192.168.10.100:8080'
                }, {
                    img: '/img/3.jpg',
                    info: '智能化网络信息安全实验平台',
                    title: '智能化网络信息安全实验平台',
                    url: '/'
                }, {
                    img: '/img/3.jpg',
                    info: '移动网络应用审计平台',
                    title: '移动网络应用审计平台',
                    url: ''
                }, {
                    img: '/img/3.jpg',
                    info: '实验平台',
                    title: '实验平台',
                    url: ''
                }]
            }, {
                title: '在研项目',
                projects: [{
                    img: '/img/1.jpg',
                    info: '',
                    title: '轻量级秘钥管理关键技术研究'
                }, {
                    img: '/img/2.jpg',
                    info: '大连接安全方案研究（认证与数据加密）',
                    title: '面向多域互联网的态势感知关键技术研究',
                    url: ''
                }, {
                    img: '/img/2.jpg',
                    info: '\u6F0F\u6D1E\u6316\u6398\u4E0E\u9A8C\u8BC1\uFF1A\u5206\u522B\u5206\u6790\u4E91\u7AEF\u3001APP\u548C\u7269\u8054\u7F51\u8BBE\u5907\u4E09\u7AEF\u5404\u81EA\u5B58\u5728\u7684\u9759\u6001\u7F3A\u9677\uFF1B\n                \u901A\u8FC7\u6D41\u91CF\u6570\u636E\u548C\u4E09\u7AEF\u8054\u5408\u5206\u6790\u7684\u65B9\u5F0F,\u5206\u6790\u51FA\u4E09\u7AEF\u7ED3\u5408\u5B58\u5728\u7684\u4E0D\u8DB3\uFF1B\u53D1\u73B0\u4E91\u7AEF\u548C\u7269\u8054\u7F51\u8BBE\n                \u5907\u9762\u4E34\u7684\u6DF1\u5C42\u6B21\u5B89\u5168\u98CE\u9669\uFF0C\u5E76\u9A8C\u8BC1\u6F0F\u6D1E\u7684\u98CE\u9669\u548C\u53EF\u5229\u7528\u6027',
                    title: '5G移动大连接技术方案与实验系统研发',
                    url: ''

                }, {
                    img: '/img/2.jpg',
                    info: '',
                    title: '智能物联设备安全研究与验证实现',
                    url: ''
                }, {
                    img: '/img/2.jpg',
                    info: '',
                    title: '面向多域互联网的态势感知关键技术研究',
                    url: ''
                }]
            }];

            var projectList = projects.map(function (project, index) {
                var doing = project.title == '完结项目' ? false : true;

                var blockList = project.projects.map(function (pro, index) {
                    var imgstyle = {
                        height: '250px',
                        overflow: 'hidden',
                        background: 'url(' + pro.img + ')',
                        backgroundSize: 'cover'
                    };

                    if (pro.url) {
                        var link = '<a href="' + pro.url + '" target="_blank">' + pro.title + '</a>';
                    } else {
                        var link = pro.title;
                    }

                    if (!doing) {

                        return _react2.default.createElement(
                            'li',
                            { className: 'col-xs-4', key: index, style: { marginBottom: '40px' } },
                            _react2.default.createElement(
                                'div',
                                { className: 'v1' },
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    _react2.default.createElement('div', { style: imgstyle })
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'div1' },
                                    _react2.default.createElement(
                                        'h3',
                                        { style: { color: '#fff' } },
                                        ' \u4FE1\u606F\u7B80\u4ECB\uFF1A'
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'txt' },
                                        pro.info
                                    )
                                )
                            ),
                            _react2.default.createElement('div', { className: 'project-title', dangerouslySetInnerHTML: { __html: link } })
                        );
                    } else {
                        return _react2.default.createElement(
                            'div',
                            { className: 'col-xs-4' },
                            _react2.default.createElement(
                                'div',
                                { className: 'doing' },
                                pro.title
                            )
                        );
                    }
                });

                return _react2.default.createElement(
                    'div',
                    { className: 'outline clearfix', key: index },
                    _react2.default.createElement(
                        'h1',
                        { className: 'titon' },
                        project.title
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'sis-li' },
                        blockList
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'project' },
                _react2.default.createElement('div', { className: 'pic' }),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row clearfix' },
                        projectList
                    )
                )
            );
        }
    }]);

    return Project;
}(_react2.default.Component);

exports.default = Project;

},{"../actions/ProjectActions":5,"../stores/ProjectStore":38,"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResourceStore = require('../stores/ResourceStore');

var _ResourceStore2 = _interopRequireDefault(_ResourceStore);

var _ResourceActions = require('../actions/ResourceActions');

var _ResourceActions2 = _interopRequireDefault(_ResourceActions);

var _ResourceDes = require('./ResourceDes');

var _ResourceDes2 = _interopRequireDefault(_ResourceDes);

var _ResourceData = require('./ResourceData');

var _ResourceData2 = _interopRequireDefault(_ResourceData);

var _ResourceTools = require('./ResourceTools');

var _ResourceTools2 = _interopRequireDefault(_ResourceTools);

var _HomeModuleTitle = require('./HomeModuleTitle');

var _HomeModuleTitle2 = _interopRequireDefault(_HomeModuleTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resource = function (_React$Component) {
    _inherits(Resource, _React$Component);

    function Resource(props) {
        _classCallCheck(this, Resource);

        var _this = _possibleConstructorReturn(this, (Resource.__proto__ || Object.getPrototypeOf(Resource)).call(this, props));

        _this.onChange = _this.onChange.bind(_this);
        _this.state = _ResourceStore2.default.getState();
        return _this;
    }

    _createClass(Resource, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ResourceStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ResourceStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            _ResourceStore2.default.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {

            var Resources = [{
                title: '期刊',
                journal: [{
                    name: 'semantic method to just the page.',
                    url: 'http://baidu.com'
                }, {
                    name: 'semantic method to just the page.',
                    url: 'http://baidu.com'
                }, {
                    name: 'semantic method to just the page.',
                    url: '/'
                }]
            }, {
                title: '标准',
                journal: [{
                    name: 'semantic method to just the page.',
                    url: 'http://baidu.com'
                }, {
                    name: 'semantic method to just the page.',
                    url: 'http://baidu.com'
                }, {
                    name: 'semantic method to just the page.',
                    url: '/'
                }]
            }, {
                title: '专利',
                journal: [{
                    name: 'semantic method to just the page.',
                    url: 'http://baidu.com'
                }, {
                    name: 'semantic method to just the page.',
                    url: 'http://baidu.com'
                }, {
                    name: 'semantic method to just the page.',
                    url: '/'
                }]
            }];

            var resourceData = [{
                title: '公开的数据集',
                collections: [{
                    name: 'kdd cup99',
                    url: 'https://baidu.com'
                }, {
                    name: 'ADFA',
                    url: 'https://v.qq.com'
                }]
            }, {
                title: '实验室内部数据集',
                collections: [{
                    name: 'kdd cup99',
                    url: 'https://baidu.com'
                }, {
                    name: 'ADFA',
                    url: 'https://v.qq.com'
                }]
            }];

            var resourceTools = [{
                title: '公开的工具',
                collections: [{
                    name: 'svn',
                    url: 'https://baidu.com'
                }, {
                    name: 'snort',
                    url: 'https://v.qq.com'
                }]
            }, {
                title: '实验室内部工具',
                collections: [{
                    name: 'ftp',
                    url: 'https://baidu.com'
                }, {
                    name: 'git',
                    url: 'https://v.qq.com'
                }]
            }];

            return _react2.default.createElement(
                'div',
                { className: 'resource clearfix' },
                _react2.default.createElement('div', { className: 'pic' }),
                _react2.default.createElement(
                    'div',
                    { className: 'resource-des', style: { marginTop: '20px' } },
                    _react2.default.createElement(_HomeModuleTitle2.default, { title: { cn: '论文', en: 'PAPER' } }),
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(_ResourceDes2.default, { resourceDes: Resources })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'resource-data', style: { backgroundColor: '#fff', paddingBottom: '50px', marginTop: '50px' } },
                    _react2.default.createElement(_ResourceData2.default, { resourceData: resourceData })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'resource-tools' },
                    _react2.default.createElement(_ResourceTools2.default, { resourceTools: resourceTools })
                )
            );
        }
    }]);

    return Resource;
}(_react2.default.Component);

exports.default = Resource;

},{"../actions/ResourceActions":6,"../stores/ResourceStore":39,"./HomeModuleTitle":15,"./ResourceData":23,"./ResourceDes":25,"./ResourceTools":27,"react":"react"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResourceDataBlock = require('./ResourceDataBlock');

var _ResourceDataBlock2 = _interopRequireDefault(_ResourceDataBlock);

var _HomeModuleTitle = require('./HomeModuleTitle');

var _HomeModuleTitle2 = _interopRequireDefault(_HomeModuleTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceData = function (_React$Component) {
    _inherits(ResourceData, _React$Component);

    function ResourceData(props) {
        _classCallCheck(this, ResourceData);

        return _possibleConstructorReturn(this, (ResourceData.__proto__ || Object.getPrototypeOf(ResourceData)).call(this, props));
    }

    _createClass(ResourceData, [{
        key: 'render',
        value: function render() {
            var datas = this.props.resourceData;
            var dataList = datas.map(function (data, index) {
                var classstyle = index % 2 == 0 ? 'col-xs-5' : 'col-xs-5 col-xs-offset-2';
                return _react2.default.createElement(
                    'div',
                    { className: classstyle, key: index },
                    _react2.default.createElement(_ResourceDataBlock2.default, { resourceData: data, usefor: 'dataset' })
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { style: { marginTop: '20px' } },
                    _react2.default.createElement(_HomeModuleTitle2.default, { title: { cn: '数据集', en: 'DATASET' } })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row clearfix' },
                    dataList
                )
            );
        }
    }]);

    return ResourceData;
}(_react2.default.Component);

exports.default = ResourceData;

},{"./HomeModuleTitle":15,"./ResourceDataBlock":24,"react":"react"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceDataBlock = function (_React$Component) {
    _inherits(ResourceDataBlock, _React$Component);

    function ResourceDataBlock(props) {
        _classCallCheck(this, ResourceDataBlock);

        return _possibleConstructorReturn(this, (ResourceDataBlock.__proto__ || Object.getPrototypeOf(ResourceDataBlock)).call(this, props));
    }

    _createClass(ResourceDataBlock, [{
        key: 'render',
        value: function render() {
            var data = this.props.resourceData;
            var usefor = this.props.usefor;
            var title = usefor == 'dataset' ? '数据集' : '工具';
            var rows = data.collections.map(function (item, index) {
                return _react2.default.createElement(
                    'div',
                    { key: index },
                    _react2.default.createElement(
                        'span',
                        null,
                        item.name
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: item.url, target: '_blank' },
                        '\u4F7F\u7528\u65B9\u5F0F\u548C\u4E0B\u8F7D'
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'data-block' },
                _react2.default.createElement(
                    'div',
                    { className: 'data-title' },
                    _react2.default.createElement(
                        'div',
                        null,
                        data.title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'con' },
                        'INNER DATASET'
                    ),
                    _react2.default.createElement('div', { className: 'bor' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'data-info' },
                    '\u5B9E\u9A8C\u5BA4\u7684\u5185\u90E8\u6570\u636E\u96C6\u662F\u5728\u6211\u4EEC\u642D\u5EFA\u7684\u667A\u80FD\u5316\u4FE1\u606F\u5B89\u5168\u5B9E\u9A8C\u5E73\u53F0\u4E0A\u5B8C\u6210\u7684\u4E00\u4E2A\u5B9E\u9A8C\u8FC7\u7A0B\u4E2D\u91C7\u96C6\u7684\u5404\u79CD\u653B\u51FB\u6570\u636E\u3002'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'collections' },
                    rows
                )
            );
        }
    }]);

    return ResourceDataBlock;
}(_react2.default.Component);

exports.default = ResourceDataBlock;

},{"react":"react"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResourceDesBlock = require('./ResourceDesBlock');

var _ResourceDesBlock2 = _interopRequireDefault(_ResourceDesBlock);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceDes = function (_React$Component) {
    _inherits(ResourceDes, _React$Component);

    function ResourceDes(props) {
        _classCallCheck(this, ResourceDes);

        return _possibleConstructorReturn(this, (ResourceDes.__proto__ || Object.getPrototypeOf(ResourceDes)).call(this, props));
    }

    _createClass(ResourceDes, [{
        key: 'render',
        value: function render() {
            var resourceDes = this.props.resourceDes;
            var resourceList = resourceDes.map(function (resource, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'col-xs-12', style: { marginBottom: '100px' }, key: index },
                    _react2.default.createElement(_ResourceDesBlock2.default, { resource: resource }),
                    _react2.default.createElement(
                        'div',
                        { className: 'more col-xs-2 col-xs-offset-5' },
                        'more'
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'resource-des clearfix' },
                resourceList
            );
        }
    }]);

    return ResourceDes;
}(_react2.default.Component);

exports.default = ResourceDes;

},{"./ResourceDesBlock":26,"react":"react","react-router":"react-router"}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceDesBlock = function (_React$Component) {
    _inherits(ResourceDesBlock, _React$Component);

    function ResourceDesBlock(props) {
        _classCallCheck(this, ResourceDesBlock);

        return _possibleConstructorReturn(this, (ResourceDesBlock.__proto__ || Object.getPrototypeOf(ResourceDesBlock)).call(this, props));
    }

    _createClass(ResourceDesBlock, [{
        key: 'render',
        value: function render() {
            var des = this.props.resource;
            var journalList = des.journal.map(function (journal, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'paper-item clearfix', key: index },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-10' },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: journal.url },
                            journal.name
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-2 ' },
                        '\u8BE6\u7EC6'
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'des-block' },
                _react2.default.createElement(
                    'div',
                    { className: 'des-title' },
                    des.title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'des-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'papers' },
                        journalList
                    )
                )
            );
        }
    }]);

    return ResourceDesBlock;
}(_react2.default.Component);

exports.default = ResourceDesBlock;

},{"react":"react","react-router":"react-router"}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResourceDataBlock = require('./ResourceDataBlock');

var _ResourceDataBlock2 = _interopRequireDefault(_ResourceDataBlock);

var _HomeModuleTitle = require('./HomeModuleTitle');

var _HomeModuleTitle2 = _interopRequireDefault(_HomeModuleTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceTools = function (_React$Component) {
    _inherits(ResourceTools, _React$Component);

    function ResourceTools(props) {
        _classCallCheck(this, ResourceTools);

        return _possibleConstructorReturn(this, (ResourceTools.__proto__ || Object.getPrototypeOf(ResourceTools)).call(this, props));
    }

    _createClass(ResourceTools, [{
        key: 'render',
        value: function render() {
            var datas = this.props.resourceTools;
            var dataList = datas.map(function (data, index) {
                var classstyle = index % 2 == 0 ? 'col-xs-5' : 'col-xs-5 col-xs-offset-2';
                return _react2.default.createElement(
                    'div',
                    { className: classstyle, key: index },
                    _react2.default.createElement(_ResourceDataBlock2.default, { resourceData: data, usefor: 'tools' })
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'tools-title clearfix' },
                    _react2.default.createElement(
                        'div',
                        { style: { marginTop: '20px' } },
                        _react2.default.createElement(_HomeModuleTitle2.default, { title: { cn: '工具', en: 'TOOLS' } })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row clearfix' },
                    dataList
                )
            );
        }
    }]);

    return ResourceTools;
}(_react2.default.Component);

exports.default = ResourceTools;

},{"./HomeModuleTitle":15,"./ResourceDataBlock":24,"react":"react"}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ServiceActions = require('../actions/ServiceActions');

var _ServiceActions2 = _interopRequireDefault(_ServiceActions);

var _ServiceStore = require('../stores/ServiceStore');

var _ServiceStore2 = _interopRequireDefault(_ServiceStore);

var _NewServiceBlock = require('./NewServiceBlock');

var _NewServiceBlock2 = _interopRequireDefault(_NewServiceBlock);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _HomeModuleTitle = require('./HomeModuleTitle');

var _HomeModuleTitle2 = _interopRequireDefault(_HomeModuleTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Service = function (_React$Component) {
	_inherits(Service, _React$Component);

	function Service(props) {
		_classCallCheck(this, Service);

		var _this = _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).call(this, props));

		_this.state = _ServiceStore2.default.getState();
		_this.onChange = _this.onChange.bind(_this);
		return _this;
	}

	_createClass(Service, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_ServiceStore2.default.listen(this.onChange);
			// ServiceAction.getDefaultMessage();
			// ServiceAction.setMessage();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log('componentWillUnmount');
			_ServiceStore2.default.unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			console.log('state', state);
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var message = this.state.message;
			var services = this.state.services;
			var ServiceBlocks = services.map(function (obj, index) {
				return _react2.default.createElement(
					'div',
					{ key: index, className: 'col-xs-12', style: { marginBottom: '100px' } },
					_react2.default.createElement(_NewServiceBlock2.default, { service: obj })
				);
			});
			return _react2.default.createElement(
				'div',
				{ className: 'service' },
				_react2.default.createElement('div', { className: 'pic' }),
				_react2.default.createElement(_HomeModuleTitle2.default, { title: { cn: '服务', en: 'SERVICE' } }),
				_react2.default.createElement(
					'div',
					{ className: 'container', style: { marginTop: '20px' } },
					_react2.default.createElement(
						'div',
						{ className: 'row clearfix' },
						ServiceBlocks
					)
				)
			);
		}
	}]);

	return Service;
}(_react2.default.Component);

exports.default = Service;

},{"../actions/ServiceActions":7,"../stores/ServiceStore":40,"./HomeModuleTitle":15,"./NewServiceBlock":19,"react":"react","react-transition-group/TransitionGroup":70}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServicesList = function (_React$Component) {
    _inherits(ServicesList, _React$Component);

    function ServicesList(props) {
        _classCallCheck(this, ServicesList);

        return _possibleConstructorReturn(this, (ServicesList.__proto__ || Object.getPrototypeOf(ServicesList)).call(this, props));
    }

    _createClass(ServicesList, [{
        key: 'render',
        value: function render() {
            var props = this.props.location.state || '';
            var serviceName = this.props.params.name;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { style: { fontSize: '32px', textAlign: 'center', marginBottom: '15px' } },
                    '\u670D\u52A1\u5217\u8868\u9875\u9762'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'main', style: { minHeight: '500px' } },
                    _react2.default.createElement(
                        'table',
                        { className: 'table table-bordered' },
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    '\u670D\u52A1\u540D\u79F0\uFF1A'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    serviceName
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    '\u670D\u52A1\u5730\u5740\uFF1A'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    props.url
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    '\u670D\u52A1\u7AEF\u53E3\uFF1A'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    props.port
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    '\u767B\u5F55\u8D26\u6237\uFF1A'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    props.username
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    '\u767B\u5F55\u5BC6\u7801\uFF1A'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    props.password
                                )
                            ),
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    '\u767B\u5F55\u65B9\u5F0F\uFF1A'
                                ),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    props.des
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ServicesList;
}(_react2.default.Component);

exports.default = ServicesList;

},{"react":"react"}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TeamStore = require('../stores/TeamStore');

var _TeamStore2 = _interopRequireDefault(_TeamStore);

var _TeamActions = require('../actions/TeamActions');

var _TeamActions2 = _interopRequireDefault(_TeamActions);

var _HomeModuleTitle = require('./HomeModuleTitle');

var _HomeModuleTitle2 = _interopRequireDefault(_HomeModuleTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Team = function (_React$Component) {
    _inherits(Team, _React$Component);

    function Team(props) {
        _classCallCheck(this, Team);

        var _this = _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).call(this, props));

        _this.onChange = _this.onChange.bind(_this);
        _this.state = _TeamStore2.default.getState();
        return _this;
    }

    _createClass(Team, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _TeamStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _TeamStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {

            var teams = [{
                category: '老师',
                names: [{
                    name: '王健',
                    link: '',
                    detail: '讲师，研究方向量子密码'
                }]
            }, {
                category: '博士',
                names: [{
                    name: '韩磊',
                    link: '',
                    detail: '博士，研究方向，态势感知',
                    img: ''
                }]
            }, {
                category: '硕士',
                names: [{
                    name: '于洋',
                    link: '',
                    detail: '研二，研究方向：态势感知',
                    img: ''
                }, {
                    name: '吕少华',
                    link: '',
                    detail: '研二，研究方向，态势感知',
                    img: ''
                }, {
                    name: '',
                    link: '',
                    detail: '研二，研究方向，态势感知'

                }, {
                    name: '杨茵淇',
                    link: '',
                    detail: '研一，研究方向，态势感知',
                    img: ''
                }]
            }, {
                category: '本科生',
                names: []
            }, {
                category: '毕业生',
                names: []
            }];

            var teamList = teams.map(function (team, index) {
                var nameList = team.names.map(function (obj, index) {
                    return _react2.default.createElement(
                        'div',
                        { className: ' col-xs-offset-1 col-xs-1', key: index },
                        _react2.default.createElement(
                            'a',
                            { href: '#' },
                            _react2.default.createElement('img', { style: { width: '100px', height: '100px' }, src: 'img/u18.png' }),
                            _react2.default.createElement(
                                'div',
                                { className: 'name' },
                                obj.name
                            )
                        )
                    );
                });

                return _react2.default.createElement(
                    'div',
                    { className: 'onepeo_outline clearfix col-xs-12', key: index },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-1 oneclassName' },
                        team.category
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-xs-10' },
                        nameList
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'team' },
                _react2.default.createElement(
                    'div',
                    { className: 'outline row clearfix', style: { backgroundColor: '#f0f4f5' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { style: { marginTop: '50px' } },
                            _react2.default.createElement(_HomeModuleTitle2.default, { title: { cn: '我们的团队', en: 'OUR GROUP' } })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'row', style: { marginBottom: '50px' } },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-7' },
                                _react2.default.createElement('img', { className: 'img-responsive', src: 'img/1.jpg' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'col-xs-5' },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    '\u6574\u4F53\u4ECB\u7ECD\u56E2\u961F\u7279\u70B9\uFF0C\u5305\u62EC\u7814\u7A76\u65B9\u5411\uFF0C\u8001\u5E08\u5B66\u751F\u4EBA\u6570\u7B49'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'line' },
                        _react2.default.createElement(
                            'span',
                            { className: 'people_tit' },
                            'TEACHERS\xA0\xA0STUDENTS'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        teamList
                    )
                )
            );
        }
    }]);

    return Team;
}(_react2.default.Component);

exports.default = Team;

},{"../actions/TeamActions":8,"../stores/TeamStore":41,"./HomeModuleTitle":15,"react":"react"}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HomeModuleTitle = require('./HomeModuleTitle');

var _HomeModuleTitle2 = _interopRequireDefault(_HomeModuleTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topology = function (_React$Component) {
    _inherits(Topology, _React$Component);

    function Topology(props) {
        _classCallCheck(this, Topology);

        return _possibleConstructorReturn(this, (Topology.__proto__ || Object.getPrototypeOf(Topology)).call(this, props));
    }

    _createClass(Topology, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'device' },
                _react2.default.createElement(_HomeModuleTitle2.default, { title: { cn: '拓扑', en: '——  TOPOLOGY  ——' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'device-content container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row clearfix' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-4', style: { marginTop: '-30px' } },
                            _react2.default.createElement(
                                'h4',
                                { style: { textAlign: 'center' } },
                                '\u7ECF\u5178\u7F51\u7EDC\u62D3\u6251\u56FE'
                            ),
                            _react2.default.createElement(
                                'p',
                                { style: { marginTop: '30px', lineHeight: '40px' } },
                                '\u5E73\u53F0\u5728\u5165\u53E3\u9632\u706B\u5899\u548C\u6838\u5FC3\u4EA4\u6362\u673A\u4E0B\u5171\u5206\u4E3A\u56DB\u4E2A\u57DF \uFF1ADMZTrust\xA0\xA0Untrust\xA0\xA0User\xA0\xA0Management\u3002\u5176\u4E2DDMZ\u57DF\u4E2D\u5305\u62EC\u5BF9\u5916\u670D\u52A1\u7684\u670D\u52A1\u5668\u96C6\u7FA4\uFF0C Trust\u57DF\u4E2D\u5305\u62EC\u8BC1\u4E66\u670D\u52A1\u5668\u548C\u4E91\u670D\u52A1\u5E73\u53F0\uFF0CUntrust\u57DF\u4E2D\u5305\u542B\u4E00\u4E2AVPN\u901A\u9053\uFF0C User\u57DF\u4E2D\u662F\u5185\u7F51\u7684\u7528\u6237\u7EC8\u7AEF\uFF0CManagement\u57DF\u4E2D\u5305\u542B\u4E00\u53F0\u96C6\u4E2D\u65E5\u5FD7\u670D\u52A1\u5668\u548CSFTP\u670D\u52A1\u5668\uFF0C \u6BCF\u4E2A\u533A\u57DF\u4E2D\u90FD\u6709\u4E00\u5957\u5B89\u5168\u670D\u52A1\u7EC4\uFF0C\u5305\u542BAPT\u3001IDS\u3001\u6F0F\u6D1E\u626B\u63CF\u548C\u7EC8\u7AEF\u9632\u62A4\u7B49\u5B89\u5168\u8BBE\u5907\u3002'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-8' },
                            _react2.default.createElement('img', { className: 'imqg-responsive', style: { width: '100%', height: '100%' }, src: '/img/topology.jpg', alt: '' })
                        )
                    )
                )
            );
        }
    }]);

    return Topology;
}(_react2.default.Component);

exports.default = Topology;

},{"./HomeModuleTitle":15,"react":"react"}],32:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":33,"history/lib/createBrowserHistory":51,"react":"react","react-dom":"react-dom","react-router":"react-router"}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Services = require('./components/Services');

var _Services2 = _interopRequireDefault(_Services);

var _Resource = require('./components/Resource');

var _Resource2 = _interopRequireDefault(_Resource);

var _HomePage = require('./components/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _Team = require('./components/Team');

var _Team2 = _interopRequireDefault(_Team);

var _Project = require('./components/Project');

var _Project2 = _interopRequireDefault(_Project);

var _DevicesList = require('./components/DevicesList');

var _DevicesList2 = _interopRequireDefault(_DevicesList);

var _ServicesList = require('./components/ServicesList');

var _ServicesList2 = _interopRequireDefault(_ServicesList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _HomePage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/services', component: _Services2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/resources', component: _Resource2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/team', component: _Team2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/projects', component: _Project2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/devicesList', component: _DevicesList2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/services/detail/:name', component: _ServicesList2.default })
);

},{"./components/App":10,"./components/DevicesList":13,"./components/HomePage":16,"./components/Project":21,"./components/Resource":22,"./components/Services":28,"./components/ServicesList":29,"./components/Team":30,"react":"react","react-router":"react-router"}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _DevicesListActions = require('../actions/DevicesListActions');

var _DevicesListActions2 = _interopRequireDefault(_DevicesListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DevicesListStores = function () {
    function DevicesListStores() {
        _classCallCheck(this, DevicesListStores);

        this.bindActions(_DevicesListActions2.default);
    }

    _createClass(DevicesListStores, [{
        key: 'onGetDevicesListFail',
        value: function onGetDevicesListFail() {}
    }, {
        key: 'onGetDevicesListSuccess',
        value: function onGetDevicesListSuccess() {}
    }]);

    return DevicesListStores;
}();

exports.default = _alt2.default.createStore(DevicesListStores);

},{"../actions/DevicesListActions":1,"../alt":9}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = function () {
  function FooterStore() {
    _classCallCheck(this, FooterStore);

    this.bindActions(_FooterActions2.default);
    this.characters = [];
  }

  _createClass(FooterStore, [{
    key: 'onGetTopCharactersSuccess',
    value: function onGetTopCharactersSuccess(data) {
      this.characters = data.slice(0, 5);
    }
  }, {
    key: 'onGetTopCharactersFail',
    value: function onGetTopCharactersFail(jqXhr) {
      toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }]);

  return FooterStore;
}();

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions":2,"../alt":9}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _HomePageActions = require('../actions/HomePageActions');

var _HomePageActions2 = _interopRequireDefault(_HomePageActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePageStore = function () {
    function HomePageStore() {
        _classCallCheck(this, HomePageStore);

        this.bindActions(_HomePageActions2.default);
        this.message = '';
        this.title = '平台建设目标';
        this.content = '\u5B9E\u9A8C\u5E73\u53F0\u662F\u4EE5\u786C\u4EF6\u73AF\u5883\uFF08\u7F51\u7EDC\u3001\u670D\u52A1\u8BBE\u5907\u3001\u5B89\u5168\u8BBE\u5907\u7B49\uFF09\u3001\u8F6F\u4EF6\u73AF\u5883\uFF08\u534F\u8BAE\u3001\u670D\u52A1\u3001\u5F00\u53D1\u3001\u7814\u7A76\u7B49\uFF09\u4E3A\u57FA\u7840\u4E86\u4E00\u4E2A\u7F51\u7EDC\u6570\u636E\u667A\u80FD\u5206\u6790\u4E0E\u53EF\u89C6\n                    \u5316\u5206\u6790\u7684\u7814\u3001\u4EA7\u3001\u5B66\u7684\u7EFC\u5408\u5E73\u53F0\u3002';
    }

    _createClass(HomePageStore, [{
        key: 'onGetDefaultMessage',
        value: function onGetDefaultMessage() {
            this.message = 'cnmd';
        }
    }]);

    return HomePageStore;
}();

exports.default = _alt2.default.createStore(HomePageStore);

},{"../actions/HomePageActions":3,"../alt":9}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
    key: 'onFindCharacterSuccess',
    value: function onFindCharacterSuccess(payload) {
      payload.history.pushState(null, '/characters/' + payload.characterId);
    }
  }, {
    key: 'onFindCharacterFail',
    value: function onFindCharacterFail(payload) {
      payload.searchForm.classList.add('shake');
      setTimeout(function () {
        payload.searchForm.classList.remove('shake');
      }, 1000);
    }
  }, {
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }, {
    key: 'onGetCharacterCountSuccess',
    value: function onGetCharacterCountSuccess(data) {
      this.totalCharacters = data.count;
    }
  }, {
    key: 'onGetCharacterCountFail',
    value: function onGetCharacterCountFail(jqXhr) {
      toastr.error(jqXhr.responseJSON.message);
    }
  }]);

  return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":4,"../alt":9}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ProjectActions = require('../actions/ProjectActions');

var _ProjectActions2 = _interopRequireDefault(_ProjectActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProjectStore = function () {
    function ProjectStore() {
        _classCallCheck(this, ProjectStore);

        this.bindActions(_ProjectActions2.default);
    }

    _createClass(ProjectStore, [{
        key: 'onGetDefaultMessage',
        value: function onGetDefaultMessage() {}
    }]);

    return ProjectStore;
}();

exports.default = _alt2.default.createStore(ProjectStore);

},{"../actions/ProjectActions":5,"../alt":9}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ResourceActions = require('../actions/ResourceActions');

var _ResourceActions2 = _interopRequireDefault(_ResourceActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceStore = function () {
    function ResourceStore() {
        _classCallCheck(this, ResourceStore);

        this.bindActions(_ResourceActions2.default);
        this.resource = [];
    }

    _createClass(ResourceStore, [{
        key: 'onGetResource',
        value: function onGetResource() {
            this.resource.push('resource');
        }
    }, {
        key: 'onGetResourceSuccess',
        value: function onGetResourceSuccess() {}
    }, {
        key: 'onGetResourceFail',
        value: function onGetResourceFail() {}
    }]);

    return ResourceStore;
}();

exports.default = _alt2.default.createStore(ResourceStore);

},{"../actions/ResourceActions":6,"../alt":9}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ServiceActions = require('../actions/ServiceActions');

var _ServiceActions2 = _interopRequireDefault(_ServiceActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceStore = function () {
	function ServiceStore() {
		_classCallCheck(this, ServiceStore);

		this.bindActions(_ServiceActions2.default);
		this.message = '';
		this.services = [{
			type: 'WEB服务',
			content: [{
				name: '本站',
				url: 'http://192.168.10.70',
				'detail': '智能化信息安全实验平台介绍网站'
			}, {
				name: '资源共享网站',
				url: 'http://192.168.10.200',
				'detail': '资源共享平台'
			}, {
				name: '众创云平台',
				url: 'http://192.168.10.100:8080',
				'detail': '多角色工作流控制平台&虚拟资源共享和管理平台'
			}, {
				name: '资源共享网站-apache1',
				url: 'http://192.168.10.203',
				'detail': '资源共享平台服务器一'
			}, {
				name: '资源共享网站-apache2',
				url: 'http://192.168.10.204',
				'detail': '资源共享平台服务器二'
			}, {
				name: '资源共享平台-tomcat1',
				url: 'http://192.168.10.103:8080',
				'detail': '重创云平台服务器一'
			}, {
				name: '资源共享平台-tomcat2',
				url: 'http://192.168.10.104:8080',
				'detail': '重创云平台服务器二'
			}]
		}, {
			type: '数据库服务',
			content: [{
				name: 'Mysql',
				url: '/services/detail/mysql',
				'detail': 'mysql数据库服务',
				appendix: {
					url: '192.168.10.205',
					port: '3306',
					username: 'root',
					password: '联系管理员',
					des: '登录方式，使用mysql客户端远程链接，navcat等等。'
				}
			}, {
				name: 'MongoDB',
				url: '/services/detail/mongodb',
				'detail': 'mongodb数据库服务',
				appendix: {
					url: '192.168.10.105',
					port: '60000',
					username: 'root',
					password: '联系管理员',
					des: '登录方式，使用mongo客户端远程链接，如robot等等。'
				}
			}, {
				name: 'GridFS',
				url: '/services/detail/gridfs',
				'detail': 'GridFS文件系统',
				appendix: {
					url: '192.168.10.106',
					port: '60000',
					username: 'root',
					password: '联系管理员',
					des: '登录方式，使用mongodb客户端远程链接，robot等等。'
				}
			}]
		}, {
			type: '存储服务',
			content: [{
				name: '资源共享网站网络文件系统',
				url: '/services/detail/NFS',
				'detail': '资源共享网站网络文件系统',
				appendix: {
					url: '192.168.10.206',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '资源共享网站网络文件系统,SSH远程登陆'
				}
			}, {
				name: 'QNAP存储箱',
				url: 'http://192.168.10.139',
				'detail': 'QNAP存储箱，云存储系统文件上传下载，备份分享等功能'
			}, {
				name: 'FTP从服务器',
				url: 'ftp://192.168.10.81',
				'detail': '文件下载服务器，下载文件，工具，图片，视频等功能'
			}, {
				name: 'GITLAB服务器',
				url: 'http://192.168.10.80',
				'detail': 'GitLab代码托管服务器，代码提交，下载，版本控制，团队合作等功能'
			}, {
				name: '日志监控',
				url: 'http://192.168.10.82',
				'detail': '日志监控服务器，提供日志监控，数据采集，性能检测等功能'
			}]
		}, {
			type: '安全监控服务',
			content: [{
				name: '入侵检测系统SNORT',
				url: '/services/detail/snort',
				'detail': '入侵检测系统snort',
				appendix: {
					url: '192.168.10.90',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '入侵检测系统， SSH远程登录'
				}
			}, {
				name: '漏洞扫描NESSUS',
				url: 'https://192.168.10.91:8834',
				'detail': '漏洞扫描系统，扫描系统漏洞，'
			}, {
				name: '流量抓取工具TCPDUMP',
				url: '/services/detail/tcpdump',
				'detail': '抓取网络链接流量，分析流量特征',
				appendix: {
					url: '192.168.10.60',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '流量抓取工具TCPDUMP， 提供网络链接流量抓取功能，采集网络攻击数据'
				}
			}, {
				name: '性能监控NAGIOS',
				url: 'http://192.168.10.63',
				'detail': '性能监控NAGIOS，监控系统性能，评估系统状态'
			}]
		}, {
			type: '系统管理服务',
			content: [{
				name: '虚拟化管理FunsionCompute',
				url: 'http://192.168.10.51',
				'detail': '虚拟化管理FunsionCompute，管理分配虚拟资源'
			}, {
				name: '硬件服务器IBM',
				url: '/services/detail/ibm',
				'detail': '硬件服务器IDM,提供USER域虚拟机分发服务。',
				appendix: {
					url: '192.168.20.2',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '硬件服务器IDM,提供USER域虚拟机分发服务, SSH远程登录'
				}
			}, {
				name: '硬件服务器HP',
				url: '/services/detail/hp',
				'detail': '硬件服务器HP,提供DMZ域虚拟机分发服务。',
				appendix: {
					url: '192.168.10.2',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '硬件服务器HP,提供DMZ域虚拟机分发服务, SSH远程登录'
				}
			}, {
				name: '台式服务器',
				url: '/services/detail/desktop',
				'detail': '态势服务器,提供数据分析域虚拟机分发服务。',
				appendix: {
					url: '192.168.1.2',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '台式服务器,提供数据分析域虚拟机分发服务, SSH远程登录'
				}
			}]
		}];
	}

	_createClass(ServiceStore, [{
		key: 'onSetMessageSuccess',
		value: function onSetMessageSuccess(payload) {
			this.message = payload.message;
		}
	}, {
		key: 'onSetMessageFail',
		value: function onSetMessageFail(errorMessage) {
			toastr.error(errorMessage);
		}
	}, {
		key: 'onGetMessageSuccess',
		value: function onGetMessageSuccess(payload) {
			this.services = payload;
		}
	}, {
		key: 'onGetMessageFail',
		value: function onGetMessageFail(errorMessage) {
			toastr.error(errorMessage);
		}
	}, {
		key: 'onGetDefaultMessage',
		value: function onGetDefaultMessage() {
			this.message = '';
		}
	}]);

	return ServiceStore;
}();

exports.default = _alt2.default.createStore(ServiceStore);

},{"../actions/ServiceActions":7,"../alt":9}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _TeamActions = require('../actions/TeamActions');

var _TeamActions2 = _interopRequireDefault(_TeamActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TeamStore = function () {
    function TeamStore() {
        _classCallCheck(this, TeamStore);

        this.bindActions(_TeamActions2.default);
    }

    _createClass(TeamStore, [{
        key: 'onGetDefaultMessage',
        value: function onGetDefaultMessage() {}
    }]);

    return TeamStore;
}();

exports.default = _alt2.default.createStore(TeamStore);

},{"../actions/TeamActions":8,"../alt":9}],42:[function(require,module,exports){

module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}

},{}],43:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":44,"./lib/keys.js":45}],44:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],45:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],46:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],47:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],48:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":60,"warning":73}],49:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],50:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],51:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":46,"./DOMStateStorage":48,"./DOMUtils":49,"./ExecutionEnvironment":50,"./createDOMHistory":52,"./parsePath":57,"_process":60,"invariant":59}],52:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":49,"./ExecutionEnvironment":50,"./createHistory":53,"_process":60,"invariant":59}],53:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":46,"./AsyncUtils":47,"./createLocation":54,"./deprecate":55,"./parsePath":57,"./runTransitionHook":58,"deep-equal":43}],54:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":46,"./parsePath":57}],55:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],56:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],57:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":56,"_process":60,"warning":73}],58:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":60,"warning":73}],59:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

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
  if (process.env.NODE_ENV !== 'production') {
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

}).call(this,require('_process'))

},{"_process":60}],60:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],61:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

if (process.env.NODE_ENV !== 'production') {
  var invariant = require('fbjs/lib/invariant');
  var warning = require('fbjs/lib/warning');
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
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
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

}).call(this,require('_process'))

},{"./lib/ReactPropTypesSecret":65,"_process":60,"fbjs/lib/invariant":67,"fbjs/lib/warning":68}],62:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./lib/ReactPropTypesSecret":65,"fbjs/lib/emptyFunction":66,"fbjs/lib/invariant":67}],63:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');
var assign = require('object-assign');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var checkPropTypes = require('./checkPropTypes');

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

}).call(this,require('_process'))

},{"./checkPropTypes":61,"./lib/ReactPropTypesSecret":65,"_process":60,"fbjs/lib/emptyFunction":66,"fbjs/lib/invariant":67,"fbjs/lib/warning":68,"object-assign":69}],64:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}

}).call(this,require('_process'))

},{"./factoryWithThrowingShims":62,"./factoryWithTypeCheckers":63,"_process":60}],65:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],66:[function(require,module,exports){
"use strict";

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

module.exports = emptyFunction;
},{}],67:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

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

module.exports = invariant;
}).call(this,require('_process'))

},{"_process":60}],68:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

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

module.exports = warning;
}).call(this,require('_process'))

},{"./emptyFunction":66,"_process":60}],69:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
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
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
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
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
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

},{}],70:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = require('chain-function');

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = require('./utils/ChildMapping');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./utils/ChildMapping":72,"_process":60,"chain-function":42,"prop-types":64,"react":"react","warning":71}],71:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":60}],72:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = require('react');

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}
},{"react":"react"}],73:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":60}]},{},[32])

//# sourceMappingURL=bundle.js.map
