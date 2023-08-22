function greet(CallBack) {
    console.log("Good Morning");
    CallBack()
    let inner = function() {
        console.log("Thank You ,I am fine....");
    }
    return inner;
}

function inquire() {
    console.log("How you are ....?");
}
greet(inquire)();