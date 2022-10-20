<template>
  <div class="matrix-item">
    <div class="matrix-item__fix"></div>
    <div class="matrix-item__body">{{ data.value }}</div>
    <div class="matrix-item__btn-block">
      <button
        class="matrix-item__btn"
        @click="this.$emit('remove', data.id, blockId)"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "matrix-item",
  props: {
    data: Object,
    blockId: Number,
  },
};
</script>

<style lang="scss" scoped>
.matrix-item {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 30px;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }

  &__body {
    flex-grow: 1;

    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }

  &__btn-block,
  &__fix {
    flex-basis: 40px;
  }

  &__btn-block {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3px;
    border: 1px solid #fff;
    background-color: transparent;
    border-radius: 2px;

    width: 40px;
    height: 20px;

    color: #fff;

    user-select: none;
    cursor: pointer;

    font-size: 16px;
    transition: 0.3s all ease-in-out;

    &:hover,
    &focus,
    &:active {
      background-color: #fff;

      color: #000;
    }
  }
}
</style>