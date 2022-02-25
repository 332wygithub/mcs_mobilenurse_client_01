<template>
    <div id="shnlpg">
        <el-header><b>生活能力评估定量表</b></el-header>
        <div class="divD">
            姓名:{{bingrenxinxis.xm}}&nbsp;&nbsp;
            性别:{{bingrenxinxis.xb}}&nbsp;&nbsp;
            年龄:{{bingrenxinxis.nl}}&nbsp;&nbsp;
            诊断:{{bingrenxinxis.zd}}&nbsp;&nbsp;
            床号:{{bingrenxinxis.ch}}&nbsp;&nbsp;
            住院号:{{bingrenxinxis.zyhm}}&nbsp;&nbsp;
        </div>

        <el-table :data="listyszabr" @row-dblclick="tzdejym" highlight-current-row @current-change="handleCurrentChange" height="500px" border style="width: 100%">
            <el-table-column type="index" :index="indexMethod" label="序号" width="225"></el-table-column>
            <el-table-column prop="ksname" label="科室名称" width="225"></el-table-column>
            <el-table-column prop="patientName" label="姓名" width="225"></el-table-column>
            <el-table-column prop="nurseName" label="评估人" width="225"></el-table-column>
            <el-table-column prop="createDate" label="创建时间" width="225"></el-table-column>
            <el-table-column prop="hsqm" label="创建人" width="225"></el-table-column>
        </el-table>
        <div id="anniuss" style='position: absolute;right:100px;bottom:50px;'>
            <el-button plain @click="xjyszabrttpgdxx()" >新建</el-button>
            <el-button plain @click="scshnlpgxx()">删除</el-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'shnlpg',
        data() {
            return {
                //接收查询到的病人信息
                bingrenxinxis:{},
                ksname:'',
                patientName:'',
                ksid:'',
                patientBedNO:'',
                patientSex:'',
                //接收主页面传过来的病人id
                brID: '',
                //接受查询到的集合
                listyszabr:[],
                //获取当前行数据
                currentRow:{},
                //删除需要的sysID
                sysID: '',
            }
        },
        created: function () {
            this.chaxunbingrenxinxi();
            this.cxyszabrttpgdxx();
            this.$watch("brID", (newValue, oldValue) => {
                console.log(newValue + "_新值");
                console.log(oldValue + "_旧值");
                if (newValue != oldValue) {
                    this.brID = newValue;
                    this.chaxunbingrenxinxi();
                    this.cxyszabrttpgdxx();
                }
            });
        },
        methods:{
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
                        this.ksname=res.data.ksmc;
                        this.patientName=res.data.xm;
                        this.ksid=res.data.ksid;
                        this.patientBedNO=res.data.ch;
                        this.patientSex=res.data.xb;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //生活能力评估单-查询
            cxyszabrttpgdxx() {
                axios
                    .get("http://127.0.0.1:8080/shnlpgController/cxshnlpgxx", {
                        params: {
                            brID: this.brID,
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        this.listyszabr = res.data;
                        if(res.data=='') {
                            this.chaxunbingrenxinxi();
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //新建
            xjyszabrttpgdxx() {
                this.cxyszabrttpgdxx();
                axios
                    .post("http://127.0.0.1:8080/shnlpgController/xjshnlpgxx",
                        {
                            brID:this.brID,
                            ksname:this.ksname,
                            patientName:this.patientName,
                            ksid:this.ksid,
                            patientBedNO:this.patientBedNO,
                            patientSex:this.patientSex,
                        })
                    .then((res) => {
                        console.log(res.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //获取当前行数据
            handleCurrentChange(val) {
                this.currentRow=val;
                this.sysID=val.sysID;
                console.log(this.sysID);
            },
            //删除
            scshnlpgxx() {
                console.log(this.sysID);
                if(this.sysID=='') {
                    alert("提示：请选择要删除的数据");
                }else {
                    if(confirm("提示：确定删除吗")) {
                        axios
                            .delete("http://127.0.0.1:8080/shnlpgController/scshnlpgxx",{params:{sysID:this.sysID}})
                            .then((res) => {
                                console.log(res.data);
                                if(res.data!=0) {
                                    alert("提示：删除数据成功");
                                    this.cxyszabrttpgdxx();
                                    this.sysID='';
                                }else {
                                    alert("提示：删除数据失败");
                                }
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    }
                }
            },
            //双击跳转到二级页面
            tzdejym() {
                this.$router.push({
                    name: 'shnlpg2',
                    params:{currentRow:this.currentRow}
                })
            },
            //序号
            indexMethod(index) {
                return index + 1;
            }
        },
        props:['brID']
    }
</script>

<style>
    #shnlpg{
        margin-left: 270px;
        height: 600px;
        width: 80%;
    }
    #anniuss{
        position: fixed;
        bottom: 50px;
    }

</style>