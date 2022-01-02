import React from 'react';
import { Button } from 'react-bootstrap';

const Principal = () => {
    return (
        <div className='container bg-gray'>

            <div className='row'>
                <div className='col-5'>
                    <img
                        className="d-block w-100 h-100"
                        src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />

                </div>
                <div className='col-7 py-4'>
                    <p className='fw-bold'><i className="fas fa-award"></i> MEET OUR STAR <i className="fas fa-award"></i></p>
                    <h2>MEET OUR PRINCIPAL</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum impedit laborum expedita accusantium minus commodi perspiciatis placeat consequuntur, adipisci libero perferendis quis qui? Hic tenetur temporibus omnis, veritatis, ratione distinctio, exercitationem impedit nesciunt explicabo accusantium consequuntur maiores? Eius, labore. Tempora nihil fuga laborum. Incidunt quam, eius consequatur facilis id, iste similique ipsam est beatae doloribus et. Eos natus officiis et laudantium. Tenetur laborum et rerum repellendus architecto placeat officia consequatur aspernatur laboriosam quaerat qui quis maiores, quasi, repellat exercitationem minus voluptatibus nostrum a magnam nesciunt veritatis vel! Placeat blanditiis, quos, cumque sed, fuga natus ad debitis nisi minima obcaecati voluptatem.</p>
                    <h5>Mr JOHN DOE, M.D, P.C</h5>
                    <Button variant="outline-success"><i className="fas fa-mouse-pointer"></i> KNOW MORE</Button>{' '}
                </div>

            </div>


        </div>
    );
};

export default Principal;