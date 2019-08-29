'use strict';

const {run} = require('madrun');

module.exports = {
    'start': () => 'http-server ../out',
    'build': () => build('production'),
    'build:dev': () => build('development'),
    'watch': () => 'webpack -dw --mode=development',
    'eslint': () => 'eslint src webpack.config.js .eslintrc.js --ignore-pattern \'!.eslintrc.js\'',
    'fix:eslint': () => 'eslint --fix src',
    'putout': () => 'putout webpack.config.js src',
    'fix:putout': () => run('putout', '--fix'),
    'lint': () => run('eslint'),
    'fix:lint': () => run('eslint', '--fix'),
    'fontcustom': () => 'fontcustom compile ./fontcustom/input-svg/ --config=./fontcustom/config.yml',
};

function build(env) {
    const rm = 'rimraf ../out';
    const mv = 'mv ../out-build ../out';
    const webpack = `NODE_ENV=${env} webpack --mode=${env}`;
    
    return `${webpack} && ${rm} && ${mv}`;
}

