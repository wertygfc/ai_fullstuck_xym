function a() {
    setTimeout(() => {
        console.log('A');
        b()
    }, 1000) 
}

function b() {
    console.log('B');
}

a()
