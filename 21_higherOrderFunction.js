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

console.log('-------------------------------------------------------------------------------------------------------');

function do_homework(callbacks ,age) {
    console.log('My Name is Shweta');
    console.log(`I Am from Sangola`);
    callbacks();
    age()
    let completeHomeWork = function(){
        console.log(`Am Age is 23`);
        
    }
    return completeHomeWork
}
function copyHomeWork (){
    console.log("Hello");
}
let homeDone = do_homework(do_homework ,copyHomeWork)
homeDone();