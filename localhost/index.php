<?php
	require_once "config.php";
	require_once "db.php";
?>

<head>
	<title> RSA </title>
	<script  type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.js"></script>
	<script  type="text/javascript" src="script.js"></script>
</head>
<body>

<?php if ( isset ($_SESSION['userLogin'])):?>
 
	Добро пожаловать, <?php echo $_SESSION['userLogin'];?><br>
	<a href="/logout.php">Выйти</a>
	
<?php else:?>

	<a href="/login.php">Войти</a><br>
	<a href="/registration.php">Зарегистрироваться</a><br>
	
<?php endif;?>

</body>
