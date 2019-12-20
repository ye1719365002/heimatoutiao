<template>
<!-- 放置一个容器 -->
    <el-container>
      <!-- 左右布局 -->
        <el-aside style="background-color:#323745; height:100vh;width:230px">
          <layout-aside></layout-aside>
        </el-aside>
        <!-- 右侧容器 -->
    <el-container>
      <!-- 上下布局 -->
      <el-header>
        <!-- 头部组件 -->
        <layout-header></layout-header>
      </el-header>
      <el-main>
       <!-- 二级路由容器 -->
       <router-view></router-view>
      </el-main>
    </el-container>

    </el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
import layoutHeader from '../../components/home/layout-header'

export default {
  components: {
    'layout-aside': layoutAside, // 全局注册
    'layout-header': layoutHeader// 全局注册
  }
}
</script>

<style>

</style>
