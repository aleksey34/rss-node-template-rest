const Board = require("./board.model");
const db = require("../../db/index.js");




const getAll = async () => db.boards;


const getBoardById = async (boardId) => {
  
   const board = db.boards.find( (u)=>u.id === boardId )  ;
//  console.log(user);
    return board;
};

const createBoard = async (boardData) => {
//   console.log(boardData);
   const newBoard = new Board(boardData);
   const board = newBoard.createBoard();
   

// console.log(board);
db.boards =  [ ...db.boards , board];
   return board;
};
 


const updateBoard = async (boardId , boardData) => {
 
const board = db.boards.find( b=>b.id === boardId);

  if(boardData.title &&  board.title !== boardData.title) board.title = boardData.title;
  if( boardData.columns && board.columns) board.columns = boardData.columns;


  db.boards = db.boards.map(b=>b.id === boardId ? board : b)
 
  return board;
};


const deleteBoard = async (boardId) => {

   const board = db.boards.find( (b)=>b.id === boardId)
 
  if(board && board.id){

       db.boards = db.boards.filter((b)=>b.id !== boardId );
       db.tasks = db.tasks.filter((t)=>t.boardId !== boardId);

   return  {id: boardId};

  }
     return {id:''}
  
};


module.exports = { getAll , getBoardById , deleteBoard , createBoard , updateBoard };