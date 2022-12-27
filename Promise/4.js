Promise.resolve().then(() => {
  return new Error('error!!!')
}).then(res => {
  console.log("then: ", res)
}).catch(err => {
  console.log("catch: ", err)
})

/**
 * then:  Error: error!!!
 */

/**
 * 总结：
 * 1. 返回任意一个非 promise 的值都会被包裹成 promise 对象，因此这里的return new Error('error!!!')也被包裹成了return Promise.resolve(new Error('error!!!'))；
 * 2. 当然如果你抛出一个错误的话，可以用下面👇两的任意一种：
    return Promise.reject(new Error('error!!!'));
    // or
    throw new Error('error!!!')
 */