import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice ({
    name: "product",
    initialState : {items: [], totalQuantity: 0, cartChangedManually: false},
    reducers: {
        initializeCart(state, action) {
          state.totalQuantity = action.payload.totalQuantity;
          state.items = action.payload.items;
        },
        addToCart(state,action){
          const itemsInState = state.items;
          const newItem = action.payload;

          //this flag is to stop sending items to server when the application reloads
          state.cartChangedManually = true;

          // check if the item already exists
          const itemExists = itemsInState.filter(item => item.id === newItem.id);
          if(itemExists.length>0){
            // this is unnecessary to create a new variable but it help in debugging
             let existingItem = itemExists.at(0) ;
             addItem(existingItem);
          }
          else
            state.items.push(newItem) ;

            const totalQuantity = calculateTotalItems(state.items);
            state.totalQuantity = totalQuantity;

        },
        removeFromCart(state,action){
          const itemsInState = state.items;
          const deleteItem = action.payload;
          const itemExists = itemsInState.filter(item => item.id === deleteItem.id);
          if(itemExists.length>0){
            let existingItem = itemExists.at(0) ;
            if( existingItem.quantity === 1){
              const remainingItems = itemsInState.filter(item => item.id !== deleteItem.id);
              state.items = remainingItems;
            }
            else
              removeItem(existingItem);
          }

            const totalQuantity = calculateTotalItems(state.items);
            state.totalQuantity = totalQuantity;

        }
    }
});

const addItem = (item) => {
  item.quantity = ++item.quantity; 
  item.total = item.quantity * item.price;
}

const removeItem = (item) => {
  item.quantity = --item.quantity; 
  item.total = item.total - item.price;
}

const calculateTotalItems = (items) => {
  const totalQuantity = items.reduce( (previousValue, item) => previousValue + item.quantity, 0 );
  return totalQuantity
}


export const productSliceActions = productSlice.actions;
export default productSlice;