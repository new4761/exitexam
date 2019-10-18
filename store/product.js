
const api = "/api/1"
export const state = () => ({
    proData: Object

})

export const mutations = {
    setDatafromAPi(state, data) {
        state.proData = data
    },
    testpush(state, name) {
        state.proData.product.push(name)
    }
}

export const getters = {
    getproData(state) {
        return state.proData.product
    }

}
export const actions = {
    async  setDatafromAPi(context) {
        //     await this.$axios.$get(api).then(response =>  console.log(response)).then((response)  => context.commit("set",response))
        await this.$axios.$get(api).then((response) => context.commit("setDatafromAPi", response))
    },
    // async  set(context) {
    //     await context.set(context.get)
    // },
    async  testpush({ commit }) {
        await commit("testpush", {
            id: 8,
            productid: "Ticket-01",
            productName: "Blackpink concert ticket",
            cost: 79000.00,
            onStock: 1
        })
    },
}