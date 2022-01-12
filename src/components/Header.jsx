import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Header extends React.Component {
  render() {
    const cambio = 'BRL';
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, currentV) => (
      acc + currentV.value * currentV.exchangeRates[currentV.currency].ask
    ), 0);
    return (
      <div>
        <h1>Trybe</h1>
        <p data-testid="email-field">
          Email:
          {email}
        </p>
        <span data-testid="total-field">
          Despesa Total:
          {' '}
          {`$${total.toFixed(2)}`}
          {' '}
        </span>
        <span data-testid="header-currency-field">{cambio}</span>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: Proptypes.string.isRequired,
  expenses: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
