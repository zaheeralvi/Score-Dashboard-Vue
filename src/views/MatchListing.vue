<template>
    <div class="container">
        <template v-for="(day,index) of days">
            <div class="cursor-pointer" @click="$router.push(`matches/${index}`)" :key='index'>
                <h3 class="heading"><strong class="font-bold">{{day}}</strong> <span class="font-normal">June 18</span></h3>
                <div class="listItem flex text-center text-center space-between">
                    <!-- <div class="channel w-full m-20">
                        <div class="border-right width-80">
                            <h5 class="m-0 flex items-center justify-center">
                                <strong class="mr-5">Where to watch </strong>
                                <img src="../assets/enter-black.svg" alt="">
                            </h5>
                            <p class="m-0 font-12 mb-10 color-grey">channel 7</p>
                            <img height="40px" src="../assets/sevenLogo.png" alt="logo">
                        </div>
                    </div> -->
                    <div class="w-full m-20">
                        <img height="40px" src="../assets/richmond.png" alt="logo">
                        <h5 class="m-0 mb-10"><strong>Richmond</strong></h5>
                        <!-- <div>
                            <div class="flex items-center justify-center">
                                <img width="70px" src="../assets/sportsbet.png" alt="logo">
                                <span class="custom-button flex items-center">
                                    <span>$2.31 </span>
                                    <img src="../assets/enter.svg" alt="">
                                </span>
                            </div>
                        </div> -->
                    </div>
                    <div class="w-full m-20">
                        <p class="font-12 m-0 mb-10 color-grey"><span>(AEST)</span></p>
                        <p class="mb-10 m-0"><strong>7:40</strong> <span class="color-grey">PM</span></p>
                        <p class="font-13 mb-10 m-0"><strong>MCG</strong><span>, VIC</span></p>
                        <h5 class="m-0 flex items-center justify-center">
                            <strong class="font-13 mr-5">MATCH CENTER </strong>
                            <img src="../assets/enter-black.svg" alt="">
                        </h5>
                    </div>
                    <div class="w-full m-20">
                        <img height="40px" src="../assets/hawks.png" alt="logo">
                        <h5 class="m-0 mb-10"><strong>Hawthorn</strong></h5>
                        <!-- <div>
                            <div class="flex items-center justify-center">
                                <img width="70px" src="../assets/sportsbet.png" alt="logo">
                                <span class="custom-button flex items-center">
                                    <span>$2.31 </span>
                                    <img src="../assets/enter.svg" alt="">
                                </span>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    name:'Matches',
    data(){
        return{
            days:['Thursday','Friday','Saturday']
        }
    }
}
</script>
<style scoped>
.listItem{
    box-shadow: 0 0 15px #d8d8d8;;
    border-radius: 5px;
}

</style>