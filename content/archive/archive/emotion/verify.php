<?php

$Username=$_POST["username"];
$Password=$_POST["password"];

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

$result = mysqli_query($link,"SELECT * FROM Userdata");
if($result){
    echo "Connect to table <br/>";
}else{
    echo "Fail to connect to table <br/>";
}

while($row = mysqli_fetch_array($result)){
    if($Username == $row["Username"] && $Password == $row["Password"] ){
        session_start();
        $_SESSION['User']=$Username;
        $_SESSION['Image']=$row["Image"];
        echo "Log in success <br/>";
        header("Location: my.php");
        exit;
    }else{
        echo "Fail to log in <br/>";
    }
  }
mysqli_close($link);
header("Location: login.php");
exit;
?>
