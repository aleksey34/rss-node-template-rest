const columnsRepo = require('./column.memory.repository');



const getAll = () => columnsRepo.getAll();


 const getColumnById = (columnId) => columnsRepo.getColumnById(columnId);

const createColumn = (columnData) => columnsRepo.createColumn(columnData);

const updateColumn = (columnId , columnData) => columnsRepo.updateColumn(columnId , columnData);


const deleteColumn = (columnId) => columnsRepo.deleteColumn(columnId);


module.exports = { getAll   , getColumnById , deleteColumn  , createColumn , updateColumn};
