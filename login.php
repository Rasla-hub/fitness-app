<?php
$email = $_POST['email'];
$pswd = $_POST['pswd'];

if(!empty($email) || !empty($pswd))

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

$SELECT = "SELECT email FROM login Where email = ? Limit 1";
$INSERT = "INSERT Into login (email,pswd) Values(?,?)";
 
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
$stmt->bind_param("ss",$email,$pswd);
$stmt->execute();
echo "Login succussfull";

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
