<!DOCTYPE html>
<html lang="en">

  <?php include("inc/head.php"); ?>

  <body>
    <div class="container">

      <?php include("inc/nav.php"); ?>

      <!-- Start Main -->
      <main role="main">
        <!-- Start Jumbotron -->
        <div class="jumbotron">
          <h1 class="display-3">New Hampshire 4,000'ers</h1>
          <p class="lead">Ready to hike the 4,000-footers of the White Mountains?</p>
        </div>
        <!-- End Jumbotron -->

        <!-- Start Main Content -->
        <div class="row marketing">
          <!--Button for selecting Mountain -->
          <div class="col-lg-6">
            <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                id="mtnBtn">Select a Mountain</button>
              <div class="dropdown-menu" aria-labelledby="mtnBtn" id="dropDownMenuItems"></div>
            </div>
            <!-- Button for displaying Map -->
            <div>
              <br />
              <button type="button" class="btn btn-primary hidden" data-toggle="modal" data-target="#mountainModal" id="mapBtn">
                <i class="ion-ios-location"></i> Show Map</button>
            </div>
            
            <?php include("inc/err.php"); ?>
          </div>

          <!-- Display Div for Mountian information -->
          <div class="col-lg-6 hidden" id="mtnDiv">
            <div class="card indexCard">
              <img class="card-img-top" src="" alt="" id="mtnImg" />
              <div class="card-body">
                <div class="card-text">
                  <h3>
                    <span id="mtnName"></span>:
                    <span id="mtnElev"></span>'
                  </h3>
                  <h4>Difficulty:
                    <span id="mtnDiff"></span>
                  </h4>
                  <p id="mtnDesc"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Main Content -->

        <?php include("inc/modal.php"); ?>
      </main>

      <?php include("inc/footer.php"); ?>
    </div>

    <?php include("inc/includes.php"); ?>
    
    <script src="js/map.js"></script>
    <script src="js/index.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GMAPS_API_KEY_HERE&callback=initMap" async
      defer></script>
  </body>
</html>