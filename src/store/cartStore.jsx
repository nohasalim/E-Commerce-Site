import {create} from "zustand";
const useCartStore = create((set, get) => ({
  cart: [],
  cartCount: 0,
  addToCart: (product, quantity=1) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
          cartCount: state.cartCount + quantity,
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity }],
          cartCount: state.cartCount + quantity,
        };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const product = state.cart.find((item) => item.id === productId);
      return {
        cart: state.cart.filter((item) => item.id !== productId),
        cartCount: state.cartCount - (product ? product.quantity : 0),
      };
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
      cartCount: state.cart.reduce(
        (count, item) =>
          item.id === productId ? count + quantity - item.quantity : count,
        state.cartCount
      ),
    })),
  getTotal: () => {
    const state = get();
    return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));

export default useCartStore;
