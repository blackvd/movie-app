import { Card } from "react-bootstrap"

function MovieCard({movie}) {
    return (
        <Card style={{ width: '18rem', margin: "1rem" }}>
            <Card.Img variant="top" src={movie.posterURL} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text>⭐ {movie.rating}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard