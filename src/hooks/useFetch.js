import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

const useFetch = (url) => {
  const dispatch = useDispatch();

  const showCountries = useCallback(async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "SET_COUNTRY_LIST",
        payload: data,
      });
    } catch (err) {
      //
    }
  }, [dispatch]);

  useEffect(() => {
    showCountries();
  }, [showCountries]);
};

export default useFetch;
