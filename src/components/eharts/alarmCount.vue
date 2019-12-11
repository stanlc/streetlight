<template>
    
    <div>
        <div class="bigtitle">
            <span>报警统计</span>
        </div>
        <div>
            <span class="smalltitle">报警总数</span>
            <div>
                <div  class="bar">
                <el-progress   :stroke-width="15" :percentage="100" :show-text="false"></el-progress> 
                </div>
                <span>{{alarmTotal}}次</span>
            </div>
        </div>
        <div>
            <span class="smalltitle">报警处理</span>
            <div>
                <div  class="bar">
                <el-progress :stroke-width="15" :percentage="50"  :show-text="false"></el-progress> 
                </div>
                <span>{{handleNum}}次</span>
            </div>              
        </div>
        <div style="width:300px;height:35vh;">
            <div id="mychart" style="width:100%;height:100%;"></div>  
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
                alarmWave:[6,4,5,7,8,7],
                TodayAlarm:[4,1,2,5,5,4],
                AlarmHandle:[1,2,4,1,4,12],
                month:'2019-09',
            }
        },
        mounted(){
            this.draw()
        },
        methods: {
        draw(){
            let that = this
            this.myChart = this.$echarts.init(document.getElementById('mychart'))
            let myLog = this.myChart
            var option = {
                // title: {
                //     text: 'ECharts 入门示例'
                // },
                tooltip: {
                    trigger:'axis',
                    formatter:function(params){
                        return params[1].seriesName+'：'+'<span style="color:#339afe;">'+
                        params[1].value+'</span>'+'次'+'<br>'+params[2].seriesName+'：'+
                        '<span style="color:#98ceff;">'+params[2].value+'</span>'+'次'+'<br>'+
                        '未处理：'+'<span style="color:red;">'+(params[1].value-params[2].value)+'</span>'+'次'
                    },  //"{a0}:{c0}次<br>{a1}:{c1}次<br>{a2}:{c2}次<br>"
                    backgroundColor:'#e5e5e5',
                    padding:8,
                    align:'center',
                    textStyle:{
                        color:'#000'
                    },
                },
                legend: {
                    data:['报警波动','今日报警','报警处理'],
                    top:'10%',
                    right:20,
                    width:'80%',
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
                        name: '报警波动',
                        type: 'line',
                        symbol:'circle',
                        symbolSize:5,
                        data: this.alarmWave
                    },
                    {
                        name: '今日报警',
                        type: 'bar',
                        data: this.TodayAlarm,
                        color:'#339afe'
                    },
                    {
                        name:'报警处理',
                        type:'bar',
                        data:this.AlarmHandle,
                        color:'#98ceff'
                    }                    
                ]
            };
            this.myChart.setOption(option)
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