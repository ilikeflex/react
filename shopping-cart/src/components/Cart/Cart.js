import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSliceActions } from '../../store/productSlice';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

// const initialProductsInCart = 
// [
//   { id:100 , title:'Test Selected Item', quantity: 3, total: 18, price: 6}
// ];

const initialProductsInCart = [];

const Cart = (props) => {

const [ items, setItems ] = useState(initialProductsInCart);
const itemsFromState = useSelector((state) => {return state.product.items;});
const dispatch = useDispatch(); 

useEffect(() => {
  let newItems = initialProductsInCart.concat(itemsFromState);
  console.log('Cart useEffect newItems=' + JSON.stringify(newItems));
  setItems(newItems);
},[itemsFromState]);

const addToCartHandler = (productItem) => { 
  dispatch(productSliceActions.addToCart(productItem));
}

const removeFromCartHandler = (productItem) => {
  dispatch(productSliceActions.removeFromCart(productItem));
}

const cartItems = items.map(item => {
return (
<ul key={item.id}>
  <CartItem
  item={item}
  addToCart = {addToCartHandler}
  removeFromCart = {removeFromCartHandler}
  />
</ul>)});

return (
  <Card className={classes.cart}>
    <h2>Your Shopping Cart</h2>
    {cartItems}
    {/**
    <ul>
      <CartItem
        item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
      /> 
    </ul> 
    */}
      { /** items.map(item => (
        <ul key={item.id}>
          <CartItem item={item}/>
        </ul>))
      */}
  </Card>
);
};

export default Cart;

/* 
const itemsFromState = useSelector((state) => {
  //console.log('state.product.items.length' + state.product.items.length + 'state.product.items=' + JSON.stringify(state.product.items));
  //let newItems = items.concat(state.product.items);
  //console.log('newItems=' + JSON.stringify(newItems));
  //return state.product.items;
  //setItems(newItems);
   /*setItems((prevState) => {
     console.log('prevState.items=' + JSON.stringify(prevState));
     let newItems = [ ...prevState.items, state.product.items];
     return [];
   })
  }); */