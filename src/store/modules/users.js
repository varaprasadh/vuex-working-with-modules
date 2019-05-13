
const state={
    userIndex:0,
    users:[
      
    ]
}

const getters={
   getAllUsers:state=>state.users,
   getUserIndex:state=>state.userIndex
}
const actions={
    addUser:({commit},userData)=>{
        commit('addUser',userData)
    },
    increaseUserIndex:({commit})=>{
        commit('increaseUserIndex')
    },
    deleteUser:({commit},id)=>{
        commit('deleteUser',id);
    }
}
const mutations={
  increaseUserIndex:state=>state.userIndex++,
  addUser: (state, userData) => {
      state.users.unshift(userData)
  },
  deleteUser:(state,id)=>{
      state.users=state.users.filter(user=>{
          return user.id!==id;
      });
  } 
}
export default {
    namespaced:false,
    state,
    getters,
    actions,
    mutations
};
