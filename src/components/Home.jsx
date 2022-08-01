/** @format */
import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { Container, Alert, Dropdown } from "react-bootstrap"
import MyNavbar from "../components/MyNavbar"
import MyFooter from "../components/MyFooter"
import MovieList from "../components/MovieList"

const Home = () => {
  // state = {
  //   gallery1: [],
  //   // gallery2: [],
  //   // gallery3: [],
  //   searchResults: [],
  //   loading: true,
  //   error: false,
  // }
  const [gallery, setGallery] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const OMDB_URL = `${process.env.REACT_APP_URL}`

  // const componentDidMount = () => {
  //   fetchMovies()
  //   console.log(gallary)
  // }

  const fetchMovies = async () => {
    try {
      const response = await fetch(OMDB_URL + "/medias")
      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  // const showSearchResult = async (searchString) => {
  //   if (searchString === "") {
  //     //  setState({ error: false, searchResults: [] }, () => {
  //     //    fetchMovies()
  //     //  })
  //     setError(false)
  //     setSearchResults([])
  //     fetchMovies()
  //   } else {
  //     try {
  //       const response = await fetch(OMDB_URL + "&s=" + searchString)
  //       if (response.ok) {
  //         const data = await response.json()
  //         if (data.Response === "True") {
  //           //setState({ searchResults: data.Search, error: false })
  //           setSearchResults(data.Search)
  //           setError(false)
  //         } else {
  //           //setState({ error: true })
  //           setError(true)
  //         }
  //       } else {
  //         //setState({ error: true })
  //         setError(true)
  //         console.log("an error occurred")
  //       }
  //     } catch (error) {
  //       //setState({ error: true })
  //       setError(true)
  //       console.log(error)
  //     }
  //   }
  // }
  useEffect(() => {
    fetchMovies().then((movie) => {
      //setGallery(movie)
    })
    //console.log(gallery)
    //setGallery(fetchMovies)
  })

  return (
    <div>
      <Container fluid className='px-4'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex'>
            <h2 className='mb-4'>TV Shows</h2>
            <div className='ml-4 mt-1'>
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: "#221f1f" }}
                  id='dropdownMenuButton'
                  className='btn-secondary btn-sm dropdown-toggle rounded-0'>
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu bg='dark'>
                  <Dropdown.Item href='#/action-1'>Comedy</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>Drama</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>Thriller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <i className='fa fa-th-large icons'></i>
            <i className='fa fa-th icons'></i>
          </div>
        </div>
        {/* {error && (
          <Alert variant='danger' className='text-center'>
            An error has occurred, please try again!
          </Alert>
        )}
        {searchResults?.length > 0 && (
          <MovieList title='Search results' movies={searchResults} />
        )} */}
        {/* {!error && !searchResults?.length > 0 && ( */}
        {gallery && (
          <>
            <MovieList
              title='Harry Potter'
              loading={loading}
              movies={gallery.slice(0, 6)}
            />
            {/* <MovieList
                title='The Avengers'
                loading={loading}
                movies={gallery2.slice(0, 6)}
              />
              <MovieList
                title='Star Wars'
                loading={loading}
                movies={gallery3.slice(0, 6)}
              /> */}
          </>
        )}
      </Container>
    </div>
  )
}

export default Home
