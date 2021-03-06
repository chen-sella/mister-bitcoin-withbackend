import { userService } from '../../services/userService';

export function setUser() {
  return async (dispatch) => {
    const user = await userService.getLoggedinUser();
    console.log(user,'user');
    dispatch({ type: 'SET_USER', user });
  };
}

export function addMove(contact, amount, userId) {
  return async (dispatch) => {
    const updatedUser = await userService.addMove(contact, amount, userId);
    dispatch({ type: 'SET_USER', user: updatedUser });
  };
}
// export function login(userCred) {
//   return async (dispatch) => {
//     const user = userService.login(userCred);
//     dispatch({ type: 'SET_USER', user });
//   };
// }
