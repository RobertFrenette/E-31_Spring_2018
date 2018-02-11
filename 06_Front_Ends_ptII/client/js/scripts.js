// scripts.js

// Util funct for setting Active Page in nav
function setActivePage(page) {
    if (page === 'index') {
        $('#albumPage').removeClass('active');
        $('#addMtnPage').removeClass('active');
        $('#disclaimerPage').removeClass('active');
        $('#indexPage').addClass('active');
    } else if (page === 'album') {
        $('#indexPage').removeClass('active');
        $('#addMtnPage').removeClass('active');
        $('#disclaimerPage').removeClass('active');
        $('#albumPage').addClass('active');
    } else if (page === 'add_mtn') {
        $('#indexPage').removeClass('active');
        $('#albumPage').removeClass('active');
        $('#disclaimerPage').removeClass('active');
        $('#addMtnPage').addClass('active');
    } else {
        $('#indexPage').removeClass('active');
        $('#albumPage').removeClass('active');
        $('#addMtnPage').removeClass('active');
        $('#disclaimerPage').addClass('active');
    }
}

// Util funct for updating msg on pages when Node server is down
function displayServerConnectError() {
    $('#alertMsg').html('Error: Unable to connect to server.');
    $('#alertMsg').removeClass('alert-primary');
    $('#alertMsg').addClass('alert-danger');
}
