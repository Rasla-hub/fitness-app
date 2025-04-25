<?php
$name  = $_POST['name'];
$email = $_POST['email'];
$pswd1 = $_POST['pswd1'];
$pswd2 = $_POST['pswd2'];


if( !empty($name) || !empty($email) || !empty($pswd1) || !empty($pswd2))

{

$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "fitness";


$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '. mysqli_connect_error());
}

else{

$SELECT = "SELECT email FROM registration Where email = ? Limit 1";
$INSERT = "INSERT Into registration (name,email,pswd1,pswd2) Values(?,?,?,?)";
 
//preparing statement


$stmt = $conn->prepare($SELECT);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->bind_result($email);
$stmt->store_result();
$rnum = $stmt->num_rows;

//checking

if ($rnum==0) {

$stmt->close();
$stmt = $conn->prepare($INSERT);
$stmt->bind_param("ssss",$name,$email,$pswd1,$pswd2);
$stmt->execute();

echo "You have registered succussfully";

}
else{
echo "Someone already registered using this email";


}

$stmt->close();
$conn->close();

}




}

else{
echo "All field are required";
die();

}


?>
