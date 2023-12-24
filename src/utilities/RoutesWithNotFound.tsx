import { PropsWithChildren } from "react";
import { Route, Routes } from "react-router-dom";

export const RoutesWithNotFound = ({children}: PropsWithChildren) => {
    return (
        <Routes>
          {children}
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      );
}