/** @format */

import { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { Container, Alert, Dropdown } from "react-bootstrap"
import MyNavbar from "../components/MyNavbar"
import MyFooter from "../components/MyFooter"
import MovieList from "../components/MovieList"
import { useState } from "react"
import { useEffect } from "react"

const Home = () => {
  // state = {
  //   gallery1: [],
  //   // gallery2: [],
  //   // gallery3: [],
  //   searchResults: [],
  //   loading: true,
  //   error: false,
  // }
  const [gallary, setGallary] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const OMDB_URL = `${process.env.REACT_APP_URL}`

  // const componentDidMount = () => {
  //   fetchMovies()
  //   console.log(gallary)
  // }

  const fetchMovies = () => {
    // Promise.all([
    //   fetch(OMDB_URL + "/medias")
    //     .then((response) => response.json())
    //     .then((responseObject) => {
    //       if (responseObject.Response === "True") {
    //         //setState({ gallery1: responseObject.Response })
    //         setGallary(responseObject.Response)
    //       } else {
    //         //setState({ error: true })
    //         setError(true)
    //       }
    //     }),

    // ])
    //   //.then(() => setState({ loading: false }))
    //   .then(() => setLoading(false))
    //   .catch((err) => {
    //     setError(true)
    //     console.log("An error has occurred:", err)
    //   })
    let response = fetch(OMDB_URL + "/medias")
    let data = response.json()
  }

  const showSearchResult = async (searchString) => {
    if (searchString === "") {
      //  setState({ error: false, searchResults: [] }, () => {
      //    fetchMovies()
      //  })
      setError(false)
      setSearchResults([])
      fetchMovies()
    } else {
      try {
        const response = await fetch(this.OMDB_URL + "&s=" + searchString)
        if (response.ok) {
          const data = await response.json()
          if (data.Response === "True") {
            //setState({ searchResults: data.Search, error: false })
            setSearchResults(data.Search)
            setError(false)
          } else {
            //setState({ error: true })
            setError(true)
          }
        } else {
          //setState({ error: true })
          setError(true)
          console.log("an error occurred")
        }
      } catch (error) {
        //setState({ error: true })
        setError(true)
        console.log(error)
      }
    }
  }
  useEffect(() => {
    fetchMovies()
    console.log(gallary)
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
        {/* {this.state.error && (
            <Alert variant='danger' className='text-center'>
              An error has occurred, please try again!
            </Alert>
          )}
          {this.state.searchResults?.length > 0 && (
            <MovieList
              title='Search results'
              movies={this.state.searchResults}
            />
          )} */}
        {!error && !searchResults?.length > 0 && (
          <>
            <MovieList
              title='Harry Potter'
              loading={loading}
              movies={gallary.slice(0, 6)}
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
