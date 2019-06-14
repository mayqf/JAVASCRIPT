var x = 16;                               
var y = "Johnson";                      
var z = true;
var q = ["a","b",'c', 1, 2];
console.log("The value of my variable x is: " + x);
console.log("The value of my variable y is: " + y);
console.log("The value of my variable z is: " + z);
console.log("The value of my variable q is: " + q);
console.log("The type of my variable x is: " + 'number');
console.log("The type of my variable y is: " + 'string');
console.log("The type of my variable z is: " + 'boolean');
console.log("The type of my variable q is: " + 'array');
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(typeof q)

if (typeof z===typeof y) {
    console.log('SAME TYPE');
}
else {
  console.log('NOT SAME TYPE');
}