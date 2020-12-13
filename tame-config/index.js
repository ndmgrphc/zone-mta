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

module.exports = config;