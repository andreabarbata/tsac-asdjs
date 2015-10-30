var a=8;
var b=4;
function s(n1,n2){
	var q=0;
	var resto=0;
		for (var i=n2;i<=n1;i+=n2){	
			q+=1;
		}
	var ans = q + " con resto di " + (n1-(n2*q));
	return ans;

}	
	
var ris=s(a,b);
console.log(ris);


 
		


