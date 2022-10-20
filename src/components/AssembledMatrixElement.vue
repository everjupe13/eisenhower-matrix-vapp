<template>
  <div class="matrix">
    <div class="matrix-list">
      <form class="matrix-list__form" @submit.prevent="addItem">
        <h3 class="matrix-list__title">Добавьте дело:</h3>

        <div class="matrix-list__form-area">
          <input-element v-model="itemName" for="selectOption" id="selectOption" :labelText="String('Название:')" style="flex-grow: 1" />
          <button-element type="submit">Создать</button-element>
          <select-element v-model.number="selected" :options="selectOptions"></select-element>
        </div>
      </form>
    </div>

    <div class="matrix__grid">
      <template v-for="block in matrixBlock" :key="block.id">
        <div class="matrix__block">
          <matrix-item v-for="item in block.items" :key="item.id" :data="item" :blockId="block.id" @remove="removeItem">
          </matrix-item>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import MatrixItem from "@/components/MatrixItem.vue";

import { mapActions, mapGetters, mapState } from 'vuex'
import InputElement from "./UI/InputElement.vue";

export default {
  name: "assembled-matrix-element",
  components: {
    MatrixItem,
    InputElement
},
  props: {
    matrixId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      selected: '',
      itemName: '',
    };
  },
  mounted() {
    this.postMatrixes()
  },
  methods: {
    addItem() {
      this.postMatrixItem({matrixId: this.matrixId, blockId: this.selected, text: this.itemName})
      this.selected = ''
      this.itemName = ''
    },
    removeItem(itemId, blockId) {
      this.deleteMatrixItem({matrixId: this.matrixId, blockId, itemId})
    },
    ...mapActions({
      postMatrixes: 'matrix/postMatrixes',
      postMatrixItem: 'matrix/postMatrixItem',
      deleteMatrixItem: 'matrix/deleteMatrixItem'
    })
  },
  computed: {
    ...mapState({
      selectOptions: state => state.matrix.selectOptions,
      matrixes: state => state.matrix.matrixes
    }),
    ...mapGetters({
      getMatrixById: 'matrix/getMatrixById'
    }),
    isButtonDisabled() {
      return this.selected === '' || this.itemName === ''
    },
    matrixBlock() {
      return this.getMatrixById(this.matrixId)?.blocks
    }
  }
};
</script>
<style lang="scss" scoped>
.matrix {
  width: 100%;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0px;

    padding: 5px;

    background-color: #3d3d3d;
    background-color: transparent;
  }

  &__block {
    min-height: 200px;
    padding: 15px;

    color: #fff;
    font-weight: 700;

    &:nth-child(1) {
      background-color: #ef9d34;
    }

    &:nth-child(2) {
      background-color: #e7a285;
    }

    &:nth-child(3) {
      background-color: #ceb1bf;
    }

    &:nth-child(4) {
      background-color: #aec5d3;
    }
  }
}

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