<template>
    <div class="SpancerBox">
        <h4>{{data}}</h4>
    </div>
</template>
<script>
export default {
    name:'SpancerBox',
    props:['data']
}
</script>
<style scoped>
.SpancerBox{
    padding: 20px 15px 30px;
    box-shadow: 0px 0px 6px #e6e6e6;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: bold;
    height: 100%;
    border-radius: 5px;
}
@media screen and (max-width:900px){
  .SpancerBox{
    height: 110px;
    width: 120px;
    margin: 15px;
  }
}
</style>