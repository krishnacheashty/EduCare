import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const MakeTeacher = () => {
    // React hook form for extra form validation and error message
    const { register, handleSubmit, reset } = useForm();

    // handle redirected to user booking
    let history = useHistory();
    function handleRedirect() {
        // console.log("redirect here")
        history.push('/admin');
    }



    const onSubmit = data => {


        axios.post('https://edu-care-sarver.onrender.com/user/teacher', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data entry successfull');
                    reset();
                }
            })
            .then(() => {
                handleRedirect();
            });



    }
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center m-3">
            <div className="container row">

                <div className='mt-3 col-md-12 col-sm-12'>

                    <div className='row'>
                        <div className='col-md-12'>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className='login-form shadow bg-white rounded text-left p-3'
                            >
                                <h4 className='font-weight-bold mb-3'>Admin Can Make Teacher.</h4>
                                <div className='form-group mt-2'>
                                    <input
                                        className='form-control'
                                        
                                        type='text'
                                        placeholder='roll'
                                        {...register('roll', { required: true })}
                                        required
                                    />
                                </div>

                                <div className='form-group mt-2'>

                                    <input
                                        className='form-control'
                                        name='email'
                                        placeholder='Email'
                                        type='text'
                                        {...register('email', { required: true })}
                                        required
                                    />
                                </div>

                                <div className='form-group mt-2'>
                                    <button
                                        style={{ width: '100%' }}
                                        className='btn btn-primary'
                                        type='submit'
                                    >
                                        Make Teacher
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>


        </div>
        </div>
    );
};

export default MakeTeacher;