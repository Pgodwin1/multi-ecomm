import React, { useState, useEffect } from "react";
import "./index.css"; // Make sure to add relevant styles for the sidebar
import axios from "axios";
import { base_url } from "../api";

const CartSidebar = ({ isOpen, updateCartCount, onClose }) => {
  const [allCart, setAllcart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  if (!isOpen) return null; // Don't render the sidebar if it's not open

  useEffect(() => {
    const fetchAllCart = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token

        if (token) {
          // If user is logged in, fetch from the server
          const response = await axios.get(`${base_url}/cart/getAllCart`, {
            headers: {
              Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            },
          });
          console.log(response)
          if (response.status === 200) {
            const products = response.data.data;
            setAllcart(products || []);
            console.log(products);
             updateCartCount(products.length);
            sessionStorage.setItem("allcart", JSON.stringify(products)); // Cache in sessionStorage
          } else {
            console.error("Failed to fetch cart items:", response.statusText);
          }
          if (response.status === 200 && response.data.data.length > 0) {
            const guestCart = sessionStorage.getItem("allcart");
            setAllcart(guestCart ? JSON.parse(guestCart) : []);
            updateCartCount(parsedCart.length);
            console.log("ss", guestCart);
          }
        } else {
          // If not logged in, check guest cart in sessionStorage
          const guestCart = sessionStorage.getItem("allcart");
          setAllcart(guestCart ? JSON.parse(guestCart) : []);
          updateCartCount(parsedCart.length);
          console.log("ss",guestCart)
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch cart items on component mount
    fetchAllCart();
  }, [updateCartCount]);

  return (
    <div className={`cart_sidebar ${isOpen ? "cart_sidebar_open" : ""}`}>
      <div className="car">
        <button className="close_btn" onClick={onClose}>
          <i className="fal fa-times"></i>
        </button>

        <ul
          className="cart_items_list ul_li_block mb_30 clearfix"
          style={{ marginTop: "50px" }}
        >
          {allCart.map((item) => (
            <li key={item.id}>
              <div className="item_photo">
                <img
                  src={item.product_img_thumbnail}
                  alt={item.product_title}
                />
              </div>
              <div className="item_content">
                <h4 className="item_title">{item.product_title}</h4>
                <span className="item_price">{`$${item.price_amount}`}</span>
              </div>
              <button type="button" className="remove_btn">
                <i className="fal fa-trash-alt"></i>
              </button>
            </li>
          ))}
        </ul>

        <ul className="total_price ul_li_block mb_30 clearfix">
          <li>
            <span>Subtotal:</span>
            <span>{`$${allCart.reduce(
              (total, item) => total + item.price_amount,
              0
            )}`}</span>
          </li>
        </ul>

        <ul className="btns_group ul_li_block clearfix">
          <li>
            <a href="/cart">View Cart</a>
          </li>
          <li>
            <a href="/checkout">Checkout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartSidebar;
