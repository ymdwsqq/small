<template>
  <div id="app">
    <common-header :cur="cur" :select-nav="selectNav"> <!--穿的select方法 给header 
    接收  然后在header里获取 -->


    </common-header>
    <div id="app-container">
      <router-view></router-view>
    </div>

    <common-footer :nav-list="navList" @choose="selectNav" :cur="cur"></common-footer>

  </div>
</template>
<script>
import commonHeader from '@/components/CommenHeader.vue'
import commonFooter from '@/components/CommenFooter.vue'
import axios from 'axios'
import {mapMutations} from 'vuex'
export default {
  data(){
return{
  cur:{   name:'电影',
        path:'/movie',
        bgColor:'#ff0000'//,默认给的一个值
        },
  navList :[
    {
        name:'电影',
        path:'/movie',
        bgColor:'#ff0000'
    },
    {
        name:'音乐',
        path:'/music',
        bgColor:'#ff00ff'
    },
    {
        name:'书籍',
        path:'/book',
        bgColor:'#ff0036'
    },
    {
        name:'图片',
        path:'/photo',
        bgColor:'#ff8907'
    }
             ],
             plist:[]
}
  },
  methods:{
    ...mapMutations(['setPhotoList']),
selectNav(_data){
  this.cur=_data

}

  },
  components:{
    commonHeader,
    commonFooter
  },
  created(){
    this.navList.forEach((item)=>{
      if(item.path==this.$route.path)
      {this.cur=item
    } else if(this.$route.path=='/musiclist'){
      this.cur={
        name:'音乐',
        path:'/music',
        bgColor:'#ff00ff'
      }
    }else if (this.$route.path.includes('/photodetails')){
       this.cur={
         name:'图片',
        path:'/photo',
        bgColor:'#ff8907'
       }
    }
    }
    )
axios.get('/data/photodata.json')
    .then(res=>{
console.log(res);
if(res.status*1===200){
this.plist=res.data.photoData
this.setPhotoList(this.plist)
}else {
  alert(res.statusText)
}
    }) 
    .catch(err=>{

    })

  }
  
}
</script>

<style lang="scss"> 
#app-container{
  margin: 2rem auto;

}
</style>
