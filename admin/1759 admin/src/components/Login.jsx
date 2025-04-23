import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import PropTypes from "prop-types"; // Import PropTypes

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-xl rounded-lg px-8 py-8 max-w-md">
        <h1 className="text-2xl mb-4 font-bold">Admin Panel</h1>

        <form onSubmit={onSubmitHandler}>
          <fieldset>
            <div className="mb-3 min-w-72">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="rounded-md w-full px-3 py-2 border border-gray-200 outline-8"
                type="email"
                placeholder="youraddress@mail.com"
                required
              />
            </div>

            <div className="mb-3 min-w-72">
              <label className="text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="rounded-md w-full px-3 py-2 border border-gray-200"
                type="password"
                placeholder="Your Password"
                required
              />
            </div>

            <button
              className="mt-2 w-full py-2 px-4 rounded-md bg-black text-white"
              type="submit"
            >
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

// Add prop types validation for the component
Login.propTypes = {
  setToken: PropTypes.func.isRequired, // setToken should be a function and is required
};

export default Login;
