const Router = require('koa-router');
const HomeControler = require('./home/home');
const ErrorControler = require('./error/error');

const router = new Router();
const errorControler = new ErrorControler();
const homeControler = new HomeControler();

router.get('/', homeControler.index);
router.get('/error', errorControler.error);

module.exports = app => {
    app.use(router.routes())
        .use(router.allowedMethods());
}