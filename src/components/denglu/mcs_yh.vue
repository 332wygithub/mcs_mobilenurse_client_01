<template>
    <div id="imga" ref="page">
        <div id="a">
            <div id="mcs_yh">
                <el-input placeholder="请输入账号" v-model="yhId" clearable></el-input><br>
                <el-input placeholder="请输入密码" v-model="mm" show-password></el-input><br>
                <el-button type="button" @click="cxByYhidAndMm">登录</el-button>
                <el-button type="button">注册</el-button>
            </div>
        </div>
    </div>
</template>
<script>
//导入axios
import axios from 'axios'
    export default {
        name: 'mcs_yh',
        data() {
            return {
                yhId:'',
                mm:'',
                keshiID:'',
                cjgly:''
            }
        },
        methods:{
            cxByYhidAndMm:function (){
                axios
                    .get("http://127.0.0.1:8080/yhCon/getyh",
                     {params:{
                             yhId:this.yhId,
                             mm:this.mm,
                     }})
                    .then((res)=>{
                        console.log(res.data);
                        if(res.data!="") {
                            //科室id
                            this.keshiID=res.data.mcs_yhks.keshiID;
                            // this.k
                            this.cjgly=res.data.cjgly;
                            this.yhId=res.data.yhId;
                            alert("登录成功");
                            this.$router.push({
                                name:'com',
                                //携带参数科室id
                                params:{keshiID:this.keshiID,cjgly:this.cjgly,yhId:this.yhId}
                            })
                        }else{
                            alert("请输入账号和密码")
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            }
        },
        mounted(){
            this.$refs.page.style.height = window.innerHeight - 17 + "px";
        }
    }
</script>

<style>
    #imga{
        width: 100%;
        height: 100%;
        border: none;
        background-size: 100%;
    }
    #a{
        height: 100%;
        width: 100%;
        background: url(../../assets/loginImg.png) no-repeat center center;
        background-size: 100%;
    }
    #mcs_yh{
        position: fixed;
        top:60%;
        left: 65%;
        border: none;
        width: 150px;
        height: 50px;
    }
</style>