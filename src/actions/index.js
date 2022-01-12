import getAPI from '../services/getApi';

// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  email,
});

export const addExpense = (expenses, exchangeRates) => ({
  type: ADD_EXPENSE,
  expenses: { ...expenses, exchangeRates },
  currencies: { exchangeRates },
});

export const getWalletApi = (expenses) => (dispatch) => {
  getAPI().then((currencies) => {
    dispatch(addExpense(expenses, currencies));
  });
};
