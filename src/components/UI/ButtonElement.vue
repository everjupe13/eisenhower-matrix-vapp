<template >
    <button class="btn">
        <span class="btn__body">
            <slot name="default" />
        </span>
    </button>
</template>

<script>
export default {
    name: 'button-element'
}
</script>

<style lang="scss">
.btn {
    display: flex;
    justify-content: center;
    align-content: center;

    min-width: 100px;
    height: 30px;
    padding: 5px 10px;
    border: 1px solid var(--border-color);
    border-radius: 3px;

    background-color: transparent;

    text-align: center;
    color: var(--text-black);
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;

    transition: .2s all ease-in-out;

    cursor: pointer;

    a {
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
        text-decoration: inherit;
    }

    &__body {
        display: flex;
        align-content: center;
        justify-content: center;
        align-self: center;
    }

    &:hover,
    &:active,
    &:focus {
        color: #fff;
        background-color: var(--accent-color);
        border: 1px solid var(--accent-color);
    }
}
</style>