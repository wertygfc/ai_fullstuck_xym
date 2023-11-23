function myInstanceof(L, R){
    // if(L.__proto__ === R.prototype){
    //     return true
    // } else
    //     if(L.__proto__.__proto__ === R.prototype){
    //         return true
    //     } else
    //         if(L.__proto__.__proto__.__proto__ === R.prototype){
    //             return true
    //         }


    let l = L.__proto__
    let r = R.prototype
    while(l !== null){
        if(l === r){
            return true
        }
        l = l.__proto__
    }
    return false
}