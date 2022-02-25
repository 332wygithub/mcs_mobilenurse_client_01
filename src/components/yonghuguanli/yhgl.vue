<template>
    <div id="yhgl">
        <el-header>用户账户管理</el-header>
        <div id="yhgl2">
            <el-table ref="singleTable" :data="list" border height="300px" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
                <el-table-column label="序号" type="index" width="50"></el-table-column>
                <el-table-column property="yhId" label="工号" width="120"></el-table-column>
                <el-table-column property="yhmz" label="姓名" width="120"></el-table-column>
                <el-table-column property="mcs_ks.ksmc" label="科室" width="120"></el-table-column>
                <el-table-column property="mcs_yhks.zw" label="职务" width="120"></el-table-column>
                <el-table-column property="sfzh" label="身份证号" width="133"></el-table-column>
            </el-table>
        <div id="btu">
            <el-button @click="scsj(currentRow.mcs_yhks.sysID)" type="danger" slot="reference" style="float: right">删除</el-button>
            <el-button @click="xgsj()" type="warning" slot="reference" style="float: right">修改</el-button>
            <el-button @click="tjsj()" type="success" slot="reference" style="float: right">添加</el-button>
        </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'yhgl',
        data() {
            return {
                //修改或添加的对象
                currentRow: null,
                //定义接收查询到的数据得集合
                list: [],
                //定义删除数据的参数
                sysID: '',
            }
        },
        created: function () {
            this.cxByYhid();
        },
        methods: {
            //查询用户管理一览页面信息
            cxByYhid: function () {
                axios
                    .get("http://127.0.0.1:8080/yhCon/cxByYhid")
                    .then((res) => {
                        console.log(res.data);
                        this.list = res.data;
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            handleCurrentChange(val) {
                this.currentRow = val
            },
            //点击添加跳转添加页面
            tjsj() {
                this.$router.push({
                    name: 'tianjia',
                    // params:{currentRow: '1'}
                })
            },
            //点击修改跳转修改页面
            xgsj: function () {
                if (this.currentRow == null) {
                    alert("提示：请选择要修改的数据")
                } else {
                    this.$router.push({
                        name: 'tj',
                        params: {currentRow: this.currentRow}
                    })
                }
            },
            //删除信息
            scsj: function (sysID) {
                // this.sysID = sysID;
                // if (this.currentRow == undefined) {
                //     alert("提示：请选择要修改的数据")
                // } else {
                    if (confirm("提示：确定删除吗")) {
                        axios
                            .delete("http://127.0.0.1:8080/yhksCon/scyhksxx", {params: {sysID:sysID}})
                            .then((res) => {
                                console.log(res.data);
                                if (res.data != 0) {
                                    alert("提示：删除数据成功");
                                    // this.currentRow=undefined;
                                    this.cxByYhid();
                                } else {
                                    alert("提示：删除失败")
                                }
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                    // }
                // }
            }
        }
    }
</script>

<style>
    #yhgl2{
        margin-left: 500px;
        height: 450px;
        width: 43.8%;
    }
    #btu{
        position: fixed;
        right: 25%;
        top:80%
    }
    .el-header{
        text-align: center;
        line-height: 60px;
    }
</style>