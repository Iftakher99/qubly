import logo1 from './img/logo/sky-4.png';
import logo2 from './img/logo/react.png';
import logo3 from './img/logo/airbnb.png';
import logo4 from './img/logo/accenture-4.png';
import Button from './Button';
const SignUpForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-8 lg:space-y-0 pt-4">
      {/* Left Section - Text and Logos */}
      <div className="lg:w-1/2 w-full">
        <h3 className="text-3xl font-bold text-center lg:text-left px-4 lg:px-0">
          See why the world&apos;s best companies use Qubly to become truly
          data-driven.
        </h3>

        {/* Divider with "Trusted by" */}
        <div className="flex items-center justify-center lg:justify-start py-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-600 text-lg font-semibold">
            Trusted by
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Logos Section */}
        <div>
          <div className="flex justify-evenly items-center flex-wrap gap-4">
            <img src={logo1} alt="Logo 1" className="w-1/8 lg:w-1/6" />
            <img src={logo2} alt="Logo 2" className="w-1/8 lg:w-1/6" />
          </div>
          <div className="flex mt-10 justify-evenly items-center flex-wrap gap-4">
            <img src={logo3} alt="Logo 3" className="w-1/4 lg:w-1/4" />
            <img src={logo4} alt="Logo 4" className="w-1/4 lg:w-1/4" />
          </div>
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="bg-purple-100 p-4 w-full lg:w-1/3 mt-14 lg:mt-0">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-auto lg:-mt-10">
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>
          <Button>Start Your Free Trial</Button>

          <div className="space-y-4 mt-6">
            <input
              type="email"
              placeholder="Your primary email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Re-type Password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google Sign In Button */}
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 hover:bg-gray-100">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            <span>Sign in with Google</span>
          </button>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-500">
              Already have an account?{' '}
              <a href="#" className="text-purple-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
