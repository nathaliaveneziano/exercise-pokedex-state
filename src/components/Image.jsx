import React from 'react';

class Image extends React.Component {
  render() {
    const { image, name } = this.props;
    
    return ( <img src={image} alt={`${name} sprite`} height='170' /> );
  }
}

export default Image;
