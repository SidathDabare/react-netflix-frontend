import React, { useEffect, useState } from 'react'
import { Container, Alert, Dropdown } from "react-bootstrap"
import MovieList from './MovieList'


const TvShow = () => {
    const [search, setSearch] = useState([])
    console.log(search)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const OMDB_URL = "http://www.omdbapi.com/?t=series&apikey=c61647b"
    const fetchTvShows = async () => {
        try {
            let response = await fetch(OMDB_URL + "&s=game+of+thrones");
            if (response.ok) {
                let data = await response.json()
                console.log(data);
                setSearch(data.Search)
                setLoading(false)
            } else {
                console.log('error happened!')
                setLoading(false)
                setError(true)
            }

        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        console.log("I'm tv show")
        fetchTvShows()
    }, [])

    return (
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
            {error && (
                <Alert variant='danger' className='text-center'>
                    An error has occurred, please try again!
                </Alert>
            )}

            {/* {setSearch?.length > 0 && (
                <MovieList
                    title='Search results'
                    movies={setSearch}
                />
            )} */}
            {search &&
                <MovieList
                    title={"hello"}
                    loading={loading}
                    movies={search.slice(0, 6)}
                />
            }
            {/* {!error && !setSearch?.length > 0 && (
                <>
                     <MovieList
                        title='Harry Potter'
                        loading={loading}
                        movies={setSearch.slice(0, 6)}
                    /> 
                     <MovieList
                        title='The Avengers'
                        loading={this.state.loading}
                        movies={this.state.gallery2.slice(0, 6)}
                    />
                    <MovieList
                        title='Star Wars'
                        loading={this.state.loading}
                        movies={this.state.gallery3.slice(0, 6)}
                    /> 
                </>
            )} */}

        </Container>
    )
}

export default TvShow