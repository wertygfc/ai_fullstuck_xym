// 工具类的代码不要写在全局，用函数封装
(function(doc,win){
    // 用js动态修改页面和字体大小
    var docEl = doc.documentElement
    var recalc = function() {
        var clientWidth = docEl.clientWidth
        docEl.style.fontSize = 20*(clientWidth / 320) + 'px'
    }
    
    doc.addEventListener('DOMContentLoaded',recalc)
    win.addEventListener('resize',recalc)

})(document,window)