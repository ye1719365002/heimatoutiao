<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt="">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      list: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577448929&di=70cec2f90a8761b4a7c8990ad1412337&imgtype=jpg&er=1&src=http%3A%2F%2Fstatic.oneplus.cn%2Fdata%2Fattachment%2Fforum%2F201704%2F15%2F122635k2dge172109hq11q.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576854250040&di=e6ad734957528de95352a20c5d79479c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201312%2F23%2F20131223233319_4QUjw.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576854339757&di=411ebab395f659914c01cd7795fef023&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F8435e5dde71190ef8b8c2cb7cc1b9d16fdfa6067.jpg']
    }
  }
}
</script>

<style>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
