import React from "react";

export const Header = () => {
  return (
    <>
      {/* <!-- header_section - start */}
      <header className="header_section fashion_header sticky_header clearfix">
        <div className="header_content_wrap clearfix">
          <div className="container-fluid prl_60">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-6">
                <div className="brand_logo" style={{ padding: "10px 0" }}>
                  <a
                    className="brand_link"
                    href="/"
                    style={{ width: "300px" }}
                  >
                    <img
                      src="assets/logo.png"
                      alt="logo_not_found"
                      style={{
                        marginTop: "-50px",
                        height: "110px",
                        width: "100%",
                        maxWidth: "100%",
                      }}
                    />
                  </a>
                </div>
              </div>

              <div className="col-6">
                <ul className="action_btns_group ul_li_right clearfix">
                  <li>
                    <button type="button" className="mobile_menu_btn">
                      <i className="far fa-bars"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="search_btn"
                      data-toggle="collapse"
                      data-target="#search_body_collapse"
                      aria-expanded="false"
                      aria-controls="search_body_collapse"
                    >
                      <i className="fal fa-search"></i>
                    </button>
                  </li>
                  <li>
                    <button type="button" className="cart_btn">
                      <i className="fal fa-shopping-cart"></i>
                      <span className="btn_badge">2</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          id="search_body_collapse"
          className="search_body_collapse collapse"
        >
          <div className="search_body">
            <div className="container-fluid prl_90">
              <form action="#">
                <div className="form_item mb-0">
                  <input
                    type="search"
                    name="search"
                    placeholder="Type here..."
                  />
                  <button type="submit">
                    <i className="fal fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header_section - end */}
    </>
  );
};
