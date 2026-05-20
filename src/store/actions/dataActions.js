import axios from "axios";
import { toast } from "react-toastify";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const fetchData = (lang) => {
  return async (dispatch, getState) => {

    const { data } = getState(); 
    
    if (data?.loading) {
      return; 
    }

    dispatch({ type: FETCH_DATA_START });
    toast.info(lang === "en" ? "Loading resume data..." : "Özgeçmiş verileri yükleniyor...", { autoClose: 1000 });


    try {
      const response = await axios.get("/data.json");
      const allData = response.data;

      dispatch({ 
        type: FETCH_DATA_SUCCESS, 
        payload: allData[lang] 
      });
      
      try {
        await axios.post(
          "https://jsonplaceholder.typicode.com/posts", 
          allData, 
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        toast.success(lang === "en" ? "Welcome!" : "Hoş geldiniz!");
      } catch (reqresError) {
        console.warn("Reqres API key is missing, expired, or invalid:", reqresError.message);
      }

    } catch (error) {
      dispatch({ 
        type: FETCH_DATA_ERROR, 
        payload: error.message 
      });
      toast.error(lang === "en" ? "Failed to load resume!" : "Özgeçmiş yüklenirken hata oluştu!");
    }
  };
};