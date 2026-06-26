import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({
        items: [],
        total: 0
    });

    const calculateTotal = (items) => {
        return items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
    };

    const addToCart = (item) => {
        setCart(prev => {
            const existing = prev.items.find(i => i.id === item.id);

            let updatedItems;

            if (existing) {
                updatedItems = prev.items.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            } else {
                updatedItems = [...prev.items, { ...item, quantity: 1 }];
            }

            return {
                items: updatedItems,
                total: calculateTotal(updatedItems)
            };
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => {
            const updated = prev.items.filter(i => i.id !== id);

            return {
                items: updated,
                total: calculateTotal(updated)
            };
        });
    };

    const clearCart = () => {
        setCart({ items: [], total: 0 });
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};