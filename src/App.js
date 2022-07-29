/** @format */
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyNavbar from "./components/MyNavbar"
import Home from "./components/Home"
import TvShow from "./components/TvShow"
import MyFooter from "./components/MyFooter"
import NotFound from "./components/NotFound"
import MovieDetails from "./components/MovieDetails"

function App() {
  return (
    <BrowserRouter>
      <>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/TvShow' element={<TvShow />} />
          <Route path='/MovieDetails/:movieId' element={<MovieDetails />} />
          <Route path='*' element={<NotFound />} />

          {/* <Route path='/reservations' element={<ReservationsList />} />
          <Route path='/form' element={<ReservationForm />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/detail/:pastaId' element={<PastaDetail />} />
          <Route path='/class' element={<ClassExample />} />
          <Route path='*' element={<NotFound />} /> */}
        </Routes>
        <MyFooter />
      </>
    </BrowserRouter>
  )
}

export default App
