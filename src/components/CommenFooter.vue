<template>
<ul class="footer" :style="{backgroundColor:cur.bgColor}">
    <li class="footer-list" v-for="(item,index) in navList" :key="index" @click="$emit('choose',item)">
    <router-link :to="item.path">{{item.name}}</router-link>
    </li>
</ul>
</template>

<script>
export default {
data(){
    return {
        // curColor:'#ff0000',
    
             }
},
props: ['navList','cur']
// methods:{
//     chooseNav(_item){
//         console.log(_item);
//         this.curColor=_item.bgColor
//     }}


  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.footer{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 2rem;
    background: red;
    display: fixe;
    position: fixed;
    bottom: 0;
    left: 0;
    line-height: 2rem;
    color: #333;
    font-size: 1.5rem;
}
.footer-list{
    a{
        color: #333;
    }
    .router-link-active{
   color: #fff;//会自动把选中的下组件加上类
}
}


</style>
