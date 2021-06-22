import React from "react";
import books from "../src/data/history.json";
import Carousel from "react-bootstrap/Carousel";

function showPopup() {
  return <textarea placeholder="hello"></textarea>;
}

export default class LatestRelease extends React.Component {
  state = {
    selected: null,
  };
  render() {
    return (
      <div className="container mb-5 p-2">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {books.map((book) => (
            <div className="col">
              <div className="card shadow-sm">
                <img src={book.img} style={{ height: "50%" }} />

                <div className="card-body">
                  <p className="card-text">{book.title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => this.setState({ selected: book.asin })}
                      >
                        Add Comment
                      </button>
                      <button
                        onClick={showPopup}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Delete Comment
                      </button>
                    </div>
                    <small className="text-muted">Price {book.price}$</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* {this.state.selected && <CmmentArea asin={this.state.selected}/>} */}
      </div>
    );
  }
}
