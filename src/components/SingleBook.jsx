import { Card } from "react-bootstrap";

const SingleBook = ({ bookSelection, asin, book }) => {
  return (
    <>
      <Card
        onClick={() => {
          bookSelection(book.asin);
        }}
        style={{ border: asin === book.asin ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
