<template>
    <div class="container">
        <el-row >
            <el-col :span="6">
                <div class="left content">
                     <alarm-count></alarm-count> 
                     <power-count></power-count> 
                     <other-stat class="others"></other-stat>                         
                </div>
            </el-col>
            <el-col :span="12">
                <div class="main content">
                    <region-select></region-select>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="right content">
                    <div style="margin-bottom:2vh">
                        <div class="bigtitle">
                            <span>环境监测数据</span>
                        </div>
                        <div class="gap">
                            <div class="deg">
                                <span class="smalltitle greytext">大气湿度</span>
                                <span class="greytext">--℃</span>
                            </div>
                            <div class="deg">
                                <span class="smalltitle greytext">相对湿度</span>
                                <span class="greytext">--%</span>
                            </div>                              
                        </div>
                    </div>
                    <video-monitor></video-monitor>
                    <led-pannel></led-pannel>
                </div>
            </el-col>
        </el-row>        
    </div>
</template>

<script>
    import alarmCount from '../components/eharts/alarmCount'
    import powerCount from '../components/eharts/powerCount'
    import regionSelect from '../components/map/regionSelect'
    import otherStat from '../components/info/otherStat'
    import videoMonitor from '../components/info/videoMonitor'
    import ledPannel from '../components/info/ledPannel'
    export default {
        components: {
            alarmCount,
            powerCount,
            regionSelect,
            otherStat,
            videoMonitor,
            ledPannel,
        },
    }
</script>

<style scoped>
.container{
    margin: 20px 30px;
    position: relative;
}
.content{
    height: 82vh;
    background: #fff;
    padding: 20px;
   
}
.others{
    /* width: 80vw; */
    position: absolute;
    padding: 0;
    margin: 0;
    bottom: 0vh;
}
.deg{
    width: 10vw;
}
.deg span{
    margin-right: 30px;
}
</style>