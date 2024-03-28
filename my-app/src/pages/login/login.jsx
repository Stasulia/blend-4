import { useForm } from 'react-hook-form';
import { login } from '../../api/axiosApi';
//import { useAuth } from '../../contexts/useAuth';

const Login = () => {
  const { register, handleSubmit } = useForm();

  //const { setToken } = useAuth();

//   const onSubmit = formData => {
//     login(formData).then(data => {
//       setToken(data.token);
//     }); 
const onSubmit = async (formData) => {
    const data = await login(formData);
    console.log(data)
};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="email"
        {...register('email', { required: true })}
      />

      <input
        placeholder="password"
        {...register('password', { required: true })}
      />

      <input type="submit" />
    </form>
 );
};

export default Login;