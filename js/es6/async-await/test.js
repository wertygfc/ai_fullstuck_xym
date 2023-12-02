function request(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('get', url, true)
        xhr.onreadystatechange = function() {
            resolve(xhr.requestText)
        }
        xhr.send()
    })
}

// request('xxx'.then((data) => {

// }))

const res = await request('xxx')
console.log(res);

// fetch('xxx')
// .then((data) => {
//     return data.json()
// })
// .then((res) => {})