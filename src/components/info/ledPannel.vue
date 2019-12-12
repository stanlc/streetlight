<template>
    <div>
        <div class="bigtitle">
            <span>LED显示屏</span>
        </div>
        <div class="container">
            <div class="left">
                <el-form>
                        <el-button type="primary" size="small">休眠</el-button>
                        <el-button type="info" size="small">唤醒</el-button>
                        <el-button type="danger" size="small">重启</el-button>
                </el-form>
                <div class="block">
                    <el-button type="text" @click="volumn=0">静音</el-button>
                    <div class="bar">
                        <el-slider v-model="volumn"></el-slider>
                    </div>
                     <el-button type="text" @click="volumn=100">全开</el-button>
                </div>  
                <div class="block">
                    <el-button type="text" @click="light=0">变暗</el-button>
                    <div class="bar">
                        <el-slider v-model="light"></el-slider>
                    </div>
                    <el-button type="text" @click="light=100">变亮</el-button>
                </div> 
                <div class="table">
                    <el-table :data="data" height="100">
                        <el-table-column label="节目名称" prop="name"></el-table-column> 
                        <el-table-column label="大小（KB）" prop="size" ></el-table-column> 
                        <el-table-column
                            label="切换"
                            width="30">
                            <template slot-scope="scope">
                                <el-button @click="change(scope.row)" type="text" size="small">查看</el-button>
                            </template>
                        </el-table-column>  
                    </el-table>
                </div>                               
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                volumn: 0,
                light:0,
                data:[
                    {
                        name:'11',
                        size:20
                    },
                    {
                        name:'222',
                        size:30
                    },
                    {
                        name:'222',
                        size:30
                    },                    
                ]
            }
        },
        methods: {
            change() {
                
            }
        },
    }
</script>

<style scoped>
    .container{
        width: 20.5vw;
    }
    .el-form-item__content{
        line-height: 0;
    }
    .left{
        float: left;
        width: 65%;
    }
    .left /deep/ .el-button{
        padding: 2px 10px;
    }
    .right{
        float: right;
        width: 7vw;
        height: 23.5vh;
        background: #111;
    }
    .block{
        margin-top: 2px;
        height: 25px;
    }
    .block /deep/ .el-button{
        padding: 0;
    }
    .block /deep/ .el-slider__button{
        width: 8px;
        height: 8px;
    }
    .table{
        width: 100%;
        margin-top: 10px;
    }
    .table /deep/ .el-table th{
        font-size: 10px;
        height: 15px;
        line-height: 15px;
        padding: 1px;
        color: #fff;
        background:#00a0ff; 
    }
    .table /deep/ .el-table{
        width: 100%;
    }
    .table /deep/ .el-button{
        padding: 0;
    }
    .table /deep/ .el-table .cell{
        line-height: 15px;
        height: 15px;
        padding: 0;
    }
    .table /deep/ .el-table--enable-row-transition .el-table__body td{
        padding: 5px 0;
    }
</style>