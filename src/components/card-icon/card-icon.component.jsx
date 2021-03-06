import React from 'react';
import { connect } from 'react-redux';
import {toggleCardHidden} from '../../redux/card/card.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';
import './card-icon.styles.scss';

const CardIcon = ({toggleCardHidden}) => (
    <div className='card-icon' onClick={toggleCardHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCardHidden: ()=> dispatch(toggleCardHidden())
})
export default connect(null,mapDispatchToProps)(CardIcon);