<template>
  <el-row class="layout-header" type="flex" align="middle">
    <!-- 先定义一行 -->
    <el-col class="left" :span="12">
      <i class="el-icon-s-fold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="12">
      <el-row type="flex" justify="end" align="middle">
        <div class="rightImg">
          <img :src="userInfo.photo ? userInfo.photo:defaultImg " alt />
        </div>
        <!-- 下拉菜单 -->
        <el-dropdown @command="clickMenu">
          <!-- 匿名插槽  下拉菜单显示的元素内容 -->
          <span>{{userInfo.name }} </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item command="info" >个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="lgout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 定义一个用户对象
      defaultImg: require('../../assets/img/短发姑娘.jpg')
    }
  },
  created () {
    let token = localStorage.getItem('user-token')// 获取用户令牌
    this.$axios({
      url: 'user/profile',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      console.log(result)
      this.userInfo = result.data.data
    })
  },
  methods: {
    //   点击菜单项时触发
    clickMenu (command) {
      if (command === 'info') {

      } else if (command === 'git') {
        window.location.href = 'https://github.com/ye1719365002/heimatoutiao/commits/master'
      } else {
        // 退出
        window.localStorage.removeItem('user-token') // 删除令牌
        this.$router.push('/login')// 回到登录页
      }
    }
  }
}
</script>

<style lang ='less' scoped>
.layout-header {
  .left {
    font-size: 20px;
    span {
      color: #2c3e50;
      font-size: 16px;
      margin-left: 4px;
    }
  }
  .right {
    .rightImg {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
</style>
