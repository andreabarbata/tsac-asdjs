var myv=[2,5,1,8,3,2,1];

function s(v1){
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
		
		for (i=0;i<=v1.length-1;i++){
			alert (v1[i])
		}
}


s(myv);



 
		


