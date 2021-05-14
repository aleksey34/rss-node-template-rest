const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  
  const boards = await boardsService.getAll();
 // console.log(boards);
  res.status(200);
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const {boardId} = req.params;
 
  // console.log(req.params.id);
  const board = await boardsService.getBoardById(boardId);
 
  if(board){ 
    res.status(200);
// map user fields to exclude secret fields like "password"
  res.json((Board.toResponse(board)));
  }else{
    res.status(404);
    res.json({id: ''})
  }
  
});


router.route('/').post(async (req, res) => {
   const boardData = req.body;  
// console.log(boardData);
  const board = await boardsService.createBoard(boardData);

  if(board.id){
    res.status(201); 
    // map user fields to exclude secret fields like "password"
    res.json((Board.toResponse(board)));
  }else{
    res.status(404);
     res.json({error: 1 });
  }
 
});


router.route('/:boardId').put(async (req, res) => {
  const {boardId} = req.params;
  const boardData = req.body;  

 const board = await boardsService.updateBoard(boardId ,boardData);

 if(board.id){
   res.status(201); 
   // map user fields to exclude secret fields like "password"
   res.json((Board.toResponse(board)));
 }else{
   res.status(404);
    res.json({error: 1 });
 }

});



router.route('/:boardId').delete(async (req, res) => {
  const {boardId} = req.params;

  const data = await boardsService.deleteBoardById(boardId);
 

  if(data.id){
    //  console.log(data);
    res.status(204);
    res.end(); 
  }else{
    res.status(404);
     res.json({error: 1 });
  }
  

  // map user fields to exclude secret fields like "password"
  
 
});

module.exports = router;
