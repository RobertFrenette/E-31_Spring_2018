// index.js

// Helper function to format Elevation
Number.prototype.format = function(){
    return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
 };

$(document).ready(function(){
    setActivePage('index');

    var currentMtnLat = 0;
    var currentMtnLng = 0;
    var currentMtnName = "";

    $('#mountainModal').on('shown.bs.modal', function(){
        createMap(currentMtnLat, currentMtnLng, true);
        addMarker(currentMtnLat, currentMtnLng, currentMtnName);
    });

    // AJAX GET to Node server for mountain data
    function init() {
        $.getJSON('http://localhost:3000/mountains',function() {
        })
        .done(function(data) {
            //console.log(data);

            // No Mountains in .JSON file
            if (data.mountains.length === 0) {
                $('#addMtnBtn').removeClass('hidden');
                $('#alertMsg').html('No Mountains found.');
            } else {
                $('#alertMsg').hide();
                $('#mtnBtn').show();
                data.mountains.forEach((mountain, index) => {
                    // Dynamically populate Bootstrap dropdown-toggle with dropdown-item Anchor tags
                    // and bind Click Handler
                    $('#dropDownMenuItems').append($('<a>')
                        .attr('class', 'dropdown-item')
                        .attr('href', '#')
                        .attr('id', 'mtn_' + index)
                        .html(mountain.name)
                        .on('click', () => {
                            // Hide Div while loading data
                            $('#mtnDiv').addClass('hidden');
                            $('#mapBtn').addClass('hidden');
    
                            currentMtnLat = mountain.coords.lat;
                            currentMtnLng = mountain.coords.lng;
                            currentMtnName = mountain.name;
    
                            $('#mtnImg').attr('src', 'http://www.outdoors.org/wp-content/uploads/2017/10/' + mountain.img);
                            $('#mtnName').html(mountain.name);
                            $('#mtnElev').html(parseInt(mountain.elevation).format());
                            $('#mtnDiff').html(mountain.effort);
                            $('#mtnDesc').html(mountain.desc);
    
                            // Show Div
                            $('#mtnDiv').removeClass('hidden');
                            $('#mapBtn').removeClass('hidden');
                        })
                    ); 
                });
            }
        })
        .fail(function() {
            displayServerConnectError();

            $('#mtnBtn').addClass('disabled');
        });
    }

    init();
});
