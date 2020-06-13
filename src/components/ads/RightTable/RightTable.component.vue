<template>
    <div class="RightTable">
        <h4 class="underLine">Last 5 Games</h4>
        <table class="w-full">
            <tr :key='index' v-for="(tr,index) of data.table">
                <td>{{tr.a}}</td>
                <td>{{tr.b}}</td>
                <td>{{tr.c}}</td>
            </tr>
        </table>
        <h4 class="pt-30 underLine">Next 5 Games</h4>
        <table class="w-full">
            <tr :key='index' v-for="(tr,index) of data.table1">
                <td>{{tr.a}}</td>
                <td>{{tr.b}}</td>
                <td>{{tr.c}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name:'RightTable',
    props:['data']
}
</script>
<style scoped>
.RightTable{
    min-height: 300px;
    height: calc(100% - 170px);
    padding: 20px 15px 30px;
    box-shadow: 0px 0px 6px #e6e6e6;
    border-radius: 5px;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: bold;
}
.underLine{
    margin: 15px 0;
    text-decoration: underline;
}
</style>