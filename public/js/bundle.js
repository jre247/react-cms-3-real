(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var API = (function () {
  function API() {
    _classCallCheck(this, API);
  }

  _createClass(API, [{
    key: 'onFail',
    value: function onFail(jqXhr) {
      onsole.log('onGetThingsToDoDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }], [{
    key: 'saveContentListForPage',
    value: function saveContentListForPage(contentList, pageId, history) {
      var _this = this;

      var promise = $.Deferred();

      $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: { contents: contentList }
      }).done(function (data) {
        promise.resolve(data);
      }).fail(function (jqXhr) {
        promise.reject(_this.onFail(jqXhr.responseJSON.message));
      });

      return promise.promise();
    }
  }, {
    key: 'getContentListForPage',
    value: function getContentListForPage(pageId) {
      var _this2 = this;

      var promise = $.Deferred();

      $.ajax({
        url: '/api/pages/' + pageId
      }).done(function (data) {
        promise.resolve(data);
      }).fail(function (jqXhr) {
        promise.reject(_this2.onFail(jqXhr.responseJSON.message));
      });

      return promise.promise();
    }
  }]);

  return API;
})();

exports.default = API;

},{"underscore":"underscore"}],2:[function(require,module,exports){
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

},{"../alt":9}],3:[function(require,module,exports){
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

var pageId = 5;

var GiftRegistryActions = (function () {
  function GiftRegistryActions() {
    _classCallCheck(this, GiftRegistryActions);

    this.generateActions('getContentListDataSuccess', 'getContentListDataFail', 'saveContentListDataSuccess', 'saveContentListDataFail', 'updateAjaxAnimation');
  }

  _createClass(GiftRegistryActions, [{
    key: 'getContentListData',
    value: function getContentListData() {
      var _this = this;

      console.log('getting page content for page: ' + pageId);
      $.ajax({
        url: '/api/pages/' + pageId
      }).done(function (data) {
        console.log('getContentListDataSuccess(data)');
        _this.actions.getContentListDataSuccess(data);
      }).fail(function () {
        _this.actions.getContentListDataFail();
      });
    }
  }, {
    key: 'saveContentListData',
    value: function saveContentListData(contents, history) {
      var _this2 = this;

      $.ajax({
        type: 'POST',
        url: '/api/pages/' + pageId,
        data: { contents: contents }
      }).done(function (data) {
        _this2.actions.saveContentListDataSuccess(data.message, history);
      }).fail(function (jqXhr) {
        _this2.actions.saveContentListDataFail(jqXhr.responseJSON.message);
      });
    }
  }]);

  return GiftRegistryActions;
})();

exports.default = _alt2.default.createActions(GiftRegistryActions);

},{"../alt":9,"underscore":"underscore"}],4:[function(require,module,exports){
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

},{"../alt":9,"underscore":"underscore"}],5:[function(require,module,exports){
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

},{"../alt":9,"underscore":"underscore"}],6:[function(require,module,exports){
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

},{"../alt":9,"underscore":"underscore"}],7:[function(require,module,exports){
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

},{"../alt":9,"underscore":"underscore"}],8:[function(require,module,exports){
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

    this.generateActions('getVenueDataSuccess', 'getVenueDataFail', 'saveVenueDataSuccess', 'saveVenueDataFail', 'updateAfterPartyTime', 'updateAjaxAnimation');
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

},{"../alt":9,"underscore":"underscore"}],9:[function(require,module,exports){
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

},{"../EmptyContent":13,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ListGridTemplate = require('../Templates/ListGridTemplate/ListGridTemplate');

var _ListGridTemplate2 = _interopRequireDefault(_ListGridTemplate);

var _underscore = require('underscore');

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BridalParty = (function (_React$Component) {
  _inherits(BridalParty, _React$Component);

  function BridalParty(props) {
    _classCallCheck(this, BridalParty);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BridalParty).call(this, props));

    _this.state = { contentList: [] };
    _this.pageId = 7;
    return _this;
  }

  _createClass(BridalParty, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _API2.default.getContentListForPage(this.pageId).then(function (contentList) {
        self.setState({ contentList: contentList });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var propsData = { isEdit: false, contentList: this.state.contentList, editLink: '/bridal-party/edit' };
      return _react2.default.createElement(_ListGridTemplate2.default, propsData);
    }
  }]);

  return BridalParty;
})(_react2.default.Component);

exports.default = BridalParty;

},{"../../API":1,"../Templates/ListGridTemplate/ListGridTemplate":27,"react":"react","react-router":"react-router","underscore":"underscore"}],12:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _ListGridTemplate = require('../Templates/ListGridTemplate/ListGridTemplate');

var _ListGridTemplate2 = _interopRequireDefault(_ListGridTemplate);

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditBridalParty = (function (_React$Component) {
  _inherits(EditBridalParty, _React$Component);

  function EditBridalParty(props) {
    _classCallCheck(this, EditBridalParty);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditBridalParty).call(this, props));

    _this.state = { contentList: [] };
    _this.pageId = 7;
    return _this;
  }

  _createClass(EditBridalParty, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _API2.default.getContentListForPage(this.pageId).then(function (contentList) {
        self.setState({ contentList: contentList });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'setStateForContentList',
    value: function setStateForContentList(newContentList) {
      this.setState({ contentList: newContentList });
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _API2.default.saveContentListForPage(this.state.contentList, this.pageId, this.props.history);
    }
  }, {
    key: 'render',
    value: function render() {
      var propsData = { isEdit: true, contentList: this.state.contentList, editLink: '/bridal-party/edit',
        setStateForContentList: this.setStateForContentList.bind(this) };

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
              'div',
              { className: 'row List-container' },
              _react2.default.createElement(_ListGridTemplate2.default, propsData)
            ),
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
        )
      );
    }
  }]);

  return EditBridalParty;
})(_react2.default.Component);

exports.default = EditBridalParty;

},{"../../API":1,"../Templates/ListGridTemplate/ListGridTemplate":27,"react":"react","underscore":"underscore"}],13:[function(require,module,exports){
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
          { className: !this.props.isEdit ? "Edit-Content-Button" : "hidden" },
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

},{"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
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

},{"../actions/FooterActions":2,"../stores/FooterStore":86,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GiftRegistryStore = require('../../stores/GiftRegistryStore');

var _GiftRegistryStore2 = _interopRequireDefault(_GiftRegistryStore);

var _GiftRegistryActions = require('../../actions/GiftRegistryActions');

var _GiftRegistryActions2 = _interopRequireDefault(_GiftRegistryActions);

var _underscore = require('underscore');

var _ListTemplate = require('../Templates/ListTemplate/ListTemplate');

var _ListTemplate2 = _interopRequireDefault(_ListTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditGiftRegistry = (function (_React$Component) {
  _inherits(EditGiftRegistry, _React$Component);

  function EditGiftRegistry(props) {
    _classCallCheck(this, EditGiftRegistry);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditGiftRegistry).call(this, props));

    _this.state = _GiftRegistryStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(EditGiftRegistry, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _GiftRegistryStore2.default.listen(this.onChange);
      _GiftRegistryActions2.default.getContentListData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _GiftRegistryStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'setStateForContentList',
    value: function setStateForContentList() {
      this.setState({ contentList: this.state.contentList });
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _GiftRegistryActions2.default.saveContentListData(this.state.contentList, this.props.history);
    }
  }, {
    key: 'render',
    value: function render() {
      var propsData = { isEdit: true, contentList: this.state.contentList, editLink: '/gift-registry/edit',
        setStateForContentList: this.setStateForContentList.bind(this) };

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
              'div',
              { className: 'row List-container' },
              _react2.default.createElement(_ListTemplate2.default, propsData)
            ),
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
        )
      );
    }
  }]);

  return EditGiftRegistry;
})(_react2.default.Component);

exports.default = EditGiftRegistry;

},{"../../actions/GiftRegistryActions":3,"../../stores/GiftRegistryStore":87,"../Templates/ListTemplate/ListTemplate":28,"react":"react","underscore":"underscore"}],16:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _GiftRegistryStore = require('../../stores/GiftRegistryStore');

var _GiftRegistryStore2 = _interopRequireDefault(_GiftRegistryStore);

var _GiftRegistryActions = require('../../actions/GiftRegistryActions');

var _GiftRegistryActions2 = _interopRequireDefault(_GiftRegistryActions);

var _ListTemplate = require('../Templates/ListTemplate/ListTemplate');

var _ListTemplate2 = _interopRequireDefault(_ListTemplate);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GiftRegistry = (function (_React$Component) {
  _inherits(GiftRegistry, _React$Component);

  function GiftRegistry(props) {
    _classCallCheck(this, GiftRegistry);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GiftRegistry).call(this, props));

    _this.state = _GiftRegistryStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(GiftRegistry, [{
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _GiftRegistryStore2.default.listen(this.onChange);
      _GiftRegistryActions2.default.getContentListData();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _GiftRegistryStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var propsData = { isEdit: false, contentList: this.state.contentList, editLink: '/gift-registry/edit' };
      return _react2.default.createElement(_ListTemplate2.default, propsData);
    }
  }]);

  return GiftRegistry;
})(_react2.default.Component);

exports.default = GiftRegistry;

},{"../../actions/GiftRegistryActions":3,"../../stores/GiftRegistryStore":87,"../Templates/ListTemplate/ListTemplate":28,"react":"react","react-router":"react-router","underscore":"underscore"}],17:[function(require,module,exports){
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

},{"./Navigation":21,"react":"react","react-router":"react-router"}],18:[function(require,module,exports){
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

},{"react":"react"}],19:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _ListTemplate = require('../Templates/ListTemplate/ListTemplate');

var _ListTemplate2 = _interopRequireDefault(_ListTemplate);

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditHowToGetThere = (function (_React$Component) {
  _inherits(EditHowToGetThere, _React$Component);

  function EditHowToGetThere(props) {
    _classCallCheck(this, EditHowToGetThere);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditHowToGetThere).call(this, props));

    _this.state = { contentList: [] };
    _this.pageId = 6;
    return _this;
  }

  _createClass(EditHowToGetThere, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _API2.default.getContentListForPage(this.pageId).then(function (contentList) {
        self.setState({ contentList: contentList });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'setStateForContentList',
    value: function setStateForContentList() {
      this.setState({ contentList: this.state.contentList });
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _API2.default.saveContentListForPage(this.state.contentList, this.pageId, this.props.history);
    }
  }, {
    key: 'render',
    value: function render() {
      var propsData = { isEdit: true, contentList: this.state.contentList, editLink: '/how-to-get-there/edit',
        setStateForContentList: this.setStateForContentList.bind(this) };

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
              'div',
              { className: 'row List-container' },
              _react2.default.createElement(_ListTemplate2.default, propsData)
            ),
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
        )
      );
    }
  }]);

  return EditHowToGetThere;
})(_react2.default.Component);

exports.default = EditHowToGetThere;

},{"../../API":1,"../Templates/ListTemplate/ListTemplate":28,"react":"react","underscore":"underscore"}],20:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ListTemplate = require('../Templates/ListTemplate/ListTemplate');

var _ListTemplate2 = _interopRequireDefault(_ListTemplate);

var _underscore = require('underscore');

var _API = require('../../API');

var _API2 = _interopRequireDefault(_API);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HowToGetThere = (function (_React$Component) {
  _inherits(HowToGetThere, _React$Component);

  function HowToGetThere(props) {
    _classCallCheck(this, HowToGetThere);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HowToGetThere).call(this, props));

    _this.state = { contentList: [] };
    _this.pageId = 6;
    return _this;
  }

  _createClass(HowToGetThere, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      _API2.default.getContentListForPage(this.pageId).then(function (contentList) {
        self.setState({ contentList: contentList });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var propsData = { isEdit: false, contentList: this.state.contentList, editLink: '/how-to-get-there/edit' };
      return _react2.default.createElement(_ListTemplate2.default, propsData);
    }
  }]);

  return HowToGetThere;
})(_react2.default.Component);

exports.default = HowToGetThere;

},{"../../API":1,"../Templates/ListTemplate/ListTemplate":28,"react":"react","react-router":"react-router","underscore":"underscore"}],21:[function(require,module,exports){
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
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'Navigation-link', to: '/how-to-get-there' },
          'How to get there'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'Navigation-link', to: '/bridal-party' },
          'Bridal Party'
        )
      );
    }
  }]);

  return Navbar;
})(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":4,"../stores/NavbarStore":88,"react":"react","react-router":"react-router"}],22:[function(require,module,exports){
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

var _PhotoAlbumTemplate = require('../Templates/PhotoAlbumTemplate/PhotoAlbumTemplate');

var _PhotoAlbumTemplate2 = _interopRequireDefault(_PhotoAlbumTemplate);

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
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      //PhotoAlbumActions.savePhotoAlbumData(this.state.photoAlbum, this.props.history);
    }
  }, {
    key: 'setStateForContentList',
    value: function setStateForContentList() {
      this.setState({ contentList: this.state.contentList });
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _PhotoAlbumActions2.default.savePhotoAlbumData(this.state.contentList, this.props.history);
    }
  }, {
    key: 'render',
    value: function render() {
      var propsData = { contentList: this.state.contentList, selectedPhoto: this.state.selectedPhoto, isEdit: true,
        submit: this.submit.bind(this), setStateForContentList: this.setStateForContentList.bind(this) };
      return _react2.default.createElement(_PhotoAlbumTemplate2.default, propsData);
    }
  }]);

  return EditPhotoAlbum;
})(_react2.default.Component);

exports.default = EditPhotoAlbum;

},{"../../actions/PhotoAlbumActions":5,"../../stores/PhotoAlbumStore":89,"../Templates/PhotoAlbumTemplate/PhotoAlbumTemplate":29,"react":"react","underscore":"underscore"}],23:[function(require,module,exports){
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

var _PhotoAlbumTemplate = require('../Templates/PhotoAlbumTemplate/PhotoAlbumTemplate');

var _PhotoAlbumTemplate2 = _interopRequireDefault(_PhotoAlbumTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

    //TODO: create field component that will figure out what kind of field to render

  }, {
    key: 'render',
    value: function render() {
      var propsData = { contentList: this.state.contentList, selectedPhoto: this.state.selectedPhoto, editLink: '/photo-album/edit',
        isEdit: false, imageSize: 'small' };
      return _react2.default.createElement(_PhotoAlbumTemplate2.default, propsData);
    }
  }]);

  return PhotoAlbum;
})(_react2.default.Component);

exports.default = PhotoAlbum;

},{"../../actions/PhotoAlbumActions":5,"../../stores/PhotoAlbumStore":89,"../Templates/PhotoAlbumTemplate/PhotoAlbumTemplate":29,"react":"react"}],24:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _BasicTemplateEdit = require('./BasicTemplateEdit');

var _BasicTemplateEdit2 = _interopRequireDefault(_BasicTemplateEdit);

var _BasicTemplateReadOnly = require('./BasicTemplateReadOnly');

var _BasicTemplateReadOnly2 = _interopRequireDefault(_BasicTemplateReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicTemplate = (function (_React$Component) {
  _inherits(BasicTemplate, _React$Component);

  function BasicTemplate(props) {
    _classCallCheck(this, BasicTemplate);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BasicTemplate).call(this, props));
  }

  _createClass(BasicTemplate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_BasicTemplateEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_BasicTemplateReadOnly2.default, this.props);
      }
    }
  }]);

  return BasicTemplate;
})(_react2.default.Component);

exports.default = BasicTemplate;

},{"./BasicTemplateEdit":25,"./BasicTemplateReadOnly":26,"react":"react","react-router":"react-router"}],25:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _underscore = require('underscore');

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

var _TemplateHelper = require('../TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicTemplateEdit = (function (_React$Component) {
  _inherits(BasicTemplateEdit, _React$Component);

  function BasicTemplateEdit(props) {
    _classCallCheck(this, BasicTemplateEdit);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BasicTemplateEdit).call(this, props));

    _this.templateId = 1;
    return _this;
  }

  _createClass(BasicTemplateEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'onAddWidgetToContentList',
    value: function onAddWidgetToContentList(factoryInstance) {
      this.props.contentList.push(factoryInstance);
      _TemplateHelper2.default.setNewSortOrderForAllListItems(this.props.contentList);
      this.props.setStateForContentList();
    }
  }, {
    key: 'updateContent',
    value: function updateContent(index, event) {
      this.props.contentList[index].value = event.target.value;
      this.props.setStateForContentList();
    }
  }, {
    key: 'removeContent',
    value: function removeContent(index, event) {
      this.props.contentList.splice(index, 1);
      this.props.setStateForContentList();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var widgetListPropsData = { onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this), templateId: this.templateId };

      var nodes = this.props.contentList.map(function (contentItem, index) {
        var propsData = { contentItem: contentItem, isEdit: true,
          onChange: _this2.updateContent.bind(_this2, index),
          onRemove: _this2.removeContent.bind(_this2, index) };

        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order },
          _react2.default.createElement(_Field2.default, propsData)
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'Content-panel' },
        _react2.default.createElement(
          'div',
          { className: 'Content-container' },
          _react2.default.createElement(_WidgetSelectList2.default, widgetListPropsData),
          nodes,
          _react2.default.createElement(
            'div',
            { className: this.props.contentList.length > 0 ? 'form-group' : 'form-group hidden' },
            _react2.default.createElement(
              'button',
              { type: 'submit', onClick: this.props.submit, className: 'btn btn-primary' },
              'Save'
            )
          )
        )
      );
    }
  }]);

  return BasicTemplateEdit;
})(_react2.default.Component);

exports.default = BasicTemplateEdit;

},{"../../EmptyContent":13,"../../Widgets/Field/Field":42,"../../Widgets/WidgetSelectList":81,"../TemplateHelper":32,"react":"react","react-router":"react-router","underscore":"underscore"}],26:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicTemplateReadOnly = (function (_React$Component) {
  _inherits(BasicTemplateReadOnly, _React$Component);

  function BasicTemplateReadOnly(props) {
    _classCallCheck(this, BasicTemplateReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BasicTemplateReadOnly).call(this, props));
  }

  _createClass(BasicTemplateReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (_underscore._.isEmpty(this.props.contentList)) {
        var emptyContentProps = { editLink: this.props.editLink };
        return _react2.default.createElement(_EmptyContent2.default, emptyContentProps);
      } else {
        var nodes = this.props.contentList.map(function (contentItem, index) {
          var propsData = { contentItem: contentItem, isEdit: _this2.props.isEdit };

          return _react2.default.createElement(
            'div',
            { key: contentItem.sort_order },
            _react2.default.createElement(_Field2.default, propsData)
          );
        });

        return _react2.default.createElement(
          'div',
          { className: 'Content-panel' },
          _react2.default.createElement(
            'div',
            { className: 'Content-container Content-centered-container' },
            _react2.default.createElement(
              'div',
              { className: 'Edit-Content-Button' },
              _react2.default.createElement(
                _reactRouter.Link,
                { className: 'Navigation-link', to: this.props.editLink },
                'Edit'
              )
            ),
            nodes
          )
        );
      }
    }
  }]);

  return BasicTemplateReadOnly;
})(_react2.default.Component);

exports.default = BasicTemplateReadOnly;

},{"../../EmptyContent":13,"../../Widgets/Field/Field":42,"react":"react","react-router":"react-router","underscore":"underscore"}],27:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _ListGridGroup = require('../../Widgets/ListGridItem/ListGridGroup');

var _ListGridGroup2 = _interopRequireDefault(_ListGridGroup);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _underscore = require('underscore');

var _LongDescriptionFactory = require('../../Widgets/LongDescription/LongDescriptionFactory');

var _LongDescriptionFactory2 = _interopRequireDefault(_LongDescriptionFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGridTemplate = (function (_React$Component) {
  _inherits(ListGridTemplate, _React$Component);

  function ListGridTemplate(props) {
    _classCallCheck(this, ListGridTemplate);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListGridTemplate).call(this, props));

    _this.state = { contentGroupList: [] };
    _this.templateId = 5;
    return _this;
  }

  _createClass(ListGridTemplate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'updateContent',
    value: function updateContent(index, event) {
      this.props.contentList[index].value = event.target.value;
      this.props.setStateForContentList();
    }
  }, {
    key: 'removeContent',
    value: function removeContent(index, event) {
      this.props.contentList.splice(index, 1);
      _TemplateHelper2.default.setNewSortOrderForAllListItems(this.props.contentList);
      this.props.setStateForContentList();
    }
  }, {
    key: 'addParentListItem',
    value: function addParentListItem() {
      var sortOrder = this.props.contentList.length + 1;
      var longDescriptionFactory = new _LongDescriptionFactory2.default(sortOrder, 'List Parent Item', 'List Parent Item', this.templateId);
      var longDescription = longDescriptionFactory.create();

      var newGroup = { parentListItem: longDescription, columns: [], rows: [] };
      this.state.contentGroupList.push(newGroup);
      this.setStateForContentGroupList();
    }
  }, {
    key: 'setStateForContentGroupList',
    value: function setStateForContentGroupList() {
      debugger;
      var newContentList = [];

      _underscore._.each(this.state.contentGroupList, function (group, index) {
        _underscore._.each(group.rows, function (row, index) {
          _underscore._.each(row.columns, function (column, index) {
            _underscore._.each(column.contentList, function (contentItem, index) {
              debugger;
              newContentList.push(contentItem);
            });
          });
        });
      });

      this.setState({ contentGroupList: this.state.contentGroupList });
      this.props.setStateForContentList(newContentList);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (_underscore._.isEmpty(this.state.contentGroupList)) {
        var emptyContentProps = _underscore._.extend({ editLink: this.props.editLink }, this.props);
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: !this.props.isEdit ? "hidden" : "" },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-primary', onClick: this.addParentListItem.bind(this) },
              'Add'
            )
          ),
          _react2.default.createElement(_EmptyContent2.default, emptyContentProps)
        );
      } else {
        var nodes = this.state.contentGroupList.map(function (contentGroupItem, index) {
          var propsData = {
            contentGroupItem: contentGroupItem, isEdit: _this2.props.isEdit,
            setStateForContentGroupList: _this2.setStateForContentGroupList.bind(_this2, index),
            templateId: _this2.templateId,
            contentGroupIndex: index
          };
          var listItemProps = _underscore._.extend(propsData, _this2.props);

          return _react2.default.createElement(
            'div',
            { key: index },
            _react2.default.createElement(_ListGridGroup2.default, listItemProps)
          );
        });

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'Content-panel List-template' },
            _react2.default.createElement(
              'div',
              { className: !this.props.isEdit ? "Edit-Content-Button" : "hidden" },
              _react2.default.createElement(
                _reactRouter.Link,
                { className: 'Navigation-link', to: this.props.editLink },
                'Edit'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: !this.props.isEdit ? "hidden" : "" },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-primary', onClick: this.addParentListItem.bind(this) },
                'Add'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row List-page' },
              nodes
            )
          )
        );
      }
    }
  }]);

  return ListGridTemplate;
})(_react2.default.Component);

exports.default = ListGridTemplate;

},{"../../EmptyContent":13,"../../Widgets/Field/FieldHelper":44,"../../Widgets/ListGridItem/ListGridGroup":54,"../../Widgets/LongDescription/LongDescriptionFactory":66,"../TemplateHelper":32,"react":"react","react-router":"react-router","underscore":"underscore"}],28:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _SubListItem = require('../../Widgets/ListItem/SubListItem');

var _SubListItem2 = _interopRequireDefault(_SubListItem);

var _ParentListItem = require('../../Widgets/ListItem/ParentListItem');

var _ParentListItem2 = _interopRequireDefault(_ParentListItem);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _underscore = require('underscore');

var _LongDescriptionFactory = require('../../Widgets/LongDescription/LongDescriptionFactory');

var _LongDescriptionFactory2 = _interopRequireDefault(_LongDescriptionFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListTemplate = (function (_React$Component) {
  _inherits(ListTemplate, _React$Component);

  function ListTemplate(props) {
    _classCallCheck(this, ListTemplate);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListTemplate).call(this, props));

    _this.templateId = 4;
    return _this;
  }

  _createClass(ListTemplate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'updateContent',
    value: function updateContent(index, event) {
      this.props.contentList[index].value = event.target.value;
      this.props.setStateForContentList();
    }
  }, {
    key: 'removeContent',
    value: function removeContent(index, event) {
      this.props.contentList.splice(index, 1);
      _TemplateHelper2.default.setNewSortOrderForAllListItems(this.props.contentList);
      this.props.setStateForContentList();
    }
  }, {
    key: 'addParentListItem',
    value: function addParentListItem() {
      var sortOrder = this.props.contentList.length + 1;
      var longDescriptionFactory = new _LongDescriptionFactory2.default(sortOrder, 'List Parent Item', 'List Parent Item', this.templateId);
      var longDescription = longDescriptionFactory.create();

      this.props.contentList.push(longDescription);
      this.props.setStateForContentList();
    }
  }, {
    key: 'removeContentAndItsSubListItems',
    value: function removeContentAndItsSubListItems(index, event) {
      var parentIndex = index + 1;

      var itemsToRemove = _underscore._.filter(this.props.contentList, function (item) {
        return item.parent_index === parentIndex || item.sort_order === parentIndex;
      });

      var itemsToKeep = _underscore._.filter(this.props.contentList, function (item) {
        return item.parent_index != parentIndex && item.sort_order != parentIndex;
      });

      this.setNewSortOrderForChildrenForParent(itemsToKeep, itemsToRemove);

      //this.props.contentList = [];
      this.props.contentList = itemsToKeep;
      this.setState({ thingsToDo: this.props.contentList });

      //want to always maintain at miniumum one list item on the page
      if (this.props.contentList.length == 0) {
        this.addParentListItem();
      }
    }
  }, {
    key: 'setNewSortOrderForChildrenForParent',
    value: function setNewSortOrderForChildrenForParent(itemsToKeep, itemsToRemove) {
      var lastItemIndexToRemove = itemsToRemove[itemsToRemove.length - 1].sort_order;

      for (var i = 0; i < itemsToKeep.length; i++) {
        var item = itemsToKeep[i];

        //update parent index for only sub list items past the index of the last content item removed
        if (item.sort_order > lastItemIndexToRemove) {
          if (_FieldHelper2.default.isSubListItem(item)) {
            item.parent_index -= itemsToRemove.length;
          }
        }

        item.sort_order = i + 1;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (_underscore._.isEmpty(this.props.contentList)) {
        var emptyContentProps = _underscore._.extend({ editLink: this.props.editLink }, this.props);
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: !this.props.isEdit ? "hidden" : "" },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-primary', onClick: this.addParentListItem.bind(this) },
              'Add'
            )
          ),
          _react2.default.createElement(_EmptyContent2.default, emptyContentProps)
        );
      } else {
        var nodes = this.props.contentList.map(function (contentItem, index) {
          var propsData = {
            contentItem: contentItem, isEdit: _this2.props.isEdit,
            onRemove: _this2.removeContent.bind(_this2, index),
            onChange: _this2.updateContent.bind(_this2, index),
            templateId: _this2.templateId,
            index: index
          };
          var listItemProps = _underscore._.extend(propsData, _this2.props);

          //override onRemove function for list item if lit item is parent list item
          if (_FieldHelper2.default.isSubListItem(contentItem)) {
            return _react2.default.createElement(
              'div',
              { key: index },
              _react2.default.createElement(_SubListItem2.default, listItemProps)
            );
          } else {
            listItemProps.onRemove = _this2.removeContentAndItsSubListItems.bind(_this2, index);

            return _react2.default.createElement(
              'div',
              { key: index },
              _react2.default.createElement(_ParentListItem2.default, listItemProps)
            );
          }
        });

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'Content-panel List-template' },
            _react2.default.createElement(
              'div',
              { className: !this.props.isEdit ? "Edit-Content-Button" : "hidden" },
              _react2.default.createElement(
                _reactRouter.Link,
                { className: 'Navigation-link', to: this.props.editLink },
                'Edit'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: !this.props.isEdit ? "hidden" : "" },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-primary', onClick: this.addParentListItem.bind(this) },
                'Add'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row List-page' },
              nodes
            )
          )
        );
      }
    }
  }]);

  return ListTemplate;
})(_react2.default.Component);

exports.default = ListTemplate;

},{"../../EmptyContent":13,"../../Widgets/Field/FieldHelper":44,"../../Widgets/ListItem/ParentListItem":60,"../../Widgets/ListItem/SubListItem":63,"../../Widgets/LongDescription/LongDescriptionFactory":66,"../TemplateHelper":32,"react":"react","react-router":"react-router","underscore":"underscore"}],29:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PhotoAlbumTemplateEdit = require('./PhotoAlbumTemplateEdit');

var _PhotoAlbumTemplateEdit2 = _interopRequireDefault(_PhotoAlbumTemplateEdit);

var _PhotoAlbumTemplateReadOnly = require('./PhotoAlbumTemplateReadOnly');

var _PhotoAlbumTemplateReadOnly2 = _interopRequireDefault(_PhotoAlbumTemplateReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoAlbumTemplate = (function (_React$Component) {
  _inherits(PhotoAlbumTemplate, _React$Component);

  function PhotoAlbumTemplate(props) {
    _classCallCheck(this, PhotoAlbumTemplate);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoAlbumTemplate).call(this, props));
  }

  _createClass(PhotoAlbumTemplate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_PhotoAlbumTemplateEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_PhotoAlbumTemplateReadOnly2.default, this.props);
      }
    }
  }]);

  return PhotoAlbumTemplate;
})(_react2.default.Component);

exports.default = PhotoAlbumTemplate;

},{"./PhotoAlbumTemplateEdit":30,"./PhotoAlbumTemplateReadOnly":31,"react":"react","react-router":"react-router"}],30:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _underscore = require('underscore');

var _LongDescription = require('../../Widgets/LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _ImageWidget = require('../../Widgets/Image/ImageWidget');

var _ImageWidget2 = _interopRequireDefault(_ImageWidget);

var _Title = require('../../Widgets/Title/Title');

var _Title2 = _interopRequireDefault(_Title);

var _ShortDescription = require('../../Widgets/ShortDescription/ShortDescription');

var _ShortDescription2 = _interopRequireDefault(_ShortDescription);

var _LongDescriptionFactory = require('../../Widgets/LongDescription/LongDescriptionFactory');

var _LongDescriptionFactory2 = _interopRequireDefault(_LongDescriptionFactory);

var _ImageFactory = require('../../Widgets/Image/ImageFactory');

var _ImageFactory2 = _interopRequireDefault(_ImageFactory);

var _TitleFactory = require('../../Widgets/Title/TitleFactory');

var _TitleFactory2 = _interopRequireDefault(_TitleFactory);

var _ShortDescriptionFactory = require('../../Widgets/ShortDescription/ShortDescriptionFactory');

var _ShortDescriptionFactory2 = _interopRequireDefault(_ShortDescriptionFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoAlbumTemplateEdit = (function (_React$Component) {
  _inherits(PhotoAlbumTemplateEdit, _React$Component);

  function PhotoAlbumTemplateEdit(props) {
    _classCallCheck(this, PhotoAlbumTemplateEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoAlbumTemplateEdit).call(this, props));
  }

  _createClass(PhotoAlbumTemplateEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
    //todo: move to actions

  }, {
    key: 'createImage',
    value: function createImage(event) {
      var sortOrder = this.props.contentList.length + 1;

      var imageFactory = new _ImageFactory2.default(sortOrder, 'Our Story Image', 'Our Story Image');
      var image = imageFactory.create();
      image.template_id = 1;

      this.props.contentList.push(image);
      this.props.setStateForContentList();
      //  this.setState({contentList: this.props.contentList});
    }
  }, {
    key: 'updateContent',
    value: function updateContent(index, event) {
      this.props.contentList[index].value = event.target.value;
      this.props.setStateForContentList();
      //this.setState({contentList: this.state.contentList});
    }
  }, {
    key: 'removeContent',
    value: function removeContent(index, event) {
      this.props.contentList.splice(index, 1);
      this.props.setStateForContentList();
      //this.setState({contentList: this.state.contentList});
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var nodes = this.props.contentList.map(function (contentItem, index) {
        var propsData = { contentItem: contentItem, isEdit: true,
          onChange: _this2.updateContent.bind(_this2, index),
          onRemove: _this2.removeContent.bind(_this2, index) };

        if (_FieldHelper2.default.isImage(contentItem)) {
          return _react2.default.createElement(
            'div',
            { key: contentItem.sort_order, className: 'form-group' },
            _react2.default.createElement(_Field2.default, propsData)
          );
        } else {
          throw 'content type should be image.';
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
                  { className: 'btn btn-primary', onClick: this.createImage.bind(this) },
                  'Create Image'
                )
              )
            )
          ),
          nodes,
          _react2.default.createElement(
            'div',
            { className: this.props.contentList.length > 0 ? 'form-group' : 'form-group hidden' },
            _react2.default.createElement(
              'button',
              { type: 'submit', onClick: this.props.submit, className: 'btn btn-primary' },
              'Save'
            )
          )
        )
      );
    }
  }]);

  return PhotoAlbumTemplateEdit;
})(_react2.default.Component);

exports.default = PhotoAlbumTemplateEdit;

},{"../../EmptyContent":13,"../../Widgets/Field/Field":42,"../../Widgets/Field/FieldHelper":44,"../../Widgets/Image/ImageFactory":50,"../../Widgets/Image/ImageWidget":51,"../../Widgets/LongDescription/LongDescription":64,"../../Widgets/LongDescription/LongDescriptionFactory":66,"../../Widgets/ShortDescription/ShortDescription":68,"../../Widgets/ShortDescription/ShortDescriptionFactory":70,"../../Widgets/Title/Title":72,"../../Widgets/Title/TitleFactory":74,"react":"react","react-router":"react-router","underscore":"underscore"}],31:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _EmptyContent = require('../../EmptyContent');

var _EmptyContent2 = _interopRequireDefault(_EmptyContent);

var _underscore = require('underscore');

var _LongDescription = require('../../Widgets/LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _ImageWidget = require('../../Widgets/Image/ImageWidget');

var _ImageWidget2 = _interopRequireDefault(_ImageWidget);

var _Title = require('../../Widgets/Title/Title');

var _Title2 = _interopRequireDefault(_Title);

var _ShortDescription = require('../../Widgets/ShortDescription/ShortDescription');

var _ShortDescription2 = _interopRequireDefault(_ShortDescription);

var _Carousel = require('../../Widgets/Carousel/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoAlbumTemplateReadOnly = (function (_React$Component) {
  _inherits(PhotoAlbumTemplateReadOnly, _React$Component);

  function PhotoAlbumTemplateReadOnly(props) {
    _classCallCheck(this, PhotoAlbumTemplateReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoAlbumTemplateReadOnly).call(this, props));
  }

  _createClass(PhotoAlbumTemplateReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
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
      //this.props.selectedPhoto = index || 1;
      $('#largeCarouselModal').modal('show');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var propsData = { contentList: this.props.contentList, selectedPhoto: this.props.selectedPhoto, imageSize: this.props.imageSize };

      var nodes = this.props.contentList.map(function (contentItem, index) {
        var propsData = { contentItem: contentItem, imageSize: _this2.props.imageSize };
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'Photo', onClick: _this2.openModal.bind(_this2, index) },
          _react2.default.createElement(_Field2.default, propsData)
        );
      });

      if (_underscore._.isEmpty(this.props.contentList)) {
        var emptyContentProps = { editLink: this.props.editLink };
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
            nodes
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
                  _react2.default.createElement(_Carousel2.default, propsData)
                )
              )
            )
          )
        );
      }
    }
  }]);

  return PhotoAlbumTemplateReadOnly;
})(_react2.default.Component);

exports.default = PhotoAlbumTemplateReadOnly;

},{"../../EmptyContent":13,"../../Widgets/Carousel/Carousel":39,"../../Widgets/Field/Field":42,"../../Widgets/Field/FieldHelper":44,"../../Widgets/Image/ImageWidget":51,"../../Widgets/LongDescription/LongDescription":64,"../../Widgets/ShortDescription/ShortDescription":68,"../../Widgets/Title/Title":72,"react":"react","react-router":"react-router","underscore":"underscore"}],32:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateHelper = (function () {
  function TemplateHelper() {
    _classCallCheck(this, TemplateHelper);
  }

  _createClass(TemplateHelper, null, [{
    key: 'setNewSortOrderForAllListItems',
    value: function setNewSortOrderForAllListItems(contentList) {
      for (var i = 0; i < contentList.length; i++) {
        var item = contentList[i];
        item.sort_order = i + 1;
      }
    }
  }]);

  return TemplateHelper;
})();

exports.default = TemplateHelper;

},{"underscore":"underscore"}],33:[function(require,module,exports){
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

var _BasicTemplate = require('../Templates/BasicTemplate/BasicTemplate');

var _BasicTemplate2 = _interopRequireDefault(_BasicTemplate);

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
    key: 'setStateForContentList',
    value: function setStateForContentList() {
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
    key: 'render',
    value: function render() {
      var propsData = { contentList: this.state.contentList, isEdit: true, submit: this.submit.bind(this),
        setStateForContentList: this.setStateForContentList.bind(this) };

      return _react2.default.createElement(_BasicTemplate2.default, propsData);
    }
  }]);

  return EditTheProposal;
})(_react2.default.Component);

exports.default = EditTheProposal;

},{"../../actions/TheProposalActions":6,"../../stores/TheProposalStore":90,"../Templates/BasicTemplate/BasicTemplate":24,"react":"react"}],34:[function(require,module,exports){
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

var _underscore = require('underscore');

var _BasicTemplate = require('../Templates/BasicTemplate/BasicTemplate');

var _BasicTemplate2 = _interopRequireDefault(_BasicTemplate);

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
      var propsData = { editLink: "/our-story/edit", contentList: this.state.contentList, isEdit: false };
      return _react2.default.createElement(_BasicTemplate2.default, propsData);
    }
  }]);

  return TheProposal;
})(_react2.default.Component);

exports.default = TheProposal;

},{"../../actions/TheProposalActions":6,"../../stores/TheProposalStore":90,"../Templates/BasicTemplate/BasicTemplate":24,"react":"react","react-router":"react-router","underscore":"underscore"}],35:[function(require,module,exports){
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

var _underscore = require('underscore');

var _ListTemplate = require('../Templates/ListTemplate/ListTemplate');

var _ListTemplate2 = _interopRequireDefault(_ListTemplate);

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
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      //ThingsToDoActions.saveThingsToDoData(this.state.contentList, this.props.history);
    }
  }, {
    key: 'setStateForContentList',
    value: function setStateForContentList() {
      this.setState({ contentList: this.state.contentList });
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      _ThingsToDoActions2.default.saveThingsToDoData(this.state.contentList, this.props.history);
    }
  }, {
    key: 'render',
    value: function render() {
      var propsData = { isEdit: true, contentList: this.state.contentList, editLink: '/things-to-do/edit',
        setStateForContentList: this.setStateForContentList.bind(this) };

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
              'div',
              { className: 'row List-container' },
              _react2.default.createElement(_ListTemplate2.default, propsData)
            ),
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
        )
      );
    }
  }]);

  return EditThingsToDo;
})(_react2.default.Component);

exports.default = EditThingsToDo;

},{"../../actions/ThingsToDoActions":7,"../../stores/ThingsToDoStore":91,"../Templates/ListTemplate/ListTemplate":28,"react":"react","underscore":"underscore"}],36:[function(require,module,exports){
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

var _ListTemplate = require('../Templates/ListTemplate/ListTemplate');

var _ListTemplate2 = _interopRequireDefault(_ListTemplate);

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
  }, {
    key: 'render',
    value: function render() {
      var propsData = { isEdit: false, contentList: this.state.contentList, editLink: '/things-to-do/edit' };
      return _react2.default.createElement(_ListTemplate2.default, propsData);
    }
  }]);

  return ThingsToDo;
})(_react2.default.Component);

exports.default = ThingsToDo;

},{"../../actions/ThingsToDoActions":7,"../../stores/ThingsToDoStore":91,"../Templates/ListTemplate/ListTemplate":28,"react":"react","react-router":"react-router","underscore":"underscore"}],37:[function(require,module,exports){
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

var _BasicTemplate = require('../Templates/BasicTemplate/BasicTemplate');

var _BasicTemplate2 = _interopRequireDefault(_BasicTemplate);

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
    key: 'setStateForContentList',
    value: function setStateForContentList() {
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
      _VenueActions2.default.saveVenueData(this.state.contentList, this.props.history);
    }
  }, {
    key: 'render',
    value: function render() {
      var propsData = { contentList: this.state.contentList, isEdit: true, submit: this.submit.bind(this),
        setStateForContentList: this.setStateForContentList.bind(this) };

      return _react2.default.createElement(_BasicTemplate2.default, propsData);
    }
  }]);

  return EditVenue;
})(_react2.default.Component);

exports.default = EditVenue;

},{"../../actions/VenueActions":8,"../../stores/VenueStore":92,"../Templates/BasicTemplate/BasicTemplate":24,"react":"react"}],38:[function(require,module,exports){
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

var _underscore = require('underscore');

var _BasicTemplate = require('../Templates/BasicTemplate/BasicTemplate');

var _BasicTemplate2 = _interopRequireDefault(_BasicTemplate);

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
      var propsData = { editLink: "/venue/edit", contentList: this.state.contentList, isEdit: false };
      return _react2.default.createElement(_BasicTemplate2.default, propsData);
    }
  }]);

  return Venue;
})(_react2.default.Component);

exports.default = Venue;

},{"../../actions/VenueActions":8,"../../stores/VenueStore":92,"../Templates/BasicTemplate/BasicTemplate":24,"react":"react","react-router":"react-router","underscore":"underscore"}],39:[function(require,module,exports){
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

},{"./CarouselContent":40,"./CarouselIndicators":41,"react":"react","react-router":"react-router"}],40:[function(require,module,exports){
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

      var propsArray = _PropsHelper2.default.convertPropsToArray(this.props.contentList);

      var images = propsArray.map(function (image, index) {
        return _react2.default.createElement(
          'div',
          { key: image.sort_order, className: index == _this2.props.selectedPhoto ? 'item active' : 'item' },
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

},{"../../../helpers/PropsHelper":83,"react":"react","react-router":"react-router"}],41:[function(require,module,exports){
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

      var propsArray = _PropsHelper2.default.convertPropsToArray(this.props.contentList);

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

},{"../../../helpers/PropsHelper":83,"react":"react","react-router":"react-router"}],42:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FieldEdit = require('./FieldEdit');

var _FieldEdit2 = _interopRequireDefault(_FieldEdit);

var _FieldReadOnly = require('./FieldReadOnly');

var _FieldReadOnly2 = _interopRequireDefault(_FieldReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = (function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field(props) {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Field).call(this, props));
  }

  _createClass(Field, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_FieldEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_FieldReadOnly2.default, this.props);
      }
    }
  }]);

  return Field;
})(_react2.default.Component);

exports.default = Field;

},{"./FieldEdit":43,"./FieldReadOnly":45,"react":"react","underscore":"underscore"}],43:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _ImageWidget = require('../../Widgets/Image/ImageWidget');

var _ImageWidget2 = _interopRequireDefault(_ImageWidget);

var _Title = require('../../Widgets/Title/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Url = require('../../Widgets/Url/Url');

var _Url2 = _interopRequireDefault(_Url);

var _ShortDescription = require('../../Widgets/ShortDescription/ShortDescription');

var _ShortDescription2 = _interopRequireDefault(_ShortDescription);

var _LongDescription = require('../../Widgets/LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _Iframe = require('../../Widgets/Iframe/Iframe');

var _Iframe2 = _interopRequireDefault(_Iframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldEdit = (function (_React$Component) {
  _inherits(FieldEdit, _React$Component);

  function FieldEdit(props) {
    _classCallCheck(this, FieldEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FieldEdit).call(this, props));
  }

  _createClass(FieldEdit, [{
    key: 'render',
    value: function render() {
      var contentItem = this.props.contentItem;
      var propsData = _underscore._.extend({ value: contentItem.value }, this.props);

      if (_FieldHelper2.default.isDescription(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_LongDescription2.default, propsData)
        );
      } else if (_FieldHelper2.default.isShortDescription(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_ShortDescription2.default, propsData)
        );
      } else if (_FieldHelper2.default.isImage(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_ImageWidget2.default, propsData)
        );
      } else if (_FieldHelper2.default.isTitle(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_Title2.default, propsData)
        );
      } else if (_FieldHelper2.default.isUrl(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_Url2.default, propsData)
        );
      } else if (_FieldHelper2.default.isIframe(contentItem)) {
        return _react2.default.createElement(
          'div',
          { key: contentItem.sort_order, className: 'form-group' },
          _react2.default.createElement(_Iframe2.default, propsData)
        );
      } else {
        throw "There is no Field that matches the content item.";
      }
    }
  }]);

  return FieldEdit;
})(_react2.default.Component);

exports.default = FieldEdit;

},{"../../Widgets/Field/FieldHelper":44,"../../Widgets/Iframe/Iframe":46,"../../Widgets/Image/ImageWidget":51,"../../Widgets/LongDescription/LongDescription":64,"../../Widgets/ShortDescription/ShortDescription":68,"../../Widgets/Title/Title":72,"../../Widgets/Url/Url":76,"react":"react","underscore":"underscore"}],44:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require("underscore");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FieldHelper = (function () {
  function FieldHelper() {
    _classCallCheck(this, FieldHelper);
  }

  _createClass(FieldHelper, null, [{
    key: "isShortDescription",
    value: function isShortDescription(node) {
      return node.content_type_id == 4;
    }
  }, {
    key: "isDescription",
    value: function isDescription(node) {
      return node.content_type_id == 2;
    }
  }, {
    key: "isImage",
    value: function isImage(node) {
      return node.content_type_id == 1;
    }
  }, {
    key: "isTitle",
    value: function isTitle(node) {
      return node.content_type_id == 3;
    }
    //a node is a sub list item if it has its parent index property >= 0
    //however, javascript is silly and thinks "undefined >= 0" is a true statement

  }, {
    key: "isSubListItem",
    value: function isSubListItem(node) {
      return typeof node.parent_index == "number";
    }
  }, {
    key: "isParentListItem",
    value: function isParentListItem(node) {
      return typeof node.parent_index !== "number";
    }
  }, {
    key: "isUrl",
    value: function isUrl(node) {
      return node.content_type_id == 5;
    }
  }, {
    key: "isIframe",
    value: function isIframe(node) {
      return node.content_type_id == 6;
    }
  }]);

  return FieldHelper;
})();

exports.default = FieldHelper;

},{"underscore":"underscore"}],45:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LongDescription = require('../../Widgets/LongDescription/LongDescription');

var _LongDescription2 = _interopRequireDefault(_LongDescription);

var _ImageWidget = require('../../Widgets/Image/ImageWidget');

var _ImageWidget2 = _interopRequireDefault(_ImageWidget);

var _Title = require('../../Widgets/Title/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Url = require('../../Widgets/Url/Url');

var _Url2 = _interopRequireDefault(_Url);

var _ShortDescription = require('../../Widgets/ShortDescription/ShortDescription');

var _ShortDescription2 = _interopRequireDefault(_ShortDescription);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _Iframe = require('../../Widgets/Iframe/Iframe');

var _Iframe2 = _interopRequireDefault(_Iframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldReadOnly = (function (_React$Component) {
  _inherits(FieldReadOnly, _React$Component);

  function FieldReadOnly(props) {
    _classCallCheck(this, FieldReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FieldReadOnly).call(this, props));
  }

  _createClass(FieldReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var contentItem = this.props.contentItem;
      var propsData = _underscore._.extend({ value: contentItem.value }, this.props);

      if (_FieldHelper2.default.isDescription(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_LongDescription2.default, propsData)
        );
      } else if (_FieldHelper2.default.isShortDescription(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_ShortDescription2.default, propsData)
        );
      } else if (_FieldHelper2.default.isImage(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_ImageWidget2.default, propsData)
        );
      } else if (_FieldHelper2.default.isTitle(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_Title2.default, propsData)
        );
      } else if (_FieldHelper2.default.isUrl(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_Url2.default, propsData)
        );
      } else if (_FieldHelper2.default.isIframe(contentItem)) {
        return _react2.default.createElement(
          'div',
          { className: 'Content-item-container', key: contentItem.sort_order },
          _react2.default.createElement(_Iframe2.default, propsData)
        );
      } else {
        throw "There is no Field that matches the content item.";
      }
    }
  }]);

  return FieldReadOnly;
})(_react2.default.Component);

exports.default = FieldReadOnly;

},{"../../Widgets/Field/FieldHelper":44,"../../Widgets/Iframe/Iframe":46,"../../Widgets/Image/ImageWidget":51,"../../Widgets/LongDescription/LongDescription":64,"../../Widgets/ShortDescription/ShortDescription":68,"../../Widgets/Title/Title":72,"../../Widgets/Url/Url":76,"react":"react","underscore":"underscore"}],46:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _IframeEdit = require('./IframeEdit');

var _IframeEdit2 = _interopRequireDefault(_IframeEdit);

var _IframeReadOnly = require('./IframeReadOnly');

var _IframeReadOnly2 = _interopRequireDefault(_IframeReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Iframe = (function (_React$Component) {
  _inherits(Iframe, _React$Component);

  function Iframe(props) {
    _classCallCheck(this, Iframe);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Iframe).call(this, props));
  }

  _createClass(Iframe, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_IframeEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_IframeReadOnly2.default, this.props);
      }
    }
  }]);

  return Iframe;
})(_react2.default.Component);

exports.default = Iframe;

},{"./IframeEdit":47,"./IframeReadOnly":49,"react":"react","react-router":"react-router"}],47:[function(require,module,exports){
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

var IframeEdit = (function (_React$Component) {
  _inherits(IframeEdit, _React$Component);

  function IframeEdit(props) {
    _classCallCheck(this, IframeEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(IframeEdit).call(this, props));
  }

  _createClass(IframeEdit, [{
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
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-8' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', { className: 'form-control', placeholder: 'Iframe Src',
              value: this.props.value, onChange: this.props.onChange })
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
      );
    }
  }]);

  return IframeEdit;
})(_react2.default.Component);

exports.default = IframeEdit;

},{"react":"react","react-router":"react-router"}],48:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IframeFactory = (function () {
  function IframeFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, IframeFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number || 1;
    this.column_number = column_number || 1;
  }

  _createClass(IframeFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 6,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return IframeFactory;
})();

exports.default = IframeFactory;

},{"react":"react"}],49:[function(require,module,exports){
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

var IframeReadOnly = (function (_React$Component) {
  _inherits(IframeReadOnly, _React$Component);

  function IframeReadOnly(props) {
    _classCallCheck(this, IframeReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(IframeReadOnly).call(this, props));
  }

  _createClass(IframeReadOnly, [{
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
        { className: 'Content-iframe-container' },
        _react2.default.createElement('iframe', { src: this.props.value, className: 'Content-iframe' })
      );
    }
  }]);

  return IframeReadOnly;
})(_react2.default.Component);

exports.default = IframeReadOnly;

},{"react":"react","react-router":"react-router"}],50:[function(require,module,exports){
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
  function ImageFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, ImageFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number || 1;
    this.column_number = column_number || 1;
  }

  _createClass(ImageFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 1,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return ImageFactory;
})();

exports.default = ImageFactory;

},{"react":"react"}],51:[function(require,module,exports){
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

},{"./ImageWidgetEdit":52,"./ImageWidgetReadOnly":53,"react":"react","react-router":"react-router"}],52:[function(require,module,exports){
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
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-8' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', { ref: 'url', className: 'form-control', name: 'url', placeholder: 'Url', value: this.props.value,
              onChange: this.props.onChange, autoFocus: true })
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
      );
    }
  }]);

  return ImageWidgetEdit;
})(_react2.default.Component);

exports.default = ImageWidgetEdit;

},{"react":"react","react-router":"react-router"}],53:[function(require,module,exports){
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
      if (this.props.imageSize == 'small') {
        return _react2.default.createElement(
          'div',
          { className: 'Content-image-container' },
          _react2.default.createElement('img', { className: 'Content-small-image', src: this.props.value, alt: 'Image' })
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'Content-image-container' },
          _react2.default.createElement('img', { className: 'Content-extra-large-image-percentage', src: this.props.value, alt: 'Image' })
        );
      }
    }
  }]);

  return ImageWidgetReadOnly;
})(_react2.default.Component);

exports.default = ImageWidgetReadOnly;

},{"react":"react","react-router":"react-router"}],54:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../../Templates/TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

var _ParentListGridItem = require('../../Widgets/ListGridItem/ParentListGridItem');

var _ParentListGridItem2 = _interopRequireDefault(_ParentListGridItem);

var _ListGridGroupRow = require('../../Widgets/ListGridItem/ListGridGroupRow');

var _ListGridGroupRow2 = _interopRequireDefault(_ListGridGroupRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGridGroup = (function (_React$Component) {
  _inherits(ListGridGroup, _React$Component);

  function ListGridGroup(props) {
    _classCallCheck(this, ListGridGroup);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListGridGroup).call(this, props));

    _this.templateId = _this.props.templateId;
    return _this;
  }

  _createClass(ListGridGroup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'onAddRow',
    value: function onAddRow() {
      var contentGroupItem = this.props.contentGroupItem;
      var newRow = { columns: [] };
      var column = { contentList: [] };
      var column2 = { contentList: [] };
      newRow.columns.push(column);
      newRow.columns.push(column2);
      contentGroupItem.rows.push(newRow);

      this.props.setStateForContentGroupList();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var parentListItem = this.props.contentGroupItem.parentListItem;
      var propsData = {
        contentItem: parentListItem
      };
      var parentListGridItemProps = _underscore._.extend(propsData, this.props);

      var nodes = this.props.contentGroupItem.rows.map(function (row, index) {
        var propsData = {
          row: row
        };
        var rowProps = _underscore._.extend(propsData, _this2.props);

        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(_ListGridGroupRow2.default, rowProps)
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'List-template' },
          _react2.default.createElement(
            'div',
            { className: !this.props.isEdit ? "Edit-Content-Button" : "hidden" },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: 'Navigation-link', to: this.props.editLink },
              'Edit'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: !this.props.isEdit ? "hidden" : "" },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-primary', onClick: this.onAddRow.bind(this) },
              'Add Row'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_ParentListGridItem2.default, parentListGridItemProps)
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            nodes
          )
        )
      );
    }
  }]);

  return ListGridGroup;
})(_react2.default.Component);

exports.default = ListGridGroup;

},{"../../Templates/TemplateHelper":32,"../../Widgets/Field/Field":42,"../../Widgets/Field/FieldHelper":44,"../../Widgets/ListGridItem/ListGridGroupRow":56,"../../Widgets/ListGridItem/ParentListGridItem":57,"../../Widgets/WidgetSelectList":81,"react":"react","react-router":"react-router","underscore":"underscore"}],55:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../../Templates/TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGridGroupColumn = (function (_React$Component) {
  _inherits(ListGridGroupColumn, _React$Component);

  function ListGridGroupColumn(props) {
    _classCallCheck(this, ListGridGroupColumn);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListGridGroupColumn).call(this, props));

    _this.templateId = _this.props.templateId;
    return _this;
  }

  _createClass(ListGridGroupColumn, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'onAddWidgetToContentList',
    value: function onAddWidgetToContentList(factoryInstance) {
      debugger;
      var column = this.props.column;
      var contentListLength = column.contentList.length;
      this.props.column.contentList.splice(contentListLength + 1, 0, factoryInstance);

      _TemplateHelper2.default.setNewSortOrderForAllListItems(this.props.contentList);
      this.props.setStateForContentGroupList();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var widgetListPropsData = { onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
        parentIndex: this.props.contentGroupIndex, templateId: this.templateId };

      var nodes = this.props.column.contentList.map(function (contentItem, index) {
        var propsData = _underscore._.extend({ value: contentItem.value, contentItem: contentItem }, _this2.props);

        return _react2.default.createElement(
          'div',
          { key: index, className: 'List-Grid-Group-Column-Content-Item' },
          _react2.default.createElement(_Field2.default, propsData)
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_WidgetSelectList2.default, widgetListPropsData),
          _react2.default.createElement(
            'div',
            { className: 'row Sub-list-item' },
            nodes
          )
        )
      );
    }
  }]);

  return ListGridGroupColumn;
})(_react2.default.Component);

exports.default = ListGridGroupColumn;

},{"../../Templates/TemplateHelper":32,"../../Widgets/Field/Field":42,"../../Widgets/Field/FieldHelper":44,"../../Widgets/WidgetSelectList":81,"react":"react","react-router":"react-router","underscore":"underscore"}],56:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../../Templates/TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

var _ListGridGroupColumn = require('../../Widgets/ListGridItem/ListGridGroupColumn');

var _ListGridGroupColumn2 = _interopRequireDefault(_ListGridGroupColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGridGroupRow = (function (_React$Component) {
  _inherits(ListGridGroupRow, _React$Component);

  function ListGridGroupRow(props) {
    _classCallCheck(this, ListGridGroupRow);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListGridGroupRow).call(this, props));

    _this.templateId = _this.props.templateId;
    return _this;
  }

  _createClass(ListGridGroupRow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var propsData = {
        contentItem: this.props.contentGroupItem.parentListItem
      };

      var nodes = this.props.row.columns.map(function (column, index) {
        var propsData = {
          column: column
        };
        var columnProps = _underscore._.extend(propsData, _this2.props);

        return _react2.default.createElement(
          'div',
          { key: index, className: 'List-Grid-Group-Column' },
          _react2.default.createElement(_ListGridGroupColumn2.default, columnProps)
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row Sub-list-item' },
            nodes
          )
        )
      );
    }
  }]);

  return ListGridGroupRow;
})(_react2.default.Component);

exports.default = ListGridGroupRow;

},{"../../Templates/TemplateHelper":32,"../../Widgets/Field/Field":42,"../../Widgets/Field/FieldHelper":44,"../../Widgets/ListGridItem/ListGridGroupColumn":55,"../../Widgets/WidgetSelectList":81,"react":"react","react-router":"react-router","underscore":"underscore"}],57:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ParentListGridItemEdit = require('./ParentListGridItemEdit');

var _ParentListGridItemEdit2 = _interopRequireDefault(_ParentListGridItemEdit);

var _ParentListGridItemReadOnly = require('./ParentListGridItemReadOnly');

var _ParentListGridItemReadOnly2 = _interopRequireDefault(_ParentListGridItemReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentListGridItem = (function (_React$Component) {
  _inherits(ParentListGridItem, _React$Component);

  function ParentListGridItem(props) {
    _classCallCheck(this, ParentListGridItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListGridItem).call(this, props));
  }

  _createClass(ParentListGridItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_ParentListGridItemEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_ParentListGridItemReadOnly2.default, this.props);
      }
    }
  }]);

  return ParentListGridItem;
})(_react2.default.Component);

exports.default = ParentListGridItem;

},{"./ParentListGridItemEdit":58,"./ParentListGridItemReadOnly":59,"react":"react","react-router":"react-router"}],58:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentListGridItemEdit = (function (_React$Component) {
  _inherits(ParentListGridItemEdit, _React$Component);

  function ParentListGridItemEdit(props) {
    _classCallCheck(this, ParentListGridItemEdit);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListGridItemEdit).call(this, props));

    _this.templateId = _this.props.templateId;
    return _this;
  }

  _createClass(ParentListGridItemEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var propsData = _underscore._.extend({ value: this.props.contentGroupItem.parentListItem.value }, this.props);

      return _react2.default.createElement(
        'div',
        { key: this.props.contentItem.sort_order, className: 'container List-item-group' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_Field2.default, propsData)
            )
          )
        )
      );
    }
  }]);

  return ParentListGridItemEdit;
})(_react2.default.Component);

exports.default = ParentListGridItemEdit;

},{"../../Widgets/Field/Field":42,"../../Widgets/Field/FieldHelper":44,"../../Widgets/WidgetSelectList":81,"react":"react","react-router":"react-router","underscore":"underscore"}],59:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentListGridItemReadOnly = (function (_React$Component) {
  _inherits(ParentListGridItemReadOnly, _React$Component);

  function ParentListGridItemReadOnly(props) {
    _classCallCheck(this, ParentListGridItemReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListGridItemReadOnly).call(this, props));
  }

  _createClass(ParentListGridItemReadOnly, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var propsData = _underscore._.extend({ value: this.props.contentItem.value }, this.props);

      return _react2.default.createElement(
        'div',
        { key: this.props.contentItem.sort_order, className: this.props.contentGroupItem.parentListItem.sort_order > 1 ? 'List-item-group Row-separator' : 'List-item-group' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              'div',
              { className: 'form-group Parent-list-item-readonly' },
              _react2.default.createElement(_Field2.default, propsData)
            )
          )
        )
      );
    }
  }]);

  return ParentListGridItemReadOnly;
})(_react2.default.Component);

exports.default = ParentListGridItemReadOnly;

},{"../../Widgets/Field/Field":42,"react":"react","react-router":"react-router","underscore":"underscore"}],60:[function(require,module,exports){
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

},{"./ParentListItemEdit":61,"./ParentListItemReadOnly":62,"react":"react","react-router":"react-router"}],61:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

var _FieldHelper = require('../../Widgets/Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _TemplateHelper = require('../../Templates/TemplateHelper');

var _TemplateHelper2 = _interopRequireDefault(_TemplateHelper);

var _WidgetSelectList = require('../../Widgets/WidgetSelectList');

var _WidgetSelectList2 = _interopRequireDefault(_WidgetSelectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParentListItemEdit = (function (_React$Component) {
  _inherits(ParentListItemEdit, _React$Component);

  function ParentListItemEdit(props) {
    _classCallCheck(this, ParentListItemEdit);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ParentListItemEdit).call(this, props));

    _this.templateId = _this.props.templateId;
    return _this;
  }

  _createClass(ParentListItemEdit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'onAddWidgetToContentList',
    value: function onAddWidgetToContentList(factoryInstance) {
      this.props.contentList.splice(this.getIndexForNewChild(this.props.index), 0, factoryInstance);
      _TemplateHelper2.default.setNewSortOrderForAllListItems(this.props.contentList);
      this.props.setStateForContentList();
    }
  }, {
    key: 'getIndexForNewChild',
    value: function getIndexForNewChild(parentIndex) {
      var lastChildIndexForParent = this.findLastChildIndexForParent(parentIndex);
      return lastChildIndexForParent + 1;
    }
  }, {
    key: 'findLastChildIndexForParent',
    value: function findLastChildIndexForParent(parentIndex) {
      var lastChildIndex = parentIndex;
      for (var i = parentIndex + 1; i < this.props.contentList.length; i++) {
        var listItemCompare = this.props.contentList[i];
        if (_FieldHelper2.default.isParentListItem(listItemCompare)) {
          break;
        }
        if (listItemCompare.parent_index === parentIndex) {
          lastChildIndex = i;
        }
      };

      return lastChildIndex;
    }
  }, {
    key: 'render',
    value: function render() {
      var propsData = _underscore._.extend({ value: this.props.contentItem.value }, this.props);
      var widgetListPropsData = { onAddWidgetToContentList: this.onAddWidgetToContentList.bind(this),
        parentIndex: this.props.index, templateId: this.templateId };

      return _react2.default.createElement(
        'div',
        { key: this.props.contentItem.sort_order, className: 'container List-item-group' },
        _react2.default.createElement(_WidgetSelectList2.default, widgetListPropsData),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_Field2.default, propsData)
            )
          )
        )
      );
    }
  }]);

  return ParentListItemEdit;
})(_react2.default.Component);

exports.default = ParentListItemEdit;

},{"../../Templates/TemplateHelper":32,"../../Widgets/Field/Field":42,"../../Widgets/Field/FieldHelper":44,"../../Widgets/WidgetSelectList":81,"react":"react","react-router":"react-router","underscore":"underscore"}],62:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

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
      var propsData = _underscore._.extend({ value: this.props.contentItem.value }, this.props);

      return _react2.default.createElement(
        'div',
        { key: this.props.contentItem.sort_order, className: this.props.contentItem.sort_order > 1 ? 'List-item-group Row-separator' : 'List-item-group' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-6' },
            _react2.default.createElement(
              'div',
              { className: 'form-group Parent-list-item-readonly' },
              _react2.default.createElement(_Field2.default, propsData)
            )
          )
        )
      );
    }
  }]);

  return ParentListItemReadOnly;
})(_react2.default.Component);

exports.default = ParentListItemReadOnly;

},{"../../Widgets/Field/Field":42,"react":"react","react-router":"react-router","underscore":"underscore"}],63:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _Field = require('../../Widgets/Field/Field');

var _Field2 = _interopRequireDefault(_Field);

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
      var propsData = _underscore._.extend({ value: this.props.contentItem.value }, this.props);
      return _react2.default.createElement(
        'div',
        { key: this.props.contentItem.sort_order },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-8' },
            _react2.default.createElement(
              'div',
              { className: 'form-group Sub-list-item' },
              _react2.default.createElement(_Field2.default, propsData)
            )
          )
        )
      );
    }
  }]);

  return SubListItem;
})(_react2.default.Component);

exports.default = SubListItem;

},{"../../Widgets/Field/Field":42,"react":"react","react-router":"react-router","underscore":"underscore"}],64:[function(require,module,exports){
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

},{"./LongDescriptionEdit":65,"./LongDescriptionReadOnly":67,"react":"react","react-router":"react-router"}],65:[function(require,module,exports){
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
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-8' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('textarea', { className: 'form-control',
              value: this.props.value, onChange: this.props.onChange })
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
      );
    }
  }]);

  return LongDescriptionEdit;
})(_react2.default.Component);

exports.default = LongDescriptionEdit;

},{"react":"react","react-router":"react-router"}],66:[function(require,module,exports){
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
  function LongDescriptionFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, LongDescriptionFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number || 1;
    this.column_number = column_number || 1;
  }

  _createClass(LongDescriptionFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 2,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return LongDescriptionFactory;
})();

exports.default = LongDescriptionFactory;

},{"react":"react"}],67:[function(require,module,exports){
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

},{"react":"react","react-router":"react-router"}],68:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ShortDescriptionEdit = require('./ShortDescriptionEdit');

var _ShortDescriptionEdit2 = _interopRequireDefault(_ShortDescriptionEdit);

var _ShortDescriptionReadOnly = require('./ShortDescriptionReadOnly');

var _ShortDescriptionReadOnly2 = _interopRequireDefault(_ShortDescriptionReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShortDescription = (function (_React$Component) {
  _inherits(ShortDescription, _React$Component);

  function ShortDescription(props) {
    _classCallCheck(this, ShortDescription);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ShortDescription).call(this, props));
  }

  _createClass(ShortDescription, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_ShortDescriptionEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_ShortDescriptionReadOnly2.default, this.props);
      }
    }
  }]);

  return ShortDescription;
})(_react2.default.Component);

exports.default = ShortDescription;

},{"./ShortDescriptionEdit":69,"./ShortDescriptionReadOnly":71,"react":"react","react-router":"react-router"}],69:[function(require,module,exports){
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

var ShortDescriptionEdit = (function (_React$Component) {
  _inherits(ShortDescriptionEdit, _React$Component);

  function ShortDescriptionEdit(props) {
    _classCallCheck(this, ShortDescriptionEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ShortDescriptionEdit).call(this, props));
  }

  _createClass(ShortDescriptionEdit, [{
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
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-8' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', { className: 'form-control', placeholder: 'Short description',
              value: this.props.value, onChange: this.props.onChange })
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
      );
    }
  }]);

  return ShortDescriptionEdit;
})(_react2.default.Component);

exports.default = ShortDescriptionEdit;

},{"react":"react","react-router":"react-router"}],70:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShortDescriptionFactory = (function () {
  function ShortDescriptionFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, ShortDescriptionFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number || 1;
    this.column_number = column_number || 1;
  }

  _createClass(ShortDescriptionFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 4,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return ShortDescriptionFactory;
})();

exports.default = ShortDescriptionFactory;

},{"react":"react"}],71:[function(require,module,exports){
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

var ShortDescriptionReadOnly = (function (_React$Component) {
  _inherits(ShortDescriptionReadOnly, _React$Component);

  function ShortDescriptionReadOnly(props) {
    _classCallCheck(this, ShortDescriptionReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ShortDescriptionReadOnly).call(this, props));
  }

  _createClass(ShortDescriptionReadOnly, [{
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
        { className: 'Content-short-description-container' },
        _react2.default.createElement(
          'div',
          { className: 'Content-short-description' },
          this.props.value
        )
      );
    }
  }]);

  return ShortDescriptionReadOnly;
})(_react2.default.Component);

exports.default = ShortDescriptionReadOnly;

},{"react":"react","react-router":"react-router"}],72:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _TitleEdit = require('./TitleEdit');

var _TitleEdit2 = _interopRequireDefault(_TitleEdit);

var _TitleReadOnly = require('./TitleReadOnly');

var _TitleReadOnly2 = _interopRequireDefault(_TitleReadOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = (function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title(props) {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Title).call(this, props));
  }

  _createClass(Title, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isEdit) {
        return _react2.default.createElement(_TitleEdit2.default, this.props);
      } else {
        return _react2.default.createElement(_TitleReadOnly2.default, this.props);
      }
    }
  }]);

  return Title;
})(_react2.default.Component);

exports.default = Title;

},{"./TitleEdit":73,"./TitleReadOnly":75,"react":"react","react-router":"react-router"}],73:[function(require,module,exports){
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

var TitleEdit = (function (_React$Component) {
  _inherits(TitleEdit, _React$Component);

  function TitleEdit(props) {
    _classCallCheck(this, TitleEdit);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TitleEdit).call(this, props));
  }

  _createClass(TitleEdit, [{
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
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-8' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', { className: 'form-control', placeholder: 'Title', value: this.props.value,
              onChange: this.props.onChange, autoFocus: true })
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
      );
    }
  }]);

  return TitleEdit;
})(_react2.default.Component);

exports.default = TitleEdit;

},{"react":"react","react-router":"react-router"}],74:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TitleFactory = (function () {
  function TitleFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, TitleFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number || 1;
    this.column_number = column_number || 1;
  }

  _createClass(TitleFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 3,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return TitleFactory;
})();

exports.default = TitleFactory;

},{"react":"react"}],75:[function(require,module,exports){
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

var TitleReadOnly = (function (_React$Component) {
  _inherits(TitleReadOnly, _React$Component);

  function TitleReadOnly(props) {
    _classCallCheck(this, TitleReadOnly);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TitleReadOnly).call(this, props));
  }

  _createClass(TitleReadOnly, [{
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
        { className: 'Content-title-container' },
        _react2.default.createElement(
          'div',
          { className: 'Content-title' },
          this.props.value
        )
      );
    }
  }]);

  return TitleReadOnly;
})(_react2.default.Component);

exports.default = TitleReadOnly;

},{"react":"react","react-router":"react-router"}],76:[function(require,module,exports){
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

},{"./UrlEdit":77,"./UrlReadOnly":79,"react":"react","react-router":"react-router"}],77:[function(require,module,exports){
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
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-8' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', { className: 'form-control', type: 'text', placeholder: 'Link', value: this.props.value,
              onChange: this.props.onChange, autoFocus: true })
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
      );
    }
  }]);

  return UrlEdit;
})(_react2.default.Component);

exports.default = UrlEdit;

},{"react":"react","react-router":"react-router"}],78:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UrlFactory = (function () {
  function UrlFactory(sortOrder, name, description, templateId, parentIndex, row_number, column_number) {
    _classCallCheck(this, UrlFactory);

    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
    this.row_number = row_number || 1;
    this.column_number = column_number || 1;
  }

  _createClass(UrlFactory, [{
    key: 'create',
    value: function create() {

      var content = {
        name: this.name,
        description: this.description,
        value: '',
        content_type_id: 5,
        sort_order: this.sortOrder,
        template_id: this.templateId,
        parent_index: this.parentIndex,
        row_number: this.row_number,
        column_number: this.column_number
      };

      return content;
    }
  }]);

  return UrlFactory;
})();

exports.default = UrlFactory;

},{"react":"react"}],79:[function(require,module,exports){
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

},{"react":"react","react-router":"react-router"}],80:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

var _FieldHelper = require('./Field/FieldHelper');

var _FieldHelper2 = _interopRequireDefault(_FieldHelper);

var _LongDescriptionFactory = require('./LongDescription/LongDescriptionFactory');

var _LongDescriptionFactory2 = _interopRequireDefault(_LongDescriptionFactory);

var _IframeFactory = require('./Iframe/IframeFactory');

var _IframeFactory2 = _interopRequireDefault(_IframeFactory);

var _ImageFactory = require('./Image/ImageFactory');

var _ImageFactory2 = _interopRequireDefault(_ImageFactory);

var _TitleFactory = require('./Title/TitleFactory');

var _TitleFactory2 = _interopRequireDefault(_TitleFactory);

var _ShortDescriptionFactory = require('./ShortDescription/ShortDescriptionFactory');

var _ShortDescriptionFactory2 = _interopRequireDefault(_ShortDescriptionFactory);

var _UrlFactory = require('./Url/UrlFactory');

var _UrlFactory2 = _interopRequireDefault(_UrlFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WidgetFactory = (function () {
  function WidgetFactory(widgetName, sortOrder, name, description, templateId, parentIndex) {
    _classCallCheck(this, WidgetFactory);

    this.widgetName = widgetName;
    this.sortOrder = sortOrder;
    this.name = name;
    this.description = description;
    this.templateId = templateId;
    this.parentIndex = parentIndex;
  }

  _createClass(WidgetFactory, [{
    key: 'create',
    value: function create() {
      if (this.widgetName === 'longDescription') {
        var factory = new _LongDescriptionFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else if (this.widgetName === 'shortDescription') {
        var factory = new _ShortDescriptionFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else if (this.widgetName === 'image') {
        var factory = new _ImageFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else if (this.widgetName === 'title') {
        var factory = new _TitleFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else if (this.widgetName === 'link') {
        var factory = new _UrlFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else if (this.widgetName === 'iframe') {
        var factory = new _IframeFactory2.default(this.sortOrder, this.name, this.description, this.templateId, this.parentIndex);
        var factoryInstance = factory.create();

        return factoryInstance;
      } else {
        throw "There is no Widget that matches the this.widgetName.";
      }
    }
  }]);

  return WidgetFactory;
})();

exports.default = WidgetFactory;

},{"./Field/FieldHelper":44,"./Iframe/IframeFactory":48,"./Image/ImageFactory":50,"./LongDescription/LongDescriptionFactory":66,"./ShortDescription/ShortDescriptionFactory":70,"./Title/TitleFactory":74,"./Url/UrlFactory":78,"underscore":"underscore"}],81:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _WidgetFactory = require('./WidgetFactory');

var _WidgetFactory2 = _interopRequireDefault(_WidgetFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidgetSelectList = (function (_React$Component) {
  _inherits(WidgetSelectList, _React$Component);

  function WidgetSelectList(props) {
    _classCallCheck(this, WidgetSelectList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WidgetSelectList).call(this, props));

    _this.state = { selectedWidget: 'longDescription' };
    return _this;
  }

  _createClass(WidgetSelectList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'onWidgetListChange',
    value: function onWidgetListChange(event) {
      this.setState({ selectedWidget: event.target.value });
    }
  }, {
    key: 'onAddWidget',
    value: function onAddWidget(event) {
      var selectedWidget = this.state.selectedWidget;
      var parentIndex = this.props.parentIndex;
      var factory = new _WidgetFactory2.default(selectedWidget, null, '', '', this.props.templateId, parentIndex);
      var factoryInstance = factory.create();

      this.props.onAddWidgetToContentList(factoryInstance);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
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
              { className: 'btn btn-primary', onClick: this.onAddWidget.bind(this) },
              'Add Widget'
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
              'div',
              { onChange: this.onWidgetListChange.bind(this) },
              _react2.default.createElement(
                'select',
                { className: 'form-control' },
                _react2.default.createElement(
                  'option',
                  { value: 'longDescription' },
                  'Long Description'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'shortDescription' },
                  'Short Description'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'title' },
                  'Title'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'iframe' },
                  'Iframe'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'image' },
                  'Image'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'link' },
                  'link'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return WidgetSelectList;
})(_react2.default.Component);

exports.default = WidgetSelectList;

},{"./WidgetFactory":80,"react":"react","react-router":"react-router"}],82:[function(require,module,exports){
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

},{"./Footer":14,"./Header":17,"react":"react"}],83:[function(require,module,exports){
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

},{"underscore":"underscore"}],84:[function(require,module,exports){
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

},{"./routes":85,"history/lib/createBrowserHistory":99,"react":"react","react-dom":"react-dom","react-router":"react-router"}],85:[function(require,module,exports){
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

var _EditGiftRegistry = require('./components/GiftRegistry/EditGiftRegistry');

var _EditGiftRegistry2 = _interopRequireDefault(_EditGiftRegistry);

var _ThingsToDo = require('./components/ThingsToDo/ThingsToDo');

var _ThingsToDo2 = _interopRequireDefault(_ThingsToDo);

var _EditThingsToDo = require('./components/ThingsToDo/EditThingsToDo');

var _EditThingsToDo2 = _interopRequireDefault(_EditThingsToDo);

var _HowToGetThere = require('./components/HowToGetThere/HowToGetThere');

var _HowToGetThere2 = _interopRequireDefault(_HowToGetThere);

var _EditHowToGetThere = require('./components/HowToGetThere/EditHowToGetThere');

var _EditHowToGetThere2 = _interopRequireDefault(_EditHowToGetThere);

var _BridalParty = require('./components/BridalParty/BridalParty');

var _BridalParty2 = _interopRequireDefault(_BridalParty);

var _EditBridalParty = require('./components/BridalParty/EditBridalParty');

var _EditBridalParty2 = _interopRequireDefault(_EditBridalParty);

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
  _react2.default.createElement(_reactRouter.Route, { path: '/gift-registry/edit', component: _EditGiftRegistry2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/things-to-do', component: _ThingsToDo2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/things-to-do/edit', component: _EditThingsToDo2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/how-to-get-there', component: _HowToGetThere2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/how-to-get-there/edit', component: _EditHowToGetThere2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/bridal-party', component: _BridalParty2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/bridal-party/edit', component: _EditBridalParty2.default })
);

},{"./components/Accomodations/Accomodations":10,"./components/BridalParty/BridalParty":11,"./components/BridalParty/EditBridalParty":12,"./components/GiftRegistry/EditGiftRegistry":15,"./components/GiftRegistry/GiftRegistry":16,"./components/Home":18,"./components/HowToGetThere/EditHowToGetThere":19,"./components/HowToGetThere/HowToGetThere":20,"./components/PhotoAlbum/EditPhotoAlbum":22,"./components/PhotoAlbum/PhotoAlbum":23,"./components/TheProposal/EditTheProposal":33,"./components/TheProposal/TheProposal":34,"./components/ThingsToDo/EditThingsToDo":35,"./components/ThingsToDo/ThingsToDo":36,"./components/Venue/EditVenue":37,"./components/Venue/Venue":38,"./components/app":82,"react":"react","react-router":"react-router"}],86:[function(require,module,exports){
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

},{"../actions/FooterActions":2,"../alt":9}],87:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _GiftRegistryActions = require('../actions/GiftRegistryActions');

var _GiftRegistryActions2 = _interopRequireDefault(_GiftRegistryActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GiftRegistryStore = (function () {
  function GiftRegistryStore() {
    _classCallCheck(this, GiftRegistryStore);

    this.bindActions(_GiftRegistryActions2.default);
    this.contentList = [];
    this.ajaxAnimationClass = '';
  }

  _createClass(GiftRegistryStore, [{
    key: 'onGetContentListDataSuccess',
    value: function onGetContentListDataSuccess(data) {
      console.log('onGetContentDataSuccess');
      if (data && data.length > 0) {
        this.contentList = data;
      }
    }
  }, {
    key: 'onGetContenteListDataFail',
    value: function onGetContenteListDataFail(jqXhr) {
      onsole.log('onGetContentDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onSaveContentListDataSuccess',
    value: function onSaveContentListDataSuccess(history) {
      history.pushState(null, '/gift-registry');
    }
  }, {
    key: 'onSaveContentListDataFail',
    value: function onSaveContentListDataFail(jqXhr) {
      onsole.log('onSaveContentDataFail');
      toastr.error(jqXhr.responseJSON.message);
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }]);

  return GiftRegistryStore;
})();

exports.default = _alt2.default.createStore(GiftRegistryStore);

},{"../actions/GiftRegistryActions":3,"../alt":9}],88:[function(require,module,exports){
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

},{"../actions/NavbarActions":4,"../alt":9}],89:[function(require,module,exports){
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
    this.contentList = [];
    this.isModalOpen = false;
    this.selectedPhoto = 1;
    this.ajaxAnimationClass = '';
  }

  _createClass(PhotoAlbumStore, [{
    key: 'onGetPhotoAlbumDataSuccess',
    value: function onGetPhotoAlbumDataSuccess(data) {
      console.log('onGetPhotoAlbumDataSuccess');
      if (data && data.length > 0) {
        this.contentList = data;
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

},{"../actions/PhotoAlbumActions":5,"../alt":9}],90:[function(require,module,exports){
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

},{"../actions/TheProposalActions":6,"../alt":9}],91:[function(require,module,exports){
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
    this.contentList = [];
    this.ajaxAnimationClass = '';
  }

  _createClass(ThingsToDoStore, [{
    key: 'onGetThingsToDoDataSuccess',
    value: function onGetThingsToDoDataSuccess(data) {
      console.log('onGetThingsToDoDataSuccess');
      if (data && data.length > 0) {
        this.contentList = data;
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

},{"../actions/ThingsToDoActions":7,"../alt":9}],92:[function(require,module,exports){
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
    this.contentList = [];
    this.ajaxAnimationClass = '';
  }

  _createClass(VenueStore, [{
    key: 'onGetVenueDataSuccess',
    value: function onGetVenueDataSuccess(data) {
      console.log('onGetVenueDataSuccess');
      if (data && data.length > 0) {
        this.contentList = data;
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

},{"../actions/VenueActions":8,"../alt":9}],93:[function(require,module,exports){
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

},{}],94:[function(require,module,exports){
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
},{}],95:[function(require,module,exports){
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
},{}],96:[function(require,module,exports){
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
},{"_process":93,"warning":111}],97:[function(require,module,exports){
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
},{}],98:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],99:[function(require,module,exports){
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
},{"./Actions":94,"./DOMStateStorage":96,"./DOMUtils":97,"./ExecutionEnvironment":98,"./createDOMHistory":100,"_process":93,"invariant":110}],100:[function(require,module,exports){
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
},{"./DOMUtils":97,"./ExecutionEnvironment":98,"./createHistory":101,"_process":93,"invariant":110}],101:[function(require,module,exports){
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
},{"./Actions":94,"./AsyncUtils":95,"./createLocation":102,"./deprecate":103,"./runTransitionHook":106,"deep-equal":107}],102:[function(require,module,exports){
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
},{"./Actions":94,"./parsePath":105}],103:[function(require,module,exports){
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
},{"_process":93,"warning":111}],104:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],105:[function(require,module,exports){
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
},{"./extractPath":104,"_process":93,"warning":111}],106:[function(require,module,exports){
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
},{"_process":93,"warning":111}],107:[function(require,module,exports){
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

},{"./lib/is_arguments.js":108,"./lib/keys.js":109}],108:[function(require,module,exports){
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

},{}],109:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],110:[function(require,module,exports){
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
},{"_process":93}],111:[function(require,module,exports){
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
},{"_process":93}]},{},[84]);
