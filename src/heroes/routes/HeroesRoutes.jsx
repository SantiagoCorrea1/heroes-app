import { Navigate, Route, Routes } from "react-router-dom"
import { DcPage, MarvelPage, HeroPage, SearchPage } from "../pages"
import { Navbar } from "../../ui"

export const HeroesRoutes = () => {
  return (
    <>

        <Navbar />
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="/" element={<Navigate to="/marvel"/>} />
                <Route path="/hero/:id" element={<HeroPage />} />


                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </div>

    </>
  )
}

