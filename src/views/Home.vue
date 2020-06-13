<template>
  <div class="homepage_container flex space-between">
    <div class="width-80">
      <div class="flex space-between">
        <div class="flex space-between direction-column">
          <SpancerBox data='Major League Sponsors' />
          <SpancerBox data='League Sponsors' />
          <SpancerBox data='League Sponsors' />
          <SpancerBox data='League Sponsors' />
        </div>
        <div class="ml-30 width-80">
          <h3 class="text-center"><strong>LADDER</strong> Ballarat Football league Seniors</h3>
          <table class="w-full">
            <thead>
              <th></th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>For</th>
              <th>Ag</th>
              <th>%</th>
              <th>p</th>
            </thead>
            <tbody>
              <tr :key="index" v-for="(tr,index) of data">
                <td>{{tr.name}}</td>
                <td>{{tr.P}}</td>
                <td>{{tr.W}}</td>
                <td>{{tr.D}}</td>
                <td>{{tr.L}}</td>
                <td>{{tr.For}}</td>
                <td>{{tr.Ag}}</td>
                <td>{{tr.per}}</td>
                <td>{{tr.p}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="Goldfields_component">
        <h2>Goldfields BFL; CHFL; MFL; TFL; Hamden DI</h2>
      </div>
    </div>
    <div class="flex space-between direction-column sm-w-full">
      <DamnAd data='Damnn Ad' />
      <TvAd data='TV Ad' />
    </div>
  </div>
</template>

<script>
import SpancerBox from '../components/sponcerBox/sponcerBox.component'
import TvAd from '../components/ads/tvAd/tvAd.component'
import DamnAd from '../components/ads/damnAd/damnAd.component'
export default {
  name: 'Home',
  components:{SpancerBox,TvAd,DamnAd},
  data(){
    return{
      data:[
        {name:'North Ballarat',P:'1',W:'2',D:'2',L:'2',For:'23',Ag:'2',per:'23',p:'32'},
        {name:'Ballarat',P:'1',W:'2',D:'2',L:'2',For:'23',Ag:'2',per:'23',p:'32'},
        {name:'Real M.',P:'1',W:'2',D:'2',L:'2',For:'23',Ag:'2',per:'23',p:'32'},
        {name:'Barcelona',P:'1',W:'2',D:'2',L:'2',For:'23',Ag:'2',per:'23',p:'32'},
        {name:'Spain',P:'1',W:'2',D:'2',L:'2',For:'23',Ag:'2',per:'23',p:'32'},
        {name:'North Ballarat',P:'1',W:'2',D:'2',L:'2',For:'23',Ag:'2',per:'23',p:'32'},
        {name:'Ballarat',P:'1',W:'2',D:'2',L:'2',For:'23',Ag:'2',per:'23',p:'32'},
        {name:'Real M.',P:'1',W:'2',D:'2',L:'2',For:'23',Ag:'2',per:'23',p:'32'},
        {name:'Barcelona',P:'1',W:'2',D:'2',L:'2',For:'23',Ag:'2',per:'23',p:'32'},
        {name:'Spain',P:'1',W:'2',D:'2',L:'2',For:'23',Ag:'2',per:'23',p:'32'},
      ]
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
.direction-column{
  flex-direction: column;
}
.width-60{
  width: 60% !important
}
.width-80{
  width: 80% !important
}
.w-full{
  width: 100%;
}
.ml-30{
  margin-left: 30px;
}
.text-center{
  text-align: center;
}
.homepage_container > div{
  margin: 10px;
  border: 1px solid #f3f3f3;
  padding: 10px;
  width: 20%;
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
  border: 1px solid #f3f3f3;
}


</style>
