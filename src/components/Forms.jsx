import React from 'react';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      despesa: 0,
      despesaTexto: '',
      moeda: 'BRL',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { despesa, despesaTexto, moeda, pagamento, tag } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="despesa">
            Valor:
            <input
              type="number"
              name="despesa"
              value={ despesa }
              id="despesa"
              data-testid="value-input"
              placeholder="Valor da despesa"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="despesaTexto">
            Descrição:
            <input
              value={ despesaTexto }
              type="text"
              name="despesaTexto"
              id="despesaTexto"
              data-testid="description-input"
              placeholder="Descrição da despesa"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select
              value={ moeda }
              name="moeda"
              id="moeda"
              onChange={ this.handleChange }
              data-testid="currency-input"
            >
              {}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select
              value={ pagamento }
              name="pagamento"
              id="pagamento"
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
        </form>
      </div>);
  }
}

export default Forms;
