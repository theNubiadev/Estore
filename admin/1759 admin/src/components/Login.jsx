import { useState } from "react";
import axios from 'axios'
import {backendUrl} from '../App';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  const onSubmitHandler = async (e) => {
      try {
        e.preventDefault();
       // console.log(email, password);
        const response = await axios.post(backendUrl + 'api/user/admin' , {email,password})
        console.log(response);
      } 
      catch (error) {
        console.log(error); 
      }
  }
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white  shadow-md rounded-lg px-8 py-8 max-w-md">
        <h1 className="text-2xl mb-4 font-bold">Admin Panel</h1>

        <form action="" onSubmit={onSubmitHandler}>
          <fieldset>
            <div className="mb-3 min-w-72">
              <label className="text-sm font-mediium text-gray-700 mb-2">
                Email Address
              </label>
              <input
              onChange={(e)=>setEmail(e.target.value)}
                value={email}
                className="rounded-md w-full px-3 py-2 border border-gray-200 outline-8"
                type="email"
                placeholder="youradress@mail.com"
                required
              />
            </div>

            <div className="mb-3 min-w-72">
              <label className="text-sm font-mediium text-gray-700 mb-2">
                Password
              </label>
              <input
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
                className="rounded-md w-full px-3 py-2 border border-gray-200 "
                type="password"
                placeholder="Your Password"
                required
              />
            </div>

            <button
              className="mt-2 w-full py-2 px-4 rounded-md bg-black text-white  "
              type="submit"
            >
              {" "}
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Login;
