import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: { },
        totalPrice: 4
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            console.log(param)
            if(param[0] === 'price') price = param[1];
            else ingredients[param[0]] = +param[1];
        }

        this.setState({ ingredients: ingredients, totalPrice: price});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutContinue={this.checkoutContinueHandler}
                    checkoutCancel={this.checkoutCancelHandler} /> 
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={() => (
                        <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} / >
                    )} />
            </div>
        );
    }
}

export default Checkout;