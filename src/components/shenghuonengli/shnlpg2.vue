<template>
    <div id="shnlpg2">
        <el-header><b>生活能力评估定量表</b></el-header>
        <div class="divD">
            姓名:{{bingrenxinxis.xm}}&nbsp;&nbsp;
            性别:{{bingrenxinxis.xb}}&nbsp;&nbsp;
            年龄:{{bingrenxinxis.nl}}&nbsp;&nbsp;
            诊断:{{bingrenxinxis.zd}}&nbsp;&nbsp;
            床号:{{bingrenxinxis.ch}}&nbsp;&nbsp;
            住院号:{{bingrenxinxis.zyhm}}&nbsp;&nbsp;
        </div>
        <div class="divD">
        <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                <el-form-item prop="currentRow.changed" label="评估类型" ></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.changed" label="1">出院</el-radio>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.changed" label="2">入院</el-radio>
                </div>
                <div style="border: 1px solid black;width: 200px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.changed" label="3">病情变化</el-radio>
                </div>
        </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;vertical-align: center">
                    项目
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    完全独立
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    需要部份帮助
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    需要极大帮助
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    完全依赖
                </div>
            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                    <el-form-item prop="currentRow.jc" label="进餐"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.jc" label="10" @change="gaibianfenshu()">10</el-radio>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.jc" label="5" @change="gaibianfenshu()">5</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.jc" label="0" @change="gaibianfenshu()">0</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.jc" label="-" @change="gaibianfenshu()">-</el-radio>
                </div>
            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                    <el-form-item prop="currentRow.xz" label="洗澡"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xz" label="5" @change="gaibianfenshu()">5</el-radio>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xz" label="0" @change="gaibianfenshu()">0</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xz" label="-" @change="gaibianfenshu()">-</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xz" label="-" @change="gaibianfenshu()">-</el-radio>
                </div>
            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                    <el-form-item prop="currentRow.xs" label="修饰"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xs" label="5">5</el-radio>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xs" label="0">0</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xs" label="-">-</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xs" label="-">-</el-radio>
                </div>
            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                    <el-form-item prop="currentRow.cy" label="穿衣"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.cy" label="10">10</el-radio>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.cy" label="5">5</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.cy" label="0">0</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.cy" label="-">-</el-radio>
                </div>
            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                    <el-form-item prop="currentRow.db" label="可控大便"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.db" label="10">10</el-radio>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.db" label="5">5</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.db" label="0">0</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.db" label="-">-</el-radio>
                </div>
            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                    <el-form-item prop="currentRow.xb" label="可控小便"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xb" label="10">10</el-radio>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xb" label="5">5</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xb" label="0">0</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.xb" label="-">-</el-radio>
                </div>
            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                    <el-form-item prop="currentRow.rc" label="如厕"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.rc" label="10">10</el-radio>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.rc" label="5">5</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.rc" label="0">0</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.rc" label="-">-</el-radio>
                </div>
            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                    <el-form-item prop="currentRow.newColumnD" label="床椅转移"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.newColumnD" label="15">15</el-radio>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.newColumnD" label="10">10</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.newColumnD" label="5">5</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.newColumnD" label="0">0</el-radio>
                </div>
            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                    <el-form-item prop="currentRow.pdxz" label="平地行走45米"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.pdxz" label="15">15</el-radio>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.pdxz" label="10">10</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.pdxz" label="5">5</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.pdxz" label="0">0</el-radio>
                </div>
            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                    <el-form-item prop="currentRow.newColumnE" label="上下楼梯"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.newColumnE" label="10">10</el-radio>
                </div>
                <div style="border: 1px solid black;width: 100px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.newColumnE" label="5">5</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.newColumnE" label="0">0</el-radio>
                </div>
                <div style="border: 1px solid black;width: 99px;height: 30px;display:inline-block">
                    <el-radio v-model="currentRow.newColumnE" label="-">-</el-radio>
                </div>
            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 504px;height: 30px;display:inline-block;float:left;">
                    <el-form-item prop="currentRow.newColumnC" label="总分"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 200px;height: 30px;display:inline-block">
                    <el-input v-model="currentRow.newColumnC" size="mini"></el-input>
                </div>

            </el-form>
        </div>
        <div class="divD">
            <el-form ref="form">
                <div style="border: 1px solid black;width: 300px;height: 30px;display:inline-block;float:left;">
                    <el-form-item label="护士及备注"></el-form-item>
                </div>
                <div style="border: 1px solid black;width: 202px;height: 30px;display:inline-block">
                    护士签名：<el-input v-model="currentRow.hsqm" size="mini" style="width: 100px"></el-input>
                </div>
                <div style="border: 1px solid black;width: 200px;height: 30px;display:inline-block">
                    签字日期：<el-input v-model="currentRow.hsqzrq" size="mini" style="width: 100px"></el-input>
                </div>
            </el-form>
        </div>

        <div id="anniu5" style='position: absolute;right:730px;bottom:100px;'>
            <el-button plain @click="fhshnlpg()">返回</el-button>
            <el-button plain @click="xgshnlpgxx()">保存</el-button>
            <el-button plain @click="xgwzhljld()">签章</el-button>
            <el-button plain @click="scwzhljlxx()">打印</el-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'shnlpg2',
        data() {
            return {
                //接收主页面传过来的病人id
                brID: '',
                //接收查询到的病人信息
                bingrenxinxis:{},
                //接收一级页面传过来的当前行的数据
                currentRow: {},
            }
        },
        created: function () {
            this.currentRow=this.$route.params.currentRow;
            console.log(this.currentRow);
            this.chaxunbingrenxinxi();
        },
        watch:{
            brID:{
                handler(newData,oldData){
                    console.log(oldData+"2_新值");
                    console.log(newData+"2_旧值");
                    if (newData != oldData) {
                        this.brID = newData;
                        this.fhshnlpg();
                    }
                }
            }
        },
        methods:{
            //意识障碍病人疼痛评估单-修改
            xgshnlpgxx() {
                axios
                    .put("http://127.0.0.1:8080/shnlpgController/xgshnlpgxx",this.currentRow)
                    .then((res)=>{
                        console.log(res.data);
                        if(res.data==3) {
                            alert("提示：更新数据成功");
                        }else if(res.data==2) {
                            alert("提示：更新数据失败");
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            //改变分数
            gaibianfenshu() {
                this.currentRow.newColumnC=Number(this.currentRow.jc)+Number(this.currentRow.xz);
            },
            //查询在院病人表信息
            chaxunbingrenxinxi: function () {
                axios
                    .get("http://127.0.0.1:8080/mcs_zaiyuanbingrenbiaoController/cxbr", {
                        params: {
                            brID: this.brID,
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        this.bingrenxinxis = res.data;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //返回一级页面
            fhshnlpg() {
                this.$router.push({
                    name: 'shnlpg',
                })
            },
        },
        props:['brID']
    }
</script>

<style>
    #shnlpg2{
        margin-left: 270px;
        height: 600px;
        width: 60%;
    }

</style>