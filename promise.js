const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');
    } else {
        reject('error, it broke');
    }
});

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 100, 'hiiiiii')
})

const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 'poookie')
})

const promise4 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 3000, 'is it me you are looking for')
})


Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    })




promise
    .then(results => results + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('errrorororo'))
    .then(result3 => {
        console.log(result3 + '!');
    })