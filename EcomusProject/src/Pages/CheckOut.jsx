import React from "react";
import order1 from '../images/brown.jpg';
import order2 from '../images/kid-12.jpg';
import order3 from '../images/beige-2.jpg';
import order4 from '../images/orange-1.jpg';
import BlackFooter from "../Componats/BlackFooter";


const CheckOut = () => {
  return (
    <div className="p-4">
      <h1 className="bg-custom-gradient text-center h-40 text-4xl mt-20 pt-14 w-full">Check Out</h1>
      <div className="flex justify-evenly">
        <div className="w-1/2">
          <h2 className="text-[28px] font-sans">Billing Details</h2>
          <div className="grid grid-cols-2  text-[14px] font-sans gap-4">
            <div >
              <label htmlFor="first_name" className="block text-gray-700 mb-1">First Name*</label>
              <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3" />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-gray-700 mb-1">Last Name*</label>
              <input type="text" id="last_name" className="w-full rounded-lg border py-2 px-3" />
            </div>
          </div>
          <div className="mt-4 text-[14px] font-sans">
          <label htmlFor="city" className="block text-gray-700 mb-1">Contry/Region</label>
            <select name="select" id="select" className="block  rounded-md border w-full bg-white px-3 py-2">
              <option className="font-semibold text-gray-500">---</option>
            </select>
          </div>
          <div className="mt-4 text-[14px] font-sans">
            <label htmlFor="address" className="block text-gray-700 mb-1">Address*</label>
            <input type="text" id="address" className="w-full rounded-lg border py-2 px-3" />
          </div>
          <div className="mt-4 text-[14px] font-sans">
            <label htmlFor="town" className="block text-gray-700 mb-1">Town/City*</label>
            <input type="text" id="town" className="w-full rounded-lg border py-2 px-3" />
          </div>
          <div className="mt-4 text-[14px] font-sans">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email*</label>
            <input type="email" id="email" className="w-full rounded-lg border py-2 px-3" required />
          </div>
          <div className="mt-4 text-[14px] font-sans">
            <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number*</label>
            <input type="tel" id="phone" className="w-full rounded-lg border py-2 px-3" required />
          </div>
          <div className="mt-4 text-[14px] font-sans">
            <label htmlFor="order_notes" className="text-sm font-medium text-gray-900 block mb-2">Order Notes (optional)</label>
            <textarea id="order_notes" rows="6" className="bg-gray-50 border w-full text-gray-900 sm:text-sm rounded-lg p-4"></textarea>
          </div>
        </div>
        <div className="w-1/3">
          <h2 className="text-[28px] font-sans">Your Order</h2>
          <div className="order-list">
            {[{ img: order1, name: "Ribbed modal T-shirt", color: "Brown", size: "M", price: "$25.00" },
            { img: order2, name: "Vanilla White", price: "$25.00" },
            { img: order3, name: "Cotton jersey top", color: "Beige", size: "S", price: "$8.00" },
            { img: order4, name: "Ribbed Tank Top", color: "Orange", size: "S", price: "$54.00" }]
              .map((order, index) => (
                <div key={index} className="order-item flex">
                  <fieldset>
                    <legend>{index + 1}</legend>
                    <img src={order.img} alt={order.name} className="w-10" />
                  </fieldset>
                  <div className="flex justify-between items-center">
                    <div>
                     <p>{order.name}</p>
                    </div>
                    <div className="mx-10">
                      <p>{order.color}</p>
                    </div>
                  </div>
                  <div className=" justify-end items-end">
                    <p>{order.price}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex mt-6">
            <input type="text" className="w-full rounded-lg border py-2 mx-3 px-3" placeholder="Discount code" />
            <a href="#_" class="relative rounded px-5 py-2.5 overflow-hidden group bg-black hover:bg-gradient-to-r hover:from-black hover:to-black text-white  transition-all ease-out duration-300">
    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span class="relative">Apply</span>
</a>
          </div>
          <div className="flex justify-between mt-4">
            <div>Total</div>
            <div>$123.00</div>
          </div>
          <div className="border-t-2 border-gray-500 my-4"></div>
          <PaymentOption id="bank-transfer" label="Direct bank transfer" />
          <PaymentOption id="cash-on-delivery" label="Cash on delivery" />
          <p className="text-gray-600 mt-2">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
          </p>
          <div className="flex items-center mt-4">
            <input id="terms-checkbox" type="checkbox" className="w-4 h-4" />
            <label htmlFor="terms-checkbox" className="ml-2 text-sm">I have read and agree to the website <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
          </div>
          <div className="my-10">

          <a href="#_" class="relative rounded px-5  mx-9 py-2.5 overflow-hidden group bg-black hover:bg-gradient-to-r hover:from-black hover:to-black text-white  transition-all ease-out duration-300">
    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span class="relative">Place Order</span>
</a>
          </div>
        </div>
      </div>
      <div class="py-10 my-14 border-t border-gray-200"> 
        <BlackFooter/>
      </div>
    </div>
  );
};

const PaymentOption = ({ id, label }) => (
  <div className="flex items-center mb-4">
    <input id={id} type="checkbox" disabled className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
    <label htmlFor={id} className="ml-2 text-sm text-gray-400">{label}</label>
  </div>
  
);

export default CheckOut;



