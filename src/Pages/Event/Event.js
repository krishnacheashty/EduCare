import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Event.css'

const Event = () => {
    const [Events, setEvents] = useState([]);
  useEffect(() => {
    fetch("./EventData.JSON")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
    return (
        <Container>
      <Row>
        {Events.map((Event) => (
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

export default Event;