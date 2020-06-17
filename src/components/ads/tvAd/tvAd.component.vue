<template>
    <div class="tvAd">
        <h4>{{data}}</h4>
    </div>
</template>
<script>
export default {
    name:'TvAd',
    props:['data']
}
</script>
<style>
.tvAd{
    padding: 20px 15px 30px;
    box-shadow: 0px 0px 6px #e6e6e6;
    border-radius: 5px;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: bold;
    min-height: 150px;
    background-color: #d6d6d6;
}
@media screen and (max-width: 900px) {
   .tvAd{
        width: 200px;
        margin: 0 0 20px 20px;
   }
}
</style>