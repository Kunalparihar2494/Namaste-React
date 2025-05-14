import { CDN_URL } from "../utlis/constant";

const styleCard = {
  backgroundColor: "lightgray",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      />
      <h3>{resData?.info?.name}</h3>
      <h4>{resData?.info?.cuisines.join(",")}</h4>
      <h4>{resData?.info?.avgRatingString}</h4>
    </div>
  );
};

export default RestaurantCard;
