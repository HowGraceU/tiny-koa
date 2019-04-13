const logger = require('../logger.js');

class errorHandler {
    constructor (app) {
        app.use(this.error);
        app.use(this.notFind);
    }

    async error(ctx, next) {
        try {
            await next();
        } catch (err) {
            logger.error(err);

            ctx.status = 500;
            ctx.body = '页面出错了！！哭'
        }
    }

    async notFind(ctx, next) {
        await next();

        if (ctx.status !== 404) {
            return;
        }

        let path = ctx.path;
        logger.warn(`veiw ${path} is not find`);

        ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
    }
}

module.exports = errorHandler;