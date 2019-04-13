const Koa = require('koa');
const render = require('koa-swig');
const co = require('co');
const serve = require('koa-static');
const errorHandler = require('./middleware/errorHandler');
const config = require('./config');
const app = new Koa();

new errorHandler(app);
app.use(serve(config.staticDir));
// 初始化模板引擎
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false,
    varControls: ['[[', ']]']
}));

//初始化路由
require('./controllers/router')(app);

app.listen(3000, () => {
    console.log('启动 3000');
})