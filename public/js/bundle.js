(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = (function () {
  function FooterActions() {
    //this.generateActions(
    //'getTopCharactersSuccess',
    //'getTopCharactersFail'
    //);

    _classCallCheck(this, FooterActions);
  }

  _createClass(FooterActions, [{
    key: 'getTopCharacters',
    value: function getTopCharacters() {
      // $.ajax({ url: '/api/characters/top' })
      //   .done((data) => {
      //     this.actions.getTopCharactersSuccess(data)
      //   })
      //   .fail((jqXhr) => {
      //     this.actions.getTopCharactersFail(jqXhr)
      //   });
    }
  }]);

  return FooterActions;
})();

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function NavbarActions() {
  _classCallCheck(this, NavbarActions);

  this.generateActions('updateOnlineUsers', 'updateAjaxAnimation');
};

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":7,"underscore":54}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pageId = 4;

var PhotoAlbumActions = (function () {
  function PhotoAlbumActions() {
    _classCallCheck(this, PhotoAlbumActions);

    this.generateActions('getPhotoAlbumDataSuccess', 'getPhotoAlbumDataFail', 'savePhotoAlbumDataSuccess', 'savePhotoAlbumDataFail', 'updateAjaxAnimation');
  }

  _createClass(PhotoAlbumActions, [{
    key: 'getPhotoAlbumData',
    value: function getPhotoAlbumData() {
      var _this = this;

      console.log('getting page content for page: ' + pageId);
      $.ajax({
        url: '/api/pages/' + pageId
      }).done(function (data) {
        console.log('getPhotoAlbumDataSuccess(data)');
        _this.actions.getPhotoAlbumDataSuccess(data);
      }).fail(function () {
        _this.actions.getPhotoAlbumDataFail();
      });
    }
  }, {
    key: 'savePhotoAlbumData',
    value: function savePhotoAlbumData(contents, history) {
      var _this2 = this;

      $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: { contents: contents }
      }).done(function (data) {
        _this2.actions.savePhotoAlbumDataSuccess(data.message, history);
      }).fail(function (jqXhr) {
        _this2.actions.savePhotoAlbumDataFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return PhotoAlbumActions;
})();

exports.default = _alt2.default.createActions(PhotoAlbumActions);

},{"../alt":7,"underscore":54}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pageId = 2;

var TheProposalActions = (function () {
  function TheProposalActions() {
    _classCallCheck(this, TheProposalActions);

    this.generateActions('getProposalDataSuccess', 'getProposalDataFail', 'saveProposalDataSuccess', 'saveVProposalDataFail', 'updateUrl', 'updateDescription', 'updateAjaxAnimation');
  }

  _createClass(TheProposalActions, [{
    key: 'getProposalData',
    value: function getProposalData() {
      var _this = this;

      console.log('getting page content for page: ' + pageId);
      $.ajax({
        url: '/api/pages/' + pageId
      }).done(function (data) {
        console.log('getProposalDataSuccess(data)');
        _this.actions.getProposalDataSuccess(data);
      }).fail(function () {
        _this.actions.getProposalDataFail();
      });
    }
  }, {
    key: 'saveProposalData',
    value: function saveProposalData(contents, history) {
      var _this2 = this;

      $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: { contents: contents }
      }).done(function (data) {
        _this2.actions.saveProposalDataSuccess(data.message, history);
      }).fail(function (jqXhr) {
        _this2.actions.saveProposalDataFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return TheProposalActions;
})();

exports.default = _alt2.default.createActions(TheProposalActions);

},{"../alt":7,"underscore":54}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pageId = 3;

var ThingsToDoActions = (function () {
  function ThingsToDoActions() {
    _classCallCheck(this, ThingsToDoActions);

    this.generateActions('getThingsToDoDataSuccess', 'getThingsToDoDataFail', 'saveThingsToDoDataSuccess', 'saveThingsToDoDataFail', 'updateListItem', 'handleAddListItem', 'updateAjaxAnimation');
  }

  _createClass(ThingsToDoActions, [{
    key: 'getThingsToDoData',
    value: function getThingsToDoData() {
      var _this = this;

      console.log('getting page content for page: ' + pageId);
      $.ajax({
        url: '/api/pages/' + pageId
      }).done(function (data) {
        console.log('getThingsToDoDataSuccess(data)');
        _this.actions.getThingsToDoDataSuccess(data);
      }).fail(function () {
        _this.actions.getThingsToDoDataFail();
      });
    }
  }, {
    key: 'saveThingsToDoData',
    value: function saveThingsToDoData(contents, history) {
      var _this2 = this;

      $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: { contents: contents }
      }).done(function (data) {
        _this2.actions.saveThingsToDoDataSuccess(data.message, history);
      }).fail(function (jqXhr) {
        _this2.actions.saveThingsToDoDataFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return ThingsToDoActions;
})();

exports.default = _alt2.default.createActions(ThingsToDoActions);

},{"../alt":7,"underscore":54}],6:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pageId = 1;

var VenueActions = (function () {
  function VenueActions() {
    _classCallCheck(this, VenueActions);

    this.generateActions('getVenueDataSuccess', 'getVenueDataFail', 'saveVenueDataSuccess', 'saveVenueDataFail', 'updateName', 'updateEventDate', 'updateUrl', 'updateCeremonyTime', 'updateCocktailHourTime', 'updateReceptionTime', 'updateAfterPartyTime', 'updateAjaxAnimation');
  }

  _createClass(VenueActions, [{
    key: 'getVenueData',
    value: function getVenueData() {
      var _this = this;

      console.log('getting page content for page: ' + pageId);
      $.ajax({
        url: '/api/pages/' + pageId
      }).done(function (data) {
        console.log('getVenueDataSuccess(data)');
        _this.actions.getVenueDataSuccess(data);
      }).fail(function () {
        _this.actions.getVenueDataFail();
      });
    }
  }, {
    key: 'saveVenueData',
    value: function saveVenueData(contents, history) {
      var _this2 = this;

      $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: { contents: contents }
      }).done(function (data) {
        _this2.actions.saveVenueDataSuccess(data.message, history);
      }).fail(function (jqXhr) {
        _this2.actions.saveVenueDataFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return VenueActions;
})();

exports.default = _alt2.default.createActions(VenueActions);

},{"../alt":7,"underscore":54}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],8:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accomodations = (function (_React$Component) {
  _inherits(Accomodations, _React$Component);

  function Accomodations(props) {
    _classCallCheck(this, Accomodations);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Accomodations).call(this, props));
    //this.state = NavbarStore.getState();
    //this.onChange = this.onChange.bind(this);
  }

  _createClass(Accomodations, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //  NavbarStore.listen(this.onChange);
      //  NavbarActions.getCharacterCount();

    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //NavbarStore.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      //  this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Accomodations'
      );
    }
  }]);

  return Accomodations;
})(_react2.default.Component);

exports.default = Accomodations;

},{"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'fixed-container' },
        _react2.default.createElement(_Header2.default, null),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
})(_react2.default.Component);

exports.default = App;

},{"./Footer":17,"./Header":19,"react":"react"}],10:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _CarouselIndicators = require('./CarouselIndicators');

var _CarouselIndicators2 = _interopRequireDefault(_CarouselIndicators);

var _CarouselContent = require('./CarouselContent');

var _CarouselContent2 = _interopRequireDefault(_CarouselContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = (function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).call(this, props));
  }

  _createClass(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'largeCarousel', className: 'carousel slide', 'data-ride': 'carousel' },
        _react2.default.createElement(_CarouselIndicators2.default, this.props),
        _react2.default.createElement(_CarouselContent2.default, this.props),
        _react2.default.createElement(
          'a',
          { className: 'left carousel-control', href: '#largeCarousel', role: 'button', 'data-slide': 'prev' },
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-left', 'aria-hidden': 'true' }),
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Previous'
          )
        ),
        _react2.default.createElement(
          'a',
          { className: 'right carousel-control', href: '#largeCarousel', role: 'button', 'data-slide': 'next' },
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-right', 'aria-hidden': 'true' }),
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Next'
          )
        )
      );
    }
  }]);

  return Carousel;
})(_react2.default.Component);

exports.default = Carousel;

},{"./CarouselContent":11,"./CarouselIndicators":12,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PropsHelper = require('../../helpers/PropsHelper');

var _PropsHelper2 = _interopRequireDefault(_PropsHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselContent = (function (_React$Component) {
  _inherits(CarouselContent, _React$Component);

  function CarouselContent(props) {
    _classCallCheck(this, CarouselContent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CarouselContent).call(this, props));
  }

  _createClass(CarouselContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var propsArray = _PropsHelper2.default.convertPropsToArray(this.props.photoAlbum);

      var images = propsArray.map(function (image, index) {
        return _react2.default.createElement(
          'div',
          { className: index == _this2.props.selectedPhoto ? 'item active' : 'item' },
          _react2.default.createElement('img', { key: index, src: image.value })
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'carousel-inner', role: 'listbox' },
        images
      );
    }
  }]);

  return CarouselContent;
})(_react2.default.Component);

exports.default = CarouselContent;

},{"../../helpers/PropsHelper":26,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PropsHelper = require('../../helpers/PropsHelper');

var _PropsHelper2 = _interopRequireDefault(_PropsHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselIndicators = (function (_React$Component) {
  _inherits(CarouselIndicators, _React$Component);

  function CarouselIndicators(props) {
    _classCallCheck(this, CarouselIndicators);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CarouselIndicators).call(this, props));
  }

  _createClass(CarouselIndicators, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var propsArray = _PropsHelper2.default.convertPropsToArray(this.props.photoAlbum);

      var indicators = propsArray.map(function (indicator, index) {
        return _react2.default.createElement('li', { key: index, 'data-target': '#largeCarousel', className: index == _this2.props.selectedPhoto ? 'active' : '', 'data-slide-to': index });
      });

      return _react2.default.createElement(
        'ol',
        { className: 'carousel-indicators' },
        indicators
      );
    }
  }]);

  return CarouselIndicators;
})(_react2.default.Component);

exports.default = CarouselIndicators;

},{"../../helpers/PropsHelper":26,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PhotoAlbumStore = require('../stores/PhotoAlbumStore');

var _PhotoAlbumStore2 = _interopRequireDefault(_PhotoAlbumStore);

var _PhotoAlbumActions = require('../actions/PhotoAlbumActions');

var _PhotoAlbumActions2 = _interopRequireDefault(_PhotoAlbumActions);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditPhotoAlbum = (function (_React$Component) {
  _inherits(EditPhotoAlbum, _React$Component);

  function EditPhotoAlbum(props) {
    _classCallCheck(this, EditPhotoAlbum);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditPhotoAlbum).call(this, props));

    _this.state = _PhotoAlbumStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(EditPhotoAlbum, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _PhotoAlbumStore2.default.listen(this.onChange);
      _PhotoAlbumActions2.default.getPhotoAlbumData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _PhotoAlbumStore2.default.unlisten(this.onChange);
    }

    //TODO: create function to return new content item

  }, {
    key: 'addPhoto',
    value: function addPhoto() {
      var sortOrder = this.state.photoAlbum.length + 1;

      var content = {
        name: 'Photo Album',
        description: 'Photo Album',
        value: '',
        content_type_id: 1,
        sort_order: sortOrder
      };

      this.state.photoAlbum.push(content);

      this.setState({ photoAlbum: this.state.photoAlbum });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      //PhotoAlbumActions.savePhotoAlbumData(this.state.photoAlbum, this.props.history);
    }
  }, {
    key: 'updatePhoto',
    value: function updatePhoto(index, event) {
      this.state.photoAlbum[index].value = event.target.value;
      this.setState({ photoAlbum: this.state.photoAlbum });
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _PhotoAlbumActions2.default.savePhotoAlbumData(this.state.photoAlbum, this.props.history);
    }

    //TODO: create field component that will figure out what kind of field to render

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var photoAlbumNodes = this.state.photoAlbum.map(function (photo, index) {
        return _react2.default.createElement(
          'div',
          { key: photo.sort_order, className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-8' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement('input', { ref: 'url', className: 'form-control', name: 'url', placeholder: 'Url',
                  value: photo.value, onChange: _this2.updatePhoto.bind(_this2, index) })
              )
            )
          )
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-primary', onClick: this.addPhoto.bind(this) },
              'Add'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row Photo-album-content' },
              photoAlbumNodes
            ),
            _react2.default.createElement(
              'div',
              { className: this.state.photoAlbum.length > 0 ? 'form-group' : 'form-group hidden' },
              _react2.default.createElement(
                'button',
                { type: 'submit', onClick: this.submit.bind(this), className: 'btn btn-primary' },
                'Save'
              )
            )
          )
        )
      );
    }
  }]);

  return EditPhotoAlbum;
})(_react2.default.Component);

exports.default = EditPhotoAlbum;

},{"../actions/PhotoAlbumActions":3,"../stores/PhotoAlbumStore":31,"react":"react","underscore":54}],14:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TheProposalStore = require('../stores/TheProposalStore');

var _TheProposalStore2 = _interopRequireDefault(_TheProposalStore);

var _TheProposalActions = require('../actions/TheProposalActions');

var _TheProposalActions2 = _interopRequireDefault(_TheProposalActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditTheProposal = (function (_React$Component) {
  _inherits(EditTheProposal, _React$Component);

  function EditTheProposal(props) {
    _classCallCheck(this, EditTheProposal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditTheProposal).call(this, props));

    _this.state = _TheProposalStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(EditTheProposal, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TheProposalStore2.default.listen(this.onChange);
      _TheProposalActions2.default.getProposalData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TheProposalStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var contents = [{
        name: 'Proposal Image Url',
        description: 'Proposal Image Url',
        value: this.state.proposal.url,
        content_type_id: 1,
        sort_order: 1
      }, {
        name: 'Proposal Description',
        description: 'Proposal Description',
        value: this.state.proposal.description,
        content_type_id: 2,
        sort_order: 2
      }];

      _TheProposalActions2.default.saveProposalData(contents, this.props.history);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Detail' },
        _react2.default.createElement(
          'h1',
          { className: 'Heading Heading--alt' },
          'Edit Proposal'
        ),
        _react2.default.createElement(
          'div',
          { className: 'Content padBox' },
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-8' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement('input', { ref: 'url', className: 'form-control', name: 'url', placeholder: 'Url', value: this.state.proposal.url,
                      onChange: _TheProposalActions2.default.updateUrl, autoFocus: true })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement('textarea', { ref: 'description', className: 'form-control', name: 'description', placeholder: 'Description',
                      value: this.state.proposal.description, onChange: _TheProposalActions2.default.updateDescription })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'button',
                      { type: 'submit', className: 'btn btn-primary' },
                      'Save'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return EditTheProposal;
})(_react2.default.Component);

exports.default = EditTheProposal;

},{"../actions/TheProposalActions":4,"../stores/TheProposalStore":32,"react":"react"}],15:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThingsToDoStore = require('../stores/ThingsToDoStore');

var _ThingsToDoStore2 = _interopRequireDefault(_ThingsToDoStore);

var _ThingsToDoActions = require('../actions/ThingsToDoActions');

var _ThingsToDoActions2 = _interopRequireDefault(_ThingsToDoActions);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditThingsToDo = (function (_React$Component) {
  _inherits(EditThingsToDo, _React$Component);

  function EditThingsToDo(props) {
    _classCallCheck(this, EditThingsToDo);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditThingsToDo).call(this, props));

    _this.state = _ThingsToDoStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(EditThingsToDo, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _ThingsToDoStore2.default.listen(this.onChange);
      _ThingsToDoActions2.default.getThingsToDoData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _ThingsToDoStore2.default.unlisten(this.onChange);
    }

    //TODO: put in helper

  }, {
    key: 'isSubListItem',
    value: function isSubListItem(node) {
      return node.parent_index > 0;
    }
    //TODO: put in helper

  }, {
    key: 'isDescription',
    value: function isDescription(node) {
      return node.content_type_id == 2;
    }

    //TODO: create function to return new content item

  }, {
    key: 'addParentListItem',
    value: function addParentListItem() {
      var sortOrder = this.state.thingsToDo.length + 1;

      var content = {
        name: 'Things To Do Parent List Item',
        description: 'Things To Do Parent List Item',
        value: '',
        content_type_id: 2,
        sort_order: sortOrder
      };

      this.state.thingsToDo.push(content);

      this.setState({ thingsToDo: this.state.thingsToDo });
    }

    //TODO: create function to return new content item

  }, {
    key: 'addSublistItem',
    value: function addSublistItem(index, event) {
      var sortOrder = this.state.thingsToDo.length + 1;

      var description = {
        name: 'Things To Do Child List Item',
        description: 'Things To Do Child List Item',
        value: '',
        content_type_id: 2,
        parent_index: this.findParentIndex(sortOrder),
        sort_order: sortOrder
      };
      this.state.thingsToDo.splice(index + 1, 0, description);

      sortOrder += 1;
      var link = {
        name: 'Things To Do Child List Item',
        description: 'Things To Do Child List Item',
        value: '',
        content_type_id: 5,
        parent_index: this.findParentIndex(sortOrder),
        sort_order: sortOrder
      };
      this.state.thingsToDo.splice(index + 2, 0, link);

      this.setState({ thingsToDo: this.state.thingsToDo });
    }
  }, {
    key: 'findParentIndex',
    value: function findParentIndex(currentIndex) {
      var parentIndex = 1;

      for (var index = currentIndex - 2; index > 0; index--) {
        var listItem = this.state.thingsToDo[index];
        if (!listItem.parent_index) {
          parentIndex = listItem.sort_order;
          break;
        }
      }

      return parentIndex;
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      //ThingsToDoActions.saveThingsToDoData(this.state.thingsToDo, this.props.history);
    }
  }, {
    key: 'updateListItem',
    value: function updateListItem(index, event) {
      this.state.thingsToDo[index].value = event.target.value;
      this.setState({ thingsToDo: this.state.thingsToDo });
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _ThingsToDoActions2.default.saveThingsToDoData(this.state.thingsToDo, this.props.history);
    }

    //TODO: create field component that will figure out what kind of field to render

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var thingsToDoNodes = this.state.thingsToDo.map(function (thingToDo, index) {
        if (_this2.isSubListItem(thingToDo)) {
          if (_this2.isDescription(thingToDo)) {
            return _react2.default.createElement(
              'div',
              { key: thingToDo.sort_order, className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-8' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group Sub-list-item' },
                    _react2.default.createElement('textarea', { ref: 'description', className: 'form-control', name: 'description', placeholder: 'Description',
                      value: thingToDo.value, onChange: _this2.updateListItem.bind(_this2, index) })
                  )
                )
              )
            );
          } else {
            return _react2.default.createElement(
              'div',
              { key: thingToDo.sort_order, className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-8' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group Sub-list-item Link-list-item' },
                    _react2.default.createElement('input', { ref: 'link', className: 'form-control', name: 'link', placeholder: 'Link',
                      value: thingToDo.value, onChange: _this2.updateListItem.bind(_this2, index) })
                  )
                )
              )
            );
          }
        } else {
          return _react2.default.createElement(
            'div',
            { key: thingToDo.sort_order, className: 'container List-item-group' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-8 Add-sub-list-item' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: _this2.addSublistItem.bind(_this2, index) },
                    'Add Sub List Item'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-8' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement('input', { ref: 'title', className: 'form-control', name: 'title', placeholder: 'Title',
                    value: thingToDo.value, onChange: _this2.updateListItem.bind(_this2, index) })
                )
              )
            )
          );
        }
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'container List-page' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-primary', onClick: this.addParentListItem.bind(this) },
              'Add'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row List-container' },
              thingsToDoNodes
            ),
            _react2.default.createElement(
              'div',
              { className: this.state.thingsToDo.length > 0 ? 'form-group' : 'form-group hidden' },
              _react2.default.createElement(
                'button',
                { type: 'submit', onClick: this.submit.bind(this), className: 'btn btn-primary' },
                'Save'
              )
            )
          )
        )
      );
    }
  }]);

  return EditThingsToDo;
})(_react2.default.Component);

exports.default = EditThingsToDo;

},{"../actions/ThingsToDoActions":5,"../stores/ThingsToDoStore":33,"react":"react","underscore":54}],16:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VenueStore = require('../stores/VenueStore');

var _VenueStore2 = _interopRequireDefault(_VenueStore);

var _VenueActions = require('../actions/VenueActions');

var _VenueActions2 = _interopRequireDefault(_VenueActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditVenue = (function (_React$Component) {
  _inherits(EditVenue, _React$Component);

  function EditVenue(props) {
    _classCallCheck(this, EditVenue);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditVenue).call(this, props));

    _this.state = _VenueStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(EditVenue, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _VenueStore2.default.listen(this.onChange);
      _VenueActions2.default.getVenueData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _VenueStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var contents = [{
        name: 'Venue Name',
        description: 'Venue Name',
        value: this.state.venue.name,
        content_type_id: 4,
        sort_order: 1
      }, {
        name: 'Venue Event Date',
        description: 'Venue Event Date',
        value: this.state.venue.eventDate,
        content_type_id: 2,
        sort_order: 2
      }, {
        name: 'Venue Image Url',
        description: 'Venue Image Url',
        value: this.state.venue.url,
        content_type_id: 1,
        sort_order: 3
      }, {
        name: 'Venue Ceremony Time',
        description: 'Venue Ceremony Time',
        value: this.state.venue.ceremonyTime,
        content_type_id: 2,
        sort_order: 4
      }, {
        name: 'Venue Cockailtail Hour',
        description: 'Venue Cockailtail Hour',
        value: this.state.venue.cocktailHourTime,
        content_type_id: 2,
        sort_order: 5
      }, {
        name: 'Venue Reception',
        description: 'Venue Reception',
        value: this.state.venue.receptionTime,
        content_type_id: 2,
        sort_order: 6
      }, {
        name: 'Venue After Party',
        description: 'Venue After Party',
        value: this.state.venue.afterPartyTime,
        content_type_id: 2,
        sort_order: 7
      }];

      _VenueActions2.default.saveVenueData(contents, this.props.history);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Detail' },
        _react2.default.createElement(
          'h1',
          { className: 'Heading Heading--alt' },
          'Edit Venue'
        ),
        _react2.default.createElement(
          'div',
          { className: 'Content padBox' },
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-8' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement('input', { ref: 'name', className: 'form-control', name: 'name', placeholder: 'Name', value: this.state.venue.name,
                      onChange: _VenueActions2.default.updateName, autoFocus: true })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement('input', { ref: 'eventDate', className: 'form-control', name: 'eventDate', placeholder: 'Date', value: this.state.venue.eventDate,
                      onChange: _VenueActions2.default.updateEventDate })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement('input', { ref: 'url', className: 'form-control', name: 'url', placeholder: 'Url', value: this.state.venue.url,
                      onChange: _VenueActions2.default.updateUrl })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement('input', { ref: 'ceremonyTime', className: 'form-control', name: 'ceremonyTime', placeholder: 'Ceremony Time',
                      value: this.state.venue.ceremonyTime, onChange: _VenueActions2.default.updateCeremonyTime })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement('textarea', { ref: 'cocktailHourTime', className: 'form-control', name: 'cocktailHourTime', placeholder: 'Cocktail Hour',
                      value: this.state.venue.cocktailHourTime, onChange: _VenueActions2.default.updateCocktailHourTime })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement('textarea', { ref: 'receptionTime', className: 'form-control', name: 'receptionTime', placeholder: 'Reception',
                      value: this.state.venue.receptionTime, onChange: _VenueActions2.default.updateReceptionTime })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement('textarea', { ref: 'afterPartyTime', className: 'form-control', name: 'afterPartyTime', placeholder: 'After Party',
                      value: this.state.venue.afterPartyTime, onChange: _VenueActions2.default.updateAfterPartyTime })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'button',
                      { type: 'submit', className: 'btn btn-primary' },
                      'Save'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return EditVenue;
})(_react2.default.Component);

exports.default = EditVenue;

},{"../actions/VenueActions":6,"../stores/VenueStore":34,"react":"react"}],17:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Footer = (function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));

    _this.state = _FooterStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _FooterStore2.default.listen(this.onChange);
      //  FooterActions.getTopCharacters();
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
        _react2.default.createElement('div', { className: 'container' })
      );
    }
  }]);

  return Footer;
})(_react2.default.Component);

exports.default = Footer;

},{"../actions/FooterActions":1,"../stores/FooterStore":29,"react":"react","react-router":"react-router"}],18:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GiftRegistry = (function (_React$Component) {
  _inherits(GiftRegistry, _React$Component);

  function GiftRegistry(props) {
    _classCallCheck(this, GiftRegistry);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GiftRegistry).call(this, props));
    //this.state = NavbarStore.getState();
    //this.onChange = this.onChange.bind(this);
  }

  _createClass(GiftRegistry, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //  NavbarStore.listen(this.onChange);
      //  NavbarActions.getCharacterCount();

    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //NavbarStore.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      //  this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Gift Registry'
      );
    }
  }]);

  return GiftRegistry;
})(_react2.default.Component);

exports.default = GiftRegistry;

},{"react":"react","react-router":"react-router"}],19:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));
    //this.state = NavbarStore.getState();
    //this.onChange = this.onChange.bind(this);
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //  NavbarStore.listen(this.onChange);
      //  NavbarActions.getCharacterCount();

    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //NavbarStore.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      //  this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Header' },
        _react2.default.createElement(
          'div',
          { className: 'Header-container' },
          _react2.default.createElement(
            'a',
            { className: 'Header-brand', href: '/' },
            _react2.default.createElement(
              'span',
              { className: 'Header-brandTxt' },
              'JASON & JENNA'
            )
          ),
          _react2.default.createElement('div', { className: 'Header-graphic-separator' }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Navigation2.default, { className: 'Header-nav', history: this.props.history })
          ),
          _react2.default.createElement('div', { className: 'Header-graphic-separator' })
        )
      );
    }
  }]);

  return Header;
})(_react2.default.Component);

exports.default = Header;

},{"./Navigation":21,"react":"react","react-router":"react-router"}],20:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "Content-text" },
          _react2.default.createElement(
            "span",
            null,
            " November 5, 2016 "
          )
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("img", { className: "Content-large-image", src: "https://scontent-lga3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/12219352_10205322216999523_2989781224031728729_n.jpg?oh=2ce868d093f34a72a5a333752218e4eb&oe=56E30ABC" })
        )
      );
    }
  }]);

  return Home;
})(_react2.default.Component);

exports.default = Home;

},{"react":"react"}],21:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Navbar = (function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);

      // let socket = io.connect();
      //
      // socket.on('onlineUsers', (data) => {
      //   NavbarActions.updateOnlineUsers(data);
      // });
      //
      // $(document).ajaxStart(() => {
      //   NavbarActions.updateAjaxAnimation('fadeIn');
      // });
      //
      // $(document).ajaxComplete(() => {
      //   setTimeout(() => {
      //     NavbarActions.updateAjaxAnimation('fadeOut');
      //   }, 750);
      // });
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
    value: function handleSubmit(event) {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Navigation', role: 'navigation' },
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'Navigation-link', to: '/' },
          'Home'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'Navigation-link', to: '/the-proposal' },
          'The Proposal'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'Navigation-link', to: '/venue' },
          'The Wedding'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'Navigation-link', to: '/photo-album' },
          'Photo Album'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'Navigation-link', to: '/accomodations' },
          'Accomodations'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'Navigation-link', to: '/gift-registry' },
          'Gift Registry'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'Navigation-link', to: '/things-to-do' },
          'Things To Do'
        )
      );
    }
  }]);

  return Navbar;
})(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":2,"../stores/NavbarStore":30,"react":"react","react-router":"react-router"}],22:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PhotoAlbumStore = require('../stores/PhotoAlbumStore');

var _PhotoAlbumStore2 = _interopRequireDefault(_PhotoAlbumStore);

var _PhotoAlbumActions = require('../actions/PhotoAlbumActions');

var _PhotoAlbumActions2 = _interopRequireDefault(_PhotoAlbumActions);

var _Carousel = require('./Carousel/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//mport Modal from './Modal/Modal';
//import { Modal } from 'react-bootstrap';

var PhotoAlbum = (function (_React$Component) {
  _inherits(PhotoAlbum, _React$Component);

  function PhotoAlbum(props) {
    _classCallCheck(this, PhotoAlbum);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoAlbum).call(this, props));

    _this.state = _PhotoAlbumStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(PhotoAlbum, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _PhotoAlbumStore2.default.listen(this.onChange);
      _PhotoAlbumActions2.default.getPhotoAlbumData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _PhotoAlbumStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      //this.setState({ isModalOpen: false });
      $('#largeCarouselModal').modal('hide');
    }
  }, {
    key: 'openModal',
    value: function openModal(index) {
      //  this.setState({isModalOpen: true});
      //  this.setState({isModalOpen: true});
      this.state.selectedPhoto = index || 1;
      $('#largeCarouselModal').modal('show');
    }

    //TODO: create field component that will figure out what kind of field to render

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = { photoAlbum: this.state.photoAlbum, selectedPhoto: this.state.selectedPhoto };

      var photoAlbumNodes = this.state.photoAlbum.map(function (photo, index) {
        return _react2.default.createElement(
          'div',
          { key: photo.sort_order, className: 'Photo' },
          _react2.default.createElement('img', { onClick: _this2.openModal.bind(_this2, index), className: 'Content-small-image', src: photo.value })
        );
      });

      if (_underscore._.isEmpty(this.state.photoAlbum)) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'Edit-Content-Button' },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'Navigation-link', to: '/photo-album/edit' },
              'Edit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Empty-Page-Content' },
            _react2.default.createElement(
              'span',
              null,
              'There is no content yet.'
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'Edit-Content-Button' },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'Navigation-link', to: '/photo-album/edit' },
              'Edit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Photo-album-container' },
            photoAlbumNodes
          ),
          _react2.default.createElement(
            'div',
            { id: 'largeCarouselModal', className: 'modal fade', role: 'dialog' },
            _react2.default.createElement(
              'div',
              { className: 'modal-dialog' },
              _react2.default.createElement(
                'div',
                { className: 'modal-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'modal-header' },
                  _react2.default.createElement(
                    'button',
                    { type: 'button', className: 'close', 'data-dismiss': 'modal' },
                    '×'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'modal-body' },
                  _react2.default.createElement(_Carousel2.default, props)
                )
              )
            )
          )
        );
      }
    }
    // return (
    //   <div className="Detail">
    //     <img className="Content-small-image" src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xfl1/v/t1.0-9/11110451_928484358212_2031419656314985032_n.jpg?oh=9969b77e474d57ff095023a9be655c9f&oe=56EFD67D"/>
    //     <img className="Content-small-image" src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/12190078_10207642386968667_4983569545503341933_n.jpg?oh=0270b12b271788139391ccab795d37b4&oe=56DF764F"/>
    //     <img className="Content-small-image" src="https://scontent-lga3-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/12122438_10207641487266175_3794466943909669980_n.jpg?oh=540ea2865ff66b8284a8a2d45363e1af&oe=56E66A4B"/>
    //   </div>
    // );

  }]);

  return PhotoAlbum;
})(_react2.default.Component);

exports.default = PhotoAlbum;

},{"../actions/PhotoAlbumActions":3,"../stores/PhotoAlbumStore":31,"./Carousel/Carousel":10,"react":"react","react-router":"react-router","underscore":54}],23:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _TheProposalStore = require('../stores/TheProposalStore');

var _TheProposalStore2 = _interopRequireDefault(_TheProposalStore);

var _TheProposalActions = require('../actions/TheProposalActions');

var _TheProposalActions2 = _interopRequireDefault(_TheProposalActions);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TheProposal = (function (_React$Component) {
  _inherits(TheProposal, _React$Component);

  function TheProposal(props) {
    _classCallCheck(this, TheProposal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TheProposal).call(this, props));

    _this.state = _TheProposalStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(TheProposal, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TheProposalStore2.default.listen(this.onChange);
      _TheProposalActions2.default.getProposalData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _TheProposalStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      if (_underscore._.isEmpty(this.state.proposal)) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'Edit-Content-Button' },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'Navigation-link', to: '/the-proposal/edit' },
              'Edit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Empty-Page-Content' },
            _react2.default.createElement(
              'span',
              null,
              'There is no content yet.'
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'Detail' },
          _react2.default.createElement(
            'div',
            { className: 'Edit-Content-Button' },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'Navigation-link', to: '/the-proposal/edit' },
              'Edit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Proposal-content-image-container' },
            _react2.default.createElement('img', { className: 'Content-extra-large-image-percentage', src: this.state.proposal.url, alt: 'Proposal Image' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Content-long-description-container' },
            _react2.default.createElement(
              'div',
              { className: 'Content-long-description' },
              this.state.proposal.description
            )
          )
        );
      }
    }
  }]);

  return TheProposal;
})(_react2.default.Component);

exports.default = TheProposal;

},{"../actions/TheProposalActions":4,"../stores/TheProposalStore":32,"react":"react","react-router":"react-router","underscore":54}],24:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ThingsToDoStore = require('../stores/ThingsToDoStore');

var _ThingsToDoStore2 = _interopRequireDefault(_ThingsToDoStore);

var _ThingsToDoActions = require('../actions/ThingsToDoActions');

var _ThingsToDoActions2 = _interopRequireDefault(_ThingsToDoActions);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThingsToDo = (function (_React$Component) {
  _inherits(ThingsToDo, _React$Component);

  function ThingsToDo(props) {
    _classCallCheck(this, ThingsToDo);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ThingsToDo).call(this, props));

    _this.state = _ThingsToDoStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(ThingsToDo, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _ThingsToDoStore2.default.listen(this.onChange);
      _ThingsToDoActions2.default.getThingsToDoData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _ThingsToDoStore2.default.unlisten(this.onChange);
    }
    //TODO: put in helper

  }, {
    key: 'isSubListItem',
    value: function isSubListItem(node) {
      return node.parent_index > 0;
    }
    //TODO: put in helper

  }, {
    key: 'isDescription',
    value: function isDescription(node) {
      return node.content_type_id == 2;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (_underscore._.isEmpty(this.state.thingsToDo)) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'Edit-Content-Button' },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'Navigation-link', to: '/things-to-do/edit' },
              'Edit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Empty-Page-Content' },
            _react2.default.createElement(
              'span',
              null,
              'There is no content yet.'
            )
          )
        );
      } else {
        var thingsToDoNodes = this.state.thingsToDo.map(function (thingToDo, index) {
          if (_this2.isSubListItem(thingToDo)) {
            if (_this2.isDescription(thingToDo)) {
              return _react2.default.createElement(
                'div',
                { key: thingToDo.sort_order, className: 'container' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-8' },
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group Sub-list-item' },
                      _react2.default.createElement(
                        'span',
                        { ref: 'description', name: 'description' },
                        ' ',
                        thingToDo.value,
                        ' '
                      )
                    )
                  )
                )
              );
            } else {
              return _react2.default.createElement(
                'div',
                { key: thingToDo.sort_order, className: 'container Link-list-item' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-6' },
                    _react2.default.createElement(
                      'div',
                      { className: 'form-group Sub-list-item' },
                      _react2.default.createElement(
                        'a',
                        { ref: 'link', name: 'link', href: thingToDo.value },
                        thingToDo.value
                      )
                    )
                  )
                )
              );
            }
          } else {
            return _react2.default.createElement(
              'div',
              { key: thingToDo.sort_order, className: thingToDo.sort_order > 1 ? 'container List-item-group Row-separator' : 'container List-item-group' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-6' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group Thing-to-do-title' },
                    _react2.default.createElement(
                      'span',
                      { ref: 'description', name: 'description' },
                      thingToDo.value
                    )
                  )
                )
              )
            );
          }
        });

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'Edit-Content-Button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { className: 'Navigation-link', to: '/things-to-do/edit' },
                'Edit'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row List-page' },
              thingsToDoNodes
            )
          )
        );
      }
    }
  }]);

  return ThingsToDo;
})(_react2.default.Component);

exports.default = ThingsToDo;

},{"../actions/ThingsToDoActions":5,"../stores/ThingsToDoStore":33,"react":"react","react-router":"react-router","underscore":54}],25:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _VenueStore = require('../stores/VenueStore');

var _VenueStore2 = _interopRequireDefault(_VenueStore);

var _VenueActions = require('../actions/VenueActions');

var _VenueActions2 = _interopRequireDefault(_VenueActions);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Venue = (function (_React$Component) {
  _inherits(Venue, _React$Component);

  function Venue(props) {
    _classCallCheck(this, Venue);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Venue).call(this, props));

    _this.state = _VenueStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Venue, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _VenueStore2.default.listen(this.onChange);
      _VenueActions2.default.getVenueData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _VenueStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      if (_underscore._.isEmpty(this.state.venue)) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'Edit-Content-Button' },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'Navigation-link', to: '/venue/edit' },
              'Edit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Empty-Page-Content' },
            _react2.default.createElement(
              'span',
              null,
              'There is no content yet.'
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'Detail' },
          _react2.default.createElement(
            'div',
            { className: 'Edit-Content-Button' },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'Navigation-link', to: '/venue/edit' },
              'Edit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Content-text' },
            _react2.default.createElement(
              'span',
              null,
              this.state.venue.name
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Content-text' },
            _react2.default.createElement(
              'span',
              null,
              ' ',
              this.state.venue.eventDate,
              ' '
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Venue-image-container' },
            _react2.default.createElement('img', { className: 'Content-large-image-percentage', src: this.state.venue.url, alt: 'Venue Image' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'List-items' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                null,
                this.state.venue.ceremonyTime
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                null,
                this.state.venue.cocktailHourTime
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                null,
                this.state.venue.receptionTime
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                null,
                this.state.venue.afterPartyTime
              )
            )
          )
        );
      }
    }
  }]);

  return Venue;
})(_react2.default.Component);

exports.default = Venue;

},{"../actions/VenueActions":6,"../stores/VenueStore":34,"react":"react","react-router":"react-router","underscore":54}],26:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PropsHelper = (function () {
  function PropsHelper() {
    _classCallCheck(this, PropsHelper);
  }

  _createClass(PropsHelper, null, [{
    key: 'convertPropsToArray',
    value: function convertPropsToArray(props) {
      var propsArray = [];

      _underscore._.each(props, function (prop) {
        propsArray.push(prop);
      });

      return propsArray;
    }
  }]);

  return PropsHelper;
})();

exports.default = PropsHelper;

},{"underscore":54}],27:[function(require,module,exports){
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

},{"./routes":28,"history/lib/createBrowserHistory":41,"react":"react","react-dom":"react-dom","react-router":"react-router"}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Venue = require('./components/Venue');

var _Venue2 = _interopRequireDefault(_Venue);

var _Accomodations = require('./components/Accomodations');

var _Accomodations2 = _interopRequireDefault(_Accomodations);

var _TheProposal = require('./components/TheProposal');

var _TheProposal2 = _interopRequireDefault(_TheProposal);

var _PhotoAlbum = require('./components/PhotoAlbum');

var _PhotoAlbum2 = _interopRequireDefault(_PhotoAlbum);

var _EditPhotoAlbum = require('./components/EditPhotoAlbum');

var _EditPhotoAlbum2 = _interopRequireDefault(_EditPhotoAlbum);

var _EditVenue = require('./components/EditVenue');

var _EditVenue2 = _interopRequireDefault(_EditVenue);

var _EditTheProposal = require('./components/EditTheProposal');

var _EditTheProposal2 = _interopRequireDefault(_EditTheProposal);

var _GiftRegistry = require('./components/GiftRegistry');

var _GiftRegistry2 = _interopRequireDefault(_GiftRegistry);

var _ThingsToDo = require('./components/ThingsToDo');

var _ThingsToDo2 = _interopRequireDefault(_ThingsToDo);

var _EditThingsToDo = require('./components/EditThingsToDo');

var _EditThingsToDo2 = _interopRequireDefault(_EditThingsToDo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/the-proposal', component: _TheProposal2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/venue', component: _Venue2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/venue/edit', component: _EditVenue2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/the-proposal/edit', component: _EditTheProposal2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/photo-album', component: _PhotoAlbum2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/photo-album/edit', component: _EditPhotoAlbum2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/accomodations', component: _Accomodations2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/gift-registry', component: _GiftRegistry2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/things-to-do', component: _ThingsToDo2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/things-to-do/edit', component: _EditThingsToDo2.default })
);

},{"./components/Accomodations":8,"./components/App":9,"./components/EditPhotoAlbum":13,"./components/EditTheProposal":14,"./components/EditThingsToDo":15,"./components/EditVenue":16,"./components/GiftRegistry":18,"./components/Home":20,"./components/PhotoAlbum":22,"./components/TheProposal":23,"./components/ThingsToDo":24,"./components/Venue":25,"react":"react","react-router":"react-router"}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = function FooterStore() {
  _classCallCheck(this, FooterStore);

  this.bindActions(_FooterActions2.default);
  this.characters = [];
}

// onGetTopCharactersSuccess(data) {
//   this.characters = data.slice(0, 5);
// }
//
// onGetTopCharactersFail(jqXhr) {
//   // Handle multiple response formats, fallback to HTTP status code number.
//   toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
// }
;

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions":1,"../alt":7}],30:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = (function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.onlineUsers = 0;
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }]);

  return NavbarStore;
})();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":2,"../alt":7}],31:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _PhotoAlbumActions = require('../actions/PhotoAlbumActions');

var _PhotoAlbumActions2 = _interopRequireDefault(_PhotoAlbumActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhotoAlbumStore = (function () {
  function PhotoAlbumStore() {
    _classCallCheck(this, PhotoAlbumStore);

    this.bindActions(_PhotoAlbumActions2.default);
    this.photoAlbum = [];
    this.isModalOpen = false;
    this.selectedPhoto = 1;
    this.ajaxAnimationClass = '';
  }

  _createClass(PhotoAlbumStore, [{
    key: 'onGetPhotoAlbumDataSuccess',
    value: function onGetPhotoAlbumDataSuccess(data) {
      console.log('onGetPhotoAlbumDataSuccess');
      if (data && data.length > 0) {
        this.photoAlbum = data;
      }
    }
  }, {
    key: 'onGetPhotoAlbumDataFail',
    value: function onGetPhotoAlbumDataFail(jqXhr) {
      onsole.log('onGetPhotoAlbumDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onSavePhotoAlbumDataSuccess',
    value: function onSavePhotoAlbumDataSuccess(history) {
      history.pushState(null, '/photo-album');
    }
  }, {
    key: 'onSavePhotoAlbumDataFail',
    value: function onSavePhotoAlbumDataFail(jqXhr) {
      onsole.log('onSavePhotoAlbumDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }]);

  return PhotoAlbumStore;
})();

exports.default = _alt2.default.createStore(PhotoAlbumStore);

},{"../actions/PhotoAlbumActions":3,"../alt":7}],32:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _TheProposalActions = require('../actions/TheProposalActions');

var _TheProposalActions2 = _interopRequireDefault(_TheProposalActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TheProposalStore = (function () {
  function TheProposalStore() {
    _classCallCheck(this, TheProposalStore);

    this.bindActions(_TheProposalActions2.default);
    this.proposal = {};
    this.ajaxAnimationClass = '';
  }

  _createClass(TheProposalStore, [{
    key: 'onGetProposalDataSuccess',
    value: function onGetProposalDataSuccess(data) {
      console.log('onGetProposalDataSuccess');
      if (data && data.length > 0) {
        var contentItems = data;
        var proposal = {
          url: contentItems[0].value,
          description: contentItems[1].value
        };
        this.proposal = proposal;
      }
    }
  }, {
    key: 'onGetProposalDataFail',
    value: function onGetProposalDataFail(jqXhr) {
      onsole.log('onGetProposalDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onSaveProposalDataSuccess',
    value: function onSaveProposalDataSuccess(history) {
      history.pushState(null, '/the-proposal');
    }
  }, {
    key: 'onUpdateUrl',
    value: function onUpdateUrl(event) {
      this.proposal.url = event.target.value;
      this.proposalValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateDescription',
    value: function onUpdateDescription(event) {
      this.proposal.description = event.target.value;
      this.descriptionValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onSaveProposalDataFail',
    value: function onSaveProposalDataFail(jqXhr) {
      onsole.log('onSaveProposalDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }]);

  return TheProposalStore;
})();

exports.default = _alt2.default.createStore(TheProposalStore);

},{"../actions/TheProposalActions":4,"../alt":7}],33:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ThingsToDoActions = require('../actions/ThingsToDoActions');

var _ThingsToDoActions2 = _interopRequireDefault(_ThingsToDoActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ThingsToDoStore = (function () {
  function ThingsToDoStore() {
    _classCallCheck(this, ThingsToDoStore);

    this.bindActions(_ThingsToDoActions2.default);
    this.thingsToDo = [];
    this.ajaxAnimationClass = '';
  }

  _createClass(ThingsToDoStore, [{
    key: 'onGetThingsToDoDataSuccess',
    value: function onGetThingsToDoDataSuccess(data) {
      console.log('onGetThingsToDoDataSuccess');
      if (data && data.length > 0) {
        this.thingsToDo = data;
      }
    }
  }, {
    key: 'onGetThingsToDoDataFail',
    value: function onGetThingsToDoDataFail(jqXhr) {
      onsole.log('onGetThingsToDoDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onSaveThingsToDoDataSuccess',
    value: function onSaveThingsToDoDataSuccess(history) {
      history.pushState(null, '/things-to-do');
    }

    // onUpdateListItem(index, event) {
    //   debugger;
    //   this.thingsToDo[index].value = event.target.value;
    //   this.pthingsToDoValidationState = '';
    //   this.helpBlock = '';
    // }

  }, {
    key: 'onSaveThingsToDoDataFail',
    value: function onSaveThingsToDoDataFail(jqXhr) {
      onsole.log('onSaveThingsToDoDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }]);

  return ThingsToDoStore;
})();

exports.default = _alt2.default.createStore(ThingsToDoStore);

},{"../actions/ThingsToDoActions":5,"../alt":7}],34:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _VenueActions = require('../actions/VenueActions');

var _VenueActions2 = _interopRequireDefault(_VenueActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VenueStore = (function () {
  function VenueStore() {
    _classCallCheck(this, VenueStore);

    this.bindActions(_VenueActions2.default);
    this.venue = {};
    this.ajaxAnimationClass = '';
  }

  _createClass(VenueStore, [{
    key: 'onGetVenueDataSuccess',
    value: function onGetVenueDataSuccess(data) {
      console.log('onGetVenueDataSuccess');
      if (data && data.length > 0) {
        var contentItems = data;
        var venue = {
          name: contentItems[0].value,
          eventDate: contentItems[1].value,
          url: contentItems[2].value,
          ceremonyTime: contentItems[3].value,
          cocktailHourTime: contentItems[4].value,
          receptionTime: contentItems[5].value,
          afterPartyTime: contentItems[6].value
        };
        this.venue = venue;
      }
    }
  }, {
    key: 'onGetVenueDataFail',
    value: function onGetVenueDataFail(jqXhr) {
      onsole.log('onGetVenueDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onSaveVenueDataSuccess',
    value: function onSaveVenueDataSuccess(history) {
      history.pushState(null, '/venue');
    }
  }, {
    key: 'onUpdateName',
    value: function onUpdateName(event) {
      this.venue.name = event.target.value;
      this.nameValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateEventDate',
    value: function onUpdateEventDate(event) {
      this.venue.eventDate = event.target.value;
      this.eventDateValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateUrl',
    value: function onUpdateUrl(event) {
      this.venue.url = event.target.value;
      this.urlValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateCeremonyTime',
    value: function onUpdateCeremonyTime(event) {
      this.venue.ceremonyTime = event.target.value;
      this.ceremonyTimeValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateCocktailHourTime',
    value: function onUpdateCocktailHourTime(event) {
      this.venue.cocktailHourTime = event.target.value;
      this.cocktailHourTimeValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateReceptionTime',
    value: function onUpdateReceptionTime(event) {
      this.venue.receptionTime = event.target.value;
      this.receptionTimeValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onUpdateAfterPartyTime',
    value: function onUpdateAfterPartyTime(event) {
      this.venue.afterPartyTime = event.target.value;
      this.afterPartyValidationState = '';
      this.helpBlock = '';
    }
  }, {
    key: 'onSaveVenueDataFail',
    value: function onSaveVenueDataFail(jqXhr) {
      onsole.log('onSaveVenueDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }]);

  return VenueStore;
})();

exports.default = _alt2.default.createStore(VenueStore);

},{"../actions/VenueActions":6,"../alt":7}],35:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
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
    var timeout = setTimeout(cleanUpNextTick);
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
    clearTimeout(timeout);
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
        setTimeout(drainQueue, 0);
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

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],36:[function(require,module,exports){
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
},{}],37:[function(require,module,exports){
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
},{}],38:[function(require,module,exports){
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
},{"_process":35,"warning":53}],39:[function(require,module,exports){
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
 * Returns true if the HTML5 history API is supported. Taken from modernizr.
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
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],40:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],41:[function(require,module,exports){
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

    return history.createLocation(path, state, undefined, key);
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
},{"./Actions":36,"./DOMStateStorage":38,"./DOMUtils":39,"./ExecutionEnvironment":40,"./createDOMHistory":42,"_process":35,"invariant":52}],42:[function(require,module,exports){
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
},{"./DOMUtils":39,"./ExecutionEnvironment":40,"./createHistory":43,"_process":35,"invariant":52}],43:[function(require,module,exports){
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
          var _getCurrentLocation = getCurrentLocation();

          var pathname = _getCurrentLocation.pathname;
          var search = _getCurrentLocation.search;

          var currentPath = pathname + search;
          var path = nextLocation.pathname + nextLocation.search;

          if (currentPath === path) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function pushState(state, path) {
    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
  }

  function push(path) {
    pushState(null, path);
  }

  function replaceState(state, path) {
    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
  }

  function replace(path) {
    replaceState(null, path);
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

  function createPath(path) {
    if (path == null || typeof path === 'string') return path;

    var pathname = path.pathname;
    var search = path.search;
    var hash = path.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(path) {
    return createPath(path);
  }

  function createLocation(path, state, action) {
    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

    return _createLocation3['default'](path, state, action, key);
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

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    pushState: pushState,
    replaceState: replaceState,
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
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":36,"./AsyncUtils":37,"./createLocation":44,"./deprecate":45,"./runTransitionHook":48,"deep-equal":49}],44:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof path === 'string') path = _parsePath2['default'](path);

  var pathname = path.pathname || '/';
  var search = path.search || '';
  var hash = path.hash || '';

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
},{"./Actions":36,"./parsePath":47}],45:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
}).call(this,require('_process'))
},{"_process":35,"warning":53}],46:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],47:[function(require,module,exports){
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
},{"./extractPath":46,"_process":35,"warning":53}],48:[function(require,module,exports){
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
},{"_process":35,"warning":53}],49:[function(require,module,exports){
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

},{"./lib/is_arguments.js":50,"./lib/keys.js":51}],50:[function(require,module,exports){
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

},{}],51:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],52:[function(require,module,exports){
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
},{"_process":35}],53:[function(require,module,exports){
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
},{"_process":35}],54:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}]},{},[27]);
