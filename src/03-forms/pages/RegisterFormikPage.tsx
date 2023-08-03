import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ref } from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>

  <Formik
     initialValues={{
         name: '',
         email: '',
         password1: '',
         password2: ''
     }}
     onSubmit={(values) => {
         console.log(values);
     }}
     onReset={(values) =>{
      
     }}
     validationSchema={ Yup.object({
         name: Yup.string()
                         .min(2, 'Debe de tener 2 caracteres o mas')
                         .max(15, 'Debe de tener 15 caracteres o menos')
                         .required('Requerido'),
         email: Yup.string()
                         .email('El correo no tiene un formato valido')
                         .required('Requerido'),
        password1: Yup.string()
                         .min(6, 'Debe de tener 6 caracteres o mas')
                         .required('Requerido'),
        password2: Yup.string()
                         .min(6, 'Debe de tener 6 caracteres o mas')
                         .required('Requerido')
                         .oneOf([ref('password1')], 'Password debe de coincidir')
     })
     }>

{ ({ handleReset }) => (

      <Form>

            <MyTextInput 
              label='Name' 
              name='name' 
              placeholder='Name'
            />

            <MyTextInput 
              label='Email Address' 
              name='email' 
              placeholder='maria@google.com'
              type='email'
            />

            <MyTextInput 
              label='Password' 
              name='password1' 
              type='password'
            />        

            <MyTextInput 
              label='Repeat Password' 
              name='password2' 
              type='password'
            />

        <button type="submit">Create</button>
        <button type="button" onClick={ handleReset }>Reset Form</button>

        </Form>
        )
      }
        </Formik>
    </div>
  )
}

