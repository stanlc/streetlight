<template>
    <div>
        <div class="mapbox">
            <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        </div>
        <!-- 设备详情开始 -->
        <el-dialog
        title="设备详情"
        :visible.sync="dialogVisible"
        width="40%"
        center
        :before-close="handleClose">
        <span>终端名称：{{teminalInfo.teminalName}}</span>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="基本信息" name="first">
                <div class="main clearfix">
                    <div class="left">
                        <p>终端名称：{{teminalInfo.teminalName}}<el-button type="primary" id="chanegBtn" @click="EditdialogVisible=true">修改</el-button></p>
                        <p>通信端口：{{teminalInfo.port}}</p>
                        <p>区域：{{teminalInfo.region}}</p>
                        <p>经度：{{teminalInfo.longtitude}}</p>
                    </div>
                    <div class="right">
                        <p>UID：{{teminalInfo.Uid}}
                        <p>集中器型号：{{teminalInfo.deviceType}}</p>
                        <p>备注：{{teminalInfo.ps}}</p>
                        <p>纬度：{{teminalInfo.latitude}}</p>                    
                    </div>
                </div>
                <div class="power">
                    <span>当前电能</span>
                    <el-table :data="powerList"
                    border>
                        <el-table-column prop="i"></el-table-column>
                        <el-table-column prop="v" label="电压（V）"></el-table-column>
                        <el-table-column prop="a" label="电流（A）"></el-table-column>
                        <el-table-column prop="w" label="总功率（W）"></el-table-column>
                        <el-table-column prop="kwh" label="总电能（Kwh）"></el-table-column>
                        <el-table-column prop="x" label="功率因数"></el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="线路管理" name="second">
                <div class="channel">
                    <el-button type="primary">打开</el-button>
                    <el-button type="primary">关闭</el-button>
                        <span>亮度</span>
                        <div class="bar">
                            <el-slider v-model="light" show-input input-size='mini'></el-slider>
                        </div>              
                </div>

            </el-tab-pane>
        </el-tabs>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确定</el-button>
            <el-button type="danger" @click="EditdialogVisible=true">修改</el-button>
        </span>
        </el-dialog> 
        <!-- 修改对话框开始 -->
        <el-dialog
        title="编辑集中器"
        :visible.sync="EditdialogVisible"
        width="30%"
        :before-close="EditClose" v-model="editForm"
        center>
        <div class="formBox">
            <el-form :inline="true" label-position="left" label-width="100px">
                <el-form-item label="集中器名称：">
                    <el-input v-model="editForm.teminalName"></el-input>
                </el-form-item>
                <el-form-item label="终端Uid：">
                    <el-input  v-model="editForm.Uid"></el-input>
                </el-form-item>
                <el-form-item label="集中器型号：">
                    <el-input  v-model="editForm.deviceType"></el-input>
                </el-form-item>
                <el-form-item label="备注：">
                    <el-input  v-model="editForm.ps"></el-input>
                </el-form-item>
                <el-form-item label="区域：">
                    <el-input  v-model="editForm.region"></el-input>
                </el-form-item>
                <el-form-item label="经度：">
                    <el-input  v-model="editForm.longtitude"></el-input>
                </el-form-item>
                <el-form-item label="纬度：">
                    <el-input  v-model="editForm.latitude"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="EditdialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="EditdialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
        <!-- 修改对话框结束 -->        
        <!-- 设备详情结束        -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: true,
                EditdialogVisible:false,
                activeName: 'first',
                teminalInfo:{
                    teminalName:'终端01',
                    port:'1003',
                    region:'金鑫成都',
                    longtitude:'103',
                    latitude:'34',
                    Uid:'100031',
                    deviceType:'00-1',
                    ps:'',
                 },
                editForm:{},
                light:0,
                powerList:
                [
                    {
                        i:'A相',
                        v:'213',
                        a:'0.00',
                        w:5,
                        kwh:11,
                        x:'0.00',
                    },
                    {
                        i:'B相',
                        v:'213',
                        a:'0.00',
                        w:5,
                        kwh:11,
                        x:'0.00',
                    },
                    {
                        i:'C相',
                        v:'213',
                        a:'0.00',
                        w:5,
                        kwh:11,
                        x:'0.00',
                    },
                ],
                
            }
        },
        mounted(){
            this.editForm = Object.assign({},this.teminalInfo)
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            },
            EditClose(done) {
                this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
    }
</script>

<style scoped>
    .mapbox{
        width: 48vw;
        height: 62vh;
        background: #111;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .main{
        width: 80%;
        margin:0 auto;
    }
    .main div p{
        margin: 8px 0;
    }
    #chanegBtn{
        width: 40px;
        height: 18px;
        padding: 1px 5px;
    }
    .el-tabs{
        margin-top:10px;
    }
    .clearfix::after{
		content:"";
		display:block;
		clear:both;
	}
    .power /deep/ .el-table th{
        font-size: 10px;
        height: 15px;
        line-height: 15px;
        padding: 1px;
        background:#deeffe; 
        text-align: center;
       
    }
    .power /deep/ .el-table .cell{
        line-height: 20px;
        height: 20px;
        padding: 0;
    }
    .power /deep/ .el-table td{
        padding: 2px;
        text-align: center;
    }
    .formBox{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .formBox /deep/ .el-form-item{
        margin-bottom: 10px;
    }
    .formBox /deep/ .el-input__inner{
        border-color: #000;
        height: 25px;
        line-height: 25px;
    }
    .channel /deep/ .el-input-number__decrease{
        display: none;
    }
    .channel /deep/ .el-input-number__increase{
        display: none;
    }
</style>