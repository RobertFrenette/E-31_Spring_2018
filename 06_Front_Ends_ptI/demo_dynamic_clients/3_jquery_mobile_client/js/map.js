// map.js
"use strict";

var map; // GoogleMaps Object
function initMap() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {});
}

// Create Map
function createMap(lat, lng) {
  var latLng = new google.maps.LatLng(lat, lng);
  var zoom = 9;
  map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: zoom,
      center: latLng
  });
}

// Add Map Marker
function addMarker(lat, lng, txt) {
  var latLng = new google.maps.LatLng(lat, lng);
  var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: txt
  });
}
