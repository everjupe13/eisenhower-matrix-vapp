<template>
    <li class="matrix-list-item">
        <div class="matrix-list-item__body">
            <div class="matrix-list-item__title">{{ matrixData.name }}</div>
            <div class="matrix-list-item__desc">{{ matrixData.desc }}</div>
        </div>
        <div class="matrix-list-item__btns">
            <button-element class="matrix-list-item__btn-danger" @click="this.$emit('remove', matrixData.id)" style="align-self: center" v-slot:default>
                Удалить
            </button-element>
            <button-element style="align-self: center" @click="$router.push({name: 'matrix', params: {matrixId: matrixData.id}})" v-slot:default>
                Открыть
            </button-element>
        </div>
    </li>
</template>
  
<script>
export default {
    props: {
        matrixData: {
            type: Object
        }
    },
}
</script>
  
<style lang="scss" scoped>
.matrix-list-item {
    display: flex;
    align-content: center;
    justify-content: space-between;
    column-gap: 30px;

    padding: 6px 0;
    height: 60px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }

    &__body {
        flex-grow: 1;
    }

    &__title {
        margin-bottom: 5px;

        font-size: 16px;
        font-weight: 700;
        color: #343333;
    }

    &__desc {
        font-size: 14px;
        color: #3d3939;
        line-height: 1.4;
    }

    &__btns {
        display: flex;
        column-gap: 5px;
    }

    &__btn-danger {
        &:hover,
        &:active,
        &:focus {
            color: #fff;
            background-color: #f22a1c;
            border: 1px solid #f22a1c;
        }
    }
}
</style>