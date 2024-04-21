import { toast } from "react-toastify"
import AuthForm from "../components/AuthForm"
import { useDispatch } from "react-redux"
import { loginThunk } from "../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const Login = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (values) => {
        dispatch(loginThunk(values)).unwrap()
            .then(data => {toast.info(`Welcome ${data.user.name}!`), navigate('/')})
            .catch(error => toast.error(error))
    }

    const initialValues = {
        email: '',
        password: '',
        name: ''
    }

  return (
      <div>
          <AuthForm title='Login' onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  )
}

export default Login