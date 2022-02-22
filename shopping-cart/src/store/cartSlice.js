import { createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice ({
    name: 'cart',
    initialState : {visible:true, notification:null},
    reducers: {
        toggleCartView (state) {
           state.visible = !state.visible; 
       },
       showNotification(state, action) {
            state.notification = {
            status: action.payload.status,
            title: action.payload.title,
            message: action.payload.message,
            };
        }
    }
});


export const cartSliceAction  = cartSlice.actions;
export default cartSlice;