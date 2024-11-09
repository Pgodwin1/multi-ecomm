import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../compoent/footer";
import { Header } from "../compoent/header";
import axios from "axios";
import { name } from "../compoent/sidebar";

const email = localStorage.getItem("email");
const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset the error message for the current field
    if (error[name]) {
      setError({ ...error, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous errors
    setError({});

    // Client-side validation
    const newErrors = {};

    if (!formData.firstname) {
      newErrors.firstname = "First Name is required";
    }

    if (!formData.lastname) {
      newErrors.lastname = "Last Name is required";
    }

    // If there are validation errors, set them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    try {
      // Simulate API request
      const response = await axios.post(
        `https://ruach-app.onrender.com/api/v1/update_profile`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle successful response (for example, save data and navigate)
      if (response.status === 200) {
        navigate('/profile');
      }

      console.log("Profile updated:", formData);
      navigate("/profile"); // Replace with actual navigation
    } catch (error) {
      console.error("Error updating profile:", error);
      setError({ general: "An unexpected error occurred. Please try again." });
    }
  };

  return (
    <div>
      <Header />
      {/* <!-- profile_section - start */}
      <section
        className="profile_section sec_ptb_140 parallaxie clearfix"
        data-background="assets/images/backgrounds/bg_24.jpg"
      >
        <div className="container">
          <div
            className="profile_form_wrap"
            data-background="assets/images/profile_bg_01.png"
          >
            <div className="user_content">
              <h4 className="user_name">Profile Name: {name}</h4>
              <h4 className="user_name">Profile Email: {email}</h4>
            </div>
            <form onSubmit={handleSubmit} style={{marginTop: "30px"}}>
              <div className="profile_form">
                <h2 className="form_title text-uppercase">Update Profile</h2>
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
                <button
                  type="submit"
                  className="custom_btn bg_default_red text-uppercase mb_50"
                >
                  Save Changes
                </button>

                {error.general && (
                  <div>
                    <p style={{ color: "red" }}>{error.general}</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- profile_section - end */}

      {/* <!-- footer_section - start */}
      <Footer />
    </div>
  );
};

export default Profile;
