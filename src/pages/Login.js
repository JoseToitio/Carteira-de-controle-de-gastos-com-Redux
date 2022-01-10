import React from 'react';
import connect from 'react-redux/lib/connect/connect';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true,
      inputEmail: '',
      inputPassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
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

        <button type="button" disabled={ isDisabled }>Entrar</button>
      </div>
    );
  }
}

export default connect()(Login);
