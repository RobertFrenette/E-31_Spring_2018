// disclaimer.js

$(document).ready(function(){
  setActivePage('disclaimer');
  
  // AJAX GET to Node server for mountain data
  function init() {
      $.getJSON('http://localhost:3000',function() {
      })
      .done(function(data) {
          $('#alertMsg').hide();
          data.mountains.forEach((mountain, index) => {
              // Only init Map Object once
              if (index === 0) {
                  createMap(mountain.coords.lat, mountain.coords.lng, false);
              }
              addMarker(mountain.coords.lat, mountain.coords.lng, mountain.name);
          });
      })
      .fail(function() {
        $('#jumbotron').addClass('hidden');
        displayServerConnectError();
      });
  }

  init();
});
