import axios from "axios";


//Allow cookies to be sent do the browser. It sets a default configuration for Axios requests to include credentials when making cross-origin requests
axios.defaults.withCredentials = true;

export const sentCount = async (count) => {
  axios.patch(
    `${import.meta.env.VITE_API}/counts/${import.meta.env.VITE_COUNT_ID}`,
    { count }
  );
};


export const getCountFromCookies = async (setCount) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API}/counts/count`)

    if(response.data){
      
    
    //convert count to number. It comes from json object, therefore it's a string
     setCount( +response.data.count)
    }
  } catch (error) {
    console.log(error)
  }
}