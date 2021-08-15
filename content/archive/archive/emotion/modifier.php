<?php

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

//COMMAND HERE
$result = mysqli_query($link,"DROP TABLE Tester01;");
if($result){
    echo "Connect to table, operation success. <br/>";
}else{
    echo "Fail to connect to table operation failed. <br/>";
}
?>

<?php
//mySQL Command

//Create table
//CREATE TABLE table_name(column_name datatype, column_name datatype)

//Delete table
//DROP TABLE table_name;

//Insert data into table
//INSERT INTO table_name (column_name, column_name) VALUES (value1, value2)

//Delete data from table
//DELETE FROM table_name WHERE column_name = value

//Insert column
//ALTER TABLE table_name ADD COLUMN column_name datatype

//Delete column
//ALTER TABLE table_name DROP COLUMN column_name

//Select data from table
//SELECT column_name FROM table_name
date_default_timezone_set("Asia/Shanghai");
$date = date("Y-m-d");
$hour = date("H:i:s");
$Time = $date." &nbsp;".$hour;
echo $Time;
?>