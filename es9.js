var myv=[2,6,9,1,7,2,3,0];

function s(v1){
		var k=0;
		var n=(myv.length)-1
		var v2=[]
		for (var i=n; i>=0;i=i - 1){
				v2[k]=v1[i]
				k++
		}
		for (i=0;i<=n;i++){
			alert(v2[i])
		}

}	

s(myv);



 
		


