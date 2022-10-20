<template>
    <div class="input-block" :style="this.$attrs.style">
        <label :for="this.$attrs.for" class="input-block__label">{{ labelText }}</label>
        <input :id="this.$attrs.id" class="input-block__input" type="text" :value="modelValue" @input="updateInput">
    </div>
</template>

<script>
export default {
    name: 'input-element',
    inheritAttrs: false,
    props: {
        labelText: {
            type: String,
            required: true
        },
        modelValue: {
            type: [String, Number],
            required: true,
        }
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value.trim())
        }
    }
}
</script>

<style lang="scss">
.input-block {
    &__label {
        display: block;
        width: 200px;
        
        font-size: 12px;
    }

    &__input {
        display: block;
        width: 100%;
        height: 30px;
        padding: 5px 10px;
        border: 1px solid var(--border-color);
        border-radius: 3px;

        &:hover,
        &:active,
        &:focus {
            border: 1px solid var(--accent-color);
        }
    }
}
</style>