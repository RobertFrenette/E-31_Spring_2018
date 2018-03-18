"use strict";

$(document).ready(function () {
  // Get HTML Elements
  var registerForm = $('#registerForm');
  var password = $('#password');
  var confirm  = $('#confirm');
  var errMsg   = $('#errMsg');

  // Bind Event Handlers
  registerForm.submit(function (e) {
    if (password.val().length < 8) {
      errMsg.html('Password must be at least 8 characters.');
      errMsg.show();
      password.focus();
      event.preventDefault();
    } else if (password.val() !== confirm.val()) {
      confirm.val('');
      confirm.focus();
      errMsg.html('Passwords do not match.');
      errMsg.show();
      event.preventDefault();
    } // else submit
  });
});