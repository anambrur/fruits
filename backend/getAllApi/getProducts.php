<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$con=new mysqli('localhost','root','','fruitables');
$product_data=$con->query('select * from products')->fetch_all(MYSQLI_ASSOC);

header('Content-Type: Application/json');
echo json_encode($product_data);