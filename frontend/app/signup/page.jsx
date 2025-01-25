"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";
import Link from "next/link";
import { motion } from "framer-motion";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await signUp(data.name, data.email, data.password);
      router.push("/explore");
    } catch (error) {
      console.error("Sign-up failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      className="lg:pt-20 h-screen pb-5 px-5 flex flex-col gap-10 items-center justify-center bg-accent-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <motion.div
        className="pt-10 flex flex-col items-center justify-center gap-4 text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-serif text-center">Create Your Account</h1>
        <p className="font-medium">Join us and discover amazing books!</p>
      </motion.div>

      {/* Sign-Up Form */}
      <motion.form
        className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: "Full name is required" })}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-1"
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-1"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-1"
        />
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        )}

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-1"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs">
            {errors.confirmPassword.message}
          </p>
        )}

        <motion.button
          type="submit"
          className="bg-accent-2 text-white py-3 rounded-lg hover:bg-accent-1/90"
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </motion.button>
        <p className="text-xs text-center text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-accent-1 hover:underline">
            Log In
          </Link>
        </p>
      </motion.form>
    </motion.section>
  );
};

export default SignUpPage;
