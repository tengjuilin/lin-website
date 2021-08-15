<?php

$img=$_POST["userimg"];
echo $img."<br/>";

session_start();
echo $_SESSION['User']."<br/>";
$user=$_SESSION['User'];

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

$result = mysqli_query($link,"UPDATE Userdata SET Image = \"$img\" WHERE Username = '$user'");
if($result){
    echo "Connect to table <br/>";
    $_SESSION['Image']=$img;
    header("Location: setting.php");
    exit;
}else{
    echo "Fail to connect to table <br/>";
    header("Location: setting.php");
    exit;
}

mysqli_close($link);

?>
