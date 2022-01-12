import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWalletApi } from '../actions';
import getAPI from '../services/getApi';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
      currencies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getAPI().then((data) => {
      const currencies = Object.keys(data).filter((moeda) => moeda !== 'USDT');
      this.setState({
        currencies,
      });
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { saveExpenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    saveExpenses({ value, description, currency, method, tag });
    this.setState({
      value: 0,
      description: '',
    });
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, method, tag, currencies } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              type="number"
              name="value"
              value={ value }
              id="value"
              data-testid="value-input"
              placeholder="Valor da despesa"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              value={ description }
              type="text"
              name="description"
              id="description"
              data-testid="description-input"
              placeholder="Descrição da despesa"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              value={ currency }
              name="currency"
              id="currency"
              onChange={ this.handleChange }
              data-testid="currency-input"
            >
              {currencies.map((c, index) => (
                <option
                  value={ c }
                  key={ index }
                  data-testid={ c }
                >
                  {c}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select
              value={ method }
              name="method"
              id="method"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select
              value={ tag }
              name="tag"
              id="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (expenses) => dispatch(getWalletApi(expenses)),
});

Forms.propTypes = {
  saveExpenses: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Forms);
