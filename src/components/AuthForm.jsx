import { ErrorMessage, Field, Form, Formik } from "formik"
import styles from "./AuthForm.module.css";
import { Link } from "react-router-dom";

const AuthForm = ({title, onSubmit, initialValues, type, validationScrema}) => {
  return (
    <div className={styles.container}>
      <Formik validationSchema={validationScrema} onSubmit={onSubmit} initialValues={initialValues}>
        <Form className={styles.form}>
          {type === 'register' && <label className={styles.label}>
            Name
            <Field className={styles.input} type='text' name='name' placeholder='Enter your name' />
            <ErrorMessage className={styles.error} name='name' component={'p'} />
          </label> }

          <label className={styles.label}>
            Email
            <Field className={styles.input} type='text' name='email' placeholder='Enter your email' />
            <ErrorMessage className={styles.error} name='email' component={'p'} />
          </label>

          <label className={styles.label}>
            Password
            <Field className={styles.input} type='password' name='password' placeholder='Enter your password' />
            <ErrorMessage className={styles.error} name='password' component={'p'} />
          </label>
          <button className={styles.btn} type="submit">{title}</button>
          <p> You {type === 'register' ? 'already have an account?' : 'dont have an account?'}
            <Link to={type === 'register' ? '/login' : '/register'}>{type === 'register' ? '  Login' : '  Register'}</Link></p>
        </Form>
      </Formik>
    </div>
  )
}

export default AuthForm