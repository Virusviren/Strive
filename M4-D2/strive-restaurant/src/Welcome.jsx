import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function Welcome() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to the Strive Restaurant</h1>
          <p>Enjoy the delicous meal made by world class chefs.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}
