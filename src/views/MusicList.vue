<template>
  <div class="music">
 12123
 <aplayer autoplay
  :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: 'http://m701.music.126.net/20210723224912/05612e0cf5b2b1034a07ade14957863b/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8780258473/8bb5/2685/6982/0f73a1f9e819337395bd80373dbbeda4.mp3',
    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg',
    lrc: 'http://192.168.31.224:8080/lrc/secret.lrc'
  }"
  :list="musiclist"
 autoplay:true
  showLrc
/>
  </div>
</template>

<script>
// @ is an alias to /src

import Aplayer from 'vue-aplayer'
import axios from 'axios'
export default {
data(){
    return{
        musiclist:[]
    }
},
components:{
      Aplayer
},
created(){
  axios.get('data/musicdata.json')
  .then(res=>{
console.log(res);
if(res.status*1==200){
  
  this.musiclist=res.data.musicData
}else{
  alert('error')
}
  })
  .catch(err=>{

  })
}
   
}
  

</script>