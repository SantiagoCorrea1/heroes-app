import { Navigate, Route, Routes } from "react-router-dom"

import { DcPage, HeroesRoutes, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <>  

        <Routes>

            <Route path="login" element={
              <PublicRoute >
                <LoginPage />
              </PublicRoute>
            } />
            
            <Route path="/*" element={ 
              <PrivateRoute >
                <HeroesRoutes />
              </PrivateRoute>
             } />

        </Routes>
    </>
  )
}

export default AppRouter
