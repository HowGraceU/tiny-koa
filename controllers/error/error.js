/*
 * 错误路由测试
*/
class ErrorControler {
    async error(ctx, next) {
        data // 使用未定义的data，抛出错误
    }
}

module.exports = ErrorControler;