var chalk =require('chalk')
function 
Dog(name) {
	this.name=name
	this.stomach=[];
	
	}
	Dog.prototype.eate=function(cat){
		this.stomach.push(cat);
	}
	Dog.prototype.sayHi=function(){
		console.log('hi! i am is dog, my name is '+chalk.blue(this.name))
	}
	module.exports=Dog;