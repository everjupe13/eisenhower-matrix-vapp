<template>
  <select v-model="modelValue" @change="changeOption" class="select">
    <option disabled value="">Срочность...</option>
    <option v-for="option in options" :key="option.id" :value="option.id">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'select-element',
  props: {
    modelValue: {
      type: [Number, String]
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  height: 30px;
  padding: 0 5px;
  border: 1px solid var(--border-color);
  border-radius: 3px;

  font-size: 12px;
  color: var(--text-black);
  font-size: 12px;
  font-weight: 400;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid var(--accent-color);
  }
}
</style>
