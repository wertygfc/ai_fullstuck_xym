(function(){
    //性能  DOM开销性能比较大
    var htmlElement = document.documentElement;
    //DRY don't repeat yourself
    function getFontSize(){
        var width = window.innerWidth;
        var fontSize = width / 10
        return fontSize
    }
    htmlElement.style.fontSize = getFontSize() + 'px'
    
    
    window.addEventListener('resize',function(){
        htmlElement.style.fontSize = getFontSize() + 'px';
    })
    // html动态规划font-size
    // 函数作用域
    // 变量，不会污染外面的作用域
})()