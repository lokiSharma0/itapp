import Link from "next/link";
import Animated_text from "@app/login/_animatedtext";

const RegestrationLayout = () => {
  return (
    <>
      <div className="flex items-center max-w-96 justify-center  bg-gray-100 mb-14">
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-5 text-center">Join us</h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 "
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.confirmPassword "
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Register
          </button>

          <div className="mt-4 text-center">
            <span className="text-gray-700">Already have an account?</span>
            <Link className="text-blue-500 hover:underline ml-1" href="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
      <Animated_text />
    </>
  );
};

export default RegestrationLayout;
