import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import "./Teachers.css"

const Teachers = () => {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch("/FakeData.JSON")
            .then((res) => res.json())
            .then((data) => {
                setTeachers(data);
            });
    }, []);


    return (
        <div>

            <section className='client-feedback d-flex align-items-center justify-content-center my-5'>
                <div className='container mb-5 mt-3'>
                    <h3 className='text-center mb-5' style={{ fontSize: '36px', fontWeight: '600' }}>
                        <span style={{ color: '#171B4E' }}>MEET </span>
                        <span className="text-success">OUR TEACHERS</span>
                        <h4 className="mt-3 text-muted">We have the best teachers for every subject</h4>
                    </h3>

                    <div className='row my-5'>
                        {teachers.map((teacher) => (
                            <Teacher key={teacher.id} teacher={teacher} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Teachers;