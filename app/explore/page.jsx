"use client";
import BookList from "@/components/explore/bookList";
import Latest from "@/components/explore/latest";
import Link from "next/link";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <section className="pt-20 pb-5 px-5 flex flex-col gap-10 items-center justify-center bg-accent-2">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-10 flex flex-col items-center justify-center gap-4 text-white"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl font-serif text-center"
        >
          Make your E-Bookshelf!
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-medium"
        >
          Discover your next favorite book today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link
            className="text-sm bg-white text-black py-1 px-3 rounded-lg hover:scale-105 transition-transform"
            href="/books"
          >
            View all books
          </Link>
        </motion.div>
      </motion.div>

      {/* Scrolling Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative flex flex-col justify-center gap-5 w-full"
      >
        <h2 className="text-xl font-bold text-accent-1">Top Rated</h2>
        {/* Book Cards */}
        <BookList />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-2.5 flex items-center justify-center right-0 left-0 text-sm text-white"
        >
          See More
        </motion.button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative flex flex-col justify-center gap-5 w-full"
      >
        <h2 className="text-xl font-bold text-accent-1">Recommended</h2>
        {/* Book Cards */}
        <Latest />
      </motion.div>
    </section>
  );
};

export default Page;