const addon = require("node-gyp-build")(__dirname);

console.log(addon.hello()); // 'world'
