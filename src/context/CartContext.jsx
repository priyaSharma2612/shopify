import { createContext, useContext, useState, useEffect } from "react";
import { useSnackbar } from "notistack";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(()=>{
          const savedWishlist = localStorage.getItem("wishlist");
          return savedWishlist? JSON.parse(savedWishlist):[];
    });
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(()=>{
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
  },[wishlist]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    enqueueSnackbar(`${product.title} added to cart!`, {
      variant: "success",
    });
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === productId && item.quantity > 0
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
   
  };
  const removeFromWishlist = (productId) => {
  setWishlist((prev) => prev.filter((item) => item.id !== productId));
};
  

const clearCart = () => {
  setCart([]);
};

  const addToWishlist = (product) => {
  setWishlist((prev) => {
    if (prev.some((item) => item.id === product.id)) {
      return prev;
    }

    return [...prev, product];
  });
       enqueueSnackbar(`item added to your wishlist!`, {
      variant: "success",
    });
};

const getCartTotal = () => {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        addToWishlist,
        wishlist,
        clearCart,
        getCartTotal,
        removeFromWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
