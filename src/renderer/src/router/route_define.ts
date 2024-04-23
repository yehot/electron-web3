class Route {
  constructor(path: string, title: string) {
    this._title = title
    this._path = path
  }
  get title(): string {
    return this._title
  }

  set title(value: string) {
    this._title = value
  }
  get path(): string {
    return this._path
  }

  set path(value: string) {
    this._path = value
  }
  private _path: string

  private _title: string
}

/// 定义路由常量
export const RouteDefine = {
  admin: new Route('/', '首页'),
  wallet: {
    creator: new Route('/wallet/creator', '创建钱包'),
    info: new Route('/wallet/info', '钱包信息查看'),
    manager: new Route('/wallet/manager', '钱包地址管理')
  }
}
