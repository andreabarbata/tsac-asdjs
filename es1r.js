var myv=[1,2,6,-4,5];
var index=0
var somma=0
function sum(v,i,s){
	if ((v[i]>0) || (i<v.lenght)){
		s+=v[i];
		i++;
		s=sum(v,i,s)
	}
	return s
}

var ris = sum(myv,index,somma);
console.log(ris);

 
		


