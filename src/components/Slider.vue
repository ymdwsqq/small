<template>
  <div class="slider">
   
   <!-- <ul class="slider-wrapper"> -->
     <transition-group class="slider-wrapper" name="fade" tag="ul">

  
     <li class="slider-list" v-for="(item,index) in imgs " :key="index" v-show="tag == index">
       <img :src="item" alt="">
     </li>   
     </transition-group>
   <!-- </ul> -->
   
  </div>
</template>

<script>
export default{
  data(){
    return{
      tag:0
    }
  },
  props:['imgs'],
  created(){
    setInterval(() => {
      this.tag++;
      if(this.tag==this.imgs.length){
        this.tag=0;
      }
    }, 1000);
  }
}


</script>


<style scoped lang="scss">
.slider-list{
  top: 0;
position: absolute;
  // width:30rem;
  // height: 24rem;
}
.slider-wrapper{
  overflow:hidden;
  height: 24rem;
  position: relative;
}
img{
  width: 100%;
}
.fade-enter{
  transform: translateX(-100%);
}
.fade-enter-to{
  transform: translateX(0);

}
.fade-enter-active{
  transition: transform 1s ease;
}
.fade-leave{
  transform: translateX(0);
}
.fade-leave-to{
  transform: translateX(100%);
}
.fade-leave-active{
    transition: transform 1s ease;
}

</style>
