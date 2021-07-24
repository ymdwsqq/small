<template>
  <div class="movie">
   <ul class="movie-wrapper">
       <li class="movie-list" v-for="(item,index) in movieList" :key=index @click="goDetails(item)">
           <img :src="item.cover" alt="">
           <div class="movie-info">
               <h4>{{item.title}}</h4>
            
                <p>演员{{item.id}}</p>
                <p>评分：{{item.rate}}</p>
                <p>上映时间</p>
           </div>
       </li>
   </ul>
   <div class="movie-loading" v-show="loadingStatus">
       <img src="../assets/imgs/1.gif" alt="">
   </div>
  </div>
</template>
    
<script>
// @ is an alias to /src
import axios from 'axios'
export default {
    data(){
return{
    movieList:[],
    loadingStatus:true
}
    },
  components: {
   
  },
  methods:{
      getList(){
          this.loadingStatus=true
          axios.get(`https://bird.ioliu.cn/v1?url=https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_start=${this.movieList.length}&count=10`)

      .then((res)=>{
          console.log(res);
        this.loadingStatus=false
          this.movieList=[...this.movieList,...res.data.subjects]
      }).catch((error)=>{
       this.loadingStatus=false
          console.log(error);
      })

      },
      goDetails(_data){
         
          this.$router.push(`/details/${_data.id}`)
      }
  },
  created(){
     this.getList();
        window.onscroll=()=>{
let top=document.documentElement.scrollTop;

let height=document.documentElement.clientHeight;
let tall=document.documentElement.scrollHeight;
console.log(top,height,tall);
if(top+height==tall){
    this.getList();
}
  }
  }

}

</script>
<style lang="scss" scoped>
.movie-list{
//    margin: 0 auto;
   width: 28.4rem;
   padding: .8rem 0;
   position: relative;
   display: flex;
   &::after{
       content: '';
       display: block;
       width: 100%;
       border-bottom: 1px solid #333;
       transform: scaleY(0.5);
       position:absolute;
       left: 0;
       bottom: 0;
   }
   img{
       width: 8rem;
       height: 12rem;
       background: black;
   }
   .movie-info{
       flex-grow: 1;
       padding-left: .8rem;
   }
   
}
.movie-loading{
       width: 8rem;
       height: 8rem;
       background: rgba(255,255,255,0.6);
       position: fixed;
       top: 50%;
       left: 50%;
       line-height: 8rem;
       margin: -4rem 0 0 -4rem;
       text-align: center;
       vertical-align: middle;
   }
    .movie-loading>img{
        width: 4rem;
        height: 4rem;

    }
</style>
