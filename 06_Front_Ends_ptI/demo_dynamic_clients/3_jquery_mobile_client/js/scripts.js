// scripts.js

// Array to hold Mountani data - global because it's shared
var mountainData = [];

// util function
Number.prototype.format = function(){
  return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

// display single Moutain data on page -- called from onPageShow Event Handler
function displayMtnData(mountain) {
  $('#mtnImg').attr('src', mountain.img);
  $('#mtnName').html(mountain.name);
  $('#mtnElev').html(mountain.elevation.format());
  $('#mtnDiff').html(mountain.effort);
  $('#mtnDesc').html(mountain.desc);
}

// AJAX GET to Node server for mountain data
function getMtnData(next) {
  $.getJSON('http://localhost:3000', function () {
  })
    .done(function (data) {
      data.mountains.forEach((mountain, index) => {
        mountainData.push(mountain);
      });

      // callbak funct
      next();
    })
    .fail(function () {
      $('#mapErrorMsg').removeClass('hidden');
  });
}

// onPageShow Event Handler for Map Page
$(document).on("pageshow", "#map-page", function () {  
  function init() {
    mountainData.forEach((mountain, index) => {
      // Only init Map Object once
      if (index === 0) {
        createMap(mountain.coords.lat, mountain.coords.lng);
      }
      addMarker(mountain.coords.lat, mountain.coords.lng, mountain.name);
    });
  }

  // check to see if we alredy have mountainData
  if (mountainData.length == 0) {
    // if not, get is via JSON
    getMtnData(init);
  } else {
    // else use data in mountainData[]
    init();
  }
});

// onPageShow Event Handler for Mountain Data Page
$(document).on("pageshow", "#data-page", function () {  
  function init() {
    mountainData.forEach((mountain, index) => {
          $("#mtn-select").append('<option value=mtn_"' + index + '">' + mountain.name+ '</option>');
        });

        $("#mtn-select").on('change', () => {
          let mountain = mountainData[$("#mtn-select").prop('selectedIndex')];
          displayMtnData(mountain);
        });

        // Select Mt. Washington by default
        $("mtn-select select").val("mtn_0");
        let mountain = mountainData[$("#mtn-select").prop('selectedIndex')];
        displayMtnData(mountain);

        $('#mtn-select').selectmenu('refresh');
        $('#mtnDispDiv').removeClass('hidden');
  }

  if (mountainData.length == 0) {
    getMtnData(init);
  }  else {
    init();
  }
});
