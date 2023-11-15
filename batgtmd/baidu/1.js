// es6 类
// 类和对象有什么区别？
// 类是对象的，定制的
// 对象是具体的
class SingleDog{
    constructor() {

    }
    //静态 属于类上的方法
    static getInstance() {
        // console.log('类的方法');
        if(!SingleDog.instance){
            SingleDog.instance = new SingleDog()
        }
        return SingleDog.instance
    }
    //公有方法
    show() {
        console.log('单身贵族');
    }
}

const s1 = SingleDog.getInstance
const s2 = SingleDog.getInstance
console.log(s1 === s2);
//False 因为他俩在内存上的地址不一样
//如何让他们相等
// new 的角度，搞不定
// 思路：设计模式  一个类只实例一次    类的能力是封装
// 第一次 new ，第二次不实例化，直接返回实例

// console.log(SingleDog.getInstance);