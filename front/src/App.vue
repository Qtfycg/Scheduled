<script setup>
const url = "src\components\login.jpg"
</script>

<template>

<template>
  <div class="login">  //登录页面
    <el-container>
        <div class="building"></div>
      <!-- 主要部分 -->
      <el-main>
        <div class="login-imge">

        </div>
      </el-main>
    </el-container>
  </div>
</template>

</template>

<style scoped>
#app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}
body{
  margin:0;
  padding:0;
  border:0
}
#building{
  background:url("../src/components/login.jpg");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}

</style>
