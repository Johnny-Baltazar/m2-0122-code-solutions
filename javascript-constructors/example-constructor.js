function ExampleConstructor() {
}

var newExampleConstructor = new ExampleConstructor();
var instanceOfExCon = newExampleConstructor instanceof ExampleConstructor;

console.log('value of prototype property of exampleConstructor:', ExampleConstructor);
console.log('typeof prototype property of exampleConstructor:', typeof ExampleConstructor);
console.log('newExampleConstructor():', newExampleConstructor);
console.log('value of instanceOfEC:', instanceOfExCon);
