'use strict';

const {
    run,
    series,
    parallel,
} = require('madrun');

module.exports = {
    "start": () => 'http-server ../out',
    "build": () => 'rimraf ../out/* && cross-env NODE_ENV=production webpack --mode=production',
    "build:dev": () => 'rimraf ../out/* && NODE_ENV=development webpack --mode=development',
    "watch": () => 'webpack -dw --mode=development',
    "eslint": () => 'eslint src webpack.config.js',
    "fix:eslint": () => 'eslint --fix src',
    "putout": () => 'putout webpack.config.js src',
    "fix:putout": () => run(['putout'], '--fix'),
    "lint": () => run(['putout', 'eslint']),
    "fix:lint": () => run(['putout', 'eslint'], '--fix'),
    "fontcustom": () => 'fontcustom compile ./fontcustom/input-svg/ --config=./fontcustom/config.yml'
};

