const boardsRepo = require('./board.memory.repository');



const getAll = () => boardsRepo.getAll();


const getBoardById = (boardId) => boardsRepo.getBoardById(boardId);

const createBoard = (boardData) => boardsRepo.createBoard(boardData);

const updateBoard = (boardId , boardData) => boardsRepo.updateBoard(boardId , boardData);


const deleteBoard = (boardId) => boardsRepo.deleteBoard(boardId);


module.exports = { getAll , getBoardById , deleteBoard  , createBoard , updateBoard};
