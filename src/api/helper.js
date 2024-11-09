// Helper function to determine the device type
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { base_url } from "./index";

// Custom hook for fetching category and product data
export function useCategoryData(id) {
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(
    sessionStorage.getItem("selectedCategoryId") || null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetches category data and initializes subcategory selection
  useEffect(() => {
    const fetchCategoryData = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const response = await axios.get(
          `${base_url}/product/get_category/${id}`
        );

        if (response.status === 200) {
          const data = response.data.data.Sub_Categories;
          setSubCategories(data);

          // Set selected subcategory only once
          if (!selectedSubCategoryId && data.length > 0) {
            setSelectedSubCategoryId(data[0].id);
          }
        } else {
          setError("Failed to load categories");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch category data");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [id]);

  // Fetches products based on the selected subcategory
  useEffect(() => {
    const fetchProducts = async () => {
      if (!selectedSubCategoryId) return;
      setLoading(true);
      try {
        const response = await axios.get(
          `${base_url}/api/v1/product/get_sub_category/${selectedSubCategoryId}`
        );
        if (response.statusCode === 200) {
          setProducts(response.data.data.ProductLists || []);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedSubCategoryId]);

  const handleCategoryClick = useCallback((subCategoryId) => {
    setSelectedSubCategoryId(subCategoryId);
  }, []);

  return { subCategories, products, loading, error, handleCategoryClick };
}
