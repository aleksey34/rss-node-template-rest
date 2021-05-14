const { v4: uuidv4 } = require('uuid');

class Column {
  constructor({
    id = uuidv4(),
    title = 'column title',
    order = '2',
  
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(column) {
    const { id, title, order } = column;
    return { id, title, order };
  }

  createColumn(){
    return {
    id: this.id ,
     title: this.title ,
      order: this.order,
    }
  }


}

module.exports = Column;
