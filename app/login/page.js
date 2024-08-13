import Animated_text from "./_animatedtext";
import Login_Layout from "./loginLayout";
const Login = () => {
  return (
    <section className="flex flex-row py-6">
      <div className="flex items-center justify-center mb-14  bg-gray-100">
        <div>
          <Login_Layout />
        </div>
      </div>
      <Animated_text />
    </section>
  );
};

export default Login;
