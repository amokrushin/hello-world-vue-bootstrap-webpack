require('dotenv').config({ path: './.env' });
const merge = require('webpack-merge');
const path = require('path');
const url = require('url');
const defaults = require('lodash.defaults');
const pick = require('lodash.pick');
const packageJson = require('./package.json');

const env = process.env;

const APP_ORIGIN = 'http://localhost:8090';
const APP_NAME = packageJson.name;
const NODE_ENV = 'development';
const CWD = __dirname;
const PUBLIC_DIR = path.join(CWD, 'dist');
const BUILD_DIR = path.join(PUBLIC_DIR, 'build');
const PUBLIC_PATH = '';
const BUILD_PATH = `${env.PUBLIC_PATH || PUBLIC_PATH}/build/`;
const WDS_BASE_DIR = env.PUBLIC_DIR || PUBLIC_DIR;
const WDS_HOST = url.parse(env.APP_ORIGIN).hostname;
const WDS_PORT = url.parse(env.APP_ORIGIN).port;

const envDefaults = {
    APP_ORIGIN,
    APP_NAME,
    NODE_ENV,
    CWD,
    PUBLIC_DIR,
    BUILD_DIR,
    PUBLIC_PATH,
    BUILD_PATH,
    WDS_BASE_DIR,
    WDS_HOST,
    WDS_PORT,
};

defaults(env, envDefaults);

if (!process.argv.includes('--json') && !process.argv.includes('-j')) {
    // eslint-disable-next-line no-console
    console.dir(pick(env, Object.keys(envDefaults)), { colors: true });
}

// eslint-disable-next-line import/no-dynamic-require, global-require
module.exports = ({ config }) => merge(...config.split(',').map(name => require(`./webpack/${name}.config`)));
