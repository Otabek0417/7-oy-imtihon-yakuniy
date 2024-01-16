import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../hooks/useSignUp";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogin } from "../hooks/useLogin";
import { FcGoogle } from "react-icons/fc";
function Signup() {
  const { spinner } = useGlobalContext();
  const { isPending, error, signup } = useSignUp();
  const { enterWithGoogle } = useLogin();
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    signup(name.current.value, email.current.value, password.current.value);
    e.preventDefault();
    form.current.reset();
  };
  const handleEnterWithGoogle = (e) => {
    e.preventDefault();
    enterWithGoogle();
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="grid h-screen w-full place-items-center ">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className=" w-full max-w-[400px] rounded-[20px] bg-neutral-100"
        >
          <div className="p-6">
            <h1 className="mb-4 text-[32px] text-gray-900">SignUp</h1>
            <label
              className="mb-2 block text-base font-medium text-gray-900 "
              htmlFor="email"
            >
              Your name
            </label>
            <input
              className="mb-3 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="email"
              autoComplete="off"
              required
              ref={name}
            />
            <label
              className="mb-2 block text-base font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className=" mb-3 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              type="email"
              id="email"
              autoComplete="off"
              required
              ref={email}
            />
            <label
              className="mb-2 block text-base font-medium text-gray-900 "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className=" mb-6 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              type="password"
              id="password"
              required
              ref={password}
            />
            <button
              onClick={handleEnterWithGoogle}
              className="mb-3 flex w-full items-center
            justify-center gap-2 rounded-lg bg-neutral-300 py-2.5 text-base font-bold text-black"
            >
              <FcGoogle /> Google
            </button>
            <button className="mb-3 w-full rounded-lg bg-blue-700 py-2.5 text-base font-light text-white">
              <div className="flex items-center justify-center gap-3">
                Signup
              </div>
            </button>

            <div className="flex justify-center  gap-2">
              <span className="text-gray-900 ">Do you have an account?</span>
              <Link to={"/login"}>
                <button className="text-sky-600">Login</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
