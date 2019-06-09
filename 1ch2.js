// variable types
/*
string
number
boolean
null and undefined
object
symbol (new to ES6)
*/
// OBJECTS subclases
// following examples are subclases of object
// objects
var obj = {
  a: 'hello world'
}
console.log(obj.a)
console.log(obj['a'])

// arrays
var arr = [
  'first element',
  42,
  true
]
console.log(arr[0])
console.log(typeof(arr));
// functions
function test(){
  return 12;
}

test.atrr = 'test'

console.log(typeof(test));
console.log(typeof(test()));
console.log(test.atrr)
//Coercion
// Coercion explicit
var x = "24"
console.log(Number(x) * 2);
// Coercion implicit
console.log(x * 3);
//falsy values
""
0
-0
NaN
null
undefined
false
//truly values
//ALL THE OTHER ONES
"hello"
42
true
console.log(1 && [])
console.log(1 && {})
//Equality
// == check for same value
// === check for same value and type
console.log("test" > 4); // false
console.log("test" < 4); // false
console.log("a" < "b") // true

//Scopes level of declaration inside a block and their childrens
//this last is called nasted scoping
function foo() {
	var a = 10
	function test(){
      var a = 20
      console.log(a);
  }
  test()
}

foo()
// HOISTING
// a VAR declaration in any part of the code are moved to the top of the scope
function hosting() {
	a = 3;
	console.log( a );	// 3
	var a;				// declaration is "hoisted"
						// to the top of `foo()`
}

//inmediatle invoque fonction
(function (){
    console.log('autocall');
}())

//CLOSURE
function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over it
	function add(y) {
		return y + x;
	};
	return add;
}
var plusOne = makeAdder(1);
console.log(plusOne(4))


//PROTOTYPE
const sampleObject = {
  a:13
}

const b = Object.create(sampleObject)
b.b = 14

console.log(b.a)
console.log(b.b)
