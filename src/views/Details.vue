<template>
  <div class="details">
   <!-- {{$route.params.id}} -->
   {{details}}
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'


export default {
    data(){
        return{
            details:[]
        }
    },
created(){
axios.get(`https://bird.ioliu.cn/v1?url=https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend`+this.$route.params.id)
.then(res =>{
    console.log(res);
    this.details=res.config.url
}).catch(err=>{
    console.log(err);
})
},
  components: {

  }
}
</script>
