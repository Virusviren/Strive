import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import uniqid from 'uniqid';
import JobResults from './JobResults';
import { Link } from 'react-router-dom';
import Favorites from './Favorites';

export default class MainSearch extends React.Component {
  state = {
    query: '',
    jobs: [],
  };

  baseEndpoint = 'https://remotive.io/api/remote-jobs?search=';

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(this.baseEndpoint + this.state.query);

    if (!response.ok) {
      alert('Error fetching results');
      return;
    }

    const { jobs } = await response.json();

    this.setState({ jobs });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} className='mx-auto my-3'>
            <h1>Remote Jobs Search</h1>
            <Link to='/favorites' className='btn btn-primary'>
              Favorites
            </Link>
          </Col>
          <Col xs={10} className='mx-auto'>
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type='search'
                value={this.state.query}
                onChange={this.handleChange}
              />
            </Form>
          </Col>
          <Col xs={10} className='mx-auto mb-5'>
            {this.state.jobs.map((jobData) => (
              <JobResults key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
