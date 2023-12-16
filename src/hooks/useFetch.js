import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { loadCountriesAction } from "../country-actions";

const useFetch = (url) => {
  const dispatch = useDispatch();

  const showCountries = useCallback(async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch(loadCountriesAction(data));
    } catch (err) {
      //
    }
  }, [dispatch]);

  useEffect(() => {
    showCountries();
  }, [showCountries]);
};

export default useFetch;
