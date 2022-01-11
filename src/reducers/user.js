// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: 'teste',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    console.log(action.email);
    return {
      ...state, email: action.email,
    };
  default:
    return state;
  }
};

export default user;
