function miFuncion()
{
	var recipiente;
	while(recipiente!="olla"){
	recipiente = prompt("coloca un recipiente preferiblemente una olla!!!")
	}
    var respuesta;
    while(respuesta!="agua"){
	respuesta = prompt("agrega agua")
	}
     alert("haz agregado " + respuesta + " en una " + recipiente);
    } 

    
    function sabor()
    {
		var salar;
	while(salar!="sal"){
	salar = prompt("agrega sal")
	}
    var aceitar;
    while(aceitar!="aceite"){
	aceitar = prompt("agrega aceite")
	}
     alert("haz agregado " + salar + " y " + aceitar);
    } 
		
function spaguetti()
    {
		var pasta;
	while(pasta!="spaguetti"){
	pasta = prompt("agrega spaguetti")
	}
    alert("haz agregado " + pasta + " ahora espera que este listo "); 
    var embase;
    while(embase!="plato"){
		embase=prompt("tome un plato")
		}
    var cubierto;
    while(cubierto!="tenedor"){
		cubierto= prompt("tome un utensilio preferiblemente tenedor!!")
		}
    function aviso_final(){
       alert("esta listo el "+ pasta + " bon apetit!!!! profesor hasta aqui es mi algoritmo");
       
     }
    setTimeout(aviso_final,10000);

}

   
