<!DOCTYPE html>
<html lang="en">

  <?php include("inc/head.php"); ?>

  <body>
    <div class="container">

    <?php include("inc/nav.php"); ?>

    <!-- Start Main -->
      <main role="main">
        <!-- Start Jumbotron -->
        <div class="jumbotron" id="jumbotron">
          <!-- Div to display Map -->
          <div id="map"></div>
        </div>
        <!-- End Jumbotron -->
        
        <!-- Start Main Content -->
        <div class="row marketing">
          <div class="col-lg-12">
            <h3>Disclaimer</h3>
            The content for this site was obtained from the Appalachian Mountain Club's
            <br />
            "<a href="https://www.outdoors.org/trip-ideas-tips-resources/plan-your-trip/nh-4000-footers" target="new">WHITE MOUNTAINS 4,000-FOOTER LIST AND PLANNING GUIDE</a>" and should only be used for educational purposes!
          </div>

          <?php include("inc/err.php"); ?>
        </div>
        <!-- End Main Content -->
      </main>

      <?php include("inc/footer.php"); ?>
    </div>

    <?php include("inc/includes.php"); ?>
    
    <script src="js/map.js"></script>
    <script src="js/disclaimer.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GMAPS_API_KEY_HERE&callback=initMap" async
      defer></script>
  </body>
</html>