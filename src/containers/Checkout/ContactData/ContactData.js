import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/LoadingSpinner/LoadingSpinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: this.state.name,
                address: this.state.address,
                email: this.state.email,
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then( response => {
                this.setState({ loading: false })
                this.props.history.push('/');
            })
            .catch( error => {
                this.setState({ loading: false  })
            });
    }

    render() {

        let form = (
            <form>
                <Input inputtype="input" placeholder="John Snow" input="text" name="name" label="Your name" />
                <Input inputtype="input" placeholder="whiteWalker@nothing.snow" input="email" name="email" label="Your email" />
                <Input inputtype="input" input="text" name="street" label="Street" />
                <Input inputtype="input" input="text" name="zipcode" label="Zip Code" />
                <Button type="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if(this.state.loading) {
            form = (<Spinner />)
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;