# electron-app


```shell
# 安装 viet
# electron 模板
yarn create @quick-start/electron
yarn install
```


运行：

```
yarn dev
```


打包

```
yarn build
```




## TODO List

1、添加 vue route 、vue 二级菜单
2、数据存储模块，


## Function List

### 1、创建 eth 钱包

- [x] 创建钱包地址、私钥、写入 Excel、txt
- [] 界面提供选项，创建钱包数量。限制100个
- [] 创建完成后，打开本地目录，展示 Excel 位置（打包后的位置？）

### 2、钱包余额查看功能

- [] 添加钱包地址，查询钱包各个链上的余额，btc、eth、linea
  - 使用 okx js sdk：https://github.com/okx/js-wallet-sdk


https://cn.electron-vite.org/guide/


## 问题 list

1、在 webstorm 里配置 debug 断点 attach 问题：
https://cn.electron-vite.org/guide/debugging

VSCode 可以同时调试 main 和 render 线程

2、vue 配置的 alias @ 路径，功能上生效了，但是 webstorm 无法跳转代码

