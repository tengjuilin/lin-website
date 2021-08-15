<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <meta name="description" content="Polarize provides Kinglee news and study information.">
    <meta name="keywords" content="Polarize, polarize, kinglee, Kinglee, khs, Homework, homework, Kinglee High School, best, &#36125;&#26031;&#29305;, &#21220;&#31036;, &#21220;&#31036;&#22806;&#35821;&#20013;&#23398;">
    <title>Emotion | <?php session_start();echo $_SESSION['User'];?></title>
    <link href="cjs/emotion.css" type="text/css" rel="stylesheet">
    <link href="../bear-200.jpg" type="image/x-icon" rel="icon">
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
            <li><a href="setting.php" class="nav"><img src="<?php echo $_SESSION['Image'];?>" class="profile" alt="logo"></a></li>
        </ul>
    </nav>

    <!-- Add emotion button -->
    <div id="button" onclick="a()" class="add-emotion-button-before">+</div>
    <!-- Add emotion card -->
    <div id="card" class="add-emotion-card-before" style="display:none;"></div>

    <!--Welcome-->
    <div class="firstbody disappear" style="height:350px; text-align:center;">
        <br/><h2>Emotion</h2><br/>
        <img src="<?php echo $_SESSION['Image'];?>" class="appear1" alt="logo">
        <p class="appear2"><?php echo $_SESSION['User'];?>, welcome back!<br/><span class="appear3">Swipe down to browse your emotion.</span></p>
        <span class="appear4"></span>
    </div>

        <?php
        $Username=$_SESSION["User"];

        //change to $link = mysqli_connect("localhost","u826949099_admin","Hcj80531");
        $link = mysqli_connect("localhost","u826949099_admin","Hcj80531");

        if(!$link){
            die('Could NOT connect:'.mysql_error());
        }

        //change to $connect=mysqli_select_db($link,"u826949099_emo");
        $connect=mysqli_select_db($link,"u826949099_emo");

        $result = mysqli_query($link,"SELECT * FROM $Username ORDER BY Time DESC");


        while($row = mysqli_fetch_array($result)){
            echo "<div class='body' style='margin:5px auto'>";
            echo "<h3>".$row['Emotion']."</h3>";
            echo "<h4>".$row['Point']."</h4>";
            echo "<h5>".$row['Time']."</h5>";
            echo "<p style='margin:20px 20px 20px 30px'>".$row['Comment']."</p>";
            echo "</div>";
        }
        mysqli_close($link);
        ?>



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

    <!--Footer-->
    <footer>
        <a href="my.php"><img src="../bear-cut.gif" width="35" alt="logo" class="footerlogo footernav"></a>
        <a href="my.php" class="footernav">Home</a>
        <a href="about.html" class="footernav">About</a>
        <br/><br/><span class="disb copyright">&copy; 2017 Owen Lin, Polarize, v2.1.1.</span><br/>
    </footer>

</div>
<script src="cjs/emotion.js"></script>
</body>


</html>
