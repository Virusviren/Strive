import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StarFill, Star } from 'react-bootstrap-icons';
import { removeFromFav } from '../store/actions';

const Favorites = () => {
  const favorites = useSelector((state) => state.favourties);
  console.log(favorites);
  const dispatch = useDispatch();
  const toggleFavourite = (item) => {
    dispatch(removeFromFav(item));
  };

  return (
    <>
      {favorites.map((item) => (
        <Row
          className='mx-0 mt-3 p-3'
          style={{ border: '1px solid #00000033', borderRadius: 4 }}
        >
          <Col xs={3} className='d-flex'>
            <StarFill
              color='gold'
              size={16}
              className='me-4 my-auto'
              onClick={() => {
                toggleFavourite(item);
              }}
            />
          </Col>

          <Col xs={3}>
            <Link to={`/${item}`}> {item} </Link>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Favorites;
