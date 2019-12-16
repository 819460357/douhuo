import { VueConfig } from '@/config/vueConfig';

const title = VueConfig.title || '抖货';

export function getPageTitle(pageTitle: string) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`;
    }
    return `${title}`;
}
