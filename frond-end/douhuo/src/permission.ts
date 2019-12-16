import router from '@/router';
import store from '@/store';
import NProgress from "nprogress"; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getPageTitle } from '@/utils/get-page-title';

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async (to: { meta: { title: string; }; }, from: any, next: any) => {
    // start progress bar
    NProgress.start()

    // set page title
    document.title = getPageTitle(to.meta.title);
    next();
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
