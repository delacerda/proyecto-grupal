import { TYPES } from "../actions/shoppingActions";




export const shoppingInitialState = {
  products: [
    {
      id: 1,
      image:
        "https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c",
      name: "Messi",
      price: 100,
    },
    {
      id: 2,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_772098-MLA51600763565_092022-V.jpg",
      name: "Neymar",
      price: 200,
    },
    {
      id: 3,
      image:
        "https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c",
      name: "Cristiano ",
      price: 300,
    },
    {
      id: 4,
      image:
        "https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c",
      name: "Mbappe",
      price: 500,
    },
    {
      id: 5,
      image:
        "https://preview.redd.it/uqgewilktrk91.png?width=640&crop=smart&auto=webp&s=cdc5a01a5f24a4889db6da7a557f642662affd7c",
      name: "Maradona",
      price: 600,
    },
  ],
  cart: [],
};


export function shoppingReducer (state, action) {
   switch (action.type) {
      case TYPES.ADD_TO_CART:{
        const newItem = state.products.find(product => product.id === action.payload);

        const itemInCart = state.cart.find(item => item.id === newItem.id);
      return  itemInCart 
        ? {  
         ...state,
         cart:state.cart.map((item) => 
         item.id === newItem.id ? {...item, quantity:item.quantity +1 } : item),
        }
        :{ 
      
        ...state,
        cart: [...state.cart,{...newItem, quantity: 1}],
      };  
      }
      case TYPES.REMOVE_ONE_FROM_CART:{
        const itemToDelete = state.cart.find(item => item.id === action.payload);
        
        return itemToDelete.quantity > 1 ? {
          ...state,
          cart: state.cart.map(item => item.id === action.payload 
            ? {...item, quantity: item.quantity - 1}
            : item 
            ), 
        }
        :{
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
        };
      };
      case TYPES.REMOVE_ALL_FROM_CART:{
        return { 
        ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
      };
    }
      case TYPES.CLEAR_CART: 
      return shoppingInitialState;
            
      default:
       return state;
      
   }
}