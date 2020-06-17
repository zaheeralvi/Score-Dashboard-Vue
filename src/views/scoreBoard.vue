<template>
  <div class="homepage_container flex space-between">
    <div class="width-80">
      <div class="relative flex space-between">
        <div class="leftSidebar">
          <SpancerBox class="floating-component top right" data='Club Sponsors' />
          <SpancerBox class="floating-component top left" data='Club Sponsors' />
          <SpancerBox class="floating-component bottom right" data='League Sponsors' />
          <SpancerBox class="floating-component bottom left" data='League Sponsors' />
        </div>
        <div class="title-header font-20 text-center">
            <h6 class="font-15 m-0">REDAN V NORTH Ballarat <span class="ml-30">City Oval</span></h6>
        </div>
        <div class="middle-circle flex items-center">
            <div class="text-center flex items-center direction-column">
                <div class="mb-20">
                    <strong>17</strong>
                    <p>Johns</p>
                </div>
                <div class="mb-20">
                    <strong>29</strong>
                    <p>Burns</p>
                </div>
                <div class="mb-20">
                    <strong>4</strong>
                    <p>McDonald</p>
                </div>
            </div>
        </div>
      </div>
      <div class="Goldfields_component">
        <h4>BFL Res  NB 14.8.92  v RED 12.7.78</h4>
        <h4>CHFL Res  NB 14.8.92  v RED 12.7.78</h4>
      </div>
    </div>
    <div class="flex space-between direction-column">
      <RightTable :data='tableData' />
      <TvAd data='TV Ad' />
    </div>
  </div>
</template>

<script>
import SpancerBox from '../components/sponcerBox/sponcerBox.component'
import TvAd from '../components/ads/tvAd/tvAd.component'
import RightTable from '../components/ads/RightTable/RightTable.component'
export default {
  name: 'ScoreBoard',
  components:{SpancerBox,TvAd,RightTable},
  data(){
    return{
        tableData:{
            table: [
                {a:'1',b:'2',c:'23'},
                {a:'1',b:'2',c:'23'},
                {a:'1',b:'2',c:'23'},
                {a:'1',b:'2',c:'23'},
                {a:'1',b:'2',c:'23'},
            ],
            table1: [
                {a:'1',b:'2',c:'23'},
                {a:'1',b:'2',c:'23'},
                {a:'1',b:'2',c:'23'},
                {a:'1',b:'2',c:'23'},
                {a:'1',b:'2',c:'23'},
            ]
        },
    }
  }
}
</script>
<style scoped>
.flex{
  display: flex;
}
.space-between{
  justify-content: space-between;
}
.items-center{
    align-items: center;
}
.flex-wrap{
    flex-wrap: wrap;
}
.direction-column{
  flex-direction: column;
}
.width-60{
  width: 60% !important
}
.width-80{
  width: 79% !important
}
.w-full{
  width: 100%;
}
.ml-30{
  margin-left: 30px;
}
.mb-20{
  margin-bottom: 20px;
}
.text-center{
  text-align: center;
}
.homepage_container > div{
  margin: 10px;
  /* border: 1px solid #f3f3f3; */
  padding: 10px;
  width: 20%;
}
.font-15{
    font-size: 15px;
}
.relative{
    position: relative;
}
.floating-component{
    position: absolute;
    height: 100px;
}
.left{
    left: 0;
}
.right{
    right: 0;
}
.bottom{
    bottom: 0;
}
.top{
    top: 0;
}
table{
  margin-top: 40px;
}
tr{
  line-height: 2;
}
th{
  text-align: left;
}
.Goldfields_component{
  margin-top: 30px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #e6e6e6;
}
.middle-circle{
  background: url(../assets/groundbg.jpg) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  height: 600px;
  width: 600px;
  margin: 80px auto auto;
  box-shadow: 0 0 14px #e3e3e3;
  border-radius: 100%;
}
.title-header{
    position: absolute;
    left: 0;
    right: 0;
    width: 350px;
    margin: auto;
    padding: 20px;
    background: #424242;
    border-radius: 5px;
}
.middle-circle > div{
    padding-left: 50px;
}
@media screen and (max-width:1250px) {
  .middle-circle{
      height: 400px;
      width: 400px;
  }
}
@media screen and (max-width:1000px) {
    .floating-component{
        position: relative;
    }
    .width-80{
        width: 100%;
    }
    .title-header{
      left: unset;
    }
}
@media screen and (max-width:650px) {
  .middle-circle{
    margin-top: 40px;
  }
  .middle-circle .text-center.flex.items-center.direction-column > div{
    margin-right:30px ;
  }
  .title-header{
    position: relative;
    margin-top: 30px;
  }
  .leftSidebar{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
