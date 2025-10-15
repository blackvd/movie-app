import { Col, Form, Row } from "react-bootstrap";

function Filter({titleFilter, ratingFilter, setTitleFilter, setRateFilter}) {
    return (
        <Row className="mb-4">
        <Col md={6}>
            <Form.Control
                type="text"
                placeholder="Search by title..."
                value={titleFilter}
                onChange={(e) => setTitleFilter(e.target.value)}
                />
        </Col>
        <Col md={6}>
            <Form.Control
                type="number"
                min={0}
                max={10}
                placeholder="Minimum rating..."
                value={ratingFilter}
                onChange={(e) => setRateFilter(e.target.value)}
                />
        </Col>
    </Row>
    )
}

export default Filter