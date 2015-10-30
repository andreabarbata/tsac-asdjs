var num=4;
var somma=0;
var index=1;
function sumd(n,s,i){
	if ((i<=n)) {
		s+=i;
		i+=2;
		s=sumd(n,s,i)
	}
	return s
}

var ris = sumd(num,somma,index);
console.log(ris);


 
		


