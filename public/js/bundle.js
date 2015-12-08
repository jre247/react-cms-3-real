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

},{"../alt":5}],2:[function(require,module,exports){
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

},{"../alt":5,"underscore":"underscore"}],3:[function(require,module,exports){
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

var TheProposalActions = (function () {
  function TheProposalActions() {
    _classCallCheck(this, TheProposalActions);

    this.generateActions('getProposalDataSuccess', 'getProposalDataFail', 'saveProposalDataSuccess', 'saveVProposalDataFail', 'updateUrl', 'updateLongDescription', 'updateAjaxAnimation');
  }

  _createClass(TheProposalActions, [{
    key: 'getProposalData',
    value: function getProposalData() {
      var _this = this;

      var pageId = 2;
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

      var pageId = 1;
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

},{"../alt":5,"underscore":"underscore"}],4:[function(require,module,exports){
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

var VenueActions = (function () {
  function VenueActions() {
    _classCallCheck(this, VenueActions);

    this.generateActions('getVenueDataSuccess', 'getVenueDataFail', 'saveVenueDataSuccess', 'saveVenueDataFail', 'updateName', 'updateEventDate', 'updateUrl', 'updateCeremonyTime', 'updateCocktailHourTime', 'updateReceptionTime', 'updateAfterPartyTime', 'updateAjaxAnimation');
  }

  _createClass(VenueActions, [{
    key: 'getVenueData',
    value: function getVenueData() {
      var _this = this;

      var pageId = 1;
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

      var pageId = 1;
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

},{"../alt":5,"underscore":"underscore"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],6:[function(require,module,exports){
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

},{"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
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

},{"./Footer":10,"./Header":12,"react":"react"}],8:[function(require,module,exports){
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
        contentType: 1,
        sortOrder: 1
      }, {
        name: 'Proposal Description',
        description: 'Proposal Description',
        value: this.state.proposal.description,
        contentType: 2,
        sortOrder: 2
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
                    _react2.default.createElement('input', { ref: 'description', className: 'form-control', name: 'description', placeholder: 'Description',
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

},{"../actions/TheProposalActions":3,"../stores/TheProposalStore":22,"react":"react"}],9:[function(require,module,exports){
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
        contentType: 4,
        sortOrder: 1
      }, {
        name: 'Venue Event Date',
        description: 'Venue Event Date',
        value: this.state.venue.eventDate,
        contentType: 2,
        sortOrder: 2
      }, {
        name: 'Venue Image Url',
        description: 'Venue Image Url',
        value: this.state.venue.url,
        contentType: 1,
        sortOrder: 3
      }, {
        name: 'Venue Ceremony Time',
        description: 'Venue Ceremony Time',
        value: this.state.venue.ceremonyTime,
        contentType: 2,
        sortOrder: 4
      }, {
        name: 'Venue Cockailtail Hour',
        description: 'Venue Cockailtail Hour',
        value: this.state.venue.cocktailHourTime,
        contentType: 2,
        sortOrder: 5
      }, {
        name: 'Venue Reception',
        description: 'Venue Reception',
        value: this.state.venue.receptionTime,
        contentType: 2,
        sortOrder: 6
      }, {
        name: 'Venue After Party',
        description: 'Venue After Party',
        value: this.state.venue.afterPartyTime,
        contentType: 2,
        sortOrder: 7
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

},{"../actions/VenueActions":4,"../stores/VenueStore":23,"react":"react"}],10:[function(require,module,exports){
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

},{"../actions/FooterActions":1,"../stores/FooterStore":20,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
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

},{"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
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

},{"./Navigation":14,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
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

},{"react":"react"}],14:[function(require,module,exports){
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
        )
      );
    }
  }]);

  return Navbar;
})(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":2,"../stores/NavbarStore":21,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
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

var PhotoAlbum = (function (_React$Component) {
  _inherits(PhotoAlbum, _React$Component);

  function PhotoAlbum(props) {
    _classCallCheck(this, PhotoAlbum);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoAlbum).call(this, props));
    //this.state = NavbarStore.getState();
    //this.onChange = this.onChange.bind(this);
  }

  _createClass(PhotoAlbum, [{
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
        { className: 'Detail' },
        _react2.default.createElement('img', { className: 'Content-small-image', src: 'https://scontent-lga3-1.xx.fbcdn.net/hphotos-xfl1/v/t1.0-9/11110451_928484358212_2031419656314985032_n.jpg?oh=9969b77e474d57ff095023a9be655c9f&oe=56EFD67D' }),
        _react2.default.createElement('img', { className: 'Content-small-image', src: 'https://scontent-lga3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/12190078_10207642386968667_4983569545503341933_n.jpg?oh=0270b12b271788139391ccab795d37b4&oe=56DF764F' }),
        _react2.default.createElement('img', { className: 'Content-small-image', src: 'https://scontent-lga3-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/12122438_10207641487266175_3794466943909669980_n.jpg?oh=540ea2865ff66b8284a8a2d45363e1af&oe=56E66A4B' })
      );
    }
  }]);

  return PhotoAlbum;
})(_react2.default.Component);

exports.default = PhotoAlbum;

},{"react":"react","react-router":"react-router"}],16:[function(require,module,exports){
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
      if (!this.state.proposal && !this.state.description) {
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
          _react2.default.createElement('img', { className: 'Content-large-image', src: this.state.proposal.url, alt: 'Proposal Image' }),
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

},{"../actions/TheProposalActions":3,"../stores/TheProposalStore":22,"react":"react","react-router":"react-router"}],17:[function(require,module,exports){
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
      if (!this.state.venue && !this.state.name) {
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
          _react2.default.createElement('img', { className: 'Content-large-image', src: this.state.venue.url, alt: 'Venue Image' }),
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

},{"../actions/VenueActions":4,"../stores/VenueStore":23,"react":"react","react-router":"react-router"}],18:[function(require,module,exports){
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

},{"./routes":19,"history/lib/createBrowserHistory":30,"react":"react","react-dom":"react-dom","react-router":"react-router"}],19:[function(require,module,exports){
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

var _EditVenue = require('./components/EditVenue');

var _EditVenue2 = _interopRequireDefault(_EditVenue);

var _EditTheProposal = require('./components/EditTheProposal');

var _EditTheProposal2 = _interopRequireDefault(_EditTheProposal);

var _GiftRegistry = require('./components/GiftRegistry');

var _GiftRegistry2 = _interopRequireDefault(_GiftRegistry);

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
  _react2.default.createElement(_reactRouter.Route, { path: '/accomodations', component: _Accomodations2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/gift-registry', component: _GiftRegistry2.default })
);

},{"./components/Accomodations":6,"./components/App":7,"./components/EditTheProposal":8,"./components/EditVenue":9,"./components/GiftRegistry":11,"./components/Home":13,"./components/PhotoAlbum":15,"./components/TheProposal":16,"./components/Venue":17,"react":"react","react-router":"react-router"}],20:[function(require,module,exports){
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

},{"../actions/FooterActions":1,"../alt":5}],21:[function(require,module,exports){
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

},{"../actions/NavbarActions":2,"../alt":5}],22:[function(require,module,exports){
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
      this.proposal.eventDate = event.target.value;
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

},{"../actions/TheProposalActions":3,"../alt":5}],23:[function(require,module,exports){
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

},{"../actions/VenueActions":4,"../alt":5}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
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
},{}],27:[function(require,module,exports){
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
},{"_process":24,"warning":42}],28:[function(require,module,exports){
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
},{}],29:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],30:[function(require,module,exports){
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
},{"./Actions":25,"./DOMStateStorage":27,"./DOMUtils":28,"./ExecutionEnvironment":29,"./createDOMHistory":31,"_process":24,"invariant":41}],31:[function(require,module,exports){
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
},{"./DOMUtils":28,"./ExecutionEnvironment":29,"./createHistory":32,"_process":24,"invariant":41}],32:[function(require,module,exports){
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
},{"./Actions":25,"./AsyncUtils":26,"./createLocation":33,"./deprecate":34,"./runTransitionHook":37,"deep-equal":38}],33:[function(require,module,exports){
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
},{"./Actions":25,"./parsePath":36}],34:[function(require,module,exports){
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
},{"_process":24,"warning":42}],35:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],36:[function(require,module,exports){
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
},{"./extractPath":35,"_process":24,"warning":42}],37:[function(require,module,exports){
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
},{"_process":24,"warning":42}],38:[function(require,module,exports){
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

},{"./lib/is_arguments.js":39,"./lib/keys.js":40}],39:[function(require,module,exports){
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

},{}],40:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],41:[function(require,module,exports){
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
},{"_process":24}],42:[function(require,module,exports){
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
},{"_process":24}]},{},[18]);
