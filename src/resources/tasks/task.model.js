const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({
    id = uuidv4(),
    title='task title',
    order='1',
    description= "task deskpription",
    userId= '1', 
    boardId= '1',
    columnId= "4"

  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId , columnId } = task;
    return {  id, title, order, description, userId, boardId , columnId };
  }

  static updateTask(task){
    const { id, title, order, description, userId, boardId , columnId } = task;
    return {  id, title, order, description, userId, boardId , columnId };
  }

  createTask(){
    return {
      id: this.id, 
      title: this.title,
       order: this.order,
        description: this.description,
         userId: this.userId,
          boardId: this.boardId ,
           columnId: this.columnId
    }
  }


}

module.exports = Task;
