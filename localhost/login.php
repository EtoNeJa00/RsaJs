<head>
	<title> Login </title>
	<script  type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.js"></script>
	<script  type="text/javascript" src="script.js"></script>
	<script  type="text/javascript" src="login.js"></script>
	<script src="/jsencrypt.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/sha256.js"></script>
</head>

<body>
<form>
	<p>
		<p><strong>Логин:</strong></p>
		<input type="text" id="login" value="<?php echo @$_POST[login];?>"><br>
	</p>
	<p>
		<p><strong>Пароль:</strong></p>
		<input type="password" id="pas" value="<?php echo @$_POST[pas];?>"><br>
	</p>
	  <p><input type="button" id="loginBt"  value="Получить код"><br></p>	
</form>	

	  <div id="errorReg"></div>
	  
	  <div id="verification" hidden>
			<input type="number" id="verifiCod" max="9999" step="1"><br>
			<p><input type="button" id="verifiBt"  value="вход"><br></p>	
	  </div>
</body>