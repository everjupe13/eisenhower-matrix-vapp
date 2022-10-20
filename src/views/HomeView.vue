<template>
    <div class="home">
        <container-element>
            <div class="home__body">
                <matrix-list></matrix-list>
            </div>
        </container-element>
    </div>
</template>

<script>
import MatrixList from '@/components/MatrixList.vue'

export default {
    name: "HomeView",
    components: {
        MatrixList
    },
}
</script>

<style lang="scss">

</style>
