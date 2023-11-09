var arr = []

for (var i = 0 ; i < 10 ; i++) {
    arr[i] = function (){
        console.log(i);
    }
}


for (var j = 0 ; i< arr.length ; j++) {
    arr[i]()
}

(function(j){    //自执行
    arr[j] = function(){
        console.log(j);
    }
})(i)