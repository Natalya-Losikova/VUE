
import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        paymentList: [],
        categories: []

    },
    mutations: {
        setPaymentListData(state, payload) {
            state.paymentList = payload
        },
        addDataToPaymentList(state, payload) {
            state.paymentList.push(payload)
        },
        setCategoriesListData(state, payload) {
            state.categories = payload
        }

    },
    getters: {
        getPaymentList: state => state.paymentList,
        getFullPaymentValue: state => {
            return state.paymentList.reduce((res, cur) => res + cur.value, 0)
        },
        getCategories: state => state.categories
    },
    actions: {
        fetchData({ commit }) {
            if (this.state.paymentList.length) return
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = []
                    for (let i = 0; i < 20; i++) {
                        items.push({
                            date: '05.08.2021',
                            category: 'Spotr',
                            value: 100
                        })
                    }
                    resolve(items)
                }, 2000)
            })
                .then(res => commit('setPaymentListData', res))
        },
        fetchCategoryList({ commit }) {

            return new Promise((resolve) => {
                setTimeout(() => {
                    const categories = ['Sport', 'Food', 'Utilities', 'Other', 'Stationery']

                    resolve(categories)
                }, 2000)
            })
                .then(res => commit('setCategoriesListData', res))
        }
    },
})