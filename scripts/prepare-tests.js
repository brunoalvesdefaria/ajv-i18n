'use strict';

var fs = require('fs')
  , path = require('path')
  , shell = require('shelljs');

shell.rm('-rf', '.browser');
shell.mkdir('-p', '.browser');

var files = shell.find('./spec').filter(function (file) {
  return file.match(/\.spec\.js$/);
});

console.log(files);
