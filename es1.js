var myv=[1,2,-6,4,5];

function s(v){
	var som=0;
	for (var i=0;i< v.length;i++){
		if (v[i]>0){
			som+=v[i];
		}	
		else return som;
	}
	return som;
}

var ris = s(myv);
console.log(ris);

 
		


