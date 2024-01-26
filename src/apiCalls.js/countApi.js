import axios from "axios";

export const sentCount = async (count) => {
  axios.patch(
    `${import.meta.env.VITE_API}/counts/${import.meta.env.VITE_COUNT_ID}`,
    { count }
  );
};
