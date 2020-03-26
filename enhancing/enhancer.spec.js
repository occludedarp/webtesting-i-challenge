const { succeed, fail, repair, get} = require('./enhancer.js');
// test away!
it('should run the tests', () => {
  expect(true).toBe(true);
})

describe('calculator.js', function() {

  describe('.repair()', function () {
    it('should accept an item object', function() {
      acceptsobject = repair({})

      expect(acceptsobject).toBeTruthy()
    })

    it('should return an item object with durability equal to 100', function() {
      expect(acceptsobject.durability).toBe(100)
      expect(acceptsobject.durability).not.toBe(70)
    })
  })

  describe('.succeed()', function() {
    it('should accept an item object')
  })

  describe('.fail()', function () {
    it.todo("should accept an object item")
    it.todo("should return a new item object, satisfying the conditions of failure defined by the client")
    
  })

  describe('.get()', function() {
    it.todo("should ")
  })
})