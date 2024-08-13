import Link from "next/link";

const Login_Layout = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2"
          id="email"
          type="email"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2"
          id="password"
          type="password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Login
      </button>
      <div className="mt-4 text-center">
        <Link className="text-blue-500 hover:underline" href="/forgot-password">
          Forgot Password?
        </Link>
      </div>

      <div className="mt-2 text-center">
        <span className="text-gray-700">Don't have an account?</span>
        <Link
          className="text-blue-500 hover:underline ml-1"
          href="/registration"
        >
          Register
        </Link>
      </div>
    </form>
  );
};

export default Login_Layout;
