<!--添加页面-->
<template>
    <div id="tianjia">
        <el-header>用户账户管理</el-header>
        <div id="yh">
            <el-descriptions title="基本信息" :column="2" border size="mini">
                <el-descriptions-item label="工号:" label-class-name="my-label" content-class-name="my-content">
                    <input v-model="yhId" placeholder="请输入工号" class="putKuang" style="border: none;height: 30px"></el-descriptions-item>
                <el-descriptions-item label="密码:">
                    <input v-model="mm" placeholder="请输入密码" class="putKuang" style="border: none;height: 30px"></el-descriptions-item></el-descriptions-item>
                <el-descriptions-item label="姓名:">
                    <input v-model="yhmz" placeholder="请输入姓名" class="putKuang" style="border: none;height: 30px"></el-descriptions-item></el-descriptions-item>
                <el-descriptions-item label="身份证号:">
                    <input v-model="sfzh" placeholder="请输入身份证号" class="putKuang" style="border: none;height: 30px"></el-descriptions-item>
                </el-descriptions-item>
            </el-descriptions>
        </div>
        <div id="keshi">
            <el-descriptions title="科室信息" :column="2" border size="mini">
            </el-descriptions>
            <!--循环创建行-->
            <el-form ref="form" :rules="formRules" :inline="true" :model="form" label-width="60px">
                <div v-for="(item, index) in form.dynamicItem" :key="index">
                    <el-form-item label="科室" :prop="'dynamicItem.' + index + '.name'" :rules="{required: true, message: '请选择', trigger: 'blur'}">
                        <!-- 科室信息下拉框 -->
                        <el-select v-model="keshiID" clearable placeholder="请选择">
                            <el-option
                                    v-for="item in list"
                                    :index="item.ksID"
                                    :label="item.ksmc"
                                    :value="item.ksID">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 职务信息下拉框 -->
                    <el-form-item label="职位" :prop="'dynamicItem.' + index + '.phone'" :rules="[{required: true, message: '请选择', trigger: 'blur'}]">
                        <el-select v-model="zw" clearable placeholder="请选择">
                            <el-option value="高责护士">高责护士</el-option>
                            <el-option value="护士">护士</el-option>
                            <el-option value="护士长">护士长</el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 循环创建/删除行按钮 -->
                    <el-form-item>
                        <el-button v-if="index+1 == form.dynamicItem.length" @click="addItem" style="border: none">
                            <i class="el-icon-circle-plus-outline" style="font-size: 25px"></i>
                        </el-button>
                        <el-button v-if="index !== 0" @click="deleteItem(item, index)" style="border: none">
                            <i class="el-icon-circle-close" style="font-size: 25px"></i>
                        </el-button>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <!--按钮-->
        <div id="anniu">
            <el-button type="button" @click="baocun()">保存</el-button>
            <el-button type="button" @click="fanhui">返回</el-button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'tianjia',
        data() {
            return {
                //接收查询关系表数据集合
                list:[],
                // 科室下拉框默认绑定数据
                keshiID:'',
                //定义存储yhid的变量
                yhId:'',
                //定义存储密码的变量
                mm:'',
                //定义存储用户名字的变量
                yhmz:'',
                //定义存储身份证信息的变量
                sfzh:'',
                // 职务
                zw:'',

                //循环创建行
                form: {
                    dynamicItem: [
                        {
                            name: "",
                            phone: ""
                        }
                    ]
                },
                formRules:{}
            }
        },
        created:function () {
            this.cxksxx();
        },
        methods:{
            //查询科室名称
            cxksxx:function () {
                axios
                    .get("http://127.0.0.1:8080/ksCon/ksxx")
                    .then((res)=>{
                        console.log(res.data);
                        this.list=res.data;

                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            //保存
            baocun:function () {
                axios
                    .post("http://127.0.0.1:8080/yhCon/tianjia",{
                        yhId:this.yhId,
                        mm:this.mm,
                        yhmz:this.yhmz,
                        sfzh:this.sfzh,
                        c:this.keshiID,
                        d:this.zw
                        }
                    )
                    .then((res)=>{
                        console.log(res.data)
                        //判断返回值 如果为1，表示更新/添加成功
                        if(res.data == 1) {
                            alert("提示：添加成功")
                            //清空输入框数据
                            this.currentRow={};
                            //判断返回值 如果为2，表示更新/添加失败
                        }else if(res.data == 2) {
                            alert("提示：添加数据失败")
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            //返回
            fanhui:function (){
                this.$router.push({
                    name: 'yhgl',
                })
            },
            //循环创建行
            addItem() {
                this.form.dynamicItem.push({
                    name: "",
                    phone: ""
                });
            },
            sure(form) {
                console.log(this.form.dynamicItem.length, "length");
                this.$refs[form].validate(valid => {
                    if (valid) {
                        alert("submit!");
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            deleteItem(item, index) {
                this.form.dynamicItem.splice(index, 1);
                console.log(this.form.dynamicItem, "删除");
            },

        },

    }
</script>

<style>
    #tianjia{
        margin-left: 500px;
        height: 450px;
        width: 60%;
    }
    #yh{
        height: 200px;
        width: 85%;
    }
    #keshi{
        height: 200px;
        width: 85%;
    }
    .el-header{
        text-align: center;
        line-height: 60px;
    }
    #anniu{
        position: fixed;
        right: 55%;
        top:85%
    }
</style>