function a(cb, cb2) {
    setTimeout(function(){
        console.log('a');
        cb(cb2)
    }, 1000)
}
function b(cb){
    console.log('b');
    cb()
}
function c(){
    console.log('c');
}
a(b,c)