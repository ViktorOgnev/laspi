/**
 * Make IE's XMLHTTP object accessible through XMLHttpRequest()
 */
if (typeof XMLHttpRequest == 'undefined') {
  XMLHttpRequest = function () {
    var msxmls = ['MSXML3', 'MSXML2', 'Microsoft']
    for (var i=0; i < msxmls.length; i++) {
      try {
        return new ActiveXObject(msxmls[i]+'.XMLHTTP')
      }
      catch (e) { }
    }
    throw new Error("No XML component installed!");
  }
}

/**
 * Creates an HTTP GET request and sends the response to the callback function.
 *
 * Note that dynamic arguments in the URI should be escaped with encodeURIComponent().
 */
function HTTPGet(uri, callbackFunction, callbackParameter) {
  var xmlHttp = new XMLHttpRequest();
  var bAsync = true;
  if (!callbackFunction) {
    bAsync = false;
  }
  xmlHttp.open('GET', uri, bAsync);
  xmlHttp.send(null);

  if (bAsync) {
    if (callbackFunction) {
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4) {
          callbackFunction(xmlHttp.responseText, xmlHttp, callbackParameter);
        }
      }
    }
    return xmlHttp;
  }
  else {
    return xmlHttp.responseText;
  }
}

/**
 * Creates an HTTP POST request and sends the response to the callback function
 *
 * Note: passing null or undefined for 'object' makes the request fail in Opera 8.
 *       Pass an empty string instead.
 */
function HTTPPost(uri, callbackFunction, callbackParameter, object) {
  var xmlHttp = new XMLHttpRequest();
  var bAsync = true;
  if (!callbackFunction) {
    bAsync = false;
  }
  xmlHttp.open('POST', uri, bAsync);

  var toSend = '';
  if (typeof object == 'object') {
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    for (var i in object) {
      toSend += (toSend ? '&' : '') + i + '=' + encodeURIComponent(object[i]);
    }
  }
  else {
    toSend = object;
  }
  xmlHttp.send(toSend);

  if (bAsync) {
    if (callbackFunction) {
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4) {
          callbackFunction(xmlHttp.responseText, xmlHttp, callbackParameter);
        }
      }
    }
    return xmlHttp;
  }
  else {
    return xmlHttp.responseText;
  }
}