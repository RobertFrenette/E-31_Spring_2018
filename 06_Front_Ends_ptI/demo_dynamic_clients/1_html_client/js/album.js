// album.js

$(document).ready(function(){
  setActivePage('album');
  
  // AJAX GET to Node server for mountain data
  function init() {
      $.getJSON('http://localhost:3000',function() {
      })
      .done(function(data) {
          let count = 0;

          $('#alertMsg').hide();
          data.mountains.forEach((mountain, index) => {
            let col  =  document.createElement('div');
            col.className = "col-md-4";

            let card =  document.createElement('div');
            card.className = "card mb-4 box-shadow";

            let imgDiv = document.createElement('div');
            imgDiv.className = "text-center";

            let cardImg  =  document.createElement('img');
            cardImg.className = "card-img-top smMtnImg";
            cardImg.src = mountain.img;

            let cardBody =  document.createElement('div');
            cardBody.className = "card-body";

            let cartTitle = document.createElement('h3');
            let cartTitleTextNode = document.createTextNode(mountain.name);

            let cardText =  document.createElement('p');
            cardText.className = "card-text";

            let cardTextNode =  document.createTextNode(mountain.desc);

            imgDiv.appendChild(cardImg);

            cartTitle.appendChild(cartTitleTextNode);
            cardText.appendChild(cardTextNode);

            cardBody.appendChild(cartTitle);
            cardBody.appendChild(cardText);

            card.appendChild(imgDiv);
            card.appendChild(cardBody);

            col.appendChild(card);

            $('#albumRow').append(col);
          });
          $('#album').removeClass('hidden');
      })
      .fail(function() {
        displayServerConnectError();
      });
  }

  init();
});