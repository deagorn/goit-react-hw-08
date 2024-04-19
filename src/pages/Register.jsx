import { toast } from "react-toastify"
import AuthForm from "../components/AuthForm"

const Register = () => {

    const handleSubmit = (values) => {
        toast.info('Register success')
        console.log(values)
    }

    const initialValues = {
        email: '',
        password: ''
    }

    return (
        <div>
            <AuthForm title='Ragister' onSubmit={handleSubmit} initialValues={initialValues} type='register' />
        </div>
    )
}

export default Register