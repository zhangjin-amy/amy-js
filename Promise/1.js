const promise = new Promise((resolve, reject) => {
  reject("error");
  resolve("success2");
});
promise
.then(res => {
    console.log("then1: ", res);
  }).then(res => {
    console.log("then2: ", res);
  }).catch(err => {
    console.log("catch: ", err);
  }).then(res => {
    console.log("then3: ", res);
  })

/**
 * catch:  error
 * then3:  undefined
 */

/**
 * 结论：
 * 1.无论catch放在哪个位置，总能捕获上层的错误
 * 2.catch返回一个promise
 */

