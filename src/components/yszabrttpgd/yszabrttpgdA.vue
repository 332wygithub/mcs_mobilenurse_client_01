<template>
    <div id="yszabrttpgdA">
        <el-header><b>意识障碍病人疼痛评估单</b></el-header>
        <div class="divD">
            姓名:{{bingrenxinxis.xm}}&nbsp;&nbsp;
            性别:{{bingrenxinxis.xb}}&nbsp;&nbsp;
            年龄:{{bingrenxinxis.nl}}&nbsp;&nbsp;
            诊断:{{bingrenxinxis.zd}}&nbsp;&nbsp;
            床号:{{bingrenxinxis.ch}}&nbsp;&nbsp;
            住院号:{{bingrenxinxis.zyhm}}&nbsp;&nbsp;
        </div>

        <el-table :data="listyszabr" @row-dblclick="tzdejym" border style="width: 100%" highlight-current-row @current-change="handleCurrentChange">
            <el-table-column prop="xiangmu" label="表单名称" width="303"></el-table-column>
            <el-table-column prop="defen" label="评估总分" width="303"></el-table-column>
            <el-table-column prop="riqi" label="创建时间" width="304"></el-table-column>
            <el-table-column prop="createpeople" label="护士签名" width="304"></el-table-column>
        </el-table>
        <div id="anniuss" style='position: absolute;right:100px;bottom:50px;'>
            <el-button plain @click="xjyszabrttpgdxx()" >新建</el-button>
            <el-button plain @click="scyszabrttpgdxx()">删除</el-button>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'yszabrttpgdA',
        data() {
            return {
                //接收主页面传过来的病人id
                brID: '',
                //接受查询到的集合
                listyszabr:[],
                //接收查询到的病人信息
                bingrenxinxis:{},
                //删除数据的sysID
                sysID:"",
                //当前行的数据
                currentRow: {},
                brID2:'',
            }
        },
        created: function () {
            // this.brID2=this.$route.params.brID2;
            // this.cxyszabrttpgdxx2();
            // this.chaxunbingrenxinxi2();
            this.chaxunbingrenxinxi();
            this.cxyszabrttpgdxx();
        },
        watch:{
            brID:{
                handler(newobj,oldobj){
                    console.log(oldobj+"_新值");
                    console.log(newobj+"_旧值");
                    if (newobj != oldobj) {
                        this.brID = newobj;
                        this.chaxunbingrenxinxi();
                    }
                }
            }
        },
        methods:{
            //查询病人信息
            chaxunbingrenxinxi: function () {
                this.cxyszabrttpgdxx();
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
            //查询病人信息-返回
            chaxunbingrenxinxi2: function () {
                this.cxyszabrttpgdxx2();
                axios
                    .get("http://127.0.0.1:8080/mcs_zaiyuanbingrenbiaoController/cxbr", {
                        params: {
                            brID: this.brID2,
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

            //意识障碍病人疼痛评估单-新建
            xjyszabrttpgdxx() {
                axios
                    .post("http://127.0.0.1:8080/yszabrttpgbACon/xjyszabrttpgdxx",this.brID)
                    .then((res) => {
                        console.log(res.data);
                        this.cxyszabrttpgdxx();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //意识障碍病人疼痛评估单-查询
            cxyszabrttpgdxx() {
                axios
                    .get("http://127.0.0.1:8080/yszabrttpgbACon/cxyszabrttpgdxx", {
                        params: {
                            brID: this.brID,
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        this.listyszabr = res.data;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //意识障碍病人疼痛评估单-查询-返回
            cxyszabrttpgdxx2() {
                axios
                    .get("http://127.0.0.1:8080/yszabrttpgbACon/cxyszabrttpgdxx", {
                        params: {
                            brID: this.brID2,
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        this.listyszabr = res.data;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //当前行的数据赋值
            handleCurrentChange(val) {
                this.currentRow = val;
                this.sysID=val.sysID;
                console.log(this.sysID);
            },
            //意识障碍病人疼痛评估单-删除
            scyszabrttpgdxx() {
                if (this.currentRow=JSON.stringify(this.currentRow) == "{}") {
                    alert("提示：请选择要删除得数据");
                } else {
                    if (confirm("提示：确定删除吗")) {
                        axios
                            .delete("http://127.0.0.1:8080/yszabrttpgbACon/scyszabrttpgdxx", {params: {sysID:this.sysID}})
                            .then((res) => {
                                console.log(res.data);
                                if (res.data != 0) {
                                    alert("提示：删除数据成功");
                                    // this.sysID=undefined;
                                    // this.currentRow=JSON.stringify(this.currentRow) == "{}"
                                    // this.currentRow="{}";
                                    this.cxyszabrttpgdxx();
                                }else {
                                    alert("提示：删除失败")
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                }
            },
            //跳转到二级页面
            tzdejym() {
                    this.$router.push({
                        name: 'yszabrttpgdA2',
                        params:{currentRow:this.currentRow}
                    })
            }
        },
        props: ['brID']
    }
</script>

<style>
    #yszabrttpgdA{
        margin-left: 270px;
        height: 600px;
        width: 80%;
    }
    #anniuss{
        position: fixed;
        bottom: 50px;
    }

</style>