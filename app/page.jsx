import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="bg-red-500 flex flex-col item-center justify-center">
      <div className="flex items-center justify-center w-full pt-20 px-5 pb-10 bg-[url('/images/ass.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="rounded-2xl bg-pink-700 p-2 md:w-5/12">
          <Image
            className="rounded-xl md:w-full"
            src="/images/book.jpg"
            alt="book"
            height={400}
            width={400}
          />
        </div>
      </div>
      <div className=" flex items-center justify-center flex-col gap-3 bg-white py-14 md:py-28 md:gap-8">
        <h1 className="font-bold text-4xl w-10/12 tracking-wide md:4/12 lg:w-5/12 md:text-center lg:text-5xl">
          Discover your next favorite book today!
        </h1>
        <p className="text-base w-10/12 md:w-7/12 lg:w-4/12 md:text-center md:text-lg">
          Explore a world of <strong>stories and adventures</strong> waiting to
          be discovered in books.
        </p>
      </div>
      <div className="bg-slate-300 flex h-full">
        <div className="w-7/12 py-20 px-5 flex items-start justify-center flex-col md:items-center">
          <Link
            href="/explore"
            className="w-8/12 text-left font-bold pl-5 lg:w-4/12"
          >
            Tap in for recommendations
          </Link>
        </div>
        <div className="w-5/12 py-20 bg-[url('/images/un.jpg')] bg-no-repeat bg-center bg-cover"></div>
      </div>
    </section>
  );
};

export default page;
