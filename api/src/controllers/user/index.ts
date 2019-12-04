import * as Router from 'koa-router';
import { UserService } from '../../services/UserService';
const router = new Router();
router.prefix('');
router.post('/', async ctx => {
     await new UserService().login();
    ctx.body = 'hello world';
    return;
});

module.exports = router;
