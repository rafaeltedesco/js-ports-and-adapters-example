
const createUserService = (userModel) => {
  async function getAll() {
    const users = await userModel.getAll();
    return users;
  }

  async function create(userData) {
    const newUser = await userModel.create(userData);
    return newUser;
  }

  return {
    getAll,
    create
  }
}

module.exports = {
  createUserService,
}