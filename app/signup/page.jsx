import Link from "next/link";

const SignUpPage = () => {
  return (
    <section className="pt-20 h-screen pb-5 px-5 flex flex-col gap-10 items-center justify-center bg-accent-2">
      {/* Header Section */}
      <div className="pt-10 flex flex-col items-center justify-center gap-4 text-white">
        <h1 className="text-4xl font-serif text-center">Create Your Account</h1>
        <p className="font-medium">Join us and discover amazing books!</p>
      </div>

      {/* Sign-Up Form */}
      <form className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-1"
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-1"
        />
        <button
          type="submit"
          className="bg-accent-1 text-white py-3 rounded-lg hover:bg-accent-1/90"
        >
          Sign Up
        </button>
        <p className="text-xs text-center text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-accent-1 hover:underline">
            Log In
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignUpPage;
