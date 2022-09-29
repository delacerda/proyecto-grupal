import { TYPES } from "../actions/shoppingActions";




export const shoppingInitialState = {
  products: [
    {
      id: 1,
      image: "https://i.imgur.com/jD1dCpv.jpeg",
      name: "Al Rihla", 
      price: "10000"
    },
    {
      id: 2,
      image: "https://i.imgur.com/nvu03MW.jpeg",
      name: "Angel Di Maria",
      price: "9000"
    },
    {
      id: 3,
      image: "https://i.imgur.com/wVHltYV.jpeg",
      name: "Emiliano Martinez",
      price: "10000"
    },
    {
      id: 4,
      image: "https://i.imgur.com/MzoxwwA.jpeg",
      name: "Franco Armani",
      price: "8000"
    },
    {
      id: 5,
      image: "https://i.imgur.com/KiIvXJQ.jpeg",
      name: "Lionel Messi",
      price: "10000"
    },
    {
      id: 6,
      image: "https://i.imgur.com/3klprdl.jpeg",
      name: "AFA",
      price: "10000"
    },
    {
      id: 7,
      image: "https://i.imgur.com/rOFek7r.jpeg",
      name: "Neymar jr.",
      price: "10000"
    },
    {
      id: 8,
      image: "https://i.imgur.com/PffoZbB.jpeg",
      name: "CBF",
      price: "10000"
    },
    {
      id: 9,
      image: "https://i.imgur.com/EgsFnWi.jpeg",
      name: "Luka Modric",
      price: "10000"
    },
    {
      id: 10,
      image: "https://i.imgur.com/KbgcnCY.jpeg",
      name: "Sergio Busquets",
      price: "9500"
    },
    {
      id: 11,
      image: "https://i.imgur.com/7fDNGs8.jpeg",
      name: "Antoine Griezmann",
      price: "10000"
    },
    {
      id: 12,
      image: "https://i.imgur.com/ygcZ1A4.jpg",
      name: "Kylian Mbappe",
      price: "10000"
    },
    {
      id: 13,
      image: "https://i.imgur.com/PtG3hhD.jpg",
      name: "N'golo Kante",
      price: "8000"
    },
    {
      id: 14,
      image: "https://i.imgur.com/hnXZA6B.jpg",
      name: "Paul Pogba",
      price: "7500"
    },
    {
      id: 15,
      image: "https://i.imgur.com/C1ui3Fh.jpg",
      name: "Manuel Neuer",
      price: "9500"
    },
    {
      id: 16,
      image: "https://i.imgur.com/e4A6P5T.jpg",
      name: "Marc-Andre Ter Stegen",
      price: "9000"
    },
    {
      id: 17,
      image: "https://i.imgur.com/DNc3Lus.jpg",
      name: "Cristiano Ronaldo",
      price: "10000"
    },
    {
      id: 18,
      image: "https://i.imgur.com/OhW9k2S.jpg",
      name: "Edison Cavani",
      price: "8500"
    },
    {
      id: 19,
      image: "https://i.imgur.com/LqCjSMZ.jpg",
      name: "Luis Suarez",
      price: "9000"
    },
    {
      id: 20,
      image: "https://i.imgur.com/FVjVqm2.jpg",
      name: "Gareth Bale",
      price: "8000"
    }
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