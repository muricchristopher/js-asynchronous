const promise1 = Promise.resolve('Promis');
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 400, 'foo')
})
const promise3 = 40;
const promise4 = Promise.reject('ERROR')

const promises = [
    promise1,
    promise2,
    promise3,
    promise4
]

const createObjectFormat = (data) => {
    arr = []
    obj = {};

    data.forEach((res, index) => {
        type = typeof res;
        arr.push({
            res,
            type
        })
    })

    return arr
}

Promise.all(promises)
    .then(data => createObjectFormat(data))
    .then(data => console.log(data))
    .catch(err => console.log('promise.all() NAO FOI EXECUTADA: '+ err));

Promise.race(promises)
    .then(data => console.log('promise.race() VENCEDORA:'+ data))