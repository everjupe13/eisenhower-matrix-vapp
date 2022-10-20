
const selectOptions = [
    {
        id: 0,
        value: 'important, urgent',
        name: 'Важно, срочно'
    },
    {
        id: 1,
        value: 'important, not urgent',
        name: 'Важно, не срочно'
    },
    {
        id: 2,
        value: 'not important, urgent',
        name: 'Не важно, срочно'
    },
    {
        id: 3,
        value: 'not important, not urgent',
        name: 'Не важно, не срочно'
    },
]

export const matrixModule = {
    state: () => ({
        matrixes: [],
        selectOptions
    }),
    getters: {
        getMatrixById: (state) => (id) => {
            return state.matrixes.find(matrix => matrix.id === id)
        }
    },
    mutations: {
        setMatrixes(state, matrixes) {
            state.matrixes = matrixes
        },
    },
    actions: {
        postMatrixes({ commit }) {
            if (!localStorage.getItem('matrixes')) {
                return localStorage.setItem('matrixes', JSON.stringify([]))
            }

            const matrixes = JSON.parse(localStorage.getItem('matrixes')) || []
            commit('setMatrixes', matrixes)
        },
        putMatrixes({ state, commit }, { name, desc }) {
            function getNewId() {
                let id = 0
                if (state.matrixes.length < 1) {
                    return id
                }

                state.matrixes.forEach(matrix => {
                    if (matrix.id > id) {
                        id = Number(matrix.id)
                    }
                })
                return id + 1
            }

            const matrixes = state.matrixes.concat([{
                id: getNewId(),
                name,
                desc,
                blocks: [
                    {
                        id: 0,
                        name: "important, urgent",
                        items: [],
                    },
                    {
                        id: 1,
                        name: "important, not urgent",
                        items: [],
                    },
                    {
                        id: 2,
                        name: "not important, urgent",
                        items: [],
                    },
                    {
                        id: 3,
                        name: "not important, not urgent",
                        items: [],
                    },
                ]
            }])
            commit('setMatrixes', matrixes)

            localStorage.setItem('matrixes', JSON.stringify(matrixes))
        },
        deleteMatrix({ state }, id) {
            state.matrixes.splice(state.matrixes.findIndex(matrix => matrix.id === id), 1)

            localStorage.setItem('matrixes', JSON.stringify(state.matrixes))
        },
        postMatrixItem({ state }, { matrixId, blockId, text }) {
            if (!blockId.toString() || !matrixId.toString() || !text) {
                return false
            }

            const matrix = state.matrixes.find(matrix => matrix.id === matrixId)
            const block = matrix.blocks.find(block => block.id === blockId)

            let id = 0

            if (block.items.length >= 1) {
                block.items.forEach(item => {
                    if (item.id > id) {
                        id = Number(item.id)
                    }
                })
            }

            id += 1;

            state.matrixes[matrixId].blocks[blockId].items.push({
                id: id,
                value: text
            })

            localStorage.setItem('matrixes', JSON.stringify(state.matrixes))

        },
        deleteMatrixItem({ state }, {matrixId, blockId, itemId}) {
            const matrix = state.matrixes.find(matrix => matrix.id === matrixId)
            const block = matrix.blocks.find(block => block.id === blockId)
            const items = block.items.filter(item => item.id !== itemId)

            state.matrixes[matrixId].blocks[blockId].items = items
            localStorage.setItem('matrixes', JSON.stringify(state.matrixes))
        }
    },
    namespaced: true
}