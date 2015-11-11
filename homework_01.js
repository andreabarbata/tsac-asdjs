/*
 Esercizio 1
 Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
 */
// Iterative
// Spazio: O(1)
// Tempo: O(n)
function sumwhileneg(myarray) {
	var tot = 0;
	for(i = 0; i < myarray.length; ++i) {
		var x = myarray[i];
		if (x > 0) {
			tot += x;
		} else {
			return tot;
		}
	}
	return tot;
}


// Ricorsive
// Spazio: O(n)
// Tempo: O(n)
function sumwhilenegR(myarray) {
	if (myarray.length == 0 || myarray[0] < 0) {
		return 0;
	} else {
		return myarray[0] + sumwhilenegR(myarray.slice(1));
	}
}


function ex_1_I(myarray) {
	return sumwhileneg(myarray);
}

function ex_1_R(myarray) {
	return sumwhilenegR(myarray);
}

/*
 Esercizio 2
 Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
 */
// Spazio: O(1)
// Tempo: O(n)
function firstOdd(n) {
	var tot = 0;
	for(i = 0; i < n; ++i) {
		tot += 1 + 2 * i;
	}
	return tot;
}


// Spazio: O(n)
// Tempo: O(n)
function firstOddR(n) {
	if (n == 0) {
		return 0;
	} else {
		return 2 * n - 1 + firstOddR(n - 1);
	}
}




function ex_2_I(x) {
	return firstOdd(x);
}

function ex_2_R(x) {
	return firstOddR(x);
}


//ex 3
//iterativo
var myv3=[1,5,9,-6,-7,2,3,4,7,1];

function s3(v){
	var som=0;
	for (var i=0;i<v.length;i++){	
		som+=v[i];
		
	}
	
	return som/v.length;
}

var ris=s3(myv3);
console.log(ris);

//ricorsivo
var myv3r=[1,2,3,4,5,6,7,8,9,0];
var index3r=0
var somma3r=0
function med3(v,i,s){
	if ((i<v.length)) {
		s+=v[i];
		i++;
		s=med3(v,i,s)
	}
	return (s)
}

var ris = med3(myv3r,index3r,somma3r)/myv.length;
console.log(ris);

//ex 4
//iterativo
var a4=6;
var b4=4;
function s4(n1,n2){
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

var ris=s4(a4,b4);
console.log(ris);

//ricorsivo
var a4r=5;
var b4r=7;
var somma4r=0;
var index4r=0;
function f4(n1,n2,s,i){
	if ((n1+i)<=n2) {
		s+=(n1+i);
		i++;
		s=f4(n1,n2,s,i)
	}
	return (s)
}

var ris = f4(a4r,b4r,somma4r,index4r);
console.log(ris);

//ex 5
//iterativo
var a5=5;
var b5=4;
function s5(n1,n2){
	var som=0;
		for (var i=0;i<=(n2-1);i++){	
			som+=(n1);
		}
	
		
	
	return som
}

var ris=s5(a5,b5);
console.log(ris);

//ricorsivo
var a5r=10;
var b5r=5;
var somma5r=0;
var inde5r=0;
function f5(n1,n2,s,i){
	if ((n1-i)>0) {
		s+=(n2);
		i++;
		s=f5(n1,n2,s,i)
	}
	return (s)
}

var ris = f5(a5r,b5r,somma5r,index5r);
console.log(ris);

//ex 6
//iterativo
var a6=8;
var b6=4;
function s6(n1,n2){
	var q=0;
	var resto=0;
		for (var i=n2;i<=n1;i+=n2){	
			q+=1;
		}
	var ans = q + " con resto di " + (n1-(n2*q));
	return ans;

}	
	
var ris=s6(a6,b6);
console.log(ris);

//ex 7
//iterativo
var a=2;
var b=4;

function mult7(n1,n2){
	var som=0;
		for (var i=0;i<=(n2-1);i++){	
			som+=(n1);
		}
	
		
	
	return som
}

function s7(n1,n2){
	var pot=1;
		for (var i=0;i<=(n2-1);i++){	
			pot=mult7(pot,a)
		}
	
	return pot;

}	
	
var ris=s7(a7,b7);
console.log(ris);

//ex 8
//iterativo
var myv8=[2,6,9,1,7,2,3,0,4];
var sq8=(Math.sqrt(myv.length)-1)
var mx8=[]


function s8(v){
		var k=0;
		for (var i=0; i<=sq;i++){
			mx[i] = new Array() 
			for (var j=0; j<=sq;j++){
				mx[i][j]=v[k];
				k++;
			}
			
		}
		return mx
}	

var ris=s8(myv8);
console.log(ris)
//ex 9
//iterativo
var myv9=[2,6,9,1,7,2,3,0];

function s9(v1){
		var k=0;
		var n=(myv.length)-1
		var v2=[]
		for (var i=n; i>=0;i=i - 1){
				v2[k]=v1[i]
				k++
		}
		return v2
}	

var ris=s9(myv9);
console.log(ris)

//ex 10
//iterativo
var a10=3
var n10=4



function s10(n1,n2){
		var v=[]
		for (var i=0; i<=n2-1;i++){
			v[i]=n1		
			
		}
		return v
		
}	

var ris=s10(a10,n10);
console.log(ris);

//ex 11
 //iterativo
 var myv11=[2,5,1,8,3,2,1];

function s11(v1){
		var p=[]
		var d=[]
		var np=0
		var nd=0
		var k=0
		for (var i=0; i<=v1.length-1;i++){
			 if (v1[i]%2!=0){
				d[nd]=v1[i]
				nd++
				}
			else {
				p[np]=v1[i]
				np++
				}
			 }

		for (i=0;i<=d.length-1;i++){
			v1[i]=d[i]
		}
		for (i=d.length;i<=v1.length-1;i++,k++){
			v1[i]=p[k]
		}
		
		return v1
}

var ris=s11(myv11);
console.log(ris);




function ex_3_I(array){
	return s3(array)
}

function ex_3_R(array){
	return med3(myv3r,index3r,somma3r)
}

function ex_4_I(n1,n2){
	return s4(n1,n2)
}

function ex_4_R(n1,n2){
	return f4(a4r,b4r,somma4r,index4r)
}

function ex_5_I(n1,n2){
	return s5(n1,n2)
}

function ex_5_R(n1,n2){
	return f5(a5r,b5r,somma5r,index5r)
}

function ex_6_I(n1,n2){
	return s6(n1,n2)
}

function ex_7_I(n1,n2){
	return s7(n1,n2)
}

function ex_8_I(array){
	return s8(array)
}

function ex_9_I(n1,n2){
	return s9(n1,n2)
}

function ex_10_I(array){
	return s10(array)
}

function ex_11_I(array){
	return s11(array)
}


		


