import React, { useState } from "react";
import Footer from "../compoent/footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../api";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFomrData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFomrData({ ...formData, [name]: value });

    // Reset the error message for the current field
    if (error[name]) {
      setError({ ...error, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password) {
      setError((prev) => ({
        ...prev,
        password: "This field is required",
      }));

      // Clear the email error after 5 seconds
      setTimeout(() => {
        setError((prev) => ({ ...prev, password: "" }));
      }, 5000);

      return; // Return after the timeout setup
    }

    if (!formData.email) {
      setError((prev) => ({
        ...prev,
        email: "This field is required",
      }));

      setTimeout(() => {
        setError((prev) => ({ ...prev, email: "" })); // Clear the error after 5 seconds
      }, 5000);

      return;
    }

    // Check email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setError((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
      setTimeout(() => {
        setError((prev) => ({ ...prev, email: "" })); // Clear the error after 5 seconds
      }, 5000);
      return;
    }

    if (error.email || error.password) {
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${base_url}/sign_in`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.loginToken);
        localStorage.setItem("user", JSON.stringify(response.data.userData));
        localStorage.setItem("email", response.data.userData.email);
        localStorage.setItem(
          "username",
          response.data.userData.first_name +
            " " +
            response.data.userData.last_name
        );
        setLoading(false);
        setSuccessMessage("Login successful! Redirecting...");
        // Set a timeout to redirect the user
        setTimeout(() => {
          // Redirect to home or dashboard page
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      const customErr = error;
      const err = customErr.response?.data;
      console.log(err);

      // Handle server-side errors
      if (err && err.error) {
        // For generic errors
        setError({ general: err.error });

        // For field-specific errors (if the API returns field-specific errors)
        if (err.errors) {
          setError((prev) => ({
            ...prev,
            ...err.errors, // Assuming the API returns errors in { email: "Error message", password: "Error message" } format
          }));
        }
      } else {
        // Handle unexpected errors
        setError({
          general: "An unexpected error occurred. Please try again.",
        });
      }
    }
  };

  return (
    <div>
      {/* <!-- header_section - start */}
      <header
        className="header_section default_header"
        style={{ marginBottom: "-180px", marginTop: "-50px" }}
      >
        <Link to={"/"}>
          <img
            src="../assets/logo.png"
            alt=""
            style={{
              height: "200px",
            }}
          />
        </Link>
      </header>
      {/* <!-- header_section - end */}

      {/* <!-- register_section - start */}
      <section
        className="register_section sec_ptb_140 has_overlay parallaxie clearfix"
        data-background="assets/images/backgrounds/bg_22.jpg"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div className="overlay" data-bg-color="rgba(55, 55, 55, 0.75)"></div>
        <div className="container">
          <div
            className="reg_form_wrap login_form"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "2rem", // Add padding for form content
              maxWidth: "500px", // Limits the form width
              width: "100%", // Ensures it scales on smaller screens
              borderRadius: "8px", // Optional rounded corners
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional shadow for aesthetics
            }}
          >
            <form action="post" onSubmit={handleSubmit}>
              <h2 className="form_title text-uppercase text-center">Login</h2>
              <div
                className="reg_form"
                style={{ marginTop: "-30px", marginLeft: "15px" }}
              >
                {/* Display success message if login is successful */}
                {successMessage && (
                  <div
                    className="success_message"
                    style={{
                      position: "fixed",
                      top: "20px",
                      right: "20px",
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      zIndex: 9999,
                      fontSize: "16px",
                    }}
                  >
                    {successMessage}
                  </div>
                )}
                {/* Display General Error Message */}
                {error.general && (
                  <div
                    className="error_message"
                    style={{ color: "red", marginBottom: "15px" }}
                  >
                    {error.general}
                  </div>
                )}
                <div className="form_item">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ color: "black" }}
                    placeholder="email"
                  />
                  <label for="username_input">
                    <i className="fal fa-user"></i>
                  </label>
                  {/* Display Email Error */}
                  {error.email && <p style={{ color: "red" }}>{error.email}</p>}
                </div>
                <div className="form_item">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ color: "black" }}
                  />
                  <label for="password_input">
                    <i className="fal fa-unlock-alt"></i>
                  </label>
                  {/* Display Password Error */}
                  {error.password && (
                    <p style={{ color: "red" }}>{error.password}</p>
                  )}
                </div>
                <a className="forget_pass text-uppercase mb_30" href="#!">
                  Forgot password?
                </a>
                <button
                  type="submit"
                  className="custom_btn bg_default_red text-uppercase mb_50"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <div className="social_wrap mb_100">
                  <h4 className="small_title_text mb_15 text-center text-uppercase">
                    Or Login With
                  </h4>
                  <ul className="circle_social_links ul_li_center clearfix">
                    <li>
                      <a data-bg-color="#3b5998" href="#!">
                        <i
                          className="fab fa-facebook-f"
                          style={{ color: "black" }}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a data-bg-color="#1da1f2" href="#!">
                        <i
                          className="fab fa-twitter"
                          style={{ color: "black" }}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a data-bg-color="#ea4335" href="#!">
                        <i
                          className="fab fa-google-plus-g"
                          style={{ color: "black" }}
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  className="create_account text-center"
                  style={{ marginTop: "-60px" }}
                >
                  <h4 className="small_title_text text-center text-uppercase">
                    Don't have an account?
                  </h4>
                  <Link
                    to="/signup"
                    className="create_account_btn text-uppercase"
                    // href="/signup"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- register_section - end */}
    </div>
  );
}

export default Login;
