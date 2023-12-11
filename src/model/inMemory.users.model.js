

const users = [{id: 1, name: 'Rafael'}, { id: 2, name: 'Felipe'}]

const getAll = async () => {
  return users;
}

const create = async (userData) => {
  const newUser = {
    id: users.length + 1,
    ...userData
  }
  users.push(newUser);
  return newUser;
}



module.exports = {
  getAll,
  create
}