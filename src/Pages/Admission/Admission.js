import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Subscription from '../Home/Subscription/Subscription';

const Admission = () => {



    // React hook form for extra form validation and error message
    const { register, handleSubmit, reset } = useForm();

    // handle redirected to user booking
    let history = useHistory();
    function handleRedirect() {
        // console.log("redirect here")
        history.push('/home');
    }



    const onSubmit = data => {


        axios.post('backendlink here', data)
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
        <div className="d-flex justify-content-center align-items-center m-3">
            <div className="container row">

                <div className='mt-3 col-md-12 col-sm-12'>

                    <div className='row'>
                        <div className='col-md-12'>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className='login-form shadow bg-white rounded text-left p-3'
                            >
                                <h4 className='font-weight-bold mb-3'>Apply for Admission</h4>
                                <div className='form-group mt-2'>
                                    <input
                                        className='form-control'
                                        name='name'
                                        type='text'
                                        placeholder='Student Name'
                                        {...register('name', { required: true })}
                                        required
                                    />
                                </div>

                                <div className='form-group mt-2'>
                                    <input
                                        className='form-control'
                                        name='parent_name'
                                        type='text'
                                        placeholder='Parent Name'
                                        {...register('parent_name', { required: true })}
                                        required
                                    />

                                </div>

                                <div className='form-group mt-2'>
                                    <input
                                        className='form-control'
                                        name='class'
                                        type='text'
                                        placeholder='Class'
                                        {...register('class', { required: true })}
                                        required
                                    />
                                </div>


                                <div className='form-group mt-2'>
                                    <input
                                        className='form-control'
                                        name='address'
                                        type='text'
                                        placeholder='Address'
                                        {...register('address', { required: true })}
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
                                        Apply for Admission
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Subscription></Subscription>
            </div>


        </div>

    );
};

export default Admission;

