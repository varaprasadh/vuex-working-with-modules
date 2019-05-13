/*
{
    author: 'rechard',
    id: 1,
    content: 'lorem ipsum is the lorem ipsum'

  
 */

const state={
  postIndex:0,
  posts:[],
};
const getters={
  getPostIndex:(state)=>state.postIndex,
  getAllPosts:(state)=>state.posts,
  getPostByUser:(state,id)=>{
      return state.posts.filter(post=>{
          return post.id===id;
      });
  }
}


const actions={
   addPost:({commit},post)=>{
       commit('ADD_STATUS',post);
   },
   deletePost:({commit},id)=>{
       commit('DELETE_POST',id);
   },
   increasePostIndex:({commit})=>{
     commit('INCREASE_POSTiNDEX');
   }
}
const mutations={
   ADD_STATUS:(state,post)=>{
       state.posts.unshift(post);
   },
   DELETE_POST:(state,id)=>{
       state.posts=state.posts.filter(post=>{
           return post.id!==id;
       });
   },
   INCREASE_POSTiNDEX:(state)=>{
       state.postIndex++;
   }
}
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
