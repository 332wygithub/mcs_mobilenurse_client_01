<template>
    <div id="chartPie" class="pie-wrap"></div>
</template>

<script>
    import * as echarts from 'echarts';
    require('echarts/theme/macarons');//引入主题
    import axios from 'axios';
    var riqi=[];
    var defen=[];
    var value=[];
    var name=[];
    export default {
        name: 'bingzhuangtu',
        data() {
            return {
                //接收病人树传过来的病人id
                brID:'',
                chartPie: null
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
                //切换病人时清空，否则会遗留上一个人的数据
                riqi=[];
                defen=[];
                var aa=[];
                axios
                    .get("http://127.0.0.1:8080/yszabrttpgbACon/cxyszabrttpgdxx",{params:{brID:this.brID}})
                    .then((res)=>{
                        console.log(res.data);
                        for(let i = 0;i < res.data.length;i++) {
                            riqi[i]=res.data[i].riqi;
                            defen[i]=res.data[i].defen;
                        }
                        this.drawPieChart();
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            drawPieChart() {
                let mytextStyle = {
                    color: "#333",
                    fontSize: 18,
                };
                let mylabel = {
                    show: true,
                    position: "right",
                    offset: [30, 40],
                    formatter: '{b} : {c} ({d}%)',
                    textStyle: mytextStyle
                };
                this.chartPie = echarts.init(document.getElementById('chartPie'),'macarons');
                this.chartPie.setOption({
                    title: {
                        text: '得分饼状图',
                        // subtext: '纯属虚构',
                        x: 'center'
                    },
                    // tooltip: {
                    //     trigger: 'item',
                    //     // formatter: "{a} <br/>{b} : {c} ({d}%)",
                    // },
                    legend: {
                        data: defen,
                        left:"center",
                        top:"bottom",
                        orient:"horizontal",
                    },
                    series: [
                        {
                            name: '得分',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            center: ['50%', '50%'],
                            data:defen,
                            animationEasing: 'cubicInOut',
                            animationDuration: 2600,
                            label: {
                                emphasis: mylabel
                            }
                        }
                    ]
                });
            }
        },
        props: ['brID'],
        mounted() {
            this.$nextTick(() => {
                this.drawPieChart();
            })
        },
    }
</script>

<style>
    #chartPie{
        margin-left: 200px;
        /*margin-top: 300px;*/
        /*border: 1px solid black;*/
        height: 400px;
        width: 60%;
    }
</style>