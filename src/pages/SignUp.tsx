import React, { useState } from "react";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { toast } = useToast();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      await signup(data.email, data.password, data.name);
      toast({ title: "Account Created Successfully" });
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError("There was an error creating the account");
      console.error("error", e);
      alert(e);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen my-20">
      <div className="w-full max-w-md px-5 mx-auto flex flex-col items-center">
        <Logo />
        <h2 className="text-2xl font-medium mt-8">
          Create An
          <span className="text-lightBlue"> Account</span>
          😉
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mt-6 space-y-5 relative"
        >
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
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Input
              id="password"
              type="password"
              className="w-full mt-1 py-5 focus:border-lightBlue"
              placeholder="Your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Input
              id="confirmPassword"
              type="password"
              className="w-full mt-1 py-5 focus:border-lightBlue"
              placeholder="Confirm Your password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div>
            {error && (
              <p className="text-red-600 text-center mb-2">
                There was an Error: {error}
              </p>
            )}
            <Button
              type="submit"
              className="w-full font-medium text-lg disabled:opacity-65 disabled:cursor-not-allowed"
              variant="secondary"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
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
