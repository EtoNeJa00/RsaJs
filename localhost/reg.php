<?php
	require_once "config.php";
	require_once "db.php";

		$errors = array();
		if(trim($_POST['login'])=='')
		{
			$errors[]='введите логин';
		}
		
		if(trim($_POST['pas'])=='')
		{
			$errors[]='введите пароль';
		}
		
		if(empty($errors))
		{
			$verify = openssl_verify($_POST['pas'], base64_decode($_POST['signature']), $_POST['pubKey'], "SHA256");
			if($verify){
				$verifiNum = random_int(1000,9999);
				$_SESSION['verifi']['code']=$verifiNum;
				$_SESSION['verifi']['login']=$_POST['login'];
				$_SESSION['verifi']['pas']=$_POST['pas'];
				echo '<script type="text/javascript">document.getElementById("verification").hidden = false;
					alert("'.$verifiNum.'");</script>';
			}
		}
?>