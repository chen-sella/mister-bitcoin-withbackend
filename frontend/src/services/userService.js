import { storageService } from './async-storage.service.js';

export const userService = {
  getUserById,
  signup,
  login,
  addMove,
  getLoggedinUser,
};

const STORAGE_KEY = 'user';

const gDefaultUsers = [
  {
    _id: 'u101',
    name: 'Chen Sella',
    coins: 100,
    moves: [
      {
        toId: '5a56640269f443a5d64b32ca',
        to: 'Ochoa Hyde',
        at: 167666874,
        amount: 15,
      },
      {
        toId: '5a56640269f443a5d64b32ca',
        to: 'Ochoa Hyde',
        at: 1876668749,
        amount: 28,
      },
      {
        toId: '5a5664025f6ae9aa24a99fde',
        to: 'Hallie Mclean',
        at: 1976668749,
        amount: 18,
      },
    ],
  },
];

_loadUsers();

function getLoggedinUser() {
  var user = JSON.parse(sessionStorage.getItem('loggedinUser'));
  if (!user) {
    user = _saveLocalUser(gDefaultUsers[0]);
  }
  return user;
}

async function login(userCred) {
  const users = await storageService.query('user');
  const user = users.find((user) => user.username === userCred.username);
  return _saveLocalUser(user);
}

async function getUserById(id) {
  try {
    const user = await storageService.get(STORAGE_KEY, id);
    return user;
  } catch (err) {
    console.log('cant get user', err);
  }
}

async function signup(user) {
  user.coins = 100;
  user.moves = [];
  try {
    const savedUser = await storageService.post(STORAGE_KEY, user);
    return _saveLocalUser(savedUser);
  } catch (err) {
    console.log('cant save user', err);
  }
}

async function addMove(contact, amount, userId) {
  const move = {
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount,
  };
  try {
    const user = await storageService.get(STORAGE_KEY, userId);
    user.coins -= amount;
    user.moves.unshift(move);
    const updatedUser = await storageService.put(STORAGE_KEY, user);
    if (getLoggedinUser()._id === user._id) _saveLocalUser(updatedUser);
    return updatedUser;
  } catch (err) {
    console.log('cant save move', err);
  }
}

function _loadUsers() {
  var users = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  if (!users || !users.length) {
    users = gDefaultUsers;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }
  return users;
}

function _saveLocalUser(user) {
  sessionStorage.setItem('loggedinUser', JSON.stringify(user));
  return user;
}
