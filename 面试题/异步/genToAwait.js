function* gen(){}
function generatorToAwait(generateFn){
    return function(){
        const g = generateFn()
        return new Promise(function(resolve, reject){

            function loop(key,arg){
                const {value, done} = g[key](arg)
                if(done){
                    resolve(value)
                }else{
                    Promise.resolve(value).then(val => loop('next', val))
                }
            }
        })
    }
}
let asyncFn = generatorToAwait(gen)
console.log(asyncFn());