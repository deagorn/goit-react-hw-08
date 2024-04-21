import { toast } from "react-toastify"
import AuthForm from "../components/AuthForm"
import { useDispatch } from "react-redux"
import { registerThunk } from "../redux/auth/operations"
import { useNavigate } from "react-router-dom"

const Register = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = (values) => {
        dispatch(registerThunk(values))
            .unwrap()
            .then(data => {toast.info(`Welcome ${data.user.name}!`), navigate('/')})
            .catch(error => toast.error(error))
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