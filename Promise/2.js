Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });

  /**
   * 1
   * 2
   */

  /**
   * 总结
   * 1. Promise可以链式调用，then 和 catch 都会返回一个Promise
   * 2. 例子中catch没有执行，第二个then执行的是第一个then返回的Promise;
   */