'use strict';

const {run} = require('madrun');

module.exports = {
    'start': () => 'http-server ../out',
    'build': () => 'rimraf ../out/* && cross-env NODE_ENV=production webpack --mode=production',
    'build:dev': () => 'rimraf ../out/* && NODE_ENV=development webpack --mode=development',
    'watch': () => 'webpack -dw --mode=development',
    'eslint': () => 'eslint src webpack.config.js .eslintrc.js --ignore-pattern \'!.eslintrc.js\'',
    'fix:eslint': () => 'eslint --fix src',
    'putout': () => 'putout webpack.config.js src',
    'fix:putout': () => run('putout', '--fix'),
    'lint': () => run('eslint'),
    'fix:lint': () => run('eslint', '--fix'),
    'fontcustom': () => 'fontcustom compile ./fontcustom/input-svg/ --config=./fontcustom/config.yml',
};
