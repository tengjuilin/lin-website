<?php
session_start();
$Username=$_SESSION["User"];

date_default_timezone_set("Asia/Shanghai");
$date = date("Y-m-d");
$hour = date("H:i:s");
$Time = $date." &nbsp;".$hour;
echo $Time;

$Emotion=$_POST["emotion"];
$Point=$_POST["point"];
$Comment=$_POST["comment"];

if($Emotion == "" or $Point == ""){
    echo "<script>alert('Please enter your emotion or points.'); history.go(-1);</script>";
}else{
        //change to $link = mysqli_connect("localhost","u826949099_admin","Hcj80531");
        $link = mysqli_connect("localhost","u826949099_admin","Hcj80531");
        if ($link) {
            echo "SQL Connect Success <br/>";
          } else {
            echo "SQL Connect Fail <br/>";
        }

        if(!$link){
            die('Could NOT connect:'.mysql_error());
        }

        //change to $connect=mysqli_select_db($link,"u826949099_emo");
        $connect=mysqli_select_db($link,"u826949099_emo");
        if($connect){
            echo "Connect to database <br/>";
        }else{
            echo "Fail to connect database <br/>";
        }

        $result = mysqli_query($link,"INSERT INTO `$Username` (`Time`, `Emotion`, `Point`, `Comment`) VALUES ('$Time', '$Emotion', '$Point', '$Comment')");
        if($result){
            echo "Connect to table <br/>";
            header("Location: my.php");
            exit;
        }else{
            echo "<script>alert('Please math harder and try again.'); history.go(-1);";
        }
}
mysqli_close($link);
?>
