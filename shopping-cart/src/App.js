import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from 'react-redux';
import Notification from './components/UI/Notification';

import { useEffect } from 'react';

import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {

const dispatch = useDispatch();

const isCartVisible = useSelector((state) => { return state.cart.visible; });

const isShowNotification = useSelector((state) => {
  console.log('Notofication changed=' + JSON.stringify(state.cart.notification));
  return state.cart.notification;
});

/*
combine into one property instead of two properties
const cartItems = useSelector((state)=>{ 
  console.log('App state.product.items' + JSON.stringify(state.product.items));
  return state.product.items});

const cartChangedManually = useSelector((state)=>{ 
  console.log('Cart Changed Manually' + JSON.stringify(state.product.cartChangedManually));
  return state.product.cartChangedManually});  
*/

const cart = useSelector((state)=>{
  console.log('Cart Changed=' + JSON.stringify(state.product));
  return state.product;
});

useEffect(() => {
  dispatch(fetchCartData());
}, [dispatch]);

// for updating data on server when cart is updated from UI
useEffect(() => {

  console.log('App useEffect');
  
  //this is used so that below statement does not gets executed for the first time.
  if (isInitial) {
    isInitial = false;
    return;
  }

  if(cart.cartChangedManually){
     dispatch(sendCartData(cart))
     .then(
       (success) => console.log('Product Added to Server Sucessfully=' + JSON.stringify(success)), 
        (err) => console.log("Error in Product Added to Server=" + JSON.stringify(err)));
  }

  },[cart, dispatch])

return (
  <Layout>
    { isShowNotification && <Notification title={isShowNotification.title} message={isShowNotification.message} status={isShowNotification.status}/>}
    {isCartVisible && <Cart />}
    <Products />
  </Layout>
);
}


export default App;