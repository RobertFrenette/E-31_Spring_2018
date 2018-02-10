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
        <div class="col-lg-12">
          <?php include("inc/err.php"); ?>
        </div>

        <?php include("inc/album.php"); ?>
        <!-- End Main Content -->
      </main>

      <?php include("inc/footer.php"); ?>
    </div>

     <?php include("inc/includes.php"); ?>

    <script src="js/album.js"></script>
  </body>
</html>