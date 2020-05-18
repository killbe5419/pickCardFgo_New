function a () {
    return new Promise(resolve => {
        const a = [{a:1},{b:2},{c:3},{d:4},{e:5}];
        resolve(a);
    })
}

const tmp = a();
Promise.all((tmp).then(value => {
    console.log(value);
}))