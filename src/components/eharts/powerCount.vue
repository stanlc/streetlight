<template>
    
    <div>
        <div class="bigtitle">
            <span>能耗统计</span>
        </div>
        <div>
            <span class="smalltitle">今日亮灯</span>
            <div>
                <div  class="bar">
                <el-progress   :stroke-width="15" :percentage="100" :show-text="false"></el-progress> 
                </div>
                <span>{{alarmTotal}}次</span>
            </div>
        </div>
        <div>
            <span class="smalltitle" style="text-indent:15px">总能耗</span>
            <div>
                <div  class="bar">
                <el-progress :stroke-width="15" :percentage="50"  :show-text="false"></el-progress> 
                </div>
                <span>{{handleNum}}次</span>
            </div>              
        </div>
        <div style="width:300px;height:35vh;">
            <div id="powerchart" style="width:100%;height:100%;"></div>  
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                alarmTotal: 200,
                handleNum:180,
                valueList:[1,4,4,5,6],
                dayArr:[11,12,13,14,15,16],
                powerWave:[6,4,5,7,8,7],
                TodayCost:[4,1,2,5,5,4],
                month:'2019-09',
            }
        },
        mounted(){
            this.draw()
        },
        methods: {
        draw(){
            let that = this
            var myChart = this.$echarts.init(document.getElementById('powerchart'))
            let myLog = myChart
            var option = {
                // title: {
                //     text: 'ECharts 入门示例'
                // },
                tooltip: {
                    trigger:'axis',
                    formatter:function(params){
                        return '今日能耗：'+'<span style="color:#339afe;">'+
                        params[1].value+'</span>'+'&nbsp;kwh'+'<br>'
                    },  
                    backgroundColor:'#e5e5e5',
                    padding:8,
                    align:'center',
                    textStyle:{
                        color:'#000'
                    },
                },
                legend: {
                    data:['能耗波动'],
                    top:'10%',
                    right:20,
                    itemWidth:5,
                    itemHeight:5,
                },
                xAxis: {
                    data: this.dayArr,
                    axisPointer:'none',
                    axisTick:{
                        show:false
                    },
                },
                yAxis: {
                    axisTick:{
                        show:false
                    },
                    name:this.month,
                    splitLine:{
                        show:false
                    }
                },
                series: [
                    {
                        name: '能耗波动',
                        type: 'line',
                        symbol:'circle',
                        symbolSize:5,
                        data: this.powerWave
                    },
                    {
                        name: '今日报警',
                        type: 'bar',
                        barWidth:'35%',
                        data: this.TodayCost,
                        color:'#339afe'
                    }                   
                ]
            };
            myChart.setOption(option)
            window.addEventListener("resize",function(){   
                        myLog.resize();
                    });
            },
        },
    }
</script>

<style scoped>
    .red{
        color: red
    }
</style>