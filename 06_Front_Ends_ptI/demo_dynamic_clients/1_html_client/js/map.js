// map.js
"use strict";

var map; // GoogleMaps Object
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {});
}

// Create Map
function createMap(lat, lng, index) {
  var latLng = new google.maps.LatLng(lat, lng);
  var zoom = (index ? 12 : 9);
  map = new google.maps.Map(document.getElementById('map'), {
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