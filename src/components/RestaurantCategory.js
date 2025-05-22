import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({props,showItems,setShowIndex}) {
      const handleClick = () =>{
      setShowIndex();
    }
  return (
    <div>
      <div className="w-6/12 p-4 mx-auto my-4 rounded-xl  bg-gray-100 shadow-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="text-lg font-bold">
            {props?.title} ({props?.itemCards?.length})
          </span>
          <span>🔽</span>
        </div>
       {showItems && <ItemList items={props.itemCards} />} 
      </div>
    </div>
  );
}

export default RestaurantCategory;
