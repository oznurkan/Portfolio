import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const fetchData = (lang) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_START });

    try {
      const response = await axios.get("/data.json");
      const allData = response.data;

      dispatch({ 
        type: FETCH_DATA_SUCCESS, 
        payload: allData[lang] 
      });
      try {
        await axios.post(
          "https://reqres.in/api/workintech", 
          allData, 
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "deneme", 
              "x-reqres-env": "prod"
            }
          }
        );
        console.log("Reqres POST işlemi başarılı.");
      } catch (apiError) {
        console.warn("Reqres API hatası (Muhtemelen CORS):", apiError.message);
      }

    } catch (error) {
      dispatch({ 
        type: FETCH_DATA_ERROR, 
        payload: error.message 
      });
    }
  };
};