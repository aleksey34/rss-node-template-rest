const tasksRepo = require('./task.memory.repository');



const getAll = (boardId) => tasksRepo.getAll(boardId);


 const getTaskById = (boardId , taskId) => tasksRepo.getTaskById(boardId , taskId);

 const createTask = (boardId , taskData) => tasksRepo.createTask(boardId , taskData);

 const updateTask = (boardId , taskId , taskData) => tasksRepo.updateTask(boardId , taskId ,taskData);


 const deleteTask = (boardId , taskId) => tasksRepo.deleteTask(boardId , taskId);


module.exports = { getAll  , getTaskById  , createTask , updateTask, deleteTask} ;
