'use strict';

$(document).ready(function(){
    var mountains = [];
    
    function Mountain(name, lat, lng, elevation, difficulty, img, url) {
        var name = name;
        var lat = lat;
        var lng = lng;
        var elevation = elevation;
        var difficulty = difficulty;
        var img = img;
        var url = url;
        var desc = '';
        
        this.getName = function() {
            return name;
        };
        this.getLatLng = function() {
            return [lat, lng];
        };
        this.getElevation = function() {
            return elevation;
        };
        this.getDifficulty = function() {
            return difficulty;
        };
        this.getImg = function() {
            return img;
        };
        this.getURL = function() {
            return url;
        };
        this.setDesc = function(theDesc) {
            desc = theDesc;
        };
        this.getDesc = function() {
            return desc;
        };
    }
    
    Mountain.prototype.persist = function(mountains) {
        mountains.push(this);
    };
        
    function displayMountain(mountain) {        
        $('#mtnImage').attr('src', mountain.getImg());
        $('#mtnImage').attr('alt', mountain.getName());
        $('#mtnName').html(`${mountain.getName()} (${mountain.getElevation()})`);
        var latlng = mountain.getLatLng();
        $('#latlng').html(`Lat: ${latlng[0]}, Lng: ${latlng[1]}`);
        $('#mtnDesc').html(mountain.getDesc());
        
        $('#mtnImage').removeClass('hidden');
    }
    
    function populateSelectElement(mountains) {
         mountains.forEach((mountain, index) => {
             var anchor = $('<a></a>')
                  .attr('class', 'dropdown-item')
                  .attr('data-value', index)
                  .text(mountain.getName());
             
             $(anchor).click((e) => {
                 e.preventDefault();
                 
                 $('#mtnImage').addClass('hidden');
                 $('#latlng').html('');
                 $('#mtnName').html('Loading Mountain Data...');
                 $('#mtnDesc').html('');
                 
                 if (mountain.getDesc() !== '') {
                    displayMountain(mountain);
                 } else {
                    $.getJSON(`http://127.0.0.1:3000?action=mountain&dataURL=/${mountain.getURL()}`, (data) => {
                        data = JSON.parse(data);
                        var desc = data.mountain[0].mountainDesc;
                        mountain.setDesc(desc);
       
                        displayMountain(mountain);
                     });
                 }
             });
             
             $('#mtnName').html('');
             $('#metnSelectMnu').append(anchor);
             $('#mtnSelect').removeClass('hidden');
         });
     }
    
    $.getJSON('http://127.0.0.1:3000?action=mountains&dataURL=/', (data) => {
        data = JSON.parse(data);        
        data.mountains.forEach((mountain, index) => {
            var name = mountain.mountainName;
            var lat = lat_lng[index].lat;
            var lng = lat_lng[index].lng;
            var elevation = mountain.mountainElevation;
            var difficulty = mountain.mountainEffort;
            var img = mountain.mountainPic;
            var url = mountain.mountainURL;
            var newMountain = new Mountain(name, lat, lng, elevation, difficulty, img, url);
            newMountain.persist(mountains);
         });
        
        populateSelectElement(mountains);
    });
});
