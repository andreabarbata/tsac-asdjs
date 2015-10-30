var a=6;
var b=4;
function s(n1,n2){
	var som=0;
	if (n1<=n2){
		for (var i=0;i<=(n2-n1);i++){	
			som+=(n1+i);
		}
	}
	else {
		for (var i=0;i<=(n1-n2);i++){	
			som+=(n2+i);
			}
	}
		
	
	return som
}

var ris=s(a,b);
console.log(ris);


 
		


