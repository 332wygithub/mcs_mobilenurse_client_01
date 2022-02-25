<template>
    <div id="wzhljld">
        <el-header><b>危重护理记录单</b></el-header>
        <div class="inputDeep">
            姓名:{{listbrs.xm}}&nbsp;&nbsp;
            性别:{{listbrs.xb}}&nbsp;&nbsp;
            年龄:{{listbrs.nl}}&nbsp;&nbsp;
            科室:{{listbrs.ksid}}&nbsp;&nbsp;
            床号:{{listbrs.ch}}&nbsp;&nbsp;
            住院号:{{listbrs.zyhm}}
        </div>
        <el-table @cell-click="handleCellClick" @cell-dblclick="handleCellDblclick" height="450px" :data="wzhlist" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
            <el-table-column prop="cjrq" label="日期" width="80">
                <template slot-scope="scope">
                    <div class="item_txt">{{scope.row.cjrq}}</div>
                    <el-input
                            class="item_input"
                            @blur="onInputBlur(scope.row)"
                            v-model="scope.row.cjrq"
                            size="small"
                    ></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="cjsj" label="时间" width="80">
                <template slot-scope="scope">
                    <div class="item_txt">{{scope.row.cjsj}}</div>
                    <el-input
                            class="item_input"
                            @blur="onInputBlur(scope.row)"
                            v-model="scope.row.cjsj"
                            size="small"
                    ></el-input>
                </template>
            </el-table-column>
            <el-table-column label="入量">
                <el-table-column prop="xm" label="项目" width="80">
                    <template slot-scope="scope">
                        <div class="item_txt">{{scope.row.xm}}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="beiliang" label="备用量" width="70">
                    <template slot-scope="scope">
                        <div class="item_txt">{{scope.row.beiliang}}</div>
                        <el-input
                                class="item_input"
                                @blur="onInputBlur(scope.row)"
                                v-model="scope.row.beiliang"
                                size="small"
                        ></el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="srl" label="实入量" width="70">
                    <template slot-scope="scope">
                        <div class="item_txt">{{scope.row.srl}}</div>
                        <el-input
                                class="item_input"
                                @blur="onInputBlur(scope.row)"
                                v-model="scope.row.srl"
                                size="small"
                        ></el-input>
                    </template>
                </el-table-column>
            </el-table-column>
            <el-table-column label="出量">
                 <el-table-column prop="xb" label="尿" width="50">
                     <template slot-scope="scope">
                         <div class="item_txt">{{scope.row.xb}}</div>
                         <el-input
                                 class="item_input"
                                 @blur="onInputBlur(scope.row)"
                                 v-model="scope.row.xb"
                                 size="small"
                         ></el-input>
                     </template>
                 </el-table-column>
                 <el-table-column prop="ot" label="呕吐" width="50">
                     <template slot-scope="scope">
                         <div class="item_txt">{{scope.row.ot}}</div>
                         <el-input
                                 class="item_input"
                                 @blur="onInputBlur(scope.row)"
                                 v-model="scope.row.ot"
                                 size="small"
                         ></el-input>
                     </template>
                 </el-table-column>
                 <el-table-column prop="NewColumnA" label="a" width="50">
                     <template slot-scope="scope">
                         <div class="item_txt">{{scope.row.NewColumnA}}</div>
                         <el-input
                                 class="item_input"
                                 @blur="onInputBlur(scope.row)"
                                 v-model="scope.row.NewColumnA"
                                 size="small"
                         ></el-input>
                     </template>
                 </el-table-column>
                 <el-table-column prop="NewColumnB" label="b" width="50">
                     <template slot-scope="scope">
                         <div class="item_txt">{{scope.row.NewColumnB}}</div>
                         <el-input
                                 class="item_input"
                                 @blur="onInputBlur(scope.row)"
                                 v-model="scope.row.NewColumnB"
                                 size="small"
                         ></el-input>
                     </template>
                 </el-table-column>
            </el-table-column>
            <el-table-column prop="db" label="大便" width="80">
                <template slot-scope="scope">
                    <div class="item_txt">{{scope.row.db}}</div>
                    <el-input
                            class="item_input"
                            @blur="onInputBlur(scope.row)"
                            v-model="scope.row.db"
                            size="small"
                    ></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="tw" label="体温" width="80">
                <template slot-scope="scope">
                    <div class="item_txt">{{scope.row.tw}}</div>
                    <el-input
                            class="item_input"
                            @blur="onInputBlur(scope.row)"
                            v-model="scope.row.tw"
                            size="small"
                    ></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="mb" label="脉搏" width="80">
                <template slot-scope="scope">
                    <div class="item_txt">{{scope.row.mb}}</div>
                    <el-input
                            class="item_input"
                            @blur="onInputBlur(scope.row)"
                            v-model="scope.row.mb"
                            size="small"
                    ></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="hs" label="呼吸" width="80">
                <template slot-scope="scope">
                    <div class="item_txt">{{scope.row.hs}}</div>
                    <el-input
                            class="item_input"
                            @blur="onInputBlur(scope.row)"
                            v-model="scope.row.hs"
                            size="small"
                    ></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="xy" label="血压" width="80">
                <template slot-scope="scope">
                    <div class="item_txt">{{scope.row.xy}}</div>
                    <el-input
                            class="item_input"
                            @blur="onInputBlur(scope.row)"
                            v-model="scope.row.xy"
                            size="small"
                    ></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="tsqkjl" label="病情记录" width="150">
                <template slot-scope="scope">
                    <div class="item_txt">{{scope.row.tsqkjl}}</div>
                </template>
            </el-table-column>
            <el-table-column prop="cjr" label="护士签名" width="85">
                <template slot-scope="scope">
                    <div class="item_txt">{{scope.row.cjr}}</div>
                    <el-input
                            class="item_input"
                            @blur="onInputBlur(scope.row)"
                            v-model="scope.row.cjr"
                            size="small"
                    ></el-input>
                </template>
            </el-table-column>
        </el-table>

        <div id="qianming">
            护士长签名：__________&nbsp;
            护士签名：__________&nbsp;&nbsp;
            <el-date-picker
                    value-format="yyyy-MM-dd HH:mm:ss"
                    v-model="cjrq"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>&nbsp;
            <el-button plain @click="cxwzhljld()">查询</el-button>
            <el-button plain @click="xjhxdsj()">新建</el-button>
            <el-button plain>12H</el-button>
            <el-button plain>24H</el-button>
            <el-button plain @click="xgwzhljld()">保存</el-button>
            <el-button plain @click="scwzhljlxx()">删除</el-button>
        </div>
        <tsqkjl :showOrHideDialogPar="showOrHideDialog" :currentComponentFlag="currentComponentFlagVal" @sendParentDialogPar="getDialogParFromChild"></tsqkjl>
    </div>
</template>

<script>
    import axios from 'axios'
    // 导入   特殊情况记录弹窗子组件
    import tsqkjl from '@/components/weizhonghulijiludan/tsqkjl.vue';
    export default {
        name: 'wzhljld',
        components:{
            tsqkjl,
        },
        data() {
            return {
                //查询的参数
                cjrq: '',
                //查询到的集合
                wzhlist: [],
                //接收主页面传过来的病人id
                brID: '',
                cjsj: '',
                //接收查询到的病人信息
                listbrs: {},
                //当前行的数据
                currentRow: {},
                //删除当前行数据得参数
                sysID: '',
                //接收修改后的数据
                xglist:[],
                // 接收点击后获取的当前单元格
                currentCell:'',
                // 失去焦点事件获取当前行对象
                currentRowObjFromBlur:{},
                // 双击可操作的属性
                dbClickEditProp: ['tsqkjl'],
                // 控制特殊情况记录弹窗显示隐藏参数
                showOrHideDialog:false,
                // 声明当前组件标识 用于区别不同的组件调用弹窗标识
                currentComponentFlagVal:'wzhljld',
            }
        },
        created: function () {
            /**
             * 监听上个界面传递的值是否发生变化
             * 如果发生变化则将病人id重新赋值
             * 再调用查询方法
             */
            this.$watch("brID", (newValue, oldValue) => {
                console.log(newValue + "_新值");
                console.log(oldValue + "_旧值");
                if (newValue != oldValue) {
                    this.brID = newValue;
                    this.xianshixiangqing();
                }
            });
        },
        methods: {
            //危重护理记录单-新建
            xjhxdsj: function () {
                axios
                    .post("http://127.0.0.1:8080/wzhljldCo/xjhxdsj",
                        this.brID,
                    )
                    .then((res) => {
                        console.log(res.data);
                        this.cxwzhljld();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //危重护理记录单-根据cjrq查询
            cxwzhljld: function () {
                axios
                    .get("http://127.0.0.1:8080/wzhljldCo/cxwzhljld", {
                        params: {
                            brid: this.brID,
                            minCjrq: this.cjrq[0],
                            maxCjrq: this.cjrq[1],
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        this.wzhlist = res.data;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //查询病人信息
            xianshixiangqing: function () {
                this.cxwzhljld();
                axios
                    .get("http://127.0.0.1:8080/mcs_zaiyuanbingrenbiaoController/cxbr", {
                        params: {
                            brID: this.brID,
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        this.listbrs = res.data;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //动态添加输入框
            // tableEdit(row, column, cell, event) {
            //     if (column.label == '项目' ||
            //         column.label == '备用量' || column.label == '实入量' || column.label == '出量' ||
            //         column.label == '尿' || column.label == '呕吐' || column.label == 'a' ||
            //         column.label == 'b' || column.label == '大便' || column.label == '体温' ||
            //         column.label == '脉搏' || column.label == '呼吸' || column.label == '血压' ||
            //         column.label == '病情记录' || column.label == '护士签名') {
            //         var beforeVal = event.target.textContent;
            //         event.target.innerHTML = "";
            //         let str = `<div class='cell'>
            //                     <div class='el-input'>
            //                         <input type='text' class='el-input__inner' style="height: 26px;">
            //                     </div>
            //                    </div>`;
            //         cell.innerHTML = str;
            //         //  获取双击后生成的input  根据层级嵌套会有所变化
            //         let cellInput = cell.children[0].children[0].children[0];
            //         cellInput.value = beforeVal;
            //         cellInput.focus(); // input自动聚焦
            //         // 失去焦点后  将input移除
            //         cellInput.onblur = function () {
            //             let onblurCont = `${cellInput.value}`;
            //             cell.innerHTML = onblurCont; // 换成原有的显示内容
            //         }
            //     }
            // },

            handleCurrentChange(val) {
                this.currentRow = val;
                this.sysID=val.sysID;
                console.log(this.sysID);
            },
            // 单元格点击后，显示input，并让input 获取焦点
            handleCellClick:function(row, column, cell, event){
                const property = column.property;
                if (!this.dbClickEditProp.includes(property)) {
                    // 获取当前单元格对象    用于input失去焦点时隐藏input显示div
                    this.currentCell = cell;
                    // 显示输入框
                    cell.querySelector('.item_input').style.display = 'block';
                    // 自动捕获输入框光标
                    cell.querySelector('input').focus();
                    // 隐藏div
                    cell.querySelector('.item_txt').style.display = 'none';
                }
            },
            /**
             * 当 el-input 失去焦点 时,input 切换为 div
             * @param row
             */
            onInputBlur(row){
                // 当前单元格  this.currentCell 内的 el-input隐藏    div显示
                this.currentCell.querySelector('.item_input').style.display = 'none';
                this.currentCell.querySelector('.item_txt').style.display = 'block';
                // 失去焦点事件获取当前行对象
                this.currentRowObjFromBlur = row;
            },
            // 当 el-input 失去焦点，将当前行的数据存储到需要修改的数组中
            handleEditTableDatas(currentRow){
                if(this.xglist.length < 1){
                    this.xglist.push(currentRow);
                } else {
                    /**
                     * 如果一个单元格或是一行点击了多次，则将最后一次的数据
                     * 存放到修改数组中
                     */
                    this.xglist.forEach((item,index)=>{
                        if(item.id == currentRow.id){
                            this.xglist.splice(index,1);
                        }
                    });
                    this.xglist.push(currentRow);
                }
            },

            //危重护理记录单——删除
            scwzhljlxx: function () {
                // this.sysID=sysID;
                if (this.sysID==undefined) {
                    alert("提示：请选择要删除得数据");
                } else {
                    if (confirm("提示：确定删除吗")) {
                        axios
                            .delete("http://127.0.0.1:8080/wzhljldCo/scwzhljlxx", {params: {sysID:this.sysID}})
                            .then((res) => {
                                console.log(res.data);
                                if (res.data != 0) {
                                    alert("提示：删除数据成功");
                                    this.sysID=undefined;
                                    // this.currentRow=JSON.stringify(this.currentRow) == "{}"
                                    // this.currentRow="{}";
                                    this.cxwzhljld();
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
            //修改数据
            xgwzhljld:function () {
                axios
                    .put("http://127.0.0.1:8080/wzhljldCo/xgwzhljldsj",{map:this.xglist})
                    .then((res)=>{
                        console.log(res.data);
                        this.xglist=res.data;
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            // 特殊情况记录单元格双击事件    调用弹窗
            handleCellDblclick(row, column, cell, event) {
                const property = column.property;
                if (this.dbClickEditProp.includes(property)) {
                    // 调用弹窗 ？？？
                    this.showOrHideDialog = true;
                }
            },
            // 获取弹窗子组件传递的参数 用以控制弹窗显示隐藏
            getDialogParFromChild(showOrHidePar){
                // 将弹窗组件点击取消或确定传递的参数赋给  showOrHideDialog
                this.showOrHideDialog = showOrHidePar;
            }
        },
        watch:{
            /**
             *  实时监听当前行对象
             *  当被监听的数据发生变化时，监听属性中的方法才会执行
             *  采用监听数据  避免用户点击某个单元格后没有更改数据，
             *  还将当前单元格所对应的当前行对象放到修改的数组中
             */
            currentRowObjFromBlur:{
                handler(newData,oldData){
                    // 判断被监听的数据是对象并且对象不为空时
                    if(typeof newData == "object" && JSON.stringify(newData) != "{}"){
                        // 将当前行的数据存储到需要修改的数组中的方法
                        this.handleEditTableDatas(newData);
                    }
                },
                deep:true,
            }
        },
        //接收主页面传过来的查询病人信息的参数
        props: ['brID']
    }
</script>

<style>
    #wzhljld{
        margin-left: 270px;
        height: 600px;
        width: 80%;
    }
    #qianming{
        position: fixed;
        bottom: 50px;
    }
    .item_txt{
        box-sizing: border-box;
        line-height: 90%;
        padding: 0 9px;
    }
    .item_input {
        display: none;
        width: 90%;
    }
</style>