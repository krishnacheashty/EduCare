import React from 'react';




const Teacher = ({ teacher }) => {

    return (

        <div className='col-md-4 teacher-card mb-4'>
            <div className='d-flex flex-column text-left mb-4 card h-100 p-3'>
                <div className='d-flex align-items-center mb-2'>

                    {/* <img
                        style={{ width: '20%' }}
                        className='mr-2 rounded-circle'
                        src={teacher.img}
                        alt=''
                    /> */}


                    <div className="ms-2">
                        <h5>{teacher.name}</h5>
                        <small>{teacher.subject}</small>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Teacher;