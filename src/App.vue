<template>
  <div id="app">
    <div class="tabs">
      <div class="user-tab"  @click="tab=1" :class="{active:tab==1}">users</div>
      <div class="posts-tab" @click="tab=2" :class="{active:tab==2}" >Posts</div>
    </div>
    <form v-if="tab==1" action="#" class="addForm">
      <input placeholder="name..." type="text" v-model="name" id="name">
      <input placeholder="age" type="text" v-model="age" id="age">
     <input class="submit" type="submit" @click="addToUsers" value="Submit">
    </form>
    <form v-else action="#" class="addForm">
      <select  id="author-select" v-model="postAuthor" >
        <option  v-for="author in getAllUsers" :key="author.id" :value="author.name">{{author.name}}</option>
      </select>
      <input placeholder="write something.." type="text" v-model="postContent" id="age">
     <input class="submit" type="submit" @click="addToPosts" value="Submit">
    </form>
    <UserControlPanel v-if="tab==1"/>
    <PostControlPanel v-else/>
    <!-- add router here with posts control -->
  </div>
</template>

<script>
 /* eslint-disable */

import UserControlPanel from './components/UserControlPanel.vue';
import PostControlPanel from './components/PostControlPane.vue';
import { mapGetters,mapState,mapActions } from 'vuex';
import { log } from 'util';

export default {
  name: 'app',
  components:{
    UserControlPanel,
    PostControlPanel
  },
  data(){
    return{
      name:null,
      age:null,
      tab:1,
      postContent:null,
      postAuthor:null
    }
  },
  computed:{
    ...mapGetters(['getUserIndex','getAllUsers']),
    ...mapGetters('posts',{
      postIndex:'getPostIndex'
    })
  },

  methods:{
    ...mapActions(['increaseUserIndex','addUser']),
    ...mapActions('posts',{
      addPost:'addPost',
      increasePostIndex:'increasePostIndex'
    }),
    addToUsers(){
      console.log("adding");
      
      if(this.name!=null && this.age !=null){
        let user={
            name:this.name,
            age:this.age,
            id:this.getUserIndex
        };
        this.name=null,this.age=null;
        this.increaseUserIndex();
        this.addUser(user);
      }
    },
    addToPosts(){
      if(this.postAuthor!=null && this.postContent!=null){
         let post={
        author:this.postAuthor,
        content:this.postContent,
        id:this.postIndex
      }
      this.postContent=null;
      this.increasePostIndex();
      this.addPost(post);
      }
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tabs{
  display: flex;
  justify-content: center;
}
.tabs >div{
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  border: 1px solid rgb(3, 112, 112);
  margin: 10px;
  padding: 10px;
  font-weight: bold;
}
select{
  
}
.tabs>div.active{
  background: rgb(9, 90, 90);
  color: white;
}

  input{
    padding:5px;
    border: none;
    border-bottom: 1px solid blueviolet;
    margin: 10px;
  }
  input:focus{
    outline: none;
  }
  .submit{
    cursor: pointer;
    border:none;
    padding: 10px;
    background:rgb(1, 83, 1);
    color: white;
  }

</style>
