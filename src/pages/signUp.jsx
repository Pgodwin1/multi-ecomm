import React from "react";
import { useState } from "react";
import { registerSchema } from "../validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { base_url } from "../api";
import { Link } from "react-router-dom";
import "../index.css";

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error, value } = registerSchema.validate(formData, {
        abortEarly: false,
      });

      if (error) {
        // Map errors to specific fields
        const fieldErrors = error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message; // Store error message for each field
          return acc;
        }, {});

        setError(fieldErrors);

        // Clear specific error after 5 seconds
        setTimeout(() => {
          setError({});
        }, 5000);

        setLoading(false);
        return;
      }
      // Clear errors if no validation issues
      setError({});

      const response = await axios.post(`${base_url}/register`, formData);

      if (res.status === 201) {
        setLoading(false);
        setSuccessMessage("Regristration successful! Redirecting...");
        // Set a timeout to redirect the user
        setTimeout(() => {
          // Redirect to home or dashboard page
          navigate("/");
        }, 2000);
      }

      console.log(response);
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data.errors) {
        setError(error.response.data.errors); // Handle API errors
      } else if (error.response && error.response.data.message) {
        const message = error.response.data.message;
        setError(message);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    }
  };

  return (
    <div>
      {/* <!-- header_section - start */}
      <header
        className="header_section default_header"
        style={{ marginBottom: "-200px", marginTop: "-50px" }}
      >
        <Link to={"/"}>
          <img
            src="assets/logo.png"
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
        className="register_section sec_ptb_140 parallaxie clearfix"
        data-background="assets/images/backgrounds/bg_23.jpg"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          height: "90vh",
        }}
      >
        <div className="container">
          <div
            className="reg_form_wrap signup_form"
            style={{
              marginTop: "100px",
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
              <h2 className="form_title text-uppercase">Register</h2>
              <div
                className="reg_form"
                style={{ marginTop: "-30px", marginLeft: "15px" }}
              >
                <div className="form_item">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    style={{ color: "black" }}
                  />
                  {(successMessage || Object.keys(error).length > 0) && (
                    <div
                      className="message"
                      style={{
                        position: "fixed",
                        top: "20px",
                        right: "20px",
                        backgroundColor: successMessage ? "green" : "red", // Green for success, red for error
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        zIndex: 9999,
                        fontSize: "16px",
                      }}
                    >
                      {successMessage
                        ? successMessage
                        : Object.values(error).join(", ")}
                    </div>
                  )}
                  {/* Display error for first name */}
                  {error.firstname && (
                    <p style={{ color: "red" }}>{error.firstname}</p>
                  )}
                </div>
                <div className="form_item">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                    style={{ color: "black" }}
                  />
                  {error.lastname && (
                    <p style={{ color: "red" }}>{error.lastname}</p>
                  )}
                </div>
                <div className="form_item">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ color: "black" }}
                  />
                  {error.email && <p style={{ color: "red" }}>{error.email}</p>}
                </div>
                <div className="form_item">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ color: "black" }}
                  />
                  {error.password && (
                    <p style={{ color: "red" }}>{error.password}</p>
                  )}
                </div>
                <div className="checkbox_item mb_30">
                  <label for="agree_checkbox">
                    <input id="agree_checkbox" type="checkbox" /> I agree to the
                    Terms of User
                  </label>
                </div>
                <button
                  type="submit"
                  className="custom_btn bg_default_red text-uppercase mb_50"
                >
                  {loading ? "Creating account..." : "Create Account"}
                </button>

                <div className="create_account text-center">
                  <h4 className="small_title_text text-center text-uppercase">
                    Have not account yet?
                  </h4>
                  <Link
                    to="/login"
                    className="create_account_btn text-uppercase"
                    // href="/login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>
            {Object.keys(error).length > 0 && (
              <div>
                {Object.entries(error).map(([key, message]) => (
                  <p key={key} style={{ color: "red" }}>
                    {message}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      {/* <!-- register_section - end */}
    </div>
  );
}

export default SignUp;
