import React from 'react';

class Button extends React.Component {
  render() {
    const { className, disabled, callback, children } = this.props;

    return(
      <button className={className} disabled={disabled} onClick={ callback }>{ children }</button>
    )
  }
}

export default Button;
