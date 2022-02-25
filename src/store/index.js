// import createPersistedState from 'vuex-persistedstate'
import vue from 'vue'
import Vuex from 'vuex'
vue.use(Vuex);

export default new Vuex.Store({
    // 设置全局访问的state对象【即：数据/变量】
    state: {
        // 初始化全局访问数据
        keshiID: '174',
        // ChangeShowCom: true,
    },
    getters: {
        // 获取count值的变化
        getKeshiID(state) {
            return state.keshiID;
        },
    }

});
