import * as Router from 'koa-router';
const router = new Router();
router.prefix('');
router.post('/', async ctx => {
    console.log(123);
    ctx.body = 'hello world';
    return;
});

module.exports = router;