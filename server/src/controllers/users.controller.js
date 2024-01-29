const { v4 } = require('uuid');

const fsPromises = require('fs/promises');
const path = require('path');
const fileData = path.resolve(__dirname, '../../data/users.json');
const usersController = {};

usersController.getAllUsers = async (req, res) => {
  try {
    const data = await fsPromises.readFile(fileData);
    const jsonData = await JSON.parse(data);
    console.log(jsonData);
    res.send(jsonData);
  } catch {
    return res.send('Error al leer archivo');
  }
};

usersController.createUser = async (req, res) => {
  try {
    const newUser = { ...req.body, userId: v4() };

    const data = await fsPromises.readFile(fileData);
    const jsonData = await JSON.parse(data);

    const usersList = [...jsonData, newUser];
    await fsPromises.writeFile(fileData, JSON.stringify(usersList));
    res.send(usersList);
  } catch {
    return res.send('Error al añadir usuario');
  }
};

usersController.updateUser = async (req, res) => {
  try {
    const data = await fsPromises.readFile(fileData);
    const jsonData = await JSON.parse(data);

    const userById = req.params.id;
    const userUpdate = req.body;

    const userIndex = jsonData.findIndex((user) => user.userId === userById);

    if (userIndex === -1) {
      return res.send('no existe el id del usuario');
    } else {
      jsonData[userIndex] = userUpdate;
    }

    await fsPromises.writeFile(fileData, JSON.stringify(jsonData));

    res.send(jsonData);
  } catch {
    return res.send('error patch');
  }
};

usersController.deleteUser = async (req, res) => {
  try {
    const data = await fsPromises.readFile(fileData);
    const jsonData = await JSON.parse(data);

    const userById = req.params.id;

    const updatedUserList = jsonData.filter((user) => user.userId !== userById);

    await fsPromises.writeFile(fileData, JSON.stringify(updatedUserList));

    res.send(updatedUserList);
  } catch {
    return res.send('error delete');
  }
};
module.exports = usersController;
