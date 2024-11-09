import axios from "axios";

export const base_url = import.meta.env.VITE_BASE_URL;


export const getDeviceType = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/mobile|android|iphone|ipad|tablet/.test(userAgent)) {
    return "Mobile";
  } else if (/mac|win|linux/.test(userAgent)) {
    return "Desktop";
  }
  return "Unknown";
};


// export async function fetchCategories() {
//   try {
//     const response = await fetch(`${base_url}/product/get_all_category?page=0`);
//     if (!response.ok) {
//       throw new Error(`An error occurred: ${response.statusText}`);
//     }

//     const data = await response.json();
//     console.log("data",data);

//     // Check if the API returned the expected structure
//     if (data.status === 200 && data.data && data.data.rows) {
//       console.log("Categories fetched successfully:", data.data.rows);
//       return data.data.rows; // Array of category objects
//     } else {
//       throw new Error("Failed to retrieve categories");
//     }
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return null;
//   }
// }

// export async function fetchCategories() {
//   try {
//     const response = await axios.get(
//       `${base_url}/product/get_all_category?page=0`
//     );
//     const data = await response.json();
//     return data?.data?.rows || [];
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// }

// export async function getSingleCategory() {
//   try {
//     const category = await axios.get(`${base_url}/product/get_category/${id}`);
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// }
