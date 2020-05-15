function Dog() {
	this.stomach=[];
	
	}
	Dog.prototype.eate=function(cat){
		this.stomach.push(cat);
	}
	module.export=Dog;