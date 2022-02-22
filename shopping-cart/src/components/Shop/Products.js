import { useDispatch } from 'react-redux';
import { productSliceActions } from '../../store/productSlice';
import ProductItem from './ProductItem';
import classes from './Products.module.css';


const initialProducts = 
[
  { id: 1, title:'Test', price: 6, total : 6, quantity: 1, description:'This is a first product - amazing!'},
  { id: 2, title:'Test2', price: 16, total : 16 , quantity: 1, description:'This is a second product - amazing!'}
];

const Products = (props) => {

const dispatch = useDispatch();

const addToCartHandler = (productItem) => {
  dispatch(productSliceActions.addToCart(productItem));
}

//this is the worst way to pass the props. use single object
const selectedProductDetails = initialProducts.map(selectedProduct => {
  return (
  <ul key={selectedProduct.id}>
    <ProductItem
    key={selectedProduct.id}
    id={selectedProduct.id}
    title={selectedProduct.title}
    price={selectedProduct.price}
    description={selectedProduct.description}
    total={selectedProduct.total}
    quantity={selectedProduct.quantity}
    addToCart = {addToCartHandler}
    />
  </ul>)});

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      { /** 
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
          addToCart = {addToCartHandler}
        />
      */}
      {selectedProductDetails}
    </section>
  );
};

export default Products;
