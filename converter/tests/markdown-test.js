var utils = require('./utils.js');
var markdown = utils.markdown;
var assertion = utils.assertion;

var features_dir = __dirname + '/features/';
var testsuite = utils.getTestSuite(features_dir);

describe('parse() features testsuite', function () {
  'use strict';
  for (var i = 0; i < testsuite.length; ++i) {
    it(testsuite[i].name, assertion(testsuite[i], markdown));
  }
})

var parseHorizontaleLine = function(str) {
  var horizontalRegExp = /^(?:([\*\-_] ?)+)\1\1$/gm;
  var stra = [];
  while ((stra = horizontalRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '\n<hr/>\n');
  }
  return str;
 }

 var parseLink = function(str) {
  var linkRegExp = /\[([^\[]+)\]\(([^\)]+)\)/;
  var stra = [];
  while ((stra = linkRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<a ' + 'href="' + stra[2] + '">' + stra[1] + '</a>');
  }
  return str;
 }


 var markdown = {
   parse: function (str, strict) {
     'use strict';
     str = parseHeadline(str);
     str = parseHorizontaleLine(str);
    str = parseLink(str);
     return str;
   }
 };
