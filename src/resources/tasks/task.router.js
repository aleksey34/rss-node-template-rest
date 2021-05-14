const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const {boardId} = req.params;
  const tasks = await tasksService.getAll(boardId);
  // map user fields to exclude secret fields like "password"
  res.status(200);
  res.json(tasks.map(Task.toResponse));
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {

  const {boardId} = req.params;
  const {taskId} = req.params;
 
  // console.log(req.params.id);
  const task = await tasksService.getTaskById(boardId , taskId);
 
  if(task){ 
    res.status(200);
// map user fields to exclude secret fields like "password"
  res.json((Task.toResponse(task)));
  }else{
    res.status(404);
    res.json({id: ''})
  }
  
});


router.route('/:boardId/tasks').post(async (req, res) => {
  const {boardId} = req.params;
   const taskData = req.body;  

  const task = await tasksService.createTask(boardId , taskData);

  if(task.id){
    res.status(201); 
    // map user fields to exclude secret fields like "password"
    res.json((Task.toResponse(task)));
  }else{
    res.status(404);
     res.json({error: 1 });
  }
 
});


router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const {boardId} = req.params;
  const {taskId} = req.params;
  const taskData = req.body;  

 const task = await tasksService.updateTask(boardId , taskId ,taskData);

 if(task.id){
   res.status(201); 
   // map user fields to exclude secret fields like "password"
   res.json((Task.toResponse(task)));
 }else{
   res.status(404);
    res.json({error: 1 });
 }

});



router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const {boardId} = req.params;
  const {taskId} = req.params;

  const data = await tasksService.deleteTask(boardId , taskId);
  if(data.id){
    res.status(204);
    res.end(); 
  }else{
    res.status(404);
     res.json({error: 1 });
  }
  
  
});

module.exports = router;
