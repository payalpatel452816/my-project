import React, { useState, useEffect } from 'react';
import paypal from '../images/paypal.png';

const Products = () => {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('S');

    // Countdown timer
    const [timeLeft, setTimeLeft] = useState(null);

    // Calculate time remaining for sale
    useEffect(() => {
        const countdownEnd = new Date().getTime() + 11 * 24 * 60 * 60 * 1000; // 11 days from now
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownEnd - now;

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft("SALE ENDED");
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft(`${days} Days : ${hours} Hours : ${minutes} Mins : ${seconds} Secs`);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800">Cotton Jersey Top</h1>
            <p className="text-lg text-gray-600 mt-2"><strong>Best seller</strong></p>
            <p className="text-lg text-red-600 mt-2"><strong>Selling fast!</strong> 56 people have this in their carts.</p>

            <div className="flex items-center mt-4">
                <span className="text-2xl font-semibold text-gray-900">$8.00</span>
                <span className="text-lg text-gray-500 line-through ml-2">$30.00</span>
                <span className="text-sm text-green-500 ml-2">20% OFF</span>
            </div>

            <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800">HURRY UP! SALE ENDS IN:</p>
                <p className="text-xl font-bold text-red-600">{timeLeft}</p>
            </div>

           

            {/* Size Selection */}
            <div className="mt-6">
                <p className="text-lg font-medium text-gray-700">Size:</p>
                <select 
                    value={size} 
                    onChange={(e) => setSize(e.target.value)} 
                    className="mt-2 p-2 border border-gray-300 rounded-md w-20 text-gray-700">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>

            {/* Quantity Selector */}
            <div className="mt-6 flex items-center space-x-4">
                <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                    className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                    -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button 
                    onClick={() => setQuantity(quantity + 1)} 
                    className="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
                    +
                </button>
            </div>

            {/* Action Buttons */}
            <div className="mt-6">
                <button className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add to Cart - ${8.00 * quantity}</button>
                <button className="w-full py-2 mt-4 bg-[#ffc520] text-white rounded-md hover:bg-[#ffb321] flex items-center justify-center space-x-2">
                  <span>Buy with</span>
                  <img src={paypal} alt="PayPal" className="w-14 h-6" />
                </button>
            </div>

            {/* Delivery & Return Info */}
            <div className="mt-6 text-gray-600">
                <p className="font-semibold">Delivery & Return:</p>
                <p>Estimate delivery times: 12-26 days (International), 3-6 days (United States).</p>
                <p>Return within 30 days of purchase. Duties & taxes are non-refundable.</p>
            </div>

            {/* Guarantee Safe Checkout */}
            <div className="mt-6 text-center text-gray-600">
                <p>Guarantee Safe Checkout</p>
            </div>
        </div>
    );
}

export default Products;
