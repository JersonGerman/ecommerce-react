import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../redux/actions/actionsLogin';
const LoginForm = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const messageWarningAuth = useSelector(state => state.login.messageWarningAuth)

    const submit = data => {
        dispatch(loginThunk(data))
    }
    return (
        <form className="block" onSubmit={handleSubmit(submit)}>
                <p className="text-blue-600 mb-2.5 text-center text-xs">{messageWarningAuth}</p>
                <div className="bg-sky-100 rounded-md mb-3 p-3">
                    <strong className="block mb-2 text-center text-xs text-gray-600">Test data</strong>
                    <div className="mb-1.5 text-xs text-gray-900">
                        <i className="bi bi-envelope mr-2.5 text-xs text-gray-900"></i>
                        taipejerson4@gmail.com
                    </div>
                    <div className="mb-1.5 text-xs text-gray-900">
                        <i className="bi bi-lock mr-2.5 text-xs text-gray-900"></i>
                        pass1234
                    </div>
                </div>
                <div className="mb-2">
                    <label className="text-xs text-gray-800" htmlFor="email">Email</label>
                    <input className="border block rounded-sm mt-1 px-2 py-1.5 text-xs w-full outline-0" type="text" id="email" {...register("email", {required:true})} />
                </div>
                <div className="mb-2">
                    <label className="text-xs text-gray-800" htmlFor="password">Password</label>
                    <input className="border block rounded-sm mt-1 px-2 py-1.5 text-xs w-full outline-0" type="password" id="password" {...register("password", {required:true})} />
                </div>
                {/* <div className="text-blue-600 text-xs text-center">Credential invalid</div> */}
                <button className="bg-red-500 text-white w-full mt-1 mb-2 p-1.5 text-xs" type="submit">Login</button>
            </form>
    )
}
export default LoginForm;