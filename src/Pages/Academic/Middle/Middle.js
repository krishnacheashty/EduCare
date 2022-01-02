import React from 'react';
import { Col, Container, Nav, Row  } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import AcademicTeachers from '../AcademicTeachers/AcademicTeachers';

const Middle = () => {
    return (
        <div className='container'>
           <h1 className='text-center my-5 sti'>Welcome to Academic Page</h1>
           <div className='row mt-5'>
                <div className='col-sm-3 text-center'>
                <Nav defaultActiveKey="/middle" className="flex-column">
                <Nav.Link as={HashLink} to="/middle">Important Links</Nav.Link>
                <Nav.Link as={HashLink} to="/arts">Arts</Nav.Link>
                <Nav.Link as={HashLink} to="/athletics">Athletics</Nav.Link>
            </Nav>

                </div>
                <div className='col-sm-9'>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum impedit laborum expedita accusantium minus commodi perspiciatis placeat consequuntur, adipisci libero perferendis quis qui? Hic tenetur temporibus omnis, veritatis, ratione distinctio, exercitationem impedit nesciunt explicabo accusantium consequuntur maiores? Eius, labore. Tempora nihil fuga laborum. Incidunt quam, eius consequatur facilis id, iste similique ipsam est beatae doloribus et. Eos natus officiis et laudantium. Tenetur laborum et rerum repellendus architecto placeat officia consequatur aspernatur laboriosam quaerat qui quis maiores, quasi, repellat exercitationem minus voluptatibus nostrum a magnam nesciunt veritatis vel! Placeat blanditiis, quos, cumque sed, fuga natus ad debitis nisi minima obcaecati voluptatem.</p>
                    <img className='w-100 py-4' src="http://limpidthemes.com/Themeforest/html/Pathshala/Pathshala-HTML/assets/img/curriculum/preschool.jpg" alt="" />
                    <p className='text-secondary'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    <hr/>
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
                <hr/>
                <h1>EduCare Teacher</h1>
                <p className='text-secondary'> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <AcademicTeachers></AcademicTeachers>
                </div>
                
        </div>
        </div>
    );
};

export default Middle;