var a=5;
var b=7;
var somma=0;
var index=0;
function f(n1,n2,s,i){
	if ((n1+i)<=n2) {
		s+=(n1+i);
		i++;
		s=f(n1,n2,s,i)
	}
	return (s)
}

var ris = f(a,b,somma,index);
console.log(ris);


 
		


