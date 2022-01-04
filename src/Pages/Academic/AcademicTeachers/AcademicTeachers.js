import AcademicTeacher from './AcademicTeacher';

// use useEffect
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
// action
import {getTeacher as listTeacher} from '../../../redux/actions/teacherAction';


const AcademicTeachers = () => {
    const dispatch=useDispatch();
        const getTeacher=useSelector(state=>state.getTeacher);
        
        //  console.log(getTeacher)

     const {teacherItem,loading,error}=getTeacher;


    useEffect(() => {
        dispatch(listTeacher()) 
 
    }, [dispatch]);

    
    return (
        
        <div>

            <section className='client-feedback d-flex align-items-center justify-content-center'>
                <div className='container mb-5'>
                    <div className='row my-5'>
                        {loading ? <h2>Loading ...</h2>:error ? <h2>{error}</h2>:teacherItem.map((teacher)  => (
                            <AcademicTeacher key={teacher.id} teacher={teacher} />
                        ))}
                    </div>




                </div>
            </section>

        </div>
    );
};

export default AcademicTeachers;