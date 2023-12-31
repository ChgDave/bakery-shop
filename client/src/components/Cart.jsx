import { useContext, useEffect } from "react";
import { MatterContext } from "../context/MatterContext";
import { Button } from "antd";
import priceConversion from "../utils/helpers";
import useLocalStorage from "../hooks/localStorage";

export default function Cart() {
  let { cartItems, setCartItems } = useContext(MatterContext);
  const [cartLocal, setCartLocal] = useLocalStorage("Cart Items", "");

  console.log(cartItems);
  const removeFromCart = (id) => {
    console.log(id);
    // turn the cartItems into key pair array
    const cartCollectionArray = Object.entries(cartCollection);
    // find the name of the item that needs to be removed
    const bakeryItem = cartCollectionArray[id][0];
    console.log(bakeryItem);
    // find one of this item in the cartItems array and remove it from the cartItems array
    const index = cartItems.findIndex((item) => item.name === bakeryItem);
    cartItems.splice(index, 1);
    const newCartItems = [...cartItems];
    setCartItems(newCartItems);
    setCartLocal(newCartItems);
  };

  const cartCollection = {};
  let totalPrice = 0;

  cartItems?.map((item) => {
    cartCollection.hasOwnProperty(item.name)
      ? (cartCollection[item.name] += 1)
      : (cartCollection[item.name] = 1);

    totalPrice += item.cost;
    return cartCollection;
  });

  const cartCollectionArray = Object.entries(cartCollection);

  const list = cartCollectionArray?.map((item, index) => {
    return (
      <li className="shopping-list-item" key={index}>
        Item {item[0]}, Qty: {item[1]}
        <Button
          className="button"
          type="primary"
          onClick={() => {
            removeFromCart(index);
          }}
        >
          Remove
        </Button>
      </li>
    );
  });

  return (
    <div className="shopping-cart">
      <h3 className="bottom-line">Shopping Cart Summary</h3>{" "}
      <ul className="shopping-list bottom-line">{list}</ul>
      <div>
        Total {priceConversion(totalPrice)}{" "}
        <Button
          className="button"
          type="primary"
          onClick={() => {
            console.log("Chcekc out!");
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
