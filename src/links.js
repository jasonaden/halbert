var Link = require('./link'),
    _ = require('lodash');
function Links(json) {
  "use strict";
  if (!json) {
    return;
  }

  if (!_.isPlainObject(json)) {
    throw new TypeError('The provided object is not an object literal.');
  }

  if (!json.hasOwnProperty('self')) {
    throw new TypeError('No link to self.');
  }

  var links = {};
  Object.keys(json).forEach(function (k) {
    links[k] = new Link(json[k]);
  });

  this.get = function (k) {
    return links[k];
  };
}

module.exports = Links;

