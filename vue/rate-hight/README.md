- 简历
    Boss直聘
    - 前端全栈 vue
    - ai 岗位 绘画
    杭州 海康卫视

- vue 
    - 核心：组件
    - 显示和数据
    - 加一项功能 要能够评分
    - 鼠标经过 显示星星

- rate
    - 它是一个基本每个电商项目都有的项目，通用组件，手写听复杂的
        - vue 开发要忠于数据驱动
            父组件给我们value，rate组件mouseover mouseout 私有数据value驱动，当click打完分后，需要汇报给父组件，父组件和子组件状态的统一
        - props + emits
            props负责传参
            emits负责子组件
            子组件是不可以直接修改props，vue数据除v-model外是单向的
            如果要改需要遵守流程 emits
            - 父组件会以自定义事件的方式，定义一个事件，并接受传参，同步状态
                @uodate-rate="update"
            - 子组件通过 denfineEmits(['update-rate'])来定义    emits数组