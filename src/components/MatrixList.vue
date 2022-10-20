<template>
    <div class="matrix-list">
        <form class="matrix-list__form" @submit.prevent="createMatrix">
            <h3 class="matrix-list__title">Добавьте новую матрицу</h3>

            <div class="matrix-list__form-area">
                <input-element v-model="matrixData.name" for="inputName" id="inputName" :labelText="String('Название матрицы:')">
                </input-element>
                <input-element v-model="matrixData.desc" for="inputDesc" id="inputDesc" :labelText="String('Описание:')" style="flex-grow: 1"></input-element>
                <button-element type="submit">Создать</button-element>
            </div>
        </form>

        <ul class="matrix-list-body">
            <matrix-list-item v-for="matrix in matrixes" :key="matrix.id" :matrixData="matrix" @remove="this.deleteMatrix" />
        </ul>
    </div>
</template>

<script>
import MatrixListItem from '@/components/MatrixListItem.vue'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'matrix-list',
    components: {
        MatrixListItem
    },
    data() {
        return {
            matrixData: {
                name: '',
                desc: ''
            }
        }
    },
    mounted() {
        this.postMatrixes()
    },
    methods: {
        createMatrix() {
            this.putMatrixes(this.matrixData)
            this.matrixData = {
                name: '',
                desc: ''
            }
        },
        ...mapActions({
            postMatrixes: 'matrix/postMatrixes',
            putMatrixes: 'matrix/putMatrixes',
            deleteMatrix: 'matrix/deleteMatrix'
        })
    },
    computed: {
        ...mapState({
            matrixes: state => state.matrix.matrixes
        })
    }

}
</script>
<style lang="scss" scoped>
.matrix-list {

    &__body {
        display: block;
        list-style: none;
    }

    &__title {
        margin-bottom: 10px;
    }

    &__form {
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid var(--border-color);
        border-radius: 3px;
    }

    &__form-area {
        display: flex;
        align-items: flex-end;
        column-gap: 10px;
    }
}
</style>