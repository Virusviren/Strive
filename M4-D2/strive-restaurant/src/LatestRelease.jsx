import React from "react";
import books from "../src/data/history.json";
import Carousel from "react-bootstrap/Carousel";
export default function LatestRelease() {
  return (
    <div className="container mb-5 p-2">
      <Carousel>
        {books.map((book) => (
          <Carousel.Item className="img-fluid ">
            <div className="d-flex justify-content-center">
              <img
                className="d-block w-25  "
                src={book.img}
                alt="First slide"
              />
            </div>

            <Carousel.Caption>
              <div className="info  text-nowrap">
                <h3 className="text-dark">First slide label</h3>
                <p className="text-dark">
                  vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
