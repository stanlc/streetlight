<template>
    <div>
        <el-form :inline="true">
            <el-form-item label="任务名称">
                <el-input v-model="taskName"></el-input>
            </el-form-item>
            <el-button>查询</el-button>
            <el-button @click="EditTerminalVisible=true">设置到集中器</el-button>
            <el-button>日出日落任务</el-button>
            <div class="right">
                <el-button>添加</el-button>
                <el-button>删除</el-button>
            </div>
            <el-table :data="taskList" ref="table" :height="tableHeight">
                <el-table-column label="选择" prop="name"  type="selection"></el-table-column>
                <el-table-column label="任务"  type="index"></el-table-column>
                <el-table-column label="任务名称" prop="name"></el-table-column>
                <el-table-column label="任务类型" prop="name"></el-table-column>
                <el-table-column label="操作对象" prop="name"></el-table-column>
                <el-table-column label="执行时间" prop="name"></el-table-column>
                <el-table-column label="任务模式" prop="name"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="del(scope.row)" type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-form>
        <div class="page">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15,20]"
            :page-size="pagesize"
            layout="total, prev, pager, next,sizes,jumper"
            background
            :total="totalCount">
            </el-pagination>
        </div>

        <!-- 设置到集中器开始 -->
        <el-dialog
        title="设置到集中器"
        :visible.sync="EditTerminalVisible"
        width="65%"
        :before-close="EditClose" v-model="editTerminalForm"
        center>
        <div class="formBox">
            <el-form :inline="true" >
                <el-form-item label="任务">
                    <el-select v-model="editTerminalForm.tasklName">
                        <el-option label="任务1" value="11"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="区域">
                    <el-select  v-model="editTerminalForm.region">
                        <el-option label="区域1" value="11"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="组名称">
                    <el-input  v-model="editTerminalForm.groupName"></el-input>
                </el-form-item>
                <el-form-item label="集中器名称">
                    <el-input  v-model="editTerminalForm.tName"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button>搜索</el-button>
                    <el-button>设置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="EditTerminalVisible = false">取 消</el-button>
            <el-button type="primary" @click="EditTerminalVisible = false">确 定</el-button>
        </span>
        </el-dialog>
        <!-- 设置到集中器结束 -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                taskName:'aa',
                tableHeight:800,
                currentPage:1,
                pagesize:10,
                totalCount:10,
                searchForm:{
                    'pageNum':1,
                    'pageSize':10,
                },
                editTerminalForm:{},
                EditTerminalVisible:false,
                taskList: [
                    {
                        name:'aa'
                    },
                ]
            }
        },
        mounted(){
            this.tabelChange()
        },
        methods: {
            del(row) {
                console.log(row)
            },
            //tabel高度
            tabelChange(){
            this.$nextTick(function () {
                this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 0.15*window.innerHeight;
                
                // 监听窗口大小变化
                let self = this;
                window.onresize = function() {
                    self.tableHeight = window.innerHeight - self.$refs.table.$el.offsetTop -  0.15*window.innerHeight
                }
            })
            //this.$refs.table.$el.offsetTop：表格距离浏览器的高度
    　　　　 //50表示你想要调整的表格距离底部的高度（你可以自己随意调整），因为我们一般都有放分页组件的，所以需要给它留一个高度　
            }, 
            //分页
            handleSizeChange(val) {
                this.pagesize = val
                this.searchForm.pageSize = val
            },
            handleCurrentChange(val) {
                this.currentPage = val
                this.searchForm.pageNum = val
            },
        },
  
    }
</script>

<style scoped>
    .right{
        float: right;
    }
    .page{
        position: absolute;
        bottom: 20px;
    }
    .formBox /deep/ .el-input__inner{
        width: 100px;
        height: 25px;
        line-height: 25px;
    }
</style>