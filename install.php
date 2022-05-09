<?php
$table = file_get_contents('data.sql'); // read sql file that create table






$conn = new mysqli("sql11.freemysqlhosting.net", "sql11491215", "VkmF4nYwKV","sql11491215");// connect to server


//$DB="CREATE DATABASE IF NOT EXISTS `dcteam_dcteam`;"; //// create db
//$createDB=$conn->query($DB) ;//connect db
$table_connect=$conn->query($table) ;// connect table to db



 $sql2=" INSERT INTO `users` (`id`,`password`, `email`, `username`) VALUES
(1, '2016', 'wael', 'dcteam');";
$conn->query($sql2) ; // add user
?>