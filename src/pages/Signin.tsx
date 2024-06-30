import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md px-5 mx-auto flex flex-col items-center">
        <Logo />
        <h2 className="text-2xl font-medium mt-8">
          Sign in to <span className="text-lightBlue">your</span> Account 😊
        </h2>

        <form className="w-full mt-6 space-y-5 relative">
          <div className="absolute size-[100px] bg-lightBlue blur-[90px] -z-10 left-[15%] -top-1/4"></div>

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
            <p className="text-red-600 text-center mb-2">There was an Error!</p>

            <Button
              type="submit"
              className="w-full font-medium text-lg"
              variant="secondary"
            >
              Sign in
            </Button>
            <div className="text-center mt-3">
              <Link className="group" to="/sign-up">
                Dont't have a Account?{" "}
                <span className="text-lightBlue group-hover:underline transition-all duration-300">
                  Sign up
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
