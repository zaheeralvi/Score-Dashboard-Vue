<template>
    <div class="DamnAd">
        <h4>{{data}}</h4>
    </div>
</template>
<script>
export default {
    name:'DamnAd',
    props:['data']
}
</script>
<style>
.DamnAd{
    min-height: 300px;
    height: calc(100% - 170px);
    padding: 20px 15px 30px;
    box-shadow: 0px 0px 6px #e6e6e6;
    border-radius: 5px;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: bold;
}
@media screen and (max-width: 900px) {
   .DamnAd{
        width: 200px;
        margin: 0 20px 20px 0;
   }
}
</style>