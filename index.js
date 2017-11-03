/**
 * Module dependencies.
 */

const hasAnsi = require('has-ansi');
const isString = require('lodash/isString');
const stripAnsi = require('strip-ansi');

/**
 * Export `serializerAnsi`.
 */

module.exports = {
  print: stripAnsi,
  test: (value) => value && isString(value) && hasAnsi(value)
};
