const User = require("./user.model");
const db = require("../../db/index.js");




const getAll = async () => db.users;


const getUserById = async (userId) => {
  
   const user = db.users.find( (u)=>u.id === userId )  ;
//  console.log(user);
    return user;
};

const createUser = async (userData) => {
  
   const newUser = new User(userData);
   const user = newUser.createUser();
// console.log(user);
db.users =  [ ...db.users , user];
   return user;
};
 


const updateUser = async (userId , userData) => {
  // console.log(userId , "==================================")
const user = db.users.find( u=>u.id === userId);
// console.log(user);
  if(userData.login &&  user.login !== userData.login) user.login = userData.login;
  if( userData.name && user.name !== userData.name) user.name = userData.name;
  if( userData.password) user.password = userData.password;

  db.users = db.users.map(u=>u.id === userId ? user : u);


  return user;
};



const deleteUser = async (userId) => {

   const user = db.users.find( (u)=>u.id === userId)
 
  if(user && user.id){
      db.tasks = db.tasks.map(t=>{
         if(t.userId === userId){
            return {...t , userId: null};
         }
            return t;
         
      })
       db.users = db.users.filter((u)=>u.id !== userId );

   return  {id: userId};

  }
  return {id:''}
  

};
module.exports = { getAll , getUserById , deleteUser , createUser , updateUser };
