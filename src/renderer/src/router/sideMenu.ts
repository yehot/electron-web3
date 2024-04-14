import { RouteDefine } from "./route_define";

/// 控制 侧边栏 菜单展示顺序、图标、路由 path
export const asideMenus = [
  {
    name: '钱包',
    icon: 'help',
    child: [
      {
        name: RouteDefine.admin.title,
        icon: 'home-filled',
        frontPath: RouteDefine.admin.path
      },
      {
        name: RouteDefine.wallet.info.title,
        icon: 'shopping-cart-full',
        frontPath: RouteDefine.wallet.info.path
      },
      {
        name: RouteDefine.wallet.creator.title,
        icon: 'shopping-cart-full',
        frontPath: RouteDefine.wallet.creator.path
      },
      {
        name: RouteDefine.wallet.manager.title,
        icon: 'shopping-cart-full',
        frontPath: RouteDefine.wallet.manager.path
      },
    ]
  },
  // {
  //   name: '商城管理',
  //   icon: 'shopping-bag',
  //   child: [
  //     {
  //       name: '商品管理',
  //       icon: 'shopping-cart-full',
  //       frontPath: '/goods/list'
  //     }
  //   ]
  // }
]
