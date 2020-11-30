$(document).ready(function(){ 

	$("#loginBt").on("click", async function(){
	
	var login = $("#login").val().trim();
    var pas   =	$("#pas").val().trim();   
	
	if((login == '') || (pas == ''))
	{
		$("#errorReg").text("введите данные");
		return false;
	}

	var sign = await signing(pas);
	console.log(sign);
	$.ajax({
		type:'POST',
		url:'logining.php',
		data:{
			login:login,
			pas:pas,
			signature:sign.sign,
			pubKey:sign.keyPair.pubKey
			},
		beforeSend: function(){
			$("#loginBt").attr("disabled", true);
	}}).done(function(data){
			$("#errorReg").html(data);
			$("#loginBt").attr("disabled", false);
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
		url:'loginVerifi.php',
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