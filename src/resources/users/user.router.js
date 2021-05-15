const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.status(200);
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const {userId} = req.params;
 
  // console.log(req.params.id);
  const user = await usersService.getUserById(userId);
 
  if(user){ 
    res.status(200);
// map user fields to exclude secret fields like "password"
  res.json((User.toResponse(user)));
  }else{
    res.status(404);
    res.json({id: ''})
  }
  
});


router.route('/').post(async (req, res) => {
   const userData = req.body;  

  const user = await usersService.createUser(userData);

  if(user.id){
    res.status(201); 
    // map user fields to exclude secret fields like "password"
    res.json((User.toResponse(user)));
  }else{
    res.status(404);
     res.json({error: 1 });
  }
 
});


router.route('/:userId').put(async (req, res) => {
  const {userId} = req.params;
  const userData = req.body;  

 const user = await usersService.updateUser(userId ,userData);

 if(user.id){
   res.status(200); 
   // map user fields to exclude secret fields like "password"
   res.json((User.toResponse(user)));
 }else{
   res.status(404);
    res.json({error: 1 });
 }

});



router.route('/:userId').delete(async (req, res) => {
  const {userId} = req.params;

  const data = await usersService.deleteUser(userId);
  if(data.id){
    res.status(204);
    res.end();
  }else{
    res.status(404);
     res.json({error: 1 });
  }
  

  // map user fields to exclude secret fields like "password"
  
 
});

module.exports = router;
