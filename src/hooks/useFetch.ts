import { useAppDispatch } from "@/redux/hooks";
import { loadCountries } from "@/redux/slices/country.slice";
import { useCallback, useEffect } from "react";

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
