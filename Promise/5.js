const promise = Promise.resolve().then(() => {
  return promise;
})
promise.catch(console.err)

/**
 * TypeError: Chaining cycle detected for promise #<Promise>
 */

/**
 * 总结
 * .then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。
 */

const promise1 = new Promise((resolve, reject) => {
  resolve(1)
})
promise1.then(res => {
  console.log('then1', res)
  return promise1;
}).then(res => {
  console.log('then2', res)
  return promise1;
}).then(res => {
  console.log('then3', res)
})

/**
 * then1 1
 * then2 1
 * then3 1
 */

const p1 = new Promise((resolve, reject) => {
  resolve(1)
})

const p2 = p1.then(res => {
  console.log('then1', res)
  return p2;
})

/**
 * then1 1
 * TypeError: Chaining cycle detected for promise #<Promise>
 */

const myP1 = new Promise((resolve, reject) => {
  resolve(1)
  return myP1; // 这里返回自身可以，then 和 catch 中不能返回自身
})
const myP2 = myP1.then(res => {
  console.log('then1', res)
})

/**
 * then1 1
 */

