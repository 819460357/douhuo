import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

// @ts-ignore
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: ()=> import('@/views/Home.vue'),
    meta: {title: '发现'},
    children: [
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
        meta: {title: '关于'}
      }
    ]
  },
];

// @ts-ignore
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})
const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default  router;
