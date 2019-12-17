<template>
    <div>
        <el-row>
            <el-col :span="6">
                <el-form :inline="true" v-model="deviceInfo" label-position="left" label-width="130px">
                    <el-form-item label="请选择订阅账号:" >
                        <el-select v-model="check">
                            <el-option label="dyzh111" value="iii"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="请选择设备名称:">
                        <el-select v-model="check">
                            <el-option label="dyzh111" value="iii"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="请输入设备授权码:">
                        <el-select v-model="check">
                            <el-option label="dyzh111" value="iii"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="请输入设备正品码:">
                        <el-input v-model="code"></el-input>
                    </el-form-item>
                    <el-form-item label="请选择区域:">
                        <el-select v-model="check">
                            <el-option label="dyzh111" value="iii"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="组:">
                        <el-select v-model="check">
                            <el-option label="dyzh111" value="iii"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="批量导入:">
                        <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="18">
                <span>选择设备：</span>
                  <el-radio-group v-model="radio" @change='radioChange'>
                    <el-radio :label="1">集中控制器</el-radio>
                    <el-radio :label="2">双头灯杆</el-radio>
                    <el-radio :label="3">多头灯杆</el-radio>
                    <el-radio :label="4">单头灯杆</el-radio>
                    <el-radio :label="5">四头灯杆</el-radio>
                  </el-radio-group>
                  <div class="infoBox" v-if="cBoxShow">
                      <span>设备信息</span>
                      <div class="controlBox" >
                          <el-form :inline="true" v-model="controler">
                              <el-form-item label="型号">
                                  <el-select v-model="controler.type">
                                      <el-option label="默认控制箱" value="默认控制箱"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="编号(UID)">
                                  <el-input v-model="controler.uid"></el-input>
                              </el-form-item>
                              <el-form-item label="名称">
                                  <el-input v-model="controler.name"></el-input>
                              </el-form-item>
                          </el-form>
                          <el-form :inline="true" v-model="controler">
                              <el-form-item label="经度">
                                  <el-input v-model="controler.longtitude"></el-input>
                              </el-form-item>
                              <el-form-item label="纬度">
                                  <el-input v-model="controler.latitude"></el-input>
                              </el-form-item>
                          </el-form>
                          <el-button type="primary">完成</el-button>
                      </div>     
                  </div>
                  <div class="lampBox" v-else>
                          <span>基本信息</span>
                          <el-form :inline="true" v-model="controler">
                              <el-form-item label="型号">
                                  <el-select v-model="controler.type">
                                      <el-option label="默认控制箱" value="默认控制箱"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="编号(UID)">
                                  <el-input v-model="controler.uid"></el-input>
                              </el-form-item>
                              <el-form-item label="名称">
                                  <el-input v-model="controler.name"></el-input>
                              </el-form-item>
                          </el-form>
                          <el-form :inline="true" v-model="controler">
                              <el-form-item label="经度">
                                  <el-input v-model="controler.longtitude"></el-input>
                              </el-form-item>
                              <el-form-item label="纬度">
                                  <el-input v-model="controler.latitude"></el-input>
                              </el-form-item>
                          </el-form>
                          <span>设备类型</span>
                          <div>
                            <el-radio-group v-model="deviceType" @change='typeChange'>
                                <el-radio :label="1">摄像头</el-radio>
                                <el-radio :label="2">LED屏</el-radio>
                                <el-radio :label="3">WIFI</el-radio>
                                <el-radio :label="4">传感设备</el-radio>
                            </el-radio-group>
                          </div>
                          <div>
                            <el-radio-group v-model="deviceType" @change='typeChange'>
                                <el-radio :label="5">呼叫终端</el-radio>
                                <el-radio :label="6">网络音柱</el-radio>
                                <el-radio :label="7">充电桩</el-radio>
                                <el-radio :label="8">网络插座</el-radio>
                            </el-radio-group>
                          </div>
                          <span>设备信息</span>
                          <el-form :inline="true">
                              <el-form-item label="选择集中器">
                                  <el-select></el-select>
                              </el-form-item>
                              <el-form-item label="选择回路">
                                  <el-select></el-select>
                              </el-form-item>
                          </el-form>
                  </div> 
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                deviceInfo: {},
                check:{},
                code:0,
                radio:1,
                controler:{},
                cBoxShow:true,
                deviceType:1,
            }
        },
        methods: {
            radioChange(e) {
                console.log(e)
                if(e===1){
                    this.cBoxShow= true
                }else{
                    this.cBoxShow = false
                }
            },
            typeChange(e){
                console.log(e)
            }
        },
    }
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .lampBox /deep/ .el-radio{
        width: 120px;
        margin: 10px 0 0 0;
    }
</style>