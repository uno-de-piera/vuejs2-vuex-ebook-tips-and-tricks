let initialState = () => {
    return {
        processing: false,
        filters: null,
        keywords: null,
        company_name: null,
        paginationDef: {
            pageSize: null,
            pageSizes: [],
            currentPage: 1
        }
    };
};
export default {
    namespaced: true,
    state: initialState(),
    mutations: {
        resetState (state) {
            const initial = initialState();
            Object.keys(initial).forEach(key => {
                state[key] = initial[key]
            })
        },
        setFilters (state) {
            state.filters = {
                search: 'test',
                keywords: 'kw1, kw2...'
            }
        }
    }
}
