'use strict';

// Note: Better error handling should be implemented!

function displayMountain(mountain) {
  var mtnsDiv = document.getElementById('mtnsDiv');
  
  var h2 = document.createElement('h2');
  var mtnName = document.createTextNode(mountain.name);
  h2.appendChild(mtnName);

  var mtnDetails = document.createElement('p');
  var mtnElev = document.createTextNode('Elevation: ' + mountain.elev);
  var br = document.createElement('br');
  var mtnDesc = document.createTextNode(mountain.desc);
  mtnDetails.appendChild(mtnElev);
  mtnDetails.appendChild(br);
  mtnDetails.appendChild(mtnDesc);
  
  var actionsDiv = document.createElement('div');

  var editLink = document.createElement('a');
  editLink.setAttribute('href', `#`);
  editLink.innerHTML = 'edit';

  editLink.addEventListener('click', (e) => {
    e.preventDefault();
    getMountain(mountain._id);
  });

  var deleteLink = document.createElement('a');
  deleteLink.setAttribute('href', '#');
  deleteLink.innerHTML = 'delete';

  deleteLink.addEventListener('click', (e) => {
    e.preventDefault();
    deleteMountain(mountain._id);
  });

  var spacer = document.createTextNode(' / ' );

  actionsDiv.appendChild(editLink);
  actionsDiv.appendChild(spacer);
  actionsDiv.appendChild(deleteLink);

  mtnsDiv.appendChild(h2);
  mtnsDiv.appendChild(mtnDetails);
  mtnsDiv.appendChild(actionsDiv);
}

// AJAX GET request - all Mountains
function getMountains() {
  $.getJSON('/api', () => {
  })
  .done((mountains) => {
    mountains.forEach((mountain) => {
      displayMountain(mountain);
    });
  })
  .fail((e) => {
    console.log(e);
  });
}

// AJAX POST request - New Mountain
function createMountain() {
 $.ajax({
  type: 'POST',
  url: '/api/create',
  data: JSON.stringify({
    'name': $('#name').val(),
    'elev': $('#elev').val(),
    'desc': $('#desc').val()
  }), 
  success: (mountain) => { 
    $('#name').val('');
    $('#elev').val('');
    $('#desc').val('');
    displayMountain(mountain); 
  },
    contentType: "application/json",
    dataType: 'json'
  });
}

// AJAX GET request - Single Mountain
function getMountain(id) {
  $('#mountainForm').hide();
  $('#mtnsDiv').hide();

  $.getJSON(`/api/${id}`, () => {
  })
  .done((mountain) => {
    //displayMountain(mountain);
    $('#editName').val(mountain.name);
    $('#editElev').val(mountain.elev);
    $('#editDesc').val(mountain.desc);
    $('#editId').val(id);
    $('#editForm').show();
  })
  .fail((e) => {
    console.log(e);
  });
}

// AJAX DELETE request - Delete Mountain
function deleteMountain(id) {
  $.ajax({
    type: 'DELETE',
    url: '/api/delete',
    data: JSON.stringify({
      'mountain_id': id
    }), 
    success: (mountain) => { 
      document.location.href="/";
    },
      contentType: "application/json",
      dataType: 'json'
    });
}

// AJAX PUT - Update Mountain
function updateMountain(id) {
  $.ajax({
    type: 'PUT',
    url: '/api/update',
    data: JSON.stringify({
      'mountain_id': $('#editId').val(),
      'name': $('#editName').val(),
      'elev': $('#editElev').val(),
      'desc': $('#editDesc').val()
    }), 
    success: (mountain) => { 
      document.location.href="/";
    },
      contentType: "application/json",
      dataType: 'json'
    });
}

$(document).ready(() => {
  $('#mountainForm').submit((e) => {
    e.preventDefault();
    createMountain();
  });

  $('#cancelBtn').click(() => {
    $('#editName').val('');
    $('#editElev').val('');
    $('#editDesc').val('');
    $('#editForm').hide();

    $('#mountainForm').show();
    $('#mtnsDiv').show();
  });

  $('#editForm').submit((e) => {
    e.preventDefault();
    updateMountain();
  })

  getMountains();
});