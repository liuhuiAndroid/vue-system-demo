/**
 * @作者 lh
 * @创建时间 2020/1/25 20:24
 */
export default {
    saveUserName(context,username){
        context.commit('saveUserName',username);
    },
    saveCartCount(context,cartCount){
        context.commit('saveCartCount',cartCount);
    }
}
