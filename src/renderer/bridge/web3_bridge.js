
/// 创建 eth 钱包
function _create_eth_wallet(num) {
  window.api.create_eth_wallet(num)
}


// export default create_eth_wallet
export const create_eth_wallet = _create_eth_wallet
