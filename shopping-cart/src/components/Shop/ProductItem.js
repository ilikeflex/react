import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { id, title, price, description } = props;

  const addToCartHandler = () => {
    const { id, title, price, description, total, quantity } = props;
    const productItem = { id, title, price, description, total, quantity };
    props.addToCart(productItem);
  }

  return (
    <li className={classes.item} key={id}>
      <Card>
        <header>
          <h3>{title}</h3>
          {/**<div className={classes.price}>${price.toFixed(2)}</div>*/}
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
