const Page = () => {
  return (
    <section className="pt-20 px-5 flex flex-col gap-10 items-center justify-center">
      {/* Header Section */}
      <div className="pt-10 flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-serif text-center">
          Make your E-Bookshelf!
        </h1>
        <p className="font-medium">Discover your next favorite book today!</p>
      </div>

      {/* Scrolling Section */}
      <div className="flex flex-col justify-center gap-5 w-full">
        <h2 className="text-xl font-bold">Top Rated</h2>
        <div className="flex items-center justify-start bg-red-500 rounded-xl overflow-x-auto whitespace-nowrap p-1 gap-1 scrollbar-hide">
          {/* Book Cards */}
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="w-44 h-36 bg-gray-300 rounded-xl flex-shrink-0"
            ></div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center gap-5 w-full">
        <h2 className="text-xl font-bold">Recommended</h2>
        <div className="flex items-center justify-start rounded-lg overflow-x-auto whitespace-nowrap gap-2 scrollbar-hide">
          {/* Book Cards */}
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="w-56 h-48 bg-gray-300 rounded-lg flex-shrink-0"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
