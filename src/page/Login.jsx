import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogin } from "../hooks/useLogin";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const { spinner } = useGlobalContext();
  const { isPending, error, login, enterWithGoogle } = useLogin();
  const form = useRef();
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    login(email.current.value, password.current.value);
    e.preventDefault();
    form.current.reset();
  };

  const handleEnterWithGoogle = (e) => {
    e.preventDefault();
    enterWithGoogle();
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="grid h-screen w-full place-items-center">
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="mx-auto mt-8 w-full max-w-[400px] rounded-[20px] bg-neutral-100"
        >
          <div className="p-[32px]">
            <h1 className="mb-10 text-[32px] text-gray-900">Login</h1>
            <label
              className="mb-2 block text-base font-medium text-gray-900 "
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className=" mb-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900  focus:border-blue-500 focus:ring-blue-500 "
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
              autoComplete="off"
              required
              ref={password}
            />
            <button
              onClick={handleEnterWithGoogle}
              className="mb-6 flex w-full items-center
            justify-center gap-2 rounded-lg bg-neutral-300
             p-2.5 text-base font-bold text-black"
            >
              <FcGoogle /> Google
            </button>
            <button className="mb-6 w-full rounded-lg bg-blue-700 py-2.5 text-base font-medium text-white">
              <div className="flex items-center justify-center gap-3">
                Login to your account
              </div>
            </button>
            <div className="flex justify-center  gap-2">
              <span className="text-gray-900 ">Don’t have an account?</span>
              <Link to={"/signup"}>
                <button className="text-sky-600">Sign Up</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
