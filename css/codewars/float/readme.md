# 浮动
1. 会脱离文档流
2. 为了文字环绕
3. 让块级元素同行显示
4. 让行内元素可以设置宽高
5. 浮动元素可以用margin，但是margin: auto不生效



# 清除浮动
1. 给父容器设置高度（可行但不提倡）
2. 增加子容器，在子容器身上清除浮动
3. 借助伪元素
4. BFC


# BFC————Block Formatting Context
- 块级格式上下文

- 如何创建BFC：
    1. 浮动：float: left || right (可以但可能存产生新的负面影响)
    2. 定位：position；absolute || relative || fixed
    3. 行内块：display: inline-block    (只有行内块可以，块级、行内都不行)
    4. 表格单元：display: table-cell | table-xxx
    5. overflow: auto || hidden || scroll
    6. 弹性盒子： display: flex || inline-flex


- BFC容器的特征：
BFC的效果是让处于BFC内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响
1. 内部盒子也会按照文档流的顺序排流
2. BFC容器在计算高度是，会将内部浮动的子元素的高度也计算在内
3. 解决外边距重叠的问题（这个是设计出来的主要目的）



text-align: center;
用于文字居中，但也可以用于非块级元素