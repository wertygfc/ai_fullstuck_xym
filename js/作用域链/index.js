function bar() {
    console.log(myName);
}

function foo() {
    var myname = 'xym'
    bar()
}

var myName = 'cyy'
foo()