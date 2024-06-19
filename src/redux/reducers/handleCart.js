import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cartAction";

const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case ADD_TO_CART:
      const exist = state.find((e) => e.id === product.id);
      if (exist) {
        return state.map((e) =>
          e.id === product.id ? { ...e, qty: e.qty + 1 } : e
        );
      } else {
        const product = action.payload;

        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ]
      }
      break;
    case REMOVE_TO_CART:
      const exist1 = state.find((e) => e.id === product);
      if (exist1.qty === 1) {
        return state.filter((e) => e.id !== exist1.id);
      } else {
        return state.map((e) =>
          e.id === product ? { ...e, qty: e.qty - 1 } : e
        );
      }
      break;
    default:
      return state;
  }
};

export default handleCart;
