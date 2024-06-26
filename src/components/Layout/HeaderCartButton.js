import CartIcon from "./CartIcon";
import classes from './HeaderCartButton.module.css';
import {useContext, useEffect, useState} from 'react';
import CartContext from '../../store/cart-context';
const HeaderCartButton = props => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } =cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
useEffect(() =>{
    if (cartCtx.items.length === 0){
        return;
    }
    setBtnIsHighlighted(true);
}, [items]);
return (
    <button className={btnClasses} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
)
};

export default HeaderCartButton;