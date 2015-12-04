function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluate(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */

/*Esercizio 1*/

function count(myarray) {
    if (myarray.length == 0){
        return 0;
    }else if(myarray[0] == 5070){
		return 1 + count(myarray.slice(1));
		} else {
			return 0 + count(myarray.slice(1));
		}
}

/*Esercizio 2*/

function sqrpow(myarray) {
    var arrEvenPos = myarray.filter(function(x) {return x % 2 == 0 & x >= 0 ;});
    var arrPow = arrEvenPos.map(function(x) {return x * x ;});
    return Math.sqrt(arrPow.reduce(function(a , x) {return a + x }));
} 

/*Esercizio 3*/

function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) {
    this.myarray.push(e);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    if (this.myarray.length == 0) {
        return true;
    } else {
        return false;
    }
}

function exp(str) {
    var array = str.split(' ');
    var stackS = new Stack();
    var stackV = new Stack();
    var opA, opB;
    for (var i = 0; i < array.length; i++) {
        if (array[i] != ')' && array[i] != '(') {
            if (array[i] == '+' || array[i] == '-' || array[i] == '*' || array[i] == '/')
                stackS.push(array[i]);
            else
                stackV.push(parseInt(array[i]));
        }
        else if (array[i] == ')') {
            opA = stackV.pop();
            opB = stackV.pop();
            switch (stackS.pop()) {
                case '+':
                    stackV.push(opA + opB);
                    break;
                case '-':
                    stackV.push(opB - opA);
                    break;
                case '*':
                    stackV.push(opA * opB);
                    break;
                case '/':
                    stackV.push(opB / opA);
                    break;
            }
        }
    }
    return stackV.pop();
}



