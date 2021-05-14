const router = require('express').Router();
const Column = require('./column.model');
const columnsService = require('./column.service');

router.route('/').get(async (req, res) => {
  const columns = await columnsService.getAll();
  // map user fields to exclude secret fields like "password"
  res.status(200);
  res.json(columns.map(Column.toResponse));
});

router.route('/:columnId').get(async (req, res) => {
  const {columnId} = req.params;
 
  // console.log(req.params.id);
  const column = await columnsService.getColumnById(columnId);
 
  if(column){ 
    res.status(200);
// map user fields to exclude secret fields like "password"
  res.json((Column.toResponse(column)));
  }else{
    res.status(404);
    res.json({id: ''})
  }
  
});


router.route('/').post(async (req, res) => {
   const columnData = req.body;  

  const column = await columnsService.createColumn(columnData);

  if(column.id){
    res.status(201); 
    // map user fields to exclude secret fields like "password"
    res.json((Column.toResponse(column)));
  }else{
    res.status(404);
     res.json({error: 1 });
  }
 
});


router.route('/:columnId').put(async (req, res) => {
  const {columnId} = req.params;
  const columnData = req.body;  

 const column = await columnsService.updateColumn(columnId ,columnData);

 if(column.id){
   res.status(201); 
   // map user fields to exclude secret fields like "password"
   res.json((Column.toResponse(column)));
 }else{
   res.status(404);
    res.json({error: 1 });
 }

});



router.route('/:columnId').delete(async (req, res) => {
  const {columnId} = req.params;

  const data = await columnsService.deleteColumn(columnId);
  if(data.id){
    res.status(204);
    res.end();
  }else{
    res.status(404);
     res.json({error: 1 });
  } 
//  map user fields to exclude secret fields like "password"
});

module.exports = router;
