import React, { useEffect, useState } from 'react';
import Teacher from '../../Home/Teacher/Teacher';

const AcademicTeachers = () => {
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

            <section className='client-feedback d-flex align-items-center justify-content-center'>
                <div className='container mb-5'>
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

export default AcademicTeachers;