async function async1 () {
  await async2();
  console.log('async1');
  return 'async1 success'
}
async function async2 () {
  return new Promise((resolve, reject) => {
    console.log('async2')
    reject('error')
  })
}
async1().then(res => console.log(res))

/**
 * async2
 *  UnhandledPromiseRejectionWarning: error
 */

/**
 * 总结：
 * 在async中抛出了错误，会终止执行；
 * 改为 throw new Error 也是一样的
 */