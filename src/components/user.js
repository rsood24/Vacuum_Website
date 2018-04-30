import React, { Component } from 'react';
import { fetchTransactions } from '../actions/TransactionActions';
//import { setTransactions } from '../actions/TransactionActions';
import {connect} from "react-redux";
import { Image } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import { Glyphicon } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
//import {charity} from '../components/charity';

//require a callback function to be sent to MovieList to update the header subtitle

class transactionList extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchTransactions());
    }
/*
    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setCharity(this.props.charities[selectedIndex]));
    }*/

   /* handleClick = (charity) => {
        const {dispatch} = this.props;
        dispatch(setCharity(charity));
    }*/

    render() {

        const TransactionListCarousel= ({transactionList}) => {
            if (!transactionList) { // evaluates to true if currentMovie is null
                return <div>Loading...</div>;
            }

            return (
                <Carousel onSelect={this.handleSelect}>
                    {transactionList.map((charity) =>
                        <Carousel.Item key={charity._id}>
                            <Carousel.Caption>
                                <h3>{charity.Name}</h3>
                                <h3>{charity.Date}</h3>
                                <h3>{charity.Total}</h3>
                                <h3>{charity.DonationAmount}</h3>
                                <h3>{charity.CharityName}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>)}
                </Carousel>);
        }

        return (
            <TransactionListCarousel transactionList={this.props.transactions} />
        );
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.charity.transactions
    }
}

export default connect(mapStateToProps)(transactionList);