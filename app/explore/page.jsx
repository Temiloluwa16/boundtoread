import BookList from "@/components/explore/bookList";
import Latest from "@/components/explore/latest";
import Link from "next/link";

const Page = () => {
  return (
    <section className="pt-20 pb-5 px-5 flex flex-col gap-10 items-center justify-center bg-accent-2">
      {/* Header Section */}
      <div className="pt-10 flex flex-col items-center justify-center gap-4 text-white">
        <h1 className="text-5xl font-serif text-center">
          Make your E-Bookshelf!
        </h1>
        <p className="font-medium">Discover your next favorite book today!</p>
        <Link
          className="text-sm bg-white text-black py-1 px-3 rounded-lg"
          href="/books"
        >
          View all books
        </Link>
      </div>

      {/* Scrolling Section */}
      <div className="relative flex flex-col justify-center gap-5 w-full">
        <h2 className="text-xl font-bold text-accent-1">Top Rated</h2>
        {/* Book Cards */}
        <BookList />
        <button className="absolute bottom-2.5 flex items-center justify-center right-0 left-0 text-sm text-white">
          See More
        </button>
      </div>

      <div className="relative flex flex-col justify-center gap-5 w-full">
        <h2 className="text-xl font-bold text-accent-1">Recommended</h2>
        {/* Book Cards */}
        <Latest />
      </div>
    </section>
  );
};

export default Page;
