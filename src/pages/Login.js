import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true,
      inputEmail: '',
      inputPassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { inputEmail, inputPassword } = this.state;
      const magicNumber = 6;
      if (inputEmail.includes('@')
    && inputEmail.includes('.com') && inputPassword.length >= magicNumber) {
        this.setState({
          isDisabled: false,
        });
      } else {
        this.setState({
          isDisabled: true,
        });
      }
    });
  }

  handleClick() {
    const { history, userEmail } = this.props;
    const { inputEmail } = this.state;
    userEmail(inputEmail);
    history.push('/carteira');
  }

  render() {
    const { isDisabled, inputEmail, inputPassword } = this.state;
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="inputEmail"
            data-testid="email-input"
            id="email"
            value={ inputEmail }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            value={ inputPassword }
            onChange={ this.handleChange }
            type="password"
            name="inputPassword"
            id="password"
            data-testid="password-input"
          />
        </label>

        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.handleClick }
        >
          Entrar

        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (state) => dispatch(addEmail(state)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  userEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
