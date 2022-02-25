<template>
    <div id="tsqkjl">
        <el-dialog
                class="dialog_Class"
                :title="headTitle"
                :visible.sync="showOrHideDialogPar"
                :modal="false"
                :close-on-click-modal="false"
                :before-close="SetshowOrHideDialogPar">
            <!--
                默认显示界面
            -->
            <div class="table_div" v-show="tableDivShowOrHidePar">
                <div class="middle_divOne">
                    <el-table
                            :data="gridData"
                            border
                            stripe
                            fit
                            height="250"
                    >
                        <el-table-column property="date" label="标题" width="150"></el-table-column>
                        <el-table-column property="name" label="内容" width="380"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <br>
                                <br>
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="middle_divTwo">
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 2}"
                            placeholder="请输入内容"
                            maxlength="300"
                            show-word-limit
                            v-model="tableDivTextarea">
                    </el-input>
                </div>
            </div>
            <!--
                点击编辑后显示页面
            -->
            <div class="edit_div" v-show="eidtDivShowOrHidePar">
                <div class="edit_div_left">
                    <div class="edit_div_span">标题</div>
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 11, maxRows: 11}"
                            placeholder="请输入内容"
                            maxlength="300"
                            show-word-limit
                            v-model="editDivObj.editTitle">
                    </el-input>
                </div>
                <div class="edit_div_right">
                    <div class="edit_div_span">内容</div>
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 11, maxRows: 11}"
                            placeholder="请输入内容"
                            maxlength="300"
                            show-word-limit
                            v-model="editDivObj.editContent">
                    </el-input>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
<!--
	编辑页面显示按钮
-->
				<el-button v-show="eidtDivShowOrHidePar" @click="setShowTableDiv">返 回</el-button>
			    <el-button v-show="eidtDivShowOrHidePar" type="primary" @click="save_data">保 存</el-button>
                <!--
                    默认页面显示按钮
                -->
				<el-button v-show="tableDivShowOrHidePar" @click="SetshowOrHideDialogPar">取 消</el-button>
			    <el-button v-show="tableDivShowOrHidePar" type="primary" @click="submit_data">确 定</el-button>
			</span>
        </el-dialog>
    </div>
</template>

<script>
    // 导入   日期时间工具JS
    // import {getNowDateAndTime} from '@/utils/commonality_Js/NowDateUtil.js';
    export default {
        name: 'tsqkjl',
        data() {
            return {
                msg: '特殊情况记录    子组件',
                // 根据调用处显示不同的title
                headTitle:'',
                // 控制默认div或编辑div显示隐藏参数
                tableDivShowOrHidePar:true,
                eidtDivShowOrHidePar:false,
                // 默认显示页面操作textarea
                tableDivTextarea:'',
                // 编辑页面操作对象
                editDivObj:{
                    editTitle:'标题',
                    editContent:'内容',
                },
                gridData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }
                    ,{
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }
                    ,{
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }
                    ,{
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }
                    ,{
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }
                    ,{
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }
                ]
            };
        },
        props:['showOrHideDialogPar','currentComponentFlag'],
        methods: {
            // 组件加载后根据调用处的参数，设置弹窗title
            setDialogTitle:function (){
                if(this.currentComponentFlag == 'HuLiJiLuDan'){
                    // 获取当前日期时间
                    let nowDate = getNowDateAndTime();
                    // 设置弹窗title显示信息
                    this.headTitle = "特殊情况记录 — " + nowDate;
                }
            },
            // 点击确定、取消、X关闭弹窗方法，同时设置编辑div与默认显示div，显示隐藏参数
            SetshowOrHideDialogPar(){
                // 设置编辑div与默认显示div，显示隐藏参数
                this.tableDivShowOrHidePar = true;
                this.eidtDivShowOrHidePar = false;
                // 设置弹窗关闭
                this.showOrHideDialogPar = false;
                // 将控制弹窗参数发送给父组件
                this.$emit("sendParentDialogPar",this.showOrHideDialogPar);
            },
            // 点击编辑事件 ，点击编辑 ，显示编辑div，隐藏默认显示div
            handleEdit(index, row) {
                console.log("点击编辑事件");
                this.tableDivShowOrHidePar = false;
                this.eidtDivShowOrHidePar = true;
            },
            // 点击删除事件，删除被选中的数据
            handleDelete(index, row) {
                console.log("点击删除事件");
            },
            // 返回事件，点击返回显示 ，默认显示div，隐藏编辑div
            setShowTableDiv(){
                this.tableDivShowOrHidePar = true;
                this.eidtDivShowOrHidePar = false;
            },
            // 保存编辑界面的数据
            save_data(){
                console.log("保存编辑界面的数据");
            },
            // 提交数据，将数据存储到对应的行的特殊情况记录中
            submit_data(){
                console.log("提交数据");
            }
        },
        created:function (){
            // 组件加载后根据调用处的参数，设置弹窗title
            this.setDialogTitle();
        }
    };
</script>

<style>
    .dialog_Class{
        width: 100%;
    }
    .table_div,.edit_div{
        height: 290px;
        width: 100%;
    }
    .middle_divOne{
        height: 250px;
        width: 100%;
        overflow: auto;
    }
    .middle_divTwo{
        height: 40px;
        width: 100%;
    }
    .edit_div_left{
        width: 30%;
        float: left;
        height: 100%;
        font-size: 12px;

    }
    .edit_div_right{
        width: 68%;
        float: right;
        height: 100%;
        font-size: 12px;
    }
    .edit_div_span{
        margin: 8px 0 8px 15px;
        font-size: 20px;
        font-weight: bold;
    }
</style>