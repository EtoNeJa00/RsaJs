<?php
	require_once "config.php";
	require_once "db.php";
	
	if($_POST['verifiCod']==$_SESSION['verifi']['code']){
		$query ="INSERT INTO user (Login,Password) VALUES ('".$_SESSION['verifi']['login']."','".md5($_SESSION['verifi']['pas'])."')";
		$sql=mysqli_query($connection, $query);
			if ($sql) {
				$_SESSION['userLogin']=$_SESSION['verifi']['login'];
				unset($_SESSION['verifi']);
				echo '<script type="text/javascript">window.location="index.php"</script>';
			} else {
				echo '<p>Произошла ошибка: '. mysqli_error($connection) . '</p>';
			}
	}else{
		echo 'неверный код';
	}
?>