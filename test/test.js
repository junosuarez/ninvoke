var chai = require('chai')
chai.should()
var Promise = require('bluebird')

describe('ninvoke', function () {
  var ninvoke = require('../')

  it('calls a method that takes a node-style callback', function (done) {

    var foo = {
      bar: function (arg, cb) {
        cb(null, !arg)
      }
    }

    ninvoke(foo, 'bar', false)
      .then(function (val) {
        val.should.equal(true)
      })
      .then(done, done)


  })

  it('rejects the promise if there is an cb error', function (done) {

    var foo = {
      error: function (cb) {
        cb(new Error('fubar'))
      }
    }

    ninvoke(foo, 'error')
      .then(function () {
        throw new Error('should not resolve')
      })
      .catch(function (err) {
        err.should.match(/fubar/)
      })
      .then(done, done)

  })
})