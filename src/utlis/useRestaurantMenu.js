import React, { useEffect,useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (props) => {
  const [resInfo, setResinfo] = useState(null);

  useEffect(()=>{
      fetchMenu();
  },[])

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + props);
    const jsonData = await data.json();
    setResinfo(jsonData?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
