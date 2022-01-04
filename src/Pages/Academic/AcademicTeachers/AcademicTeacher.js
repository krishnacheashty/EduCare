import React from 'react';

const AcademicTeacher = (teacher) => {
    return (
        <div>
           <div className='col-md-4 feedback-card mb-4'>
            <div className='d-flex flex-column text-left mb-4 card h-100 p-3'>
                <div className='d-flex align-items-center mb-2'>

                    <img
                        style={{ width: '20%' }}
                        className='mr-2 rounded-circle'
                        src={teacher.img}
                        alt=''
                    />


                    <div className="ms-2">
                        <h5>{teacher.name}</h5>
                        <small>{teacher.Position}</small>
                        <p>{teacher.qualification}</p>
                    </div>
                </div>
                
            </div>
        </div> 
        </div>
    );
};

export default AcademicTeacher;