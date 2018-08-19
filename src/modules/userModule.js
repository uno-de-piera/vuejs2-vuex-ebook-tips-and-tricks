export default {
    namespaced: true,
    state: {
        users: []
    },
    actions: {
        async fetchUsers ({commit, rootState}) {
            if (rootState.userIsLogged) {
                commit('setLoading', true, { root: true })

                setTimeout(async () => {
                    // obtenemos todos los usuarios de una API
                    const response = await fetch('users.json')
                    const data = await response.json()
                    commit('setUsers', data)

                    // al finalizar la petición la app ha cargado
                    commit('setLoading', false, { root: true })
                }, 3000)
            }
        }
    },
    mutations: {
        setUsers (state, users) {
            state.users = users
        }
    }
}
