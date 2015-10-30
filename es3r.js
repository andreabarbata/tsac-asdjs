var myv=[1,2,3,4,5,6,7,8,9,0];
var index=0
var somma=0
function med(v,i,s){
	if ((i<v.length)) {
		s+=v[i];
		i++;
		s=med(v,i,s)
	}
	return (s)
}

var ris = med(myv,index,somma)/myv.length;
console.log(ris);


 
		


