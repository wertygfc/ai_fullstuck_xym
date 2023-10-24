# 块级标签
    占据一整行，可以设置宽高
    body,div,h1,标题标签只有1-6

# 行内块级标签
    不占据一整行，但是可以设置宽高
    input,button

# 行内标签
    不占据一整行，不能修改宽高，修改也不成效
    span

    display: block;修改为块级标签
    display: inline-block;修改为行内块级标签

# 媒体标签可以直接写宽高，其他标签不行
    如：<video width="765" height="430" src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" controls></video>


- <img src="" alt="">
    一般alt上面写文字，当图片打不卡的时候显示的就是alt中的内容


- 快捷写法
    - ul>li*2