import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Greeter extends Component {
    render() {
        return (
            <h1>Hello { this.props.name } </h1>
        );
    }
}
// Prop Validator
/*
기본형 Validator
PropTypes.string
PropTypes.number
PropTypes.boolean
PropTypes.object
PropTypes.func
PropTypes.array

조합형 Validator
PropTypes.onOfType  ex) PropTypes.onOfType([ PropTypes.string, PropTypes.number ])
PropTypes.arrayOf   ex) PropTypes.arrayOf(PropTypes.string)
PropTypes.objectOf  ex) PropTypes.objectOf(PropTypes.string) : string 타입의 속성이 있는 객체
PropTypes.shape     ex) PropTypes.shape({
                            name: PropTypes.string,
                            price: PropTypes.number,
                            countOfStock: PropTypes.number,
                            isDiscount: PropTypes.boolean
그밖에...
PropTypes.element
PropTypes.instanceof
*/
Greeter.prototypes ={
    name: PropTypes.string.isRequired
}

// Prop Default value
Greeter.defaultProps= {
    name: '둘리의 친구'
}