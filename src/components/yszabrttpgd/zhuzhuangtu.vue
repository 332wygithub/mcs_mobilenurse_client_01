<template>
    <div>
        <div id="zhuzhuangtu" ref="chart"></div>
    </div>
</template>

<script>
    //局部引用
    const echarts = require('echarts');
    import axios from 'axios';
    var xData = [];
    var yData=[];
    export default{
        name: 'zhuzhuangtu',
        data(){
            return {
                //查询到的数据
                listys:[],
                //接收病人树传过来的病人id
                brID:'',
            }
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
                xData=[];
                yData=[];
                axios
                    .get("http://127.0.0.1:8080/yszabrttpgbACon/cxyszabrttpgdxx",{params:{brID:this.brID}})
                    .then((res)=>{
                        console.log(res.data);
                        this.listys=res.data;
                        for(let i = 0;i < this.listys.length;i++) {
                            xData[i]=this.listys[i].riqi;
                            yData[i]=this.listys[i].defen;
                        }
                        console.log(xData);
                        console.log(yData);
                        this.initCharts();
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            initCharts(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(this.$refs.chart);
                // 绘制图表
                myChart.setOption({
                    // title: { text: '柱状图' },
                    tooltip: {},
                    xAxis: {
                        data: xData
                    },
                    yAxis: {},
                    series: [{
                        name: '得分',
                        type: 'bar',
                        data: yData
                    }]
                });
            }
        },
        props: ['brID'],
        //一加载页面就调用
        mounted () {
            this.initCharts();
        }
    }
</script>
<style>
    #zhuzhuangtu{
        margin-left: 400px;
        /*border: 1px solid black;*/
        height: 400px;
        width: 60%;
    }
</style>
