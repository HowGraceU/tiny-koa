const log4js = require('log4js');
const {
    join
} = require('path');
const pid = process.pid;
const nowDate = new Date().toISOString().replace(/:/g, '-');

let logFile = join('logs', `${pid}_${nowDate}`);

log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: `${logFile}.log`
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'info'
        }
    }
});

const logger = log4js.getLogger('cheese');

// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Comté.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');

module.exports = logger;