const mid1 = (next) => (action) => {
  console.log('mid1 start')
    if (typeof action === 'function') {
      return action();
    }

    return next(action);
  };
  const mid2 = (next) =>(action) =>{
      console.log('mid2 start')
      next()
      console.log('mid2 end')
  }
//   redux已经加载完了两个中间键
  const middlewares = [mid1,mid2]
//   compose flow 
function myFlow(fns) {
  // 组合所有的 函数
  // fn3(fn2(fn1()))
  return function(defaultVal) {
    let res = defaultVal;
    while(fns.length) {
      let frist = fns.shift();
      res = frist(res);
    }
    return res;
  }
}

// chain拿到的是mid2处理的结果
  const chain = myFlow(middlewares)
  let Dispatch = chain(() =>{
    console.log('就是redux源码内部最原始的只能处理action 是纯对象的dispatch的函数')
  });
//   mid 返回的是一个函数 
// fn3(fn2(fn1())) 中间键得到的上一个结果 也是一个函数
Dispatch({a:1})