import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utlis/constant";
import { useParams } from "react-router";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const [showItems, setShowItems] = useState(null);
  const dummyData = 'Dummy Data';
  const { name, cuisines, cloudinaryImageId } =
    resInfo?.cards[2].card.card.info ?? {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ?? {};

  const itemCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className=" text-center mt-5">
      <h1 className="text-2xl font-bold">{name}</h1>
      <h2 className="mt-4 font-bold">{cuisines?.join(",")}</h2>
      <div className="flex place-content-center mt-4">
        <img
          className="rounded-2xl shadow-amber-100"
          style={{ width: "15%" }}
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div>
        {itemCategory.map((category,index) => {
          const { id } = category?.card?.card?.categoryId;
          return id ? (
            <Shimmer />
          ) : (
            <div key={category?.card?.card?.title}>
              <RestaurantCategory
                key={category?.card?.card?.title}
                props={category.card.card}
                showItems={index === showItems ? true : false}
                setShowIndex = {()=>setShowItems(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
