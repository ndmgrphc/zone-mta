'use strict';

const merge = require('deepmerge');
const fs = require('fs');
const path = require('path');

let config = require('../config/default');

// wherever you are...
let zonemtaConfigFile = path.resolve('./config/zonemta.js');

if (fs.existsSync(zonemtaConfigFile)) {
    config = merge(config, require(zonemtaConfigFile));
}

let observers = {};
config.on = (event, fn) => {
    if (!observers[event])
        observers[event] = [];

    // might need these, not sure
    observers[event].push(fn);

    if (process.env.DEBUG)
        console.log(`zone-mta wild-config expected observation of ${event} event`);
}

module.exports = config;