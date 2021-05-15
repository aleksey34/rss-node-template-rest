const Task = require("./task.model");
const db = require("../../db/index.js");




const getAll = async (boardId) =>{
   const tasks = db.tasks.filter(t=> t.boardId === boardId)
  return tasks;
} 


const getTaskById = async (boardId , taskId) => {
  
   const task = db.tasks.find( (u)=> u.boardId === boardId  &&  u.id === taskId  )  ;
//  console.log(task);
    return task;
};

const createTask = async (boardId , taskData) => {
  
   const newTask = new Task({ ...taskData , boardId });
   const task = newTask.createTask();
// console.log(task);
db.tasks =  db.tasks.push(task);
   return task;
};
 
 

const updateTask = async (boardId , taskId ,taskData) => {
  
const task = db.tasks.find( t=> t.boardId === boardId  && t.id === taskId);

const updatedTask = Task.updateTask({...task , boardId , ...taskData });


  db.tasks = db.tasks.map(t=>t.id  ===  updatedTask.id  && t.boardId === boardId  ?  updatedTask : t )

  return updatedTask;
};



const deleteTask = async (boardId , taskId) => {

   const task = db.tasks.find( (t)=> t.boardId === boardId  &&  t.id === taskId)
 
  if(task && task.id){
       db.tasks = db.tasks.filter((t)=> t.id !== taskId );

   return  {id: taskId};

  }
      return {id:''}
  
 
  

};

module.exports = { getAll, getTaskById , createTask  , updateTask , deleteTask} ;
