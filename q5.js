var z = 7.25;
console.log(z);
var a = Math.round(7.25);
console.log(a);
var numbers=[z,a]
function testNum(x,y) {
  if (x > y) {
    return z;
  } else {
    return a;
  }
}
var highest = testNum(z,a);
console.log(highest);