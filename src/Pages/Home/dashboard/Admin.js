import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Admin = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5 sti'>Welcome to Admin page</h1>
            <div className='row mt-5 '>
                <div className='col-sm-2 text-start '>
                    <Nav defaultActiveKey="/middle" className="flex-column border ">
                        <Nav.Link as={HashLink} to="admin" className='bg-success text-white'> Important Links</Nav.Link>
                        <Nav.Link as={HashLink} to="/makeAdmin" className='border-bottom'><i class="fas fa-paint-brush"></i> Make Admin</Nav.Link>
                        <Nav.Link as={HashLink} to="/makeTeacher"><i class="fas fa-trophy "></i> Make Teacher</Nav.Link>
                        <Nav.Link as={HashLink} to="/student"><i class="fas fa-trophy "></i> Student List</Nav.Link>
                    </Nav>

                </div>
                <div className='col-sm-9'>
                    
                    <p className='text-secondary'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    <hr />
                    <h1>EduCare Timings</h1>
                    <p className='text-secondary'> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                
                </div>

            </div>
        </div>
    );
};

export default Admin;