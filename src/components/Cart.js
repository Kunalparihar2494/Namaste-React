import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utlis/cartSlice";
import { CDN_URL } from "../utlis/constant";

function Cart() {
  const dispatch = useDispatch();

  const cartitems = useSelector((store) => store.cart.items);
  const handleClearEvent = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-center m-5">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h1 className="flex justify-center text-2xl">Cart Item</h1>
        {cartitems.length === 0 ? (
          <div>
            {" "}
            <span className="mx-4">Add Items to Cart</span>{" "}
          </div>
        ) : (
          cartitems.map((items) => {
            console.log(items.card.info);
            return (
              <div key={items.card.info.id}>
                <img
                  className="rounded-2xl shadow-amber-100"
                  style={{ width: "35%" }}
                  alt="res-logo"
                  src={CDN_URL + items.card.info.imageId}
                />
                <h2 className="flex justify-center m-5 text-sm font-bold">
                  {items.card.info.name}
                </h2>
              </div>
            );
          })
        )}
        {cartitems.length !== 0 && (
          <button
            className="p-3 cursor-pointer bg-amber-500 rounded-lg"
            onClick={handleClearEvent}
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
