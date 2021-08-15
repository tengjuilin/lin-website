<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <meta name="description" content="Polarize provides Kinglee news and study information.">
    <meta name="keywords" content="Polarize, polarize, kinglee, Kinglee, khs, Homework, homework, Kinglee High School, best, &#36125;&#26031;&#29305;, &#21220;&#31036;, &#21220;&#31036;&#22806;&#35821;&#20013;&#23398;">
    <title>Setting</title>
    <link href="cjs/emotion.css" type="text/css" rel="stylesheet">
    <link href="../bear-200.jpg" type="image/x-icon" rel="icon">
    <script type="text/javascript" src="../common.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
<div class="wrapper">

    <!--Navigation-->
    <nav>
        <a href="my.php" class="sizecontrol"><img src="../bear-200.gif" height="60" width="60" alt="logo" class="logo"></a>
        <ul class="navposition">
            <li><a href="my.php" class="nav">Home</a></li>
            <li><a href="about.html" class="nav">About</a></li>
        </ul>
        <ul class="navright">
            <li>
                <form method="POST" action="my.php">
                    <input type="submit" name="action" value="LOG OUT" class="commonlogout">
                </form>
            </li>
            <li><a href="setting.php" class="nav"><img src="<?php session_start(); echo $_SESSION['Image'];?>" class="profile" alt="logo"></a></li>
        </ul>
    </nav>

    <!-- Log in check php -->
    <?php
        error_reporting(0);
        if (!isset($_SESSION['User'])){
            echo "GUEST!";
            header("Location: login.php");
            exit;
        }
    ?>

    <!-- Log out php -->
    <?php
        if($_POST['action'] == "LOG OUT"){
            unset($_SESSION['User']);
            header("Location: login.php");
            exit;
        }
    ?>

    <!-- Image selection beta -->
    <?php

    ?>
    <div class="body">
        <h2>Setting</h2>
        <p>Change your profile photo:</p>
        <form method="POST" action="imgselection.php" class="imgselectionform">
            <input type="radio" name="userimg" value="img/a.jpg" checked="checked"><img src="img/a.jpg" height="40" width="40" class="imgselection">
            <input type="radio" name="userimg" value="img/b.jpg"><img src="img/b.jpg" height="40" width="40" class="imgselection">
            <input type="radio" name="userimg" value="img/c.jpg"><img src="img/c.jpg" height="40" width="40" class="imgselection">
            <input type="radio" name="userimg" value="img/d.jpg"><img src="img/d.jpg" height="40" width="40" class="imgselection">
            <input type="radio" name="userimg" value="img/e.jpg"><img src="img/e.jpg" height="40" width="40" class="imgselection">
            <input type="radio" name="userimg" value="img/f.jpg"><img src="img/f.jpg" height="40" width="40" class="imgselection">
            <input type="radio" name="userimg" value="img/g.jpg"><img src="img/g.jpg" height="40" width="40" class="imgselection">
            <input type="radio" name="userimg" value="img/h.jpg"><img src="img/h.jpg" height="40" width="40" class="imgselection">
            <input type="radio" name="userimg" value="img/i.jpg"><img src="img/i.jpg" height="40" width="40" class="imgselection">
            <input type="submit" value="SUBMIT" class="imgsubmit">
        </form>
    </div>


    <!--Footer-->
    <footer>
        <a href="my.php"><img src="../bear-cut.gif" width="35" alt="logo" class="footerlogo footernav"></a>
        <a href="my.php" class="footernav">Home</a>
        <a href="about.html" class="footernav">About</a>
        <br/><br/><span class="disb copyright">&copy; 2017 Owen Lin, Polarize, v2.1.1.</span><br/>
    </footer>

</div>
</body>


</html>
