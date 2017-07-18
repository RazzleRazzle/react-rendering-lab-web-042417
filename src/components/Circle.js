import React from 'react';

class Circle extends React.Component {

  //returns a boolean value, if current props is not equal to new color
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    return(this.props.color !== nextProps.color)
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);

    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
