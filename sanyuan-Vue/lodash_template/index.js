const _ = require('lodash');
const compiler = _.template('<h1><%= title></h1>')
const html = compiler({title:'my conponent'})
console.log(html)