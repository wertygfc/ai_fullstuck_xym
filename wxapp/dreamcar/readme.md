# 路虎4s店小程序
- 架构
  - page 架构
    - wxml -> html
      小程序组件 view -> div
    - wxss ->css
    - js ->
      onload 生命周期
      data setData
    - json 配置
- 布局   flex 弹性布局
  - css 的难点在于布局
  - 两列式布局
    - float 浮动
    - flex 弹性
      可以让子元素在一行，同时具备盒子的能力（可以设置宽高）（行内元素不能设置宽高，它是靠里面的内容撑起来的）
      - flex :1 主列
        其他列把宽度占完后，剩余宽度都给他
      - align-items: flex-end|center|start

- 早点学架构
  - 基础组件
    button reset cell...
  - 业务模块


- 列表循环 List
  把数据库的数据展示出来
  <block wx:for="" wx:key="要给唯一值">
    {{item.image}}
  </block>

- 数据请求
  onLaunch 发送一次数据请求