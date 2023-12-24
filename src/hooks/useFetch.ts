import { useEffect, useCallback } from "react";
import { useAppDispatch } from "../redux/hooks";
import { loadCountries } from "../redux/reducers/countrySlice";

const useFetch = (url: string) => {
  const dispatch = useAppDispatch();

  const showCountries = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(loadCountries(data));
    } catch (err) {
      //
    }
  }, [dispatch, url]);

  useEffect(() => {
    showCountries();
  }, [showCountries]);
};

export default useFetch;
