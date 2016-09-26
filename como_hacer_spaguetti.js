function miFuncion()
{
	var recipiente;
	while(recipiente!="olla"){
	recipiente = prompt("coloca un recipiente preferiblemente una olla!!!")
	}
    var elemento;
    while(elemento!="agua"){
	elemento = prompt("agrega agua")
	}
     alert("haz agregado " + elemento + " en una " + recipiente +" Por favor espere a que el agua hierva!!");
      function aviso_1(){
       alert("el "+ elemento + " esta hirviendo!! por favor siga al siguiente paso!!");
       
     }
    setTimeout(aviso_1,1800);
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
      alert("haz agregado " + salar + " y " + aceitar + " espere que el agua hierva para ir al siguiente paso!");
	 function aviso_2(){
       alert("el agua esta hirviendo y lista para colocar el spaguetti!! por favor siga al siguiente paso!!");
       
     }
    setTimeout(aviso_2,1800);
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
       alert("el "+ pasta + " esta listo profesor bon apetit!!!! profesor hasta aqui es mi algoritmo");
       
     }
    setTimeout(aviso_final,2500);

}

   
