import { createRouter, createWebHashHistory } from 'vue-router'

// 1. 定义路由组件（可以是一个页面，也可以是一个 View）
import Admin from '@renderer/layout/admin.vue'
import Index from '@renderer/pages/index.vue'
import Login from '@renderer/pages/login.vue'
import NotFound from '@renderer/pages/404.vue'
import GoodList from '@renderer/pages/goods/list.vue'


// 默认路由，所有用户共享
const routes = [
  {
    path: '/',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: '/',
        name: '/',
        component: Index,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/goods/list',
        name: '/goods/list',
        component: GoodList,
        meta: {
          title: '商品管理'
        }
      }
    ]
  },
  // {
  //   path: '/login',
  //   component: Login,
  //   meta: {
  //     title: '登录页'
  //   }
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

// 动态路由，用于匹配菜单动态添加路由
// const asyncRoutes = [
//   {
//     path: '/',
//     name: '/',
//     component: Index,
//     meta: {
//       title: '后台首页'
//     },
//     children: [
//       {
//         path: '/goods/list',
//         name: '/goods/list',
//         component: GoodList,
//         meta: {
//           title: '商品管理'
//         }
//       }
//     ]
//   },
//
// ]

// 3. 创建路由实例并传递 `routes` 配置
export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

// 动态添加路由的方法
// export function addRoutes(menus) {
//   // 是否有新的路由
//   let hasNewRoutes = false
//   const findAndAddRoutesByMenus = (arr) => {
//     arr.forEach((e) => {
//       const item = asyncRoutes.find((o) => o.path === e.frontpath)
//       if (item && !router.hasRoute(item.path)) {
//         router.addRoute('admin', item)
//         hasNewRoutes = true
//       }
//       if (e.child && e.child.length > 0) {
//         findAndAddRoutesByMenus(e.child)
//       }
//     })
//   }
//
//   findAndAddRoutesByMenus(menus)
//
//   return hasNewRoutes
// }
