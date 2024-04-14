import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from '@renderer/layout/admin.vue'
import NotFound from '@renderer/pages/404.vue'
import Manager from '../pages/wallet/manager/index.vue'
import Creator from '../pages/wallet/creator/index.vue'
import WalletInfo from '../pages/wallet/info/index.vue'
import { RouteDefine } from './route_define'

// 路由映射
const routes = [
  {
    path: RouteDefine.admin.path,
    name: RouteDefine.admin.path,
    component: Admin,
    children: [
      {
        path: RouteDefine.wallet.info.path,
        name: RouteDefine.wallet.info.path,
        component: WalletInfo,
        meta: {
          title: RouteDefine.wallet.info.title
        }
      },
      {
        path: RouteDefine.wallet.creator.path,
        name: RouteDefine.wallet.creator.path,
        component: Creator,
        meta: {
          title: RouteDefine.wallet.creator.title
        }
      },
      {
        path: RouteDefine.wallet.manager.path,
        name: RouteDefine.wallet.manager.path,
        component: Manager,
        meta: {
          title: RouteDefine.wallet.manager.title
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

// 3. 创建路由实例并传递 `routes` 配置
export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})
