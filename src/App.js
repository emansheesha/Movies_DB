import { Container } from "react-bootstrap";
import "./App.css";
import { useEffect, useState } from "react";
import NavbarComp from "./components/NavbarComp/NavbarComp";
import Cards from "./components/Cards/Cards";
import { getAllMovies, searchAllMovies } from "./axios/axios";
import Pagination from "./components/Pagination";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";


function App() {
  const [movies, setMovies] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    async function fetchMyAPI() {
      const data = await getAllMovies()
      setMovies(data);
      setNumberOfPages(data.total_pages)
    }
    fetchMyAPI()
  }, []);
  const handlePageChange = async (page) => {
    const data = await getAllMovies(page);
    setMovies(data)
  }
  const searchedMovies = async (searchTxt) => {
    if (searchTxt) {
      const data = await searchAllMovies(searchTxt);
      setMovies(data);
    }
    else {
      const data = await getAllMovies();
      setMovies(data);
    }
  }
  return (
    <div className="App">
      <NavbarComp searchedMovies={searchedMovies} />
      <Container className="my-3">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<>
              <Cards moviesData={movies?.results} />
              {numberOfPages > 1 ? <Pagination numberOfPages={numberOfPages} handlePageChange={handlePageChange} /> : null}
            </>}>
            </Route>
            <Route path='/movie/:id' element={<MovieDetails />} > </Route>
          </Routes>
        </BrowserRouter>

      </Container>
    </div>
  );
}

export default App;
