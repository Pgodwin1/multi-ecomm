// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../../index.css";
// import CartSidebar from "../../compoent/cartSidebar";

// const MotivationalBooks = ({ data }) => {
//   const [cartOpen, setCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Yellow Blouse",
//       price: 30,
//       imageUrl: "../assets/images/cart/img_01.jpg",
//     },
//     {
//       id: 2,
//       name: "Red Shirt",
//       price: 25,
//       imageUrl: "../assets/images/cart/img_02.jpg",
//     },
//   ]);


//   const toggleCartSidebar = () => {
//     //  setCartOpen((prev) => !prev); // Toggle the sidebar visibility
//     setCartOpen(!cartOpen); // Toggle the sidebar visibility
//   };

//   const closeCartSidebar = () => {
//     setCartOpen(false); // Close the sidebar
//   };
//   const categories = [
//     {
//       id: 1,
//       name: "Product 1",
//       image: "assets/images/products/product1.jpg",
//       price: "£49.00",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       image: "assets/images/products/product2.jpg",
//       price: "£69.00",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       image: "assets/images/products/product3.jpg",
//       price: "£59.00",
//     },
//     {
//       id: 4,
//       name: "Product 4",
//       image: "assets/images/products/product4.jpg",
//       price: "£79.00",
//     },
//     {
//       id: 5,
//       name: "Product 5",
//       image: "assets/images/products/product5.jpg",
//       price: "£89.00",
//     },
//   ];

//   const products = [
//     {
//       id: 0,
//       name: "Oversize Drawstring Sweatshirt",
//       price: "$28.00",
//       images: [
//         "assets/images/shop/simple_shop/img_05.jpg",
//         "assets/images/shop/simple_shop/img_06.jpg",
//         "assets/images/shop/simple_shop/img_07.jpg",
//         "assets/images/shop/simple_shop/img_08.jpg",
//       ],
//       //   colors: ["#d8a15f", "#647242", "#000000", "#e8e8e8"],
//     },
//     // Repeat the structure above for 7 more products
//     {
//       id: 1,
//       name: "Classic Hooded Jacket",
//       price: "$32.00",
//       images: [
//         "assets/images/shop/simple_shop/img_05.jpg",
//         "assets/images/shop/simple_shop/img_02.jpg",
//         "assets/images/shop/simple_shop/img_03.jpg",
//         "assets/images/shop/simple_shop/img_04.jpg",
//       ],
//       //   colors: ["#f3d6a3", "#464a4d", "#b4354d", "#e8e8e8"],
//     },
//     {
//       id: 2,
//       name: "Classic Hooded Jacket",
//       price: "$32.00",
//       images: [
//         "assets/images/shop/simple_shop/img_05.jpg",
//         "assets/images/shop/simple_shop/img_02.jpg",
//         "assets/images/shop/simple_shop/img_03.jpg",
//         "assets/images/shop/simple_shop/img_04.jpg",
//       ],
//       //   colors: ["#f3d6a3", "#464a4d", "#b4354d", "#e8e8e8"],
//     },
//     {
//       id: 3,
//       name: "Classic Hooded Jacket",
//       price: "$32.00",
//       images: [
//         "assets/images/shop/simple_shop/img_05.jpg",
//         "assets/images/shop/simple_shop/img_02.jpg",
//         "assets/images/shop/simple_shop/img_03.jpg",
//         "assets/images/shop/simple_shop/img_04.jpg",
//       ],
//       //   colors: ["#f3d6a3", "#464a4d", "#b4354d", "#e8e8e8"],
//     },
//     // Add more product objects as needed...
//   ];

//   return (
//     <div className="home_simple_shop">
//       {/* <!-- backtotop - start --> */}
//       <div id="thetop"></div>
//       <div className="backtotop bg_shop_red">
//         <a href="#" className="scroll">
//           <i className="far fa-arrow-up"></i>
//         </a>
//       </div>
//       {/* <!-- backtotop - end --> */}

//       {/* <!-- preloader - start --> */}
//       <div id="preloader"></div>
//       {/* <!-- preloader - end --> */}

//       {/* header_section - start */}
//       {/* ================================================== */}
//       <header className="header_section simple_shop_header sticky_header clearfix">
//         <div className="header_content_wrap d-flex align-items-center">
//           <div className="container maxw_1480">
//             <div className="row align-items-center justify-content-lg-between">
//               <div className="col-lg-4">
//                 <nav className="main_menu clearfix">
//                   <ul className="ul_li clearfix">
//                     <li className="menu_item_has_child">
//                       <a href="#!">Home</a>
//                       <div className="mega_menu text-center">
//                         <div
//                           className="background"
//                           data-bg-color="#ffffff"
//                         ></div>
//                       </div>
//                     </li>
//                     <li className="menu_item_has_child">
//                       <a href="#!">Shop</a>
//                     </li>

//                     <li>
//                       <a href="#!">About us</a>
//                     </li>
//                     <li>
//                       <a href="contact.html">Contact us</a>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>

//               <div className="col-lg-4">
//                 <div className="brand_logo">
//                   <a className="brand_link" href="/">
//                     <img
//                       src="../assets/logo.png"
//                       srcSet="../assets/logo.png 2x"
//                       alt="logo_not_found"
//                       style={{
//                         height: "100px",
//                       }}
//                     />
//                   </a>

//                   <ul className="mh_action_btns ul_li clearfix">
//                     <li>
//                       <button
//                         type="button"
//                         className="search_btn"
//                         data-toggle="collapse"
//                         data-target="#search_body_collapse"
//                         aria-expanded="false"
//                         aria-controls="search_body_collapse"
//                       >
//                         <i className="fal fa-search"></i>
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div
//                 className="col-lg-4"
//                 style={{ position: "relative", zIndex: 9999 }}
//               >
//                 <ul className="action_btn_group ul_li_right clearfix">
//                   <li>
//                     <button
//                       type="button"
//                       className="search_btn"
//                       data-toggle="collapse"
//                       data-target="#search_body_collapse"
//                       aria-expanded="false"
//                       aria-controls="search_body_collapse"
//                     >
//                       <i className="fal fa-search"></i>
//                     </button>
//                   </li>
//                   <li>
//                     <div style={{ position: "relative", zIndex: 10 }}>
//                       <button
//                         type="button"
//                         className="cart_btn"
//                         onClick={toggleCartSidebar}
//                       >
//                         <i className="fal fa-shopping-cart"></i>
//                         <span className="btn_badge" data-bg-color="#bf2626">
//                           {cartItems.length}
//                         </span>
//                       </button>
//                       {cartOpen && (
//                         <CartSidebar
//                           isOpen={cartOpen}
//                           cartItems={cartItems}
//                           onClose={closeCartSidebar}
//                         />
//                       )}
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           id="search_body_collapse"
//           className="search_body_collapse collapse"
//         >
//           <div className="search_body">
//             <div className="container-fluid prl_90">
//               <form action="#">
//                 <div className="form_item mb-0">
//                   <input
//                     type="search"
//                     name="search"
//                     placeholder="Type here..."
//                   />
//                   <button type="submit">
//                     <i className="fal fa-search"></i>
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </header>
//       {/* header_section - end */}
//       {/* ================================================== */}

//       {/* sidebar mobile menu & sidebar cart - start */}
//       {/* ================================================== */}
//       <div className="sidebar-menu-wrapper">
//         <div className="cart_sidebar">
//           <button type="button" className="close_btn">
//             <i className="fal fa-times"></i>
//           </button>

//           <ul className="cart_items_list ul_li_block mb_30 clearfix">
//             <li>
//               <div className="item_image">
//                 <img
//                   src="assets/images/cart/img_01.jpg"
//                   alt="image_not_found"
//                 />
//               </div>
//               <div className="item_content">
//                 <h4 className="item_title">Yellow Blouse</h4>
//                 <span className="item_price">$30.00</span>
//               </div>
//               <button type="button" className="remove_btn">
//                 <i className="fal fa-trash-alt"></i>
//               </button>
//             </li>
//             <li>
//               <div className="item_image">
//                 <img
//                   src="assets/images/cart/img_01.jpg"
//                   alt="image_not_found"
//                 />
//               </div>
//               <div className="item_content">
//                 <h4 className="item_title">Yellow Blouse</h4>
//                 <span className="item_price">$30.00</span>
//               </div>
//               <button type="button" className="remove_btn">
//                 <i className="fal fa-trash-alt"></i>
//               </button>
//             </li>
//             <li>
//               <div className="item_image">
//                 <img
//                   src="assets/images/cart/img_01.jpg"
//                   alt="image_not_found"
//                 />
//               </div>
//               <div className="item_content">
//                 <h4 className="item_title">Yellow Blouse</h4>
//                 <span className="item_price">$30.00</span>
//               </div>
//               <button type="button" className="remove_btn">
//                 <i className="fal fa-trash-alt"></i>
//               </button>
//             </li>
//           </ul>

//           <ul className="total_price ul_li_block mb_30 clearfix">
//             <li>
//               <span>Subtotal:</span>
//               <span>$90</span>
//             </li>
//             <li>
//               <span>Vat 5%:</span>
//               <span>$4.5</span>
//             </li>
//             <li>
//               <span>Discount 20%:</span>
//               <span>- $18.9</span>
//             </li>
//             <li>
//               <span>Total:</span>
//               <span>$75.6</span>
//             </li>
//           </ul>

//           <ul className="btns_group ul_li_block clearfix">
//             <li>
//               <a href="shop_cart.html">View Cart</a>
//             </li>
//             <li>
//               <a href="shop_checkout.html">Checkout</a>
//             </li>
//           </ul>
//         </div>

//         <div className="sidebar_mobile_menu">
//           <button type="button" className="close_btn">
//             <i className="fal fa-times"></i>
//           </button>

//           <div className="msb_widget brand_logo text-center">
//             <a href="index.html">
//               <img
//                 src="assets/images/logo/logo_25_1x.png"
//                 srcSet="assets/images/logo/logo_25_2x.png 2x"
//                 alt="logo_not_found"
//               />
//             </a>
//           </div>

//           <div className="msb_widget mobile_menu_list clearfix">
//             <h3 className="title_text mb_15 text-uppercase">
//               <i className="far fa-bars mr-2"></i> Menu List
//             </h3>
//             <ul className="ul_li_block clearfix">
//               <li className="active dropdown">
//                 <a
//                   href="#!"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Home
//                 </a>
//                 <ul className="ul_li_block dropdown-menu">
//                   <li>
//                     <a href="home_carparts.html">Carparts</a>
//                   </li>
//                   <li>
//                     <a href="home_classic_ecommerce.html">Classic Ecommerce</a>
//                   </li>
//                   <li>
//                     <a href="home_creative_onelook.html">Creative Onelook</a>
//                   </li>
//                   <li>
//                     <a href="home_electronic.html">Electronic</a>
//                   </li>
//                   <li>
//                     <a href="home_fashion.html">Fashion</a>
//                   </li>
//                   <li>
//                     <a href="home_fashion_minimal.html">Fashion Minimal</a>
//                   </li>
//                   <li>
//                     <a href="home_furniture.html">Furniture</a>
//                   </li>
//                   <li>
//                     <a href="home_gadget.html">Gadget</a>
//                   </li>
//                   <li>
//                     <a href="home_lookbook_creative.html">Lookbook Creative</a>
//                   </li>
//                   <li>
//                     <a href="home_lookbook_slide.html">Lookbook Slide</a>
//                   </li>
//                   <li>
//                     <a href="home_medical.html">Medical</a>
//                   </li>
//                   <li>
//                     <a href="home_modern.html">Modern</a>
//                   </li>
//                   <li>
//                     <a href="home_modern_minimal.html">Modern Minimal</a>
//                   </li>
//                   <li>
//                     <a href="home_motorcycle.html">Motorcycle</a>
//                   </li>
//                   <li>
//                     <a href="home_parallax_shop.html">Parallax Shop</a>
//                   </li>
//                   <li>
//                     <a href="home_simple_shop.html">Simple Shop</a>
//                   </li>
//                   <li>
//                     <a href="home_single_story_black.html">
//                       Single Story Black
//                     </a>
//                   </li>
//                   <li>
//                     <a href="home_single_story_white.html">
//                       Single Story White
//                     </a>
//                   </li>
//                   <li>
//                     <a href="home_sports.html">Sports</a>
//                   </li>
//                   <li>
//                     <a href="home_supermarket.html">Supermarket</a>
//                   </li>
//                   <li>
//                     <a href="home_watch.html">Watch</a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="dropdown">
//                 <a
//                   href="#!"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Shop
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li className="dropdown ul_li_block">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Carparts
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="carparts_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="carparts_shop_grid.html">Shop Grid</a>
//                       </li>
//                       <li>
//                         <a href="carparts_shop_list.html">Shop List</a>
//                       </li>
//                       <li>
//                         <a href="carparts_shop_details.html">Shop Details</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Classic Ecommerce
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="classic_ecommerce_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="classic_ecommerce_shop_details.html">
//                           Shop Details
//                         </a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Electronic
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="electronic_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="electronic_shop_details.html">Shop Details</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Fashion
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="fashion_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="fashion_shop_details.html">Shop Details</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Fashion Minimal
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="fashion_minimal_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="fashion_minimal_shop_details.html">
//                           Shop Details
//                         </a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Fashion Minimal
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="fashion_minimal_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="fashion_minimal_shop_details.html">
//                           Shop Details
//                         </a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Furniture
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="furniture_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="furniture_shop_details.html">Shop Details</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Gadget
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="gadget_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="gadget_shop_details.html">Shop Details</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Medical
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="medical_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="medical_shop_details.html">Shop Details</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Modern Minimal
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="modern_minimal_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="modern_minimal_shop_details.html">
//                           Shop Details
//                         </a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Modern
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="modern_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="modern_shop_details.html">Shop Details</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Motorcycle
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="motorcycle_shop_grid.html">Shop Grid</a>
//                       </li>
//                       <li>
//                         <a href="motorcycle_shop_list.html">Shop List</a>
//                       </li>
//                       <li>
//                         <a href="motorcycle_shop_details.html">Shop Details</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Simple Shop
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="simple_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="simple_shop_details.html">Shop Details</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Sports
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="sports_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="sports_shop_details.html">Shop Details</a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Lookbook
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="lookbook_creative_shop.html">Shop Page</a>
//                       </li>
//                       <li>
//                         <a href="lookbook_creative_shop_details.html">
//                           Shop Details
//                         </a>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Shop Other Pages
//                     </a>
//                     <ul className="dropdown-menu ul_li_block">
//                       <li>
//                         <a href="#!">
//                           <del>Shop Page</del>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="shop_details.html">Shop Details</a>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li className="dropdown">
//                 <a
//                   href="#!"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Pages
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Shop Inner Pages
//                     </a>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <a href="shop_cart.html">Shopping Cart</a>
//                       </li>
//                       <li>
//                         <a href="shop_checkout.html">Checkout Step 1</a>
//                       </li>
//                       <li>
//                         <a href="shop_checkout_step2.html">Checkout Step 2</a>
//                       </li>
//                       <li>
//                         <a href="shop_checkout_step3.html">Checkout Step 3</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="404.html">404 Page</a>
//                   </li>
//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Blogs
//                     </a>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <a href="blog.html">Blog Page</a>
//                       </li>
//                       <li>
//                         <a href="blog_details.html">Blog Details</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Compare
//                     </a>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <a href="compare_1.html">Compare V.1</a>
//                       </li>
//                       <li>
//                         <a href="compare_2.html">Compare V.2</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="dropdown">
//                     <a
//                       href="#!"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       Register
//                     </a>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <a href="login.html">Login</a>
//                       </li>
//                       <li>
//                         <a href="signup.html">Sign Up</a>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a href="contact.html">Conatct</a>
//               </li>
//             </ul>
//           </div>

//           <div className="user_info">
//             <h3 className="title_text mb_30 text-uppercase">
//               <i className="fas fa-user mr-2"></i> User Info
//             </h3>
//             <div className="profile_info clearfix">
//               <div className="user_thumbnail">
//                 <img
//                   src="assets/images/meta/img_01.png"
//                   alt="thumbnail_not_found"
//                 />
//               </div>
//               <div className="user_content">
//                 <h4 className="user_name">Jone Doe</h4>
//                 <span className="user_title">Seller</span>
//               </div>
//             </div>
//             <ul className="settings_options ul_li_block clearfix">
//               <li>
//                 <a href="#!">
//                   <i className="fal fa-user-circle"></i> Profile
//                 </a>
//               </li>
//               <li>
//                 <a href="#!">
//                   <i className="fal fa-user-cog"></i> Settings
//                 </a>
//               </li>
//               <li>
//                 <a href="#!">
//                   <i className="fal fa-sign-out-alt"></i> Logout
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="overlay"></div>
//       </div>
//       {/* sidebar mobile menu & sidebar cart - end */}
//       {/* ==================================================  */}

//       {/* breadcrumb_section - start */}
//       {/* ================================================== */}
//       <section
//         className="breadcrumb_section medical_breadcrumb text-center d-flex align-items-center clearfix"
//         style={{ backgroundColor: "#f8f9fa", padding: "50px 0" }}
//       >
//         <div className="container" style={{ marginLeft: "160px" }}>
//           <div className="row mt-5 ml-5" style={{ gap: "15px" }}>
//             {data.map((category) => (
//               <div
//                 className="col-lg-2 col-md-4 col-sm-6 mb-4 g-3"
//                 key={category.id}
//               >
//                 <div className="product_item text-center">
//                   <div className="image_card">
//                     <img
//                       src={category.sub_category_image}
//                       alt={category.sub_category_image}
//                       className="product_image"
//                     />
//                   </div>
//                   <h4 className="product_name mt-3">
//                     {category.sub_category_name}
//                   </h4>
//                   <span className="product_price">{category.price}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* breadcrumb_section - end */}
//       {/* ================================================== */}

//       {/* product_section - start */}
//       {/* ================================================== */}
//       <section
//         className="product_section sec_ptb_100 clearfix"
//         style={{ marginTop: "-80px", backgroundColor: "" }}
//       >
//         <div className="container maxw_1480">
//           <div className="carparts_filetr_bar">
//             <div className="row align-items-center justify-content-lg-between">
//               <div className="col-lg-6 col-md-6">
//                 <h4 className="result_text">Showing 1 to 16 of 17 total</h4>
//               </div>
//               <div className="col-lg-6 col-md-6">
//                 <div className="option_select d-flex align-items-center mb-0">
//                   <span className="option_title text-uppercase">Sort by:</span>
//                   {/* <select style="display: none;">
//                     <option data-display="Select Your Option">Nothing</option>
//                     <option value="1" selected="">
//                       {" "}
//                       Name
//                     </option>
//                     <option value="2">Another option</option>
//                     <option value="3" disabled="">
//                       A disabled option
//                     </option>
//                     <option value="4">Potato</option>
//                   </select> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row mb_50 justify-content-center">
//             {products.map((product) => (
//               <div
//                 className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
//                 key={product.id}
//               >
//                 <div className="ss_product_item">
//                   <div className="tab-content">
//                     {product.images.map((image, index) => (
//                       <div
//                         id={`ptab${product.id}_${index + 1}`}
//                         className={`tab-pane fade ${
//                           index === 0 ? "active" : ""
//                         }`}
//                         key={index}
//                       >
//                         <div className="item_image">
//                           <img
//                             src={image}
//                             alt={`${product.name} image`}
//                             style={{
//                               height: "300px",
//                               objectFit: "cover",
//                               borderRadius: "15px",
//                             }}
//                           />
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="item_content">
//                     <h3 className="item_title">
//                       <a href="#!">{product.name}</a>
//                     </h3>
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <ul className="rating_star ul_li clearfix mb-0">
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fal fa-star"></i>
//                         </li>
//                       </ul>
//                       <button
//                         className="add_to_cart_btn"
//                         style={{ marginRight: "40px" }}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>

//                     {/* <ul className="product_color ul_li nav mb-3 clearfix">
//                       {product.colors.map((color, index) => (
//                         <li key={index} className={index === 0 ? "active" : ""}>
//                           <a
//                             style={{ backgroundColor: color }}
//                             data-toggle="tab"
//                             href={`#ptab${product.id}_${index + 1}`}
//                           ></a>
//                         </li>
//                       ))}
//                     </ul> */}
//                     <span className="item_price">{product.price}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* product_section - end */}
//       {/* ================================================== */}

//       {/* footer_section - start */}
//       {/* ================================================== */}
//       <footer
//         className="footer_section simple_shop_footer clearfix"
//         data-bg-color="#f3f3f3"
//       >
//         <div className="footer_widget_area sec_ptb_100 clearfix">
//           <div className="container maxw_1480">
//             <div className="row justify-content-lg-between">
//               <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
//                 <div className="footer_widget footer_about">
//                   <div className="brand_logo mb_30">
//                     <a href="#!">
//                       <img
//                         src="assets/images/logo/logo_26_1x.png"
//                         srcSet="assets/images/logo/logo_26_2x.png 2x"
//                         alt="logo_not_found"
//                       />
//                     </a>
//                   </div>
//                   <p className="mb-0">
//                     Fashion trends are influenced by several factors including
//                     cinema, celebrities, climate, creative explorations,
//                     political, economical, social.
//                   </p>
//                   <hr />
//                   <div className="social_links_wrap">
//                     <h3 className="social_title">STAY IN TOUCH</h3>
//                     <p>Please write us at: admin@demolink.com</p>
//                     <ul className="circle_social_links ul_li clearfix">
//                       <li>
//                         <a href="#!">
//                           <i className="fab fa-facebook-f"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#!">
//                           <i className="fab fa-youtube"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#!">
//                           <i className="fab fa-instagram"></i>
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#!">
//                           <i className="fab fa-linkedin-in"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
//                 <div className="footer_widget footer_useful_links clearfix">
//                   <h3 className="footer_widget_title text-uppercase">
//                     STAY IN TOUCH
//                   </h3>
//                   <ul className="ul_li_block clearfix">
//                     <li>
//                       <a href="#!">About Us</a>
//                     </li>
//                     <li>
//                       <a href="#!">Term of Service</a>
//                     </li>
//                     <li>
//                       <a href="#!">Privacy Policy</a>
//                     </li>
//                     <li>
//                       <a href="#!">Promotion</a>
//                     </li>
//                     <li>
//                       <a href="#!">Return</a>
//                     </li>
//                     <li>
//                       <a href="#!">Shipping</a>
//                     </li>
//                     <li>
//                       <a href="#!">My Account</a>
//                     </li>
//                     <li>
//                       <a href="#!">Track Your Order</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
//                 <div className="footer_widget best_seller">
//                   <h3 className="footer_widget_title text-uppercase">
//                     Best Seller
//                   </h3>
//                   <div className="electronic_product_small">
//                     <a className="item_image" href="#!">
//                       <img
//                         src="assets/images/shop/simple_shop/img_09.jpg"
//                         alt="image_not_found"
//                       />
//                     </a>
//                     <div className="item_content">
//                       <h4 className="item_title">
//                         <a href="#!">Oversize Drawstring Sweatshirt</a>
//                       </h4>
//                       <ul className="rating_star ul_li mb-2 clearfix">
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fal fa-star"></i>
//                         </li>
//                       </ul>
//                       <span className="item_price">$3,49.99</span>
//                     </div>
//                   </div>

//                   <div className="electronic_product_small">
//                     <a className="item_image" href="#!">
//                       <img
//                         src="assets/images/shop/simple_shop/img_10.jpg"
//                         alt="image_not_found"
//                       />
//                     </a>
//                     <div className="item_content">
//                       <h4 className="item_title">
//                         <a href="#!">Oversize Drawstring Sweatshirt</a>
//                       </h4>
//                       <ul className="rating_star ul_li mb-2 clearfix">
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fal fa-star"></i>
//                         </li>
//                       </ul>
//                       <span className="item_price">$3,49.99</span>
//                     </div>
//                   </div>

//                   <div className="electronic_product_small">
//                     <a className="item_image" href="#!">
//                       <img
//                         src="assets/images/shop/simple_shop/img_11.jpg"
//                         alt="image_not_found"
//                       />
//                     </a>
//                     <div className="item_content">
//                       <h4 className="item_title">
//                         <a href="#!">Oversize Drawstring Sweatshirt</a>
//                       </h4>
//                       <ul className="rating_star ul_li mb-2 clearfix">
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fas fa-star"></i>
//                         </li>
//                         <li>
//                           <i className="fal fa-star"></i>
//                         </li>
//                       </ul>
//                       <span className="item_price">$3,49.99</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
//                 <div className="footer_widget footer_useful_links clearfix">
//                   <h3 className="footer_widget_title text-uppercase">Shop</h3>
//                   <ul className="ul_li_block clearfix">
//                     <li>
//                       <a href="#!">Accessories</a>
//                     </li>
//                     <li>
//                       <a href="#!">Bags</a>
//                     </li>
//                     <li>
//                       <a href="#!">Decoration</a>
//                     </li>
//                     <li>
//                       <a href="#!">Furnitures</a>
//                     </li>
//                     <li>
//                       <a href="#!">Contacts</a>
//                     </li>
//                     <li>
//                       <a href="#!">Exchanges</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="footer_bottom text-white clearfix"
//           data-bg-color="#141414"
//           style={{ backgroundColor: "black" }}
//         >
//           <div className="container maxw_1480">
//             <div className="row align-items-center justify-content-lg-between">
//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                 <p className="copyright_text mb-0">
//                   ©{" "}
//                   <a href="#!" className="author_link text-white">
//                     Neoncart
//                   </a>{" "}
//                   - All rights Reserved
//                 </p>
//               </div>

//               <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
//                 <div className="payment_methods float-lg-right float-md-right">
//                   <img
//                     src="assets/images/payment_methods_01.png"
//                     alt="image_not_found"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//       {/* footer_section - end */}
//       {/* ==================================================  */}
//     </div>
//   );
// };

// export default MotivationalBooks;
