import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import moviesData from "./movies"
import { Button, Container } from "react-bootstrap"

function MovieDetails() {
    const params = useParams()
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        posterURL: "",
        rating: 0,
    })


    useEffect(() => {
        const title = params.title
        const findMovie = moviesData.find(m => m.title.toLowerCase() === title.toLowerCase())

        setMovie({...movie, ...findMovie})

    }, [])

    return (
        <Container className="text-center mt-5">
            <h2>{movie.title}</h2>
            <p className="mt-3">{movie.description}</p>
            <div className="ratio ratio-16x9 mb-4">
                <iframe
                src={movie.trailerLink}
                title={movie.title}
                allowFullScreen
                ></iframe>
            </div>
            <Link to="/">
                <Button variant="primary">Back to Home</Button>
            </Link>
        </Container>
    )
}

export default MovieDetails