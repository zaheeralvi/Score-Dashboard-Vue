<template>
  <div id="app">
    <div id="nav" class="flex space-between items-center">
      <div class="flex flex-wrap items-center space-between p-30">
        <div class="clearfix">
          <ScaleDown  left :closeOnNavigation="true" noOverlay >
            <router-link to="/">Ladder</router-link>
            <router-link to="/matches">Matches</router-link>
          </ScaleDown ></div>
      </div>
      <div>
        <img height="40px" src="./assets/logo.jpg" alt="">
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
.mr-5{
  margin-right: 5px;
}
#nav {
  padding: 20px;
  background-color: #d6d6d6;
  border-radius: 5px;
}
.justify-center{
  justify-content: center;
}
.listItem{
  border: 1px solid #d8d5d1;
  border-radius: 5px;
}
.font-normal{
  font-weight: normal;
}
.custom-button{
  cursor: pointer;
  background-color: #0054a0;
  padding: 5px 12px;
  border-radius: 5px;
  margin-left: 5px;
  color: #fff;
}
.font-bold{
  font-weight: bold;
}
.cursor-pointer{
  cursor: pointer;
}
#nav a {
  font-weight: bold;
  color: #bbb;
}
.mb-10{
  margin-bottom: 10px !important;
}
.color-grey{
  color:#d8d5d1;
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
.container{
  width: 95%;
  margin: auto;
  max-width: 1440px;
}
.m-20{
  margin: 20px;
}
.border-right{
  border-right: 1px solid #f3f3f3;
}
@media all and (max-width:900px){
  .container{
    width: 98%;
  }
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
.text-center{
  text-align: center;
}
.font-10 {font-size: 10px;}
.font-11 {font-size: 11px;}
.font-12 {font-size: 12px;}
.font-13 {font-size: 13px;}
.font-14 {font-size: 14px;}
.font-15 {font-size: 15px;}
.font-16 {font-size: 16px;}
.font-17 {font-size: 17px;}
.font-18 {font-size: 18px;}
.font-19 {font-size: 19px;}
.font-20 {font-size: 20px;}
</style>