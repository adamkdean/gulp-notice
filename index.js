'use strict';

var through = require('through2');

module.exports = function (text) {
    text = text || '/* this is a test notice -- gulp-notice */\n';

    var transform = function (file, enc, cb) {
        var contents = file.contents.toString();
        file.contents = new Buffer(text + contents);
        this.push(file);
        cb();
    };

    return through.obj(transform);
};
