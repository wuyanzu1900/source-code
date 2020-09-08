const _ = require('lodash')
const fn1 = (str) =>{
    return str + 'def'
}
// str+'def'是fn的结果
const fn2 = (str2) =>{
    return str.toUpperCase();
}
const fn = _.flow([fn1,fn2])

let str = 'zm'
console.log(fn(str))

