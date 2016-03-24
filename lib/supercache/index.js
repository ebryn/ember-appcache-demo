/*jshint node:true*/

var Filter = require('broccoli-filter');

function SimpleAssetRewriter(inputTree, options) {
  if (!(this instanceof SimpleAssetRewriter)) {
    return new SimpleAssetRewriter(inputTree, options);
  }

  options = options || {};

  Filter.call(this, inputTree, {
    extensions: ['html'],
    annotation: options.annotation || 'SimpleAssetRewriter'
  });
}

SimpleAssetRewriter.prototype = Object.create(Filter.prototype);
SimpleAssetRewriter.prototype.constructor = SimpleAssetRewriter;

// var LINK_TAG_REGEX = /(<link[^>]*>)/gim;
// var SCRIPT_TAG_REGEX = /(<script[^<]*<\/script>)/gim;

var SCRIPT_AND_LINK_OPENING_TAG_REGEX = /<\/?(script|link)/gim;
var SCRIPT_CLOSING_TAG_REGEX = /<\/(script)>/gim;
SimpleAssetRewriter.prototype.processString = function(string, relativePath) {
  var output = string;
  if (relativePath === 'index.html') {
    output = output.replace(SCRIPT_AND_LINK_OPENING_TAG_REGEX, '<offline-$1').replace(SCRIPT_CLOSING_TAG_REGEX, '</offline-$1');
    output = output.replace(/<(\/?)boot-script/gim, '<$1script');
  }

  return output;
};

module.exports = {
  name: 'supercache',

  isDevelopingAddon: function() {
    return true;
  },

  included: function() {
    this.options = {enabled: true};
  },

  contentFor: function(type, config, content) {
    if (type === 'body-footer') {
      return '<boot-script>\n' +
      'function loadAssets() {\n' +
      '  var offlineTags = document.querySelectorAll("offline-script, offline-link");\n' +
      '  for (var i = 0, l = offlineTags.length; i < l; i++) {\n' +
      '    var offlineTag = offlineTags[i];\n' +
      '    var newTag = document.createElement(offlineTag.tagName.replace("OFFLINE-", ""));\n' +
      '    newTag.async = false;\n' +
      '    for (var j = 0, m = offlineTag.attributes.length; j < m; j++) {\n' +
      '      newTag.setAttribute(offlineTag.attributes[j].nodeName, offlineTag.attributes[j].nodeValue);\n' +
      '    }\n' +
      '    document.body.appendChild(newTag);\n' +
      '  }\n' +
      '}\n' +

      'window.addEventListener("load", function(e) {\n' +
      '  window.applicationCache.addEventListener("cached", function(e) {\n' +
      '    loadAssets();\n' +
      '  }, false);\n' +
      '  window.applicationCache.addEventListener("noupdate", function(e) {\n' +
      '    loadAssets();\n' +
      '  }, false);\n' +
      '  window.applicationCache.addEventListener("updateready", function(e) {\n' +
      '    window.applicationCache.swapCache();\n' +
      '    loadAssets();\n' +
      '  }, false);\n' +
      '  window.applicationCache.addEventListener("error", function(e) {\n' +
      '    loadAssets();\n' +
      '  }, false);\n' +
      '});\n' +
      '</boot-script>';
    }
  },

  postprocessTree: function (type, tree) {
    if (type === 'all' && this.options.enabled) {
      tree = SimpleAssetRewriter(tree, this.options);
    }

    return tree;
  }
};
