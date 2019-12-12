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
        mounted(){
            this.getMonth()
        },
        methods: {
            getMonth() {
                const date = new Date()
                let y = date.getFullYear()
                let m = date.getMonth()
                localStorage.month = y+'-'+m
            }
        },
    }
</script>

<style>
    .smalltitle{
        float: left;
        left: 1%;
        vertical-align: middle;
    }
    .greytext{
        color: #949494;
        font-size: 14px;
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
    .gap{
        margin-bottom: 0.8vh;
        height:20px;line-height:20px;
        display:flex;
        justify-content:center;
        align-items:center
    }
    /* 进度条样式 */
    .el-progress /deep/ .el-progress-bar__inner,.el-progress /deep/ .el-progress-bar__outer{
        border-radius: 3px;
    }
</style>