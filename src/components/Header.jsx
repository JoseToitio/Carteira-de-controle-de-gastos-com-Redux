import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Header extends React.Component {
  render() {
    const cambio = 'BRL';
    const { email } = this.props;
    const total = 0;

    return (
      <div>
        <h1>Trybe</h1>
        <p data-testid="email-field">
          Email:
          {email}
        </p>
        <span data-testid="total-field">{total}</span>
        <span data-testid="header-currency-field">{cambio}</span>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: Proptypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
