<template>
  <div class="book">
    <slider :imgs="imgs"></slider>
    <!-- <swipe class="my-swipe">
  <swipe-item v-for="(item,index) in imgs" :key="index" class="slide1">
    <img :src="item" alt="">
  </swipe-item> -->
<!-- <swipe-item class="slide2"></swipe-item>
  <swipe-item class="slide3"></swipe-item> -->
<!-- </swipe> -->
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
import slider from '../components/Slider.vue';

export default {
  data(){
    return{
      imgs:[
        "https://img3.doubanio.com/lpic/s24478373.jpg",
        "https://img3.doubanio.com/lpic/s27102925.jpg",
        "https://img3.doubanio.com/lpic/s6989253.jpg"
]
    }
  },
  components: {
    Swipe,
    SwipeItem,
    slider
    
  }
}
</script>
<style lang="scss" scoped>
.book{
width:100%;
height: 24rem; 
}
</style>