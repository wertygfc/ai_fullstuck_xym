// console.log(1);

// setTimeout(() => {
//   console.log(2);
//   new Promise((resolve) => {
//     console.log(4);
//     resolve()
//     setTimeout(() => {
//       console.log(6);
//     }) 
//   }).then(() => {
//     console.log(5);
//   })
// }, 1000)

// console.log(3);



// console.log('stard');
// async function async1() {
//   await async2()    // 浏览器会给await提速
//   console.log('saync1 end');    // 被await放到了微任务里
// }
// async function async2() {
//   console.log('saync2 end');
// }
// async1()
// setTimeout(function() {
//   console.log('setTimeout');
// }, 0)
// new Promise((resolve) => {
//   console.log('promise');
//   resolve()
// })
// .then(() => {
//   console.log('then1');
// })
// .then(() => {
//   console.log('then2');
// })
// console.log('end');


// fn2 end; fn3 end ; fn1 end; settimerout; settimerout end; then; then2 end
async function fn1() {
    await fn2()
    await fn3()
    console.log('fn1 end');
  }
  fn1()
  async function fn2() {
    console.log('fn2 end');
  }
  async function fn3() {
    console.log('fn3 end');
  }
  
  setTimeout(() => {
    new Promise((resolve) => {
      console.log('setTimeout');
      resolve()
    })
    .then(() => {
      console.log('then');
    })
    .then(() => {
      setTimeout(() => {
        console.log('then2 end');
      })
    })
    console.log('setTimeout end');
  }) 