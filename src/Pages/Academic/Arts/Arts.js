import React from 'react';
import { Accordion, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Arts = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5 sti'>Welcome to Arts Page</h1>
            <div className='row mt-5'>
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

                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>FINE ARTS</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                <img className='w-100' src="http://limpidthemes.com/Themeforest/html/Pathshala/Pathshala-HTML/assets/img/curriculum/visual-arts.jpg" alt="" />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>VISUAL ARTS</Accordion.Header>
                            <Accordion.Body>
                                Adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                <img className='w-100' src="https://i.ibb.co/6bvjK8r/vartual-art.jpg" alt="" />
                                Holor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>MUSIC</Accordion.Header>
                            <Accordion.Body>
                                Sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                <img className='w-100' src="https://i.ibb.co/C29k7vD/yearin-Review-Best-Music.gif" alt="" />
                                ponsectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>THEATER</Accordion.Header>
                            <Accordion.Body>
                                Sed do eiusmod quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                <img className='w-100' src="https://i.ibb.co/v4yxx7Y/theather.jpg" alt="" />;
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>
        </div>
    );
};


export default Arts;