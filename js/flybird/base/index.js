// 对象
var obj = {
    name: 'lia',
    age: 18,
    health: 100,
    smoke: function(){
        console.log('i am smoking,cool!');
        this.health--;                  //this在这个对象里面才能生效
    },
    drink: function () {
        console.log('it is cool!');
        obj.health++;
    }
}
obj.smoke()
obj.smoke()

obj.drink()
console.log(obj.health);
// obj.girlFriend = '刘亦菲'

// delete obj.girlFriend