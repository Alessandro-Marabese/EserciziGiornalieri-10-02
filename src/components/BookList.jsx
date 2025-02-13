import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [asin, setAsin] = useState("");
  const bookSelection = (asin) => {
    setAsin(asin);
  };
  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control type="search" placeholder="Cerca un libro" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="col-9">
          <Row className="g-2 mt-3">
            {books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook book={b} bookSelection={bookSelection} asin={asin} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col className="col-3">{asin !== "" && <CommentArea asin={asin} />}</Col>
      </Row>
    </>
  );
};

export default BookList;
