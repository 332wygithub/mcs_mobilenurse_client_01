<template>
    <div id="zhuDiv" ref="page">
        <router-view></router-view>

    </div>
</template>

<script>
    import mcs_yh from '../components/denglu/mcs_yh.vue'
    export default {
        name: 'zhuDiv',
        data() {
            return {
            }
        },
        components:{
            mcs_yh,
        },
        //自适应
        mounted(){
            this.$refs.page.style.height = window.innerHeight - 17 + "px";
        },
    }
</script>

<style>
    #zhuDiv{
        border: none;
        width: 100%;
        height: 100%;
        background-size: 100%;
    }
</style>