// aqui fica somente a configuração para renderização do componente filho dentro da estrutura pai
import React from 'react';
import Base from '../Base';

const base = Component => {
  return class extends React.Component {
    render() {
      return (
        <Base history={this.props.history}>
          <Component {...this.props} />
        </Base>
      )
    }
  }
}

export default base;