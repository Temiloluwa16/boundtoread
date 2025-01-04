import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="lg:pt-20 h-screen pb-5 px-5 flex flex-col gap-10 items-center justify-center bg-accent-2">
      {/* Header Section */}
      <div className="pt-10 flex flex-col items-center justify-center gap-4 text-white">
        <h1 className="text-4xl font-serif text-center">Welcome Back!</h1>
        <p className="font-medium">Log in to access your account.</p>
      </div>

      {/* Login Form */}
      <form className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-1"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-1"
        />
        <div className="flex items-center justify-between">
          <label className="text-xs text-gray-500 flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            Remember Me
          </label>
          <Link href="/forgot-password" className="text-xs text-accent-1 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="bg-accent-2 text-white py-3 rounded-lg hover:bg-accent-1/90"
        >
          Log In
        </button>
        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-accent-1 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
