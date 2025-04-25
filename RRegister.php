<?php 

include 'connect.php';

if(isset($_POST['REGISTER'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $pswd1=$_POST['pswd'];
    $pswd2=$_POST['pswd2'];



    }

     $checkEmail="SELECT * From registration where email='$email'";
     $result=$conn->query($checkEmail);
     if($result->num_rows>0){
        echo "Email Address Already Exists !";
     }
     else{
        $insertQuery="INSERT INTO registration(name,email,pswd1,pswd2)
                       VALUES ('$name','$email','$pswd1','$pswd2')";
            if($conn->query($insertQuery)==TRUE){
                header("location: index.html");
            }
            else{
                echo "Error:".$conn->error;
            }
        }
            
     if(isset($_POST['LOGIN'])){
        $email=$_POST['email'];
        $pswd=$_POST['pswd'];
        $pswd=md5($pswd) ;
        
        $sql="SELECT * FROM login WHERE email='$email' and pswd='$pswd'";
        $result=$conn->query($sql);
        if($result->num_rows>0){
         session_start();
         $row=$result->fetch_assoc();
         $_SESSION['email']=$row['email'];
         header("Location: homepage.php");
         exit();
        }
        else{
         echo "Not Found, Incorrect Email or Password";
        }
     
     }
     


?>