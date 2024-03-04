export function ref(val){   // 将原始类型数据变成响应式
    return createRef(val)
}

function createRef(val){
    // 判断val是否已经是响应式了

    // 将val变成响应式
    return new RefImpl(val)
}

const age = ref(18)
class RefImpl {
    constructor(val) {
        this.__v__isRef = true  // 给每一个被ref操作过的属性值都添加标记
        this._value = val  // 属性前面加个地杠，表示私有属性，不会拿出去用，只能自己用，查询的时候不要地杠
    }

    get value(){
        return 20
    }
}