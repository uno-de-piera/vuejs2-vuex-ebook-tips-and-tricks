export default {
    namespaced: true,
    state: {
        posts: []
    },
    actions: {
        async fetchPosts ({commit}) {
            setTimeout(async () => {
                const response = await fetch('posts.json')
                const data = await response.json()
                commit('setPosts', data)
            }, 3000)
        }
    },
    mutations: {
        setPosts (state, posts) {
            state.posts = posts
        }
    }
}
