<template>
    <div id="com" ref="page">
        <div id="header">
                <!--<comA></comA>-->
        </div>
            <div id="main">
                <!--病人树-->
                <div v-show="this.xianshi" style="border: 0px solid #ff0000;width: 235px;height: 100%;float: left">
                    <brs @chuancan="m2"></brs>
                </div>
                <div id="yi" style="height: 100%;border: 0px solid goldenrod;float: left">
                    <div id="y2" style="height: 45%;border: 0px solid goldenrod;width: 1px;">
                    </div>
                    <div style="height: 45%;border: 0px solid goldenrod;width: 1px;">
                        <el-button id="tupian" class="image" @click="kongzhixianshi()"></el-button>
                    </div>
                </div>
<!--                <div id="wzhl">-->
<!--                    <wzhljld></wzhljld>-->
<!--                </div>-->
                    <button @click="m5()">跳转</button>
                    <button @click="m1()">柱状图</button>
                    <button @click="m3()">折线图</button>
                    <button @click="m4()">饼状图</button>
                <router-view :brID="this.brID"></router-view>
            </div>
<!--        {{ this.$store.state.getKeshiID }}-->
<!--        {{ this.$store.getters.getKeshiID }}-->
    </div>
</template>

<script>
    // import comA from "@/components/list/comA.vue";
    import brs from "@/components/bingrenshu/brs.vue"
    import wzhljld from "@/components/weizhonghulijiludan/wzhljld.vue"
    export default {
        name: 'com',
        components:{
            // comA,
            brs,
            wzhljld,
        },
        data() {
            return {
                //控制病人树是否显示
                xianshi:false,
                //接收病人树传过来的参数
                brID:''
            }
        },
        methods:{
            m1(){
                this.$router.push({
                    name:"zhuzhuangtu"
                })
            },
            m3(){
                this.$router.push({
                    name:"zhexiantu"
                })
            },
            m4(){
                this.$router.push({
                    name:"bingzhuangtu"
                })
            },
            m5(){
                this.$router.push({
                    // name:"wzhljld",
                    // name:"yszabrttpgdA",
                    // name:"yhgl"
                    // name:"zhexiantu"
                    // name:"zhuzhuangtu"
                    // name:"ryhlpgjjkxj"
                    name:"shnlpg"
                })
            },
            //控制病人树是否显示
            kongzhixianshi:function () {
                if(this.xianshi==true) {
                    this.xianshi=false;
                }else {
                   this.xianshi=true;
                }
            },
            //声明病人树传过来的方法和参数
            m2:function (brID) {
                this.brID=brID;
            }
        },
        mounted(){
            this.$refs.page.style.height = window.innerHeight - 17 + "px";
        }
    }
</script>

<style>
    #com{
        margin-top: -8px;
        border: 1px solid rebeccapurple;
        width: 100%;
        height:650px;
        background-size: 100%;
    }
    #header{
        /*border: 1px solid greenyellow;*/
        width: 100%;
        height:60px;
        background-color: #58c7b8;
    }
    #main {
        /*border: 1px solid blue;*/
        width: 100%;
        height:588px;
    }
    #tupian{
        height:35px;
        border-style: none;
    }
    .image{
        background: url("../assets/right.gif") no-repeat;
        margin-top: 5px;
    }

</style>