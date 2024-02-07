<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$con=new mysqli('localhost','root','','fruitables');
$id=$_GET['id'];
$product_data=$con->query('SELECT * FROM products WHERE id ='.$id)->fetch_assoc();
$data=$con->query('select * from products where id='.$id)->fetch_assoc();
header('Content-Type: Application/json');
echo json_encode($product_data);