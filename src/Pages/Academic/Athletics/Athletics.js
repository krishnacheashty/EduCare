import React from 'react';
import { Accordion, Nav} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Athletics = () => {
    return (
        <div className='container'>
           <h1 className='text-center my-5 sti'>Welcome to Athletics Page</h1>
           <div className='row mt-5'>
           <div className='col-sm-2 text-start '>
                    <Nav defaultActiveKey="/middle" className="flex-column border ">
                        <Nav.Link as={HashLink} to="/middle" className='bg-success text-white'> Important Links</Nav.Link>
                        <Nav.Link as={HashLink} to="/arts" className='border-bottom'><i class="fas fa-paint-brush"></i> Arts</Nav.Link>
                        <Nav.Link as={HashLink} to="/athletics"><i class="fas fa-trophy "></i> Athletics</Nav.Link>
                    </Nav>

                </div>
                <div className='col-sm-9'>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum impedit laborum expedita accusantium minus commodi perspiciatis placeat consequuntur, adipisci libero perferendis quis qui? Hic tenetur temporibus omnis, veritatis, ratione distinctio, exercitationem impedit nesciunt explicabo accusantium consequuntur maiores? Eius, labore. Tempora nihil fuga laborum. Incidunt quam, eius consequatur facilis id, iste similique ipsam est beatae doloribus et. Eos natus officiis et laudantium. Tenetur laborum et rerum repellendus architecto placeat officia consequatur aspernatur laboriosam quaerat qui quis maiores, quasi, repellat exercitationem minus voluptatibus nostrum a magnam nesciunt veritatis vel! Placeat blanditiis, quos, cumque sed, fuga natus ad debitis nisi minima obcaecati voluptatem.</p>
                    <img className='w-100 py-4' src="http://limpidthemes.com/Themeforest/html/Pathshala/Pathshala-HTML/assets/img/curriculum/athletics.jpg" alt="" />
                    <p className='text-secondary'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    <hr/>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>FOOTBALL</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            <img className='w-100' src="http://limpidthemes.com/Themeforest/html/Pathshala/Pathshala-HTML/assets/img/curriculum/football.jpg" alt="" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>BASE BALL</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            <img className='w-100' src="http://limpidthemes.com/Themeforest/html/Pathshala/Pathshala-HTML/assets/img/curriculum/baseball.jpg" alt="" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>TENNIS</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            <img className='w-100' src="https://media.istockphoto.com/photos/tennis-players-playing-a-match-on-the-court-picture-id817164728?k=20&m=817164728&s=612x612&w=0&h=RCIpXUpXPlbILSNMerp0k3X0a1EQP5stFzRkrNKeZQg=" alt="" />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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

export default Athletics;