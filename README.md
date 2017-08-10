# ReactStepUp

*Build Project*
> npm run create
> npm run start

- Tutorial
https://learn.tylermcginnis.com/courses/50507/lectures/760301#/questions/1


# this

_Look at the left of the function the key word "this" is invoked._

```javascript
var me = {
	name: 'adam',
	age: 25,
	sayName: function(){
		console.log(this.name);
	}
}
```
Result: adam

```javascript
	
var sayName = function(obj){
	obj.sayName = function(){
	console.log(this.name);
	}
}

var me = {
	name: 'adam',
	age: 23
}

var you = {
	name: 'LL',
	age: 90
}

sayName(me);    //adam
sayName(you);	//LL
 
var Person = function(name, age){
	return {
		name: name,
		age: age,
		sayName: function() {
		console.log(this.name);
	},
	mother: {
	 name: 'Lily',
	 sayName: function(){
	 	console.log(this.name);
		}
	}
  }
};

var jim = Person('Jim', 42);
jim.sayName();			// Jim
jim.mother.sayName();	// Lily
```


----------------------------------------------------
```javascript
var sayName = function(){
	console.log(this.name);
};

var stacey = {
	name: 'Stacey',
	age: 34
};


var sayName = function(lang1, lang2, lang3){
	console.log("My name is:" + this.name + "I know" + lang1 + " " lang2 + " " + lang3);
};

var languages = ['Javasrcript', 'Ruby', 'Python']; _注意这里是array，所以用中括号而不是大括号_

sayName(stacey, language[0], language[1],language[2]); _来体会这句与下句不同_
sayName.call(stacey, language[0], language[1],language[2]);


sayName.apply(adam, languages);

.bind() _会返回一个新的函数，而且是带有被绑定的参数的函数，而不是像call或者apply直接调用这个函数_

*javascript 的函数非常有意思，他是按照定义函数的参数列表的顺序和类型来说对传入的参数进行处理的。简单来说就是如果参数列表定义了一个参数，那个在执行者也用到了这个参数，那么无论这个参数是什么，都会把这个当成一个东西进行处理，比如无论他是个obj，是个array，都会当成一个东西进行处理。*

```
stacey.call(sanName()); *WRONG! 不是这样的！*
sayName.call(adam); *用函数的call函数，传入参数，运行这个参数，这个函数就会去处理call里面穿入的参数*
```
_一般来说，想要用一个函数，无论是全局的，还是局部函数，可以用.call()，.apply()，和.bind()来传入或绑定object,从而让这个函数对所传入或绑定的obj进行操作_

var test = function(tt) {
	console.log("Input" + tt);
}

>test("666", "777");
Input666
	
>test(languages);
InputJavasrcript,Ruby,Python


> var test = function(tt, bb) {
	console.log("Input" + tt + "---" + bb);
}

> test(languages);
InputJavasrcript,Ruby,Python---undefined

> test("666", "777");

> test(adam, "777");
Input[object Object]---777


var test = function(tt, bb) {
	console.log("Input" + this.name + "=====" + tt + "---" + bb.name);
}

> test.call( languages, adam);

Uncaught TypeError: Cannot read property 'name' of undefined
    at Array.test (<anonymous>:2:61)
    at <anonymous>:1:6

> test.call(lili, languages, adam);
Inputccccc=====Javasrcript,Ruby,Python---adam

_所以如果不用call()进行函数调用，传入的参数都是被执行的参数，但是如果使用了call，apply，或者是bind，那么第一个参数会被转化成函数自己的一个属性。从第2个参数开始才是所传入的参数_



*'use strict' mode 不允许在本函数里没有定义一个属性或变量的情况下自动去取global，也就是windows下的有同样名字的属性进行操作。而在非strict mode下，如果在本函数内没有找到的话，会自动去全局的，也就是windows下去找，找到了就会对这个全局的属性或变量进行处理。* 


# React js Event Handler 及 arrow function
```javascript

  handleClick() {
      this.setState((prevState)=>{
        return {count: prevState.count + 1}
      });
      alert("ccc");
  }

*这两个是一样的，arrow function 的用法*

  handleClick() {
  	  this.setState( prevState =>({
  	  	count: prevState.count + 1,
  	  }));
  }

*如果用不到之前的state，就不需要穿参数，直接对state进行修改*

prevState =>({ count: prevState.count + 1})

*这样的写法等同于返回一个object*

```javascript
  handleClick() {
      this.setState({count: new Date()});
      alert("ccc");
  }

 *So interesting like below*
 this.setState( this.state.count = new Date()); //Works
 
 but 
 this.state.count = new Date(); //Not work!!!


 _setState() will tell React to rerender with the updated state, thus when not use setState() to update state, the view won't be update, thus it seems thats that it doesn't work_

```











