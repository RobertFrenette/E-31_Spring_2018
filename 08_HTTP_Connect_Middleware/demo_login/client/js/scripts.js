$(document).ready(function () {
  $('#logoutBtn').on('click', () => {
    $('#inputEmail').attr("disabled", false);
    $('#inputPassword').attr("disabled", false);

    $('#msg').removeClass('alert-danger');
    $('#msg').addClass('alert-success');
    $('#msg').html('');
    $('#msg').hide();

    $('#lock').attr('src', '/img/lock.png');

    $('#logoutBtn').hide();
    $('#submitBtn').show();
    $('#inputEmail').focus();
  });

  $('#form-login').on('submit', (e) => {
    e.preventDefault();

    let data = {
      "email": $('#inputEmail').val(),
      "password": $('#inputPassword').val()
    };

    $.post("http://localhost:3000/", JSON.stringify(data), function () {
    })
      .done(function (res) {
        $('#msg').removeClass('alert-danger');
        $('#msg').addClass('alert-success');
        $('#msg').html('Success!');
  
        $('#inputEmail').val('');
        $('#inputEmail').attr("disabled", true);
        $('#inputPassword').val('');
        $('#inputPassword').attr("disabled", true);
  
        $('#lock').attr('src', 'img/unlock.png');
  
        $('#submitBtn').hide();
        $('#logoutBtn').show();
        $('#logoutBtn').focus();
      })
      .fail(function (e) {
        if (e.status === 401) {
          $('#msg').html('Account locked!');
        } else if (e.status === 403) {
          $('#msg').html('Invalid Creds!');
        } else {
          $('#msg').html(`Error: ${e.status}`);
        }

        $('#msg').removeClass('alert-success');
        $('#msg').addClass('alert-danger');  
        $('#inputEmail').focus();
      });
      $('#msg').show();
  });
});
