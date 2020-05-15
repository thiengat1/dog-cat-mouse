var Cat=require('./Cat')
var Mouse=require('./Mouse')
var Dog=require('./Dog')

var mouse=new Mouse('Micky');
var cat=new Cat();
var dog=new Dog();
try{
	cat.eat(dog);

}
catch(er)
{
	console.log('dfgdgdfgdgdg');
}
	console.log(cat);

