import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
    asin: "",
  };
  changeAsin = () => {
    if (this.state.asin === "") {
      this.setState({ asin: this.props.book.asin });
    } else if (this.state.asin !== "") {
      this.setState({ asin: "" });
    }
  };
  render() {
    return (
      <>
        <Card
          onClick={() => {
            this.setState({
              selected: !this.state.selected,
            });
            this.props.bookSelection(this.props.book.asin);
            this.changeAsin();
          }}
          style={{ border: this.state.asin === this.props.book.asin ? "3px solid red" : "none" }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
