var a=10;
var b=5;
var somma=0;
var index=0;
function f(n1,n2,s,i){
	if ((n1-i)>0) {
		s+=(n2);
		i++;
		s=f(n1,n2,s,i)
	}
	return (s)
}

var ris = f(a,b,somma,index);
console.log(ris);


 
		