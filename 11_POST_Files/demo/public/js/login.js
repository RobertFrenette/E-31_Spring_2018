"use strict";

$(document).ready(function () {
  // Get HTML Elements
  var userName  = $('#username');
  var password  = $('#password');
  var loginForm = $('#loginForm');
  var loginBtn = $('#loginBtn');
  var rememberMe = $('#rememberMe');
  
  function localStorargeSupported() {
    if (typeof(Storage) !== "undefined") {
      return true;
    } else {
      return false;
    }
  }

  // Bind Event Handlers
  /*
  loginBtn.click(function () {
    if (localStorargeSupported()) {
      localStorage.setItem('persistedData', JSON.stringify({"userName": userName.val(), "rememberMe": rememberMe.is(':checked')}));
    }
    loginForm.submit();
  });
  */
  loginForm.submit(function (e) {
    e.preventDefault();
    if (localStorargeSupported()) {
      localStorage.setItem('persistedData', JSON.stringify({"userName": userName.val(), "rememberMe": rememberMe.is(':checked')}));
    }
    this.submit();
  });

  // on page load
  if (localStorargeSupported()) {
    var persistedData = localStorage.getItem('persistedData');
    
    if (persistedData !== null) {
      var parsedData = JSON.parse(persistedData);
      if (parsedData.rememberMe === true) {
        userName.val(parsedData.userName);
        rememberMe.prop('checked', true);
        password.focus();
      }
    }
  }
});