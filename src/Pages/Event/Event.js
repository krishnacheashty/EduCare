import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Event.css'

import { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';

import {getEvent as listEvent} from '../../redux/actions/eventAction';

const Event = () => {
  const dispatch=useDispatch();
  const getEvent=useSelector(state=>state.getEvent);
  
  // console.log(getEvent)

const {eventItem,loading,error}=getEvent;


useEffect(() => {
  dispatch(listEvent()) 

}, [dispatch]);

    return (
        <Container>
      <Row>
        {loading ? <h2>Loading ...</h2>:error ? <h2>{error}</h2>:eventItem.map((event) => (
          <Col xs={12} md={12} className="Event-box">
            <Row>
              <Col xs={12} md={8} className="Event-text">
                <div>
                  <h3 className="fs-1 text-success">{event.date} <small className="text-success fs-4 ">{event.month}</small></h3>
                  <h1>{event.name}</h1>
                  <h6 className="text-secondary"> <i class="fas fa-map-marker-alt"></i> {event.Place}</h6>
                <hr />
                <p>{event.details}</p>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
                style={{ paddingLeft: "0px", paddingRight: "0px" }}
              >
                <img src={event.img} alt="" />
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
    );
};

export default Event;