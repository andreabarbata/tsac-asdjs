var myv=[2,6,9,1,7,2,3,0,4];
var sq=(Math.sqrt(myv.length)-1)
var mx=[]


function s(v){
		var k=0;
		for (var i=0; i<=sq;i++){
			mx[i] = new Array() 
			for (var j=0; j<=sq;j++){
				mx[i][j]=v[k];
				k++;
			}
			
		}
alert(mx[0][0]);
alert(mx[0][1]);
alert(mx[0][2]);
alert(mx[1][0]);
alert(mx[1][1]);
alert(mx[1][2]);
alert(mx[2][0]);
alert(mx[2][1]);
alert(mx[2][2]);
}	

var ris=s(myv);



 
		


