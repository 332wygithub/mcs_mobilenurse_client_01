<template>
    <div id="brs">
            <div id="shang">
                <el-row>
                    <el-select v-model="ksmc" placeholder="请选择" class="xiala">
                        <el-option value="keshiID" label="产科"></el-option>
                    </el-select>
                    &nbsp;
                    <el-button round class="min">同步</el-button>
                </el-row>

                <el-row>
                    <el-select @change="changeNeiRong" v-model="lists" placeholder="在院病人" class="xiala2">
                        <el-option
                                v-for="item in zaiyuan"
                                :key="item.key"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    &nbsp;<!--病人详情-->
                    <el-popover
                            placement="right"
                            width="200"
                            trigger="click">
                            病人床号：<el-input v-model="bingrens.ch"  style="width: 120px"></el-input><br>
                            病人姓名：<el-input v-model="bingrens.xm"  style="width: 120px"></el-input><br>
                            住院号码：<el-input v-model="bingrens.zyhm"  style="width: 120px"></el-input><br>
                            病人性别：<el-input v-model="bingrens.xb"  style="width: 120px"></el-input><br>
                            护理级别：<el-input v-model="bingrens.hldj"  style="width: 120px"></el-input><br>
                            交费费别：<el-input v-model="bingrens.fb"  style="width: 120px"></el-input><br>
                            主治医生：<el-input v-model="bingrens.zzys"  style="width: 120px"></el-input><br>
                            医生诊断：<el-input v-model="bingrens.zd"  style="width: 120px"></el-input><br>
                            责任护士：<el-input v-model="bingrens.zrhs"  style="width: 120px"></el-input><br>
                        <el-button slot="reference" @click="xianshixiangqing" round class="min">详情</el-button>
                    </el-popover>
                </el-row>
            </div>
            <!--中-->
            <div id="zhong">
                <!--在院病人-->
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <img src="@/assets/folder_Open.gif"/>
                            <span>{{lists}}</span>
                        </template>
                            <el-menu-item @click="bingrenxinxi(br.brID)" style="height: 35px" :index="''+br.brID+''" v-for="br in listbrs">
                              <img src="@/assets/zauyuan.gif"/>
                              [{{br.ch}}]{{br.xm}}
                            </el-menu-item>
                    </el-submenu>
                </el-menu>
                <!--出院病人-->
                <el-menu
                        v-show="this.yinchang"
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-submenu index="2">
                        <template slot="title">
                            <img src="@/assets/folder_Open.gif"/>
                            <span>出院病人</span>
                        </template>
                        <el-menu-item @click="bingrenxinxi(chuyuanbingren.brID)" style="height: 35px" index="''+chuyuanbingren.brID+''">
                            <img src="@/assets/zauyuan.gif"/>
                                [{{chuyuanbingren.ch}}]{{chuyuanbingren.xm}}
                            </el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
            <!--下-->
            <div id="xia">
                <div style="margin-top: -13px;margin-left: 15px">
                    <h5>按照条件查询患者:</h5>
                </div>
                <div style="margin-top: -10px">
                    <el-input id="sousuo" class="sou" v-model="zyhmandxm" placeholder="住院号/姓名"></el-input>
                    &nbsp;
                    <el-button class="min" @click="sszyOrcybr()">查询</el-button>
                </div>
            </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'brs',
        data() {
            return {
                //控制出院病人是否显示
                yinchang:false,
                //查询病人详情的条件
                brID:'',
                //定义接收查询病人详情的对象
                bingrens:{},
                //在院病人
                xialakuang:'',
                //接收后台传过来的病人树集合
                listbrs:[],
                //接收登录传过来的keshiID
                keshiID:this.$route.params.keshiID,
                //科室名称
                ksxx:{},
                ksmc:'产科',
                //定义变量绑定第二个下拉框的值
                lists:'在院病人',
                //静态下拉框固定值
                zaiyuan:[{value: '在院病人', label: '在院病人'},{value: '近一周出院病人', label: '近一周出院病人'},{value: '特级护理', label: '特级护理'},{
                    value: '一级护理', label: '一级护理'},{value: '二级护理', label: '二级护理'},{value: '三级护理', label: '三级护理'},{value: '新入院患者',
                    label: '新入院患者'},{value: '2024', label: '责任护士'}],
                //定义一个变量用来接收搜索在院和出院病人的条件
                zyhmandxm:'',
                //定义接收出院病人的对象
                chuyuanbingren:{},
            }
            },
        created:function () {
            this.cxksmc();
            // this.changeNeiRong();
        },

        methods: {
            //病人详情
            bingrenxinxi:function (brID) {
                this.brID=brID;
                console.log(this.brID);
                this.$emit("chuancan",this.brID);
            },
            changeNeiRong:function (val) {
                this.lists=val;
                console.log(val);
                this.handleSelect();
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            //查询科室名称
            cxksmc:function (){
                axios
                    .get("http://127.0.0.1:8080/ksCon/cxksmc",{params:{ksID:this.keshiID}})
                    .then((res)=>{
                        console.log(res.data);
                        this.ksxx=res.data;
                        this.ksmc=res.data.ksmc;
                        console.log(this.ksmc);
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            },
            //查询病人
            handleSelect:function () {
                axios
                    .get("http://127.0.0.1:8080/mcs_zaiyuanbingrenbiaoController/cxzybr",{
                        params:{
                            ksid:this.keshiID,
                            xialakuang:this.lists,
                        }
                    })
                    .then((res)=>{
                        console.log(res.data);
                        this.listbrs=res.data;
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            //查询详情信息
            xianshixiangqing:function () {
                // this.sszyOrcybr();
                axios
                    .get("http://127.0.0.1:8080/mcs_zaiyuanbingrenbiaoController/cxbr",{
                        params:{
                            brID:this.brID,
                        }
                    })
                    .then((res)=>{
                        console.log(res.data);
                        this.bingrens=res.data;
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            //搜索在院和出院病人
            sszyOrcybr:function () {
                //点击查询，显示出院病人
                this.yinchang=true;
                axios
                    .get("http://127.0.0.1:8080/mcs_zaiyuanbingrenbiaoController/sszyOrcybr",{
                        params:{
                            zyhm:this.zyhmandxm,
                            xm:this.zyhmandxm,
                        }
                    })
                    .then((res)=>{
                        console.log(res.data)
                        this.chuyuanbingren=res.data;
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            }
        }
    }
</script>

<style>
    #brs{
        border-right: 1px dashed darkgray;
        margin-top: 0px;
        margin-left: 0px;
        height: 645px;
        width: 235px;
    }
    #shang{
        border-bottom: 1px dashed darkgray;
        height: 120px;
        width: 100%;
    }
    .xiala{
        margin-left: 13px;
        margin-bottom: 5px;
        margin-top: 10px;
        width: 120px;
    }
    .xiala2{
        margin-left: 13px;
        margin-bottom: 5px;
        margin-top: 10px;
        width: 120px;
    }
    #zhong{
        height: 420px;
        width: 100%;
    }
    #xia{
        border-top: 1px dashed darkgray;
        height: 50px;
    }
    .sou{
        margin-left: 13px;
        margin-top: 0px;
        width: 120px;
    }
    .inp{
        margin-left: 10px;
    }
</style>