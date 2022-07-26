import { cartSliceAction } from "./cartSlice";
import { productSliceActions } from "./productSlice";

//Input can also be added
export const fetchCartData = () => {
    return async(dispatch, getState) => {

        const state = getState();

        //this will state for the complete application
        console.log('fetchCartData  getState ' + JSON.stringify(state));

       //const response = await fetch("https://react-app-a5e65-default-rtdb.firebaseio.com/cart.json");
       const response = await fetch("http://localhost:3000/cart");

       if(!response.ok) {
            throw new Error('In initialization Get Cart Data Failed.');
       }

       const data = await response.json();

       //explanation why i am using === operator. Because i want to check specifically for null and not an falsy operator.
       //https://javascript.plainenglish.io/how-to-check-for-null-in-javascript-dffab64d8ed5#:~:text=%20How%20to%20Check%20for%20null%20in%20JavaScript,JavaScript%20programmers%20prefer%20everything%20to%20be...%20More%20
       
       //console.log('Intialization Request Recieved with data ' + JSON.stringify(data));

       if( data === null)
            dispatch(productSliceActions.initializeCart({items:[],totalQuantity:0}))
       else {
        if(!data.hasOwnProperty('items')) {
            data.items = [];
        }
        if(data.totalQuantity === null) {
            data.totalQuantity = 0;
        }
        dispatch(productSliceActions.initializeCart({items:data.items,totalQuantity:data.totalQuantity})) 
       }
    }
};


export const sendCartData = (cart) => {
    return async(dispatch,getState) => {

        const sendRequest = async () => {

            const showPendingNotification = {
              status: 'pending',
              title: 'Sending.....................................',
              message: 'Sending cart data!',
            };
          
            dispatch(cartSliceAction.showNotification(showPendingNotification));
            
            //const response = await fetch("https://react-app-a5e65-default-rtdb.firebaseio.com/cart.json",
            const response = await fetch("http://localhost:3000/cart",
              { 
                method: 'PUT',
                body: JSON.stringify({
                  items: cart.items,
                  totalQuantity: cart.totalQuantity
                })
              }
            );
        
            if(!response.ok) {
              console.log('Error in sending request ' + JSON.stringify(response));
              throw new Error('Sending cart data failed.');
            }
            
            const showSuccessfulNotification = {
              status: 'success',
              title: 'Success!',
              message: 'Sent cart data successfully!',
            };
        
            dispatch(cartSliceAction.showNotification(showSuccessfulNotification));
          }

          if(cart.cartChangedManually){
            sendRequest()
            .then(()=> Promise.resolve('success'))
            .catch((error) => {
                      const showErrorNotification = {
                  status: 'error',
                  title: 'Error..',
                  message: 'Sending cart data failed!',
                };
                dispatch(cartSliceAction.showNotification(showErrorNotification));
                return Promise.reject(error);
              });
            }

    }
};