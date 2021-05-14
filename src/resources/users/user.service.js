const usersRepo = require('./user.memory.repository');



const getAll = () => usersRepo.getAll();


const getUserById = (userId) => usersRepo.getUserById(userId);

const createUser = (userData) => usersRepo.createUser(userData);

const updateUser = (userId , userData) => usersRepo.updateUser(userId , userData);


const deleteUserById = (userId) => usersRepo.deleteUserById(userId);


module.exports = { getAll , getUserById , deleteUserById  , createUser , updateUser};
