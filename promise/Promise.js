new Promise((resolve, reject) => {
    console.log('promise');
    // resolve('test')
    reject('error 1')
}).then(value => {
    console.log('then', value);
    return value
}).catch((err) => {
    console.log("1 err", err);
    // Promise.reject('error 2')
    throw('error 2')
    return err;
}).then((value) => {
    console.log('then', value);
}).catch((err) => {
    console.log('err', err);
})