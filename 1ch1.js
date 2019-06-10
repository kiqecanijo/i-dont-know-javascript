//optionl semi-color
var a = 1;
var b = 2
//optional multi line
var c = 1; var d = 3
//by convention const are written in capital
var TAX = 0.9
//es6+ new features you can use const
const secondTax = 0.9
//BLOCKS you can group a serie of statements (like if operator)
{
  console.log('im a fist block')
}
if(1 && true ){
  console.log('im a second block')
}
// also you can:
true ? console.log('true are true') : console.log('true are false')
1 && true && console.log('1 and true are true')
if ( 1 ) console.log('1 its true')
//you can call a functions like this

example = "new example"
printThis()

function printThis(){
  console.log(example); // return "new example"
}
var example = "example"
// note that example dont need to be previusly declared before call, thats call sibling

//EXAMPLE
const TAX_RATE = 0.08;
function calculateFinalPurchaseAmount(amt) {
	// calculate the new amount with the tax
	amt = amt + (amt * TAX_RATE);
	// return the new amount
	return amt;
}
var amount = 99.99;
amount = calculateFinalPurchaseAmount( amount );
console.log( amount.toFixed( 2 ) );

//SCOPING
// only local variable for function
var x = 1;
function newX(){
  var x = 2;
  console.log(x);
}

newX()
console.log(x); // return 1
