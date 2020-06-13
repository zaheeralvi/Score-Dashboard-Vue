<template>
  <div id="app">
    <div id="nav">
      <div class="flex items-center space-between p-30">
        <div>
          <img height="40px" src="./assets/logo.jpg" alt="">
        </div>
        <div class="clearfix">
          <ScaleDown  right :closeOnNavigation="true" noOverlay >
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
          </ScaleDown ></div>
      </div>
    </div>
    <div id="page-wrap">
      <router-view/>
    </div>
  </div>
</template>
<script>
import {  ScaleDown } from 'vue-burger-menu' 

export default {
  name:'app',
  components:{ScaleDown}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 5px;
}

#nav a {
  font-weight: bold;
  color: #bbb;
}
.flex{
  display: flex;
}
.space-between{
  justify-content: space-between;
}
.space-around{
  justify-content: space-around;
}
.items-center{
  align-content: center;
}

#nav a.router-link-exact-active {
  color: #fff;
}
.m-0{
  margin: 0;
}
.w-full{
  width: 100%;
}
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
@media all and (max-width:900px){
  .flex{
    flex-wrap: wrap;
  }
  .direction-column{
    flex-direction: row !important;
  }
  .homepage_container  div.width-80{
    width: 100% !important;
  }
  .homepage_container  div.width-20{
    width: 100% !important;
  }
  .sm-w-full{
    width: 100%;
  }
  .homepage_container > div{
    width: 100% !important;
  }
}
</style>
