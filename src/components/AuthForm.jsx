import { Field, Form, Formik } from "formik"
import styles from "./AuthForm.module.css";
import { Link } from "react-router-dom";

const AuthForm = ({title, onSubmit, initialValues, type}) => {
  return (
      <div className={styles.container}>
          <Formik onSubmit={onSubmit} initialValues={initialValues}>
              <Form className={styles.form}>
                  {type === 'register' &&  <Field className = {styles.input} type='text' name='name' placeholder='Enter your name' />}
                  <Field className = {styles.input} type = 'text' name = 'email' placeholder = 'Enter your email'/>
                  <Field className = {styles.input} type = 'password' name = 'password' placeholder = 'Enter your password'/>
                  <button className={styles.btn} type="submit">{title}</button>
                  <p> You {type === 'register' ? 'already have an account?' : 'dont have an account?'}
                      <Link to={type === 'register' ? '/login' : '/register'}>{type === 'register' ? '  Login' : '  Register'}</Link></p>
              </Form>
          </Formik>
    </div>
  )
}

export default AuthForm