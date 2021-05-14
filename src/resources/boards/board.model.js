const { v4: uuidv4 } = require('uuid');

class Board {
  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns='4' 
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
    return {
    id: this.id ,
     title: this.title ,
      columns: this.columns
    }
  }


}

module.exports = Board;
