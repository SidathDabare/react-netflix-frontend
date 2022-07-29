import React, { useEffect, useState } from 'react'
import { Badge, Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const MovieDetails = () => {
    const params = useParams()
    console.log(params);

    const [selected, setSelected] = useState(true)
    const [details, setDetails] = useState([])
    const [comments, setComments] = useState([])
    const [error, setError] = useState([])
    useEffect(() => {
        if (selected === true) {
            fetchDetails()
            fetchComments()
        }

    }, [])


    const fetchDetails = async () => {
        const movieDetails = 'http://www.omdbapi.com/?apikey=4f9077c5&i=' + params.movieId
        try {
            const response = await fetch(movieDetails)

            if (response.ok) {
                setSelected(false)
                let data = await response.json()
                console.log(data)
                setDetails(data)


            } else {
                console.log('an error occurred')
                setSelected(true)
            }
        } catch (error) {
            console.log(error)

        }
    }
    const fetchComments = async () => {
        const COMMENTS_URL = 'https://striveschool-api.herokuapp.com/api/comments/'
        try {
            const response = await fetch(COMMENTS_URL + params.movieId, {
                headers: {
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NTQwMDIzNTksImV4cCI6MTY1NTIxMTk1OX0.Az-VKL4DCsHqOMRsgI6JMGX4WTRG5BR3DAMEsMZdj6E',
                },
            })
            if (response.ok) {
                const comments = await response.json()
                //this.setState({ error: false, comments })
                setError(false)
                setComments(comments)
            } else {
                console.log('an error occurred')
                //this.setState({ error: true })
                setError(true)
            }
        } catch (error) {
            console.log(error)
            //this.setState({ error: true })
            setError(true)
        }
    }


    return (
        <>

            <Container>
                <Row>{selected && <Spinner animation="border" variant="light" />}</Row>

                <Row className="justify-content-center mt-3">

                    <Col className="justify-content-center" md={6} lg={4} ><img src={details.Poster} alt="" /></Col>
                    <Col md={6} lg={8} className='d-flex'>
                        {!selected && <ListGroup md={4}>
                            <Col className='pr-0'>
                                <ListGroup.Item><strong>Title:</strong></ListGroup.Item>
                                <ListGroup.Item><strong>Actors:</strong></ListGroup.Item>
                                <ListGroup.Item><strong>Year:</strong></ListGroup.Item>
                                <ListGroup.Item><strong>Genre:</strong></ListGroup.Item>
                                <ListGroup.Item><strong>Language:</strong></ListGroup.Item>
                                <ListGroup.Item><strong>Country:</strong></ListGroup.Item>
                                <ListGroup.Item><strong>Awards:</strong></ListGroup.Item>
                            </Col>
                        </ListGroup>}
                        {!selected && <ListGroup md={8}>
                            <Col className='px-0'>
                                <ListGroup.Item>{details.Title}</ListGroup.Item>
                                <ListGroup.Item>{details.Actors}</ListGroup.Item>
                                <ListGroup.Item>{details.Year}</ListGroup.Item>
                                <ListGroup.Item>{details.Genre}</ListGroup.Item>
                                <ListGroup.Item>{details.Language}</ListGroup.Item>
                                <ListGroup.Item>{details.Country}</ListGroup.Item>
                                <ListGroup.Item>{details.Awards}</ListGroup.Item>
                            </Col>

                        </ListGroup>}
                    </Col>
                    {!selected && <ListGroup md={12} lg={12}>
                        <Col className='pr-0'>
                            {comments.map((comment) => (
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    <span >{comment.comment}</span>
                                    <Badge pill variant="info" className='mx-1' >
                                        {comment.rate}
                                    </Badge>

                                </ListGroup.Item>
                            ))}
                        </Col>
                    </ListGroup>}

                </Row>
            </Container>


        </>
    )
}

export default MovieDetails