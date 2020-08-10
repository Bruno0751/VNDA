function clickar(){
	window.alert("Em Breve");
}
function escrever(){
	var email = document.getElementById('txtemail').value;
	if(email==''){
		alert('Preencha o Email');
		document.getElementById('txtnome').focus();
	}
}

