 var parseBold = function(str) {
  var boldRegExp = /(\*\*)(.*?)\1/;
  var stra = [];
  while ((stra = boldRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<strong>' + stra[2] + '</strong>')
  }
  return str;
}


 var parseHeadline = function(str) {
   var headlineRegExp =  /^(\#{1,6})([^\#\n]+)$/m;
   var stra = [];
   while ((stra = headlineRegExp.exec(str)) !== null) {
     count = stra[1].length;
     str = str.replace(stra[0], '<h' + count + '>' + stra[2] + '</h' + count + '>' + '\n');
   }
   return str;
 }

 
 var parseHorizontaleLine = function(str) {
  var horizontalRegExp = /^(?:([\*\-_] ?)+)\1\1$/gm;
  var stra = [];
  while ((stra = horizontalRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '\n<hr/>\n');
  return str;
 }

 var parseLink = function(str) {
  var linkRegExp = /\[([^\[]+)\]\(([^\)]+)\)/;
  var stra = [];
  while ((stra = linkRegExp.exec(str)) !== null) {
     str = str.replace(stra[0], '<b>' + stra[2] + '</b>')
  }
 return str;
 }

<<<<<<< HEAD
	var parseStrong = function(str) {
	  var strongRegExp = /(~~)(.*?)\1/;
	  var stra = [];
	  while ((stra = strongRegExp.exec(str)) !== null) {
	    str = str.replace(stra[0], '<b>' + stra[2] + '</b>')

 
 
	  var parseCode = function(str) {
	  var codeRegExp = /`{1}(\w+)`{1}/;
	  var stra = [];
	  while ((stra = codeRegExp.exec(str)) !== null) {
	  
	    str = str.replace(stra[0], '<pre>' + stra[1] + '</pre>');
	  }
	  return str;
	 }



var parseItalic = function(str) {
  var italicRegExp = /(\*|_)(.*?)\1/;
  var stra = [];
  while ((stra = italicRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<i>' + stra[2] + '</i>')
  }
  return str;
}
=======
 var parseNewLine = function(str) {
  var newLineRegExp = /(\n)/;
  var stra = [];
  while ((stra = newLineRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<br/>');
  }
  return str;
 }

 var parseBlockQuote = function(str) {
  var quoteRegExp = /\:\"(.*?)\"\:/
  var stra = [];
  while ((stra = quoteRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<blockquote>' + stra[1] + '</blockquote>');
  }
  return str;
 }


var markdown = {
  parse: function (str, strict) {
    'use strict';
    str = parseHeadline(str);
     str = parseStrong(str);
    str = parseBold(str);
    str = parseItalic(str);
    str = parseHorizontaleLine(str);
     str = parseCode(str);
    str = parseLink(str);

    

    str = parseBlockQuote(str);

    return str;
  }
};


 module.exports = markdown;
