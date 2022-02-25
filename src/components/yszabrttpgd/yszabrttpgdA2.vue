<template>
    <div id="yszabrttpgdA2">
        <el-header><b>意识障碍病人疼痛评估单</b></el-header>

        <div id="ejym">
            姓名:<input v-model="bingrens.xm" style="width: 100px;height: 20px;border:none;border-bottom: 1px solid #000;outline: lavender;text-align: center">
            性别<input v-model="bingrens.xb" style="width: 100px;height: 20px;border:none;border-bottom: 1px solid #000;outline: lavender;text-align: center">
            年龄<input v-model="bingrens.nl" style="width: 100px;height: 20px;border:none;border-bottom: 1px solid #000;outline: lavender;text-align: center">
            住院号<input v-model="bingrens.zyhm" style="width: 100px;height: 20px;border:none;border-bottom: 1px solid #000;outline: lavender;text-align: center">
            出生日期<input v-model="bingrens.zyzt" style="width: 100px;height: 20px;border:none;border-bottom: 1px solid #000;outline: lavender;text-align: center">
            <p>
                面部表情&nbsp;&nbsp;&nbsp;
                <el-radio-group v-model="currentRow.mianbubiaoqing" @change="gaibianfenshu()">
                    <el-radio :label="2">痛苦、咬紧牙关(2分)</el-radio>
                    <el-radio :label="1">忧愁、皱眉(1分)</el-radio>
                    <el-radio :label="0">轻松自然(0分)</el-radio>
                </el-radio-group>
            </p>
            <p>
                肢体活动&nbsp;&nbsp;&nbsp;
                <el-radio-group v-model="currentRow.zhitihuodong" @change="gaibianfenshu()">
                    <el-radio :label="2">无法平静下来(2分)</el-radio>
                    <el-radio :label="1">偶尔不自主(1分)</el-radio>
                    <el-radio :label="0">自然放松(0分)</el-radio>
                </el-radio-group>
            </p>
            <p>
                发生/机械通气&nbsp;&nbsp;&nbsp;
                <el-radio-group v-model="currentRow.fashengjixietongqi" @change="gaibianfenshu()">
                    <el-radio :label="2">大声呻吟、哭泣/不能忍耐(2分)</el-radio>
                    <el-radio :label="1">偶尔呻吟/轻度抵抗(1分)</el-radio>
                    <el-radio :label="0">无异常声音，忍受良好(0分)</el-radio>
                </el-radio-group>
            </p>
            <p>
                心律血压&nbsp;&nbsp;&nbsp;
                <el-radio-group v-model="currentRow.xinlvxueya" @change="gaibianfenshu()">
                    <el-radio :label="2">升高>20%(2分)</el-radio>
                    <el-radio :label="1">升高10-20%(1分)</el-radio>
                    <el-radio :label="0">基础值(0分)</el-radio>
                </el-radio-group>
            </p>
            <p>
                肌肉张力&nbsp;&nbsp;&nbsp;
                <el-radio-group v-model="currentRow.jirouzhangli" @change="gaibianfenshu()">
                    <el-radio :label="2">僵硬(2分)</el-radio>
                    <el-radio :label="1">略为僵硬(1分)</el-radio>
                    <el-radio :label="0">放松(0分)</el-radio>
                </el-radio-group>
            </p>
            <p>得分<input v-model="currentRow.defen" style="width: 100px;height: 20px;border:none;border-bottom: 1px solid #000;outline: lavender;text-align: center"></p>
            <p><b>备注</b></p>
            <p>1.评估时间选择:</p>
            <p>①护士在病人入院当班完成初次评估</p>
            <p>②病人若疼痛为0分时每班评估一次;若疼痛为1-3分时每8小时评估一次;若疼痛>4分时每4小时评估一次:</p>
            <p>③图应用针剂止痛剂30分钟后评估</p>
            <p>2.评估心率血压时应排除病人因发热或血容量不足所致的数值升高</p>
            <p><b>评价结果与治疗建议</b></p>
            <p>疼痛级别<input type="text" v-model="currentRow.tengtongjibei" list="A1" style="width: 100px;height: 20px;border:none;border-bottom: 1px solid #000;outline: lavender;text-align: center"></p>
            <datalist id="A1">
                <option value="轻度疼痛"/>
                <option value="中度疼痛"/>
                <option value="重度疼痛"/>
            </datalist>

            <p>
                疼痛频率&nbsp;&nbsp;
                <el-radio-group v-model="currentRow.tengtongpinlv">
                    <el-radio :label="1">无规律</el-radio>
                    <el-radio :label="2">连续的</el-radio>
                    <el-radio :label="3">间断的</el-radio>
                    <el-radio :label="4">偶发的</el-radio>
                    <el-radio :label="5">多在白天</el-radio>
                    <el-radio :label="6">多在晚上</el-radio>
                </el-radio-group>
            </p>
            <p>药物治疗<input v-model="currentRow.yaowuzhiliao" style="width: 100px;height: 20px;border:none;border-bottom: 1px solid #000;outline: lavender;text-align: center"></p>
            <p>PCA阵痛泵<input v-model="currentRow.pcazhengtongbeng" style="width: 100px;height: 20px;border:none;border-bottom: 1px solid #000;outline: lavender;text-align: center"></p>
            <p>麻醉科会诊<input v-model="currentRow.mazuikehuizheng" style="width: 100px;height: 20px;border:none;border-bottom: 1px solid #000;outline: lavender;text-align: center"></p>
        </div>

        <div id="qianming" style='position: absolute;right:100px;bottom:30px;'>
            <el-button plain @click="fhyjye()">返回</el-button>
            <el-button plain @click="xgyszabrttpgdxx()">保存</el-button>
            <el-button plain @click="xgwzhljld()">签章</el-button>
            <el-button plain @click="scwzhljlxx()">打印</el-button>
        </div>
         </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: '',
        data() {
            return {
                mianbubiaoqing: 0,
                zhitihuodong: 0,
                fashengjixietongqi: 0,
                xinlvxueya: 0,
                jirouzhangli: 0,
                tengtongpinlv: 7,
                //接收一级页面传过来的病人id
                brID: '',
                //接收一级页面传过来的当前行的数据
                currentRow: {},
                //接收查询到的病人信息
                bingrens:{},
                //接收要修改的对象
                xgyszabrttpgd:{},
            }
        },
        created: function () {
            // this.brID=this.$route.params.brID;
            this.currentRow=this.$route.params.currentRow;
            console.log(this.currentRow);
            console.log(this.brID);
            this.chaxunbingrenxinxis();
        },
        watch:{
            brID:{
                handler(newData,oldData){
                    console.log(oldData+"2_新值");
                    console.log(newData+"2_旧值");
                    if (newData != oldData) {
                        this.brID = newData;
                        this.fhyjye();
                    }
                }
            }
        },
        methods:{
            //返回一级页面
            fhyjye() {
                this.$router.push({
                    name: 'yszabrttpgdA',
                    // params:{brID2: this.brID}
                })
            },
            //查询病人信息
            chaxunbingrenxinxis: function () {
                axios
                    .get("http://127.0.0.1:8080/mcs_zaiyuanbingrenbiaoController/cxbr", {
                        params: {
                            brID: this.brID,
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        this.bingrens = res.data;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //意识障碍病人疼痛评估单-修改
            xgyszabrttpgdxx() {
                axios
                .put("http://127.0.0.1:8080/yszabrttpgbACon/xgyszabrttpgdxx",this.currentRow)
                .then((res)=>{
                    console.log(res.data);
                    if(res.data==1) {
                        alert("提示：更新数据成功");
                    }else if(res.data==2) {
                        alert("提示：更新数据失败");
                    }else{
                        alert("提示：更新数据成功");
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
            },
            //改变分数
            gaibianfenshu() {
                // this.currentRow.defen=Number(this.mianbubiaoqing)+Number(this.zhitihuodong)+Number(this.fashengjixietongqi)+Number(this.xinlvxueya)+Number(this.jirouzhangli);

                if(this.mianbubiaoqing==null) {
                    this.currentRow.defen=0+this.zhitihuodong+this.fashengjixietongqi+this.xinlvxueya+this.jirouzhangli;
                }
                else {
                    this.mianbubiaoqing=this.currentRow.mianbubiaoqing;
                    this.zhitihuodong='';
                    this.fashengjixietongqi='';
                    this.xinlvxueya='';
                    this.jirouzhangli='';
                    this.currentRow.defen=this.mianbubiaoqing+this.zhitihuodong+this.fashengjixietongqi+this.xinlvxueya+this.jirouzhangli;
                }
                if(this.zhitihuodong==null) {
                    this.currentRow.defen=this.mianbubiaoqing+0+this.fashengjixietongqi+this.xinlvxueya+this.jirouzhangli;
                }
                else {
                    this.mianbubiaoqing=this.currentRow.mianbubiaoqing;
                    this.zhitihuodong=this.currentRow.zhitihuodong;
                    this.fashengjixietongqi='';
                    this.xinlvxueya='';
                    this.jirouzhangli='';
                    this.currentRow.defen=this.mianbubiaoqing+this.zhitihuodong+this.fashengjixietongqi+this.xinlvxueya+this.jirouzhangli;
                }
                if(this.fashengjixietongqi==null) {
                    this.currentRow.defen=this.mianbubiaoqing+this.zhitihuodong+0+this.xinlvxueya+this.jirouzhangli;
                }
                else {
                    this.mianbubiaoqing=this.currentRow.mianbubiaoqing;
                    this.zhitihuodong=this.currentRow.zhitihuodong;
                    this.fashengjixietongqi=this.currentRow.fashengjixietongqi;
                    this.xinlvxueya='';
                    this.jirouzhangli='';
                    this.currentRow.defen=this.mianbubiaoqing+this.zhitihuodong+this.fashengjixietongqi+this.xinlvxueya+this.jirouzhangli;
                }
                if(this.xinlvxueya==null) {
                    this.currentRow.defen=this.mianbubiaoqing+this.zhitihuodong+this.fashengjixietongqi+0+this.jirouzhangli;
                }
                else {
                    this.mianbubiaoqing=this.currentRow.mianbubiaoqing;
                    this.zhitihuodong=this.currentRow.zhitihuodong;
                    this.fashengjixietongqi=this.currentRow.fashengjixietongqi;
                    this.xinlvxueya=this.currentRow.xinlvxueya;
                    this.jirouzhangli='';
                    this.currentRow.defen=this.mianbubiaoqing+this.zhitihuodong+this.fashengjixietongqi+this.xinlvxueya+this.jirouzhangli;
                }
                if(this.jirouzhangli==null) {
                    this.currentRow.defen=this.mianbubiaoqing+this.zhitihuodong+this.fashengjixietongqi+this.xinlvxueya+0;
                }else {
                    this.mianbubiaoqing=this.currentRow.mianbubiaoqing;
                    this.zhitihuodong=this.currentRow.zhitihuodong;
                    this.fashengjixietongqi=this.currentRow.fashengjixietongqi;
                    this.xinlvxueya=this.currentRow.xinlvxueya;
                    this.jirouzhangli=this.currentRow.jirouzhangli;
                    this.currentRow.defen=this.mianbubiaoqing+this.zhitihuodong+this.fashengjixietongqi+this.xinlvxueya+this.jirouzhangli;
                }
            }
        },
        props: ['brID']

    }
</script>

<style>
    #yszabrttpgdA2{
        margin-left: 270px;
        height: 600px;
        width: 80%;
    }
    #ejym{
        overflow: auto;
        margin-left: 190px;
        height: 500px;
        width: 80%;
    }
</style>