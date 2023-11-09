function foo() {
    var myName = ''
    let test1 = 1
    const test2 = 2
    var innerBar = {
        getName : function(){
            console.log(test1);
            return myName
        },
        setName : function(myName){
            myName = newNewname
        }
    }
    return innerBar;
}

var bar = foo()
bar.setName('洋洋')
console.log(bar.getName());



function a() {
    function b() {
        var num = 1
        console.log(count); 
    }
    var count = 2
    return b
}

var c = a()
