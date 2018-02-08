$(document).ready(function(){
  (function init() {
      $.getJSON('http://localhost:3000',function() {
      })
      .done(function(data) {
          console.log(data);
      })
      .fail(function() {
          console.log('Error connecting to Server.');
      });
  }());
});
