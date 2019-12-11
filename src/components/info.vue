<template>
    <div class="container">
        <el-row >
            <el-col :span="6">
                <div class="left content">
                     <alarm-count></alarm-count> 
                     <power-count></power-count>      
                </div>
            </el-col>
            <el-col :span="12">
                <div class="main content">
                    <region-select></region-select>
                </div>
            </el-col>
            <el-col :span="6"><div class="right content"></div></el-col>
        </el-row>        
    </div>
</template>

<script>
    import alarmCount from '../components/eharts/alarmCount'
    import powerCount from '../components/eharts/powerCount'
    import regionSelect from '../components/map/regionSelect'
    export default {
        components: {
            alarmCount,
            powerCount,
            regionSelect,
        },
    }
</script>

<style scoped>
.container{
    margin: 20px 30px;
}
.content{
    height: 85vh;
    background: #fff;
    padding: 20px;
}
</style>