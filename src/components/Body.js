import RestaurantCard, { withDiscountedLabel } from "./RestaurantCard";
// import { resList } from "../utlis/mock-data";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utlis/useOnlineStatus";
import ChildA from "./ChildA";
import ChildC from "./ChildC";
import ThemeProvider from "./ThemeProvider";
import UserContext from "../utlis/UserContext";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filterlistOfRestaurant, setfilterlistOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const data = "Hello from Body!";
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setlistOfRestaurant(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterlistOfRestaurant(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  const DiscountedRestaurantCard = withDiscountedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks Like you are offline</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const filteredRest = listOfRestaurant.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilterlistOfRestaurant(filteredRest);
            }}
          />
          <button
            className="px-3 mx-2 bg-amber-600 rounded-sm"
            onClick={() => {
              const filteredRest = listOfRestaurant.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilterlistOfRestaurant(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className=" my-8 pl-3 pr-3 bg-amber-600 rounded-sm"
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res?.info?.avgRatingString > 4.2
            );
            setlistOfRestaurant(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="mt-8 ml-4">
          <input
            className="search-box border border-solid pl-2"
            value={loggedInUser}
            onChange={(e) => {setUserName(e.target.value)}}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterlistOfRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurantmenu/" + restaurant?.info?.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <DiscountedRestaurantCard
                resData={restaurant}
                key={restaurant?.info?.id}
              />
            ) : (
              <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
            )}
          </Link>
          //   <ThemeProvider>
          //     <ChildC />
          // </ThemeProvider>
          // <RestaurantCard
          //   resData={restaurant}
          //   key={restaurant?.info?.id}
          // />
        ))}
        {/* <ChildC data={data}/> */}
      </div>
    </div>
  );
};

export default Body;
