import React from 'react';
import { useCart } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
    const { cartItems, updateQuantity, getTotalPrice } = useCart();

    if (!isOpen) return null;

    return (
        <div className="cart-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
                <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Shopping Cart</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ×
                        </button>
                    </div>
                </div>

                <div className="p-6 overflow-y-auto max-h-96">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-500 py-8">Your cart is empty</p>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-16 h-16 object-contain"
                                        onError={(e) => {
                                            e.target.src = '';
                                            e.target.alt = 'Image failed to load';
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    
                                    <div className="flex-1">
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="text-green-600 font-bold">${item.price}</p>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center"
                                        >
                                            +
                                        </button>
                                    </div>
                                    
                                    <div className="text-right">
                                        <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="p-6 border-t bg-gray-50">
                        <div className="flex items-center justify-between text-xl font-bold">
                            <span>Total: ${getTotalPrice().toFixed(2)}</span>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;