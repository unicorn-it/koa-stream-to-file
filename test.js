var assert = require('assert');
var expect = require('expect.js');
require('co-mocha');
var fs = require('fs');
var path = require('path');
var tmpdir = require('os').tmpdir();
var Stream = require('stream');

var stf = require('./');

describe('Save To File', function () {


    expect(stf).to.be.ok();
    expect(stf).to.be.an('object');

    var writtenFileInput = "hello world";
    var readFileInput = "";

    it('should work with a custom stream', function * () {


        var stream = new Stream.PassThrough();
        stream.end(writtenFileInput);
        var destination = path.join(tmpdir, 'lkajsdfljasdf.txt');
        var dest = yield stf.saveToFile(stream, destination);
        assert.equal(destination, dest);

        var readStream = fs.createReadStream(dest);


        readStream.on('data', function (chunk) {
            readFileInput += chunk.toString();
        }).on('end', function () {
            assert.equal(writtenFileInput, readFileInput);
        });


    });


});