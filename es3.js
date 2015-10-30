var myv=[1,5,9,-6,-7,2,3,4,7,1];

function s(v){
	var som=0;
	for (var i=0;i<v.length;i++){	
		som+=v[i];
		
	}
	
	return som/v.length;
}

var ris=s(myv);
console.log(ris);


 
		


