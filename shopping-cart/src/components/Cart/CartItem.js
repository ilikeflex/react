import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  console.log('CartItem props ' + JSON.stringify(props.item));

  const incrementHandler = () => {
    props.addToCart(props.item);
  }

  const decrementHandler = () => {
    props.removeFromCart(props.item);
  }

  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {/**${total.toFixed(2)}{' '}*/}
          ${total}{' '}
          {/**<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>*/}
          {<span className={classes.itemprice}>(${price}/item)</span>}
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
