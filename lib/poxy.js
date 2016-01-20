/*!
 * poxy
 * Copyright (c) 2010 Paul Wood
 */

/**
 * Module dependencies.
 */

var stylus = require('stylus'),
    path = require('path'),
    nodes = stylus.nodes,
    utils = stylus.utils,
    Canvas;

exports = module.exports = plugin;

/**
 * Library version.
 */

exports.version = require(path.join(__dirname, '../package.json')).version;

/**
 * Stylus path.
 */

exports.path = __dirname;

/**
 * Return the plugin callback for stylus.
 *
 * @return {Function}
 * @api public
 */

function plugin() {
  return function(style){
    style.include(__dirname);
  };
}
