const test = require('node:test');
const assert = require('node:assert');
const add = require('./add.js');

test('adds two positive numbers', () => {
  assert.strictEqual(add(2,3), 5);
});

test('adds a negative number', () => {
  assert.strictEqual(add(5,-8), -3);
});
