<template>
    <div class="echart" id="mychart"></div>
</template>

<script>
    import * as echarts from "echarts";
    import axios from 'axios';
    var xData = [];
    var yData=[];
    export default {
        name: 'zhexiantu',
        data() {
            return {
                //查询到的数据
                listyszas:[],
                //接收病人树传过来的病人id
                brID:'',
                //调节图表
                myChart: {},
            };
        },
        created() {
            this.$watch("brID", (newValue, oldValue) => {
                console.log(newValue + "_新值");
                console.log(oldValue + "_旧值");
                if (newValue != oldValue) {
                    this.brID = newValue;
                    this.cxyszabrttpgdxx();
                }
            });
        },
        methods: {
            cxyszabrttpgdxx() {
                //切换病人时清空，否则会遗留上一个人的数据
                xData=[];
                yData=[];
                axios
                    .get("http://127.0.0.1:8080/yszabrttpgbACon/cxyszabrttpgdxx",{params:{brID:this.brID}})
                    .then((res)=>{
                        console.log(res.data);
                        this.listyszas=res.data;
                        for(let i = 0;i < this.listyszas.length;i++) {
                            xData[i]=this.listyszas[i].riqi;
                            yData[i]=this.listyszas[i].defen;
                        }
                        console.log(xData);
                        console.log(yData);
                        this.initEcharts();
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            //折线图-查询全部数据
            initEcharts() {
                const option = {
                    xAxis: {
                        data: xData
                    },
                    yAxis: {},
                    series: [
                        {
                            data: yData,
                            type: "line", // 类型设置为折线图
                        },
                    ]
                };
                this.myChart = echarts.init(document.getElementById("mychart"));
                this.myChart.setOption(option);
                //随着屏幕大小调节图表
                window.addEventListener("resize", () => {
                    this.myChart.resize();
                });
            }
        },
        props: ['brID'],
        mounted () {
            this.initEcharts();
        }
    };
</script>

<style scoped>
    #mychart{
        margin-left: 400px;
        /*margin-top: 300px;*/
        /*border: 1px solid black;*/
        height: 400px;
        width: 60%;
    }
</style>




