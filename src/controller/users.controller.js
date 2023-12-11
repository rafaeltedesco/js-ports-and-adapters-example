
const createController = (userService) => {
  async function getAll(req, res) {
    const users = await userService.getAll();
    return res.status(200).json(users);
  }

  async function create(req, res) {
    const newUser = await userService.create(req.body);
    return res.status(201).json(newUser);
  }

  return {
    getAll,
    create
  }
}

module.exports = {
  createController,
}