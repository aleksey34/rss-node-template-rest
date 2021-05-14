


const users = [
    {id:"12", name: 'vasy' , login:"this is login"},
    {id:'121', name: 'vasy' , login:"this is login"},
    {id:'1', name: 'vasy' , login:"this is login"}
  ]

  const boards = [
     { id: "2414" , title: "this board" , columns: 2},
     { id: "24" , title: "this board" , columns: 2},
     { id: "2" , title: "this board" , columns: 2},
  ]

  const tasks = [
    {
    id: '1' , 
    title: 'task title',
    order: '3',
    description: "task deskpription",
    userId: '2', // assignee
    boardId: '2',
    columnId: "23"
    },
    {
        id: '2' , 
        title: 'task title',
        order: '3',
        description: "task deskpription",
        userId: '2', // assignee
        boardId: '22',
        columnId: "23"
        }
  ]

  const columns = [
    { id: '2', title: 'this is title of column', order: '2' } ,
     { id: '1', title: 'this is title of column', order: '2' }
  ]






module.exports = { users, boards , tasks , columns };