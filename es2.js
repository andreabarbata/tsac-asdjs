var n=5;

function s(num){
	var som=0;
	
	for (var i=0;i<=num;i++){	
		num=num-i
		if (((num)>=0) && (num)%2!=0);{
			som+=(num-i);
		}
		
	}
	return som;
}

var ris=s(n);
console.log(ris);


 
		


