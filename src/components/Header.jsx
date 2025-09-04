import React from 'react';
import { useCart } from '../context/CartContext';

const Header = ({ onCartClick, searchTerm, onSearchChange }) => {
    const { getTotalItems } = useCart();

    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <h1 className="text-2xl font-bold">🛍️ Mini Store</h1>
                    
                    <div className="flex items-center gap-4 flex-1 max-w-md">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    <button
                        onClick={onCartClick}
                        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        🛒 Cart ({getTotalItems()})
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;