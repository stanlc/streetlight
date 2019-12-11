<template>
    <div>
        <nav-menu></nav-menu>
        <router-view/>
    </div>
</template>

<script>
    import NavMenu from '@/components/NavMenu.vue'
    export default {
        data() {
            return {
               
            }
        },
        components: {
            NavMenu,
        },
    }
</script>

<style>
    .smalltitle{
        float: left;
        left: 1%;
        color: #000;
        font-size: 16px;
    }
    .bigtitle{
        text-align:left;
        font-size:20px;
        margin-bottom:10px;
    }
    .bar {
        width: 50%;
        display: inline-block;
        margin:0 15px;
        vertical-align: middle;
    }
    /* 进度条样式 */
    .el-progress /deep/ .el-progress-bar__inner,.el-progress /deep/ .el-progress-bar__outer{
        border-radius: 5px;
    }
</style>