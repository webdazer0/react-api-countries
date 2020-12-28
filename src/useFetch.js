import { useEffect, useCallback } from "react";

const useFetch = (url) => {
  const showCountries = useCallback(async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "SET_COUNTRY_LIST",
        payload: data,
      });
      console.log(data.length);
    } catch (err) {
      console.log("Something went wrong!!!");
    }
  }, [dispatch]);

  useEffect(() => {
    showCountries();
  }, [showCountries]);
};

export default useFetch;
