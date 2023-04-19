<?php
// Dynamic switching of file paths between development and live site
$base_url = 'http://' . $_SERVER['HTTP_HOST'];
?>

<nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
  <div class="container-fluid">
    <a href="<?php echo $base_url ?>/index.html" class="navbar-brand">
      <span class="nav-full-text navbar-brand d-none d-sm-inline">National Lacrosse League</span>
      <span class="nav-short-text navbar-brand d-sm-none d-inline">NLL</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav ms-auto">
        <a href="<?php echo $base_url ?>/about.html" class="nav-link">About</a>
        <a href="<?php echo $base_url ?>/catalog.html" class="nav-link">Catalog</a>
        <a href="<?php echo $base_url ?>/references.html" class="nav-link">References</a>
        <a href="<?php echo $base_url ?>/MORE/SCHEDULE.html" class="nav-link">Schedule</a>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Teams</a>
          <div class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
            <a href="<?php echo $base_url ?>/EAST_TEAMS/EAST_TEAMS.html" class="dropdown-item">East Teams</a>
            <hr class="dropdown-divider">
            <a href="<?php echo $base_url ?>/WEST_TEAMS/WEST_TEAMS.html" class="dropdown-item">West Teams</a>
          </div>
        </div>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
          <div class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
            <a href="<?php echo $base_url ?>/MORE/BRACKETS.html" class="dropdown-item">Bracket Creator</a>
            <hr class="dropdown-divider">
            <a href="<?php echo $base_url ?>/MORE/HISTORY.html" class="dropdown-item">History</a>
            <hr class="dropdown-divider">
            <a href="<?php echo $base_url ?>/MORE/RULES.html" class="dropdown-item">Rules</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
