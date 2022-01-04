import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Event.css'

import { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';

import {getEventSecond as listEventSecond} from '../../redux/actions/eventSecondAction';

const Event2 = () => {
  const dispatch=useDispatch();
  const getEventSecond=useSelector(state=>state.getEventSecond);
  
  // console.log(getEvent)

const {eventSecondItem,loading,error}=getEventSecond;


useEffect(() => {
  dispatch(listEventSecond()) 

}, [dispatch]);
  
    return (
        <Container>
      <Row>
        {loading ? <h2>Loading ...</h2>:error ? <h2>{error}</h2>:eventSecondItem.map((Event) => (
          <Col xs={12} md={12} className="Event-box">
            <Row>
              <Col xs={12} md={8} className="Event-text">
                <div>
                  <h3 className="fs-1 text-success">{Event.date} <small className="text-success fs-4 ">{Event.month}</small></h3>
                  <h1>{Event.name}</h1>
                  <h6 className="text-secondary"> <i class="fas fa-map-marker-alt"></i> {Event.Place}</h6>
                <hr />
                <p>{Event.details}</p>
                </div>
              </Col>
              <Col
                xs={12}
                md={4}
                style={{ paddingLeft: "0px", paddingRight: "0px" }}
              >
                <img src={Event.img} alt="" />
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
    );
};

export default Event2;