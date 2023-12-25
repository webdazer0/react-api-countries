import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleTheme, toggleThemeFromOs } from "@/redux/reducers/prefSlice";
import { useEffect } from "react";

export const useAppTheme = () => {
  const darkTheme = useAppSelector((state) => state.pref.darkTheme);
  const dispatch = useAppDispatch();

  const onToggleTheme = () => dispatch(toggleTheme());

  useEffect(() => {
    const onListenerMedia = (mq: MediaQueryListEvent) => {
      dispatch(toggleThemeFromOs(mq.matches));
    };

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(onListenerMedia);
    dispatch(toggleThemeFromOs(mq.matches));
    return () => mq.removeListener(onListenerMedia);
  }, [dispatch]);

  return {
    darkTheme,
    onToggleTheme,
  };
};
