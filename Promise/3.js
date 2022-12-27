const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('timer')
    resolve('success')
  }, 1000)
})
const start = Date.now();
promise.then(res => {
  console.log(res, Date.now() - start)
})
promise.then(res => {
  console.log(res, Date.now() - start)
})

/**
 * timer
 * success 1010
 * success 1010
 */

const promise1 = new Promise((resolve, reject) => {
  resolve(1);
})
promise1.then(res => {
  console.log('then1', res)
})
promise1.then(res => {
  console.log('then2', res)
})

promise1.then(res => {
  console.log('then3', res)
})
promise1.then(res => {
  console.log('then4', res)
})

/**
 * then1 1
 * then2 1
 * then3 1
 * then4 1
 */

/**
 * 总结：
 * 1. then 和 catch 可以执行多次；
 */