// add_mtn.js

$(document).ready(function(){
  setActivePage('add_mtn');

  // Note: The following could be bound to onChange / onBlur element EventHandlers -vs- onSubmit of Form
  function processForm() {
    // validate elevation
    if ($('#mtnElevation').val() < 4003 || $('#mtnElevation').val() > 6288) {
      $('#alertMsg').html('Elevation must be between 4,003 and 6,288 feet.');
      $('#mtnElevation').focus();
      $('#alertMsg').show();
      return false;
    }

    // validate effort
    if ($('#mtnEffort').val() === '') {
      $('#alertMsg').html('Please select an effort.');
      $('#mtnEffort').focus();
      $('#alertMsg').show();
      return false;
    }

    // validate image
    if ($('#mtnImage').val() === '') {
      $('#alertMsg').html('Please enter an image name.');
      $('#mtnImage').focus();
      $('#alertMsg').show();
      return false;
    }

    // validate lat / lng
    // Note: Can break into Lat and Lgn checks, and place cursor as needed
    var regex = /^([-+]?)([\d]{1,2})(((\.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((\.)(\d+))?)$/;
    var latLng = `${$('#mtnLat').val()},${$('#mtnLng').val()}`;
    if (! regex.test(latLng)) {
      $('#alertMsg').html('Latitude and Longitude must be numeric.');
      $('#alertMsg').show();
      return false;
    }

    // Form is valid
    $('#alertMsg').html('');
    $('#alertMsg').hide();

    return true;
  }

  // Submit the form - AJAX to Node
  function submitForm() {
    let data = {
                  "mtnName" :  $('#mtnName').val(),
                  "mtnElevation" : $('#mtnElevation').val(),
                  "mtnEffort" : $('#mtnEffort').val(),
                  "mtnImage" : $('#mtnImage').val(),
                  "mtnDesc" : $('#mtnDesc').val(),
                  "mtnLat" : $('#mtnLat').val(),
                  "mtnLng" : $('#mtnLng').val()};

    $.post( "http://localhost:3000/mountain", JSON.stringify(data), function() {
    })
      .done(function() {
        $('#alertMsg').html('');
        $('#alertMsg').hide();

        // Reset Form
        $('#resetBtn').click();
        // TBD: remove alert and disp using jQuery fade() methods
        alert('Mountain added.');
      })
      .fail(function(e) {
        if (e.status === 403) {
          $('#alertMsg').html(`Mountain not created. ${$('#mtnName').val()} already exists.`);
        } else {
          $('#alertMsg').html('Error: Unable to connect to server.');
        }
        $('#alertMsg').show();
      })
  }

  function resetImg() {
    $('#mtnImagePreviewDiv').hide();
    $('#mtnImg').attr("src", '');
    $('#mtnImg').hide();
  }

  // Bind EventHandlers
  $('#mtnImage').on('blur', () => {
    let url = $('#mtnImage').val();

    if (url !== '') {
      $('#mtnImagePreviewDiv').show();
    } else {
      $('#mtnImagePreview').prop('checked', false);
      $('#mtnImagePreviewDiv').hide();
      resetImg();
    }
  });

  $('#mtnImagePreview').on('change', () => {
    if ($('#mtnImagePreview').prop('checked')) {
      let imgSrcUrlPrefix = 'http://www.outdoors.org/wp-content/uploads/2017/10/';
      let imgSrcUrl = imgSrcUrlPrefix + $('#mtnImage').val();
      $('#mtnImg').attr("src", imgSrcUrl);
      $('#mtnImg').show();
    } else {
      resetImg();
    }
  });

  $('#resetBtn').on('click', () => {
    resetImg();
    $('#alertMsg').html('');
    $('#alertMsg').hide();
    $('#mtnName').focus();
  });

  $('#mtnForm').on('submit', (e) => {
    e.preventDefault();
    if (processForm()) {
      submitForm();
    }
  });
});