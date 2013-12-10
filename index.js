var Promise = require('bluebird')

function ninvoke (object, methodName) {
  var args = Array.prototype.slice.call(arguments, 2)
  return new Promise(function (resolve, reject) {
    args.push(function (err, ret) {
      if (err) { return reject(err) }
      resolve(ret)
    })
    object[methodName].apply(object, args)
  })
}

module.exports = ninvoke