import { Button, Container, Form, Modal } from "react-bootstrap";
import MovieList from "./MovieList";
import Filter from "./Filter";
import { useState } from "react";
import moviesData from "./movies";

function Home() {
    const [showModal, setShowModal] = useState(false);

    const [movies, setMovies] = useState(moviesData);
    const [titleFilter, setTitleFilter] = useState("");
    const [rateFilter, setRateFilter] = useState(0);

    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        posterURL: "",
        rating: 0,
    });

    // toggle modal
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    // Handle input changes
    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    // Add movie
    const handleAddMovie = (e) => {
        e.preventDefault();
        setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
        setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
        handleClose()
    };

    const filteredMovies = movies.filter((movie) => {
        const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
        const matchesRating = movie.rating >= rateFilter
        return matchesTitle && matchesRating
    })

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">🎬 My Movie App</h1>
            <Filter titleFilter={titleFilter} ratingFilter={rateFilter} setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
            
            <Button type="button" onClick={handleShow}>Add Movie</Button>
            
            <MovieList movies={filteredMovies}/>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control name="title"
                                placeholder="Title"
                                value={newMovie.title}
                                onChange={handleChange}
                                required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description"
                                as="textarea" rows={3}
                                placeholder="Description"
                                value={newMovie.description}
                                onChange={handleChange}
                                required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Poster URL</Form.Label>
                            <Form.Control name="posterURL"
                                placeholder="Poster URL"
                                value={newMovie.posterURL}
                                onChange={handleChange}
                                required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control name="rating"
                                type="number"
                                placeholder="Rating"
                                value={newMovie.rating}
                                onChange={handleChange}
                                required></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type="button" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAddMovie}>
                        Add Movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Home