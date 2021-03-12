import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight } = this.props.pokemon;

    return (
      <div className='stats'>
        <strong>Name:</strong> { name }
        <br />
        <strong>Type:</strong> { type }
        <br />
        <strong>Weight:</strong>{' '}
        {`${averageWeight.value} ${averageWeight.measurementUnit}`}
      </div>
    );
  }
}

export default Pokemon;
