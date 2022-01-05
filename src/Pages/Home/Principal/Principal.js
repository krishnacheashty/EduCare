import React from 'react';
import { Button } from 'react-bootstrap';

const Principal = () => {
    return (
        <div className='container bg-light'>

            <div className='row'>
                <div className='col-sm-5'>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />

                </div>
                <div className='col-sm-7 py-4'>
                    <p className='fw-bold text-muted'><i className="fas fa-award"></i> MEET OUR STAR <i className="fas fa-award"></i></p>
                    <h2>MEET OUR PRINCIPAL</h2>
                    <p>As the principal, Mr. John is the face of the school. You’ll lead teachers and staff, set goals and ensure students meet their learning objectives. Overseeing your school’s day-to-day operations means handling disciplinary matters, managing a budget and hiring teachers and other personnel.

                        Logistics, schedules, teacher and staff evaluations, and public relations fall under the purview of school principals. And you have to take the lead in planning Back to School Night and college admissions/jobs fairs. You will probably have the help of one or more assistant principals and/or auxiliary clerical workers.

                        As principal, you’ll typically work out of an office in your school’s main building. But you’re not confined to an office — principals often sit in on classes, host school assemblies, attend off-site meetings and represent their school at conferences and local or regional events.</p>
                    <h5>Mr JOHN DOE, M.D, P.C</h5>
                    <Button variant="outline-success"><i className="fas fa-mouse-pointer"></i> KNOW MORE</Button>{' '}
                </div>

            </div>


        </div>
    );
};

export default Principal;