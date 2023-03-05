import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getStudent as listStudent} from "../../../../redux/actions/studentAction"

const Student = () => {
    const dispatch=useDispatch()
    const getStudent=useSelector(state=>state.getStudent);

    const {studentItem,loading,error}=getStudent;

    useEffect(()=>{
        dispatch(listStudent())
    },[dispatch])
    return (
        <Container className='mt-3'>
            <Table striped bordered hover variant="dark" responsive="sm">
                             <thead>
                               <tr>
                                 <th>Student ID</th>
                                 <th>Name</th>
                                 <th>Class</th>
                                 <th>Email</th>
                               </tr>
                             </thead>
            {loading ? <h2>Loading ...</h2>:error ? <h2>{error}</h2>:studentItem.map((student) => (<tbody>
                               <tr>
                                 <td>{student._id}</td>
                                 <td>{student.name}</td>
                                 <td>{student.class}</td>
                                 <td>{student.email}</td>
                               </tr>
                               
                             </tbody>
                           
                        ))}
            </Table>
           
        </Container>
    );
};

export default Student;