import { CDN_URL } from "../utlis/constant";

const styleCard = {
  backgroundColor: "lightgray",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div
      className="m-4 p-4 w-64 rounded-sm hover:shadow-amber-300 shadow-2xl"
      style={styleCard}
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      />
      <div className="flex flex-col">
        <h3 className="font-bold py-2 text-lg">{resData?.info?.name}</h3>
        <h4 className="overflow-hidden text-ellipsis">
          {resData?.info?.cuisines.join(",")}
        </h4>
        <h4>{resData?.info?.avgRatingString}</h4>
      </div>
    </div>
  );
};

export const withDiscountedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute pl-2 ml-10 pt-2 pb-2 pr-2 bg-amber-200 font-bold rounded-2xl">
          {props.resData.info.aggregatedDiscountInfoV3.header + ' ' + 
           props.resData.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
