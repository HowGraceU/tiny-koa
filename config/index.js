const _ = require('loadsh');
const {join} = require('path');

const config = {
    viewDir: join(__dirname, '..', 'views'),
    staticDir: join(__dirname, '..', 'assets'),
}

if (process.env.NODE_ENV === 'development') {
    const localConfig = {
        port: 3000
    };

    Object.assign(config, localConfig);
}

if (process.env.NODE_ENV === 'prodution') {
    const prodConfig = {
        port: 80
    };

    Object.assign(config, prodConfig);
}

module.exports = config;