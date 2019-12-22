<template>
  <!-- 封装原来的el-breadcrumb -->
  <el-breadcrumb separator=">s">
      <el-breadcrumb to='/home' >首页</el-breadcrumb>
      <el-breadcrumb-item>
          <!-- 定义一个具名插槽 -->
          <slot name="title" ></slot>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
