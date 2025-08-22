import  { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
function Login() {

  const [currentState, setCurrentState] = useState('Sign Up');
  const { token, setToken, navigate, backendUrl} = useContext(ShopContext)
  
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState('')


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl +
          '/api/v1/user/register',
          { name, email, password });
        toast.success(response.data.message);
        // console.log(response.data);
        if (response.data.success) {
          toast.success(response.data.message)
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(backendUrl +
          '/api/v1/user/login',
          { email, password });
        //  console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        toast.success(response.data.message)   
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
      if (token) {
        navigate('/')
      }
  }, [token])


  return (
    <form  onSubmit={onSubmitHandler}
    className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
        <div className='inline-flex items-center gap-2 mt-10'>
          <p className='text-3xl font-black'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        {currentState === 'Login' ? '' :  <input type="text" name="" onChange={(e) => setName(e.target.value)} 
        className='w-full px-3 py-2 border border-gray-800' id="name" value={name} 
        placeholder='Name' required />  }
       
        <input type="email" name=""  onChange={(e) => setEmail(e.target.value)}
        className='w-full px-3 py-2 border border-gray-800' id="email" value={email}
        placeholder='Email' required />
        <input type="password" name="" 
        className='w-full px-3 py-2 border border-gray-800' id="password" onChange={(e) => setPassword(e.target.value)} 
        value={password}
        placeholder='Password' required />

        <div className='w-full flex justify-between text-sm mt-[8px]'>
            <p className='cursor-pointer'>Forgot your Password?</p>
            {
              currentState === 'Login'
              ? <p onClick={()=> setCurrentState('Sign up')} className='cursor-pointer'>Create Account</p>
              : <p onClick={()=> setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
            }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login