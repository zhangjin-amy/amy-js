async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");

  // 相当于
  // Promise.resolve().then(
  //   console.log('async1 end')
  // )
}
async function async2() {
  console.log("async2");
}
async1();
console.log('start')

/**
 * async1 start
 * async2
 * start
 * async1 end
 */

/**
 * 总结：
 * 1. await 所在行下面的行的代码会被阻塞；
 * 2. 下面行的代码相当于在Promise.then中执行
 */