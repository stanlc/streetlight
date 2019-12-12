<template>
    <div>
        <div>
            <div class="bigtitle">
                <span>视频监控</span>
            </div>
            <div class="videoBox">
            </div>
            <div class="toolbox">
                <div>
                    <span>云台控制</span>
                </div>
                <div class="btnbox">
                    <div class="left">
                        <el-form>
                            <el-button icon="el-icon-caret-top" class="top-left"></el-button>
                            <el-button icon="el-icon-caret-top"></el-button>
                            <el-button icon="el-icon-caret-top" class="top-right"></el-button>
                        </el-form>
                        <el-form>
                            <el-button icon="el-icon-caret-left"></el-button>
                            <el-button icon="el-icon-refresh-right" class="refresh"></el-button>
                            <el-button icon="el-icon-caret-right"></el-button>
                        </el-form>
                        <el-form>
                            <el-button icon="el-icon-caret-bottom" class="bottom-left"></el-button>
                            <el-button icon="el-icon-caret-bottom"></el-button>
                            <el-button icon="el-icon-caret-bottom" class="bottom-right"></el-button>
                        </el-form>                                                
                    </div>
                    <div class="right">
                        <el-form>
                            <el-button icon="el-icon-plus"></el-button>
                            <i class="el-icon-search"></i>
                            <el-button icon="el-icon-minus"></el-button>
                        </el-form>
                        <el-form>
                            <el-button icon="el-icon-plus"></el-button>
                            <i class="el-icon-full-screen"></i>
                            <el-button icon="el-icon-minus"></el-button>
                        </el-form>
                        <el-form>
                            <el-button icon="el-icon-plus"></el-button>
                            <i class="el-icon-s-help"></i>
                            <el-button icon="el-icon-minus"></el-button>
                        </el-form>                        
                    </div>
                    <div class="block">
                        <div class="slider">
                            <el-slider v-model="stepValue" :step="1" :marks="marks"
                            :max="7"
                            :min="1"
                            ></el-slider>
                        </div>
                    </div> 
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
    export default {
        data() {
            return {
                stepValue:1,
                marks: {
                    1:'1',
                    2:'2',
                    3:'3',
                    4:'4',
                    5:'5',
                    6:'6',
                    7:'7'
                }
            }
        },
        methods: {

        },
    }
</script>

<style scoped>
    .videoBox{
        width: 20.5vw;
        height: 20vh;
        background: #111;
    }
    .toolbox{
        width: 20.5vw;
        height: 20vh;
        text-align: center;
        margin: 5px 0 10px 0;

    }
    .btnbox{
        width: 13vw;
        height: 15vh;
        background: rgb(235, 236, 170);
        margin:  2vh auto;
    }
    .left{
        float:left;
    }
    .right{
        float: right;
    }
    .left .el-button,.right .el-button{
        width: 17px;
        height: 17px;
        padding: 0;
        color: #00a0ff;
        background: none;
        border: solid 1px #00a0ff;
    }
    .right /deep/ .el-button{
        color: #a2a09c;
        font-weight: 800;
    }
    .el-form{
        margin-bottom: 3px;
    }
    .right i{
        margin:0 8px;
        color: #00a0ff;
        vertical-align: middle;
    }
    .left .refresh {
        color: #fff;
        background: #00a0ff;
        transform:rotate(90deg);
        -ms-transform:rotate(90deg); 	/* IE 9 */
        -moz-transform:rotate(90deg); 	/* Firefox */
        -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
        -o-transform:rotate(90deg); 	/* Opera */
    }
    .top-left /deep/ i.el-icon-caret-top{
        transform:rotate(-45deg);
        -ms-transform:rotate(-45deg); 	/* IE 9 */
        -moz-transform:rotate(-45deg); 	/* Firefox */
        -webkit-transform:rotate(-45deg); /* Safari 和 Chrome */
        -o-transform:rotate(-45deg); 	/* Opera */
    } 
    .top-right /deep/ i.el-icon-caret-top{
        transform:rotate(45deg);
        -ms-transform:rotate(45deg); 	/* IE 9 */
        -moz-transform:rotate(45deg); 	/* Firefox */
        -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
        -o-transform:rotate(45deg); 	/* Opera */
    }
    .bottom-right /deep/ i.el-icon-caret-bottom{
        transform:rotate(-45deg);
        -ms-transform:rotate(-45deg); 	/* IE 9 */
        -moz-transform:rotate(-45deg); 	/* Firefox */
        -webkit-transform:rotate(-45deg); /* Safari 和 Chrome */
        -o-transform:rotate(-45deg); 	/* Opera */
    } 
    .bottom-left /deep/ i.el-icon-caret-bottom{
        transform:rotate(45deg);
        -ms-transform:rotate(45deg); 	/* IE 9 */
        -moz-transform:rotate(45deg); 	/* Firefox */
        -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
        -o-transform:rotate(45deg); 	/* Opera */
    }   
    .el-slider /deep/ .el-slider__stop{
        height: 0;
        width: 0;
    }  
    .slider{
        width: 100%;
        margin: 0 auto;
        display: inline-block;
    }
    .block /deep/ .el-slider__button{
        width: 12px;
        height: 12px;
    } 
    .table{
        width: 20vw;
    }       
</style>