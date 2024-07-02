import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen my-20">
      <div className="w-full max-w-md px-5 mx-auto flex flex-col items-center">
        <Logo />
        <h2 className="text-2xl font-medium mt-8">
          Create An
          <span className="text-lightBlue"> Account</span>
          😉
        </h2>

        <form className="w-full mt-6 space-y-5 relative">
          {/* GLOW */}
          <div className="absolute size-[100px] bg-lightBlue blur-[90px] -z-10 left-[5%] top-3"></div>

          <div className="bg-transparent back">
            <label
              className="focus:text-lightBlue transition-all duration-300"
              htmlFor="name"
            >
              Name:
            </label>
            <Input
              id="name"
              type="text"
              className="w-full mt-1 py-5 focus:border-lightBlue"
              placeholder="John Doe"
            />
          </div>

          <div className="bg-transparent back">
            <label
              className="focus:text-lightBlue transition-all duration-300"
              htmlFor="email"
            >
              Email:
            </label>
            <Input
              id="email"
              type="email"
              className="w-full mt-1 py-5 focus:border-lightBlue"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Input
              id="password"
              type="password"
              className="w-full mt-1 py-5 focus:border-lightBlue"
              placeholder="Your password"
            />
          </div>

          <div>
            <label htmlFor="confirm_password">Confirm Password:</label>
            <Input
              id="confirm_password"
              type="password"
              className="w-full mt-1 py-5 focus:border-lightBlue"
              placeholder="Confirm Your password"
            />
          </div>

          <div>
            <p className="text-red-600 text-center mb-2">There was an Error!</p>

            <Button
              type="submit"
              className="w-full font-medium text-lg"
              variant="secondary"
            >
              Sign Up
            </Button>
            <div className="text-center mt-3">
              <Link className="group" to="/sign-in">
                Already have an Account?{" "}
                <span className="text-lightBlue group-hover:underline transition-all duration-300">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
