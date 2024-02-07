<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'fruitables');

$data = json_decode(file_get_contents('php://input'), true);
$name=$data['NAME'];
$photo=$data['PHOTO'];
$details=$data['DETAILS'];
$price=$data['PRICE'];

$query = "insert into products(name,photo,details,price)values('$name','$photo','$details','$price')";

if($name!=''){
    $con->query($query);
    $id=$con->insert_id;
    echo json_encode(['status'=>true,'product_id'=>$id]);
}else{
    echo json_encode(['status'=>false]);
}