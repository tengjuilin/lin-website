<?php

$Username=$_POST["username"];
$Password=$_POST["password"];
$ConfirmPassword=$_POST["confirmpassword"];

if($Username == "" or $Password == "" or $ConfirmPassword == ""){
    echo "<script>alert('Please enter your username or password.'); history.go(-1);</script>";
}else{
    if($Password==$ConfirmPassword){
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

        $result = mysqli_query($link,"SELECT Username FROM Userdata WHERE Username='$Username'");
        if($result){
            echo "Connect to table <br/>";
        }else{
            echo "Fail to connect to table <br/>";
        }

        if(mysqli_num_rows($result)){
            echo "<script>alert('Username exsists.'); history.go(-1);</script>";
        }else{
            $insert = mysqli_query($link,"INSERT INTO Userdata(Username,Password,Image) VALUES('$Username','$Password','img/a.jpg')");
            if($insert){
              $createtable = mysqli_query($link,"CREATE TABLE IF NOT EXISTS $Username (`Time` VARCHAR(30), `Emotion` VARCHAR(99), `Point` INT(10), `Comment` TINYTEXT);");
              session_start();
              $_SESSION['User']=$Username;
              $_SESSION['Image']='img/a.jpg';
              header("Location: my.php");
              exit;
            }else{
                echo "<script>alert('Please math harder and try again.'); history.go(-1);";
            }
        }

    }else{
        echo "<script>alert('Password is not uniform.'); history.go(-1);</script>";
    }
}
mysqli_close($link);
?>
