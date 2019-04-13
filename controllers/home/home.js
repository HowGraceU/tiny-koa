/*
 * 首页路由
*/
class HomeControler {
    async index(ctx, next) {
        ctx.body = await ctx.render('index', {
            title: '我是首页'
        });
    }
}

module.exports = HomeControler;