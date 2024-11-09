import { useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "../api/index";

const AddToCartButton = ({ productId, user, onProductAdded }) => {
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState(null);

  //  useEffect(() => {
  //    const token = localStorage.getItem("token");
  //    if (token) {
  //      try {
  //        // Split the JWT and decode the payload
  //        const payload = JSON.parse(atob(token.split(".")[1]));
  //        setUser(payload); // Set the user data from the token payload
  //      } catch (error) {
  //        console.error("Invalid token format", error);
  //        // Optionally clear the invalid token
  //        localStorage.removeItem("token");
  //      }
  //    }
  //  }, []);

  const handleAddToCart = async () => {
    if (!user) {
      // If user isn't logged in, save to session storage
      const cart = JSON.parse(sessionStorage.getItem("allcart")) || [];
      const updatedCart = [...cart, { product_id: productId, quantity }];
      sessionStorage.setItem("allcart", JSON.stringify(updatedCart));
      console.log("Product saved to session storage for guest cart.");
      // setTimeout(() => setSuccessMessage(""), 3000);
      return;
    }

    // If the user is logged in, proceed with the API call
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found");
      }
      const response = await axios.post(
        `${base_url}/cart/addToCart`,
        {
          product_id: productId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("added", response);
      if (response.status === 201 || response.status === 200) {
        console.log("Product added to cart successfully:", response.data);
        if (onProductAdded) onProductAdded(response.data); // Optional callback
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        console.log("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleAddToCart} disabled={loading}>
        {loading ? "Adding to Cart..." : "Add to Cart"}
      </button>
      {/* {onProductAdded && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            borderRadius: "5px",
            zIndex: "1000",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "opacity 0.5s ease-in-out",
            opacity: successMessage ? 1 : 0,
          }}
        >
          {onProductAdded}
        </div>
      )} */}
    </div>
  );
};

export default AddToCartButton;
