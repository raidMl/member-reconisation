import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
const initialState = {
    usersItems: localStorage.getItem("usersItems") ? JSON.parse(localStorage.getItem("usersItems")) : [
        {
            id: "ABC123",
            name: "mohamed ali",
            degre: 1,
            image: "",
            role: "student",

        },

        {
            id: "DEF456",
            name: "khaled Ahmed",
            degre: 2,
            image: "",
            role: "student",

        },

        {
            id: "GHI789",
            name: "Ahmed amin",
            degre: "",
            image: "",
            role: "employe",

        },
        {
            id: "jkL012",
            name: "Mustapha ghal",
            degre: "",
            image: "",
            role: "employe",

        }]

}
//  {id:null,name:"",desc:"",price:null,img:"",number:0}

const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            showUsers: (state, action) => {
                return action.payload;
              },
            addToCart: (state, action) => {
                const itemIndex = state.usersItems.findIndex((item) => item.id === action.payload.id)

                if (itemIndex >= 0) {
                    // state.usersItems[itemIndex].cartQuantity+=1
                    toast.info(`user ${action.payload.name} exist`, { position: "bottom-left" })
                }
                else {
                    const tempitem = { ...action.payload } //we use new var cartquantity to avoid duplicate
                    state.usersItems.push(tempitem);
                    toast.success(`add ${tempitem.name} to users`, { position: "bottom-left" })

                }
                // save items in localstorage
                localStorage.setItem("usersItems", JSON.stringify(state.usersItems))

            },

            removeFromCart: (state, action) => {
                const nextCartItems = state.usersItems.filter(item => item.id !== action.payload.id)
                state.usersItems = nextCartItems
                //update array in local storage //when uplode don't change
                localStorage.setItem("usersItems", JSON.stringify(state.usersItems))
                toast.error(`Remove ${action.payload.name} From cart`, { position: "bottom-left" })

            },
            clearCart: (state, action) => {
                state.usersItems = []
                toast.error(`Clear Cart `, { position: "bottom-left" })
                localStorage.setItem("usersItems", JSON.stringify(state.usersItems))
            },

            changeRole: (state, action) => { },


        },
    }
)
export const { addToCart, removeFromCart, clearCart, changeRole,showUsers} = cartSlice.actions
export default cartSlice.reducer