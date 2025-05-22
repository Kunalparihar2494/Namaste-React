import React from "react";
import { CDN_URL } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utlis/cartSlice";

function ItemList({ items }) {

  const dispatch = useDispatch();

  const handleAddItem = (items) => {
     dispatch(addItem(items))
  }

  return (
    <div>
      {items.map((items) => (
        <div
          className="p-2 m-2 border-gray-300 border-b-2 flex justify-between"
          key={items.card.info.id}
        >
          <div>
            {" "}
            <div className="flex justify-items-start">
              <div className=""> {items.card.info.name} </div>
              <div className="text-sm mt-1 ml-[3px] ">
                {" "}
                - ₹{" "}
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}{" "}
              </div>
            </div>
            <p className="text-xs text-left mt-3 pr-12">
              {items.card.info.description}
            </p>
          </div>
          <img
            className="rounded-2xl shadow-amber-100"
            style={{ width: "15%" }}
            alt="res-logo"
            src={CDN_URL + items.card.info.imageId}
          />
          <button className="absolute ml-[49rem] mt-15 bg-amber-500 px-4 
          rounded-lg cursor-pointer opacity-70 hover:opacity-100"
          onClick={() => handleAddItem(items)}
          >
            ADD+
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
