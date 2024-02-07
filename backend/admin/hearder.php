<?php
session_start();
?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <!-- Meta, title, CSS, favicons, etc. -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="<?php echo $_SESSION['base_url'] ?>/images/favicon.ico" type="image/ico" />

  <title>Gentelella Alela!</title>

  <!-- Bootstrap -->
  <link href="<?php echo $_SESSION['base_url'] ?>/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
  <!-- Font Awesome -->
  <link href="<?php echo $_SESSION['base_url'] ?>/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
  <!-- NProgress -->
  <link href="<?php echo $_SESSION['base_url'] ?>/vendors/nprogress/nprogress.css" rel="stylesheet" />
  <!-- iCheck -->
  <link href="<?php echo $_SESSION['base_url'] ?>/vendors/iCheck/skins/flat/green.css" rel="stylesheet" />

  <!-- bootstrap-progressbar -->
  <link href="<?php echo $_SESSION['base_url'] ?>/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" />
  <!-- JQVMap -->
  <link href="<?php echo $_SESSION['base_url'] ?>/vendors/jqvmap/dist/jqvmap.min.css" rel="stylesheet" />
  <!-- bootstrap-daterangepicker -->
  <link href="<?php echo $_SESSION['base_url'] ?>/vendors/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" />

  <!-- Custom Theme Style -->
  <link href="<?php echo $_SESSION['base_url'] ?>/build/css/custom.min.css" rel="stylesheet" />
</head>



<body class="nav-md">
  <div class="container body">
    <div class="main_container">

      <?php require_once('sidebar.php') ?>

      <!-- top navigation -->
      <?php require_once('top_navigation.php') ?>
      <!-- /top navigation -->