import { router } from '@renderer/router'
import { hideFullLoading, showFullLoading } from '@renderer/composables/util'

// const hasGetInfo = false
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  console.log('to.path=' + to.path)
  showFullLoading()
  // 设置页面标题
  document.title = (to.meta.title ? to.meta.title : '') + 'Wallet 工具'

  next()
})

// 全局后置守卫
router.afterEach(() => hideFullLoading())
