import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceAction } from "./../../store/cartSlice"

const CartButton = (props) => {

  const dispatch = useDispatch();
  const totalQuantity = useSelector((state)=> state.product.totalQuantity);

  const toggleCartViewHandler = () => {
    dispatch(cartSliceAction.toggleCartView());
  } 

  return (
    <button className={classes.button} onClick={toggleCartViewHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
