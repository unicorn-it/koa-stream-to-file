var saveTo = require('save-to');

module.exports.saveToFile = function * (stream, destination) {
        var options = {};

        var arg;
        for (var i = 0, l = arguments.length; i < l; i++) {
            switch (typeof (arg = arguments[i])) {
                case 'string':
                    destination = arg;
                    break;
                case 'object':
                    options = arg;
                    break
            }
        }
        // If no stream as the first argument,
        // stream is the request stream.
        if (!(stream && stream._readableState)) {
            stream = this.decodeRequest
                ? this.decodeRequest()
                : this.req
        }

        options.limit = options.limit || this.limit;
        options.expected = options.expected
            || (stream.headers && stream.headers['content-length'])

        if (!destination)
            throw new Error('Stream destination must be defined.');

        return yield saveTo.bind(this, stream, destination, options || {})
    };
