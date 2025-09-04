import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                        e.target.src = '';
                        e.target.alt = 'Image failed to load';
                        e.target.style.display = 'none';
                    }}
                />
            </div>
            
            <div className="p-4">
                <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {product.category}
                    </span>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 h-12">
                    {product.title}
                </h3>
                
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">
                        ${product.price}
                    </span>
                    
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;