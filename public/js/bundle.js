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

},{"../alt":7,"underscore":"underscore"}],3:[function(require,module,exports){
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

},{"../alt":7,"underscore":"underscore"}],4:[function(require,module,exports){
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

    this.generateActions('getProposalDataSuccess', 'getProposalDataFail', 'saveProposalDataSuccess', 'saveVProposalDataFail',
    //'updateContent',
    //'updateDescription',
    'updateAjaxAnimation');
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

},{"../alt":7,"underscore":"underscore"}],5:[function(require,module,exports){
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

},{"../alt":7,"underscore":"underscore"}],6:[function(require,module,exports){
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

},{"../alt":7,"underscore":"underscore"}],7:[function(require,module,exports){
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

var _EmptyContent = require('../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

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
      var emptyContentProps = { editLink: '/accomodations/edit' };
      return _react2.default.createElement(_EmptyContent2.default, emptyContentProps);
    }
  }]);

  return Accomodations;
})(_react2.default.Component);

exports.default = Accomodations;

},{"../EmptyContent":9,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
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

var EmptyContent = (function (_React$Component) {
  _inherits(EmptyContent, _React$Component);

  function EmptyContent(props) {
    _classCallCheck(this, EmptyContent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmptyContent).call(this, props));
  }

  _createClass(EmptyContent, [{
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
        null,
        _react2.default.createElement(
          'div',
          { className: 'Edit-Content-Button' },
          _react2.default.createElement(
            _reactRouter.Link,
            { className: 'Navigation-link', to: this.props.editLink },
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
    }
  }]);

  return EmptyContent;
})(_react2.default.Component);

exports.default = EmptyContent;

},{"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FieldHelper = (function () {
  function FieldHelper() {
    _classCallCheck(this, FieldHelper);
  }

  _createClass(FieldHelper, null, [{
    key: 'isDescription',
    value: function isDescription(node) {
      return node.content_type_id == 2;
    }
  }]);

  return FieldHelper;
})();

exports.default = FieldHelper;

},{"underscore":"underscore"}],11:[function(require,module,exports){
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

},{"../actions/FooterActions":1,"../stores/FooterStore":48,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _EmptyContent = require('../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

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
      var emptyContentProps = { editLink: '/gift-registry/edit' };
      return _react2.default.createElement(_EmptyContent2.default, emptyContentProps);
    }
  }]);

  return GiftRegistry;
})(_react2.default.Component);

exports.default = GiftRegistry;

},{"../EmptyContent":9,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
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
            'div',
            null,
            _react2.default.createElement(_Navigation2.default, { className: 'Header-nav', history: this.props.history })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Header-brand' },
            _react2.default.createElement(
              'span',
              { className: 'Header-brandTxt' },
              'JASON & JENNA'
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            'November 5th, 2016'
          )
        )
      );
    }
  }]);

  return Header;
})(_react2.default.Component);

exports.default = Header;

},{"./Navigation":15,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
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
        { className: "Home-content" },
        _react2.default.createElement(
          "h3",
          null,
          "Middletown, CT"
        )
      );
    }
  }]);

  return Home;
})(_react2.default.Component);

exports.default = Home;

},{"react":"react"}],15:[function(require,module,exports){
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
          { className: 'Navigation-link', to: '/our-story' },
          'Our Story'
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
          { className: 'Navigation-link', to: '/things-to-do' },
          'Things To Do'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'Navigation-link', to: '/gift-registry' },
          'Gift Registry'
        )
      );
    }
  }]);

  return Navbar;
})(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":2,"../stores/NavbarStore":49,"react":"react","react-router":"react-router"}],16:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PhotoAlbumStore = require('../../stores/PhotoAlbumStore');

var _PhotoAlbumStore2 = _interopRequireDefault(_PhotoAlbumStore);

var _PhotoAlbumActions = require('../../actions/PhotoAlbumActions');

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
    key: 'removePhoto',
    value: function removePhoto(index, event) {
      this.state.photoAlbum.splice(index, 1);
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
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-2' },
              _react2.default.createElement(
                'div',
                { onClick: _this2.removePhoto.bind(_this2, index) },
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
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

},{"../../actions/PhotoAlbumActions":3,"../../stores/PhotoAlbumStore":50,"react":"react","underscore":"underscore"}],17:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PhotoAlbumStore = require('../../stores/PhotoAlbumStore');

var _PhotoAlbumStore2 = _interopRequireDefault(_PhotoAlbumStore);

var _PhotoAlbumActions = require('../../actions/PhotoAlbumActions');

var _PhotoAlbumActions2 = _interopRequireDefault(_PhotoAlbumActions);

var _Carousel = require('../Widgets/Carousel/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _EmptyContent = require('../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

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
        var emptyContentProps = { editLink: '/photo-album/edit' };
        return _react2.default.createElement(_EmptyContent2.default, emptyContentProps);
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'Content-panel' },
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

},{"../../actions/PhotoAlbumActions":3,"../../stores/PhotoAlbumStore":50,"../EmptyContent":9,"../Widgets/Carousel/Carousel":24,"react":"react","react-router":"react-router","underscore":"underscore"}],18:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TheProposalStore = require('../../stores/TheProposalStore');

var _TheProposalStore2 = _interopRequireDefault(_TheProposalStore);

var _TheProposalActions = require('../../actions/TheProposalActions');

var _TheProposalActions2 = _interopRequireDefault(_TheProposalActions);

var _LongDescription = require('../Widgets/LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _ImageWidget = require('../Widgets/Image/ImageWidget');

var _ImageWidget2 = _interopRequireDefault(_ImageWidget);

var _LongDescriptionFactory = require('../Widgets/LongDescription/LongDescriptionFactory');

var _LongDescriptionFactory2 = _interopRequireDefault(_LongDescriptionFactory);

var _ImageFactory = require('../Widgets/Image/ImageFactory');

var _ImageFactory2 = _interopRequireDefault(_ImageFactory);

var _FieldHelper = require('../Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

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
    //todo: move to actions

  }, {
    key: 'createLongDescription',
    value: function createLongDescription(event) {
      var sortOrder = this.state.contentList.length + 1;

      var longDescriptionFactory = new _LongDescriptionFactory2.default(sortOrder, 'Our Story Description', 'Our Story Description');
      var longDescription = longDescriptionFactory.create();

      this.state.contentList.push(longDescription);
      this.setState({ contentList: this.state.contentList });
    }
    //todo: move to actions

  }, {
    key: 'createImage',
    value: function createImage(event) {
      var sortOrder = this.state.contentList.length + 1;

      var imageFactory = new _ImageFactory2.default(sortOrder, 'Our Story Image', 'Our Story Image');
      var image = imageFactory.create();

      this.state.contentList.push(image);
      this.setState({ contentList: this.state.contentList });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      //TheProposalActions.saveProposalData(this.state.contentList, this.props.history);
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _TheProposalActions2.default.saveProposalData(this.state.contentList, this.props.history);
    }
  }, {
    key: 'updateContent',
    value: function updateContent(index, event) {
      this.state.contentList[index].value = event.target.value;
      this.setState({ contentList: this.state.contentList });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var theProposalNodes = this.state.contentList.map(function (contentItem, index) {
        if (_FieldHelper2.default.isDescription(contentItem)) {
          var longDescriptionProps = { value: contentItem.value, isEdit: true,
            onChange: _this2.updateContent.bind(_this2, index) };
          return _react2.default.createElement(
            'div',
            { key: contentItem.sort_order, className: 'form-group' },
            _react2.default.createElement(_LongDescription2.default, longDescriptionProps)
          );
        } else {
          var imageProps = { value: contentItem.value, isEdit: true,
            onChange: _this2.updateContent.bind(_this2, index) };
          return _react2.default.createElement(
            'div',
            { key: contentItem.sort_order, className: 'form-group' },
            _react2.default.createElement(_ImageWidget2.default, imageProps)
          );
        }
      });

      return _react2.default.createElement(
        'div',
        { className: 'Content-panel' },
        _react2.default.createElement(
          'div',
          { className: 'Content-container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-primary', onClick: this.createLongDescription.bind(this) },
                  'Create Long Description'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-primary', onClick: this.createImage.bind(this) },
                  'Create Image'
                )
              )
            )
          ),
          theProposalNodes,
          _react2.default.createElement(
            'div',
            { className: this.state.contentList.length > 0 ? 'form-group' : 'form-group hidden' },
            _react2.default.createElement(
              'button',
              { type: 'submit', onClick: this.submit.bind(this), className: 'btn btn-primary' },
              'Save'
            )
          )
        )
      );

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
                  theProposalNodes,
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

},{"../../actions/TheProposalActions":4,"../../stores/TheProposalStore":51,"../Field/FieldHelper":10,"../Widgets/Image/ImageFactory":27,"../Widgets/Image/ImageWidget":28,"../Widgets/LongDescription/LongDescription":37,"../Widgets/LongDescription/LongDescriptionFactory":39,"react":"react"}],19:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _TheProposalStore = require('../../stores/TheProposalStore');

var _TheProposalStore2 = _interopRequireDefault(_TheProposalStore);

var _TheProposalActions = require('../../actions/TheProposalActions');

var _TheProposalActions2 = _interopRequireDefault(_TheProposalActions);

var _LongDescription = require('../Widgets/LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _EmptyContent = require('../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _ImageWidget = require('../Widgets/Image/ImageWidget');

var _ImageWidget2 = _interopRequireDefault(_ImageWidget);

var _underscore = require('underscore');

var _FieldHelper = require('../Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

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
      if (_underscore._.isEmpty(this.state.contentList)) {
        var emptyContentProps = { editLink: '/our-story/edit' };
        return _react2.default.createElement(_EmptyContent2.default, emptyContentProps);
      } else {
        var theProposalNodes = this.state.contentList.map(function (contentItem, index) {
          if (_FieldHelper2.default.isDescription(contentItem)) {
            var longDescriptionProps = { value: contentItem.value, isEdit: false };
            return _react2.default.createElement(
              'div',
              { key: contentItem.sort_order },
              _react2.default.createElement(_LongDescription2.default, longDescriptionProps)
            );
          } else {
            var imageProps = { value: contentItem.value, isEdit: false };
            return _react2.default.createElement(
              'div',
              { key: contentItem.sort_order },
              _react2.default.createElement(_ImageWidget2.default, imageProps)
            );
          }
        });

        return _react2.default.createElement(
          'div',
          { className: 'Content-panel' },
          _react2.default.createElement(
            'div',
            { className: 'Content-container' },
            _react2.default.createElement(
              'div',
              { className: 'Edit-Content-Button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { className: 'Navigation-link', to: '/our-story/edit' },
                'Edit'
              )
            ),
            theProposalNodes
          )
        );
      }
    }
  }]);

  return TheProposal;
})(_react2.default.Component);

exports.default = TheProposal;

},{"../../actions/TheProposalActions":4,"../../stores/TheProposalStore":51,"../EmptyContent":9,"../Field/FieldHelper":10,"../Widgets/Image/ImageWidget":28,"../Widgets/LongDescription/LongDescription":37,"react":"react","react-router":"react-router","underscore":"underscore"}],20:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThingsToDoStore = require('../../stores/ThingsToDoStore');

var _ThingsToDoStore2 = _interopRequireDefault(_ThingsToDoStore);

var _ThingsToDoActions = require('../../actions/ThingsToDoActions');

var _ThingsToDoActions2 = _interopRequireDefault(_ThingsToDoActions);

var _SubListItem = require('../Widgets/ListItem/SubListItem');

var _SubListItem2 = _interopRequireDefault(_SubListItem);

var _ParentListItem = require('../Widgets/ListItem/ParentListItem');

var _ParentListItem2 = _interopRequireDefault(_ParentListItem);

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
    key: 'removeContent',
    value: function removeContent(index, event) {
      this.state.thingsToDo.splice(index, 1);
      this.setState({ thingsToDo: this.state.thingsToDo });
    }
  }, {
    key: 'removeContentAndItsSubListItems',
    value: function removeContentAndItsSubListItems(index, event) {
      var parentIndex = index + 1;

      var itemsToRemove = _underscore._.filter(this.state.thingsToDo, function (item) {
        return item.parent_index === parentIndex || item.sort_order === parentIndex;
      });

      var itemsToKeep = _underscore._.filter(this.state.thingsToDo, function (item) {
        return item.parent_index != parentIndex && item.sort_order != parentIndex;
      });

      this.saveNewSortOrderForAllItems(itemsToKeep, itemsToRemove);

      //this.state.thingsToDo = [];
      this.state.thingsToDo = itemsToKeep;
      this.setState({ thingsToDo: this.state.thingsToDo });

      //want to always maintain at miniumum one list item on the page
      if (this.state.thingsToDo.length == 0) {
        this.addParentListItem();
      }
    }
  }, {
    key: 'saveNewSortOrderForAllItems',
    value: function saveNewSortOrderForAllItems(itemsToKeep, itemsToRemove) {
      var lastItemIndexToRemove = itemsToRemove[itemsToRemove.length - 1].sort_order;

      for (var i = 0; i < itemsToKeep.length; i++) {
        var item = itemsToKeep[i];

        //update parent index for only sub list items past the index of the last content item removed
        if (item.sort_order > lastItemIndexToRemove) {
          if (this.isSubListItem(item)) {
            item.parent_index -= itemsToRemove.length;
          }
        }

        item.sort_order = i + 1;
      }
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
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var thingsToDoNodes = this.state.thingsToDo.map(function (thingToDo, index) {
        if (_this2.isSubListItem(thingToDo)) {
          //todo: put update list item inside list item module, same with remove content
          var subListItemProps = { listItem: thingToDo, isEdit: true,
            onChange: _this2.updateListItem.bind(_this2, index), onRemove: _this2.removeContent.bind(_this2, index) };

          return _react2.default.createElement(_SubListItem2.default, subListItemProps);
        } else {
          //todo: put onAddSubListItem inside parent list item module
          //todo: put update list item inside list item module, same with remove content
          var parentListItemProps = { isEdit: true, listItem: thingToDo,
            onAddSubListItem: _this2.addSublistItem.bind(_this2, index),
            onChange: _this2.updateListItem.bind(_this2, index),
            onRemove: _this2.removeContentAndItsSubListItems.bind(_this2, index) };

          return _react2.default.createElement(_ParentListItem2.default, parentListItemProps);
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

},{"../../actions/ThingsToDoActions":5,"../../stores/ThingsToDoStore":52,"../Widgets/ListItem/ParentListItem":31,"../Widgets/ListItem/SubListItem":34,"react":"react","underscore":"underscore"}],21:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ThingsToDoStore = require('../../stores/ThingsToDoStore');

var _ThingsToDoStore2 = _interopRequireDefault(_ThingsToDoStore);

var _ThingsToDoActions = require('../../actions/ThingsToDoActions');

var _ThingsToDoActions2 = _interopRequireDefault(_ThingsToDoActions);

var _EmptyContent = require('../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _SubListItem = require('../Widgets/ListItem/SubListItem');

var _SubListItem2 = _interopRequireDefault(_SubListItem);

var _ParentListItem = require('../Widgets/ListItem/ParentListItem');

var _ParentListItem2 = _interopRequireDefault(_ParentListItem);

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
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (_underscore._.isEmpty(this.state.thingsToDo)) {
        var emptyContentProps = { editLink: '/things-to-do/edit' };
        return _react2.default.createElement(_EmptyContent2.default, emptyContentProps);
      } else {
        var thingsToDoNodes = this.state.thingsToDo.map(function (thingToDo, index) {
          if (_this2.isSubListItem(thingToDo)) {
            var subListItemProps = { listItem: thingToDo, isEdit: false };
            return _react2.default.createElement(_SubListItem2.default, subListItemProps);
          } else {
            var listItemProps = { listItem: thingToDo, isEdit: false };
            return _react2.default.createElement(_ParentListItem2.default, listItemProps);
          }
        });

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'Content-panel' },
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

},{"../../actions/ThingsToDoActions":5,"../../stores/ThingsToDoStore":52,"../EmptyContent":9,"../Widgets/ListItem/ParentListItem":31,"../Widgets/ListItem/SubListItem":34,"react":"react","react-router":"react-router","underscore":"underscore"}],22:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VenueStore = require('../../stores/VenueStore');

var _VenueStore2 = _interopRequireDefault(_VenueStore);

var _VenueActions = require('../../actions/VenueActions');

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

},{"../../actions/VenueActions":6,"../../stores/VenueStore":53,"react":"react"}],23:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _VenueStore = require('../../stores/VenueStore');

var _VenueStore2 = _interopRequireDefault(_VenueStore);

var _VenueActions = require('../../actions/VenueActions');

var _VenueActions2 = _interopRequireDefault(_VenueActions);

var _EmptyContent = require('../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

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
        var emptyContentProps = { editLink: '/venue/edit' };
        return _react2.default.createElement(_EmptyContent2.default, emptyContentProps);
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'Content-panel' },
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
              { className: 'Content-container' },
              _react2.default.createElement(
                'div',
                { className: 'Content-short-description' },
                _react2.default.createElement(
                  'span',
                  null,
                  this.state.venue.ceremonyTime
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'Content-short-description' },
                _react2.default.createElement(
                  'span',
                  null,
                  this.state.venue.cocktailHourTime
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'Content-short-description' },
                _react2.default.createElement(
                  'span',
                  null,
                  this.state.venue.receptionTime
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'Content-short-description' },
                _react2.default.createElement(
                  'span',
                  null,
                  this.state.venue.afterPartyTime
                )
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

},{"../../actions/VenueActions":6,"../../stores/VenueStore":53,"../EmptyContent":9,"react":"react","react-router":"react-router","underscore":"underscore"}],24:[function(require,module,exports){
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

},{"./CarouselContent":25,"./CarouselIndicators":26,"react":"react","react-router":"react-router"}],25:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PropsHelper = require('../../../helpers/PropsHelper');

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

},{"../../../helpers/PropsHelper":45,"react":"react","react-router":"react-router"}],26:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PropsHelper = require('../../../helpers/PropsHelper');

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

},{"../../../helpers/PropsHelper":45,"react":"react","react-router":"react-router"}],27:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageFactory = (function () {
  function ImageFactory(sortOrder, name, description) {
    _classCallCheck(this, ImageFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
  }

  _createClass(ImageFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 1,
        sort_order: this.sortOrder
      };

      return content;
    }
  }]);

  return ImageFactory;
})();

exports.default = ImageFactory;

},{"react":"react"}],28:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ImageWidgetEdit = require('./ImageWidgetEdit');

var _ImageWidgetEdit2 = _interopRequireDefault(_ImageWidgetEdit);

var _ImageWidgetReadOnly = require('./ImageWidgetReadOnly');

var _ImageWidgetReadOnly2 = _interopRequireDefault(_ImageWidgetReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageWidget = (function (_React$Component) {
  _inherits(ImageWidget, _React$Component);

  function ImageWidget(props) {
    _classCallCheck(this, ImageWidget);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageWidget).call(this, props));
  }

  _createClass(ImageWidget, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_ImageWidgetEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_ImageWidgetReadOnly2.default, this.props);
      }
    }
  }]);

  return ImageWidget;
})(_react2.default.Component);

exports.default = ImageWidget;

},{"./ImageWidgetEdit":29,"./ImageWidgetReadOnly":30,"react":"react","react-router":"react-router"}],29:[function(require,module,exports){
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

var ImageWidgetEdit = (function (_React$Component) {
  _inherits(ImageWidgetEdit, _React$Component);

  function ImageWidgetEdit(props) {
    _classCallCheck(this, ImageWidgetEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageWidgetEdit).call(this, props));
  }

  _createClass(ImageWidgetEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { ref: 'url', className: 'form-control', name: 'url', placeholder: 'Url', value: this.props.value,
        onChange: this.props.onChange, autoFocus: true });
    }
  }]);

  return ImageWidgetEdit;
})(_react2.default.Component);

exports.default = ImageWidgetEdit;

},{"react":"react","react-router":"react-router"}],30:[function(require,module,exports){
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

var ImageWidgetReadOnly = (function (_React$Component) {
  _inherits(ImageWidgetReadOnly, _React$Component);

  function ImageWidgetReadOnly(props) {
    _classCallCheck(this, ImageWidgetReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageWidgetReadOnly).call(this, props));
  }

  _createClass(ImageWidgetReadOnly, [{
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
        { className: 'Content-image-container' },
        _react2.default.createElement('img', { className: 'Content-extra-large-image-percentage', src: this.props.value, alt: 'Image' })
      );
    }
  }]);

  return ImageWidgetReadOnly;
})(_react2.default.Component);

exports.default = ImageWidgetReadOnly;

},{"react":"react","react-router":"react-router"}],31:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ParentListItemEdit = require('./ParentListItemEdit');

var _ParentListItemEdit2 = _interopRequireDefault(_ParentListItemEdit);

var _ParentListItemReadOnly = require('./ParentListItemReadOnly');

var _ParentListItemReadOnly2 = _interopRequireDefault(_ParentListItemReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentListItem = (function (_React$Component) {
  _inherits(ParentListItem, _React$Component);

  function ParentListItem(props) {
    _classCallCheck(this, ParentListItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListItem).call(this, props));
  }

  _createClass(ParentListItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_ParentListItemEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_ParentListItemReadOnly2.default, this.props);
      }
    }
  }]);

  return ParentListItem;
})(_react2.default.Component);

exports.default = ParentListItem;

},{"./ParentListItemEdit":32,"./ParentListItemReadOnly":33,"react":"react","react-router":"react-router"}],32:[function(require,module,exports){
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

var ParentListItemEdit = (function (_React$Component) {
  _inherits(ParentListItemEdit, _React$Component);

  function ParentListItemEdit(props) {
    _classCallCheck(this, ParentListItemEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListItemEdit).call(this, props));
  }

  _createClass(ParentListItemEdit, [{
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
        { key: this.props.listItem.sort_order, className: 'container List-item-group' },
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
                { className: 'btn btn-primary', onClick: this.props.addSublistItem },
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
                value: this.props.listItem.value, onChange: this.props.onChange })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-2' },
            _react2.default.createElement(
              'div',
              { onClick: this.props.onRemove },
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
            )
          )
        )
      );
    }
  }]);

  return ParentListItemEdit;
})(_react2.default.Component);

exports.default = ParentListItemEdit;

},{"react":"react","react-router":"react-router"}],33:[function(require,module,exports){
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

var ParentListItemReadOnly = (function (_React$Component) {
  _inherits(ParentListItemReadOnly, _React$Component);

  function ParentListItemReadOnly(props) {
    _classCallCheck(this, ParentListItemReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListItemReadOnly).call(this, props));
  }

  _createClass(ParentListItemReadOnly, [{
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
        { key: this.props.listItem.sort_order, className: this.props.listItem.sort_order > 1 ? 'List-item-group Row-separator' : 'List-item-group' },
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
                this.props.listItem.value
              )
            )
          )
        )
      );
    }
  }]);

  return ParentListItemReadOnly;
})(_react2.default.Component);

exports.default = ParentListItemReadOnly;

},{"react":"react","react-router":"react-router"}],34:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _LongDescription = require('../LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _Url = require('../Url/Url');

var _Url2 = _interopRequireDefault(_Url);

var _SubListItemEdit = require('./SubListItemEdit');

var _SubListItemEdit2 = _interopRequireDefault(_SubListItemEdit);

var _SubListItemReadOnly = require('./SubListItemReadOnly');

var _SubListItemReadOnly2 = _interopRequireDefault(_SubListItemReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubListItem = (function (_React$Component) {
  _inherits(SubListItem, _React$Component);

  function SubListItem(props) {
    _classCallCheck(this, SubListItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SubListItem).call(this, props));
  }

  _createClass(SubListItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_SubListItemEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_SubListItemReadOnly2.default, this.props);
      }
    }
  }]);

  return SubListItem;
})(_react2.default.Component);

exports.default = SubListItem;

},{"../LongDescription/LongDescription":37,"../Url/Url":41,"./SubListItemEdit":35,"./SubListItemReadOnly":36,"react":"react","react-router":"react-router"}],35:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _LongDescription = require('../LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _Url = require('../Url/Url');

var _Url2 = _interopRequireDefault(_Url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubListItemEdit = (function (_React$Component) {
  _inherits(SubListItemEdit, _React$Component);

  function SubListItemEdit(props) {
    _classCallCheck(this, SubListItemEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SubListItemEdit).call(this, props));
  }

  _createClass(SubListItemEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}

    //TODO: put in helper

  }, {
    key: 'isDescription',
    value: function isDescription(node) {
      return node.content_type_id == 2;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.isDescription(this.props.listItem)) {
        //todo: extend instead of redefine parents props on to long desc props
        var longDescriptionProps = { isEdit: this.props.isEdit, value: this.props.listItem.value,
          onChange: this.props.onChange, onRemove: this.props.onRemove };
        return _react2.default.createElement(
          'div',
          { key: this.props.listItem.sort_order },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-8' },
              _react2.default.createElement(
                'div',
                { className: 'form-group Sub-list-item' },
                _react2.default.createElement(_LongDescription2.default, longDescriptionProps)
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-2' },
              _react2.default.createElement(
                'div',
                { onClick: this.props.onRemove },
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
              )
            )
          )
        );
      } else {
        var urlProps = { isEdit: this.props.isEdit, value: this.props.listItem.value,
          onChange: this.props.onChange, onRemove: this.props.onRemove };
        return _react2.default.createElement(
          'div',
          { key: this.props.listItem.sort_order, className: 'Link-list-item' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-6' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'div',
                  { className: 'Sub-list-item' },
                  _react2.default.createElement(_Url2.default, urlProps)
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-2' },
              _react2.default.createElement(
                'div',
                { onClick: this.props.onRemove },
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' })
              )
            )
          )
        );
      }
    }
  }]);

  return SubListItemEdit;
})(_react2.default.Component);

exports.default = SubListItemEdit;

},{"../LongDescription/LongDescription":37,"../Url/Url":41,"react":"react","react-router":"react-router"}],36:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _LongDescription = require('../LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _Url = require('../Url/Url');

var _Url2 = _interopRequireDefault(_Url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubListItemReadOnly = (function (_React$Component) {
  _inherits(SubListItemReadOnly, _React$Component);

  function SubListItemReadOnly(props) {
    _classCallCheck(this, SubListItemReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SubListItemReadOnly).call(this, props));
  }

  _createClass(SubListItemReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}

    //TODO: put in helper

  }, {
    key: 'isDescription',
    value: function isDescription(node) {
      return node.content_type_id == 2;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.isDescription(this.props.listItem)) {
        var longDescriptionProps = { isEdit: this.props.isEdit, value: this.props.listItem.value };
        return _react2.default.createElement(
          'div',
          { key: this.props.listItem.sort_order },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-8' },
              _react2.default.createElement(
                'div',
                { className: 'form-group Sub-list-item' },
                _react2.default.createElement(_LongDescription2.default, longDescriptionProps)
              )
            )
          )
        );
      } else {
        var urlProps = { isEdit: this.props.isEdit, value: this.props.listItem.value };
        return _react2.default.createElement(
          'div',
          { key: this.props.listItem.sort_order, className: 'Link-list-item' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-6' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement(
                  'div',
                  { className: 'Sub-list-item' },
                  _react2.default.createElement(_Url2.default, urlProps)
                )
              )
            )
          )
        );
      }
    }
  }]);

  return SubListItemReadOnly;
})(_react2.default.Component);

exports.default = SubListItemReadOnly;

},{"../LongDescription/LongDescription":37,"../Url/Url":41,"react":"react","react-router":"react-router"}],37:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _LongDescriptionEdit = require('./LongDescriptionEdit');

var _LongDescriptionEdit2 = _interopRequireDefault(_LongDescriptionEdit);

var _LongDescriptionReadOnly = require('./LongDescriptionReadOnly');

var _LongDescriptionReadOnly2 = _interopRequireDefault(_LongDescriptionReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LongDescription = (function (_React$Component) {
  _inherits(LongDescription, _React$Component);

  function LongDescription(props) {
    _classCallCheck(this, LongDescription);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LongDescription).call(this, props));
  }

  _createClass(LongDescription, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_LongDescriptionEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_LongDescriptionReadOnly2.default, this.props);
      }
    }
  }]);

  return LongDescription;
})(_react2.default.Component);

exports.default = LongDescription;

},{"./LongDescriptionEdit":38,"./LongDescriptionReadOnly":40,"react":"react","react-router":"react-router"}],38:[function(require,module,exports){
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

var LongDescriptionEdit = (function (_React$Component) {
  _inherits(LongDescriptionEdit, _React$Component);

  function LongDescriptionEdit(props) {
    _classCallCheck(this, LongDescriptionEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LongDescriptionEdit).call(this, props));
  }

  _createClass(LongDescriptionEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('textarea', { className: 'form-control',
        value: this.props.value, onChange: this.props.onChange });
    }
  }]);

  return LongDescriptionEdit;
})(_react2.default.Component);

exports.default = LongDescriptionEdit;

},{"react":"react","react-router":"react-router"}],39:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LongDescriptionFactory = (function () {
  function LongDescriptionFactory(sortOrder, name, description) {
    _classCallCheck(this, LongDescriptionFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
  }

  _createClass(LongDescriptionFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 2,
        sort_order: this.sortOrder
      };

      return content;
    }
  }]);

  return LongDescriptionFactory;
})();

exports.default = LongDescriptionFactory;

},{"react":"react"}],40:[function(require,module,exports){
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

var LongDescriptionReadOnly = (function (_React$Component) {
  _inherits(LongDescriptionReadOnly, _React$Component);

  function LongDescriptionReadOnly(props) {
    _classCallCheck(this, LongDescriptionReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LongDescriptionReadOnly).call(this, props));
  }

  _createClass(LongDescriptionReadOnly, [{
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
        { className: 'Content-long-description-container' },
        _react2.default.createElement(
          'div',
          { className: 'Content-long-description' },
          this.props.value
        )
      );
    }
  }]);

  return LongDescriptionReadOnly;
})(_react2.default.Component);

exports.default = LongDescriptionReadOnly;

},{"react":"react","react-router":"react-router"}],41:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _UrlEdit = require('./UrlEdit');

var _UrlEdit2 = _interopRequireDefault(_UrlEdit);

var _UrlReadOnly = require('./UrlReadOnly');

var _UrlReadOnly2 = _interopRequireDefault(_UrlReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Url = (function (_React$Component) {
  _inherits(Url, _React$Component);

  function Url(props) {
    _classCallCheck(this, Url);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Url).call(this, props));
  }

  _createClass(Url, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_UrlEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_UrlReadOnly2.default, this.props);
      }
    }
  }]);

  return Url;
})(_react2.default.Component);

exports.default = Url;

},{"./UrlEdit":42,"./UrlReadOnly":43,"react":"react","react-router":"react-router"}],42:[function(require,module,exports){
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

var UrlEdit = (function (_React$Component) {
  _inherits(UrlEdit, _React$Component);

  function UrlEdit(props) {
    _classCallCheck(this, UrlEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(UrlEdit).call(this, props));
  }

  _createClass(UrlEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { className: 'form-control', type: 'text', value: this.props.value, onChange: this.props.onChange });
    }
  }]);

  return UrlEdit;
})(_react2.default.Component);

exports.default = UrlEdit;

},{"react":"react","react-router":"react-router"}],43:[function(require,module,exports){
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

var UrlReadOnly = (function (_React$Component) {
  _inherits(UrlReadOnly, _React$Component);

  function UrlReadOnly(props) {
    _classCallCheck(this, UrlReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(UrlReadOnly).call(this, props));
  }

  _createClass(UrlReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { ref: 'link', name: 'link', href: this.props.value },
        this.props.value
      );
    }
  }]);

  return UrlReadOnly;
})(_react2.default.Component);

exports.default = UrlReadOnly;

},{"react":"react","react-router":"react-router"}],44:[function(require,module,exports){
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
        { className: 'App-container' },
        _react2.default.createElement(_Header2.default, null),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'Backdrop' },
          _react2.default.createElement('div', { className: 'fixed-container' })
        )
      );
    }
  }]);

  return App;
})(_react2.default.Component);

exports.default = App;

},{"./Footer":11,"./Header":13,"react":"react"}],45:[function(require,module,exports){
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

},{"underscore":"underscore"}],46:[function(require,module,exports){
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

},{"./routes":47,"history/lib/createBrowserHistory":60,"react":"react","react-dom":"react-dom","react-router":"react-router"}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Venue = require('./components/Venue/Venue');

var _Venue2 = _interopRequireDefault(_Venue);

var _EditVenue = require('./components/Venue/EditVenue');

var _EditVenue2 = _interopRequireDefault(_EditVenue);

var _Accomodations = require('./components/Accomodations/Accomodations');

var _Accomodations2 = _interopRequireDefault(_Accomodations);

var _TheProposal = require('./components/TheProposal/TheProposal');

var _TheProposal2 = _interopRequireDefault(_TheProposal);

var _EditTheProposal = require('./components/TheProposal/EditTheProposal');

var _EditTheProposal2 = _interopRequireDefault(_EditTheProposal);

var _PhotoAlbum = require('./components/PhotoAlbum/PhotoAlbum');

var _PhotoAlbum2 = _interopRequireDefault(_PhotoAlbum);

var _EditPhotoAlbum = require('./components/PhotoAlbum/EditPhotoAlbum');

var _EditPhotoAlbum2 = _interopRequireDefault(_EditPhotoAlbum);

var _GiftRegistry = require('./components/GiftRegistry/GiftRegistry');

var _GiftRegistry2 = _interopRequireDefault(_GiftRegistry);

var _ThingsToDo = require('./components/ThingsToDo/ThingsToDo');

var _ThingsToDo2 = _interopRequireDefault(_ThingsToDo);

var _EditThingsToDo = require('./components/ThingsToDo/EditThingsToDo');

var _EditThingsToDo2 = _interopRequireDefault(_EditThingsToDo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _app2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/our-story', component: _TheProposal2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/venue', component: _Venue2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/venue/edit', component: _EditVenue2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/our-story/edit', component: _EditTheProposal2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/photo-album', component: _PhotoAlbum2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/photo-album/edit', component: _EditPhotoAlbum2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/accomodations', component: _Accomodations2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/gift-registry', component: _GiftRegistry2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/things-to-do', component: _ThingsToDo2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/things-to-do/edit', component: _EditThingsToDo2.default })
);

},{"./components/Accomodations/Accomodations":8,"./components/GiftRegistry/GiftRegistry":12,"./components/Home":14,"./components/PhotoAlbum/EditPhotoAlbum":16,"./components/PhotoAlbum/PhotoAlbum":17,"./components/TheProposal/EditTheProposal":18,"./components/TheProposal/TheProposal":19,"./components/ThingsToDo/EditThingsToDo":20,"./components/ThingsToDo/ThingsToDo":21,"./components/Venue/EditVenue":22,"./components/Venue/Venue":23,"./components/app":44,"react":"react","react-router":"react-router"}],48:[function(require,module,exports){
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

},{"../actions/FooterActions":1,"../alt":7}],49:[function(require,module,exports){
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

},{"../actions/NavbarActions":2,"../alt":7}],50:[function(require,module,exports){
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

},{"../actions/PhotoAlbumActions":3,"../alt":7}],51:[function(require,module,exports){
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
    this.contentList = [];
    this.ajaxAnimationClass = '';
  }

  _createClass(TheProposalStore, [{
    key: 'onGetProposalDataSuccess',
    value: function onGetProposalDataSuccess(data) {
      console.log('onGetProposalDataSuccess');
      if (data && data.length > 0) {
        this.contentList = data;
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
      history.pushState(null, '/our-story');
    }

    // onUpdateDescription(event) {
    //   this.proposal.description = event.target.value;
    //   //this.descriptionValidationState = '';
    //   //this.helpBlock = '';
    // }

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

},{"../actions/TheProposalActions":4,"../alt":7}],52:[function(require,module,exports){
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

},{"../actions/ThingsToDoActions":5,"../alt":7}],53:[function(require,module,exports){
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

},{"../actions/VenueActions":6,"../alt":7}],54:[function(require,module,exports){
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

},{}],55:[function(require,module,exports){
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
},{}],56:[function(require,module,exports){
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
},{}],57:[function(require,module,exports){
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
},{"_process":54,"warning":72}],58:[function(require,module,exports){
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
},{}],59:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],60:[function(require,module,exports){
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
},{"./Actions":55,"./DOMStateStorage":57,"./DOMUtils":58,"./ExecutionEnvironment":59,"./createDOMHistory":61,"_process":54,"invariant":71}],61:[function(require,module,exports){
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
},{"./DOMUtils":58,"./ExecutionEnvironment":59,"./createHistory":62,"_process":54,"invariant":71}],62:[function(require,module,exports){
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
},{"./Actions":55,"./AsyncUtils":56,"./createLocation":63,"./deprecate":64,"./runTransitionHook":67,"deep-equal":68}],63:[function(require,module,exports){
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
},{"./Actions":55,"./parsePath":66}],64:[function(require,module,exports){
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
},{"_process":54,"warning":72}],65:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],66:[function(require,module,exports){
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
},{"./extractPath":65,"_process":54,"warning":72}],67:[function(require,module,exports){
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
},{"_process":54,"warning":72}],68:[function(require,module,exports){
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

},{"./lib/is_arguments.js":69,"./lib/keys.js":70}],69:[function(require,module,exports){
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

},{}],70:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],71:[function(require,module,exports){
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
},{"_process":54}],72:[function(require,module,exports){
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
},{"_process":54}]},{},[46]);
