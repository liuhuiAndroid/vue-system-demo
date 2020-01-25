/**
 * @作者 lh
 * @创建时间 2020/1/25 20:24
 * 商城Vuex-mutations
 */
export default {
    saveUserName(state,username){
        state.username = username;
    },
    saveCartCount(state,cartCount){
        state.cartCount = cartCount;
    }
}
