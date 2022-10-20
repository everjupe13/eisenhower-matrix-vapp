<template>
    <div class="matrix-page">
        <container-element>
            <assembled-matrix-element :matrixId="+$route.params.matrixId || 0"></assembled-matrix-element>
        </container-element>
    </div>
</template>

<script>
import AssembledMatrixElement from '@/components/AssembledMatrixElement.vue'

export default {
    components: {
        AssembledMatrixElement
    }
}
</script>

<style lang="scss">
    
</style>