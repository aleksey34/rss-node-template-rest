const Column = require("./column.model");
const db = require("../../db/index.js");




const getAll = async () => db.columns;


const getColumnById = async (columnId) => {
  
   const column = db.columns.find( (c)=>c.id === columnId )  ;
//  console.log(user);
    return column;
};

const createColumn = async (columnData) => {
  
   const newColumn = new Column(columnData);
   const column = newColumn.createColumn();
// console.log(user);
db.columns =  [ ...db.columns , column];
   return column;
};
 


const updateColumn = async (columnId , columnData) => {
 
const column = db.columns.find( c=>c.id === columnId);

  if(columnData.title &&  column.title !== columnData.title) column.title = columnData.title;
  if( columnData.order && column.order !== columnData.order) column.order = columnData.order;

  db.columns = [...db.columns , column];

  return column;
};



const deleteColumn = async (columnId) => {

   const column = db.columns.find( (c)=>c.id === columnId)
 
  if(column && column.id){
       db.columns = db.columns.filter((c)=>c.id !== columnId );

   return  {id: columnId};

  }
     return {id:''}
  
  
};
module.exports = { getAll, getColumnById , deleteColumn , createColumn , updateColumn };
