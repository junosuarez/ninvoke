# ninvoke
Call a Node callback style method and return a Promise

Implemented with [bluebird](https://npm.im/bluebird) for fast, Promise/A+ promises.

## usage
```js
var ninvoke = require('ninvoke')

var foo = {
  bar: function (arg, cb) {
    cb(null, !arg)
  }
}

ninvoke(foo, 'bar', false)
  .then(function (val) {

    // val == true

  })

```

## installation

    $ npm install ninvoke


## running the tests

From package root:

    $ npm install
    $ npm test


## thanks

kudos to [Q](https://npm.im/q), whose api I stole.

## contributors

- jden <jason@denizac.org>


## license

MIT. (c) MMXIII jden <jason@denizac.org>. See LICENSE.md
