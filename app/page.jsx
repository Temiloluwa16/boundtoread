"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <section className="bg-red-500 flex flex-col item-center justify-center overflow-hidden">
      <div className="flex items-center justify-center w-full pt-20 px- pb-10 bg-[url('/images/ass.jpg')] bg-no-repeat bg-center bg-cover">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-pink-700 p-2 w-11/12 md:w-9/12 lg:w-5/12"
        >
          <div className="relative w-full h-72 md:h-[400px]">
            <Image
              className="rounded-xl"
              src="/images/book.jpg"
              alt="book"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-center flex-col gap-3 bg-white py-14 md:py-28 md:gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-bold text-4xl w-11/12 tracking-wide md:4/12 lg:w-5/12 md:text-center lg:text-5xl"
        >
          Discover your next favorite book today!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base w-11/12 md:w-7/12 lg:w-4/12 md:text-center md:text-lg"
        >
          Explore a world of <strong>stories and adventures</strong> waiting to
          be discovered in books.
        </motion.p>
      </div>
      <div className="bg-slate-300 flex h-full">
        <div className="w-7/12 py-20 px-5 flex items-start justify-center flex-col md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/explore"
              className="w-8/12 text-left font-bold md:pl-5 lg:w-4/12"
            >
              Tap in for recommendations
            </Link>
          </motion.div>
        </div>
        <div className="w-5/12 py-20 bg-[url('/images/un.jpg')] bg-no-repeat bg-center bg-cover"></div>
      </div>
    </section>
  );
};

export default Page;
