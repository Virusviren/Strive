import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Star, StarFill } from 'react-bootstrap-icons';
import { addToFav, removeFromFav } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
// const mapStateToProps = (s) => s;
// const mapDispatchToProps = (dispatch) => ({
//   addToFavourites: (company) => dispatch(addToFav(company)),
//   removeFromFavourties: (company) => dispatch(removeFromFav(company)),
// });
function JobResults({
  data,
  //   favourties,
  addToFavourites,
  removeFromFavourties,
}) {
  const dispatch = useDispatch();
  const favourties = useSelector((state) => state.favourties);
  console.log(data);
  const isFav = favourties.length > 0 && favourties.includes(data.company_name);
  const toggleFavourite = () => {
    return isFav
      ? dispatch(removeFromFav(data.company_name))
      : dispatch(addToFav(data.company_name));
  };
  return (
    <Row
      className='mx-0 mt-3 p-3'
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3} className='d-flex'>
        {isFav ? (
          <StarFill
            color='gold'
            size={16}
            className='me-4 my-auto'
            onClick={toggleFavourite}
          />
        ) : (
          <Star
            color='glod'
            size={16}
            className='me-4 my-auto'
            onClick={toggleFavourite}
          />
        )}

        <Link to={`/${data.company_name}`}> {data.company_name} </Link>
      </Col>
      <Col xs={9}>
        <Link to={{ pathname: data.url }} target='_blank'>
          {data.title}
        </Link>
      </Col>
    </Row>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(JobResults);

export default JobResults;
