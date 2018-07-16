import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        blockList:[],
        tableTrans:[],
        tableNode:[],
        blockNum:null
    }

})
