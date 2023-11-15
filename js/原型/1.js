// function Person() {
//     this.name = 'lia'
//     this.age = 18
// }
// let p = new Person()
// let p2 = new Person()
// console.log(p);





// Car.prototype.name = 'BMW'
// Car.prototype.long = 4900
// Car.prototype.height = 1400

// Car.prototype = {
//     name : 'BMW',
//     long : 4900,
//     height : 1400
// }

// function Car(owner,color){
//     // thia.name = 'BMW'
//     // this.long = 4900
//     // this.height = 1400
//     this.owner = owner
//     this.color = color
// }
// let car = new Car('liming','red')
// let car2 = new Car('lihua','pink')

// // let car= new Car()
// // console.log(car);


//constructor 构造器属性，用于记录对象是由谁创造的
//构造函数的显示原型和实例对象的隐式原型，肯定是有关系的

function Foo() {
    
}
let foo = new Foo()
foo.__proto__ == Foo.prototype
Foo.prototype.__proto__ == Object.prototype
Object.prototype.__proto__ == null