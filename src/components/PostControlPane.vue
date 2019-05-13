<template>
    <div class="posts">
       <transition-group name="post">
          <div class="post" v-for="post in getAllPosts" :key="post.id">
            <div class="author">{{post.author}}</div>
            <div class="content">{{post.content}}</div>
            <div class="delete" @click="deletePost(post.id)">delete post</div>
          </div>    
       </transition-group>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name:"posts",
  data(){
      return{
         
      }
  },
  computed:{
      ...mapGetters('posts',{
         getAllPosts:'getAllPosts'
      })
  },
  methods:{
     ...mapActions('posts',{
         deletePost:'deletePost'
     }),
  },
  created(){
      console.log(this.getAllPosts);
  }
}
</script>

<style>
  .post{
      border: 1px solid blueviolet;
      padding: 10px;
  }
  .author{ 
      display: flex;
      justify-content: start;
      color: green;
      font-size: 1.2em;
  }
  .content{
      display: flex;
      margin: 10px;
      justify-content: start;
  }
  .delete{
      color: rgb(184, 11, 11);
      cursor: pointer;
  }
  .post-enter,.post-leave-to{
      opacity: 0;
      transform: scale(0);
  }
  .post-enter-to,.post-leave{
      opacity: 1;
      transform: scale(1);
  }
  .post-enter-active,.post-leave-active{
      transition: all .4s ease;
  }

</style>
