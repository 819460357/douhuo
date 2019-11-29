import * as Router from 'koa-router';
import { UserService } from '../../services/UserService';
const router = new Router();
router.prefix('');
router.post('/', async ctx => {
    console.log(123, new UserService().login());
    ctx.body = 'hello world';
    return;
});

module.exports = router;