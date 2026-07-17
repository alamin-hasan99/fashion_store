"use client";
import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  searchTerm: "",
  category: "All",
  price: "",
  cart: [],
  wishlist: [],
  isCartOpen: false,
};

function product(state, action) {
  switch (action.type) {
    case "SEARCHTERM":
      return {
        ...state,
        searchTerm: action.payload,
      };

    case "CATEGORY":
      return {
        ...state,
        category: action.payload,
      };

    case "PRICE":
      return {
        ...state,
        price: action.payload,
      };

    case "TOGGLE":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case "ADD_TO_CART":
      const isExists = state.cart.find((item) => item.id === action.payload.id);
      if (isExists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };

    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((car) => car.id !== action.payload),
      };
    case "REMOVE_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((wish) => wish.id !== action.payload),
      };

    case "WISHLIST":
      const isExistsWishList = state.wishlist.find(
        (item) => item.id === action.payload.id,
      );
      if (isExistsWishList) {
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item.id !== action.payload.id,
          ),
        };
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    default:
      return state;
  }
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(product, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
