//1. function expression
//2. CallBack
//3. Function can return another function

function show() {
    console.log('inside show function');
    let innerFunction = function() {
        console.log('inside show function');
    }
    return innerFunction
}
let inner = show();
inner();
//show()()