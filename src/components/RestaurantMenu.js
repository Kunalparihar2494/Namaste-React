import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utlis/constant";
import { useParams } from "react-router";


function RestaurantMenu() {
  const [resInfo, setResinfo] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + id);
    const jsonData = await data.json();
    console.log(jsonData)
    setResinfo(jsonData?.data);
  };

  const { name, cuisines, cloudinaryImageId } =
    resInfo?.cards[2].card.card.info ?? {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ?? {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <img
        className="res-logo"
        style={{ width: "15%" }}
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
