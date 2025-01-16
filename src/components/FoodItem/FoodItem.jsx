import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, discription, image }) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] 
            ?<img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
         :<div className="food-item-counter">
            <img src={assets.remove_icon_red} onClick={()=> removeFromCart(id)} alt="" />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} onClick={()=> addToCart(id)} alt="" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{discription}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;