'use strict'

const Koa = require('koa')
const expect = require('chai').expect
const middleware = require('../../../lib/middleware/request-id')
const request = require('supertest')

describe('request-id middleware', function () {
  it('adds the `x-request-id` header to the response', function () {
    let app = new Koa()
    app.use(middleware)

    return request(app.listen())
      .get('/')
      .then(function (res) {
        expect(res.headers).to.include.key('x-request-id')
      })
  })
})
