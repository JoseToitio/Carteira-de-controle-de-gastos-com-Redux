import { ADD_EXPENSE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

const wallet = (state = INITIAL_STATE, { type, expenses, currencies }) => {
  switch (type) {
  case ADD_EXPENSE:
    return { ...state,
      expenses: [
        ...state.expenses,
        {
          ...expenses,
          id: state.expenses.length,
        },
      ],
      currencies: [Object.values(currencies)],
    };
  default:
    return state;
  }
};

export default wallet;
