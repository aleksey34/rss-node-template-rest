const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns=[] ,
   
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title , columns } = board;
    return { id, title , columns };
  }

  createBoard(){
    const currentColumns = this.columns.map(c=>({...c  , id: uuidv4()}))
    // const columnIds  = currentColumn.map(c=>{
    //     return c.id;
    //   })
    
    return {
    id: this.id ,
     title: this.title ,
      columns: currentColumns
    }
  }


}

module.exports = Board;
