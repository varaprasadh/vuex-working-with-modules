<template>
  <div class="hello">
    <ul class="users">
      <transition-group name="item">
         <li v-for="user in getAllUsers" :key="user.id" class="user">
          <div class="id">{{user.id}}</div>
          <div class="name">{{user.name}}</div>
          <div @click="deleteUser(user.id)" class="delete">delete</div> 
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'HelloWorld', 
  computed:{
    ...mapGetters(['getAllUsers']),
  },
  methods:{
    ...mapActions(['deleteUser']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .users{
    list-style-type: none;
  }
  .user{
    display: flex;
    justify-content: space-between;
    border:1px solid mediumpurple;
    padding: 10px 20px;
    margin: 10px;
    will-change:position;
  }
  .delete{
    color: rgb(143, 7, 7);
    cursor: pointer;
  }
  .item-enter{
      opacity: 0;
      transform: translateX(-100%);
  }
  .item-enter-active{
    transition: all .3s linear ;
  }
  .item-leave-active{
    transition: all .3s linear ;
  
  }
 .item-leave,.item-enter-to{
   opacity: 1;
   transform: translateX(0%);
 }
.item-leave-to{
      transform: translateX(100%);
      background: red;
}


</style>
