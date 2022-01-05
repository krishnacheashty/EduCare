import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import AcademicTeachers from '../AcademicTeachers/AcademicTeachers';

const Middle = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5 sti'>Welcome to Academic Page</h1>
            <div className='row mt-5 '>
                <div className='col-sm-2 text-start '>
                    <Nav defaultActiveKey="/middle" className="flex-column border ">
                        <Nav.Link as={HashLink} to="/middle" className='bg-success text-white'> Important Links</Nav.Link>
                        <Nav.Link as={HashLink} to="/arts" className='border-bottom'><i class="fas fa-paint-brush"></i> Arts</Nav.Link>
                        <Nav.Link as={HashLink} to="/athletics"><i class="fas fa-trophy "></i> Athletics</Nav.Link>
                    </Nav>

                </div>
                <div className='col-sm-9'>
                    <p className='text-secondary'>The only things I do to maintain my academic website up to date are uploading the newest publications and copying them into the news section whenever I post on social networks. On average, I probably log in about once a month and spend the time that I would otherwise waste chatting with my colleagues about their pets. About once a year, I make a more thorough cleanup and update the different sections. This probably adds up to half a days’ worth of time.</p>
                    <img className='w-100 py-4' src="https://i.ibb.co/jDtGTfV/preschool.jpg" alt="" />
                    <p className='text-secondary'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    <hr />
                    <h1>EduCare Timings</h1>
                    <p className='text-secondary'> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Container className=''>
                        <Row xs={2} md={2}>
                            <Col className='border border-secondary text-secondary border-bottom-0 border-end-0'>MON - THU</Col>
                            <Col className='border border-secondary text-secondary border-bottom-0 '>FRI - SAT</Col>
                            <Col className='border border-secondary text-secondary border-end-0'>11:00 TO 15:00</Col>
                            <Col className='border border-secondary text-secondary'>11:00 TO 13:00</Col>
                        </Row>

                    </Container>
                    <hr />
                    <h1>EduCare Teacher</h1>
                    <p className='text-secondary'> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <AcademicTeachers></AcademicTeachers>
                </div>

            </div>
        </div>
    );
};

export default Middle;