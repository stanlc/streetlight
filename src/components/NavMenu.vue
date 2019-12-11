<template>
    <div>
          <el-menu 
          class="el-menu-demo" 
          mode="horizontal" 
          :default-active="$route.path"
          text-color="#000"
          active-text-color="#333499"
          router
          >
          <el-menu-item v-for="item in menuList" :key="item.index" :index="item.path" >{{item.name}}</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuList: [
                {
                    name:'首页',
                    path:'/info'
                },
                {
                    name:'设备列表',
                    path:'/deviceList'
                },
                {
                    name:'执行计划',
                    path:'/plan'
                },                {
                    name:'设备报警',
                    path:'/alarm'
                },                {
                    name:'节目中心',
                    path:'/center'
                }, 
                {
                    name:'操作日志',
                    path:'/log'
                },                {
                    name:'数据统计',
                    path:'/data'
                }],

            }
        },
    }
</script>

<style scoped>
    .el-menu--horizontal>.el-menu-item{
       width: 10vw;
       font-weight: 400;
    }
    .el-menu.el-menu--horizontal {
        border-bottom: solid 1px #fff;
    }
    .el-menu{
        background: #f1f1f1;
    }
</style>