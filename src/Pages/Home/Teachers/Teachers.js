
import Teacher from '../Teacher/Teacher';
import "./Teachers.css"
// use useEffect
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// action
import { getTeacher as listTeacher } from '../../../redux/actions/teacherAction'


const Teachers = () => {

    const dispatch = useDispatch();
    const getTeacher = useSelector(state => state.getTeacher);

    // console.log(getTeacher)

    const { teacherItem, loading, error } = getTeacher;


    useEffect(() => {
        dispatch(listTeacher())

    }, [dispatch]);


    return (
        <div>

            <section className='client-feedback d-flex align-items-center justify-content-center my-5'>

                <div className='container mb-5 mt-3'>
                    <h3 className='text-center mb-5' style={{ fontSize: '36px', fontWeight: '600' }}>
                        <span style={{ color: '#171B4E' }}>MEET </span>
                        <span className="text-success">OUR TEACHERS</span>

                        <h4 className="mt-3 text-muted">We have the best teachers for every subject</h4>
                        <h4 className="text-center mb-5 mt-3">Teachers are the secret of our long term success</h4>

                    </h3>


                    <div className='row my-5'>
                        {loading ? <h2>Loading ...</h2> : error ? <h2>{error}</h2> : teacherItem.map((teacher) => (
                            <Teacher key={teacher.id} teacher={teacher} />
                        ))}
                    </div>




                </div>
            </section>

        </div>
    );
};

export default Teachers;