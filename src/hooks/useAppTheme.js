import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleThemeAction,
  toggleThemeFromOSAction,
} from "../redux/actions/prefAction";

export const useAppTheme = () => {
  const darkTheme = useSelector((state) => state.prefReducer.darkTheme);
  const dispatch = useDispatch();

  const onToggleTheme = () => {
    dispatch(toggleThemeAction());
  };

  useEffect(() => {
    const onListenerMedia = (mq) => {
      dispatch(toggleThemeFromOSAction(mq.matches));
    };

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(onListenerMedia);
    dispatch(toggleThemeFromOSAction(mq.matches));
    return () => mq.removeListener(onListenerMedia);
  }, [dispatch]);

  return {
    darkTheme,
    onToggleTheme,
  };
};
