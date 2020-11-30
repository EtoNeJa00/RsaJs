<?php
	require_once "config.php";
	require_once "db.php";
	
	if($_POST['verifiCod']==$_SESSION['verifi']['code']){
		$_SESSION['userLogin']=$_SESSION['verifi']['login'];
		unset($_SESSION['verifi']);
		echo '<script type="text/javascript">window.location="index.php"</script>';
	}else{
		echo 'неверный код';
	}
?>