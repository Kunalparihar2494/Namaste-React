import RestaurantCard from "./RestaurantCard";
// import { resList } from "../utlis/mock-data";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filterlistOfRestaurant, setfilterlistOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setlistOfRestaurant(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterlistOfRestaurant(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
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
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res?.info?.avgRatingString > 4.2
            );
            setlistOfRestaurant(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterlistOfRestaurant.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurantmenu/" + restaurant?.info?.id}>
            <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
          </Link>
          // <RestaurantCard
          //   resData={restaurant}
          //   key={restaurant?.info?.id}
          // />
        ))}
      </div>
    </div>
  );
};

export default Body;
