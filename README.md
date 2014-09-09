# Koa Stream To File 

based on koa-save-to-file ==> https://github.com/jonathanong/koa-save-to-file

Compatible with koa-scaffold stream to file saver. Useful when trying to upload streams f.e. with content-type "image/jpeg"
or similar. 

## Install

At the moment this repository is not integrated into the npm-modules.
In order to use it like one add following to your package.json - file:

```js
"dependencies": {
        ...
        "koa-stream-to-file": "https://github.com/unicorn-it/koa-stream-to-file/archive/0.0.1.tar.gz",
        ...
```

## Example

```js

var stf = require('koa-stream-to-file');

try {
    yield stf.saveToFile(this.req, "location/to/save/your/file" + "filename.jpg"); //or other file-type f.e. .png
    } catch (err) {
        console.log(err);
    }
```

### .saveToFile([stream], destination [, options])

- `stream` - if not defined, uses request directly.
- `destination` - a string specifying where you want to save the file to.
- `options`
  - `limit` - the file limit. Overrides `this.limit`.
  - `expected` - expected file size, will throw if it does not match up. `content-length` by default.

returns `destination`
