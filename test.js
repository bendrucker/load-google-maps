'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test(function (t) {
  t.plan(2)

  var Google = proxyquire('./', {
    'load-script-global': function (options, callback) {
      t.deepEqual(options, {
        url: 'https://maps.googleapis.com/maps/api/js?libraries=places',
        global: 'google',
        jsonp: true
      })
      callback(null, {})
    }
  })

  Google({libraries: ['places']}, function (err, google) {
    if (err) return t.end(err)
    t.ok(google)
  })
})
