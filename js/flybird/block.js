function Block() {  //当名称首字母大写时是指构造函数
    this.upDivWrap = null
    this.downDivWrap = null
    this.gapHeight = baseObj.randomNum(150,160) //管道中间间隙
    this.downHeight = baseObj.randomNum(0,150)
    this.upHeight = 312 - this.downHeight - this.gapHeight

    //生成div   用来辅助生成管道
    this.creareDiv = function (url, height, positionType, left, top) {
        var newDiv = document.createElement('div')
        newDiv.style.width = '62px'
        newDiv.style.height = height
        newDiv.style.position = positionType
        newDiv.style.left = left
        newDiv.style.top = top
        newDiv.style.backgroundImage = url
        return newDiv
    }

    //生成管道
    this.createBlock = function() {
        //上方管道
        var upDiv1 = this.creareDiv('url(img/up_mod.png)', this.upHeight + 'px')    //管道身子
        var upDiv2 = this.creareDiv('url(img/up_pipe.png)','60px')    //管道口
        this.upDivWrap = this.creareDiv(null,null,'absolute','450px','0px')
        this.upDivWrap.appendChild(upDiv1)
        this.upDivWrap.appendChild(upDiv2)

        //下方管道
        var downDiv1 = this.creareDiv('url(img/down_mod.png)',this.downHeight + 'px')
        var downDiv2 = this.creareDiv('url(img/down_pipe.png)','60px')
        this.downDivWrap = this.creareDiv(null,null,'absolute','450px',363 - this.downHeight + 'px')
        this.downDivWrap.appendChild(downDiv2)
        this.downDivWrap.appendChild(downDiv1)


        jsWrapBg.appendChild(this.upDivWrap)
        jsWrapBg.appendChild(this.downDivWrap)
    }


    //移动管道
    this.moveBlock = function() {
        this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px'
        this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + 'px'

    }
}

// var b = bew Block()


