<template>
    <div>
        <cmtbox :id="$route.params.id"></cmtbox>
    </div>
</template>
<script>
import cmtbox from '../subcomponent/comment.vue'
export default {
    name: 'goodscomment',
    components:{
        cmtbox
    }
}
</script>
<style scoped>

</style>
