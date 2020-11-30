
$(document).ready(function(){ 

	$("#registrarion").on("click", async function(){
	
	var login = $("#login").val().trim();
    var pas   =	$("#pas").val().trim();   
    var pas2  =	$("#pas2").val().trim();
	
	if((login == '') || (pas == '') || (pas2 == '') )
	{
		$("#errorReg").text("введите данные");
		return false;
	}
	if(pas != pas2)
	{
		$("#errorReg").text("пароли не совпадают");
		return false;
	}

	var sign = await signing(pas);
	console.log(sign);
	$.ajax({
		type:'POST',
		url:'reg.php',
		data:{
			login:login,
			pas:pas,
			signature:sign.sign,
			pubKey:sign.keyPair.pubKey
			},
		beforeSend: function(){
			$("#registrarion").attr("disabled", true);
	}}).done(function(data){
			$("#errorReg").html(data);
			$("#registrarion").attr("disabled", false);
		})
	}); 
	
	$("#verifiBt").on("click", async function(){
		var verifiCod = $("#verifiCod").val().trim();
		if(verifiCod == '')
		{
			$("#errorReg").text("введите данные");
			return false;
		}
	$.ajax({
		type:'POST',
		url:'regVerifi.php',
		data:{
			verifiCod:verifiCod,
			},
		beforeSend: function(){
			$("#verifiBt").attr("disabled", true);
	}}).done(function(data){
			$("#errorReg").html(data);
			$("#verifiBt").attr("disabled", false);
		})
	})
});