// NSANGOU Medy Lord Exauce L1GL
function conversion10(){
	var nbre10 = document.getElementById('base10');
	if (!isNaN(nbre10.value) && nbre10.value >=0 ) {
		base2 = document.getElementById('base2');
		base2.value = (nbre10.value-0).toString(2); // ou nbre10.value /1 c'est idem...
		document.getElementById('base16').value = (nbre10.value-0).toString(16);
	} else{
		document.getElementById('erreurBase10').innerText = "La valeur est incorrecte";
		document.getElementById('erreurBase10').style.color = "red";
		document.getElementById('base16').value = '';
		document.getElementById('base2').value = '';

	}
}

// function conversion16(){
// 	var nbre10 = document.getElementById("base10");
// 	base16 = document.getElementById("base16");
// 	base2 = document.getElementById("base2");
// 	base10.value = parseInt(base16.value,16);
// 	base2.value = (parseInt(base16.value,16)).toString(2);
// }

// function conversion2(){
// 	var nbre10 = document.getElementById("base10");
// 	base2 = document.getElementById("base2");
// 	base16 = document.getElementById("base16");
// 	base10.value = parseInt(base2.value,2);
// 	base16.value = (parseInt(base2.value,2)).toString(16);
// }

// parseInt() et toString()

// * ParseInt() : 
// La fonction parseInt() analyse une chaîne de caractère fournie en argument et 
//renvoie un entier exprimé dans une base donnée.

// * ToString() :
// La méthode toString() renvoie une chaîne de caractères représentant le code source de la fonction.

function conversion16(){
	var nbre16 = document.getElementById('base16');
	if(nbre16.value.trim() !=''){
		if(valide_hexadecimal(nbre16.value)){
		val10 = parseInt(nbre16.value,16);
		document.getElementById('base10').value = val10;
		document.getElementById('base2').value = (val10 - 0).toString(2);
	}else{
		document.getElementById('base10').value = '';
		document.getElementById('base2').value = '';
		document.getElementById('erreurBase16').innerText = 'valeur hexadecimal incorrect';
		document.getElementById('erreurBase16').style.color = 'red';

		}
   	  }
	}
	function conversion2(){
	var nbre2 = document.getElementById('base2');
	if(nbre2.value.trim() !=''){
		if(valide_binaire(nbre2.value)==true){
		val10 = parseInt(nbre2.value,2);
		document.getElementById('base10').value = val10;
		document.getElementById('base16').value = val10.toString(16);
	}else{
		document.getElementById('erreurBase2').innerText = 'valeur binaire incorrecte';
		document.getElementById('erreurBase2').style.color = 'red';
		document.getElementById('base10').value = '';
		document.getElementById('base16').value = '';

		}
   	  }
	}
	
function valide_hexadecimal(val){
	for(i=0; i<val.length;i++){
		if(!(val[i]>= 0 && val[i]<=9 || val[i]>='A' && val[i]<='F')){
			return false;
		}
	}
	return true;
}

function valide_binaire(ch){
	for(i=0; i<ch.length;i++){
		if(!(ch[i]==0 || ch[i]==1)){
			return false;
		}
	}
	return true;
}