<template>
    <div class="container">
        <div class="box">
            <div class="bigtitle">
                <span>灯光状况</span>
            </div>
            <div class="gap">
                <span class="smalltitle greytext">设备总量</span>
                <div  class="bar">
                <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                </div>
                <span class="greytext">{{alarmTotal}}次</span>
            </div>
            <div class="gap">
                <span class="smalltitle greytext">开灯数量</span>
                <div  class="bar">
                <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                </div>
                <span class="greytext">{{alarmTotal}}次</span>
            </div>
            <div class="gap">
                <span class="smalltitle greytext">关灯数量</span>
                <div  class="bar">
                <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                </div>
                <span class="greytext">{{alarmTotal}}次</span>
            </div> 
            <div class="gap">
                <span class="smalltitle greytext">故障数量</span>
                <div  class="bar">
                <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                </div>
                <span class="greytext">{{alarmTotal}}次</span>
            </div>  
        </div>   
        <div  class="box">
            <div class="bigtitle">
                <span>集中器状况</span>
            </div>
            <div class="gap">
                <span class="smalltitle greytext">设备总量</span>
                <div  class="bar">
                <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                </div>
                <span class="greytext">{{alarmTotal}}次</span>
            </div>
            <div class="gap">
                <span class="smalltitle greytext">在线数量</span>
                <div  class="bar">
                <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                </div>
                <span class="greytext">{{alarmTotal}}次</span>
            </div>
            <div class="gap">
                <span class="smalltitle greytext">离线数量</span>
                <div  class="bar">
                <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                </div>
                <span class="greytext">{{alarmTotal}}次</span>
            </div>  
        </div>    
        <div  class="box otherbox">
            <div class="bigtitle">
                <span>其他设备状况</span>
            </div>
            <div class="box ">
                <div class="gap">
                    <span class="smalltitle greytext">设备总量</span>
                    <div  class="bar">
                    <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                    </div>
                    <span class="greytext">{{alarmTotal}}次</span>
                </div>
                <div class="gap">
                    <span class="smalltitle greytext">在线数量</span>
                    <div  class="bar">
                    <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                    </div>
                    <span class="greytext">{{alarmTotal}}次</span>
                </div>
                <div class="gap">
                    <span class="smalltitle greytext" style="text-indent:14px">摄像头</span>
                    <div  class="bar">
                    <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                    </div>
                    <span class="greytext">{{alarmTotal}}次</span>
                </div> 
                <div class="gap">
                    <span class="smalltitle greytext" style="text-indent:14px">信息屏</span>
                    <div  class="bar">
                    <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                    </div>
                    <span class="greytext">{{alarmTotal}}次</span>
                </div>     
            </div>
            <div class="box box2">
                <div class="gap">
                    <span class="smalltitle greytext">多功能传感器</span>
                    <div  class="bar">
                    <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                    </div>
                    <span class="greytext">{{alarmTotal}}次</span>
                </div>
                <div class="gap">
                    <span class="smalltitle greytext" style="text-indent:42px">信息屏</span>
                    <div  class="bar">
                    <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                    </div>
                    <span class="greytext">{{alarmTotal}}次</span>
                </div>
                <div class="gap">
                    <span class="smalltitle greytext" >今日呼叫次数</span>
                    <div  class="bar">
                    <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                    </div>
                    <span class="greytext">{{alarmTotal}}次</span>
                </div> 
                <div class="gap">
                    <span class="smalltitle greytext">历史呼叫次数</span>
                    <div  class="bar">
                    <el-progress   :stroke-width="12" :percentage="100" :show-text="false"></el-progress> 
                    </div>
                    <span class="greytext">{{alarmTotal}}次</span>
                </div>     
            </div>
        </div>                                            
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .container .box{
        margin-right: 10px;
    }
    .container .box:last-of-type{
        margin-right: 0px;
    }
    .box{
        width:16vw;float:left;
    }
    .box2{
        width: 18vw;
    }
    .otherbox{
        width:38vw;
    }


</style>