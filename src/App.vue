<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>


export default {
  name: 'app', 
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
.slide-fade-enter-active {
  transition: all 1.5s ease;
}
.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(1000px);
  opacity: 0;
}
.hello .el-table .warning-row {
  background: oldlace;
}

.hello .el-table .success-row {
  background: #f0f9eb;
}
.hello .el-table th > .cell {
  text-align: center;
}
.el-step__icon-inner{
  padding: 10px;
}
.router-link{
  color:#303133;
  text-decoration: none;
}
</style>
